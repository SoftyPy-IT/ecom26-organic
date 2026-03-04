import Container from '@/app/components/shared/Container'
import React from 'react'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <div className="py-10 space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>

        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal information you provide to us (name, email, contact info).</li>
          <li>Information about your usage of our website (pages visited, time spent).</li>
          <li>Cookies and other tracking technologies.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p>
          We may use your information to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide and improve our services.</li>
          <li>Communicate with you about updates, offers, or support.</li>
          <li>Analyze website usage to improve user experience.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties.
          We may share information with trusted partners who assist us in operating
          our website and services, under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your browsing
          experience. You can choose to disable cookies in your browser settings,
          but some features of the website may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical measures
          to protect your personal information from unauthorized access, disclosure,
          or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          or delete your personal data. You can contact us to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version
          will be posted on this page with the revision date.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="font-medium">Email: support@example.com</p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated: March 4, 2026
        </p>
      </div>
    </Container>
  )
}
