import Image from "next/image";
const page = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="grid col-start-2">
                {[...Array(28).keys()].map(num => (
                    <div key={num} className="w-full h-80 my-5 rounded-2xl overflow-hidden relative">
                        <Image 
                        src={`/assets/images/a${num+1}.jpg`} 
                        width={1000} 
                        height={150} 
                        alt=""
                        placeholder="blur" 
                        blurDataURL="/assets/images/loader.svg" 
                        loading="lazy"  
                        className="min-w-full min-h-full object-cover" 
                        quality={100}
                        />
                        {/* <img src={`/assets/images/a${num+1}.jpg`}  width={500}  height={500}  alt="" className="min-w-full min-h-full object-cover" /> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;