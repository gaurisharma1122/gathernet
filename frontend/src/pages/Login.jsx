import { useState } from 'react';
import gathernetLogo from '../assets/gathernet-logo-nobg.png';
const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
  return (
      <div className='w-full'>
        <div className='w-[60%] mx-auto my-[10%]'>
            <div className='flex justify-between items-start'>
                <div>
                    <img src={gathernetLogo} alt="gathernet-logo" width={380}/>
                </div>
                  
                  {
                      isLogin ?
                          <div className='w-[30rem]'>
                              <h2 className='text-2xl font-bold my-4'>Log in to your account</h2>
                              <form action="" className='flex flex-col gap-4'>
                                  <input type="email" placeholder='Enter your email' className='w-full px-4 py-2 border-2 border-gray-100 block rounded-md' />
                                  <input type="password" placeholder='Enter your password' className='w-full px-4 py-2 border-2 border-gray-100 block rounded-md' />
                                  <button type='submit' className='block w-full bg-blue-600 py-2 px-4 text-md font-semibold text-white rounded-md hover:bg-blue-400'>Submit</button>
                              </form>
                              <p className='text-center text-md  my-4'>
                                  New here? <span className=' font-bold hover:text-blue-600 hover:cursor-pointer' onClick={()=>setIsLogin(false)}>Create and account</span>
                              </p>
                          </div> :
                          <div className='w-[30rem]'>
                              <h2 className='text-2xl font-bold my-4'>Create an account</h2>
                              <form action="" className='flex flex-col gap-4'>
                                  <input type="text" placeholder='Enter your name' className='w-full px-4 py-2 border-2 border-gray-100  rounded-md' />
                                  <input type="text" placeholder='Enter your username' className='w-full px-4 py-2 border-2 border-gray-100 block rounded-md' />
                                  <input type="email" placeholder='Enter your email' className='w-full px-4 py-2 border-2 border-gray-100 block rounded-md' />
                                  <input type="password" placeholder='Enter your password' className='w-full px-4 py-2 border-2 border-gray-100 block rounded-md' />
                                  <button type='submit' className='block w-full bg-blue-600 py-2 px-4 text-md font-semibold text-white rounded-md hover:bg-blue-400'>Submit</button>
                              </form>
                              <p className='text-center text-md  my-4'>
                                  Already have an account? <span className=' font-bold hover:text-blue-600 hover:cursor-pointer' onClick={()=>setIsLogin(true)}>Login</span> to your account
                              </p>
                          </div>
                  }
          </div>
        </div>
    </div>
  )
}

export default Login