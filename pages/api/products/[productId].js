export default function handler(req, res) {
    const {productId} = req.query
    const products = [
        { id: 1, title: "product1", price: 10_000_000 },
        { id: 2, title: "product2", price: 20_000_000 },
        { id: 3, title: "product3", price: 30_000_000 },
        { id: 4, title: "product4", price: 40_000_000 }
    ]
    res.status(201).json(products.find(p => p.id == productId));
}