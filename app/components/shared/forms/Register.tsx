"use client"

import SectionHeader from "../SectionHeader"
import AppForm from "./AppFrom"
import TextInput from "../inputs/TextInput"
import SubmitButton from "../buttons/SubmitButton"
import Link from "next/link"
import { useRegisterMutation } from "@/app/redux/features/auth/auth.api"
import { useRouter } from "next/navigation"

interface RegisterFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function Register() {
  const navigate = useRouter()
  const [registerUser, { isLoading }] = useRegisterMutation()

  const handleSubmit = async (values: RegisterFormValues, reset: () => void) => {
    try {
      const res = await registerUser(values).unwrap()
      console.log("Registration successful:", res)
      reset()
      if (res.success && res.data.token) {
        navigate.push(`/verify-email?t=${res.data.token}`)
      }
    } catch (error: any) {
      console.error("Registration failed:", error)
      // TODO: show error toast
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg bg-white border border-gray-200 p-6 rounded-lg shadow-sm">

        <SectionHeader
          title="Create Account"
          subtitle="Sign up to get started"
        />

        <AppForm
          defaultValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput
                name="firstName"
                type="text"
                label="First Name"
                placeholder="John"
                autoComplete="given-name"
                required
              />
              <TextInput
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="Doe"
                autoComplete="family-name"
                required
              />
            </div>

            {/* Email */}
            <TextInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="john@example.com"
              autoComplete="email"
              required
            />

            {/* Password */}
            <TextInput
              name="password"
              type="password"
              label="Password"
              placeholder="Create a strong password"
              autoComplete="new-password"
              required
            />

            {/* Submit Button */}
            <SubmitButton
              title={isLoading ? "Creating Account..." : "Create Account"}
              disabled={isLoading}
              className="w-full"
            />

          </div>
        </AppForm>

        {/* Login Redirect */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-black hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>

  )
}
