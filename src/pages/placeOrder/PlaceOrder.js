import React, { useContext } from 'react'
import './PlaceOrder.css';
import { myContext } from '../../App';

const PlaceOrder = () => {

  const {getSubTotal} = useContext(myContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='first-name'/>
          <input type="text" placeholder='last-name'/>
        </div>
        <input type="email" placeholder='email-address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city'/>
          <input type="text" placeholder='state'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zip-code'/>
          <input type="text" placeholder='country'/>
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>cart total</h2>
          <div>
          <div>
            <div className="cat-total-details">
              <p>Subtotal</p>
              <p></p>
            </div>
            <hr />
            <div className="cat-total-details">
              <p>Delivery Fee</p>
              <p>{getSubTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cat-total-details">
              <b>Total </b>
           
              <b>${getSubTotal() === 0 ? 0 : getSubTotal() + 2}</b>
            </div>
          </div>
          </div>
          <button style={{cursor:"pointer"}}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
