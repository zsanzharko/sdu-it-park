import React, { useEffect, useRef, useState } from 'react';

import { PageTitle } from '../../components/PageTitle';
import { DecorationArrow } from '../../components/DecorationArrow';
import handLeft from '../../assets/icons/hand-left.svg';
import handRight from '../../assets/icons/hand-right.svg';
import socket from '../../assets/icons/socket.svg';

import './style.scss';

export const OurMission: React.FC = () => {
  const ourMissionRef = useRef<HTMLElement>(null);
  const socketBlockRef = useRef<HTMLDivElement>(null);
  const handLeftRef = useRef<HTMLImageElement>(null);
  const handRightRef = useRef<HTMLImageElement>(null);
  const socketRef = useRef<HTMLImageElement>(null);
  const [dirMissionIsVisible, setDirMissionIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setDirMissionIsVisible(entry.isIntersecting);
    });
    observer.observe(ourMissionRef.current as Element);

    if (dirMissionIsVisible) {
      handLeftRef.current?.classList.add('animation-hand');
      handRightRef.current?.classList.add('animation-hand');
      socketRef.current?.classList.add('animation-socket');
      socketBlockRef.current?.classList.add('animation-socket-block');
    }
  });

  return (
    <section className="our-mission" ref={ourMissionRef}>
      <PageTitle name="наша миссия" />
      <div className="our-mission__decorations">
        <img
          ref={handLeftRef}
          className="our-mission__decorations-image hand-left"
          src={handLeft}
          alt="hand-left"
        />
        <div ref={socketBlockRef} className="our-mission__decorations-center">
          <img
            ref={socketRef}
            className="our-mission__decorations-image socket"
            src={socket}
            alt="socket icon"
          />
        </div>
        <img
          ref={handRightRef}
          className="our-mission__decorations-image hand-right"
          src={handRight}
          alt="hand-right"
        />
      </div>
      <p className="our-mission__text">
        <span className="our-mission__text-span">
          трансформировать сообщество СДУ в комьюнити предпринимателей, где каждый вне зависимости
          от своих скиллов и идей будет иметь возможность реализовать свои проекты и довести их до
          конечного продукта.
        </span>
      </p>
      <DecorationArrow name=".our-team" />
    </section>
  );
};
