import pg from 'pg';
import fs from 'fs';

const { Client } = pg;

// Supabase connection string format:
// postgresql://postgres:[YOUR-PASSWORD]@db.jwkaxzatydstkjbnqxcf.supabase.co:5432/postgres

console.log('🚀 Direct PostgreSQL Setup\n');
console.log('⚠️  This requires your database password.\n');
console.log('📋 To get your database password:');
console.log('   1. Go to: https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/settings/database');
console.log('   2. Look for "Connection string" or "Database password"\n');
console.log('💡 EASIER METHOD: Just run the SQL manually in Supabase SQL Editor');
console.log('   It takes 30 seconds and is 100% reliable!\n');
console.log('   Link: https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new\n');

const dbPassword = process.env.SUPABASE_DB_PASSWORD;

if (!dbPassword) {
  console.log('❌ No database password provided.\n');
  console.log('To use this script, run:');
  console.log('   export SUPABASE_DB_PASSWORD="your_password"');
  console.log('   node direct-setup.js\n');
  process.exit(1);
}

async function setupWithPostgres() {
  const client = new Client({
    host: `db.jwkaxzatydstkjbnqxcf.supabase.co`,
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: dbPassword,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('🔌 Connecting to database...');
    await client.connect();
    console.log('✅ Connected!\n');

    const schema = fs.readFileSync('./supabase-schema.sql', 'utf8');
    
    console.log('📝 Executing SQL schema...');
    await client.query(schema);
    
    console.log('✅ Tables created successfully!\n');
    console.log('🎉 Setup complete!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.end();
  }
}

setupWithPostgres();
