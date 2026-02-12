import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jwkaxzatydstkjbnqxcf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3a2F4emF0eWRzdGtqYm5xeGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MTI3NTYsImV4cCI6MjA4NjQ4ODc1Nn0.V0XWdUpcxgUMRLrDyXGF6NYmVF-nXVXu0NAnrOuvC6o';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('🔍 Testing Supabase connection...\n');

  try {
    // Test 1: Check if we can query on_demand_requests table
    console.log('1️⃣ Testing on_demand_requests table...');
    const { data: requests, error: requestsError } = await supabase
      .from('on_demand_requests')
      .select('*')
      .limit(5);

    if (requestsError) {
      console.error('❌ Error querying on_demand_requests:', requestsError.message);
      console.log('💡 Make sure you have run the SQL schema in Supabase SQL Editor!\n');
    } else {
      console.log('✅ on_demand_requests table exists');
      console.log(`   Found ${requests.length} records\n`);
    }

    // Test 2: Try to insert a test record
    console.log('2️⃣ Testing insert into on_demand_requests...');
    const testRequest = {
      id: `test-${Date.now()}`,
      topic: 'Test Topic',
      field: 'Test Field',
      initiator: 'Test User',
      type: 'ONLINE',
      status: 'QUEUED',
      count: 1
    };

    const { data: insertData, error: insertError } = await supabase
      .from('on_demand_requests')
      .insert([testRequest])
      .select()
      .single();

    if (insertError) {
      console.error('❌ Error inserting test record:', insertError.message);
      console.log('💡 Check if RLS policies are set correctly!\n');
    } else {
      console.log('✅ Successfully inserted test record');
      console.log('   ID:', insertData.id);
      
      // Clean up test record
      await supabase
        .from('on_demand_requests')
        .delete()
        .eq('id', insertData.id);
      console.log('   ✅ Test record cleaned up\n');
    }

    // Test 3: Check other tables
    console.log('3️⃣ Checking other tables...');
    const tables = [
      'class_applications',
      'contact_submissions',
      'mentor_applications',
      'contributor_applications'
    ];

    for (const table of tables) {
      const { error } = await supabase
        .from(table)
        .select('id')
        .limit(1);

      if (error) {
        console.log(`   ❌ ${table}: ${error.message}`);
      } else {
        console.log(`   ✅ ${table}: exists`);
      }
    }

    console.log('\n✨ Connection test complete!');
    console.log('\n📋 Next steps:');
    console.log('   1. If tables don\'t exist, run backend/supabase-schema.sql in Supabase SQL Editor');
    console.log('   2. Make sure RLS policies are enabled');
    console.log('   3. Start the backend server: cd backend && npm start');
    console.log('   4. Start the frontend: npm run dev');

  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

testConnection();
