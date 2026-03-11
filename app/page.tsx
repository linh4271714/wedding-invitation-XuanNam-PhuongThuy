import Image from "next/image";

import backgroundImageHorizontal from "../assets/images/bg1.png";

import TopSection from "@/components/sections/TopSection";
import Footer from "@/components/sections/Footer";
import prewed2 from "../assets/images/prewed2.jpeg";
import prewed3 from "../assets/images/prewed11.jpg";
import prewed4 from "../assets/images/prewed22.jpg";
import AnHoiSchedule from "@/components/sections/AnHoiSchedule";
import FadingAnimation from "@/components/atoms/FadingAnimation";
import ThanhHonSchedule from "@/components/sections/ThanhHonSchedule";


export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src={backgroundImageHorizontal}
          alt=""
          aria-hidden="true"
          priority
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

        <div className="min-h-screen w-screen flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-[100px] overflow-auto">
          <div className="w-screen max-w-[550px] bg-background min-h-screen lg:mt-[100px]">
            <TopSection />

            <FadingAnimation className="m-auto mt-10">
              <p className="text-secondary text-3xl 2xl:text-4xl text-center"  style={{ fontFamily: "var(--font-great-vibes)" }}>Vào tháng 4/2026 này</p>
            </FadingAnimation>
            <FadingAnimation>
              <p className="px-5 italic text-md 2xl:text-lg mt-2 mb-5 text-center">Hai bên gia đình xin kính mời người thân họ hàng, bạn bè, đồng nghiệp, hàng xóm láng giềng đến cùng dùng bữa cơm thân mật, chung vui cùng gia đình chúng tôi.</p>
            </FadingAnimation>

            <FadingAnimation className="flex gap-0 relative z-5 px-3 mb-10">
              <Image src={prewed4} alt='' className="w-1/2 h-auto" />
              <Image src={prewed3} alt='' className="w-1/2 h-auto" />
            </FadingAnimation>

            <AnHoiSchedule />
            <FadingAnimation className="px-3">
              <Image src={prewed2} alt='' className="w-full h-auto" />
            </FadingAnimation>

            <ThanhHonSchedule />
            
            <Footer />
          </div>
        </div>
      </div>
  );
}
