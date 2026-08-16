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
    password: "password"
  });

  if (authErr) {
    console.error("Auth error:", authErr);
    return;
  }

  console.log("Authenticated successfully. User ID:", authData.user.id);
  console.log("Inserting Webinar & Event pricing plan...");
  
  // 1. Insert pricing_plans
  const { data: planData, error: planErr } = await supabase
    .from('pricing_plans')
    .insert([
      {
        name: "Basic Webinar Tier",
        slug: "basic-webinar-tier",
        category: "Webinars & Events",
        description: "Launch events and track live attendance.",
        price: 15000,
        monthly_price: 15000,
        annual_price: 150000,
        annual_discount_percent: 16,
        currency: "NGN",
        billing_period: "month",
        setup_fee: 0,
        trial_days: 7,
        cta_button_label: "Get Started",
        cta_destination: "/pricing/basic-webinar",
        badge: "Event Starter",
        is_popular: false,
        is_active: true,
        display_order: 1,
        status: "published",
        version: "v1.0.0",
        internal_notes: "Initial seed for Webinars & Events",
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
        allocation_type: "basic",
        tokens_per_month: 250000,
        tier_level: "Basic",
        storage_limit: "5 GB",
        accessible_llm_models: ["GPT-4o Enterprise", "Claude 3.5 Sonnet"]
      }
    ]);

  if (aiErr) console.error("Error inserting AI:", aiErr);

  // 3. Insert Target Audience
  const { error: audErr } = await supabase
    .from('pricing_plan_target_audience')
    .insert([
      {
        plan_id: planId,
        segment: "Webinar Hosts & Small Event Organizers",
        recommended_for: ["Webinars", "Workshops", "Virtual Events"],
        organization_size: "1-50 attendees"
      }
    ]);

  if (audErr) console.error("Error inserting audience:", audErr);

  // 4. Insert Marketing Copy
  const { error: mktErr } = await supabase
    .from('pricing_plan_marketing_copy')
    .insert([
      {
        plan_id: planId,
        cta: "Start Hosting Now",
        headline: "Engage Audiences Globally",
        subheadline: "Coordinate virtual events and webinars seamlessly.",
        popular_badge_text: ""
      }
    ]);

  if (mktErr) console.error("Error inserting marketing:", mktErr);

  // 5. Insert Features
  const { error: featErr } = await supabase
    .from('pricing_plan_features')
    .insert([
      { plan_id: planId, feature_name: "Event Registration", category: "Core", enabled: true, usage_limit: "Unlimited", display_order: 1 },
      { plan_id: planId, feature_name: "Live Chat & Q&A", category: "Core", enabled: true, usage_limit: "Basic", display_order: 2 },
      { plan_id: planId, feature_name: "Event Dashboard", category: "Analytics", enabled: true, usage_limit: "Standard", display_order: 3 },
      { plan_id: planId, feature_name: "Custom Branding", category: "Design", enabled: false, usage_limit: "Premium", display_order: 4 }
    ]);

  if (featErr) console.error("Error inserting features:", featErr);

  console.log("All records inserted successfully!");
}

run();
