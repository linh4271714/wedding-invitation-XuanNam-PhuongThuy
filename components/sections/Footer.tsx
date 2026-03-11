const Footer = () => {
    return <>
        <div className="bg-secondary flex flex-col items-center justify-center mx-3 py-5">
            <p className="text-white text-xl text-center whitespace-pre">{`Sự hiện diện của quý khách\n là niềm vinh hạnh của chúng tôi.`}</p>
        </div>
        <div className="bg-background border-solid border-[1px] border-secondary w-fit m-auto -mt-2 mb-10 px-4 py-1 text-xl 2xl:text-2xl" style={{ fontFamily: "var(--font-great-vibes)" }}>
            <p>Rất hân hạnh được đón tiếp!</p>
        </div></>
}

export default Footer