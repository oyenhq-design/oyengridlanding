const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  const { data: plans } = await supabase.from('pricing_plans').select('*');
  console.log('Plans:', plans);
  
  const { data: features } = await supabase.from('pricing_plan_features').select('*');
  console.log('Features:', features);
  
  const { data: ai } = await supabase.from('pricing_plan_ai_allocation').select('*');
  console.log('AI Allocations:', ai);

  const { data: audience } = await supabase.from('pricing_plan_target_audience').select('*');
  console.log('Target Audience:', audience);

  const { data: marketing } = await supabase.from('pricing_plan_marketing_copy').select('*');
  console.log('Marketing Copy:', marketing);
}

checkSchema();
