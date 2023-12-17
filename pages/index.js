
export default function Home(props) {
  return (
    <div>
     <ul>
      {props.posts.map(p=>(
        <li key={p.id}>{p.title}</li>
      ))}
     </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  // console.log(posts.length);
  return {
    props: {
      posts,
    },
  }
}
