import Header from "./Header";


const Login = () => {
  return (
    <div class="relative min-h-screen">
  <img 
    src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg" 
    alt="Netflix background" 
    class="h-full w-full object-cover"
  />

  <div class="absolute inset-0 bg-black/70"></div>
  
  <div class="absolute top-0 left-0 w-full z-20">
    <Header />
  </div>


  <div class="absolute inset-0 flex justify-center items-center z-10">
    <div class="bg-black bg-opacity-80 p-10 rounded-md w-full max-w-md">
      <h2 class="text-3xl font-bold mb-6 text-white">Sign In</h2>
      
      <form class="flex flex-col space-y-4">
        <input 
          type="email" 
          placeholder="Email or phone number" 
          class="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          class="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" 
        />
        
        <button 
          class="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded">
          Sign In
        </button>
        
        <div class="flex justify-between items-center text-sm text-gray-400 mt-2">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="accent-red-600" />
            <span>Remember me</span>
          </label>
          <a href="#" class="hover:underline">Need help?</a>
        </div>
      </form>

      <div class="mt-6 text-gray-400 text-sm">
        <p>New to Netflix? <a href="#" class="text-white hover:underline">Sign up now</a></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login;