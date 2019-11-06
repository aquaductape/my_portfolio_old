import React from 'react';
import { ReactComponent as Def } from '../assets/svgDefs/dev.svg';

export default function SVGDefs() {
  return (
    <div className="svg-defs" style={{ height: 0, width: 0 }}>
      <Def></Def>
    </div>
  );
}
