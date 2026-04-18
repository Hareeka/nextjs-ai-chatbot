'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { login, type LoginActionState } from '../../(chat)/actions'; // ✅ correct path

import { AuthForm } from '@/components/auth-form';
import { SubmitButton } from '@/components/submit-button';
import { toast } from '@/components/toast';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, setState] = useState<LoginActionState>({
    status: 'idle',
  });

  const handleSubmit = async (formData: FormData) => {
    const emailValue = formData.get('email') as string;
    setEmail(emailValue);

    const result = await login(formData); // ✅ now matches function
    setState(result);
  };

  useEffect(() => {
    if (state.status === 'failed') {
      toast({
        type: 'error',
        description: 'Invalid credentials!',
      });
    }

    if (state.status === 'invalid_data') {
      toast({
        type: 'error',
        description: 'Please fill all fields!',
      });
    }

    if (state.status === 'success') {
      setIsSuccessful(true);
      router.push('/chat'); // ✅ redirect only
    }
  }, [state.status, router]);

  return (
    <div className="flex h-dvh w-screen items-start justify-center bg-background pt-12 md:items-center md:pt-0">
      <div className="flex w-full max-w-md flex-col gap-12 rounded-2xl">

        <div className="text-center px-4 sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password
          </p>
        </div>

        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton isSuccessful={isSuccessful}>
            Sign in
          </SubmitButton>

          <p className="text-center text-sm mt-4">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold underline">
              Sign up
            </Link>
          </p>
        </AuthForm>

      </div>
    </div>
  );
}