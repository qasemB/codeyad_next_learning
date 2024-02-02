export async function GET(request) {
    const data = [
        {id: 1, title: "product1", price: 1_000_000},
        {id: 2, title: "product2", price: 2_000_000},
    ]

    return Response.json({ data })
}

export async function POST(request) {
    const data = [
        {id: 1, title: "product1", price: 1_000_000},
    ]

    return Response.json({ data }, {
        status: 201
    })
}