import Sidebar from "@/components/Sidebar";

export default function DesignPatterns() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Design Patterns Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Creational Patterns */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Creational Patterns</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Singleton</h3>
                <p className="text-gray-600 dark:text-gray-400">Ensures a class has only one instance and provides a global point of access to it.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Factory Method</h3>
                <p className="text-gray-600 dark:text-gray-400">Defines an interface for creating objects but lets subclasses decide which class to instantiate.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Abstract Factory</h3>
                <p className="text-gray-600 dark:text-gray-400">Provides an interface for creating families of related or dependent objects.</p>
              </div>
            </div>
          </section>

          {/* Structural Patterns */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Structural Patterns</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Adapter</h3>
                <p className="text-gray-600 dark:text-gray-400">Converts the interface of a class into another interface clients expect.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Decorator</h3>
                <p className="text-gray-600 dark:text-gray-400">Attaches additional responsibilities to an object dynamically.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Facade</h3>
                <p className="text-gray-600 dark:text-gray-400">Provides a unified interface to a set of interfaces in a subsystem.</p>
              </div>
            </div>
          </section>

          {/* Behavioral Patterns */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Behavioral Patterns</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Observer</h3>
                <p className="text-gray-600 dark:text-gray-400">Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400">Defines a family of algorithms, encapsulates each one, and makes them interchangeable.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Command</h3>
                <p className="text-gray-600 dark:text-gray-400">Encapsulates a request as an object, letting you parameterize clients with different requests.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
