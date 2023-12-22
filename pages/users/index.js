import { Container, ListGroup, Row } from "react-bootstrap"

export default function Users(props) {
  return (
    <Container>
      <Row className="mt-5">
        <ListGroup>
          {props.users.map(u => (
            <ListGroup.Item key={u.id}>{u.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  // console.log(posts.length);
  return {
    props: {
      users,
    },
  }
}
