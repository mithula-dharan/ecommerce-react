import React from 'react'
import './Payment_info.css'

function Payment_info() {
  return (
    <div className='container'>
        <div class="row">
            <div class="col column1">
                <h2>Payment Info</h2>
               <p><span> Card ending 1234</span></p><br/>
               <p>Visa</p><br/>
               <p>Expiry 09/2022</p><br/>
                <button type="button" value="update" id="pfd" onClick="alert('update Successfully')">Preferred</button>
            </div>

            <div class="col column2">
            <p><span> Card ending 9876</span></p><br/>
               <p>American Express</p><br/>
               <p>Expiry 02/2023</p><br/>
                <button type="button" value="update" id="active" onClick="alert('update Successfully')">preferred</button>
            </div>

            <div class="col  column3">
                <button type='add' className='add'>Add Payment method</button>
            </div>
        </div>
      
    </div>
  );
}

export default Payment_info;
