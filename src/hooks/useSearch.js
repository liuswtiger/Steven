import useStore from '../store/useStore';
import { useMemo } from 'react';

export const useSearch = () => {
  const { categories, searchText } = useStore();

  const filteredTools = useMemo(() => {
    if (!searchText) {
      // 如果没有搜索词，返回空数组，让主页面显示分类工具
      return [];
    }

    const lowerCaseSearch = searchText.toLowerCase();
    const allTools = categories.flatMap(cat => cat.tools);

    return allTools.filter(tool =>
      tool.name.toLowerCase().includes(lowerCaseSearch) ||
      tool.url.toLowerCase().includes(lowerCaseSearch)
    );
  }, [categories, searchText]);

  return filteredTools;
};
