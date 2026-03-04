'use client';
import Link from 'next/link';
import AppForm from './AppFrom';
import TextInput from '../inputs/TextInput';
import SubmitButton from '../buttons/SubmitButton';
import SectionHeader from '../SectionHeader';

export default function ForgotForm() {

  const handleSubmit = async (values: any) => {
    console.log(values)
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-lg border border-gray-200 p-6 shadow-lg rounded-lg">
        <SectionHeader title="Forgot Password" subtitle="Enter your email address to reset your password." />

        <AppForm defaultValues={{ email: '' }} onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* Email */}
            <TextInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            {/* Submit */}
            <SubmitButton title="Send Reset Link" className="w-full" />
          </div>
        </AppForm>

        {/* Register */}
        <p className="text-center text-sm mt-6 text-gray-600">
          <Link href="/login" className="font-semibold text-black hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
