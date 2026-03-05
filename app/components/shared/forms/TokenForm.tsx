'use client';
import AppForm from './AppFrom';
import TextInput from '../inputs/TextInput';
import SubmitButton from '../buttons/SubmitButton';
import SectionHeader from '../SectionHeader';
import { useVerifyEmailMutation } from '@/app/redux/features/auth/auth.api';
import { useRouter } from 'next/navigation';

interface Props {
  token: string
}

export default function TokenForm({ token }: Props) {
  const navigate = useRouter()
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const handleSubmit = async (values: any) => {
    const payload = {
      token,
      ...values
    }

    try {
      const res = await verifyEmail(payload).unwrap();
      if (res.success) {
        navigate.push('/login')
      }
    } catch (error: any) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg border border-gray-200 p-6 shadow-lg rounded-lg">
        <SectionHeader title="Token" subtitle="Enter your token." />
        <AppForm onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Token */}
            <TextInput
              name="code"
              type="text"
              label="OTP Code"
              placeholder="Enter OTP code"
              required
            />

            {/* Submit */}
            <SubmitButton disabled={isLoading} title="Submit" className="w-full" />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
