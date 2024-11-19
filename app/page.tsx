import Image from "next/image";
import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import "@/components/home";
import { Banner, Topbar, Collections, Products, Products2 } from "@/components/home";
import { VideoBanner } from "@/components/home"; // Importing the VideoBanner component from the home folder
import { Categories } from "@/components/home";


export default function Home() {
  return (
    <>
      <Topbar />
      {/* <VideoBanner /> */}
      <Collections />
      <Products />
      <Banner />
      < Products2 />
    </>
  );
}
