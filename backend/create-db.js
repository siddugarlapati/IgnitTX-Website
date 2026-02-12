import fetch from 'node-fetch';
import fs from 'fs';

const projectRef = 'jwkaxzatydstkjbnqxcf';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3a2F4emF0eWRzdGtqYm5xeGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDkxMjc1NiwiZXhwIjoyMDg2NDg4NzU2fQ._XmdtSZUqM9WxzZ2v0GGc3bXzX3LPugfMjZdygFLhK4';

async function createTables() {
  console.log('🚀 Creating database tables via Supabase API...\n');

  const schema = fs.readFileSync('./supabase-schema.sql', 'utf8');

  try {
    const response = await fetch(`https://${projectRef}.supabase.co/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceRoleKey,
        'Authorization': `Bearer ${serviceRoleKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({ 
        query: schema 
      })
    });

    const result = await response.text();
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${result}`);
    }

    console.log('✅ Tables created successfully!\n');
    console.log('Response:', result);

  } catch (error) {
    console.error('❌ API method failed:', error.message);
    console.log('\n📋 Please run the SQL manually (it\'s the most reliable way):');
    console.log('   1. Open: https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new');
    console.log('   2. Copy ALL content from: backend/supabase-schema.sql');
    console.log('   3. Paste into the SQL editor');
    console.log('   4. Click "Run" button\n');
    console.log('✨ This takes less than 1 minute!\n');
  }
}

createTables();
