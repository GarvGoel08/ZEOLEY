import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-[120px] pb-12">
      <div className="max-w-6xl mx-auto px-4 py-6 bg-white rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              1. Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <b>Zeoley Global Media Private Limited</b>. This Privacy Policy outlines how we collect,
              use, and protect your personal information when you use our
              platform and services.
            </p>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li className="py-1">
                Personal identification details (e.g., name, email address,
                contact number)
              </li>
              <li className="py-1">
                Usage data including IP address, browser type, and pages visited
              </li>
            </ul>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li className="py-1">To operate and maintain our services</li>
              <li className="py-1">
                To improve and personalize your experience
              </li>
              <li className="py-1">
                To communicate updates, offers, or changes
              </li>
              <li className="py-1">
                To ensure security and prevent fraudulent activity
              </li>
            </ul>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We do not sell, rent, or trade your personal information. We may
              share your information with trusted partners for operational
              purposes, always ensuring your data is protected and used in
              accordance with this policy.
            </p>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              5. Data Retention
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your information is retained for as long as necessary to fulfill
              the purpose for which it was collected, or as required under
              applicable law.
            </p>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              6. Your Rights
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You may access, update, or request deletion of your personal data
              by contacting us. We respect your privacy choices and provide
              tools to manage your information wherever possible.
            </p>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              7. Security
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We employ technical and organizational measures to protect your
              data against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              8. Compliance with Indian Laws
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This Privacy Policy is aligned with the{" "}
              <strong className="text-secondary">
                Digital Personal Data Protection Act, 2023
              </strong>{" "}
              enacted by the Government of India. As per the DPDP Act:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mt-2">
              <li className="py-1">
                Your data is collected and processed with your informed consent.
              </li>
              <li className="py-1">
                You have the right to request correction or erasure of your
                personal data.
              </li>
              <li className="py-1">
                We are committed to protecting your data and appointing a Data
                Protection Officer if required by law.
              </li>
              <li className="py-1">
                Cross-border data transfers will be made in accordance with
                guidelines issued by the Indian government.
              </li>
            </ul>
          </section>

          <section className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              9. Changes to This Policy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may periodically update this Privacy Policy. All changes will
              be posted on this page with an updated revision date. We encourage
              you to review it regularly.
            </p>
          </section>
        </div>

        <style jsx>{`
          @media print {
            .no-print {
              display: none;
            }
            section {
              page-break-inside: avoid;
            }
            h2 {
              page-break-after: avoid;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
