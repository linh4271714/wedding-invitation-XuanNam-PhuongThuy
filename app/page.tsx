import Image from "next/image";

import backgroundImage from "../assets/images/bg2.png";
import TopSection from "@/components/sections/TopSection";
import WeddingDaySchedule from "@/components/sections/WeddingDaySchedule";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          priority
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

        <div className="min-h-screen w-screen flex flex-col lg:flex-row justify-center gap-0 lg:gap-[100px] overflow-auto">
          <div className="w-[350px] bg-background min-h-screen mt-[100px]">
            <TopSection />
            <WeddingDaySchedule />
          </div>
          <div className="w-[350px] bg-background min-h-screen mb-[100px]"></div>
        </div>
      </div>
  );
}
