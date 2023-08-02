/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      Light_Lightness_Yellow_0: '#FACC15',
      Light_Lightness_Purple_0: '#818CF8',
      Light_Lightness_Purple_1: '#6366F1',
      Light_Lightness_Purple_2: '#4F46E5',
      Light_Lightness_Purple_3: '#E0E7FF',
      Light_Lightness_0: '#020113',
      Light_Lightness_1: '#111827',
      Light_Lightness_2: '#1F2937',
      Light_Lightness_3: '#374151',
      Light_Lightness_4: '#4B5563',
      Light_Lightness_5: '#F9FAFB',
      Light_Lightness_white: '#FFFFFF',
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
