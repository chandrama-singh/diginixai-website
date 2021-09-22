<template>
 <div>
     <Header/>

    <Slider/>

    <section class="emizentech-banner">
        <div class="container">

            <div class="banner-client">
                <div class="row align-items-center">
                    <div class="col-lg-2">
                        <div class="client-label">
                            <img src="~/assets/images/client-logo6.png" alt="Valuable Clients" width="68" height="52">
                            <p>Valuable Clients</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col">
                        <div class="client-image filter-invert"><img src="~/assets/zamkan.png" alt="Logo" width="154" height="86"></div>
                    </div>
                    <div class="col-lg-2 col">
                        <div class="client-image filter-invert"><img src="~/assets/handyman.png" alt="Logo" width="154" height="86"></div>
                    </div>
                    <div class="col-lg-2 col">
                        <div class="client-image"><img src="~/assets/gamex.png" alt="Logo" width="154" height="86"></div>
                    </div>
                    <div class="col-lg-2 col">
                        <div class="client-image filter-invert"><img src="~/assets/dating.png" alt="Logo" width="154" height="86"></div>
                    </div>
                    <div class="col-lg-2 col">
                        <div class="client-image"><img src="~/assets/images/client-logo5.png" alt="Logo" width="154" height="86"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="home emizentech-about " id="first-section">
        <div class="container">
            <div class="row align-items-center" > <!------ Remove--- data-aos="fade-up"--------------> 
                <div class="col-xl-6 col-md-6 order-md-1">
                    <div class="emizentech-image pt-0"><img src="~/assets/dubai.png" alt="About" width="610" height="437"></div>
                </div>

                <div class="col-xl-6 col-md-6 order-md-0 mt-5 mt-md-0">
                    <div class="about-info">
                        <h3>We are</h3>
                        <h2>Diginixai</h2>
                        <h4>Developing Several Projects With:</h4>
                        <ul>
                        <li>UAE</li>
                        <li>Government of India(UP) </li>
                        <li>Government of Batswana </li>
                        <li>USA, UK, Saudi, Bahrain, Angola, Oman, and many other countries.</li>
                        <li>Successfully completed over 500 projects</li>
                        </ul>

                        <h4>National Lavel Award Winner:</h4>
                        <ul>
                        <li>FICII Award</li>
                        <li>Skoch Award</li>
                        <li>Developers of Smart ePolice, an India Police App</li>
                        </ul>

                        <Nuxt-Link to ="https://www.emizentech.com/enqiry.html" class="emizentech-btn mt-4"><span class="sprites-image"></span> Talk to Consultant</Nuxt-Link>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-skills">
        <div class="container">
            <div class="row">
                <!------ Remove--- data-aos="fade-left" data-aos-duration="2200"-------------->
                <div class="col-md-3 col-sm-6 mt-4 mt-md-0" >
                    <div class="skill-item">
                        <img src="~/assets/images/icon4.png" alt="Web &amp; Mobile Project" width="65" height="65">
                        <h2><span class="emizentech-counter">11</span>+ years</h2>
                        <h4>of Industry Experience</h4>
                    </div>
                </div>
                    <!------ Remove--- data-aos="fade-left" data-aos-duration="2400"--------------> 
                <div class="col-md-3 col-sm-6 mt-4 mt-md-0" >
                    <div class="skill-item">
                        <img src="~/assets/images/icon5.png" alt="Repeated clients" width="65" height="65">
                        <h2><span class="emizentech-counter">500</span>+</h2>
                        <h4>Delighted Clients</h4>
                    </div>
                </div>
            <!------ Remove--- data-aos="fade-left" data-aos-duration="2400"-------------->
                <div class="col-md-3 col-sm-6 mt-4 mt-md-0" >
                    <div class="skill-item">
                        <img src="~/assets/images/icon6.png" alt="Happy clients" width="65" height="65">
                        <h2><span class="emizentech-counter">80</span>+</h2>
                        <h4>Team Members</h4>
                    </div>
                </div>
    <!------ Remove--- data-aos="fade-left" data-aos-duration="2600"-------------->
                <div class="col-md-3 col-sm-6 mt-4 mt-md-0 " >
                    <div class="skill-item">
                        <img src="~/assets/images/icon7.png" alt="Years for Company" width="65" height="65">
                        <h2><span class="emizentech-counter">50</span>%</h2>
                        <h4>Senior and Expert Staff</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-features">
        <div class="container">
            <div class="section-title">
                <h2><span>Delivering an array</span> of services to empower your business</h2>
                <p>We clutch highly-customized IT services suiting your specific industry.</p>
            </div>
        </div>
        <div class="owl-carousel" id="our_solutions" data-items="5" data-margin="30" data-loop="true" data-nav="false" data-dots="false" data-auto-width="true" data-autoplay="false">

            <div class="item">
                <div class="feature-item">
                    <div class="emizentech-icon"><img src="~/assets/images/ecommerce.png" alt="eCommerce" width="270" height="227"></div>
                    <h3>eCommerce Solutions</h3>
                    <p>Emizentech offers complete end-to-end eCommerce development solutions across various industry verticals and platforms. We cover every critical activity targeted at the development, maintenance, and growth of a web store. We perform
                        on crafting web solutions that are multi-device friendly and grip the best feature. Here, you will find the right eCommerce solution for the success of your projects.</p>
                    <a href="https://www.emizentech.com/ecommerce-development.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-two">
                    <div class="emizentech-icon"><img src="~/assets/images/mobile.png" alt="Mobile" width="270" height="227"></div>
                    <h3>Mobile App Development</h3>
                    <p>Emizentech is known among the top mobile application development companies. We develop reliable mobile applications to enable our customers to understand innovative ideas and make their enterprise distinctively unique. Our mobile app
                        development team makes engaging and scalable mobile apps according to our client’s business needs. </p>
                    <a href="https://www.emizentech.com/mobile-app-development.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-three">
                    <div class="emizentech-icon"><img src="~/assets/images/website.png" alt="Website" width="270" height="227"></div>
                    <h3>Website Development</h3>
                    <p>We are a leading web development company. We have been offering competitive web solutions to SMEs worldwide for more than 8+ years. Our customer-centric website solutions deliver expected business outcomes. We develop all types of
                        web portals to offer broad functionality and dynamic web experience to our clients.</p>
                    <a href="https://www.emizentech.com/web-development.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-four">
                    <div class="emizentech-icon"><img src="~/assets/images/custom.png" alt="Custom" width="270" height="227"></div>
                    <h3>Custom Software</h3>
                    <p>Our custom software covers industry-specific and unique business functionality that meets customized requirements easily and automates the client’s manual tasks. We offer custom CRM solutions, ERP solutions, PoS solutions, and many
                        more that meet your needs, boost revenue and optimize business operations.</p>
                    <a href="JavaScript:void(0)" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-five">
                    <div class="emizentech-icon"><img src="~/assets/images/mobile.png" alt="UX/UI Solutions"></div>
                    <h3>UX/UI Solutions</h3>
                    <p>Our team of creative UX/UI designers helps with engaging product designs that identify what product and services your brand is offering. Additionally, our attractive UI/UX services are intuitive to use, match clients’ business targets,
                        and add value to our client’s brand identity. </p>
                    <a href="https://www.emizentech.com/web-design.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-two">
                    <div class="emizentech-icon"><img src="~/assets/images/hybrid-icon.png" alt="Hybrid" width="330" height="233"></div>
                    <h3>Hybrid Applications</h3>
                    <p>Holding a decade of experience in app development, Emizentech builds reliable feature-packed, robust, and high-performing hybrid mobile apps using the latest tools and technologies. Additionally, our apps are highly secure, load faster,
                        offer a better user experience, handle every business needs, and ensure your business growth. </p>
                    <a href="https://www.emizentech.com/hybrid-mobile-app-development-services.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-three">
                    <div class="emizentech-icon"><img src="~/assets/images/maintenance.png" alt="maintenance" width="270" height="227"></div>
                    <h3>CRM Solutions</h3>
                    <p>CRM solutions are crafted to keep the customers' records and are accessed by various departments. It allows businesses to build better ties with targeted audiences and customers. We offer the feature-rich and user-friendly CRM solutions
                        that allow the businesses to maintain customer relationship in a better way.</p>
                    <a href="https://www.emizentech.com/salesforce.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="item">
                <div class="feature-item color-four">
                    <div class="emizentech-icon"><img src="~/assets/images/erp-icon.png" alt="Hybrid" width="312" height="206"></div>
                    <h3>ERP Solutions</h3>
                    <p>Our years of experience make us deliver end-to-end ERP development solutions that offer clear visibility into business operations, flawless information flows, and cost-effective business. We also cover the development of various ERP
                        modules, like finance and accounting, HR, sales and marketing, project management, supply chain management, and more. </p>
                    <a href="https://www.emizentech.com/salesforce.html" class="emizentech-more">Learn More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-award">
        <div class="container">
            <div class="section-title">
                <h2><span>Diginixai is Partner </span> with top companies</h2>
                <p>We are partnership with top companies in our field. Not only for our high-quality services, but also for our responsibility to be creative and to adapt values & ethics in our business practices.</p>
            </div>
            <div class="row wow fadeInUp">

                <div class=" col-sm-6 col-lg-3 order-sm-0 order-md-0">
                    <div class="award-item" > <!------ Remove--- data-aos="fade-left" data-aos-duration="2600"-------------->
                        <div class="award-meta text-center">

                            <div class="emizentech-icon">
                                <img src="~/assets/logo-jawda.png" class="mx-auto d-block " alt="adobe" width="108" height="123"></div>
                            <h2 class="pt-4">Partner with Jawda</h2>
                        </div>
                        <p class="text-center">We are partnership with JAWDA to be one of the top branded engineering service providers in our field. Not only for our high-quality services, but also for our responsibility to be creative and to adapt values & ethics in our business practices.</p>

                        <div class="pt-md-5 pt-3">
                            <a href="#" class="emizentech-btn small-btn d-block text-center">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3  order-sm-0 order-md-1 ">
                    <div class="award-item" ><!------ Remove--- data-aos="fade-left" data-aos-duration="2000"-------------->
                        <div class="award-meta text-center">
                            <div class="emizentech-icon"><img src="~/assets/ctre-logo.png" class="mx-auto d-block " alt="shopyfy" width="108" height="123"></div>
                            <h2 class="pt-4">Partner with Level Up</h2>
                        </div>
                        <p class="text-center">We are partnership with Level Up Knowledge. LLCC established in 2005, is a highly professional training institute, approved by Knowledge & Human Development Authority (KHDA), U.A.E, offering a wide range of training programs for enhancing skills in diverse fields.</p>

                        <div class="pt-md-5 pt-3">
                            <a href="#" class="emizentech-btn small-btn d-block text-center">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="  col-sm-6 col-lg-3 order-sm-2 order-lg-3">
                    <div class="award-item" ><!------ Remove--- data-aos="fade-left" data-aos-duration="2200"-------------->
                        <div class="award-meta text-center">
                            <div class="emizentech-icon"><img src="~/assets/stemrobo_logo.png" class="mx-auto d-block " alt="shopware" width="108" height="123"></div>
                            <h2 class="pt-4">Partner with Stemrobo</h2>
                        </div>
                        <p class="text-center">STEMROBO Technologies Pvt. Ltd., are pioneers in Robotic programs, R&D, and Design Initiative in STEM education. Our aim is to enrich young minds and enable them to create magic with technology and apply this new-age tech knowledge to everyday life. </p>

                        <div class="pt-md-5 pt-3">
                            <a href="#" class="emizentech-btn small-btn d-block text-center">Learn More</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3 order-sm-0 order-lg-4 ">
                    <div class="award-item" ><!------ Remove--- data-aos="fade-left" data-aos-duration="2000"-------------->
                        <div class="award-meta text-center">
                            <div class="emizentech-icon"><img src="~/assets/ucs-logo.png" class="mx-auto d-block " alt="salesforce-paertner" width="108" height="123"></div>
                            <h2 class="pt-4">Partner with UCS</h2>
                        </div>
                        <p class="text-center">We are partnership with UCS. Your success drives everything we do – and we mean everything. That’s why we offer the industry’s broadest portfolio of applications, data, security and infrastructure services. </p>

                        <div class="pt-md-5 pt-3">
                            <a href="#" class="emizentech-btn small-btn d-block text-center">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <WeMaster/>
    
    <section class="emizentech-cta" >
        <div class="container">
            <div class="cta-wrap">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-3">
                        <div class="emizentech-image"><img src="~/assets/images/cta-image.png" alt="Cta Image" width="70" height="116"></div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <h4>Let's Make Big Things Happen</h4>
                        <h3>We help startups, as well as enterprises, convert their potential ideas into profitable realities.</h3>
                    </div>
                    <div class="col-xl-4 col-lg-5 text-lg-right">
                        <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn"><span class="sprites-image"></span> Talk to Consultant</a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="development-section position-relative  d-md-flex d-none align-items-center" id="development1">
        <div class="container">
            <div class="fixed-mobile">
                <div class="inner-phone d-flex align-items-center justify-content-center w-100">
                    <div class="home-project__phone">

                        <div class="phone__responsive">
                            <img src="~/assets/images/icart-mobile.png" alt="Mobile-new" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <img src="~/assets/images/left-line.png" alt="right-line" class="img-fluid right-line position-absolute">
            <img src="~/assets/images/right-line.png" alt="left-line" class="img-fluid left-line position-absolute">
            <div class="align-items-center row mt-4 height-100">

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="text-center fit-content">
                        <img src="~/assets/images/icon-icart.png" alt="atoz" class="img-fluid d-none d-md-block mx-auto">
                        <div class="d-flex justify-content-center pt-4 emizen_app_store">
                            <a href="https://apps.apple.com/in/app/icart/id1555198866"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.i.cart"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                        </div>
                    </div>

                    <div class="technologies mb-5 mb-md-0 d-none d-md-block">

                        <ul class="d-flex align-items-center pl-0">
                            <li data-toggle="tooltip" data-placement="top" title="android"><img src="~/assets/images/android-white.png" alt="android-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="apple"><img src="~/assets/images/ios-white.png" alt="apple-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="laravel"><img src="~/assets/images/laravel-white.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="firebase"><img src="~/assets/images/firebase-logo.png" alt="firebase-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="node js"><img src="~/assets/images/node-white.png" alt="mongo-db" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="swift"><img src="~/assets/images/swift-logo-2.png" alt="swift" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="mongo DB"><img src="~/assets/images/mongodb.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="aws"><img src="~/assets/images/aws-new.png" alt="aws-new1-logo" class="img-fluid"></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="d-md-flex align-items-center">
                        <div class="active-mobile-tab">
                            <h3>Grocery Shopping and Delivery App</h3>
                            <p>This app connects the one who wants to meet their grocery shopping and delivery requirements promptly. It delivers the everyday essentials and groceries direct to your doorstep at a faster pace. </p>

                            <a href="https://www.emizentech.com/contact-us.html" class="text-uppercase more-info d-flex justify-content-center align-items-center">
                                <span>Contact us</span>
                                <span class="pl-4 d-inline-block">
