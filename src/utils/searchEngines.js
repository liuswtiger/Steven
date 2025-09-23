export const searchEngines = [
  {
    id: 'google',
    name: 'Google',
    url: 'https://www.google.com/search?q=',
    icon: 'fab fa-google',
    default: true
  },
  {
    id: 'baidu', 
    name: '百度',
    url: 'https://www.baidu.com/s?wd=',
    icon: 'fab fa-baidu'
  },
  {
    id: 'bing',
    name: 'Bing', 
    url: 'https://www.bing.com/search?q=',
    icon: 'fab fa-microsoft'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/search?q=',
    icon: 'fab fa-github'
  },
  {
    id: 'internal',
    name: '站内搜索',
    url: '#search?q=',
    icon: 'fas fa-search',
    isInternal: true
  }
];
