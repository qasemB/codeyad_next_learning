import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from 'react-bootstrap';

const UserId = ({ user }) => {
    const router = useRouter()
    return (
        <div>
            <Button className="mt-2" onClick={() => router.back()} >Back</Button>
            <br/>
            <br/>
            {user.name}
            <br />
            {user.phone}
            <br />
            {user.email}
            <br />
            {user.website}
            <br />
            {user.address.city}
        </div>
    );
}

export default UserId;

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    const paths = users.map(u=>{
        return { params: { userId: `${u.id}` } }
    })
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const { params } = context
    console.log(params.userId);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const user = await res.json()
    return {
        props: {
            user,
        },
    }
}
