import Sidebar from "@/components/Sidebar";

export default function DataStructures() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500 dark:from-green-400 dark:to-blue-300">Data Structures Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Arrays and Lists */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-600 dark:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Arrays and Lists
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Array</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Access:</span> O(1)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Search:</span> O(n)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Insertion:</span> O(n)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Deletion:</span> O(n)</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Linked List</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Access:</span> O(n)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Search:</span> O(n)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Insertion:</span> O(1)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-green-600 dark:text-green-400">Deletion:</span> O(1)</p>
              </div>
            </div>
          </section>

          {/* Trees */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Trees
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Binary Search Tree</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-600 dark:text-blue-400">Search:</span> O(log n) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-600 dark:text-blue-400">Insertion:</span> O(log n) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-600 dark:text-blue-400">Deletion:</span> O(log n) average, O(n) worst</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">AVL Tree</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-600 dark:text-blue-400">Search:</span> O(log n)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-600 dark:text-blue-400">Insertion:</span> O(log n)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-600 dark:text-blue-400">Deletion:</span> O(log n)</p>
              </div>
            </div>
          </section>

          {/* Hash Tables */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Hash Tables
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Hash Table</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-purple-600 dark:text-purple-400">Search:</span> O(1) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-purple-600 dark:text-purple-400">Insertion:</span> O(1) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-purple-600 dark:text-purple-400">Deletion:</span> O(1) average, O(n) worst</p>
              </div>
            </div>
          </section>

          {/* Graphs */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-600 dark:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Graphs
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Adjacency List</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Storage:</span> O(V + E)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Add Vertex:</span> O(1)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Add Edge:</span> O(1)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Remove Vertex:</span> O(V + E)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Remove Edge:</span> O(E)</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Adjacency Matrix</h3>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Storage:</span> O(V²)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Add Vertex:</span> O(V²)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Add Edge:</span> O(1)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Remove Vertex:</span> O(V²)</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-orange-600 dark:text-orange-400">Remove Edge:</span> O(1)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
