"use server";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // Login 
  } catch (error) {
    if (error instanceof Error) return error.message;
    throw error;
  }
}
