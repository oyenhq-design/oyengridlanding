const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function run() {
  const tables = ['payment_transactions', 'payment_refunds', 'payment_chargebacks', 'payment_gateway_events'];

  for (const table of tables) {
    console.log(`\n--- Inspecting ${table} ---`);
    // Try to fetch 1 row to see the column structure
    const { data, error } = await supabase.from(table).select('*').limit(1);
    if (error) {
      console.error(`Error querying ${table}:`, error.message);
    } else {
      console.log(`Success! Columns/sample:`, data.length > 0 ? data[0] : 'Table is empty, but query succeeded.');
      
      // Let's try to query an empty select to check structure if it's empty
      if (data.length === 0) {
        // Just select columns from schema if we can or check if we get errors on some fields
        console.log(`Table is empty. Let's inspect column names via select or test some common fields.`);
      }
    }
  }
}

run();
