"use client";
import TextInput from "../inputs/TextInput";
import AppForm from "./AppFrom";
import TextArea from "../inputs/TextArea";
import MultipleSelect from "../inputs/MultipleSelect";
import SubmitButton from "../buttons/SubmitButton";
import { FieldValues } from "react-hook-form";
import { useCreateReviewMutation } from "@/app/redux/features/review/review.api";
import { useAppSelector } from "@/app/redux/hooks/hook";
import { selectCurrentUser } from "@/app/redux/features/auth/authSlice";
import { showToast } from "@/app/utils/Toast";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function ReviewForm({ id }: Props) {
  const router = useRouter()
  const [createReview, { isLoading }] = useCreateReviewMutation()
  const userInfo = useAppSelector(selectCurrentUser)


  const onSubmit = async (values: FieldValues) => {
    if (!userInfo?.userId) {
      router.push(`/login?redirect=${window.location.href}`)
      return
    }
    const review = {
      ...values,
      product: id,
      user: userInfo?.userId,
      rating: Number(values?.rating),
    }
    try {
      const res = await createReview(review).unwrap();
      if (res?.success) {
        showToast({
          message: res?.message,
          type: "success"
        })
        window.location.reload()
      }
    } catch (error: any) {
      showToast({
        message: error?.message,
        type: "error"
      })
    }
  };

  return (
    <AppForm onSubmit={onSubmit}>
      <div className="space-y-4">
        <MultipleSelect
          required
          name="rating"
          options={[
            { value: 5, label: "5 - Excellent" },
            { value: 4, label: "4 - Good" },
            { value: 3, label: "3 - Average" },
            { value: 2, label: "2 - Poor" },
            { value: 1, label: "1 - Very Poor" },
          ]}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
        />


        <TextArea
          name="comment"
          required
          placeholder="Comment"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
        />


        <SubmitButton isLoading={isLoading} title="Submit Review" />
      </div>
    </AppForm>
  )
}
