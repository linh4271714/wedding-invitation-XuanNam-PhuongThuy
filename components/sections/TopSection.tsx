import Image from "next/image";
import prewed1 from "../../assets/images/topImage.jpg";
import FadingAnimation from "../atoms/FadingAnimation";

const TopSection = () => {
    return <>
        <FadingAnimation className="m-auto mt-5"><p className="text-primary text-xl text-center">THƯ MỜI ĐÁM CƯỚI</p></FadingAnimation>
        <FadingAnimation className="m-auto">
            <div className="flex flex-col w-[400px] 2xl:w-full m-auto gap-0 text-4xl 2xl:text-5xl font-bold px-20 lg:px-10 py-6" style={{ fontFamily: "var(--font-great-vibes)" }}>
                <span className="text-primary self-start h-12 2xl:h-[60px] leading-[48px] 2xl:leading-[64px] text-reading-left-to-right w-[145px] 2xl:w-[195px]">
                    <span className="text-secondary">X</span>uân Nam
                </span>
                <span className="text-primary self-center text-reading-left-to-right w-[30px] 2xl:w-[40px]">&</span>
                <span className="text-primary self-end h-12 2xl:h-[60px] leading-[48px] 2xl:leading-[64px] text-reading-left-to-right w-[180px] 2xl:w-[240px]">
                    <span className="text-secondary">P</span>hương Thuỳ
                </span>
            </div>
        </FadingAnimation>
        <FadingAnimation className="px-3">
            <Image
            src={prewed1}
            alt=""
            aria-hidden="true"
            priority
            className="object-fit"
            />
        </FadingAnimation>
        <FadingAnimation className="m-auto mt-2">
            <p className="text-primary text-center text-lg 2xl:text-2xl">
                Sau 6 năm hẹn hò, chúng mình <br/> đã về chung một nhà ^^
            </p>
        </FadingAnimation>
    </>
}

export default TopSection