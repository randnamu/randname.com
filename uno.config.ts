import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'switch-animation': 'transition duration-300',
      'bg-base': 'bg-[hsl(0 0% 100%)] dark:bg-[hsl(224 71.4% 4.1%)] switch-animation',
      'color-base': 'text-[hsl(224 1% 93%)] dark:text-[hsl(210 20% 98%)] switch-animation',
      'bg-card': 'bg-[hsl(0 0% 100%)] dark:[hsl(224 71.4% 4.1%)] switch-animation',
      'color-card': 'text-[hsl(224 71.4% 4.1%)] dark:text-[hsl(210 20% 98%)] switch-animation',
      'bg-primary': 'bg-[hsl(220.9 39.3% 11%)] dark:bg-[hsl(210 20% 98%)] switch-animation',
      'color-primary': 'text-[hsl(210 20% 98%)] dark:bg-[hsl(220.9 39.3% 11%)] switch-animation',
      'bg-secondary': 'bg-[hsl(220 14.3% 95.9%)] dark:bg-[hsl(215 27.9% 16.9%)] switch-animation',
      'color-secondary': 'text-[hsl(220.9 39.3% 11%)] dark:text-[hsl(210 20% 98%)] switch-animation',
      'bg-muted': 'bg-[hsl(220 14.3% 95.9%)] dark:bg-[hsl(215 27.9% 16.9%)] switch-animation',
      'color-muted': 'text-[hsl(220 8.9% 46.1%)] dark:text-[hsl(217.9 10.6% 64.9%)] switch-animation',
      'bg-accent': 'bg-[hsl(215 27.9% 16.9%)] dark:bg-[hsl(220 14.3% 95.9%)] switch-animation',
      'color-accent': 'text-[hsl(220.9 39.3% 11%)] dark:text-[hsl(210 20% 98%)] switch-animation',
      'bg-destructive': 'bg-[hsl(0 62.8% 30.6%)] dark:bg-[hsl(0 84.2% 60.2%)] switch-animation',
      'color-destructive': 'text-[hsl(210 20% 98%)] dark:text-[hsl(210 20% 98%)] switch-animation',
      'border-base': 'border-[hsl(220 13% 91%)] dark:border-[hsl(215 27.9% 16.9%)] switch-animation',
      'bg-input': 'bg-[hsl(220 13% 91%)] dark:bg-[hsl(215 27.9% 16.9%)] switch-animation',
    },
  ],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
    }),
  ],
  transformers: [transformerDirectives()],
})
