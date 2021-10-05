import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Talk with BS" />
      <Todo text="Propose IR " />
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full react course" />
    </div>
  );
}

export default App;
