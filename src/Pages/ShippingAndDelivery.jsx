import React, { useEffect } from 'react';

const ShippingAndDelivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component loads
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-7">
      <h1 className="text-3xl font-bold text-center mb-6">Shipping and Delivery</h1>
      
      <p className="text-center mb-4">
        <strong>Dispatch time:</strong> 1-2 business working days
      </p>
      
      <p className="text-center mb-4 text-sm italic">
        (For specific products, if dispatch takes time, it will be mentioned in the description, video, or post.)
      </p>
      
      <div className="mb-4">
        <p className="text-center">
          Orders will be delivered within 12 to 15 working days from the date of dispatch.
        </p>
      </div>
      
      <p className="text-center mb-6">
        <strong>Note:</strong> Delivery times may extend for remote areas.
      </p>
      
      <p className="text-center text-sm">
        Our parcels are packed in a secure manner, so please don't forget to take the parcel opening video (without pause or edit) to claim any sort of issue.
      </p>
    </div>
  );
};

export default ShippingAndDelivery;
