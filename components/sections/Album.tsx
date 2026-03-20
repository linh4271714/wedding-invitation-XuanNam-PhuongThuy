import Image from "next/image"
import FloatToLeft from "../atoms/FloatToLeft"
import FloatToRight from "../atoms/FloatToRight"
import album1 from "../../assets/images/album1.jpg";
import album2 from "../../assets/images/album2.jpg";
import album3 from "../../assets/images/album3.jpg";

const Album = () => {
    return <>
        <div className="flex gap-0 mt-10">
            <FloatToRight className="w-1/2"><Image src={album1} alt='' className="w-full h-auto" /></FloatToRight>
            <FloatToLeft className="w-1/2"><Image src={album2} alt='' className="w-full h-auto" /></FloatToLeft>
        </div>
        <FloatToRight>
            <Image src={album3} alt='' />
        </FloatToRight>
    </>
}

export default Album