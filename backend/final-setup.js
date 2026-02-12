import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://jwkaxzatydstkjbnqxcf.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3a2F4emF0eWRzdGtqYm5xeGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDkxMjc1NiwiZXhwIjoyMDg2NDg4NzU2fQ._XmdtSZUqM9WxzZ2v0GGc3bXzX3LPugfMjZdygFLhK4';

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createTablesDirectly() {
  console.log('🚀 Creating database tables...\n');

  const tables = [
    {
      name: 'on_demand_requests',
      check: async () => {
        const { error } = await supabase.from('on_demand_requests').select('id').limit(1);
        return !error;
      },
      create: async () => {
        // We'll insert a dummy record to force table creation via Supabase
        // This won't work, but let's try the REST API approach
        return false;
      }
    }
  ];

  console.log('⚠️  Automatic table creation via API is not supported by Supabase.\n');
  console.log('📋 Please follow these simple steps:\n');
  console.log('1️⃣  Open this link in your browser:');
  console.log('   👉 https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new\n');
  console.log('2️⃣  Copy the SQL from this file:');
  console.log('   📄 backend/supabase-schema.sql\n');
  console.log('3️⃣  Paste it in the SQL editor and click "Run"\n');
  console.log('✨ It takes 30 seconds!\n');
  console.log('After that, run: node test-connection.js\n');
}

createTablesDirectly();
