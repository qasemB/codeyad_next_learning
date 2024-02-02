export async function GET(request, context) {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name')
    const color = searchParams.get('color')
    // const {params} = context
    // const {productId} = params
    const data = [
        {id: 1, title: "product1", price: 1_000_000},
        {id: 2, title: "product2", price: 2_000_000},
    ]

    return Response.json({ name, color })
}