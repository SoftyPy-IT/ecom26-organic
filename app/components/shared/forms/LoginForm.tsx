"use client";
import Link from "next/link";
import AppForm from "./AppFrom";
import TextInput from "../inputs/TextInput";
import SubmitButton from "../buttons/SubmitButton";
import SectionHeader from "../SectionHeader";


export default function LoginForm() {

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md border border-gray-200 p-6 shadow-lg">
        <SectionHeader
          title="Login"
          subtitle="Welcome back! Please enter your details."
        />

        <AppForm
          defaultValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
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
              title="Login"
              className="w-full"
            />
          </div>
        </AppForm>

        {/* Register */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-black hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
