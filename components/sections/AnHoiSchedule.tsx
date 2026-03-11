import FadingAnimation from "../atoms/FadingAnimation"
import GuiMungCuoiButton from "../atoms/GuiMungCuoiButton"
import QRcodau from "../../assets/images/QRcodau.png";

const AnHoiSchedule =()=>{
    return <>
    <div className="w-1/2 m-auto mt-10 flex flex-col items-center">
        <FadingAnimation>
            <p className="text-secondary text-3xl 2xl:text-5xl text-center"  style={{ fontFamily: "var(--font-great-vibes)" }}>Lễ Vu Quy</p>
            <p className="text-primary w-full text-end text-sm 2xl:text-md">sẽ diễn ra vào</p>
        </FadingAnimation>
        <FadingAnimation>
            <div className="text-secondary font-bold text-2xl flex flex-row gap-8 mt-4 justify-center"><span>7 : 00</span><span>16 - 02</span></div>
            <div className="text-primary font-bold text-sm 2xl:text-md flex flex-row gap-16 justify-center -mt-1"><span>giờ</span><span>ngày</span></div>
        </FadingAnimation>
        <FadingAnimation>
            <p className="text-secondary italic text-sm 2xl:text-md text-center mt-3">Tức Thứ 6, ngày 03 tháng 04 năm 2026</p>
        </FadingAnimation>
    </div>
    <FadingAnimation>
        <p className="px-10 italic text-md 2xl:text-lg mt-5 mb-5 text-center">Gia đình nhà gái xin kính mời tất cả khách mời dùng bữa tại tư gia vào lúc 9h đến 12h sáng vào thứ 7 ngày hôm sau.</p>
    </FadingAnimation>
    <FadingAnimation className="flex flex-col items-center justify-center w-full px-5 pb-5">
        <p className="text-primary text-2xl text-center" style={{ fontFamily: "var(--font-great-vibes)" }}>{`Hân hạnh được đón tiếp tại nhà gái`}</p>
        <p className="text-primary text-xl font-bold"><span style={{ fontFamily: "var(--font-great-vibes)", marginRight: '4px' }}>Ông</span>Thiều Ninh Vượng</p>
        <p className="text-primary text-xl font-bold"><span style={{ fontFamily: "var(--font-great-vibes)", marginRight: '4px' }}>Bà</span>Nguyễn Thị Thơm</p>
        <p className="text-primary text-lg mt-3 text-center">Thôn Đại Thắng, xã Lĩnh Toại,<br /> tỉnh Thanh Hoá</p>
    </FadingAnimation>
    <GuiMungCuoiButton QR={QRcodau} />
    </>
}

export default AnHoiSchedule