import Container from '@/app/components/shared/Container'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <div className="py-10 space-y-6">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>

        <p>
          Welcome to our website. These Terms and Conditions govern your access
          and use of our website and services. By using our website, you agree
          to comply with these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Products and Services</h2>
        <p>
          We offer a range of organic food products. All product descriptions,
          pricing, and availability are subject to change without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Orders and Payments</h2>
        <p>
          When you place an order, you agree to provide accurate and complete
          information. Payment is processed securely through our payment gateway.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Shipping and Delivery</h2>
        <p>
          Shipping times are estimates and may vary depending on your location.
          We are not responsible for delays caused by shipping carriers or
          customs.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Returns and Refunds</h2>
        <p>
          Please refer to our Shipping & Returns policy for detailed information
          about returns, exchanges, and refund eligibility.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and
          images, is our property or licensed to us and is protected by copyright
          laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. User Conduct</h2>
        <p>
          You agree not to use our website for any unlawful purpose or in any
          way that may damage, disable, or impair the website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Limitation of Liability</h2>
        <p>
          We will not be liable for any indirect, incidental, or consequential
          damages arising from your use of our website or products.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of [Your Jurisdiction].
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms and Conditions
          at any time without prior notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6">11. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>
        <p className="font-medium">Email: support@example.com</p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated: March 4, 2026
        </p>
      </div>
    </Container>
  )
}
