import Link from "next/link";

const CourseSlot = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            اسلات دوره ها...
            <Link href={"/userpanel/finished"} className="text-blue-400">دوره های پایان یافته</Link>
        </div>
    );
};

export default CourseSlot;