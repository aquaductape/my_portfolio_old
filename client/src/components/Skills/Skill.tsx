import React, { useEffect, useState } from "react";
import gsap from "gsap";

interface ISkillProps {
  title: string;
  icon: JSX.Element;
}

export default function Skill({ title, icon }: ISkillProps) {
  const svgId = `skill-icon-${title}`;
  const circleId = `.${svgId}__clipPath-circle`;

  const [animateIconEnter, setAnimateIconEnter] = useState<any>(null);
  const [animateIconLeave, setAnimateIconLeave] = useState<any>(null);

  useEffect(() => {
    console.log(circleId);
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

  return (
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
