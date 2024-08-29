'use client'
import CommentModal from "@/components/about/CommentModal";
import Link from "next/link";
import { useState } from "react";

const page = () => {
    const [showModal, setShowaModal] = useState(false)
    return (
        <div>
            <h1 className="text-center py-5"> درباره ما </h1>
            <p className="px-80 my-10 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <div className="text-center w-full">
                <button className="rounded-full bg-cyan-500 text-white px-5 py-3 w-1/6" onClick={() => setShowaModal(true)}>ثبت نظر</button>
            </div>
            <div className="flex justify-center w-full mt-4">
                    <Link href={"/about/honors"} className="rounded-full bg-cyan-500 text-white px-5 py-3 flex justify-center w-1/6">افتخارات</Link>
            </div>

            {showModal && (<CommentModal setShowaModal={setShowaModal} />)}

        </div>
    );
};

export default page;