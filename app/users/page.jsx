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

const Users = async () => {
    const users = await getUsersService()

    const createUserAction = async (formData) => {
        'use server'
        const name = formData.get("name")
        const email = formData.get("email")
        const res = await fetch('http://localhost:4000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        console.log(res.status);
        // if (res.status == 200) {
            revalidatePath('/users')
        // }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            <BackButton />

            <form className='text-right w-50' action={createUserAction}>
                <h3>Create User</h3>
                <input className='form-control mt-2' type="text" name="name" placeholder='Name' />
                <input className='form-control mt-2' type="email" name="email" placeholder='Email' />
                <button className='btn btn-primary mt-2' type="submit">Confirm</button>
            </form>

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
