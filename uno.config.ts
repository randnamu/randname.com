import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'switch-animation': 'transition duration-300',
      'bg-base': 'bg-[#ffffff] dark:bg-[#070b13] switch-animation',
      'color-base': 'text-[#070b13] dark:text-[#f8f9fa] switch-animation',
      'bg-card': 'bg-[#ffffff] dark:bg-[#070b13] switch-animation',
      'color-card': 'text-[#070b13] dark:text-[#f8f9fa] switch-animation',
      'bg-primary': 'bg-[#121723] dark:bg-[#f8f9fa] switch-animation',
      'color-primary': 'text-[#f8f9fa] dark:bg-[#121723] switch-animation',
      'bg-secondary': 'bg-[#f1f2f5] dark:bg-[#1d2530] switch-animation',
      'color-secondary': 'text-[#121723] dark:text-[#f8f9fa] switch-animation',
      'bg-muted': 'bg-[#f1f2f5] dark:bg-[#1d2530] switch-animation',
      'color-muted': 'text-[#606775] dark:text-[#9199a6] switch-animation',
      'bg-accent': 'bg-[#f1f2f5] dark:bg-[#1d2530] switch-animation',
      'color-accent': 'text-[#121723] dark:text-[#f8f9fa] switch-animation',
      'bg-destructive': 'bg-[#ed3c3c] dark:bg-[#741b1b] switch-animation',
      'color-destructive': 'text-[#ebebeb] dark:text-[#f8f9fa] switch-animation',
      'border-base': 'border-[#e1e3e8] dark:border-[#1d2530] transition-border duration-300',
      'bg-input': 'bg-[#e1e3e8] dark:bg-[#1d2530] switch-animation',
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
