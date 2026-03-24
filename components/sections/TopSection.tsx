import Image from "next/image";
import image from "../../assets/images/top.jpg";
import FadingAnimation from "../atoms/FadingAnimation";
import FloatToTop from "../atoms/FloatToTop";
import topDivider from "../../assets/svgs/VintageDecorativeDivider.svg"

const TopSection = () => {
    return <>
        <Image src={topDivider} alt='' className="w-[85%] m-auto"/>
        <p className="text-secondary text-xl text-center m-auto mt-5">THƯ MỜI ĐÁM CƯỚI</p>
        <div className="w-full">
            <div className="w-full px-[15%] lg:px-[20%] py-4" style={{ fontFamily: "var(--font-great-vibes)" }}>
                <p className="text-primary text-reading-left-to-right w-full text-4xl leading-[46px] 2xl:text-5xl 2xl:leading-[60px]">
                    <span className="text-secondary">X</span>uân Nam
                </p>
                <p className="text-primary text-reading-left-to-right w-full text-3xl 2xl:text-4xl text-center overflow-hidden">&</p>
                <p className="text-primary text-reading-left-to-right w-full text-4xl leading-[46px] 2xl:text-5xl 2xl:leading-[60px] text-end">
                    <span className="text-secondary">P</span>hương Thuỳ
                </p>
            </div>
        </div>
        <FloatToTop>
            <Image
                src={image}
                alt=""
                aria-hidden="true"
                priority
                className="object-fit border-[2px] border-none md:border-solid border-secondary md:rounded-md"
            />
        </FloatToTop>
        <FadingAnimation className="m-auto mt-2">
            <p className="text-primary text-center text-3xl" style={{ fontFamily: "var(--font-great-vibes)" }}>
                Sau 6 năm hẹn hò, chúng mình <br/> đã về chung một nhà ^^
            </p>
        </FadingAnimation>
    </>
}

export default TopSection