export default function handler(req, res) {
    const {params} = req.query
    console.log(params);
    res.status(201).json(params);
}