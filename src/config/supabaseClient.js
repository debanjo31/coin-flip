import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nhckfqqfvqgaldrfmmfp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oY2tmcXFmdnFnYWxkcmZtbWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMTgxNjUsImV4cCI6MTk5ODc5NDE2NX0.1yXEE0KVsec7lcwwi3D1qYJk6DZEwEbwG74AFiS_d_Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
