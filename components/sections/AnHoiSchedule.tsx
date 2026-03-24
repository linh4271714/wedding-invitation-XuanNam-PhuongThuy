import FadingAnimation from "../atoms/FadingAnimation"
import GuiMungCuoiButton from "../atoms/GuiMungCuoiButton"
import QRcodau from "../../assets/images/QRcodau.png";

const AnHoiSchedule =()=>{
    return <>
    <div className="w-1/2 m-auto mt-10 flex flex-col items-center">
        <FadingAnimation>
            <p className="text-secondary text-5xl text-center whitespace-nowrap"  style={{ fontFamily: "var(--font-great-vibes)" }}>Lễ Vu Quy</p>
            <p className="text-primary w-full text-end text-sm 2xl:text-md">sẽ diễn ra vào</p>
        </FadingAnimation>
        <FadingAnimation>
            <div className="text-secondary font-bold text-2xl flex flex-row gap-8 mt-4 justify-center"><span className="whitespace-nowrap">8 : 00</span><span>03 - 04</span></div>
            <div className="text-primary font-bold text-sm 2xl:text-md flex flex-row gap-16 justify-center -mt-1"><span>giờ</span><span>ngày</span></div>
        </FadingAnimation>
        <FadingAnimation>
            <p className="text-secondary italic text-sm 2xl:text-md text-center mt-3 whitespace-nowrap">Tức Thứ 6, ngày 16 tháng 02 năm Bính Ngọ</p>
        </FadingAnimation>
    </div>
    <FadingAnimation className="py-5 m-auto">
        <div className="border-[1px] border-solid border-primary rounded-md py-2 px-4 flex flex-col items-center justify-center">
            <p className="text-md 2xl:text-lg font-bold text-capitalize">Bữa cơm thân mật</p>
            <p className="text-md 2xl:text-lg">9h | 04 - 04 - 2026</p>
            <p className="italic text-sm 2xl:text-md text-center mt-3 whitespace-nowrap">Tức Thứ 7, ngày 17 tháng 02 năm Bính Ngọ</p>
        </div>
    </FadingAnimation>
    <FadingAnimation className="flex flex-col items-center justify-center w-full px-5">
        <p className="text-primary text-2xl text-center" style={{ fontFamily: "var(--font-great-vibes)" }}>{`Hân hạnh được đón tiếp tại nhà gái`}</p>
        <p className="text-primary text-xl font-bold"><span style={{ fontFamily: "var(--font-great-vibes)", marginRight: '4px' }}>Ông</span>Thiều Ninh Vượng</p>
        <p className="text-primary text-xl font-bold"><span style={{ fontFamily: "var(--font-great-vibes)", marginRight: '4px' }}>Bà</span>Nguyễn Thị Thơm</p>
        <p className="text-primary text-lg mt-3 text-center">Thôn Đại Thắng, xã Lĩnh Toại,<br /> tỉnh Thanh Hoá</p>
    </FadingAnimation>
    <GuiMungCuoiButton QRCode={QRcodau} />
    </>
}

export default AnHoiSchedule