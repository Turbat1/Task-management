import { useRouter } from 'next/router';

const ProjectTasksPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h2>Tasks for Project ID: {projectId}</h2>
      {/* Add components to display tasks associated with the project */}
    </div>
  );
};
export default ProjectTasksPage;
