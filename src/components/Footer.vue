<template>
  <footer id="footer" class="footer-1">
    <div
      class="main-footer widgets-dark typo-light"
      style="background-color: #054052; color: white"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget subscribe no-box">
              <h5 class="widget-title">RegenerativeCare<span></span></h5>
              <p>
                Regenerative Care: Enhancing Seniors' Quality of Life Nationwide
              </p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget no-box">
              <h5 class="widget-title">Quick Links<span></span></h5>
              <ul class="thumbnail-widget">
                <li>
                  <div class="thumb-content">
                    <a href="#." style="color: white">About Company</a>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <a href="#." style="color: white">Regenerative Care</a>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <a href="#." style="color: white">Contacts</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget no-box">
              <h5 class="widget-title">Contact Us<span></span></h5>
              <ul class="thumbnail-widget">
                <li><div class="thumb-content">info@domain.com</div></li>
              </ul>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget no-box">
              <h5 class="widget-title">Follow Us<span></span></h5>
              <div class="social-icons">
                <a href="#." class="social-icon">
                  <i class="bi bi-facebook"></i
                ></a>
                <a href="#." class="social-icon">
                  <i class="bi bi-twitter"></i
                ></a>
                <a href="#." class="social-icon">
                  <i class="bi bi-instagram"></i
                ></a>
                <a href="#." class="social-icon">
                  <i class="bi bi-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterS",
};
</script>

<style scoped>
/* Footer styles */
#footer {
  padding: 60px 0;
}

.main-footer {
  padding: 50px 0;
}

.widget-title {
  color: white;
  font-size: 18px;
  margin-bottom: 30px;
  position: relative;
}

.widget-title span {
  background-color: white;
  display: block;
  height: 1px;
  width: 50px;
  margin-top: 10px;
  bottom: 0;
  left: 0;
}

.widget p {
  color: white;
}

.thumbnail-widget {
  list-style: none;
  padding: 0;
}

.thumb-content {
  margin-bottom: 10px;
}

.thumb-content a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.thumb-content a:hover {
  color: #cccccc;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #cccccc;
}

/* Responsive styles */
@media (max-width: 767px) {
  .main-footer .col-sm-6 {
    margin-bottom: 30px;
  }
}
</style>
