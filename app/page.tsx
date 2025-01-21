import Image from "next/image";
import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import "@/components/home";
import { Banner, Topbar, Collections, Products, Products2, Sections } from "@/components/home";
import { Footer } from "@/components/footer/Footer";


export default function Home() {
  return (
    <>
      <Topbar />
      {/* <VideoBanner /> */}
      <Collections />
      <Products />
      <Banner />
      <Products />
      < Sections/>
      < Products2 />
      <Footer />
    </>
  );
}
