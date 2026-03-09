const WeddingDaySchedule = () => {
    const schedule = [
        {
            time: "9:00",
            title: 'Chú rể xuất phát',
            desc: 'Chú rể cùng phái đoàn \n nhà trai sẽ xuất phát từ tư gia \n tại Hà Lĩnh..'
        },
        {
            time: '10:00',
            title: 'Rước dâu',
            desc: 'Đến nhà gái vào lúc 10h,\n hai nhà sẽ thực hiện nghi thức \n xin dâu và thắp hương gia tiên.\n Khoảng 10h30 sẽ đưa dâu \n về nhà chồng.'
        },
        {
            time: '11:30',
            title: 'Cưới',
            desc: 'Cô dâu chú rể thắp \nhương gia tiên nhà trai. \n Tiệc cưới sẽ diễn ra ở nhà hàng ...'
        }
    ]
    return <div className="mt-10">
        <p className="text-secondary text-2xl text-center"  style={{ fontFamily: "var(--font-great-vibes)" }}>Vào tháng 3 này</p>
        <div className="flex justify-center items-center gap-4 mt-1">
            <button
                className="w-10 h-10 flex items-center justify-center border border-secondary rounded-lg text-primary bg-white"
                style={{ fontFamily: "var(--font-lora)", fontWeight: 700 }}
            >11</button>

            <button
                className="w-10 h-10 flex items-center justify-center border border-secondary rounded-lg text-primary bg-white"
                style={{ fontFamily: "var(--font-lora)", fontWeight: 700 }}
            >12</button>

            <span className="w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                    <path
                        d="M24 42s-1.45-1.32-4.42-3.55C11.12 33.13 4 27.13 4 19.13 4 12.81 9.38 8 15.65 8c3.06 0 6.06 1.43 8.35 4.05C26.29 9.42 29.29 8 32.35 8 38.62 8 44 12.81 44 19.13c0 8-7.12 14-15.58 19.32C25.45 40.68 24 42 24 42z"
                        fill="#a31f2e"
                        stroke="#a31f2e"
                        strokeWidth="2"
                    />
                    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="white" fontFamily="var(--font-lora)" fontWeight="bold">13</text>
                </svg>
            </span>

            <button
                className="w-10 h-10 flex items-center justify-center border border-secondary rounded-lg text-primary bg-white"
                style={{ fontFamily: "var(--font-lora)", fontWeight: 700 }}
            >14</button>

            <button
                className="w-10 h-10 flex items-center justify-center border border-secondary rounded-lg text-primary bg-white"
                style={{ fontFamily: "var(--font-lora)", fontWeight: 700 }}
            >15</button>
        </div>
        <div className="relative flex flex-col gap-16 p-10">
            <svg
                className="absolute left-[5%] -top-4 w-[90%] h-[100%] pointer-events-none"
                style={{ height: 'calc(100% + 20px)' }}
                viewBox="0 0 100 350"
                preserveAspectRatio="none"
            >
                <path
                    d="M 50 0 
                       Q 90 20, 90 70
                       Q 90 120, 55 110
                       T 11 150
                       Q 1 250, 50 260
                       T 95 320
                       Q 90 350, 50 400"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {schedule.map((item, index) => {
                return <div key={item.time} className={`relative z-10 w-fit self-${index === 1 ? 'end' : 'start'}`}>
                    <p className="text-secondary text-xl text-center w-20" style={{ fontFamily: "var(--font-great-vibes)" }}>{item.time}</p>
                    <p className="text-primary text-md font-bold italic" style={{ fontFamily: "var(--font-lora)" }}>{item.title}</p>
                    <p className="text-primary text-sm whitespace-pre" style={{ fontFamily: "var(--font-lora)" }}>{item.desc}</p>
                </div>
            })}
        </div>
        <div className="bg-secondary flex flex-col items-center justify-center mx-4 py-4">
            <p className="text-background text-2xl text-center whitespace-pre" style={{ fontFamily: "var(--font-great-vibes)" }}>{`Sự hiện diện của bạn\n là niềm vinh hạnh của chúng mình`}</p>
        </div>
        <div className="bg-background border-solid border-[1px] border-secondary w-fit m-auto -mt-3 mb-10 px-4 py-1">
            <p>Rất hân hạnh được đón tiếp!</p>
        </div>
    </div>
}

export default WeddingDaySchedule