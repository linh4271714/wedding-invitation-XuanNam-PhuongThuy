const AnHoiSchedule =()=>{
    return <>
    <div className="w-1/2 m-auto mt-10">
        <p className="text-secondary text-2xl 2xl:text-4xl text-center"  style={{ fontFamily: "var(--font-great-vibes)" }}>Lễ Vu Quy</p>
        <p className="text-primary w-full text-end text-sm 2xl:text-md">sẽ diễn ra vào</p>
        <div className="text-secondary font-bold text-2xl flex flex-row gap-8 mt-4 justify-center"><span>10 - 04</span><span>9 : 00</span></div>
        <div className="text-primary font-bold text-sm 2xl:text-md flex flex-row gap-16 justify-center -mt-1"><span>day</span><span>time</span></div>
    </div>
    <p className="px-5 italic text-sm 2xl:text-md mt-5 mb-10">Tư gia nhà gái xin kính mời người thân họ hàng, bạn bè, đồng nghiệp, hàng xóm láng giềng đến cùng dùng bữa cơm thân mật, chung vui cùng gia đình chúng tôi vào lúc 17:00 cùng ngày.</p>
     <div className="flex flex-col items-center justify-center mx-5 py-5">
            <p className="text-primary text-2xl text-center mb-3" style={{ fontFamily: "var(--font-great-vibes)" }}>{`Hân hạnh được đón tiếp tại nhà gái`}</p>
            <p className="text-primary text-xl font-bold"><span style={{ fontFamily: "var(--font-great-vibes)", marginRight: '4px' }}>Ông</span>Thiều Ninh Vượng</p>
            <p className="text-primary text-xl font-bold"><span style={{ fontFamily: "var(--font-great-vibes)", marginRight: '4px' }}>Bà</span>Nguyễn Thị Thơm</p>
            <p className="text-primary text-lg mt-3 text-center">Thôn Đại Thắng, xã Lĩnh Toại,<br /> tỉnh Thanh Hoá</p>
        </div>
    </>
}

export default AnHoiSchedule