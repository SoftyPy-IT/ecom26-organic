'use client'
import { showToast } from "@/app/utils/Toast";
import Container from "../shared/Container";

export default function TopFooter() {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");

    if (email) {
      showToast({
        message: "Email Attached",
        type: "success",
      })
      e.target.reset();
    }
  };

  return (
    <section>
      <Container className="py-14 px-2 2xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Text Content */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Get email updates about our latest products and exclusive special offers.
            </p>
          </div>

          {/* Subscription Form */}
          <form
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border bg-white border-[#81b03f] focus:ring-2 focus:ring-[#81b03f] focus:border-[#81b03f] outline-none text-sm"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-[#81b03f] text-white font-medium hover:opacity-90 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
