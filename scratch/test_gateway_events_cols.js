const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkCol(cols) {
  const { data, error } = await supabase.from('payment_gateway_events').select(cols).limit(1);
  if (error) {
    console.log(`❌ ${cols}: ${error.message}`);
  } else {
    console.log(`✅ ${cols} exist!`);
  }
}

async function run() {
  await checkCol('id');
  await checkCol('transaction_id');
  await checkCol('gateway');
  await checkCol('event_type');
  await checkCol('status');
  await checkCol('received_at');
  await checkCol('processed_at');
  await checkCol('created_at');
  await checkCol('payload');
  await checkCol('id, transaction_id, gateway, event_type, status, received_at, processed_at, created_at, payload');
}

run();
