import Image from "next/image";
import prewed1 from "../../assets/images/prewed1.jpg";

const TopSection = () => {
    return <>
        <div className="flex flex-col w-full gap-0 text-4xl font-bold px-10 py-6 sparkle-text" style={{ fontFamily: "var(--font-great-vibes)" }}>
            <span className="text-primary self-start">
                <span className="text-secondary">X</span>uân Nam
            </span>
            <span className="text-primary self-center">&</span>
            <span className="text-primary self-end">
                <span className="text-secondary">P</span>hương Thuỳ
            </span>
        </div>
        <div className="p-3">
            <Image
            src={prewed1}
            alt=""
            aria-hidden="true"
            priority
            className="object-fit"
            />
        </div>
        <p className="text-primary text-center text-lg px-10 ">
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