<svg width="75" height="75" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="17.5" stroke="#FF4F03" stroke-dasharray="2 3"></circle>
<g clip-path="url(#clip0)">
<path d="M21.5156 18.374L15.2257 24.6639C15.0175 24.865 14.6856 24.8592 14.4845 24.651C14.2883 24.4479 14.2883 24.1259 14.4845 23.9227L20.4039 18.0034L14.4845 12.0841C14.2799 11.8794 14.2799 11.5476 14.4845 11.3429C14.6892 11.1383 15.021 11.1383 15.2257 11.3429L21.5156 17.6328C21.7203 17.8375 21.7203 18.1693 21.5156 18.374Z" fill="#FF4F03"></path>
</g>
<defs>
<clippath id="clip0">
<rect width="13.6216" height="13.6216" fill="white" transform="matrix(1 0 0 -1 11.189 24.811)"></rect>
</clippath>
</defs>
</svg>
</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="development-section position-relative development-section2 d-md-block d-none" id="development1">
        <div class="container">
            <div class="fixed-mobile">
                <div class="inner-phone d-flex align-items-center justify-content-center w-100">
                    <div class="home-project__phone">

                        <div class="phone__responsive">
                            <img src="~/assets/images/groohoo-mobile.png" alt="groohoo-mobile" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <img src="~/assets/images/left-line.png" alt="right-line" class="img-fluid right-line position-absolute">
            <img src="~/assets/images/right-line.png" alt="left-line" class="img-fluid left-line position-absolute">
            <div class="align-items-center row mt-4 height-100">

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="text-center fit-content">
                        <img src="~/assets/images/icon-groohoo.png" alt="atoz" class="img-fluid d-none d-md-block mx-auto">
                        <div class="d-flex justify-content-center pt-4 emizen_app_store">
                            <a href="https://apps.apple.com/in/app/grohood/id1566548830"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.grohood"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                        </div>
                    </div>

                    <div class="technologies mb-5 mb-md-0 d-none d-md-block">

                        <ul class="d-flex align-items-center pl-0">
                            <li data-toggle="tooltip" data-placement="top" title="android"><img src="~/assets/images/android-white.png" alt="android-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="apple"><img src="~/assets/images/ios-white.png" alt="apple-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="laravel"><img src="~/assets/images/laravel-white.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="firebase"><img src="~/assets/images/firebase-logo.png" alt="firebase-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="node js"><img src="~/assets/images/node-white.png" alt="mongo-db" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="swift"><img src="~/assets/images/swift-logo-2.png" alt="swift" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="mongo DB"><img src="~/assets/images/mongodb.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="aws"><img src="~/assets/images/aws-new.png" alt="aws-new1-logo" class="img-fluid"></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="d-md-flex align-items-center">
                        <div class="active-mobile-tab">
                            <h3>Fresh Veggies Buying Platform</h3>
                            <p>
                                It's a neighborhood community buying platform for native fresh veggies that harvest as per customers’ orders. There's no minimum order limit and even no delivery charges.
                            </p>
                            <a href="https://www.emizentech.com/contact-us.html" class="text-uppercase more-info d-flex justify-content-center align-items-center">
                                <span>Contact us</span>
                                <span class="pl-4 d-inline-block">
