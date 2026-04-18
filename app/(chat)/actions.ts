'use server';

export type LoginActionState = {
  status: 'idle' | 'success' | 'failed' | 'invalid_data';
};

export async function login(
  formData: FormData
): Promise<LoginActionState> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return { status: 'invalid_data' };
    }

    // 🔐 dummy auth (replace later)
    if (email === 'test@example.com' && password === '123456') {
      return { status: 'success' };
    }

    return { status: 'failed' };
  } catch (error) {
    return { status: 'failed' };
  }
}