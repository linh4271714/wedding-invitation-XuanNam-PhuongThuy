import Image from "next/image";

import TopSection from "@/components/sections/TopSection";
import prewed3 from "../assets/images/prewed11.jpg";
import prewed4 from "../assets/images/prewed22.jpg";
import AnHoiSchedule from "@/components/sections/AnHoiSchedule";
import FadingAnimation from "@/components/atoms/FadingAnimation";
import ThanhHonSchedule from "@/components/sections/ThanhHonSchedule";
import Album from "@/components/sections/Album";
import FloatToLeft from "@/components/atoms/FloatToLeft";
import FloatToRight from "@/components/atoms/FloatToRight";
import divider from "../assets/svgs/ElegantFlourishExtrapolated.svg"
import FloatToTop from "@/components/atoms/FloatToTop";
import anhCoDau from "../assets/images/prewed11.jpg";
import anhChuRe from "../assets/images/prewed2.jpeg";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen bg-background">
      <div className="min-h-screen w-screen flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-[100px] overflow-auto">
        <div className="w-screen max-w-[550px] bg-background min-h-screen">
          <TopSection />

          <FloatToTop className="grid grid-cols-2 grid-rows-6 gap-0 pt-10">
            <div className="row-span-2 w-full flex flex-col gap-2 items-center justify-center">
                <p>Cô dâu</p>
                <p style={{ fontFamily: "var(--font-great-vibes)"}} className="text-2xl text-secondary">Phương Thuỳ</p>
            </div>
            <Image src={anhCoDau} alt='' className="row-span-4 w-full h-full border-[1px] border-none md:border-solid border-secondary md:rounded-md content-box" />
            <Image src={anhChuRe} alt='' className="row-span-4 w-full h-full border-[1px] border-none md:border-solid border-secondary md:rounded-md content-box" />        
            <div className="row-span-2 w-full flex flex-col gap-2 items-center justify-center">
                <p>Chú rể</p>
                <p style={{ fontFamily: "var(--font-great-vibes)"}} className="text-2xl text-secondary">Xuân Nam</p>
            </div>
          </FloatToTop>
          <FadingAnimation className="m-auto mt-10">
            <p className="text-secondary text-xl 2xl:text-2xl text-center">Vào tháng 4 này</p>
          </FadingAnimation>
          <FadingAnimation>
            <p className="px-5 italic text-md 2xl:text-lg mt-2 mb-5 text-center">Hai bên gia đình xin kính mời người thân họ hàng, bạn bè, đồng nghiệp, hàng xóm láng giềng đến cùng chứng kiến ngày thành hôn của hai cháu, cùng chúc phúc và dùng bữa cơm thân mật, chung vui cùng gia đình chúng tôi.</p>
          </FadingAnimation>

          <div className="flex gap-0 mb-10">
            <FloatToRight className="w-1/2"><Image src={prewed4} alt='' className="w-full h-auto" /></FloatToRight>
            <FloatToLeft className="w-1/2"><Image src={prewed3} alt='' className="w-full h-auto" /></FloatToLeft>
          </div>

          <AnHoiSchedule />

          <ThanhHonSchedule />

          <Album />
          
          <FadingAnimation className="w-full pt-10 px-3">
            <div className="bg-secondary flex flex-col items-center justify-center py-5">
                <p className="text-white text-xl text-center whitespace-pre">{`Sự hiện diện của quý khách\n là niềm vinh hạnh của chúng tôi.`}</p>
            </div>
            <div className="bg-background border-solid border-[1px] border-secondary w-fit m-auto -mt-2 mb-10 px-4 py-1 text-xl 2xl:text-2xl" style={{ fontFamily: "var(--font-great-vibes)" }}>
                <p>Rất hân hạnh được đón tiếp!</p>
            </div>
          </FadingAnimation>

          <Image src={divider} alt='' className="w-full"/>
        </div>
      </div>
    </div>
  );
}
