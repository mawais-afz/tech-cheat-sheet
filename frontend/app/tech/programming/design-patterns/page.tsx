import Sidebar from "@/components/Sidebar";

export default function DesignPatterns() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-300">Design Patterns Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Creational Patterns */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600 dark:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Creational Patterns
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Singleton</h3>
                <p className="text-gray-600 dark:text-gray-400">Ensures a class has only one instance and provides a global point of access to it.</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Factory Method</h3>
                <p className="text-gray-600 dark:text-gray-400">Defines an interface for creating objects but lets subclasses decide which class to instantiate.</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Abstract Factory</h3>
                <p className="text-gray-600 dark:text-gray-400">Provides an interface for creating families of related or dependent objects.</p>
              </div>
            </div>
          </section>

          {/* Structural Patterns */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Structural Patterns
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Adapter</h3>
                <p className="text-gray-600 dark:text-gray-400">Converts the interface of a class into another interface clients expect.</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Decorator</h3>
                <p className="text-gray-600 dark:text-gray-400">Attaches additional responsibilities to an object dynamically.</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Facade</h3>
                <p className="text-gray-600 dark:text-gray-400">Provides a unified interface to a set of interfaces in a subsystem.</p>
              </div>
            </div>
          </section>

          {/* Behavioral Patterns */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Behavioral Patterns
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Observer</h3>
                <p className="text-gray-600 dark:text-gray-400">Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400">Defines a family of algorithms, encapsulates each one, and makes them interchangeable.</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Command</h3>
                <p className="text-gray-600 dark:text-gray-400">Encapsulates a request as an object, letting you parameterize clients with different requests.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
