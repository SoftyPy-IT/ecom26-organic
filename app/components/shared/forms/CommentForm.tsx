"use client";
import SubmitButton from "../buttons/SubmitButton";
import TextArea from "../inputs/TextArea";
import TextInput from "../inputs/TextInput";
import AppForm from "./AppFrom";

export default function CommentForm() {

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mt-4">Leave a Comment: </h2>
      <div className="border border-gray-200 my-4 p-6">
        <AppForm onSubmit={onSubmit}>
          <div className="space-y-4">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
              />

              <TextInput
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-green-500 bg-white"
              />
            </div>

            {/* Comment Textarea */}
            <TextArea
              name="comment"
              required
              placeholder="Your comment"
              className="w-full px-4 py-3 border border-green-500 focus:outline-none focus:border-green-600 bg-white resize-none"
            />

            {/* Submit Button */}
            <SubmitButton />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
