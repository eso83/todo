const Todo=()=>{
return(
    <>
    <div className="container">
        <h1>To-Do List</h1>
        <input type="text"  placeholder="add your task"/>
        <button>Add</button>
        <div className="todoList">
            <ul>
            <li>task1</li>
            <li>task2</li>
            <li>task3</li>
            <li>task4</li>
            <li>task5</li>
            </ul>
        </div>
    </div>
    </>
)
}
export default Todo