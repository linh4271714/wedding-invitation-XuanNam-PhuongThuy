'use client';
import { useState } from "react"
import Image, { StaticImageData } from "next/image";
import WeddingGiftEnvelope from "../../assets/svgs/WeddingGiftEnvelope.gif"
import FloatToTop from "./FloatToTop";

const GuiMungCuoiButton = ({QRCode}: { QRCode: StaticImageData }) => {
    const [isShowQR, setShowQR] = useState(false)

    return <>
        <FloatToTop className="m-auto flex flex-col items-center justify-center gap-2 cursor-pointer">
            <Image src={WeddingGiftEnvelope} alt='' onClick={() => setShowQR(true)} className="h-[100px] w-[100px]" />
            <span className="-mt-8 text-sm text-secondary italic">Gửi quà mừng cưới</span>
        </FloatToTop>
        {isShowQR && 
            <div className="fixed z-50 h-[80vh] top-[10vh] w-[80vw] lg:w-[50vw] left-[10vw] lg:left-[25vw] p-5 pt-10 bg-background border-[1px] border-solid border-primary rounded-lg flex items-center justify-center">
                <button
                    onClick={() => setShowQR(false)}
                    className="absolute top-0 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                    aria-label="Đóng"
                    style={{ right: '0px' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" className="w-5 h-5 text-secondary">
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <div className="flex flex-col gap-2 items-center justify-center h-full">
                    <Image src={QRCode} alt='' className="h-auto w-full object-contain" />
                </div>
            </div>
        }
    </>
}

export default GuiMungCuoiButton