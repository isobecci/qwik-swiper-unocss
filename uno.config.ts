import {
  defineConfig,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [presetTypography(), presetUno()],
  content: {
    pipeline: {
      include: [
        // Add your components here
        'src/**/*.{js*,ts*}',
      ],
    },
  },
});
