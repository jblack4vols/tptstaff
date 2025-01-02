    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    // Show Login Page
    function showLogin() {
      document.getElementById('login-page').style.display = 'flex';
      document.getElementById('signup-page').style.display = 'none';
    }

    // Show Sign-Up Page
    function showSignUp() {
      document.getElementById('signup-page').style.display = 'flex';
      document.getElementById('login-page').style.display = 'none';
    }

    // Handle Login
    async function handleLogin() {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        alert('Login failed: ' + error.message);
      } else {
        alert('Login successful!');
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('intranet').style.display = 'block';
      }
    }

    // Handle Sign-Up
    async function handleSignUp() {
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        alert('Sign-up failed: ' + error.message);
      } else {