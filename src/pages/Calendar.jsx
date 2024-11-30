import React, { useState } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: new Date(2023, 5, 15), title: 'Project Deadline' },
    { date: new Date(2023, 5, 20), title: 'Client Meeting' },
  ]);
  const [newEvent, setNewEvent] = useState({ date: '', title: '' });

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.date && newEvent.title) {
      setEvents([...events, { date: new Date(newEvent.date), title: newEvent.title }]);
      setNewEvent({ date: '', title: '' });
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Calendar</h2>

      {/* Calendar Navigation */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevMonth}
            className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            &lt; Prev
          </button>
          <h3 className="text-xl font-bold text-gray-800">
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={handleNextMonth}
            className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Next &gt;
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mt-4">
          {DAYS.map((day) => (
            <div key={day} className="text-center font-semibold text-gray-600">
              {day}
            </div>
          ))}
          {[...Array(firstDayOfMonth).keys()].map((_, i) => (
            <div key={i} className="h-20"></div>
          ))}
          {[...Array(daysInMonth).keys()].map((i) => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
            const dayEvents = events.filter((event) =>
              event.date.toDateString() === date.toDateString()
            );
            return (
              <div
                key={i}
                className="h-20 bg-gray-100 rounded-lg p-2 flex flex-col justify-between"
              >
                <div className="text-gray-800 font-semibold">{i + 1}</div>
                {dayEvents.map((event, index) => (
                  <div
                    key={index}
                    className="text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 mt-1"
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add New Event */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Event</h3>
        <form onSubmit={handleAddEvent} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calendar;
