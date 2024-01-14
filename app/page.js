import ListGroupItemLink from "@/components/ListGroupItemLink";
import { Container, ListGroup, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 w-100">
        <ListGroup>
          <ListGroupItemLink href={"/posts"} title="posts" />
          <ListGroupItemLink href={"/users"} title="users" />
          <ListGroupItemLink href={"/usersNoStore"} title="users no store" />
        </ListGroup>
      </Row>
    </Container>
  )
}
