import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component loads
      }, []);
    
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-6">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      
      <p className="mb-4">
        This Privacy Policy governs the manner in which Riya's Couture uses, maintains and discloses information collected from users (each, a "User") of the www.sprinklez.in website ("Site"). This privacy policy applies to the Site and all products and services offered by Riya's Couture.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Personal identification information</h2>
        <p>
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit/debit card information.
        </p>
        <p className="mt-2">
          Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Non-personal identification information</h2>
        <p>
          We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information, such as the operating system and the Internet service providers' utilized and other similar information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How we use collected information</h2>
        <p>Riya's Coutureuses Users personal information for the following purposes:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>To improve customer service</li>
          <li>To personalize user experience</li>
          <li>To improve our Site</li>
          <li>To process transactions</li>
          <li>To send Users information they agreed to receive about topics we think will be of interest to them</li>
          <li>To send periodic emails</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How we protect your information</h2>
        <p>
          We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Sharing your personal information</h2>
        <p>
          We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Changes to this privacy policy</h2>
        <p>
          Riya's Couture has the discretion to update this privacy policy at any time. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your acceptance of these terms</h2>
        <p>
          By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contacting us</h2>
        <p>
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: support@riya's couture.in
        </p>
      </section>
    </div>
  );      
};

export default PrivacyPolicy;