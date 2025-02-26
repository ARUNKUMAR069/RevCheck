import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Import the CSS file for custom styles

const ReportPage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`report-page ${theme === 'dark' ? 'dark' : ''} p-5 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center`}>
      <button
        onClick={toggleTheme}
        className="mb-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <motion.div
        className="bento-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Example grid items */}
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Total Sales</h3>
          <p className="text-2xl">$12,345</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">New Customers</h3>
          <p className="text-2xl">123</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Pending Orders</h3>
          <p className="text-2xl">45</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Completed Orders</h3>
          <p className="text-2xl">678</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Revenue</h3>
          <p className="text-2xl">$89,012</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Expenses</h3>
          <p className="text-2xl">$34,567</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Net Profit</h3>
          <p className="text-2xl">$54,445</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Customer Satisfaction</h3>
          <p className="text-2xl">95%</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Website Traffic</h3>
          <p className="text-2xl">10,000 visits</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Conversion Rate</h3>
          <p className="text-2xl">2.5%</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Average Order Value</h3>
          <p className="text-2xl">$123</p>
        </motion.div>
        <motion.div className="grid-item p-5 rounded-lg shadow" whileHover={{ scale: 1.05 }}>
          <h3 className="text-lg font-bold mb-2">Return Rate</h3>
          <p className="text-2xl">1.2%</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReportPage;