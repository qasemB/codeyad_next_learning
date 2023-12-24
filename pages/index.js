import Link from "next/link"
import { Container, ListGroup, Row } from "react-bootstrap"

export default function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 w-100">
        <ListGroup>
            <ListGroup.Item action>
              <Link className="w-100 d-block text-decoration-none" href={"/posts"}>posts</Link>
            </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  )
}