<svg width="75" height="75" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="17.5" stroke="#FF4F03" stroke-dasharray="2 3"></circle>
<g clip-path="url(#clip0)">
<path d="M21.5156 18.374L15.2257 24.6639C15.0175 24.865 14.6856 24.8592 14.4845 24.651C14.2883 24.4479 14.2883 24.1259 14.4845 23.9227L20.4039 18.0034L14.4845 12.0841C14.2799 11.8794 14.2799 11.5476 14.4845 11.3429C14.6892 11.1383 15.021 11.1383 15.2257 11.3429L21.5156 17.6328C21.7203 17.8375 21.7203 18.1693 21.5156 18.374Z" fill="#FF4F03"></path>
</g>
<defs>
<clippath id="clip0">
<rect width="13.6216" height="13.6216" fill="white" transform="matrix(1 0 0 -1 11.189 24.811)"></rect>
</clippath>
</defs>
</svg>
</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="development-section position-relative development-section3 pawmant-section d-md-block d-none" id="development1">
        <div class="container">
            <div class="fixed-mobile">
                <div class="inner-phone d-flex align-items-center justify-content-center w-100">
                    <div class="home-project__phone">

                        <div class="phone__responsive">
                            <img src="~/assets/images/pawmant-mobile.png" alt="groohoo-mobile" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <img src="~/assets/images/left-line.png" alt="right-line" class="img-fluid right-line position-absolute">
            <img src="~/assets/images/right-line.png" alt="left-line" class="img-fluid left-line position-absolute">
            <div class="align-items-center row mt-4 height-100">

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="text-center fit-content">
                        <img src="~/assets/images/icon-pawmanti.png" alt="atoz" class="img-fluid d-none d-md-block mx-auto">
                        <div class="d-flex justify-content-center pt-4 emizen_app_store">
                            <a href="https://apps.apple.com/in/app/pawmaniti/id1571905143"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.pawmaniti"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                        </div>
                    </div>

                    <div class="technologies mb-5 mb-md-0 d-none d-md-block">

                        <ul class="d-flex align-items-center pl-0">
                            <li data-toggle="tooltip" data-placement="top" title="android"><img src="~/assets/images/android-white.png" alt="android-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="apple"><img src="~/assets/images/ios-white.png" alt="apple-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="laravel"><img src="~/assets/images/laravel-white.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="firebase"><img src="~/assets/images/firebase-logo.png" alt="firebase-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="node js"><img src="~/assets/images/node-white.png" alt="mongo-db" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="swift"><img src="~/assets/images/swift-logo-2.png" alt="swift" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="mongo DB"><img src="~/assets/images/mongodb.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="aws"><img src="~/assets/images/aws-new.png" alt="aws-new1-logo" class="img-fluid"></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="d-md-flex align-items-center">
                        <div class="active-mobile-tab">
                            <h3>Best Home &amp; Parents for Pets</h3>
                            <p>It’s a one-stop solution to all pet care needs. It allows browsing the lists of pet-in-need and requests for foster/adoption straight through the app. You can even book their doctor appointments, their spa, and more. </p>
                            <a href="https://www.emizentech.com/contact-us.html" class="text-uppercase more-info d-flex justify-content-center align-items-center">
                                <span>Contact us</span>
                                <span class="pl-4 d-inline-block">
