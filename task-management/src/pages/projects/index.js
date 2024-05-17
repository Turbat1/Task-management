// pages/projects/index.js
import Link from 'next/link';

const projects = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
  { id: 3, name: 'Project C' },
];

const ProjectsListPage = () => {
  return (
    <div>
      <h2>List of Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a>{project.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsListPage;
