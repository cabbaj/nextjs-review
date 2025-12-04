async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("http response obj:", res);

  // set delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await res.json();
  return data;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const AboutPage = async () => {
  const todos: Todo[] = await fetchTodos();
  console.log("array obj:", todos);
  return (
    <div>
      AboutPage
      {todos.map((todo, i) => {
        return (
          <p key={i}>
            {i} {todo.title}
          </p>
        );
      })}
    </div>
  );
};
export default AboutPage;
