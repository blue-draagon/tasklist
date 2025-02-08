import './App.css';
import Header from "./components/Header";
import TaskListContent from "./components/TaskListContent";

function App() {
    console.log("App state change")

    return (
        <div className="App">
            <Header/>
            <TaskListContent />
        </div>
    );
}

export default App;
