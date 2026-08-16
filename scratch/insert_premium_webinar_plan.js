const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function run() {
  console.log("Authenticating as admin...");
  const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({
    email: "admin@oyengrid.com",
    password: "password123"
  });

  if (authErr) {
    console.error("Auth error:", authErr);
    return;
  }

  console.log("Authenticated successfully. User ID:", authData.user.id);
  console.log("Inserting Premium Training Suite under Webinars & Events category...");

  // 1. Insert pricing_plans
  const { data: planData, error: planErr } = await supabase
    .from('pricing_plans')
    .insert([
      {
        name: "Premium Training Suite",
        slug: "premium-training-suite-webinar",
        category: "Webinars & Events",
        description: "Professional Training Organizations & Academies",
        price: 299000,
        monthly_price: 299000,
        annual_price: 50000,
        annual_discount_percent: 16,
        currency: "USD",
        billing_period: "month",
        setup_fee: 0,
        trial_days: 0,
        cta_button_label: "Start Premium",
        cta_destination: "/checkout?plan=premium",
        badge: "Premium Suite",
        is_popular: false,
        is_active: true,
        display_order: 3,
        status: "published",
        version: "v1.0.0",
        internal_notes: "Premium Training Suite for Webinars & Events",
        published_by: "Admin"
      }
    ])
    .select();

  if (planErr) {
    console.error("Error inserting plan:", planErr);
    return;
  }

  const planId = planData[0].id;
  console.log("Plan inserted with ID:", planId);

  // 2. Insert AI Allocation
  const { error: aiErr } = await supabase
    .from('pricing_plan_ai_allocation')
    .insert([
      {
        plan_id: planId,
        allocation_type: "fixed",
        tokens_per_month: 1000000,
        tier_level: "Enterprise",
        storage_limit: "20",
        accessible_llm_models: ["GPT-4o Enterprise"]
      }
    ]);

  if (aiErr) console.error("Error inserting AI:", aiErr);

  // 3. Insert Target Audience
  const { error: audErr } = await supabase
    .from('pricing_plan_target_audience')
    .insert([
      {
        plan_id: planId,
        segment: "Professional Training Organizations & Academies",
        recommended_for: ["Professional Academies", "Training Organizations", "Large Bootcamps"],
        organization_size: "Large"
      }
    ]);

  if (audErr) console.error("Error inserting audience:", audErr);

  // 4. Insert Marketing Copy
  const { error: mktErr } = await supabase
    .from('pricing_plan_marketing_copy')
    .insert([
      {
        plan_id: planId,
        cta: "Start Premium",
        headline: "Run training at scale",
        subheadline: "Advanced capabilities for professional training organizations.",
        popular_badge_text: ""
      }
    ]);

  if (mktErr) console.error("Error inserting marketing:", mktErr);

  // 5. Insert Features
  const { error: featErr } = await supabase
    .from('pricing_plan_features')
    .insert([
      { plan_id: planId, feature_name: "Programmes Creation", category: "Core", enabled: true, usage_limit: "Unlimited", display_order: 1 },
      { plan_id: planId, feature_name: "Participant / Learner Seats", category: "Core", enabled: true, usage_limit: "5,000 Seats", display_order: 2 },
      { plan_id: planId, feature_name: "S3 Storage Allocation", category: "Infrastructure", enabled: true, usage_limit: "2 TB", display_order: 3 },
      { plan_id: planId, feature_name: "Attendance & Facial Verification", category: "Analytics", enabled: true, usage_limit: "Advanced", display_order: 4 },
      { plan_id: planId, feature_name: "Graded Assignments & Submissions", category: "Core", enabled: false, usage_limit: "Advanced", display_order: 5 },
      { plan_id: planId, feature_name: "Cryptographic Certificate Issuance", category: "Credentials", enabled: false, usage_limit: "Unlimited PDF & Hash", display_order: 6 },
      { plan_id: planId, feature_name: "Advanced Learner Telemetry", category: "Analytics", enabled: true, usage_limit: "Advanced", display_order: 7 },
      { plan_id: planId, feature_name: "Custom Branding & White Label", category: "Branding", enabled: true, usage_limit: "Full White Label", display_order: 8 },
      { plan_id: planId, feature_name: "Rest API & Webhooks Access", category: "Developer", enabled: true, usage_limit: "Advanced API Access", display_order: 9 },
      { plan_id: planId, feature_name: "OYEN AI Copilot Assistant", category: "AI", enabled: true, usage_limit: "1,000,000 Tokens / mo", display_order: 10 },
      { plan_id: planId, feature_name: "Monthly AI Token Allocation", category: "AI", enabled: true, usage_limit: "1,000,000 Tokens / mo", display_order: 11 },
      { plan_id: planId, feature_name: "24/7 Priority Support SLA", category: "Support", enabled: true, usage_limit: "Priority 24/7", display_order: 12 },
      { plan_id: planId, feature_name: "Branded Custom Domain (SSL)", category: "Branding", enabled: true, usage_limit: "Enabled", display_order: 13 },
      { plan_id: planId, feature_name: "Zoom, Teams & Payment Gateways", category: "Integrations", enabled: true, usage_limit: "Enabled", display_order: 14 }
    ]);

  if (featErr) console.error("Error inserting features:", featErr);

  console.log("All Premium Training Suite records for Webinars & Events inserted successfully!");
}

run();
