import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { SwiperComponent as Swiper } from '~/components/swiper/swiper';

export default component$(() => {
  const slides = [];
  for (let i = 1; i < 10; i++) {
    slides.push({
      heading: `Slide ${i}`,
      text: `Slide ${i} description`,
      src: `https://picsum.photos/seed/${i}/1000/1000`,
    });
  }
  return <Swiper {...{ slides }} />;
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
