require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
  const tables = [
    'pricing_plans',
    'pricing_plan_features',
    'pricing_plan_ai_allocation',
    'pricing_plan_target_audience',
    'pricing_plan_marketing_copy'
  ];

  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*');
    console.log(`=== Table: ${table} ===`);
    if (error) {
      console.error(error);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
}
main();
