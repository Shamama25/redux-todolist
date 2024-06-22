import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../components/TodoSlices';

function Todo() {
  const [text, setText] = useState('');
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
        })
      );
      setText('');
    }
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSaveEdit = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({
        id,
        text: editText,
      }));
      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">TO DO LIST</h2>
          <input
            type="text"
            placeholder="Type here"
            value={text}
            onChange={e => setText(e.target.value)}
            className="input input-bordered input-primary w-full mb-4 py-2 px-3 rounded"
          />
          <div className="flex justify-center">
            <button onClick={handleAddTodo} className="btn btn-primary">
              Add Task
            </button>
          </div>
          <ul className="mt-4">
            {todos.map(todo => (
              <li key={todo.id} className="flex justify-between items-center mb-2">
                {editingId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={e => setEditText(e.target.value)}
                      className="input input-bordered input-primary w-full mb-4 py-2 px-3 rounded"
                    />
                    <button onClick={() => handleSaveEdit(todo.id)} className="btn btn-sm btn-primary">
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span>{todo.text}</span>
                    <button onClick={() => handleEditTodo(todo.id, todo.text)} className="btn btn-sm btn-secondary">
                      Edit
                    </button>
                    <button onClick={() => handleRemoveTodo(todo.id)} className="btn btn-sm bg-[#820300] text-[#fff]">
                      Remove
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
