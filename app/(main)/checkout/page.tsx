import Container from "@/app/components/shared/Container";
import CheckoutForm from "@/app/components/shared/forms/CheckoutForm";

export default function page() {
  return (
    <Container className="px-2 2xl:px-0 py-4">
      <CheckoutForm />
    </Container>
  )
}
