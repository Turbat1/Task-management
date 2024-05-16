import { useRouter } from 'next/router';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h2>Project Details</h2>
      <p>Project ID: {projectId}</p>
      {/* Add components to display details of the project */}
    </div>
  );
};
export default ProjectDetailsPage;
