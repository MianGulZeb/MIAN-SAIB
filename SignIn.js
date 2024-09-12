import React from 'react'

 function SignIn() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-300 '>
    <div className='bg-white p-8 rounded shadow-md w-80'>
      <h1 className='text-2xl font-bold mb-8 text-center'>Sign In</h1>
      <from>
        <input className='mb-6 w-full px-3 py-2 border border-gray-400 rounded-md' type='Email' placeholder='Email' required/>
        <input className='mb-6 w-full px-3 py-2 border border-gray-400 rounded-md' type='Password' placeholder='Password' required/>
        <button className='mb-6 w-full px-3 py-2 border border-gray-300 bg-blue-600 rounded-md' type='Submit'>Sign In</button>
      </from>
    </div>
    </div>
  )
}
export default SignIn;