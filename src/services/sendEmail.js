import emailjs from '@emailjs/browser';

// NOTE: In a real project, put these in a .env file (e.g., import.meta.env.VITE_EMAILJS_SERVICE_ID)
// For this demo, we are mocking the successful send if keys are missing.
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const sendEmail = async (formElement) => {
  try {
    // Check if keys are placeholders
    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.warn('EmailJS keys are missing. Simulating success.');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      return { status: 200, text: 'OK' };
    }

    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formElement,
      PUBLIC_KEY
    );
    return result;
  } catch (error) {
    throw error;
  }
};
