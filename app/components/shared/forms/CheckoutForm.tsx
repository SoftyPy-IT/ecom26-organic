"use client"

import { useCreateOrderMutation } from "@/app/redux/features/checkout/checkout.api"
import Container from "../Container"
import SectionHeader from "../SectionHeader"
import SubmitButton from "../buttons/SubmitButton"
import Select from "../inputs/MultipleSelect"
import TextInput from "../inputs/TextInput"
import AppForm from "./AppFrom"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook"
import { FieldValues } from "react-hook-form"
import { clearCart } from "@/app/redux/features/cart/cartSlice"
import { showToast } from "@/app/utils/Toast"
import { useRouter } from "next/navigation"
import { setTimeout } from "timers"
import { selectCurrentUser } from "@/app/redux/features/auth/authSlice"


export default function CheckoutForm() {
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const { subTotal, totalPrice, shippingCharge, itemsCount, items } = useAppSelector(
    (state) => state.cart
  )
  const user = useAppSelector(selectCurrentUser)

  const [createOrder, { isLoading }] = useCreateOrderMutation()

  const orderItems = items.map((item) => ({
    code: item.code,
    name: item.name,
    productId: item.id,
    quantity: item.quantity,
    price: item.price,
    thumbnail: item.thumbnail,
  }))


  const onSubmit = async (value: FieldValues, reset: () => void) => {
    const orderData = {
      ...value,
      orderItems,
      shippingAddress: {
        line1: value.line1,
        division: value.division,
        district: value.district,
        country: value.country,
      },
      shippingCharge,
      subTotal,
      total: totalPrice,
    }
    try {
      const res = await createOrder({ data: orderData }).unwrap()
      if (res?.success) {
        dispatch(clearCart());
        reset();
        showToast({
          message: res.message,
          type: "success",
          position: "bottom",
          alignment: "right",
        });
        navigate.push("/");
      }
    } catch (error: any) {
      showToast({
        message: error?.data?.message || "Order failed",
        type: "error",
        position: "bottom",
        alignment: "right",
      });

      setTimeout(() => {
        if (user == null) {
          navigate.push(`/login?redirect=${window.location.href}`);
        }
      }, 3000)

    }
  }

  return (
    <Container className="px-4 2xl:px-0">
      <SectionHeader title="Checkout" subtitle="Please fill in the form below to complete your order" />
      <AppForm onSubmit={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= Left Section - Customer Info ================= */}
          <div className="lg:col-span-2 space-y-6 bg-white p-6 border-[#81b03f]  border">

            <h2 className="text-xl font-semibold text-gray-800">
              Billing Details
            </h2>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                required
              />

              <TextInput
                name="phone"
                label="Phone Number"
                placeholder="Enter your phone number (11 digits)"
                required
              />
              {/* Shipping Address */}
              <TextInput
                name="line1"
                label="Line 1"
                placeholder="Enter your complete shipping address"
                required
              />
              <TextInput
                name="division"
                label="Division"
                placeholder="Enter your division"
                required
              />
              <TextInput
                name="district"
                label="District"
                placeholder="Enter your district"
                required
              />
              <TextInput
                name="country"
                label="Country"
                placeholder="Enter your country"
                required
              />
            </div>

            {/* Payment Method */}
            <Select
              name="paymentMethod"
              label="Payment Method"
              required
              options={[
                { value: "PayPal", label: "PayPal" },
                { value: "Bank-in", label: "Bank-in" },
                { value: "Cash On Delivery", label: "Cash On Delivery" },
              ]}
            />
          </div>

          {/* ================= Right Section - Order Summary ================= */}
          <div className="bg-white p-6 border-[#81b03f] border h-fit">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 font-medium text-gray-700">

              <div className="flex justify-between">
                <span>Total Item</span>
                <span>{itemsCount}</span>
              </div>

              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>{subTotal} ৳</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>{shippingCharge} ৳</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{totalPrice} ৳</span>
              </div>

            </div>

          </div>
        </div>
        <div className="py-4">
          <SubmitButton isLoading={isLoading} className="w-full" title="Place Order" />
        </div>
      </AppForm>
    </Container>
  )
}
