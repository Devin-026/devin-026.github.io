import { Content } from "./types";

export const EN_CONTENT: Content = {
  nav: {
    home: "Home",
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    faq: "FAQ",
    download: "Download",
  },
  hero: {
    title: "Download Videos & Images from Any Website Easily",
    subtitle: "Fast, safe PC tool for high-quality media downloads from thousands of public sites. Batch support, 4K/HD, no ads.",
    ctaPrimary: "Download Free Now (Windows)",
    ctaSecondary: "Watch 30s Demo Video",
    trustBadge: "VirusTotal Verified · 100% Safe · No Bundles · Privacy Protected",
  },
  features: {
    title: "Why Choose AnyVideo Downloader?",
    items: [
      {
        title: "Any Website Support",
        description: "Works with thousands of public media sites. Paste link and download instantly.",
        icon: "Globe",
      },
      {
        title: "High-Quality Downloads",
        description: "Save in HD, 4K, or even higher – keep original quality.",
        icon: "Monitor",
      },
      {
        title: "Batch & Fast",
        description: "Download multiple videos/images at once with multi-thread acceleration.",
        icon: "Zap",
      },
      {
        title: "Video to MP3",
        description: "Extract audio easily in MP3 format.",
        icon: "Music",
      },
      {
        title: "Built-in Manager",
        description: "Preview, organize, and play downloaded files offline.",
        icon: "Folder",
      },
      {
        title: "Privacy & Safety",
        description: "No tracking, no ads in app, fully local processing.",
        icon: "ShieldCheck",
      },
    ],
  },
  supportedSites: {
    title: "Works with Thousands of Public Media Sites",
    description: "We intelligently parse links from various public sources – no specific platforms listed to ensure broad compatibility.",
    disclaimer: "For personal, non-commercial use only. Always respect the terms of service of each website.",
  },
  howItWorks: {
    title: "Super Simple in 3 Steps",
    steps: [
      {
        title: "Copy Link",
        description: "Copy the media link from any website.",
      },
      {
        title: "Paste Link",
        description: "Paste into AnyVideo Downloader.",
      },
      {
        title: "Download",
        description: "Choose quality & download – done!",
      },
    ],
  },
  screenshots: {
    title: "See It in Action",
    description: "Clean, intuitive interface for Windows PC.",
  },
  pricing: {
    title: "Choose Your Plan",
    plans: [
      {
        name: "Starter Pack",
        price: "$4.99",
        features: ["50 High-speed downloads", "4K/HD Quality supported", "No expiration", "Basic support"],
        cta: "Get 50 Credits",
      },
      {
        name: "Pro Pack",
        price: "$19.99",
        features: ["300 High-speed downloads", "Priority multi-thread speed", "Batch download enabled", "Priority support"],
        cta: "Get 300 Credits",
        isPro: true,
      },
    ],
    disclaimer: "Pay as you go. Credits never expire.",
  },
  testimonials: {
    title: "What Users Say",
    items: [
      { quote: "Fast and clean! Best downloader I've used.", author: "Alex, HK" },
      { quote: "Batch download is so convenient, super fast speed.", author: "Xiao Ming" },
      { quote: "Finally a tool that doesn't bundle malware. 10/10.", author: "Sarah J." },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { question: "Is it safe?", answer: "Yes, VirusTotal scanned, no malware/bundles." },
      { question: "Which sites are supported?", answer: "Thousands of public media sites." },
      { question: "Windows only?", answer: "Yes, PC version now; Mac coming soon." },
      { question: "How fast is the download?", answer: "Multi-thread, depends on your connection." },
      { question: "Free vs Pro difference?", answer: "Pro removes limits and adds priority support." },
      { question: "Legal note?", answer: "For personal use only; respect copyrights and site TOS." },
    ],
  },
  footer: {
    cta: "Download AnyVideo Downloader Today!",
    subCta: "Start saving your favorite media safely and quickly.",
    disclaimer: "This tool is for downloading publicly available content for personal, non-commercial use. We do not support or encourage copyright infringement.",
  },
};

