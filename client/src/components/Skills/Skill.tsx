import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { IOS, IOS13 } from "../../utils/browserInfo";
import addEscapeHatch from "../../utils/addEscapeHatch";

interface ISkillProps {
  title: string;
  icon: JSX.Element;
}

export default function Skill({ title, icon }: ISkillProps) {
  const [animateIconEnter, setAnimateIconEnter] = useState<any>(null);
  const [animateIconLeave, setAnimateIconLeave] = useState<any>(null);
  const [hasToggle, setHasToggle] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);
  const svgId = `skill-icon-${title}`;
  const circleId = `.${svgId}__clipPath-circle`;

  useEffect(() => {
    const animation = gsap.fromTo(
      circleId,
      {
        attr: {
          r: 1
        },
        scale: 0,
        transformOrigin: "center"
      },
      {
        scale: 20,
        transformOrigin: "center",
        duration: 1.5,
        paused: true
      }
    );
    setAnimateIconEnter(() => () => animation.timeScale(1).play());
    setAnimateIconLeave(() => () => animation.timeScale(2).reverse());
  }, []);

  const onClickAnimate = () => {
    const liEl = liRef.current!;

    addEscapeHatch({
      target: liEl,
      toggle: false,
      build: animateIconEnter,
      onExit: animateIconLeave
    });
  };

  let skillItem;

  if (IOS && !IOS13) {
    skillItem = (
      <li className="skills-item" ref={liRef} onClick={onClickAnimate}>
        {icon}
        <p>{title}</p>
      </li>
    );
  } else {
    skillItem = (
      <li
        className="skills-item"
        onMouseEnter={animateIconEnter}
        onMouseLeave={animateIconLeave}
      >
        {icon}
        <p>{title}</p>
      </li>
    );
  }
  return <>{skillItem}</>;
}
