import React, { useState, useEffect } from 'react';
import axios from 'axios';

type SVGIconProps = {
  content: string;
  svgId: string;
  viewBox?: string;
  clipPathEl?: string | null;
  filterId?: string;
  clipPathId?: string;
  enableTitle?: boolean;
};

export default function SVGIcon({
  content,
  viewBox = '0 0 32 32',
  clipPathEl = null,
  svgId,
  filterId = 'icon-color-hue',
  enableTitle = false
}: SVGIconProps) {
  const [svgs, setSvg] = useState<string[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const clipPathId = svgId + '__clipPath';

  useEffect(() => {
    const fetchSVG = async (contentUrl: string, clipUrl: string | null) => {
      // debugger;
      try {
        const content = await axios(contentUrl);

        if (clipUrl) {
          const clipEl = await axios(clipUrl);
          setSvg(() => [content.data, clipEl.data]);
        } else {
          setSvg(() => [content.data]);
        }
        setIsLoaded(true);
      } catch (err) {
        setIsErrored(true);
      }
    };

    fetchSVG(content, clipPathEl);
  }, []);

  if (isErrored) throw new Error('svg error');
  let svgTitle = '';
  let svgDefs = '';
  let svgInner = '';
  let clipElInner = '';

  if (svgs) {
    const [content, clipEl] = svgs;

    svgInner = content.replace(
      /<title>(.*)<\/title>|<defs(.*?)>(.*)<\/defs>|<svg(.*?)>|<\/svg>/g,
      (_1, p1, _2, p2) => {
        if (p1) svgTitle = p1;
        if (p2) svgDefs = p2;
        return '';
      }
    );

    if (clipEl) {
      clipElInner = clipEl.replace(/<clipPath(.*?)>|<\/clipPath>/, '');
    }
  }

  return isLoaded ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      {enableTitle && svgTitle ? <title>{svgTitle}</title> : null}
      {svgDefs ? (
        <defs dangerouslySetInnerHTML={{ __html: svgDefs }}></defs>
      ) : null}
      {clipElInner ? (
        <clipPath
          id={clipPathId}
          dangerouslySetInnerHTML={{ __html: clipElInner }}
        ></clipPath>
      ) : null}
      <use
        xlinkHref={`#${svgId}`}
        href={`#${svgId}`}
        filter={`url(#${filterId})`}
      />
      {/* white circle is used because when the two icons overlap, there's a feathery outline */}
      {/* As the clip circle enlarges, it is in synced with the white circle thus getting rid of the outline*/}
      {/* Pros: the cleanest effect during animation */}
      {/* Cons: the circle should match the background */}
      {/* If the backdrop is colorfull, or dynamic, the best solution is to use opacity after animation is done */}
      <circle className="clipPath-circle" fill="#fff" cx="16" cy="16" r="1" />
      <use
        xlinkHref={`#${svgId}`}
        href={`#${svgId}`}
        clipPath={`url(#${clipPathId})`}
      />
      <g style={{ display: 'none' }}>
        <g id={svgId} dangerouslySetInnerHTML={{ __html: svgInner }}></g>
      </g>
    </svg>
  ) : null;
}
