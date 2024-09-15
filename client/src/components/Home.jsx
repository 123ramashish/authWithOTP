function Home() {
  return (
    <div className="text-center bg-white p-6 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Home!</h2>
      <div className="flex flex-wrap gap-12 p-12 justify-center items-center">
        <a
          href="/signup"
          className="text-lg font-semibold p-2 bg-green-500 shadow-md rounded-md hover:bg-green-700"
        >
          Signup
        </a>
        <a
          href="/login"
          className="text-lg font-semibold p-2 bg-yellow-500 shadow-md rounded-md hover:bg-yellow-700"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Home;
