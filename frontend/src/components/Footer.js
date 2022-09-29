import React from 'react';
import '../containers/home.css';
export const Footer =()=>{

    return (
        <>

<main class="footer align-item-center">
  <div class="container text-center">
    <div class="row">
      <div class="col-md-3">
        <h4>Useful links</h4>
        <p>Privacy Policy</p>
        <p>Terms of use</p>
        <p>Subscription</p>
      </div>
      <div class="col-md-3">
        <h4>Our Team</h4>
        <p>Abhishek Tomar</p>
        <p>Raghav Maheshwari</p>
        <p>Sanidhya Mahna</p>
        {/* <p>Affiliate</p> */}
      </div>
      <div class="col-md-3">
        <h4>Follow us on</h4>
        <p><i class="fa fa-facebook-official"></i> Facebook</p>
        <p><i class="fa fa-twitter"></i> Twitter</p>
        <p><i class="fa fa-linkedin"></i> LinkedIn</p>
        
      </div>
      

    </div>
    <hr />
    <p class="= copyright">Made with <i class="fa fa-heart-o"></i> By Team</p>
  
  </div>
  
</main>

</>
    )


}