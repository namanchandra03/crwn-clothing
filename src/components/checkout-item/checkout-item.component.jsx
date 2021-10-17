import React from "react";
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { removeCartItem,removeItem ,addToCart} from "../../redux/cart/cart.action";

const CheckoutItem = ({cartItem,clearCartItem,increaseQuantity,decreaseQuantity})=>{
    
     const {name,price,imageUrl,quantity}=cartItem;
    
    return(

       <div className="checkout-item">
           <div className="image-container">
               <img src={imageUrl} alt="item"/>
           </div>
           
           <span className="name">{name}</span>
           
           <span className="price">{price}</span>
           
           <span className="quantity">
             
              <div className="arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>  
                
                <span className="value">{quantity}</span> 

               <div className="arrow" onClick={()=>increaseQuantity(cartItem)}>&#10095;</div>
               
               </span>
          
           <span className="remove-button" onClick={()=>clearCartItem(cartItem)}>&#10005;</span>
      
       </div>
   )
};

const mapDispatchToProps=dispatch=>({

    clearCartItem:item =>dispatch(removeCartItem(item)),
    increaseQuantity:item =>dispatch(addToCart(item)),
    decreaseQuantity:item =>dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps) (CheckoutItem);