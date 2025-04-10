import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl pt-30 mx-auto px-4 py-10 text-textblack">
      <h1 className="text-4xl font-bold mb-6 text-center ">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">1. Introduction</h2>
        <p className="text-lg">
          Welcome to Zeoley. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6 text-lg space-y-1">
          <li>Personal identification details (e.g., name, email address, contact number)</li>
          <li>Usage data including IP address, browser type, and pages visited</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-lg space-y-1">
          <li>To operate and maintain our services</li>
          <li>To improve and personalize your experience</li>
          <li>To communicate updates, offers, or changes</li>
          <li>To ensure security and prevent fraudulent activity</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">4. Data Sharing and Disclosure</h2>
        <p className="text-lg">
          We do not sell, rent, or trade your personal information. We may share your information with trusted partners for operational purposes, always ensuring your data is protected and used in accordance with this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">5. Data Retention</h2>
        <p className="text-lg">
          Your information is retained for as long as necessary to fulfill the purpose for which it was collected, or as required under applicable law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">6. Your Rights</h2>
        <p className="text-lg">
          You may access, update, or request deletion of your personal data by contacting us. We respect your privacy choices and provide tools to manage your information wherever possible.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">7. Security</h2>
        <p className="text-lg">
          We employ technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">8. Compliance with Indian Laws</h2>
        <p className="text-lg">
          This Privacy Policy is aligned with the <strong>Digital Personal Data Protection Act, 2023</strong> enacted by the Government of India. As per the DPDP Act:
        </p>
        <ul className="list-disc pl-6 text-lg space-y-1 mt-2">
          <li>Your data is collected and processed with your informed consent.</li>
          <li>You have the right to request correction or erasure of your personal data.</li>
          <li>We are committed to protecting your data and appointing a Data Protection Officer if required by law.</li>
          <li>Cross-border data transfers will be made in accordance with guidelines issued by the Indian government.</li>
        </ul>
        
      </section>

      <section className="mb-6">
        <h2 className="text-4xl mb-2">9. Changes to This Policy</h2>
        <p className="text-lg">
          We may periodically update this Privacy Policy. All changes will be posted on this page with an updated revision date. We encourage you to review it regularly.
        </p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
