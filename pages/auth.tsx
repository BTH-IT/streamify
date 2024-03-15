import Input from '@/components/Input';
import { useCallback, useState } from 'react';

const Auth = () => {
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === 'login' ? 'register' : 'login'));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/images/logo.png' alt='logo' className='h-12' />
        </nav>
        <div className='flex justify-center'>
          <div className='w-full bg-black bg-opacity-60 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'login' ? (
                <>
                  <Input label='Username' id='username' type='text' />
                  <Input label='Email' id='email' type='text' />
                  <Input label='Password' id='password' type='password' />
                </>
              ) : (
                <>
                  <Input label='Email' id='email' type='text' />
                  <Input label='Password' id='password' type='password' />
                </>
              )}
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition-all'>
              {variant === 'login' ? 'Login' : 'Register'}
            </button>
            <p className='text-neutral-500 mt-12'>
              {variant === 'login'
                ? 'First time using Netfix? '
                : 'Already have an account? '}
              <span
                className='text-white ml-1 hover:underline cursor-pointer'
                onClick={toggleVariant}
              >
                {variant === 'login' ? 'Create an account' : 'Sign In'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;