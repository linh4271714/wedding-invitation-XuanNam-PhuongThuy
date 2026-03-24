import Image from "next/image"
import prewed4 from "../../assets/images/prewed4.jpg";
import prewed0 from "../../assets/images/prewed0.jpg";
import prewed3 from "../../assets/images/prewed3.jpg";
import prewed1_1 from "../../assets/images/prewed1.1.jpg";
import prewed1_2 from "../../assets/images/prewed1.2.jpg";
import prewed1_3 from "../../assets/images/prewed1.3.jpg";
import groom2 from "../../assets/images/groom2.jpg";
import bride2 from "../../assets/images/bride2.jpg";
import FloatToTop from "../atoms/FloatToTop";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Album = () => {
    const renderImage = (url: StaticImport, className?: string) => {
        return <Image src={url} alt='' className={`border-[1px] border-none md:border-solid border-secondary md:rounded-md content-box ` + className} />
    }
    return <div className="w-full aspect-[2/3] relative pt-10">
        <Image src={prewed0} alt='' className="z-1 absolute" />
        <div className="grid grid-cols-7 grid-rows-20 gap-1 relative z-2">
            <div className="col-span-5 row-span-3" />
            <FloatToTop className="col-span-2 row-span-3 pr-1 pt-1">
                {renderImage(prewed3)}
            </FloatToTop>
            <div className="col-span-5 row-span-3" />
            <FloatToTop className="col-span-2 row-span-3 pr-1 pt-1">
                {renderImage(prewed4)}
            </FloatToTop>
            <div className="col-span-7 h-20" />
            <FloatToTop className="col-span-7">
                <div className="flex gap-1 items-center justify-center w-full max-w-[550px]">
                    {renderImage(prewed1_1, 'w-[30%]')}
                    {renderImage(prewed1_2, 'w-[40%]')}
                    {renderImage(prewed1_3, 'w-[30%]')}
                </div>
            </FloatToTop>
        </div>
    </div>
}

export default Album