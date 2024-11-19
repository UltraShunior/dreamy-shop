import React from "react";
import Image from "next/image";
import Link from "next/link";
export function Banner() {
  return (
    <section className="flat-spacing-8 pb_0">
      <div className="container">
        <div className="tf-banner-collection rounded-4">
          <video
          className="rounded-4"
          src="/images/slider/slider-video-2.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
          <div className="box-content">
            <div className="container wow fadeInUp" data-wow-delay="0s">
              <div className="sub fw-7 text_white">THE BEST PRACTICE DESIGN</div>
              <h2 className="heading fw-6 text_white">Dreamy Shop</h2>
              <p className="text_white">La facilitadora mas grande de importaciones</p>
              <Link
                href={`/shop-default`}
                className="rounded-pill tf-btn style-3 fw-6 btn-light-icon animate-hover-btn"
              >
                <span>Ver productos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
