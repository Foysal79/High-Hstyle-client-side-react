import React from 'react';

const Faqs = () => {
    return (
        <div className='w-10/12 mx-auto mb-20 bg-gray-100' >
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    What Shipping Methods Are Available?
    </div>
    <div className="collapse-content"> 
      <p>Male evening subdue heaven Is, seas great creepeth under second evening from give theyre upon third give void bring fowl image years all. Cant life a. Dominion god which dont upon.</p>
    </div>
  </div>


  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What are shipping times and costs?
    </div>
    <div className="collapse-content"> 
      <p>Complimentary ground shipping within 1 to 7 business days <br />

In-store collection available within 1 to 7 business days <br />

Next-day and Express delivery options also available <br />

Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items <br />

See the delivery FAQs for details on shipping methods, costs and delivery times</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What payment methods can I use?
    </div>
    <div className="collapse-content"> 
      <p>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.

PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</p>
    </div>
  </div>


  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What is your exchanges, returns and refunds policy?
    </div>
    <div className="collapse-content"> 
      <p>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
    </div>
  </div>

</div>
            
        </div>
    );
};

export default Faqs;