'use client'
import Link from 'next/link';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ListGroupItemLink = ({href = "", title}) => {
    return (
        <ListGroup.Item action>
            <Link className="w-100 d-block text-decoration-none" href={href}>{title}</Link>
        </ListGroup.Item>
    );
}

export default ListGroupItemLink;
