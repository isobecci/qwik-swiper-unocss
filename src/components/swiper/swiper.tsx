import { $, component$, useOnWindow } from '@builder.io/qwik';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-slide-active.css';
import styles from './swiper.module.css';

interface Props {
  slides: {
    heading: string;
    text: string;
    src: string;
  }[];
}
export const SwiperComponent = component$(({ slides }: Props) => {
  // console.log('slides', slides);
  useOnWindow(
    'load',
    $(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        // lazy: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }),
  );
  return (
    <div class={`swiper ${styles['swiper-container']}`}>
      <div class="swiper-wrapper">
        {slides.map((slide, i) => (
          <div key={slide.src} class={`swiper-slide ${styles['swiper-slide']}`}>
            <div class="prose mx-auto">
              <h2>
                <span>{slide.heading}</span>
              </h2>
              <p>
                <span>{slide.text}</span>
              </p>
              <span>{slide.text}</span>
            </div>
            <img
              alt={`Slide ${i + 1}`}
              src={slide.src}
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
      <div class="swiper-button-next" />
      <div class="swiper-button-prev" />
    </div>
  );
});
