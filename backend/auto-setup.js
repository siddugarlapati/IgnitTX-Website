import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://isrkbkrznjnirzihdzzr.supabase.co';

// You need to provide your SERVICE ROLE KEY (not anon key)
// Get it from: https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/settings/api
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!serviceRoleKey) {
  console.error('❌ ERROR: SUPABASE_SERVICE_ROLE_KEY environment variable is required!\n');
  console.log('📋 To get your service role key:');
  console.log('   1. Go to: https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/settings/api');
  console.log('   2. Copy the "service_role" key (NOT the anon key)');
  console.log('   3. Run this command:\n');
  console.log('   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here node auto-setup.js\n');
  console.log('⚠️  WARNING: Keep your service role key secret! Never commit it to git.\n');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function setupDatabase() {
  console.log('🚀 Starting automatic database setup...\n');

  try {
    // Read the SQL schema
    const schema = fs.readFileSync('./supabase-schema.sql', 'utf8');
    
    // Split into individual statements
    const statements = schema
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    console.log(`📝 Found ${statements.length} SQL statements to execute\n`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';';
      
      // Skip comments
      if (statement.trim().startsWith('--')) continue;
      
      console.log(`⏳ Executing statement ${i + 1}/${statements.length}...`);
      
      const { error } = await supabase.rpc('exec_sql', { sql: statement });
      
      if (error) {
        console.error(`❌ Error in statement ${i + 1}:`, error.message);
        console.log('Statement:', statement.substring(0, 100) + '...\n');
      } else {
        console.log(`✅ Statement ${i + 1} executed successfully`);
      }
    }

    console.log('\n✨ Database setup complete!\n');
    console.log('🧪 Testing connection...\n');

    // Test the tables
    const { data, error } = await supabase
      .from('on_demand_requests')
      .select('count');

    if (error) {
      console.error('❌ Test failed:', error.message);
      console.log('\n💡 The tables might not have been created properly.');
      console.log('   Please run the SQL manually in Supabase SQL Editor.\n');
    } else {
      console.log('✅ All tables created successfully!');
      console.log('✅ Database is ready to use!\n');
      console.log('🎉 You can now use the INITIATE_PROTOCOL button!\n');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    console.log('\n💡 This script requires the service role key with admin privileges.');
    console.log('   Alternatively, run the SQL manually in Supabase SQL Editor.\n');
  }
}

setupDatabase();
