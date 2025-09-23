import React, { useState, useRef, useEffect } from 'react';
import useStore from '../store/useStore';
import { searchEngines } from '../utils/searchEngines';

const Header = () => {
  const { searchText, setSearchText, addSearchHistory, settings, setSettings } = useStore();
  const [isSearchEngineMenuOpen, setIsSearchEngineMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchMenuRef = useRef(null);

  const activeSearchEngine = searchEngines.find(engine => engine.id === settings.searchEngine);
  const isInternalSearch = activeSearchEngine?.isInternal;

  // Ctrl + K 快捷键
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 点击外部关闭搜索菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchMenuRef.current && !searchMenuRef.current.contains(event.target)) {
        setIsSearchEngineMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() === '') return;

    if (isInternalSearch) {
      // 站内搜索，由 App.jsx 处理
      addSearchHistory(searchText);
    } else {
      // 外部搜索引擎搜索
      const searchUrl = `${activeSearchEngine.url}${encodeURIComponent(searchText)}`;
      window.open(searchUrl, '_blank');
      setSearchText(''); // 清空输入框
    }
  };

  const handleSearchEngineChange = (engineId) => {
    setSettings({ searchEngine: engineId });
    setIsSearchEngineMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          个人工具导航
        </h1>

        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-1/2">
          <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSearchEngineMenuOpen(!isSearchEngineMenuOpen)}
                className="flex items-center p-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
              >
                <i className={`${activeSearchEngine?.icon} text-lg w-6 text-center`}></i>
              </button>
              {isSearchEngineMenuOpen && (
                <div ref={searchMenuRef} className="absolute z-10 top-full mt-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  {searchEngines.map(engine => (
                    <button
                      key={engine.id}
                      type="button"
                      onClick={() => handleSearchEngineChange(engine.id)}
                      className="w-full flex items-center p-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                    >
                      <i className={`${engine.icon} text-lg mr-2`}></i>
                      {engine.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="搜索工具或网址 (Ctrl + K)"
              className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none p-2 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="p-2 text-blue-500 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
