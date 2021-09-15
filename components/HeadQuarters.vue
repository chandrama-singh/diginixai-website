<template>
  <div>
       <section class="company-info">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-sm-6">
                    <div class="Company-address">
                        <h3 class="company-title">headquarters</h3>
                        <p class="address d-flex align-items-center">
                            <img src="~/assets/images/address-icon.png" class="img-fluid" alt="address-icon"> #23 Chase Tower, opp. Metro Pillar 31, <br> Rajiv Vihar Colony, Jaipur, Rajasthan 302019
                        </p>
                    </div>
                    <div class="emizen-location pt-3">
                        <p>Others Location</p>
                        <ul class="d-flex location-list pl-0">

                            <li class="">
                                <span class="location-group">
<img src="~/assets/images/usa.png" class="img-fluid" alt="address-icon">
<span>
USA <br>
+1- (332) 255-7117
</span>
                                </span>
                            </li>

                            <li>
                                <span class="location-group">
<img src="~/assets/images/uk.png" class="img-fluid" alt="address-icon">
<span>
UK <br>
+44-2038158019
</span>
                                </span>
                            </li>

                            <li value="pr-0">
                                <span class="location-group">
<img src="~/assets/images/Singapore.png" class="img-fluid" alt="address-icon">
<span>
Singapore <br>
+65-31382077
</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="emizen-offers pt-4 text-center text-sm-left">
                        <h1>We offer a 60-minute<span class="d-block"> FREE CONSULTATION!</span></h1>
                        <div class=" emizion-main d-sm-flex align-items-center pt-3">
                            <img src="~/assets/images/emizion-main.png" class="img-fluid" alt="address-icon">
                            <div class="emizion-main-title pl-sm-4 pt-4 pt-md-0">
                                <span class="d-block"> Dhruv</span>
                                <span class="emizion-designation">Project Manager India</span>
                                <ul class="pl-0 contact-info d-flex mb-0">
                                    <li>
                                        <a href="tel:+91-8529003877"><i class="fa fa-phone" aria-hidden="true"></i>+91-8529003877</a>
                                    </li>
                                    <li>
                                        <a href="skype:emizentech"><i class="fa fa-skype" aria-hidden="true"></i> emizentech</a>
                                    </li>
                                    <li>
                                        <a href="https://www.emizentech.com/cdn-cgi/l/email-protection#f39a9d959cb3969e9a89969d8796909bdd909c9e"><i class="fa fa-envelope-o" aria-hidden="true"></i><span class="__cf_email__" data-cfemail="ed84838b82ad88808497888399888e85c38e8280">[email&nbsp;protected]</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="enquiry-form">

                        <h3 class="text-center text-sm-left">Don’t be Shy</h3>
                        <h2 class="text-center text-sm-left">Say Hello!</h2>
                        <form method="POST" id="contact-form" action="https://www.emizentech.com/#">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name*" id="name" name="name" aria-describedby="Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="Email" class="form-control" placeholder="Email id*" name="email" id="Email-id">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Phone no skype id*" id="Phone" name="phone" aria-describedby="Phone">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select class="form-control" name="select" id="exampleFormControlSelect2">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="budget" class="form-control" placeholder="Project Budget in USD&amp; (Default)" id="name2" aria-describedby="Budget">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="find" class="form-control" placeholder="How did you find Emizentech" id="Email-id">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mx-100">
                                        <textarea class="form-control" name="message" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">

                                    <div class="d-lg-flex align-items-center">
                                        <div class="g-recaptcha" data-sitekey="6LeJnqkUAAAAAFoJq8_dd9dXHcMuAnxIw5YGii-V"></div>
                                        <button type="submit" class="btn btn-primary mt-4 mt-lg-0 ml-sm-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>