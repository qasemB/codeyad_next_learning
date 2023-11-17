import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter()
    const {productId} = router.query
    const handlePushToDetails = ()=>{
        // some action ....
        //according to response...
        router.push(`${productId}/details`)
    }
    return (
        <div>
            product:{productId}
            <div>
                <button onClick={handlePushToDetails}>
                    product : {productId} details
                </button>
            </div>
        </div>
    );
}

export default ProductId;
