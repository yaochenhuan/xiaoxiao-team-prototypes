/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material 3 蓝主题色板（来自 design_system_preview_no_graygreen.html）
        sidebar: {
          // 侧边栏主体使用 primary-container（品牌淡蓝）
          bg: '#D3E3FD',
          // 悬停态用 inverse-primary 半透明叠加
          hover: '#A8C7FA',
          // 激活态文字使用 primary
          activeText: '#0B57D0',
          // 激活态背景用 surface 白色浮层
          activeBg: '#FFFFFF',
          // 选中态左侧强调条
          accent: '#0B57D0',
          // 分隔线/边框
          border: '#A8C7FA',
          // 普通文字（on-primary-container）
          text: '#041E49',
          // 次要文字
          muted: '#001D35',
          // 折叠按钮背景
          toggleBg: '#FFFFFF',
        },
        brand: {
          DEFAULT: '#0B57D0',
          light: '#A8C7FA',
          dark: '#0842A0',
        },
        canvas: '#F0F4F9',
      },
      borderRadius: {
        'm3-sm': '8px',
        'm3-md': '12px',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Noto Sans CJK SC"',
          '"Segoe UI"',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
