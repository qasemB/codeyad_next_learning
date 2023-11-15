import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            product:{productId}
        </div>
    );
}

export default ProductId;
