"use client"
import SectionHeader from '../SectionHeader'
import AppForm from './AppFrom'
import TextInput from '../inputs/TextInput'
import SubmitButton from '../buttons/SubmitButton'
import Link from 'next/link'

export default function Register() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md border border-gray-200 p-6 shadow-lg">
        <SectionHeader
          title="Register"
          subtitle="Welcome back! Please enter your details."
        />

        <AppForm
          defaultValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">
            {/* Name */}
            <TextInput
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
            {/* Email */}
            <TextInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            {/* Password */}
            <TextInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="accent-black rounded"
                />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <SubmitButton
              title="Register"
              className="w-full"
            />
          </div>
        </AppForm>

        {/* Register */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-black hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
