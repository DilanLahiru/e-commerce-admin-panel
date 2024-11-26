import React from "react";

const RegistrationScreen = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-10 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold font-sans">E-COM</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter your details.
          </p>
          <form action="#" class="w-full flex flex-col gap-4 mt-5">
            <div class="flex items-start flex-col justify-start">
              <label
                for="firstName"
                class="text-sm text-gray-700 mr-2 py-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="w-full px-3 text-gray-700 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
            <div class="flex items-start flex-col justify-start">
              <label
                for="firstName"
                class="text-sm text-gray-700 mr-2 py-1"
              >
                Email Address
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="w-full px-3 text-gray-700 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div class="flex items-start flex-col justify-start">
              <label
                for="firstName"
                class="text-sm text-gray-700 mr-2 py-1"
              >
                Password
              </label>
              <input
                type="password"
                id="firstName"
                name="firstName"
                class="w-full px-3 text-gray-700 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-4 py-2">
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-medium'>
                    Sign up
                </button>
            </div>
            <div className="flex justify-center items-center">
                <p className='font-medium text-base'>Do you have an account ?</p>
                <button className='text-violet-500 text-base font-medium ml-2'>Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-100">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default RegistrationScreen;