<svg width="75" height="75" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="17.5" stroke="#FF4F03" stroke-dasharray="2 3"></circle>
<g clip-path="url(#clip0)">
<path d="M21.5156 18.374L15.2257 24.6639C15.0175 24.865 14.6856 24.8592 14.4845 24.651C14.2883 24.4479 14.2883 24.1259 14.4845 23.9227L20.4039 18.0034L14.4845 12.0841C14.2799 11.8794 14.2799 11.5476 14.4845 11.3429C14.6892 11.1383 15.021 11.1383 15.2257 11.3429L21.5156 17.6328C21.7203 17.8375 21.7203 18.1693 21.5156 18.374Z" fill="#FF4F03"></path>
</g>
<defs>
<clippath id="clip0">
 <rect width="13.6216" height="13.6216" fill="white" transform="matrix(1 0 0 -1 11.189 24.811)"></rect>
</clippath>
</defs>
</svg>
</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="development-section position-relative development-section4 chomp-mobile-section d-md-block d-none" id="development1">
        <div class="container">
            <div class="fixed-mobile">
                <div class="inner-phone d-flex align-items-center justify-content-center w-100">
                    <div class="home-project__phone">

                        <div class="phone__responsive">
                            <img src="~/assets/images/chomp-mobile.png" alt="groohoo-mobile" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <img src="~/assets/images/left-line.png" alt="right-line" class="img-fluid right-line position-absolute">
            <img src="~/assets/images/right-line.png" alt="left-line" class="img-fluid left-line position-absolute">
            <div class="align-items-center row mt-4 height-100">

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="text-center fit-content">
                        <img src="~/assets/images/icon-chomp.png" alt="atoz" class="img-fluid d-none d-md-block mx-auto">
                        <div class="d-flex justify-content-center pt-4 emizen_app_store">
                            <a href="https://apps.apple.com/in/app/chomp-hk/id1579320353"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.emizen.chomp"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                        </div>
                    </div>

                    <div class="technologies mb-5 mb-md-0 d-none d-md-block">

                        <ul class="d-flex align-items-center pl-0">
                            <li data-toggle="tooltip" data-placement="top" title="android"><img src="~/assets/images/android-white.png" alt="android-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="apple"><img src="~/assets/images/ios-white.png" alt="apple-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="laravel"><img src="~/assets/images/laravel-white.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="firebase"><img src="~/assets/images/firebase-logo.png" alt="firebase-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="node js"><img src="~/assets/images/node-white.png" alt="mongo-db" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="swift"><img src="~/assets/images/swift-logo-2.png" alt="swift" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="mongo DB"><img src="~/assets/images/mongodb.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="aws"><img src="~/assets/images/aws-new.png" alt="aws-new1-logo" class="img-fluid"></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="d-md-flex align-items-center">
                        <div class="active-mobile-tab">
                            <h3>Manage Food Surplus</h3>
                            <p>The app helps local F&amp;B businesses with easy and simple ways to manage their food surplus all through the day. You can avail the food at discounted price at your convenience.</p>
                            <a href="https://www.emizentech.com/contact-us.html" class="text-uppercase more-info d-flex justify-content-center align-items-center">
                                <span>Contact us</span>
                                <span class="pl-4 d-inline-block">
