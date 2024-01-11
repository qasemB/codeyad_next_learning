import BackButton from '@/components/BackButton';
import ListGroupItemLink from '@/components/ListGroupItemLink';
import React from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';

export async function generateStaticParams() {
    return [
        {userId: "1"},
        {userId: "2"},
        {userId: "3"}
    ]
}

const getUserService = async (userId) => {
    const res = await fetch(`http://localhost:4000/users/${userId}`)
    const user = await res.json()
    return user
}

const User = async ({ params }) => {
    const user = await getUserService(params.userId)
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <BackButton />
            <Row className="mt-3 w-100">
                <ListGroup>
                    <ListGroupItemLink title={user.id} />
                    <ListGroupItemLink title={user.name} />
                    <ListGroupItemLink title={user.email} />
                    <ListGroupItemLink title={user.address.city} />
                </ListGroup>
            </Row>
        </Container>
    );
}

export default User;
