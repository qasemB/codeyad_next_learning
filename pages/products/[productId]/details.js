import { useRouter } from 'next/router';
import React from 'react';

const Details = () => {
    const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            <div>
                {productId}
            </div>
            details
        </div>
    );
}

export default Details;
