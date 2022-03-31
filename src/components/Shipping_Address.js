import React from 'react'
import './Shipping.css'

function Shipping_Address() {
  return (
    <div className='container'>
        <div class="row">
            <div class="col column1">
                <h3>Home address</h3>
                <input type="text" name="user" placeholder="name" id="name" /><br />
                <input type="text" name="user" placeholder="address line 1" id="uname" /><br />
                <input type="text" name="user" placeholder=" Address line 2" id="uname" /><br />
                <input type="text" name="user" placeholder="Zip code" id="uname" /><br />
                <button type="button" value="update" id="pfd" onClick="alert('update Successfully')">Preferred</button>
            </div>

            <div class="col column2">
            <h3>Work address</h3>
                <input type="text" name="user" placeholder="name" id="name" /><br />
                <input type="text" name="user" placeholder="address line 1" id="uname" /><br />
                <input type="text" name="user" placeholder=" Address line 2" id="uname" /><br />
                <input type="text" name="user" placeholder="Zip code" id="uname" /><br />
                <button type="button" value="update" id="active" onClick="alert('update Successfully')">Preferred</button>
            </div>

            <div class="col  column3">
                <button type='add' className='add'>Add Address</button>
            </div>
        </div>
      
    </div>
  )
}

export default Shipping_Address;
