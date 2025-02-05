import FormLogin from "../Components/Fragments/FormLogin";

const LoginPages = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 px-4 flex-col">
      {/* Teks judul Daffa's Movies */}
      <h1 className="text-5xl font-extrabold text-center text-white mb-6 shadow-md">
        Daffa's Movies
      </h1>
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Teks tambahan */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please login to your account to continue
        </p>

        {/* Form Login */}
        <FormLogin />
      </div>
    </section>
  );
};

export default LoginPages;