export const ZH_CONTENT: Content = {
  nav: {
    home: "首页",
    features: "功能",
    howItWorks: "使用教程",
    pricing: "定价",
    faq: "常见问题",
    download: "下载",
  },
  hero: {
    title: "一键从任意网站下载视频与图片",
    subtitle: "PC 专业工具，支持数千公开网站的高清媒体下载。批量、4K/高清、无广告。",
    ctaPrimary: "立即免费下载（Windows PC）",
    ctaSecondary: "观看 30 秒演示视频",
    trustBadge: "VirusTotal 认证 · 100% 安全 · 无捆绑 · 隐私保护",
  },
  features: {
    title: "为什么选择任意视频下载器？",
    items: [
      {
        title: "任意网站兼容",
        description: "支持数千公开媒体网站，一键粘贴链接即下。",
        icon: "Globe",
      },
      {
        title: "高清原画质",
        description: "支持高清、4K 等原画质下载，保留原始画质。",
        icon: "Monitor",
      },
      {
        title: "批量极速下载",
        description: "多线程加速，支持同时下载多个视频或图片。",
        icon: "Zap",
      },
      {
        title: "视频转音频",
        description: "一键提取 MP3 音频，轻松便捷。",
        icon: "Music",
      },
      {
        title: "内置管理器",
        description: "离线预览、管理、播放已下载的文件。",
        icon: "Folder",
      },
      {
        title: "隐私安全",
        description: "无追踪、无广告、完全本地处理。",
        icon: "ShieldCheck",
      },
    ],
  },
  supportedSites: {
    title: "支持数千公开媒体网站",
    description: "我们智能解析来自各种公共来源的链接 - 不列出具体平台以确保广泛的兼容性。",
    disclaimer: "仅限个人非商业用途。请务必遵守各网站的服务条款。",
  },
  howItWorks: {
    title: "超简单三步操作",
    steps: [
      {
        title: "复制链接",
        description: "从任意网站复制视频/图片链接。",
      },
      {
        title: "粘贴链接",
        description: "粘贴到软件中。",
      },
      {
        title: "下载完成",
        description: "选择画质，一键下载完成。",
      },
    ],
  },
  screenshots: {
    title: "实际界面一览",
    description: "简洁直观的 Windows PC 界面。",
  },
  pricing: {
    title: "选择您的套餐",
    plans: [
      {
        name: "基础套餐",
        price: "¥29",
        features: ["50 次极速下载", "支持 4K/高清画质", "永久有效", "基础技术支持"],
        cta: "获取 50 次额度",
      },
      {
        name: "专业套餐",
        price: "¥99",
        features: ["300 次极速下载", "优先多线程加速", "支持批量下载", "优先技术支持"],
        cta: "获取 300 次额度",
        isPro: true,
      },
    ],
    disclaimer: "按需购买，额度永不过期。",
  },
  testimonials: {
    title: "用户反馈",
    items: [
      { quote: "速度快且干净！这是我用过最好的下载器。", author: "Alex, HK" },
      { quote: "批量下载太方便了，速度超快。", author: "小明" },
      { quote: "终于有一个不捆绑恶意软件的工具了。10/10。", author: "Sarah J." },
    ],
  },
  faq: {
    title: "常见问题",
    items: [
      { question: "它安全吗？", answer: "是的，经过 VirusTotal 扫描，无恶意软件或捆绑包。" },
      { question: "支持哪些网站？", answer: "支持数千个公开媒体网站。" },
      { question: "仅限 Windows？", answer: "是的，目前仅支持 PC 版；Mac 版即将推出。" },
      { question: "下载速度有多快？", answer: "支持多线程，取决于您的网络连接。" },
      { question: "免费版和 Pro 版有什么区别？", answer: "Pro 版移除了限制并提供优先支持。" },
      { question: "法律说明？", answer: "仅限个人使用；请尊重版权和网站服务条款。" },
    ],
  },
  footer: {
    cta: "现在下载任意视频下载器！",
    subCta: "开始安全快速地保存您喜爱的媒体。",
    disclaimer: "本工具用于下载供个人非商业用途的公开内容。我们不支持或鼓励侵犯版权的行为。",
  },
};
