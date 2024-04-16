import React from 'react';
import Link from 'next/link'
const Sidebar = () => {
    const items = [
        {title: "کاربران", props: {href: "/users"}},
        {title: "پست ها", props: {href: "/posts"}},
        {title: "گالری", props: {href: "/gallery"}},
        {title: "نظرات", props: {href: "/comments"}},
    ]
    return (
        <section className={"bg-white dark:bg-gray-500 w-sidebar_width fixed right-0 top-0 h-screen pt-navbar_height overflow-y-auto shadow-lg"}>
            <div className={"w-full p-4"}>
                <ul>
                    {items.map((item, i)=>(
                        <li key={"sedebarItems_"+i} className={"my-4 cursor-pointer dark:hover:bg-gray-500 hover:bg-blue-100 border border-blue-600 dark:border-white text-blue-600 dark:text-white rounded-md"}>
                            <Link href={item.props.href} className='w-full h-full block px-2 py-1'>
                                {item.title}
                            </Link>                            
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;