'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  title: string;
  href?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Programming',
    subItems: [
      { title: 'Data Structures', href: '/programming/data-structures' },
      { title: 'Algorithms', href: '/programming/algorithms' },
      { title: 'Design Patterns', href: '/programming/design-patterns' }
    ]
  },
  {
    title: 'Cloud', 
    subItems: [
      { title: 'AWS Services', href: '/cloud/aws' },
      { title: 'Azure Basics', href: '/cloud/azure' },
      { title: 'GCP Fundamentals', href: '/cloud/gcp' }
    ]
  },
  {
    title: 'DevOps',
    subItems: [
      { title: 'CI/CD', href: '/devops/cicd' },
      { title: 'Infrastructure as Code', href: '/devops/iac' },
      { title: 'Containerization', href: '/devops/containers' }
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>(() => {
    // Initialize with open state for menu containing current path
    const initialState: { [key: string]: boolean } = {};
    menuItems.forEach(item => {
      if (item.subItems?.some(subItem => subItem.href === pathname)) {
        initialState[item.title] = true;
      }
    });
    return initialState;
  });

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <nav className="p-4">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-2">
            <button
              onClick={() => toggleMenu(item.title)}
              className="w-full flex items-center justify-between p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              <span className="font-medium">{item.title}</span>
              <svg
                className={`w-4 h-4 transition-transform ${openMenus[item.title] ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenus[item.title] && item.subItems && (
              <div className="ml-4 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href || '#'}
                    className={`block p-2 text-sm rounded-md ${
                      pathname === subItem.href 
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
