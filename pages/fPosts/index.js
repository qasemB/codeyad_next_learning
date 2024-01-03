import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Button, Container, ListGroup, Row } from "react-bootstrap"

export default function Posts(props) {
  const [filteredPosts, setFilteredPosts] = useState(props.posts)
  const router = useRouter()

  const handleFilterPosts = async (userId)=>{
    const res = await fetch(`http://localhost:4000/posts?userId=${userId}`)
    const posts = await res.json()
    setFilteredPosts(posts)
    router.push(`/fPosts?userId=${userId}`, null, {shallow: true})
  }

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Button className="mt-2" onClick={()=>router.back()} >Back</Button>
      <Button className="mt-2" onClick={()=>handleFilterPosts(1)} >Filter</Button>
      <Row className="mt-3 w-100">
        <ListGroup>
          {filteredPosts.map(p => (
            <ListGroup.Item key={p.id}>
              <Link className="text-decoration-none" href={`/posts/${p.id}`}>{p.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const {query} = context
  const {userId} = query
  const q = userId ? `?userId=${userId}` : ''
  const res = await fetch(`http://localhost:4000/posts${q}`)
  const posts = await res.json()
  return {
    props: {
      posts,
    }
  }
}
