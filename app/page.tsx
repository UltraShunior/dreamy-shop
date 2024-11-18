import Image from "next/image";
import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";

export default function Home() {
  return (
    <>
      <h1>Welcome to Dreamy Shop</h1>
      <Image
        src="/2.png"
        alt="Dreamy Shop"
        width={160}
        height={90}
      />
    </>
  );
}
