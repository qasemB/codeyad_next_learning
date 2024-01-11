import BackButton from '@/components/BackButton';
import ListGroupItemLink from '@/components/ListGroupItemLink';
import React from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';

export async function generateStaticParams() {
    return [
        {postId: "1"},
        {postId: "2"},
        {postId: "3"}
    ]
}

const getPostsService = async (postId) => {
    const res = await fetch(`http://localhost:4000/posts/${postId}`)
    const post = await res.json()
    return post
}

export const revalidate = 30

const Page = async ({ params }) => {
    const post = await getPostsService(params.postId)
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <BackButton />
            <Row className="mt-3 w-100">
                <ListGroup>
                    <ListGroupItemLink title={post.id} />
                    <ListGroupItemLink title={post.title} />
                </ListGroup>
            </Row>
        </Container>
    );
}

export default Page;
