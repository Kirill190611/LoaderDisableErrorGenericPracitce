type MyComponentProps<D> = {
  items: Array<D>
  defaultItem: D
}
function MyComponent<D>(props: MyComponentProps<D>) {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={'sasda'} />
      <MyComponent items={users} defaultItem={{name: "QQQ", age: 12}} />
    </>
  )
}

type User = {
  name: string
  age: number
}
