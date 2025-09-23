import React, { useState } from 'react';
import useStore from './store/useStore';
import { useSearch } from './hooks/useSearch';
import ToolGrid from './components/ToolGrid';
import Header from './components/Header';

function App() {
  const { categories, activeCategory, setActiveCategory, searchText } = useStore();
  const filteredTools = useSearch();

  const toolsToShow = searchText
    ? filteredTools
    : categories.find(cat => cat.id === activeCategory)?.tools || [];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto p-4">
        <div className="flex space-x-2 border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <ToolGrid tools={toolsToShow} />
        
      </main>
    </div>
  );
}

export default App;
