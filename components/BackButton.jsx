'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from 'react-bootstrap';

const BackButton = () => {
    const router = useRouter()
    return (
        <Button onClick={()=>router.back()} className="mt-2">Back</Button>
    );
}

export default BackButton;
