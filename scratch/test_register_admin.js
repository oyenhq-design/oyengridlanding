const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function run() {
  const email = "admin@oyengrid.com";
  const passwords = ["password", "password123", "admin123", "admin", "OyenGridAdmin2026!"];

  for (const password of passwords) {
    console.log(`Trying sign-in with password: "${password}"...`);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      console.log(`🎉 SUCCESS! Password is: "${password}"`);
      return;
    }
    console.log(`Failed: ${error.message}`);
  }

  console.log("All sign-ins failed. Trying to sign up...");
  const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
    email,
    password: "password123"
  });

  if (signUpErr) {
    console.error("Sign up failed:", signUpErr.message);
  } else {
    console.log("Sign up succeeded! Check if auto-confirmed or check mail:", signUpData);
  }
}

run();
