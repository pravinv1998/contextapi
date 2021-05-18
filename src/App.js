import Todos from "./components/Todos";
import TodoProvider from "./context/TodoProvider";
import "./styles/App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;
