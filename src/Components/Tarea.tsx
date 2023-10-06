type Props = {
    task: string,
    deleteTask: () => void
}

export const Tarea = ({task, deleteTask}:Props) => {
    return(
    <div className="task">
        <span>{task}</span>
        <button onClick={deleteTask}>Borrar Tarea</button>
    </div>
    )
}