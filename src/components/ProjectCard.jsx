import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-gray-600 mb-2">Due: {project.dueDate}</p>
      <span className={`px-2 py-1 rounded-full text-xs ${
        project.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
      }`}>
        {project.status}
      </span>
    </div>
  );
};

export default ProjectCard;