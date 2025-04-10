import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto pt-30 px-4 py-8 text-textblack">
      <h1 className="text-4xl font-bold mb-6">Zeoley Terms and Conditions</h1>
      
      {/* Section 1 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definitions</h2>
        <p className="text-lg"> 
          <strong>Affiliate Program:</strong> A program under which Publishers promote Advertisers.
          <br />
          <strong>Advertiser:</strong> An entity offering products or services for promotion through Zeoley.
          <br />
          <strong>Publisher:</strong> Individuals or companies registered with Zeoley to promote Affiliate Programs.
          <br />
          <strong>Deal:</strong> A user action (purchase, registration, etc.) made through a Publisher's referral.
          <br />
          <strong>Ad Creatives:</strong> Banners, videos, text links, and other marketing materials.
          <br />
          <strong>Ad Space:</strong> The platform or media used by the Publisher for promotions.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Subject of the Agreement</h2>
        <p className="text-lg">
          These Terms and Conditions govern the relationship between Zeoley and Publishers for
          participating in Affiliate Programs. By registering, the Publisher agrees to be bound
          by these Terms, including any updates published on Zeoley’s website.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Account Registration and Access</h2>
        <p className="text-lg">
          The Publisher must provide accurate and complete information during account registration.
          Zeoley reserves the right to verify this information and suspend accounts for discrepancies
          or violations.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Rights and Obligations of the Publisher</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>The Publisher must provide accurate, up-to-date information at all times.</li>
          <li>The Publisher is responsible for account security and must not share credentials.</li>
          <li>The Publisher must have the legal rights to use and advertise on their Ad Space.</li>
          <li>Advertisements must be clear, truthful, and compliant with applicable laws.</li>
          <li>Email marketing must be permission-based with easy opt-out options.</li>
          <li>No actions that disrupt the functioning or security of the Zeoley platform are allowed.</li>
          <li>Only one account is allowed per individual or legal entity.</li>
          <li>Publishers must adhere to individual program terms and may be subject to suspension for non-compliance.</li>
          <li>Publishers are required to provide documentation or traffic data when requested by Zeoley.</li>
          <li>Only approved Ad Creatives are permitted; self-created or modified creatives are the Publisher’s responsibility.</li>
          <li>Affiliate links must be monitored and updated regularly.</li>
          <li>Payment shall only be released after receipt of funds from the Advertiser.</li>
          <li>Publishers are responsible for ensuring compliance with local laws.</li>
          <li>Guest accounts may be created under the main account, with full accountability remaining with the Publisher.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Prohibited Activities</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Simulating or fabricating Deals using false or unauthorized data.</li>
          <li>Using deceptive or coercive marketing tactics.</li>
          <li>Unauthorized use of Advertiser or third-party intellectual property.</li>
          <li>Bidding on third-party brand terms without prior approval.</li>
          <li>Employing cookie stuffing, cloaking, or related techniques.</li>
          <li>Registering domains that mimic Advertisers’ websites to mislead users.</li>
          <li>Attracting traffic that is inconsistent with the declared source.</li>
          <li>Closing accounts to avoid settlement of negative balances or debts.</li>
          <li>Zeoley employees must not register as Publishers without proper authorization.</li>
          <li>Any violations may result in immediate account suspension, forfeiture of earnings, and a permanent ban.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Payments to Publishers</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Payment is contingent on valid, tracked, and authorized Deals.</li>
          <li>Publishers must review and accept applicable rates before promotion begins.</li>
          <li>Payments are processed within 45 business days of a valid withdrawal request and confirmation.</li>
          <li>Costs incurred for third-party services or tools are the sole responsibility of the Publisher.</li>
          <li>Withdrawal requests are subject to eligibility conditions, including a minimum threshold.</li>
          <li>Each party is responsible for its own tax obligations.</li>
          <li>The Publisher must provide accurate payment details; Zeoley is not liable for incorrect information.</li>
          <li>Any overpayment must be promptly refunded upon request.</li>
          <li>Monthly withdrawal limits may apply for technical, financial, or business-related reasons.</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Taxes and Invoicing</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Service fees are exclusive of applicable indirect taxes, including GST/VAT.</li>
          <li>Publishers must issue invoices within 30 days of initiating a withdrawal, ensuring they comply with GST standards.</li>
          <li>Invoices must accurately reflect the jurisdiction and be sent to Zeoley’s registered address.</li>
          <li>GST reimbursement will be processed only when valid invoices and supporting documentation are provided.</li>
          <li>Tax Deducted at Source (TDS) will be applied according to applicable laws, with certificates issued as per statutory guidelines.</li>
          <li>Non-compliance with GST regulations may result in adjusted or withheld payments.</li>
        </ul>
      </section>

      {/* Extra Section 8: Termination */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Either party may terminate this Agreement for any reason by providing prior written notice.</li>
          <li>Zeoley reserves the right to immediately suspend or terminate a Publisher’s account if any Terms are breached.</li>
          <li>Upon termination, the Publisher must cease using all Zeoley-related services and return or delete confidential information.</li>
          <li>Termination does not relieve the Publisher of any obligations incurred prior to the effective date of termination.</li>
        </ul>
      </section>

      {/* Extra Section 9: Limitation of Liability and Disclaimers */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Limitation of Liability & Disclaimers</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Zeoley provides its services on an “as is” basis and makes no warranties regarding uninterrupted, error-free service.</li>
          <li>Zeoley is not liable for any indirect, special, or consequential damages arising from the use or inability to use its services.</li>
          <li>In no event shall Zeoley’s total liability exceed the amounts paid to the Publisher under this Agreement.</li>
          <li>The Publisher agrees to indemnify Zeoley from any claims arising from violations of these Terms.</li>
        </ul>
      </section>

      {/* Extra Section 10: Governing Law and Dispute Resolution */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Governing Law and Dispute Resolution</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>This Agreement is governed by and construed in accordance with the laws applicable in the jurisdiction where Zeoley operates.</li>
          <li>Any disputes arising under this Agreement will be subject to the exclusive jurisdiction of the relevant courts.</li>
          <li>The parties agree to attempt resolution through mediation before pursuing legal action.</li>
        </ul>
      </section>

      {/* Extra Section 11: Amendments and Miscellaneous */}
      <section className="mb-6 ">
        <h2 className="text-2xl font-semibold mb-2">11. Amendments and Miscellaneous</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Zeoley reserves the right to amend these Terms at any time. Continued use of the service constitutes acceptance of the updated Terms.</li>
          <li>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.</li>
          <li>This Agreement constitutes the entire understanding between Zeoley and the Publisher regarding its subject matter.</li>
          <li>No waiver of any provision will be effective unless made in writing by an authorized representative of Zeoley.</li>
        </ul>
      </section>

      {/* Extra Section 12: Contact Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Contact Information</h2>
        <p className="text-lg">
          For any questions or clarifications regarding these Terms, please contact us at: <br />
          <a href="mailto:support@zeoley.com" className="text-blue-600 underline">support@zeoley.com</a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
