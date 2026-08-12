require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
  const { data: plans } = await supabase.from('pricing_plans').select('id, name');
  const { data: audience } = await supabase.from('pricing_plan_target_audience').select('*');
  const { data: ai } = await supabase.from('pricing_plan_ai_allocation').select('*');
  const { data: meta } = await supabase.from('pricing_plan_marketing_copy').select('*');
  
  console.log("Audience:", JSON.stringify(audience, null, 2));
  console.log("AI:", JSON.stringify(ai, null, 2));
  console.log("Meta:", JSON.stringify(meta, null, 2));
}
main();
