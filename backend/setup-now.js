import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://jwkaxzatydstkjbnqxcf.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3a2F4emF0eWRzdGtqYm5xeGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDkxMjc1NiwiZXhwIjoyMDg2NDg4NzU2fQ._XmdtSZUqM9WxzZ2v0GGc3bXzX3LPugfMjZdygFLhK4';

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function setupDatabase() {
  console.log('🚀 Setting up Supabase database automatically...\n');

  try {
    // Read the SQL schema
    const schema = fs.readFileSync('./supabase-schema.sql', 'utf8');
    
    console.log('📝 Executing SQL schema...\n');

    // Execute the SQL using Supabase's query method
    const { data, error } = await supabase.rpc('exec_sql', { 
      sql_query: schema 
    });

    if (error) {
      // If exec_sql doesn't exist, try direct table creation
      console.log('⚠️  exec_sql not available, creating tables individually...\n');
      
      // Create tables one by one
      const tables = [
        {
          name: 'on_demand_requests',
          sql: `
            CREATE TABLE IF NOT EXISTS on_demand_requests (
              id TEXT PRIMARY KEY,
              topic TEXT NOT NULL,
              field TEXT NOT NULL,
              initiator TEXT NOT NULL,
              count INTEGER DEFAULT 1,
              type TEXT DEFAULT 'ONLINE' CHECK (type IN ('ONLINE', 'OFFLINE')),
              status TEXT DEFAULT 'QUEUED' CHECK (status IN ('QUEUED', 'SYNCING', 'PREPARING_CLUSTER')),
              created_at TIMESTAMPTZ DEFAULT NOW()
            );
          `
        },
        {
          name: 'class_applications',
          sql: `
            CREATE TABLE IF NOT EXISTS class_applications (
              id BIGSERIAL PRIMARY KEY,
              request_id TEXT NOT NULL,
              name TEXT NOT NULL,
              roll TEXT NOT NULL,
              github TEXT NOT NULL,
              message TEXT NOT NULL,
              created_at TIMESTAMPTZ DEFAULT NOW()
            );
          `
        },
        {
          name: 'contact_submissions',
          sql: `
            CREATE TABLE IF NOT EXISTS contact_submissions (
              id BIGSERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              subject TEXT,
              message TEXT NOT NULL,
              created_at TIMESTAMPTZ DEFAULT NOW()
            );
          `
        },
        {
          name: 'mentor_applications',
          sql: `
            CREATE TABLE IF NOT EXISTS mentor_applications (
              id BIGSERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              subject TEXT,
              message TEXT NOT NULL,
              created_at TIMESTAMPTZ DEFAULT NOW()
            );
          `
        },
        {
          name: 'contributor_applications',
          sql: `
            CREATE TABLE IF NOT EXISTS contributor_applications (
              id BIGSERIAL PRIMARY KEY,
              full_name TEXT NOT NULL,
              github TEXT NOT NULL,
              engineering_path TEXT NOT NULL,
              motivation TEXT NOT NULL,
              created_at TIMESTAMPTZ DEFAULT NOW()
            );
          `
        }
      ];

      for (const table of tables) {
        console.log(`Creating ${table.name}...`);
        const { error: tableError } = await supabase.rpc('exec_sql', { 
          sql_query: table.sql 
        });
        
        if (tableError) {
          console.log(`⚠️  Could not create ${table.name} via RPC`);
        } else {
          console.log(`✅ ${table.name} created`);
        }
      }
    } else {
      console.log('✅ SQL schema executed successfully!\n');
    }

    // Test the connection
    console.log('🧪 Testing database connection...\n');
    
    const { data: testData, error: testError } = await supabase
      .from('on_demand_requests')
      .select('count')
      .limit(1);

    if (testError) {
      console.error('❌ Test query failed:', testError.message);
      console.log('\n💡 The tables might not exist. Please run the SQL manually:');
      console.log('   1. Go to: https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new');
      console.log('   2. Copy content from: backend/supabase-schema.sql');
      console.log('   3. Paste and click "Run"\n');
    } else {
      console.log('✅ Database connection successful!');
      console.log('✅ All tables are ready!\n');
      console.log('🎉 Setup complete! You can now use the application.\n');
      console.log('📝 Next steps:');
      console.log('   1. Restart the backend server: npm start');
      console.log('   2. Test the INITIATE_PROTOCOL button\n');
    }

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.log('\n💡 Manual setup required:');
    console.log('   1. Go to: https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new');
    console.log('   2. Copy all content from: backend/supabase-schema.sql');
    console.log('   3. Paste and click "Run"\n');
  }
}

setupDatabase();
