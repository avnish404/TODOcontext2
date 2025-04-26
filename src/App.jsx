import { TodoProvider } from "./TODOcontext"
import TodoForm from "./TODOform"
import TODOitem from "./TODOitem"

function App() {


  return (
    <TodoProvider>
    <div className=" bg-blue-950 min-h-screen flex flex-col items-center px-4 py-8 text-white ">
    <h1 className="w-full text-center text-2xl p-4 m-4 font-bold">Manage your TODOS</h1>
    <TodoForm />
    <TODOitem />
    </div>

   
    </TodoProvider>
  )
}

export default App
