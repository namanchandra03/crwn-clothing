import React from "react";
import './checkout.styles.scss';
import { connect } from "react-redux";
import { selectCartTotal,selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems,Total})=>(

    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
        </div>
       
        {
            cartItems.map(cartItem=>(

                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <div className="total">
            Total : ${Total}
        </div>

        <div className="test-warning">
          *Please use the following test credit card for payment*
          <br/>
          4242 4242 4242 4242 - Exp:Any future valid date - CVV : 123
        </div>

        <StripeCheckoutButton price={Total} />

    </div>
);

const mapStateToProps = createStructuredSelector({

      cartItems:selectCartItems,
      Total:selectCartTotal
});

export default connect(mapStateToProps) (CheckoutPage);