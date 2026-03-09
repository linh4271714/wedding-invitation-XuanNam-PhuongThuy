import Image from "next/image";

import backgroundImageHorizontal from "../assets/images/bg1.png";

import TopSection from "@/components/sections/TopSection";
import WeddingDaySchedule from "@/components/sections/WeddingDaySchedule";
import Footer from "@/components/sections/Footer";
import prewed2 from "../assets/images/prewed2.jpeg";
import prewed3 from "../assets/images/prewed11.jpg";
import prewed4 from "../assets/images/prewed22.jpg";
import AnHoiSchedule from "@/components/sections/AnHoiSchedule";


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
          <div className="lg:w-[400px] 2xl:w-[500px] max-w-[550px] bg-background min-h-screen lg:mt-[100px]">
            <TopSection />
            <WeddingDaySchedule />
          </div>
          <div className="lg:w-[400px] 2xl:w-[500px] max-w-[550px] bg-background min-h-screen lg:mb-[100px]">
            <div  className="px-3"><Image src={prewed2} alt='' className="w-full h-auto" /></div>
            <AnHoiSchedule />
            <div className="flex gap-0 relative z-5 px-3 mb-10">
              <Image src={prewed4} alt='' className="w-1/2 h-auto" />
              <Image src={prewed3} alt='' className="w-1/2 h-auto" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
  );
}
