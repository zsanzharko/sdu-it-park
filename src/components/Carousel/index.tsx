/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ITeamSlide } from '../../utils/types';
import './style.scss';

interface ICarousel {
  slides: ITeamSlide[];
}

export const Carousel: React.FC<ICarousel> = ({ slides }) => {
  let step = 0;
  let offset = -3;

  const draw = () => {
    const block = document.createElement('div');
    block.classList.add('team-slide');
    block.style.transform = `translateX(${offset * 320}px)`;
    block.setAttribute('data-id', `${slides[step].id}`);
    block.setAttribute('data-name', slides[step].fullName);
    const image = document.createElement('div');
    image.classList.add('team-slide__image');
    image.style.background = `url(data:image/jpg;base64,${slides[step].photo}) center center / contain no-repeat`;

    block.appendChild(image);
    document.querySelector('.carousel__wrapper')!.appendChild(block);
    if (step + 1 === slides.length) {
      step = 0;
    } else step += 1;
    if (offset + 1 === 4) {
      offset = 3;
    } else offset += 1;
  };

  const drawLeft = () => {
    if (step - 1 === -1) {
      step = slides.length - 1;
    } else step -= 1;
    const sliderItem = document.querySelector('.team-slide');
    const id = +(sliderItem?.getAttribute('data-id') as string);
    let index = slides.indexOf(slides.find((slide) => slide.id === id)!);
    if (index - 1 < 0) {
      index = slides.length - 1;
    } else index -= 1;
    const block = document.createElement('div');
    block.classList.add('team-slide');
    block.style.transform = `translateX(${-3 * 320}px)`;
    block.setAttribute('data-id', `${slides[index].id}`);
    block.setAttribute('data-name', slides[index].fullName);
    const image = document.createElement('div');
    image.classList.add('team-slide__image');
    image.style.background = `url(data:image/jpg;base64,${slides[index].photo}) center center / contain no-repeat`;

    block.appendChild(image);
    document.querySelector('.carousel__wrapper')!.prepend(block);
  };

  const left = () => {
    (document.querySelector('#clickLeft') as HTMLElement).setAttribute('disabled', 'true');
    (document.querySelector('#clickRight') as HTMLElement).setAttribute('disabled', 'true');
    const sliderItems = document.querySelectorAll('.team-slide') as NodeListOf<HTMLElement>;
    let offset2 = -3;
    for (let i = 0; i < sliderItems.length; i += 1) {
      sliderItems[i].style.transform = `translateX(${offset2 * 320 - 320}px)`;
      offset2 += 1;
    }
    setTimeout(() => {
      sliderItems[0].remove();
      draw();
      (document.querySelector('#clickLeft') as HTMLElement).removeAttribute('disabled');
      (document.querySelector('#clickRight') as HTMLElement).removeAttribute('disabled');
      (document.querySelector('.carousel__text') as HTMLElement).textContent =
        sliderItems[4].getAttribute('data-name');
    }, 500);
  };

  const right = () => {
    (document.querySelector('#clickLeft') as HTMLElement).setAttribute('disabled', 'true');
    (document.querySelector('#clickRight') as HTMLElement).setAttribute('disabled', 'true');
    const sliderItems = document.querySelectorAll('.team-slide') as NodeListOf<HTMLElement>;
    let offset2 = -3;
    for (let i = 0; i < sliderItems.length; i += 1) {
      sliderItems[i].style.transform = `translateX(${offset2 * 320 + 320}px)`;
      offset2 += 1;
    }
    setTimeout(() => {
      sliderItems[sliderItems.length - 1].remove();
      drawLeft();
      (document.querySelector('#clickLeft') as HTMLElement).removeAttribute('disabled');
      (document.querySelector('#clickRight') as HTMLElement).removeAttribute('disabled');
      (document.querySelector('.carousel__text') as HTMLElement).textContent =
        sliderItems[2].getAttribute('data-name');
    }, 500);
  };

  useEffect(() => {
    document.querySelector('.carousel__wrapper')!.innerHTML = '';
    if (slides.length > 0) {
      draw();
      draw();
      draw();
      draw();
      draw();
      draw();
      draw();
      (document.querySelector('.carousel__text') as HTMLElement).textContent = slides[3].fullName;
    }
  }, [slides]);

  return (
    <div className="carousel">
      <div className="carousel__wrapper" />
      <p className="carousel__text" />
      <button
        className="carousel__button carousel__button-left"
        id="clickLeft"
        type="button"
        onClick={right}
      >
        ❮
      </button>
      <button
        className="carousel__button carousel__button-right"
        id="clickRight"
        type="button"
        onClick={left}
      >
        ❯
      </button>
    </div>
  );
};
