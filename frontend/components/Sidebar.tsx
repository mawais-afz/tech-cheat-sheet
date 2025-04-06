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
      { title: 'Data Structures', href: '/tech/programming/data-structures' },
      { title: 'Algorithms', href: '/tech/programming/algorithms' },
      { title: 'Design Patterns', href: '/tech/programming/design-patterns' }
    ]
  },
  {
    title: 'Cloud', 
    subItems: [
      { title: 'AWS Services', href: '/tech/cloud/aws' },
      { title: 'Azure Basics', href: '/tech/cloud/azure' },
      { title: 'GCP Fundamentals', href: '/tech/cloud/gcp' }
    ]
  },
  {
    title: 'DevOps',
    subItems: [
      { title: 'CI/CD', href: '/tech/devops/cicd' },
      { title: 'Infrastructure as Code', href: '/tech/devops/iac' },
      { title: 'Containerization', href: '/tech/devops/containers' }
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
      <nav className="p-4 space-y-4">
        {menuItems.map((item) => (
          <div key={item.title} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <button
              onClick={() => toggleMenu(item.title)}
              className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium"
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
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href || '#'}
                    className={`block p-3 text-sm ${
                      pathname === subItem.href 
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
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