<svg width="75" height="75" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="17.5" stroke="#FF4F03" stroke-dasharray="2 3"></circle>
<g clip-path="url(#clip0)">
<path d="M21.5156 18.374L15.2257 24.6639C15.0175 24.865 14.6856 24.8592 14.4845 24.651C14.2883 24.4479 14.2883 24.1259 14.4845 23.9227L20.4039 18.0034L14.4845 12.0841C14.2799 11.8794 14.2799 11.5476 14.4845 11.3429C14.6892 11.1383 15.021 11.1383 15.2257 11.3429L21.5156 17.6328C21.7203 17.8375 21.7203 18.1693 21.5156 18.374Z" fill="#FF4F03"></path>
</g>
<defs>
<clippath id="clip0">
<rect width="13.6216" height="13.6216" fill="white" transform="matrix(1 0 0 -1 11.189 24.811)"></rect>
</clippath>
</defs>
</svg>
</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="development-section position-relative development-section4 tgthr-mobile-section d-md-block d-none" id="development1">
        <div class="container">
            <div class="fixed-mobile">
                <div class="inner-phone d-flex align-items-center justify-content-center w-100">
                    <div class="home-project__phone">

                        <div class="phone__responsive">
                            <img src="~/assets/images/2gthr-mobilie.png" alt="groohoo-mobile" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <img src="~/assets/images/left-line.png" alt="right-line" class="img-fluid right-line position-absolute">
            <img src="~/assets/images/right-line.png" alt="left-line" class="img-fluid left-line position-absolute">
            <div class="align-items-center row mt-4 height-100">

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="text-center fit-content">
                        <img src="~/assets/images/icon-2gther.png" alt="atoz" class="img-fluid d-none d-md-block mx-auto">
                        <div class="d-flex justify-content-center pt-4 emizen_app_store">
                            <a href="https://apps.apple.com/gb/app/2gthr-pray-and-grow/id1447927019"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.seedpray"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                        </div>
                    </div>

                    <div class="technologies mb-5 mb-md-0 d-none d-md-block">

                        <ul class="d-flex align-items-center pl-0">
                            <li data-toggle="tooltip" data-placement="top" title="android"><img src="~/assets/images/android-white.png" alt="android-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="apple"><img src="~/assets/images/ios-white.png" alt="apple-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="laravel"><img src="~/assets/images/laravel-white.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="firebase"><img src="~/assets/images/firebase-logo.png" alt="firebase-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="node js"><img src="~/assets/images/node-white.png" alt="mongo-db" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="swift"><img src="~/assets/images/swift-logo-2.png" alt="swift" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="mongo DB"><img src="~/assets/images/mongodb.png" alt="laravel-logo" class="img-fluid"></li>
                            <li data-toggle="tooltip" data-placement="top" title="aws"><img src="~/assets/images/aws-new.png" alt="aws-new1-logo" class="img-fluid"></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="d-md-flex align-items-center">
                        <div class="active-mobile-tab">
                            <h3>Share, Pray &amp; Connect</h3>
                            <p>Now, think about your well-being by focusing or serving others, feel a deep sense of interconnectedness, and find peace, love, joy, and kindness using the app. </p>
                            <a href="https://www.emizentech.com/contact-us.html" class="text-uppercase more-info d-flex justify-content-center align-items-center">
                                <span>Contact us</span>
                                <span class="pl-4 d-inline-block">
