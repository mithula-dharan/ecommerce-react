import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Setinfo.css'

function Setinfo() {
    return (
        <div className='float-container'>
            <div className='row'>
                <div className='float-child col-6'>

                    <form action="login" method="post" id="flogin">

                        <div class="border-box1">
                            <h3>Your Info</h3>
                            <label for="uname" id="un"> name</label>
                            <input type="text" name="user" placeholder="Enter first name" id="uname" /><br />
                            <input type="text" name="user" placeholder="Enter last name" id="uname" /><br />

                            <label for="email" id="email">Email</label>
                            <input type="email" name="email" placeholder="Enter email" id="umail" /><br />

                            <label for="number" id="phn">Phone</label>
                            <input type="number" name="phn" placeholder="Enter phone" id="phone" /><br />

                            {/* <button type="submit" value="update" id="submit" onClick="alert('update Successfully')">Update</button> */}
                            <div>

                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Update
                                </button>


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Information Updated</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Are you sure to update the Informations !..?</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
                <div className='float-child col-6'>
                    <div action="login" method="post" id="flogin">

                        <div class="border-box">
                            <h3>Change password</h3>
                            <label for="uname" id="un">new password</label>
                            <input type="text" name="user" placeholder="Enter  your password" id="uname" /><br />

                            <label for="upass" id="ps"> Conform Password:</label>
                            <input type="password" name="pass" placeholder="Enter your Password" id="upass" /><br />
                            <button type="submit" value="Login" id="submit" onClick="alert('save Successfully')">Save</button>
                            <button type="submit" value="Login" id="submit" onClick="alert('Cancelled')">Cancel</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        

    );
}

export default Setinfo;


