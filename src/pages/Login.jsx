function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="bg-black  p-6 rounded w-full max-w-sm  hover:border duartion-300">

        <h2 className="text-xl font-semibold text-white text-center mb-6">
          LOGIN
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 text-white bg-black border border-black rounded "
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 bg-black border border-black rounded text-white"
        />

        <button className="w-full bg-white text-black py-2 rounded hover:bg-black hover:text-white duration-300 hover:border">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
