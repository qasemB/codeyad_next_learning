import Link from "next/link"
import { useRouter } from "next/router"
import { Button, Container, ListGroup, Row } from "react-bootstrap"

export default function Posts(props) {
  const router = useRouter()
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Button className="mt-2" onClick={()=>router.back()} >Back</Button>
      <Row className="mt-3 w-100">
        <ListGroup>
          {props.posts.map(p => (
            <ListGroup.Item key={p.id}>
              <Link className="text-decoration-none" href={`/posts/${p.id}`}>{p.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
