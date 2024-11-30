import React, { useState } from 'react';
import { mockPayments } from '../utils/mockData';

const PaymentRow = ({ payment, onMarkPaid }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm font-medium text-gray-900">${payment.amount}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {payment.status}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      {payment.status === 'unpaid' && (
        <button
          onClick={() => onMarkPaid(payment.id)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Mark as Paid
        </button>
      )}
    </td>
  </tr>
);

const Payments = () => {
  const [payments, setPayments] = useState(mockPayments);

  const handleMarkPaid = (id) => {
    setPayments(payments.map(payment => 
      payment.id === id ? { ...payment, status: 'paid' } : payment
    ));
  };

  const totalEarnings = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const paidEarnings = payments.filter(p => p.status === 'paid').reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="space-y-6 p-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Payments</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Total Earnings</h3>
          <p className="text-3xl font-bold text-green-600">${totalEarnings.toLocaleString()}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Paid Earnings</h3>
          <p className="text-3xl font-bold text-blue-600">${paidEarnings.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map(payment => (
              <PaymentRow key={payment.id} payment={payment} onMarkPaid={handleMarkPaid} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;