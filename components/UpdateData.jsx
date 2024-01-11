'use client'
import { handleUpdatePath } from '@/actions/users';
import React from 'react';
import { Button } from 'react-bootstrap';

const UpdateData = ({path}) => {
    return (
        <Button className='mt-2' onClick={()=>handleUpdatePath(path)}>
            Update : ({path})
        </Button>
    );
}

export default UpdateData;
