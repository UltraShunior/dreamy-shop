"use client";
import React from "react";
import Link from "next/link";
import LanguageSelect from "@/components/common/LanguageSelect";
import CurrencySelect from "@/components/common/CurrencySelect";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const topBarData = [
  {
    id: 1,
    text: "Descuentos de verano del 70% de descuento",
    link: "/",
  },
  {
    id: 2,
    text: "Iphones nuevos en stock",
    link: "/",
  },
  {
    id: 3,
    text: "Importdos de USA",
    link: "/",
  },
];

export function Topbar() {
  return (
    <div className="tf-top-bar bg_dark line pe-4">
      <div className="container-full px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_white fw-5">
              <span>(+54) 128383285</span>
              <span>ventas@dreamy.shop</span>
            </div>
          </div>
          <div className="text-center overflow-hidden">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              modules={[Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
              }}
              loop
            >
              {topBarData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={item.link}>
                    <span className="text_white fw-5">{item.text}</span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="top-bar-language tf-cur justify-content-end pe-5">
            <div className="tf-currencies">
              <CurrencySelect light topStart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
