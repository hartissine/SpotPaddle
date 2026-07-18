/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './script.js',
    './data.js'
  ],
  safelist: [
    'hidden',
    'block',
    'flex',
    'translate-x-full',
    '-translate-x-1/2',
    'translate-y-12',
    'opacity-0',
    'opacity-100',
    'scale-105',
    'rotate-180',
    'rounded-full',
    'rounded-t-2xl',
    'bg-blue-600',
    'bg-white/70',
    'text-white',
    'text-slate-700',
    'shadow-md',
    'dark:bg-slate-800/70',
    'dark:text-slate-200'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
