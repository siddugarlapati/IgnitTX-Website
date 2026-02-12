import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://isrkbkrznjnirzihdzzr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzcmtia3J6bmpuaXJ6aWhkenpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MzIwNDAsImV4cCI6MjA4NjMwODA0MH0.PxnUgb8TWpC6uQ4Kbo0_WlsCdg3WxdOUaThOHmfIY9U';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🔧 Setting up Supabase database...\n');
console.log('⚠️  IMPORTANT: This script cannot create tables automatically.');
console.log('   You need to run the SQL schema manually in Supabase.\n');

console.log('📋 Follow these steps:\n');
console.log('1. Go to: https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/sql/new');
console.log('2. Copy the SQL from: backend/supabase-schema.sql');
console.log('3. Paste it into the SQL Editor');
console.log('4. Click "Run" button\n');

console.log('📄 Here is the SQL you need to run:\n');
console.log('=' .repeat(80));

try {
  const schema = fs.readFileSync('./supabase-schema.sql', 'utf8');
  console.log(schema);
  console.log('=' .repeat(80));
} catch (error) {
  console.error('❌ Could not read schema file:', error.message);
}

console.log('\n✨ After running the SQL, test the connection with:');
console.log('   node test-connection.js\n');
