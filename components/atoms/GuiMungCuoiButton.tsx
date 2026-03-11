'use client';
import { useState } from "react"
import Image, { StaticImageData } from "next/image";
import FadingAnimation from "./FadingAnimation";

const GuiMungCuoiButton = ({QR}: {QR: StaticImageData}) => {
    const [isShowQR, setShowQR] = useState(false)

    return <>
        <FadingAnimation className="m-auto my-4">
            <button onClick={() => setShowQR(true)} className="px-4 py-2 bg-secondary text-background text-md rounded-lg">Gửi mừng cưới</button>
        </FadingAnimation>
        {isShowQR && 
            <div className="fixed z-50 h-fix top-[25vh] w-[70vw] lg:w-[50vw] left-[15vw] lg:left-[25vw] p-5 pt-10 bg-background border-[1px] border-solid border-primary rounded-lg flex items-center justify-center">
                <button
                    onClick={() => setShowQR(false)}
                    className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                    aria-label="Đóng"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" className="w-5 h-5 text-secondary">
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <Image src={QR} alt='' className="h-auto max-h-[40vh] w-auto object-contain" />
            </div>
        }
    </>
}

export default GuiMungCuoiButton