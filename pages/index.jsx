import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link href={"/about"} style={{color:"blue"}}>About</Link>
            <br/>
            <Link href={"/products"}>Products</Link>
            <br/>
            <Link href={"/houses"}>Houses</Link>
        </div>
    );
}

export default Index;
