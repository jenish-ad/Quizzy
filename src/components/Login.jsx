export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 pt-20">
      {/* Welcome Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-purple-700">
          Welcome to QUIZZY!!
        </h1>
        <p className="text-gray-600">Your AI quiz companion</p>
      </div>

      {/* Login Box */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="text"
              placeholder="Username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-gray-700 text-sm">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Log In
          </button>
        </form>
      </div>

      {/* Sign Up Section */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-purple-700">New to QUIZZY?</h1>
        <p className="text-lg text-gray-700">
          <a href="#" className="hover:underline">
            Sign Up Now
          </a>
        </p>
      </div>
    </div>
  );
}
