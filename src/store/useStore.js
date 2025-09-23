import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { initialData } from '../utils/data';

const useStore = create(
  persist(
    (set) => ({
      categories: initialData,
      activeCategory: initialData[0]?.id || '',
      searchText: '',
      searchHistory: [],
      settings: {
        searchEngine: 'google',
        theme: 'light',
      },

      // Actions
      setCategories: (newCategories) => set({ categories: newCategories }),
      setActiveCategory: (category) => set({ activeCategory: category }),
      setSearchText: (text) => set({ searchText: text }),
      addSearchHistory: (query) => set((state) => {
        const history = [query, ...state.searchHistory.filter(h => h !== query)].slice(0, 5);
        return { searchHistory: history };
      }),
      setSettings: (newSettings) => set((state) => ({ settings: { ...state.settings, ...newSettings } })),
    }),
    {
      name: 'tool-site-storage', // localstorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
