import React from 'react';
import Chart from './Chart'; 

function Dashboard() {
  return (
    <div className="flex flex-col space-y-5 py-6 px-8 justify-center content-center">
      <h2 className='font-extrabold text-4xl'>Dashboard</h2>

      <div className="flex space-x-4">
        <div className="w-2/5 h-[85px] border border-gray-500 rounded flex flex-col justify-center items-center p-2 text-gray-600">
          <span className='font-extrabold text-2xl' >Ali</span>
          <span className="text-gray-600 font-bold">Your Balance: 50000</span>
        </div>
        <div className="w-2/5 h-[85px] border border-gray-500 rounded flex flex-col justify-center items-center p-2 text-gray-600">
          <span className='font-extrabold text-2xl' >Ahmad</span>
          <span className="text-gray-600 font-bold">Your Expenses: 20000</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center">
        <div className="w-full md:w-4/5 lg:w-3/5 h-[200px] mb-[100px]">
          <Chart />
        </div>
      </div>

      <div className="flex  space-x-8">
        <div className="w-2/5 h-[85px] border border-gray-500 rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Your Activity</span>
          <li className="text-gray-500">Your Voucher Fee is 5000</li>
        </div>
        <div className="w-2/5 h-[85px] border border-gray-500 rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Pending Bills</span>
          <li className="text-gray-500">Broadband Bills Rs:7000</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
