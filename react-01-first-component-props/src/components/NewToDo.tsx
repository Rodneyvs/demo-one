import React, { useRef } from "react";
import './NewTodo.css';
interface NewToDoProps  {
    onAddToDo: (todoText:string) => void;
}
const NewToDo: React.FC<NewToDoProps> = props => {

    const textInputRef = useRef<HTMLInputElement>(null)
    const todoSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value
        console.log(enteredText)
        props.onAddToDo(enteredText)
    }

return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text"  id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>
)
}
export default NewToDo