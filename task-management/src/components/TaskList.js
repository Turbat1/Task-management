// components/TaskList.js
const TaskList = ({ tasks }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title} - {task.status}</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;