import React, { useState, useEffect } from "react";
import { useTodo } from "./TODOcontext";
import { Trash2, Pencil,Save } from "lucide-react";

function TODOitem() {
  const { todos = [], deleteTodo, toggleTodo, updateTodo } = useTodo();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  // const[isCheck,setIsCheck] = useState(false);

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
    
  };

  const handleUpdate = (id) => {
    const trimmed = editText.trim();
    if (trimmed) {
      updateTodo(id, trimmed);
      setEditingId(null);
    }
  };

 

  // Optional: Log updated todos
  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);

  return (
    <div className="min-h-[100px] w-full max-w-sm flex flex-col gap-2 overflow-y-scroll">
      {todos && todos.length > 0 ? (
        todos.map(
          (todo) =>
            todo &&
            todo.id &&
            todo.text !== undefined && (
              <div
                key={todo.id}
                className={`text-2xl bg-blue-900/50 text-center rounded-md gap-2 overflow-hidden flex flex-row justify-between p-2 ${
                  todo.complete ? "bg-gray-500/50 line-through" : ""
                }`}
              >
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleUpdate(todo.id);
                    }}
                    onBlur={() => handleUpdate(todo.id)}
                    className="text-black px-2 py-1 rounded w-full bg-white mr-2"
                    autoFocus
                  />
                ) : (
                  <span className="flex-1 text-left">{todo.text}</span>
                )}

                <div className="flex flex-row gap-2 items-center">
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-4 w-4 accent-green-500"
                    onClick={()=>toggleTodo(todo.id)}
                    id={todo.id}
                  />

                  <button onClick={() => handleEdit(todo)} disabled={todo.complete} className={`${todo.complete?"line-through text-red-500":''}`}>
                    {/* <Pencil /> */}
                    {
                      editingId===todo.id? <Save /> : <Pencil />
                      
                    }
                  </button>

                  <button onClick={() => {deleteTodo(todo.id) 
                    setIsCheck(false)}}>
                    <Trash2 />
                  </button>
                 
                  
                </div>
              </div>
            )
        )
      ) : (
        <div className="text-center">No todos available</div>
      )}
    </div>
  );
}

export default TODOitem;
