/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      'violet-900': '#4C1D95',
      'violet-800': '#5B21B6',
      'violet-700': '#6D28D9',
      'violet-600': '#5B21B6',
      'violet-500': '#8B5CF6',
      'violet-400': '#A78BFA',
      'violet-300': '#C4B5FD',
      'violet-200': '#DDD6FE',
      'violet-100': '#EDE9FE',
      'violet-50': '#F5F3FF',
      'pink-900': '#831843',
      'pink-800': '#9D174D',
      'pink-700': '#BE185D',
      'pink-600': '#DB2777',
      'pink-500': '#EC4899',
      'pink-400': '#F472B6',
      'pink-300': '#F9A8D4',
      'pink-200': '#FBCFE8',
      'pink-100': '#FCE7F3',
      'pink-50': '#FDF2F8',
      'slate-900': '#0F172A',
      'slate-800': '#1E293B',
      'slate-700': '#334155',
      'slate-600': '#475569',
      'slate-500': '#64748B',
      'slate-400': '#94A3B8',
      'slate-300': '#CBD5E1',
      'slate-200': '#E2E8F0',
      'slate-100': '#F1F5F9',
      'slate-50': '#F8FAFC',
      'white': '#FFFFFF'
    },
    spacing: {
      'xxs': '4px',
      'xs': '8px',
      's': '16px',
      'm': '24px',
      'l': '32px',
      'xl': '48px',
      'xxl': '64px'
    },
    borderRadius: {
      'none': '0',
      's': '8px',
      'm': '16px',
      'full': '9999px'
    },
    outlineWidth: {
      'none': '0px',
      '3': '3px',
      '4': '4px',
    },
    borderWidth: {
      '0': '0',
      '3': '3px'
    },
    extend: {
      backgroundImage: {
        'bli': 'linear-gradient(to top, var(var(--tw-gradient-from) 30%, currentcolor, var(--tw-gradient-to) 70%))'
      },
      width: {
        '16': '16px',
        '48': '48px',
        '150': '150px',
        '178': '178px'
      },
      height: {
        '16': '16px',
        '48': '48px'
      }
    }
  }
}
