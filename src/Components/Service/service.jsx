// Service.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './service.css'; 

const service = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  });

  useEffect(() => {
    function page4Animation() {
      var elemC = document.querySelector("#elem-container");
      var fixed = document.querySelector("#fixed-image");
      elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
      });
      elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
      });

      var elems = document.querySelectorAll(".elem");
      elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image");
          fixed.style.backgroundImage = `url(${image})`;
        });
      });
    }

    function swiperAnimation() {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
    }

    function menuAnimation() {
      var menu = document.querySelector("nav h3");
      var full = document.querySelector("#full-scr");
      var navimg = document.querySelector("nav img");
      var flag = 0;
      menu.addEventListener("click", function () {
        if (flag === 0) {
          full.style.top = 0;
          navimg.style.opacity = 0;
          flag = 1;
        } else {
          full.style.top = "-100%";
          navimg.style.opacity = 1;
          flag = 0;
        }
      });
    }

    function loaderAnimation() {
      var loader = document.querySelector("#loader");
      setTimeout(function () {
        loader.style.top = "-100%";
      }, 4200);
    }

    swiperAnimation();
    page4Animation();
    menuAnimation();
    loaderAnimation();
  }, []); // Run this effect only once on mount

  return (
    <div>
      <nav>
        <img decoding="async" width="180" height="108" src="https://resonance3d.com/wp-content/uploads/2021/07/Update_logo_Red_CROP.png" id="thm-logo" alt="resonance3d" />

        <div id="nav-part2">
          <h4><a href="#">Work</a></h4>
          <h4><a href="#">Studio</a></h4>
          <h4><a href="#">Contact</a></h4>
        </div>
        <h3>Menu</h3>
      </nav>

      <div id="center">
        <div id="left">
          <h3>Resonance3D provides 3D modeling services to help customers achieve their business goals using advanced technology.</h3>
        </div>
        <div id="right">
          <h1>Website <br />
            THAT <br />
            INSPIRE</h1>
        </div>
      </div>

      <div id="hero-shape">
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
      <video autoPlay loop muted src="./video.mp4"></video>
    </div>
  );
};

export default service;
