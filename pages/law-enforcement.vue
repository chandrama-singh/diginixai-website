<template>
  <div data-aos-easing="ease" data-aos-duration="1200" data-aos-delay="0">
    <HeaderMenu />

    <section class="law-banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 text-center">
            <h2>LAW Enforcement</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="emizentech-cta mt-4">
      <div class="container">
        <div class="cta-wrap">
          <div class="d-flex align-items-center">
            <div class="pl-4">
              <h2>LAW Enforcement Industry</h2>
              <h4>
                Diginix-AI the best website development company in Dubai ensures
                accurate data which is highly required especially when you deal
                with law and enforcement solutions. The accurate comprehensive
                market research reports, accurate global positioning system,
                traffic monitoring solutions are all required to produce a
                highly accurate systematic approach for the law and enforcement
                industry.
              </h4>
            </div>
            <div class="col-xl-4 col-lg-5 text-lg-right">
              <img src="~assets/law-hammer.png" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="card text-center">
      <div class="card-body">
        <h2 class="card-title">OUR SERVICES</h2>
        <p class="card-text">
          Our highly advanced technology-driven solutions help the police
          department and the law and enforcement department to trace a crime
          faster than they usually do it. The powerful Ai-driven technical
          solutions help them identify crime activities better. Apart from that,
          the solutions will also help them in real-time data analysis,
          extensive deep searches through search engines, through research,
          pattern matching or pattern identifications, geological-based highly
          accurate information, and more.
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="card mr-4 align-items-center" style="width: 18rem">
          <img src="~assets/images/affiliate.png" class="w-25 h-25" alt="" />
          <div class="card-body">
            <h3 class="card-title">Crime Analysis</h3>
            <p class="card-text">
              Pattern identification, geographical monitoring, spatial analysis
              are all modern concepts that help the police and the law
              enforcement department to identify and trace any crime real fast
              and with accuracy.
            </p>
          </div>
        </div>

        <div class="card mr-4 align-items-center" style="width: 18rem">
          <img src="~assets/images/ai-machine.png" class="w-25 h-25" alt="" />
          <div class="card-body">
            <h3 class="card-title">Field Mobility</h3>
            <p class="card-text">
              Team management solutions and data analytics help the department
              to build a much more robust system than ever before.
            </p>
          </div>
        </div>

        <div class="card align-items-center" style="width: 18rem">
          <img src="~assets/images/cuba.png" class="w-25 h-25" alt="" />
          <div class="card-body">
            <h3 class="card-title">Transparent Policing</h3>
            <p class="card-text">
              Our applications and technological solutions not only assist the
              police departments but also allow the normal public to install
              them on their devices and maintain close connectivity with the
              police across all the geographical locations and for all sorts of
              data sharing modes.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-title mt-4">
      <h2>Lets Get Started your project</h2>
      <p>
        We deliver a functional professional company website within the
        stipulated time and explain the entire process of monitoring and
        managing it from top to bottom. Once the knowledge transfer is done,
        you’ll be able to handle the entire content delivery process on your own
        while you can also customize the layout whenever you want as per the
        needs. You’ll always find us right next to you while handling any
        technical issues, and we take it as a priority to sort it out at the
        earliest.
      </p>
      <button type="button" class="btn btn-outline-info"><Nuxt-Link to="/about-us">REQUEST A QUOTE</Nuxt-Link></button>
    </div>

   <Stats/>

    

    <FooterMenu />
  </div>
</template>

<script>
export default {}
</script>

<style>
.law-banner {
  overflow: hidden;
  /*height: 765px;*/
  height: 340px;
  padding-top: 140px;
  background-image: url(~assets/law-enforcement-header.jpg);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
