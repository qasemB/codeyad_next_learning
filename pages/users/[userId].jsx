import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from 'react-bootstrap';

const UserId = ({user}) => {
    const router = useRouter()
    return (
        <div className='p-5'>
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

export async function getServerSideProps(context) {
    const { params , req, res, query} = context
    // res.setHeader('Set-Cookie', [`page=${params.userId}`])
    // console.log(req.headers.cookie);
    console.log(query);
    const response = await fetch(`http://localhost:4000/users/${params.userId}`)
    const user = await response.json()
    return {
        props: {
            user,
        }
    }
}