<svg width="75" height="75" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="17.5" stroke="#FF4F03" stroke-dasharray="2 3"></circle>
<g clip-path="url(#clip0)">
<path d="M21.5156 18.374L15.2257 24.6639C15.0175 24.865 14.6856 24.8592 14.4845 24.651C14.2883 24.4479 14.2883 24.1259 14.4845 23.9227L20.4039 18.0034L14.4845 12.0841C14.2799 11.8794 14.2799 11.5476 14.4845 11.3429C14.6892 11.1383 15.021 11.1383 15.2257 11.3429L21.5156 17.6328C21.7203 17.8375 21.7203 18.1693 21.5156 18.374Z" fill="#FF4F03"></path>
</g>
<defs>
<clippath id="clip0">
<rect width="13.6216" height="13.6216" fill="white" transform="matrix(1 0 0 -1 11.189 24.811)"></rect>
</clippath>
</defs>
</svg>
</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-credibility pt-0" id="skip-section">
        <div class="container">


        </div>
    </section>
    <section class="d-block d-md-none mobile-development-section position-relative ">
        <div class="owl-carousel mobile-slider" data-loop="true" data-nav="true" data-dots="false" data-autoplay="true" id="mobileslider">


            <div class="item ">
                <div class="development-section3 py-5">
                    <h2 class="text-center">icart</h2>
                    <div class="phone__responsive">
                        <img src="~/assets/images/icart-mobile.png" alt="groohoo-mobile" class="img-fluid">
                    </div>
                    <div class="d-flex justify-content-center pt-4 emizen_app_store">
                        <a href="https://apps.apple.com/in/app/icart/id1555198866"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.i.cart"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                    </div>
                </div>
            </div>

            <div class="item ">
                <div class="py-5 development-section2 ">
                    <h2 class="text-center">groohoo</h2>
                    <div class="phone__responsive">
                        <img src="~/assets/images/groohoo-mobile.png" alt="groohoo-mobile" class="img-fluid">
                    </div>
                    <div class="d-flex justify-content-center pt-4 emizen_app_store">
                        <a href="https://apps.apple.com/in/app/grohood/id1566548830"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.grohood"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                    </div>
                </div>
            </div>

            <div class="item ">
                <div class="py-5 development-section3">
                    <h2 class="text-center">pawmant</h2>
                    <div class="phone__responsive">
                        <img src="~/assets/images/pawmant-mobile.png" alt="pawmant-mobile" class="img-fluid">
                    </div>
                    <div class="d-flex justify-content-center pt-4 emizen_app_store">
                        <a href="https://apps.apple.com/in/app/pawmaniti/id1571905143"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.pawmaniti"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                    </div>
                </div>
            </div>

            <div class="item ">
                <div class="py-5 chomp-mobile-section   ">
                    <h2 class="text-center">chomp</h2>
                    <div class="phone__responsive">
                        <img src="~/assets/images/chomp-mobile.png" alt="2gthr-mobilie" class="img-fluid">
                    </div>
                    <div class="d-flex justify-content-center pt-4 emizen_app_store">
                        <a href="https://apps.apple.com/in/app/chomp-hk/id1579320353"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.emizen.chomp"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                    </div>
                </div>
            </div>

            <div class="item ">
                <div class="py-5  tgthr-mobile-section ">
                    <h2 class="text-center">2gthr</h2>
                    <div class="phone__responsive">
                        <img src="~/assets/images/2gthr-mobilie.png" alt="2gthr-mobilie" class="img-fluid">
                    </div>
                    <div class="d-flex justify-content-center pt-4 emizen_app_store">
                        <a href="https://apps.apple.com/gb/app/2gthr-pray-and-grow/id1447927019"><img src="~/assets/images/app-store-new.png" alt="atoz" class="img-fluid pr-2"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.seedpray"><img src="~/assets/images/google-play-new.png" alt="atoz" class="img-fluid pl-2"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-staff">
        <div class="container">
            <div class="section-title">
                <h2><span>Hire Dedicated</span> Developers</h2>
                <p>An Award-winning company for IT solutions waiting for your hand to take you to successful heights.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3">
                <div class="staff-main-image" data-aos="fade-up">
                    <img src="~/assets/images/staff-main-image.png" alt="Staff Main Image" class="default-image" width="461" height="883">
                    <img src="~/assets/images/staff-main-image2.png" alt="Staff Main Image" class="dark-image" width="461" height="883">
                </div>
            </div>
            <div class="col-xl-9">
                <div class="owl-carousel" data-items="3" data-margin="25" data-auto-width="true" data-loop="true" data-nav="true" data-dots="false" data-autoplay="false">
                    <div class="item">
                        <div class="staff-item">
                            <img src="~/assets/images/icon16.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/magento2.png" alt="Magento" width="46" height="51"></div>
                                <h3>Hire Magento 2 Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-two">
                            <img src="~/assets/images/icon17.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/salesforce3.png" alt="Salesforce" width="66" height="46"></div>
                                <h3>Hire Salesforce Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-three">
                            <img src="~/assets/images/icon18.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/android.png" alt="Android" width="49" height="58"></div>
                                <h3>Hire Android Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-four">
                            <img src="~/assets/images/icon19.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/iphone.png" alt="iPhone" width="41" height="47"></div>
                                <h3>Hire iPhone Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item">
                            <img src="~/assets/images/icon16.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/magento2.png" alt="Magento" width="46" height="51"></div>
                                <h3>Hire Magento 2 Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-two">
                            <img src="~/assets/images/icon17.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/salesforce3.png" alt="Salesforce" width="66" height="46"></div>
                                <h3>Hire Salesforce Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-three">
                            <img src="~/assets/images/icon18.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/android.png" alt="Android" width="49" height="58"></div>
                                <h3>Hire Android Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-four">
                            <img src="~/assets/images/icon19.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/iphone.png" alt="iPhone" width="41" height="47"></div>
                                <h3>Hire iPhone Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item">
                            <img src="~/assets/images/icon16.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/magento2.png" alt="Magento" width="46" height="51"></div>
                                <h3>Hire Magento 2 Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-two">
                            <img src="~/assets/images/icon17.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/salesforce3.png" alt="Salesforce" width="66" height="46"></div>
                                <h3>Hire Salesforce Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-three">
                            <img src="~/assets/images/icon18.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/android.png" alt="Android" width="49" height="58"></div>
                                <h3>Hire Android Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="staff-item staff-color-four">
                            <img src="~/assets/images/icon19.png" alt="Icon" width="320" height="312">
                            <div class="staff-meta">
                                <div class="emizentech-icon"><img src="~/assets/images/iphone.png" alt="iPhone" width="41" height="47"></div>
                                <h3>Hire iPhone Developer</h3>
                            </div>
                            <a href="https://www.emizentech.com/enqiry.html" class="emizentech-btn emizentech-small-btn"><span class="sprites-image"></span>Hire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-industries">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3 data-aos="zoom-in">Serving Diverse</h3>
                    <h2 data-aos="zoom-in">Industries</h2>
                </div>
                <div class="col-md-6">
                    <div class="owl-carousel" data-items="5" data-margin="30" data-auto-width="true" data-loop="true" data-nav="true" data-dots="false" data-autoplay="true">
                        <div class="item">
                            <div class="industrie-item">
                                <div class="emizentech-image"><img src="~/assets/images/icon20.png" alt="eCommerce &amp; Retail" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/ecommerce-retail.html">eCommerce <br> &amp; Retail</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-two">
                                <div class="emizentech-image"><img src="~/assets/images/icon21.png" alt="Food" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/food-solution.html">Food &amp; Beverage</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-three">
                                <div class="emizentech-image"><img src="~/assets/images/icon22.png" alt="Travel" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/travel-hospitality.html">Travel &amp; Hospitality</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-four">
                                <div class="emizentech-image"><img src="~/assets/images/icon23.png" alt="Automotive" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/automotive-industry.html">Automotive Industry</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-five">
                                <div class="emizentech-image"><img src="~/assets/images/icon24-1.png" alt="Media" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/media-entertainment.html">Media &amp; Entertainment</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-six">
                                <div class="emizentech-image"><img src="~/assets/images/icon25.png" alt="Real Estate" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/realestate-solution.html">Real <br> Estate</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-two">
                                <div class="emizentech-image"><img src="~/assets/images/healthcare-icon.png" alt="Healthcare"></div>
                                <h4><a href="https://www.emizentech.com/healthcare-fitness.html">Healthcare &amp; Fitness</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-three">
                                <div class="emizentech-image"><img src="~/assets/images/banking-icon.png" alt="Banking &amp; Finance" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/banking-finance.html">Banking &amp; Finance</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-four">
                                <div class="emizentech-image"><img src="~/assets/images/logistics.png" alt="Logistics" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/logistic-transportation.html">Logistics &amp; Transport</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-five">
                                <div class="emizentech-image"><img src="~/assets/images/education-icon.png" alt="Education"></div>
                                <h4><a href="https://www.emizentech.com/education-elearning.html">Education &amp; eLearning</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-six">
                                <div class="emizentech-image"><img src="~/assets/images/sports-icon.png" alt="Entertainment" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/gaming-leisure.html">Sports $ Gaming</a></h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="industrie-item industrie-color-three">
                                <div class="emizentech-image"><img src="~/assets/images/ticketing.png" alt="Ticketing" width="100" height="87"></div>
                                <h4><a href="https://www.emizentech.com/events-tickets.html">Ticketing &amp; Event</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-testimonials">
        <div class="container">
            <div class="section-title">
                <h2><span>Our performance</span> their words!</h2>
                <p>Come let’s witness their words of appreciation about our work, offerings, and upshots.</p>
            </div>
            <div class="testimonials-wrap">
                <div class="owl-carousel" data-items="1" data-margin="0" data-loop="true" data-nav="true" data-dots="false" data-autoplay="false">
                    <div class="item">
                        <div class="testimonials-item">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="testimonials-info" data-aos="fade-down">
                                        <div class="emizentech-icon"><img src="~/assets/images/icon26.png" alt="Quote" width="56" height="43"></div>
                                        <p>The team at Emizen Tech delivered a quality solution within a tight deadline. They're reliable and dedicated. Their commitment supplemented their professional management style.</p>
                                        <div class="testimonials-name">
                                            <h3>Project Manager</h3>
                                            <p>Alex Perrie, Manchester, UK</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-5 col-sm-4 " data-aos="fade-up">
                                    <div class="emizentech-image pt-0"><img class="" src="~/assets/images/testimonials1.jpg" alt="Testimonials" width="223" height="347"></div>
                                </div>
                                <div class="col-lg-5 col-md-7 col-sm-8" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div class="testimonials-info-wrap">
                                                <h2>Rebellious Fashion – Ecommerce</h2>
                                                <span class="testimonials-label">Education and E-Learning</span>
                                                <div class="testimonials-name">
                                                    <h3>Alex Perrie</h3>
                                                    <p>Manchester, UK</p>
                                                </div>
                                                <h4>Project Summary</h4>
                                                <h5>Helped complete a client &amp; invoice management app for fitness professionals with additional functions to handle class.</h5>
                                                <div class="row pt-2">
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project Start Date</h4>
                                                        <h5>Aug. 2017</h5>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project End Date</h4>
                                                        <h5>Nov. 2019</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-md-flex d-none">
                                            <div class="testimonials-meta">
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon27.png" alt="$" width="36" height="36">
                                                    <h4>$50,000 <br> to <br> $199,999</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon28.png" alt="Studies" width="32" height="29">
                                                    <h4>Case Studies</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon29.png" alt="Prievew" width="32" height="24">
                                                    <h4><a href="https://www.emizentech.com/#0">Preview</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonials-item">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="testimonials-info" data-aos="fade-down">
                                        <div class="emizentech-icon"><img src="~/assets/images/icon26.png" alt="Quote" width="56" height="43"></div>
                                        <p>Sales have increased since Emizen Tech Private Limited came onboard, driven in party by webpage speed improvement. Emizen’s diverse technical expertise and thorough understanding of Magento 2 have made for a beneficial
                                            partnership.</p>
                                        <div class="testimonials-name">
                                            <h3>Haroon Hussain</h3>
                                            <p>Head of Development</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-5 col-sm-4" data-aos="fade-up">
                                    <div class="emizentech-image"><img src="~/assets/images/testimonials2.jpg" alt="Haroon Hussain" width="223" height="347"></div>
                                </div>
                                <div class="col-lg-5 col-md-7 col-sm-8" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div class="testimonials-info-wrap">
                                                <h2>Ego.co.uk - Footwear eCommerce Store</h2>
                                                <span class="testimonials-label">Education and E-Learning</span>
                                                <div class="testimonials-name">
                                                    <h3>Haroon Hussain</h3>
                                                    <p>Head of Development</p>
                                                </div>
                                                <h4>Project Summary</h4>
                                                <h5>EGO is an online, trend-led sassy footwear brand representing a movement of stylish shoeaholics from around the globe.</h5>
                                                <div class="row pt-2">
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project Start Date</h4>
                                                        <h5>Jan. 2017</h5>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project End Date</h4>
                                                        <h5>Ongoing</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-md-flex d-none">
                                            <div class="testimonials-meta">
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon27.png" alt="$" width="36" height="36">
                                                    <h4>$50,000 <br> to <br> $199,999</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon28.png" alt="Studies" width="32" height="29">
                                                    <h4>Case Studies</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon29.png" alt="Prievew" width="32" height="24">
                                                    <h4>Preview</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonials-item">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="testimonials-info" data-aos="fade-down">
                                        <div class="emizentech-icon"><img src="~/assets/images/icon26.png" alt="Quote" width="56" height="43"></div>
                                        <p>Sales have increased in the wake of the migration and the company's search ranking has risen. Emizen Tech Private Limited is responsive and available, leading to a successful collaboration.</p>
                                        <div class="testimonials-name">
                                            <h3>Todays Component</h3>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-5 col-sm-4" data-aos="fade-up">
                                    <div class="emizentech-image"><img src="~/assets/images/testimonials4.png" alt="Testimonials" width="223" height="347"></div>
                                </div>
                                <div class="col-lg-5 col-md-7 col-sm-8" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div class="testimonials-info-wrap">
                                                <h2>Todays <br> Component</h2>
                                                <span class="testimonials-label">Education and E-Learning</span>
                                                <div class="testimonials-name">
                                                    <h3>Todays Component</h3>
                                                    <p>China, Hongkong</p>
                                                </div>
                                                <h4>Project Summary</h4>
                                                <h5>TodayComponents.com is the leading supplier of electronic components that we migrated to magento 2 from magento 1.</h5>
                                                <div class="row pt-2">
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project Start Date</h4>
                                                        <h5>Feb. 2016</h5>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project End Date</h4>
                                                        <h5>Ongoing</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-md-flex d-none">
                                            <div class="testimonials-meta">
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon27.png" alt="$" width="36" height="36">
                                                    <h4>$10,000 <br> to <br> $49,999</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon28.png" alt="Studies" width="32" height="29">
                                                    <h4>Case Studies</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon29.png" alt="Prievew" width="32" height="24">
                                                    <h4>Preview</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonials-item">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="testimonials-info" data-aos="fade-down">
                                        <div class="emizentech-icon"><img src="~/assets/images/icon26.png" alt="Quote" width="56" height="43"></div>
                                        <p>Emizen Tech has resolved technical challenges rapidly and delivered cost-effective solutions. The team has been attentive and produced deliverables on time. They have provided technical expertise to support a valuable
                                            ongoing partnership.</p>
                                        <div class="testimonials-name">
                                            <h3>Sam</h3>
                                            <p>Product manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-5 col-sm-4" data-aos="fade-up">
                                    <div class="emizentech-image"><img src="~/assets/images/testimonials3.jpg" alt="Sam" width="225" height="349"></div>
                                </div>
                                <div class="col-lg-5 col-md-7 col-sm-8" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div class="testimonials-info-wrap">
                                                <h2>London Seed – eCommerce Website</h2>
                                                <span class="testimonials-label">Education and E-Learning</span>
                                                <div class="testimonials-name">
                                                    <h3>Sam</h3>
                                                    <p>London Seed</p>
                                                </div>
                                                <h4>Project Summary</h4>
                                                <h5>Emizen Tech provided development resources to solve technical issues with a website for a seed retailer.</h5>
                                                <div class="row pt-2">
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project Start Date</h4>
                                                        <h5>Oct. 2019</h5>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6">
                                                        <h4>Project End Date</h4>
                                                        <h5>Ongoing</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-md-flex d-none">
                                            <div class="testimonials-meta">
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon27.png" alt="$" width="36" height="36">
                                                    <h4>$10,000 <br> to <br> $49,999</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon28.png" alt="Studies" width="32" height="29">
                                                    <h4>Case Studies</h4>
                                                </div>
                                                <div class="testimonials-meta-item">
                                                    <img src="~/assets/images/icon29.png" alt="Prievew" width="32" height="24">
                                                    <h4>Preview</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizentech-clients">
        <div class="container">
            <div class="owl-carousel" data-items="7" data-items-tablet="5" data-items-mobile-landscape="4" data-items-mobile-portrait="3" data-margin="15" data-loop="true" data-nav="false" data-dots="false" data-autoplay="true">
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client1.png" alt="Client" width="117" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client2.png" alt="Client" width="111" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client3.png" alt="Client" width="108" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client4.png" alt="Client" width="120" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client5.png" alt="Client" width="65" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client6.png" alt="Client" width="64" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client7.png" alt="Client" width="116" height="65"></div>
                </div>
                <div class="item">
                    <div class="emizentech-image"><img src="~/assets/images/client4.png" alt="Client" width="120" height="65"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="emizen-blogs">
        <div class="bg-black">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-md-6">
                        <h1>Let's Make Big Things Happen</h1>
                        <p>We help startups, as well as enterprises, convert their potential ideas into profitable realities.</p>
                    </div>

                    <div class="col-md-6">
                        <a href="https://www.emizentech.com/enqiry.html" class="float-sm-right">Request a Quote</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-inner bg-content position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">

                        <div class="blog-main">

                            <div class="blog-image">
                                <img src="~/assets/images/main-blog.png" class="img-fluid" alt="user1">
                            </div>

                            <div class="blog-contenet position-relative">
                                <a class="blog-title" href="https://www.emizentech.com/magento-development-services.html">How to Hire A Magento 2 Developer – Complete Guide</a>
                                <p>Want to hire a Magento developer? Explore this step by step guide to hire an expert Magento developer for your exciting Magento development project.</p>
                                <a href="https://www.emizentech.com/magento-development-services.html" class="text-uppercase more-info"> Read More</a>
                            </div>
                        </div>

                        <div class="call-block w-100">
                            <div class="call-block-wrap">
                                <div class="emizentech-icon"><img src="~/assets/images/icon3.png" alt="Call" width="42" height="42"></div>
                                <div class="call-info">
                                    <h5>Have an idea?</h5>
                                    <p>Convert your app idea into profitable Business Mobile Application...<a href="https://www.emizentech.com/enqiry.html">Talk to Expert</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <h2 class="company-title">Recent Blogs</h2>
                        <div class="recent-blogs">
                            <div class="blogs-card">

                                <div class="blog-image">
                                    <img src="~/assets/images/blog1.png" class="img-fluid" alt="user1">
                                </div>

                                <div class="blog-contenet pt-3 position-relative">
                                    <a class="blog-title" href="https://www.emizentech.com/ecommerce-development.html">eCommerce Website Development Guide – Cost and Features</a>
                                    <p>How to develop ecommerce website ? Let’s explore ecommerce web development guide about development cost, key features and required team structure.</p>
                                    <a href="https://www.emizentech.com/ecommerce-development.html" class="text-uppercase more-info text-left"> Read More<i class="fa fa-chevron-right ml-2"></i></a>
                                </div>
                            </div>

                            <div class="blogs-card">

                                <div class="blog-image">
                                    <img src="~/assets/images/blog2.png" class="img-fluid" alt="user1">
                                </div>

                                <div class="blog-contenet pt-3 position-relative">
                                    <a class="blog-title" href="https://www.emizentech.com/shopify-development.html">How To Develop A Shopify eCommerce Store – Complete Guide</a>
                                    <p>Learn how to build an ecommerce store with Shopify. Complete guide to develop a Shopify store from scratch. Explore it's benefits, &amp; features</p>
                                    <a href="https://www.emizentech.com/shopify-development.html" class="text-uppercase more-info text-left"> Read More<i class="fa fa-chevron-right ml-2"></i></a>
                                </div>
                            </div>
                            <div class="blogs-card">

                                <div class="blog-image">
                                    <img src="~/assets/images/blog3.png" class="img-fluid" alt="user1">
                                </div>

                                <div class="blog-contenet pt-3 position-relative">
                                    <a href="https://www.emizentech.com/mobile-app-development.html" class="blog-title">How To Build A Mobile App In 11 Steps</a>
                                    <p>Learn how to make an app from app idea &amp; launch your app. Follow 11 steps to developing a mobile app from start to finish</p>
                                    <a href="https://www.emizentech.com/mobile-app-development.html" class="text-uppercase more-info text-left"> Read More<i class="fa fa-chevron-right ml-2"></i></a>
                                </div>
                            </div>
                            <div class="blogs-card">

                                <div class="blog-image">
                                    <img src="~/assets/images/blog4.png" class="img-fluid" alt="user1">
                                </div>

                                <div class="blog-contenet pt-3 position-relative">
                                    <a href="https://www.emizentech.com/ecommerce-development.html" class="blog-title">eCommerce Mobile App Development Guide</a>
                                    <p>Want to develop your own eCommerce mobile application? Let’s explore shopping mobile app development guide including development cost, features, tech stack, infrastructure and required team</p>
                                    <a href="https://www.emizentech.com/ecommerce-development.html" class="text-uppercase more-info text-left"> Read More<i class="fa fa-chevron-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <HeadQuarters/>

    <Footer/>


</div>
</template>

<script>
export default {}
</script>

<style>
  header .emizentech-logo img {
  filter: brightness(0) invert(1);
}.header-links span.sprites-image {
    filter: brightness(0) invert(1);
}
</style>