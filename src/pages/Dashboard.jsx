import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Earnings', value: '$15,300', icon: '💰', color: 'bg-green-100', textColor: 'text-green-600' },
    { title: 'Active Projects', value: '7', icon: '📂', color: 'bg-blue-100', textColor: 'text-blue-600' },
    { title: 'Pending Invoices', value: '3', icon: '📄', color: 'bg-yellow-100', textColor: 'text-yellow-600' },
    { title: 'Completed Projects', value: '12', icon: '✅', color: 'bg-purple-100', textColor: 'text-purple-600' },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Earnings',
      },
    },
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} shadow-md rounded-xl p-6 flex items-center justify-between`}
          >
            <div>
              <h2 className={`text-lg font-semibold ${stat.textColor}`}>{stat.title}</h2>
              <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
            </div>
            <div className={`text-4xl ${stat.textColor}`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Earnings Overview</h2>
        <div className="h-[400px] lg:h-[500px]">
          <Bar options={chartOptions} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
