'use server';
export async function deleteTrailingMessages() {}

export async function saveChatModelAsCookie() {}

export async function updateChatVisibility() {}

export async function generateTitleFromUserMessage(message: string) {
  const cleaned = message.trim();

  return cleaned.length > 30
    ? cleaned.slice(0, 30) + "..."
    : cleaned || "New Chat";
}
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