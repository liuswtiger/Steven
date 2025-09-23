// 搜索引擎配置
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
    icon: 'fas fa-search',
    isInternal: true
  }
];

// 分类和工具数据
export const initialData = {
  categories: [
    {
      id: "home",
      name: "Home",
      order: 1,
      tools: [
        { id: "youtube", name: "Youtube", url: "https://www.youtube.com/", icon: "fab fa-youtube", order: 1 },
        { id: "gmail", name: "Gmail", url: "https://mail.google.com/", icon: "fab fa-google", order: 2 },
        { id: "github", name: "GitHub", url: "https://github.com/", icon: "fab fa-github", order: 3 },
        { id: "ip-sb", name: "ip.sb", url: "https://ip.sb/", icon: "fas fa-globe", order: 4 },
        { id: "cloudflare", name: "Cloudflare", url: "https://dash.cloudflare.com/", icon: "fab fa-cloudflare", order: 5 },
        { id: "node-subscriber", name: "节点订阅器", url: "https://eooce.qzz.io/", icon: "fas fa-satellite-dish", order: 6 },
        { id: "huggingface", name: "Huggingface", url: "https://huggingface.co/", icon: "fas fa-robot", order: 7 },
        { id: "itdog", name: "ITDOG - 在线ping", url: "https://www.itdog.cn/ping/", icon: "fas fa-network-wired", order: 8 },
        { id: "ping0", name: "Ping0", url: "https://ping0.cc/", icon: "fas fa-signal", order: 9 },
        { id: "browser-fingerprint", name: "浏览器指纹", url: "https://www.browserscan.net/zh", icon: "fas fa-fingerprint", order: 10 },
        { id: "nezha", name: "nezha面板", url: "https://ssss.nyc.mn/", icon: "fas fa-tachometer-alt", order: 11 },
        { id: "api-test", name: "API测试", url: "https://hoppscotch.io/", icon: "fas fa-code", order: 12 },
        { id: "domain-check", name: "域名检查", url: "https://who.cx/", icon: "fas fa-search", order: 13 },
        { id: "domain-compare", name: "域名比价", url: "https://www.nazhumi.com/", icon: "fas fa-balance-scale", order: 14 },
        { id: "nodesseek", name: "Nodesseek", url: "https://www.nodesseek.com/", icon: "fas fa-users", order: 15 },
        { id: "linux-do", name: "Linux do", url: "https://linux.do/", icon: "fab fa-linux", order: 16 },
        { id: "online-music", name: "在线音乐", url: "https://music.eooce.com/", icon: "fas fa-music", order: 17 },
        { id: "nodeloc", name: "Nodeloc", url: "https://www.nodeloc.com/", icon: "fas fa-map-marker-alt", order: 18 },
        { id: "free-sms", name: "免费接码", url: "https://www.freereceivesms.com/", icon: "fas fa-sms", order: 19 },
        { id: "subscription-convert", name: "订阅转换", url: "https://sublink.eooce.com/", icon: "fas fa-exchange-alt", order: 20 },
        { id: "webssh", name: "webssh", url: "https://ssh.eooce.com/", icon: "fas fa-terminal", order: 21 },
        { id: "file-cabinet", name: "文件快速柜", url: "https://filebox.nnuu.nyc.mn/#/", icon: "fas fa-archive", order: 22 },
        { id: "address-generator", name: "真实地址生成", url: "https://address.nnuu.nyc.mn/", icon: "fas fa-map-pin", order: 23 }
      ]
    },
    {
      id: "ai-stuff",
      name: "AI-stuff", 
      order: 2,
      tools: [
        // AI-stuff 分类的30个工具数据...
        { id: "chatgpt", name: "ChatGPT", url: "https://chat.openai.com/", icon: "fas fa-comment", order: 1 },
        { id: "claude", name: "Claude", url: "https://claude.ai/", icon: "fas fa-brain", order: 2 },
        // ... 其他AI工具数据
      ]
    },
    // 其他6个分类的数据结构类似...
  ],
  settings: {
    searchEngine: "google",
    theme: "light",
    toolView: "grid"
  }
};
