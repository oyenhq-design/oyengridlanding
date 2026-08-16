const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testQuery(table, selectString) {
  const { data, error } = await supabase.from(table).select(selectString).limit(1);
  if (error) {
    console.error(`❌ Error on ${table} with select: ${selectString}\nMessage: ${error.message}`);
  } else {
    console.log(`✅ Success on ${table}! Columns exist: ${selectString.replace(/\s+/g, '')}`);
  }
}

async function run() {
  await testQuery('payment_transactions', `
    id, transaction_reference, organization_id, customer_id, plan_id,
    amount, currency, payment_method, gateway, gateway_transaction_id,
    status, failure_reason, gateway_response, metadata,
    initiated_at, paid_at, failed_at, created_at, updated_at
  `);

  await testQuery('payment_refunds', `
    id, transaction_id, refund_reference, gateway_refund_id,
    amount, currency, reason, status, requested_at, processed_at,
    created_at, updated_at
  `);

  await testQuery('payment_chargebacks', `
    id, transaction_id, chargeback_reference, gateway_chargeback_id,
    amount, currency, reason, status, received_at, resolved_at,
    created_at, updated_at
  `);

  await testQuery('payment_gateway_events', `
    id, transaction_id, gateway, event_type, status,
    received_at, processed_at, created_at, updated_at
  `);
}

run();
