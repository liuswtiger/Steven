import React from 'react';
import useStore from '../store/useStore';

const SettingsPanel = () => {
  const { settings, setSettings, categories, setCategories } = useStore();

  const handleToggleTheme = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    setSettings({ theme: newTheme });
    document.documentElement.classList.toggle('dark');
  };

  const handleExport = () => {
    const data = JSON.stringify({
      version: "1.0",
      categories,
      settings,
      searchHistory: useStore.getState().searchHistory,
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tool-site-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (importedData.categories && importedData.settings) {
          setCategories(importedData.categories);
          setSettings(importedData.settings);
          // 也可以导入搜索历史等
          // useStore.setState({ searchHistory: importedData.searchHistory });
          alert('数据导入成功！');
        } else {
          alert('导入失败：文件格式不正确。');
        }
      } catch (error) {
        alert('导入失败：文件解析出错。');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">设置</h2>

      <div className="mb-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <span className="text-gray-700 dark:text-gray-300">深色模式</span>
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              checked={settings.theme === 'dark'}
              onChange={handleToggleTheme}
            />
            <div className={`block w-10 h-6 rounded-full ${settings.theme === 'dark' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
            <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform ${settings.theme === 'dark' ? 'translate-x-4' : ''}`}></div>
          </div>
        </label>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">数据管理</h3>
        <div className="flex space-x-2">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            导出数据
          </button>
          <label className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
            导入数据
            <input
              type="file"
              accept=".json"
              className="hidden"
              onChange={handleImport}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
