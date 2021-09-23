<template>
  <div>
    <section class="emizentech-banner-new">
      <div class="banner-image">
        <img src="~/assets/images/banner-icon1.png" alt="Banner" />
      </div>
      <div class="banner-image-two">
        <img src="~/assets/images/banner-icon2.png" alt="Banner" />
      </div>
      <div class="banner-image-three">
        <img
          src="~/assets/images/banner-icon3.png"
          class="img-fluid"
          alt="Banner"
        />
      </div>
      <div class="banner-image-four">
        <img src="~/assets/images/banner-icon4.png" alt="Banner" />
      </div>
      <div class="container">
        <div
          class="
            banner-info
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <h2 class="">
            National Level<span class="d-block"> Award Winner Company</span>
          </h2>
          <p>
            Providing Worls Class AI, Ecommerce, Mobile & Cloud based
            Solutions.<span class="d-sm-block"></span>Facilitated over 500
            customers worldwide.
          </p>
          <div class="banner-btn">
            <Nuxt-Link to="/contact" class="emizentech-btn"
              >Contact Us</Nuxt-Link
            >
            <a
              href="https://www.emizentech.com/portfolio.html"
              class="emizentech-btn orange-btn"
              >Get a Quote</a
            >
          </div>
          <div
            class="emizentech-image aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="~/assets/images/banner-img2.png"
              class="img-fluid"
              alt="Banner"
            />
          </div>
        </div>
      </div>
      <img
        src="~/assets/images/left-line.png"
        alt="right-line"
        class="img-fluid right-line position-absolute"
      />
      <img
        src="~/assets/images/right-line.png"
        alt="left-line"
        class="img-fluid left-line position-absolute"
      />
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>