export const mockProjects = [
  {
    id: 1,
    name: "E-commerce Website Redesign",
    client: "TechGear Inc.",
    status: "active",
    startDate: "2023-05-01",
    dueDate: "2023-07-15",
    budget: 15000,
    description: "Redesign the user interface and improve the user experience of an existing e-commerce website selling tech gadgets and accessories.",
    tasks: [
      { id: 1, name: "User Research", status: "completed" },
      { id: 2, name: "Wireframing", status: "completed" },
      { id: 3, name: "UI Design", status: "in progress" },
      { id: 4, name: "Frontend Development", status: "not started" },
      { id: 5, name: "Backend Integration", status: "not started" },
    ],
    team: [
      { id: 1, name: "Alice Johnson", role: "UI/UX Designer" },
      { id: 2, name: "Bob Smith", role: "Frontend Developer" },
      { id: 3, name: "Charlie Brown", role: "Backend Developer" },
    ]
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "HealthTrack",
    status: "active",
    startDate: "2023-06-01",
    dueDate: "2023-08-30",
    budget: 25000,
    description: "Develop a cross-platform mobile app for both iOS and Android using React Native. The app will help users track their fitness and nutrition goals.",
    tasks: [
      { id: 1, name: "Requirements Gathering", status: "completed" },
      { id: 2, name: "App Architecture Design", status: "completed" },
      { id: 3, name: "UI/UX Design", status: "in progress" },
      { id: 4, name: "Core Functionality Development", status: "in progress" },
      { id: 5, name: "API Integration", status: "not started" },
      { id: 6, name: "Testing and Bug Fixing", status: "not started" },
    ],
    team: [
      { id: 1, name: "David Lee", role: "Project Manager" },
      { id: 2, name: "Emma Watson", role: "UI/UX Designer" },
      { id: 3, name: "Frank Zhang", role: "React Native Developer" },
      { id: 4, name: "Grace Kim", role: "Backend Developer" },
    ]
  },
  {
    id: 3,
    name: "SEO Optimization",
    client: "GreenThumb Gardening",
    status: "completed",
    startDate: "2023-04-01",
    dueDate: "2023-06-01",
    budget: 5000,
    description: "Optimize the client's gardening blog and online store for search engines to improve organic traffic and rankings.",
    tasks: [
      { id: 1, name: "SEO Audit", status: "completed" },
      { id: 2, name: "Keyword Research", status: "completed" },
      { id: 3, name: "On-Page Optimization", status: "completed" },
      { id: 4, name: "Content Strategy", status: "completed" },
      { id: 5, name: "Link Building", status: "completed" },
    ],
    team: [
      { id: 1, name: "Hannah Moore", role: "SEO Specialist" },
      { id: 2, name: "Ian Foster", role: "Content Writer" },
    ]
  },
  {
    id: 4,
    name: "CRM System Implementation",
    client: "SalesForce Pro",
    status: "active",
    startDate: "2023-07-01",
    dueDate: "2023-10-31",
    budget: 40000,
    description: "Implement and customize a CRM system to streamline the client's sales processes and improve customer relationship management.",
    tasks: [
      { id: 1, name: "Requirements Analysis", status: "completed" },
      { id: 2, name: "System Architecture Design", status: "in progress" },
      { id: 3, name: "Data Migration Planning", status: "in progress" },
      { id: 4, name: "CRM Customization", status: "not started" },
      { id: 5, name: "Integration with Existing Systems", status: "not started" },
      { id: 6, name: "User Training", status: "not started" },
    ],
    team: [
      { id: 1, name: "Jack Robinson", role: "Project Manager" },
      { id: 2, name: "Karen Chen", role: "Business Analyst" },
      { id: 3, name: "Liam Wilson", role: "CRM Developer" },
      { id: 4, name: "Mia Garcia", role: "Data Migration Specialist" },
    ]
  }
];
  
  export const mockEarnings = {
    total: 15000,
    monthly: [
      { month: 'Jan', earnings: 2000 },
      { month: 'Feb', earnings: 2200 },
      { month: 'Mar', earnings: 1800 },
      { month: 'Apr', earnings: 2400 },
      { month: 'May', earnings: 2600 },
      { month: 'Jun', earnings: 4000 },
    ],
  };
  
  export const mockPayments = [
    { id: 1, amount: 1500, status: 'paid', date: '2023-05-15' },
    { id: 2, amount: 2000, status: 'unpaid', date: '2023-06-01' },
    { id: 3, amount: 1800, status: 'paid', date: '2023-06-10' },
   
  ];