// import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const PostId = ({ post }) => {
    // const router = useRouter()
    // const router = useRouter()
    // return router.isFallback ? (
    //     <h1>Loading...</h1>
    // ) : 
    return (
        <div>
            <Button className="mt-2" onClick={() => router.back()} >Back</Button>
            <br/>
            <br/>
            {post.title}
            <br />
            {/* {user.phone}
            <br />
            {user.email}
            <br />
            {user.website}
            <br />
            {user.address.city} */}
        </div>
    );
}

export default PostId;

export async function getStaticPaths() {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // const users = await res.json()
    // const paths = users.map(u=>{
    //     return 
    // })
    return {
        paths:[
            { params: { postId: `1` } },
            { params: { postId: `2` } },
            { params: { postId: `3` } }
        ],
        fallback: "blocking"
    }
}


export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()
    console.log(post.id);
    return {
        props: {
            post,
        },
    }
}
