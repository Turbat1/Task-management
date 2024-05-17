// pages/projects/[projectId].js
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h2>Project Details</h2>
      <p>Project ID: {projectId}</p>
      <Link href={`/projects/${projectId}/tasks`}>
        <a>View Tasks for this Project</a>
      </Link>
    </div>
  );
};

export default ProjectDetailsPage;
