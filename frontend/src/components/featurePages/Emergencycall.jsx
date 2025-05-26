import React from 'react';

const Emergencycall = () => {
  return (
    <div className="overflow-x-auto  ">
      <table className="min-w-full leading-normal ">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-semibold text-zinc-300 dark:text-zinc-300 uppercase tracking-wider"
            >
              Emergency Service
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-semibold text-zinc-300 dark:text-zinc-300 uppercase tracking-wider"
            >
              Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              Police
            </td>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              100
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              Fire
            </td>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              101
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              Ambulance
            </td>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              108
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              Emergency (General)
            </td>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              112
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              Helpline
            </td>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              18001800550
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              Cleaning Issues
            </td>
            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-zinc-300">
              18003302550
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Emergencycall;