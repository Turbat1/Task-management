// pages/projects/[projectId]/tasks.js
import { useRouter } from 'next/router';
import TaskList from '../../../components/TaskList';

const tasks = [
  { id: 1, title: 'Task 1', status: 'Pending' },
  { id: 2, title: 'Task 2', status: 'Completed' },
  { id: 3, title: 'Task 3', status: 'In Progress' },
];

const ProjectTasksPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h2>Tasks for Project ID: {projectId}</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ProjectTasksPage;
