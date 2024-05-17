import React from "react";
import { FaTasks, FaUserFriends, FaRegChartBar, FaClipboardCheck } from "react-icons/fa";
import clsx from "clsx";

const stats = [
  {
    label: "Manage Tasks",
    description: "Create, assign, and track tasks effortlessly.",
    icon: <FaTasks />,
    bg: "bg-blue-500",
  },
  {
    label: "Collaborate with Team",
    description: "Work together with your team seamlessly.",
    icon: <FaUserFriends />,
    bg: "bg-green-500",
  },
  {
    label: "Track Progress",
    description: "Monitor the progress of your projects in real-time.",
    icon: <FaRegChartBar />,
    bg: "bg-yellow-500",
  },
  {
    label: "Complete Tasks",
    description: "Mark tasks as completed and celebrate your achievements.",
    icon: <FaClipboardCheck />,
    bg: "bg-pink-500",
  },
];

const Card = ({ label, description, bg, icon }) => {
  return (
    <div className='w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between'>
      <div className='h-full flex flex-1 flex-col justify-between'>
        <p className='text-lg font-semibold text-gray-700'>{label}</p>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
      <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center text-white", bg)}>
        {icon}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className='h-full py-4'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Welcome to Task Manager</h1>
      <p className='text-lg text-center text-gray-600 mb-12'>Your all-in-one solution for task management.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
        {stats.map((stat, index) => (
          <Card key={index} {...stat} />
        ))}
      </div>
      <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-gray-600 font-semibold'>How It Works</h4>
        <p className='text-gray-600 mt-2'>
          Task Manager helps you organize your tasks, collaborate with your team, and track your progress to achieve your goals efficiently.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
