"use client";

import TextInput from "../inputs/TextInput";
import AppForm from "./AppFrom";
import TextArea from "../inputs/TextArea";
import MultipleSelect from "../inputs/MultipleSelect";
import SubmitButton from "../buttons/SubmitButton";

export default function ReviewForm() {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <AppForm onSubmit={onSubmit}>
      <div className="space-y-4">
        <TextInput
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
        />

        <MultipleSelect
          required
          name="rating"
          options={[
            { value: "5", label: "5 - Excellent" },
            { value: "4", label: "4 - Good" },
            { value: "3", label: "3 - Average" },
            { value: "2", label: "2 - Poor" },
            { value: "1", label: "1 - Very Poor" },
          ]}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
        />


        <TextArea
          name="review"
          required
          placeholder="Review"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
        />


        <SubmitButton title="Submit Review" />
      </div>
    </AppForm>
  )
}
