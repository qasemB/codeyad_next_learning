import BackButton from '@/components/BackButton';
import ListGroupItemLink from '@/components/ListGroupItemLink';
import React from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';

const getPostsService = async ()=>{
    const res = await fetch('http://localhost:4000/posts')
    const posts = await res.json()
    return posts
}

const Page = async () => {
    const posts = await getPostsService()
    async function create() {
        'use server'
     
        // ...
    }
     
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <BackButton/>
            <Row className="mt-3 w-100">
                <ListGroup>
                    {posts.map(p => (
                        <ListGroupItemLink key={p.id} href={`/posts/${p.id}`} title={p.title}/>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    );
}

export default Page;
