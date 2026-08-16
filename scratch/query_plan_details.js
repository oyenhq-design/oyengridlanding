const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function run() {
  const planId = "66936e45-cc83-47e7-b524-99127612b302";
  console.log("DETAILS FOR: Basic Training Tier");

  const [aiRes, audRes, mktRes, featRes] = await Promise.all([
    supabase.from("pricing_plan_ai_allocation").select("*").eq("plan_id", planId).maybeSingle(),
    supabase.from("pricing_plan_target_audience").select("*").eq("plan_id", planId).maybeSingle(),
    supabase.from("pricing_plan_marketing_copy").select("*").eq("plan_id", planId).maybeSingle(),
    supabase.from("pricing_plan_features").select("*").eq("plan_id", planId).order("display_order")
  ]);

  console.log("\n--- AI Allocation ---");
  console.log(JSON.stringify(aiRes.data, null, 2));

  console.log("\n--- Target Audience ---");
  console.log(JSON.stringify(audRes.data, null, 2));

  console.log("\n--- Marketing Copy ---");
  console.log(JSON.stringify(mktRes.data, null, 2));

  console.log("\n--- Features ---");
  console.log(JSON.stringify(featRes.data, null, 2));
}

run();
