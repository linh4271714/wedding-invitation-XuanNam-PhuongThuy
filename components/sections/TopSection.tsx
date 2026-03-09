import Image from "next/image";
import prewed1 from "../../assets/images/prewed.jpeg";

const TopSection = () => {
    return <>
        <div className="flex flex-col w-full gap-0 text-4xl 2xl:text-5xl font-bold px-20 lg:px-10 2xl:px-20 py-6" style={{ fontFamily: "var(--font-great-vibes)" }}>
            <span className="text-primary self-start">
                <span className="text-secondary">X</span>uân Nam
            </span>
            <span className="text-primary self-center">&</span>
            <span className="text-primary self-end">
                <span className="text-secondary">P</span>hương Thuỳ
            </span>
        </div>
        <div className="px-3">
            <Image
            src={prewed1}
            alt=""
            aria-hidden="true"
            priority
            className="object-fit"
            />
        </div>
        <p className="text-primary text-center text-lg 2xl:text-2xl px-10 mt-2">
            <span
                className="text-reading-left-to-right"
                style={{ fontFamily: "var(--font-lora)" }}
            >
                Sau 6 năm hẹn hò, chúng mình
            </span>
            <span
                className="text-reading-left-to-right-delay-2s -mt-4"
                style={{ fontFamily: "var(--font-lora)" }}
            >
                đã về chung một nhà ^^
            </span>
        </p>
    </>
}

export default TopSection