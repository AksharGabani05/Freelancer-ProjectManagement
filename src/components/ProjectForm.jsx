import React, { useState } from 'react';

const ProjectForm = ({ onSubmit, initialProject = {} }) => {
  const [project, setProject] = useState({
    name: '',
    client: '',
    status: 'active',
    startDate: '',
    dueDate: '',
    budget: '',
    description: '',
    tasks: [{ id: Date.now(), name: '', status: 'not started' }],
    team: [{ id: Date.now(), name: '', role: '' }],
    ...initialProject
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleTaskChange = (index, field, value) => {
    const updatedTasks = project.tasks.map((task, i) => 
      i === index ? { ...task, [field]: value } : task
    );
    setProject(prev => ({ ...prev, tasks: updatedTasks }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedTeam = project.team.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    setProject(prev => ({ ...prev, team: updatedTeam }));
  };

  const addTask = () => {
    setProject(prev => ({
      ...prev,
      tasks: [...prev.tasks, { id: Date.now(), name: '', status: 'not started' }]
    }));
  };

  const addTeamMember = () => {
    setProject(prev => ({
      ...prev,
      team: [...prev.team, { id: Date.now(), name: '', role: '' }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={project.name}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
        <input
          type="text"
          id="client"
          name="client"
          value={project.client}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          name="status"
          value={project.status}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={project.startDate}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={project.dueDate}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={project.budget}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={project.description}
          onChange={handleInputChange}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tasks</label>
        {project.tasks.map((task, index) => (
          <div key={task.id} className="flex space-x-2 mt-2">
            <input
              type="text"
              value={task.name}
              onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
              placeholder="Task name"
              className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <select
              value={task.status}
              onChange={(e) => handleTaskChange(index, 'status', e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="not started">Not Started</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        ))}
        <button type="button" onClick={addTask} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
          + Add Task
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Team Members</label>
        {project.team.map((member, index) => (
          <div key={member.id} className="flex space-x-2 mt-2">
            <input
              type="text"
              value={member.name}
              onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
              placeholder="Member name"
              className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="text"
              value={member.role}
              onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
              placeholder="Role"
              className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        ))}
        <button type="button" onClick={addTeamMember} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
          + Add Team Member
        </button>
      </div>
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
        {initialProject.id ? 'Update Project' : 'Add Project'}
      </button>
    </form>
  );
};

export default ProjectForm;