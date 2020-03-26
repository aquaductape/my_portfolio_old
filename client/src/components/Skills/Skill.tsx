import React, { useEffect, useState } from "react";
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
    if (!hasToggle) {
      animateIconEnter();

      addEscapeHatch(() => {
        // makes sure it fires last
        setTimeout(() => {
          animateIconLeave();
          setHasToggle(() => false);
        }, 5);
      });
      setHasToggle(() => true);
    } else {
      setHasToggle(() => false);
    }
  };

  return (
    <>
      {IOS && !IOS13 ? (
        <li className="skills-item" onClick={onClickAnimate}>
          {icon}
          <p>{title}</p>
        </li>
      ) : (
        <li
          className="skills-item"
          onMouseEnter={animateIconEnter}
          onMouseLeave={animateIconLeave}
        >
          {icon}
          <p>{title}</p>
        </li>
      )}
    </>
  );
}
