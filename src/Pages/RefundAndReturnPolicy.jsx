import React, { useEffect } from 'react';


const RefundAndReturnPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component loads
      }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-7">
      <h1 className="text-3xl font-bold text-center mb-6">Refund and Return Policy</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">Shipping & Return Policy</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shipping Policy</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Dispatch time: 1-2 business working days</li>
          <li>Orders will be delivered within 12 to 15 working days from the date of dispatch.</li>
          <li>Our parcels are packed securely; please take a video of the parcel opening (without pause or edit) to claim any issues.</li>
        </ul>
        <p className="mt-2 text-sm italic">(For specific products, if dispatch takes longer, it will be mentioned in the description, video, or post.)</p>
        <p className="mt-2"><strong>Note:</strong> Delivery times may be extended for remote areas.</p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Return Policy</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Returns are not accepted unless the item is defective, the wrong size, or the wrong product is received.</li>
          <li>Claims for exchanges or refunds can be made via Mail or WhatsApp.</li>
          <li>Exchange requests can be initiated only once per order and must be made within 7 days of delivery, provided the following conditions are met:</li>
        </ul>
        <ol className="list-decimal pl-8 mt-2 space-y-1">
          <li>Product(s) should be unused and unwashed</li>
          <li>Tags should be intact</li>
          <li>Product(s) should not be purchased at a sale/discounted price</li>
          <li>Product(s) should not be custom altered</li>
          <li>A video of the unpacking (without pause) is required for damaged, partial, or wrong products received.</li>
          <li>The customer will need to return the parcel to us.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Note:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>A comprehensive parcel opening video (without pause or edit) is required to claim any issues; without this, an exchange or refund cannot be processed.</li>
          <li>Returned parcels may take 3-20 days to reach us after pickup. Exchanges will only be processed after we receive the returned parcel and it passes our quality check.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Sale Items (if applicable)</h3>
        <p>Sale, discounted, coupon, and gift voucher purchases cannot be returned or exchanged.</p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Refund in Case of Cancellation of an Order:</h3>
        <p>Refunds will be issued to the same bank account/card used for placing the order.</p>
      </section>
    </div>
  );
};

export default RefundAndReturnPolicy;
