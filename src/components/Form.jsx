import React from 'react'

const Form = () => {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className='text-5xl font-semibold font-sans'>E-COM</h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
        <div className="mt-5">
            <div className="">
                <label className='text-balance font-medium'>Email</label>
                <input type="text" placeholder='Enter your email' className='w-full px-3 text-gray-700 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-500'/>
            </div>
            <div className="mt-3">
                <label className='text-balance font-medium'>Password</label>
                <input type="password" placeholder='Enter your Passowrd' className='w-full px-3 text-gray-700 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-500'/>
            </div>
            <div className="mt-8 flex justify-between items-center w-full">
                <div className="">
                    <input type="checkbox" id='remember'/>
                    <label for="remember" className='ml-2 font-medium text-base'>Remember for 30 days</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forgot Password</button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-medium'>
                    Sign in
                </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
                <p className='font-medium text-base'>Don't have an account ?</p>
                <button className='text-violet-500 text-base font-medium ml-2'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Form