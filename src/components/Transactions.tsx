import React, { useState } from 'react';

function Transactions() {
  const initialTransactions = [
    {
      id: 1,
      productName: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
      trxId: "54898568"
    },
    {
      id: 2,
      productName: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
      trxId: "54698458"
    },
    {
      id: 3,
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
      trxId: "25658415"
    },
    {
      id: 4,
      productName: "Gaming Mouse",
      color: "Black",
      category: "Accessories",
      price: "$99",
      trxId: "25658415"
    },
    {
      id: 5,
      productName: "Mouse Pad 12",
      color: "Black",
      category: "Accessories",
      price: "$99",
      trxId: "25658415"
    },
    {
      id: 6,
      productName: "Mouse Pad 20",
      color: "purple",
      category: "Accessories",
      price: "$9.98",
      trxId: "25658415"
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterTransactions(e.target.value);
  };

  const filterTransactions = (query) => {
    if (!query) {
      setTransactions(initialTransactions);
      return;
    }

    const filteredTransactions = initialTransactions.filter((transaction) =>
      transaction.productName.toLowerCase().includes(query.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <h1 className='mt-[35px] font-semibold text-2xl'>Transactions</h1>
      <div className='flex items-center justify-center h-[100px]  bg-blue-600'>
        <div className="flex w-full mx-10 rounded bg-white">
          <input
            className="w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none"
            type="search"
            name="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            type="button"
            className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
          >
            <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product id
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                TRX.Id
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {transaction.productName}
                </td>
                <td className="px-6 py-4">
                  {transaction.color}
                </td>
                <td className="px-6 py-4">
                  {transaction.category}
                </td>
                <td className="px-6 py-4">
                  {transaction.price}
                </td>
                <td className="px-6 py-4">
                  {transaction.trxId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Transactions;
