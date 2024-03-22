import Todo from "./components/Todo"

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text='Learn React' />
            <Todo text='Master React' />
            <Todo text='Hello React' />
        </div>
    )
}
//Todo是一個自訂組件，可重複使用並且傳參數

export default App
