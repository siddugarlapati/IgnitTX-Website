import fetch from 'node-fetch';
import fs from 'fs';

const supabaseUrl = 'https://isrkbkrznjnirzihdzzr.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!serviceRoleKey) {
  console.error('❌ ERROR: Service role key required!\n');
  console.log('📋 Get your service role key from:');
  console.log('   https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/settings/api\n');
  console.log('📝 Then run:');
  console.log('   export SUPABASE_SERVICE_ROLE_KEY="your_key_here"');
  console.log('   node create-tables.js\n');
  console.log('⚠️  Or simply run the SQL manually in Supabase SQL Editor (easier!)');
  console.log('   File: backend/supabase-schema.sql\n');
  process.exit(1);
}

async function createTables() {
  console.log('🚀 Creating database tables...\n');

  const schema = fs.readFileSync('./supabase-schema.sql', 'utf8');

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceRoleKey,
        'Authorization': `Bearer ${serviceRoleKey}`
      },
      body: JSON.stringify({ query: schema })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    console.log('✅ Tables created successfully!\n');
    console.log('🎉 Database is ready to use!\n');

  } catch (error) {
    console.error('❌ Failed:', error.message);
    console.log('\n💡 EASIER METHOD: Run the SQL manually');
    console.log('   1. Go to: https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/sql/new');
    console.log('   2. Copy all content from: backend/supabase-schema.sql');
    console.log('   3. Paste and click "Run"\n');
  }
}

createTables();
