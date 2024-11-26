import React from 'react'

const Form = () => {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className='text-5xl font-semibold font-sans'>Welcome Back</h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
        <div className="mt-8">
            <div className="">
                <label className='text-lg font-medium'>Email</label>
                <input type="text" placeholder='Enter your email' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'/>
            </div>
            <div className="">
                <label className='text-lg font-medium'>Password</label>
                <input type="password" placeholder='Enter your Passowrd' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'/>
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div className="">
                    <input type="checkbox" id='remember'/>
                    <label for="remember" className='ml-2 font-medium text-base'>Remember for 30 days</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forgot Password</button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-medium'>
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