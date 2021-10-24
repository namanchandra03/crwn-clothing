import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{

    const stripePrice = price*100;
    const publishableKey = 'pk_test_51JnPtbSDvkUsrX3aP3B76xJiaTFpWaaspiCAsu4xSeZKM85z6evg4Kmn74EwCEdf814BrcjyCThNeBT8oYCPWu7b00t89Uj86R';

    const onToken = tokken=>{

           console.log(tokken);

           alert('Your payment is successfully');
    }

    return(

          <StripeCheckout
           
            label="Pay Now"

            name="CRWN Clothing Ltd."

            billingAddress
            
            shippingAddress

            image='https://svgshare.com/i/CUz.svg'

            description={`Your Total is $${price}`}

            amount={stripePrice}

            panelLabel='Pay Now'

            token={onToken}

            stripeKey={publishableKey}

          />
    )
};

export default StripeCheckoutButton;