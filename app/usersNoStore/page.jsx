import BackButton from '@/components/BackButton';
import ListGroupItemLink from '@/components/ListGroupItemLink';
import { revalidatePath } from 'next/cache';
import React from 'react';
import { Button, Container, Form, ListGroup, Row } from 'react-bootstrap';

const getUsersService = async () => {
    const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc')
    const users = await res.json()
    return users
}
export const fetchCache  = 'force-no-store'

const Users = async () => {
    const users = await getUsersService()

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <BackButton />

            <Row className="mt-3 w-100">
                <ListGroup>
                    {users.map(p => (
                        <ListGroupItemLink key={p.id} href={`/users/${p.id}`} title={p.name} />
                    ))}
                </ListGroup>
            </Row>
        </Container>
    );
}

export default Users;
