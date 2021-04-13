import React from "react"

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
      ])
      setInputText("")
    };
    const statusHandler = (e) => {
      setStatus(e.target.value)
    }
    return (
        <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">همه</option>
          <option value="completed">تکمیل شده</option>
          <option value="uncompleted">تکمیل نشده</option>
        </select>
      </div>
    </form>
    );
}
export default Form;
