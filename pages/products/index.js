import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>products page:</h1>
            <Link href={{
                pathname: "/products/1",
                query: {id: 1}
            }}>product1</Link>
            <br/>
            <Link href={{
                pathname: "/products/2",
                query: {id: 2}
            }} replace>product2</Link>
            <br/>
            <Link href={{
                pathname: "/products/3",
                query: {id: 3}
            }}>product3</Link>
            <br/>
            <Link href={{
                pathname: "/products/4",
                query: {id: 4}
            }}>product4</Link>
        </div>
    );
}

export default Index;
