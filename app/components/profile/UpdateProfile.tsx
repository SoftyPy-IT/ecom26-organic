"use client"
import { useUpdateProfileMutation } from '@/app/redux/features/auth/auth.api'
import SectionHeader from '../shared/SectionHeader'
import SubmitButton from '../shared/buttons/SubmitButton'
import AppForm from '../shared/forms/AppFrom'
import TextInput from '../shared/inputs/TextInput'
import Loader from '../shared/Loader'
import { showToast } from '@/app/utils/Toast'
import { FieldValues } from 'react-hook-form'

interface UpdateProfileProps {
  firstName?: string;
  lastName?: string;
}

export default function UpdateProfile({
  firstName,
  lastName,
}: UpdateProfileProps) {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation()


  const onSubmit = async (values: FieldValues) => {
    const { data } = await updateProfile(values)
    if (data?.success) {
      showToast({ message: data.message, type: 'success' })
      window.location.reload()
    }
  }

  if (isLoading) return <Loader />

  return (
    <div>
      <SectionHeader title="Update Profile" subtitle="Update your profile" />
      <div>
        <AppForm onSubmit={onSubmit}>
          <div className="space-y-4">
            <TextInput label="First Name" name="firstName" defaultValue={firstName} />
            <TextInput label="Last Name" name="lastName" defaultValue={lastName} />
            <SubmitButton isLoading={isLoading} title="Update Profile" />
          </div>
        </AppForm>
      </div>
    </div>
  )
}
