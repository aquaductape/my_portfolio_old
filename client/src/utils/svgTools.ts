export const saturateToWhite = (input: string): string => {
  const color = input.slice(1);
  const groups = [];

  if (color.length === 3) {
    const colorInt = parseInt(color, 16);
    if (colorInt >= 3276 || colorInt <= 819) return "url(#match-background)";
  }

  for (let i = 0; i < color.length; i += 2) {
    const colorInt = parseInt(color[i] + color[i + 1], 16);
    groups.push(colorInt);
  }

  return groups.every(color => color >= 221)
    ? "url(#match-background)"
    : "currentColor";
};

export const changeColor = (svg: string): string => {
  const regex = /(#[0-9a-z]{3,})|(rgba?\(.+\))|(url\(#[0-9a-z_-]+\))/gi;
  return svg.replace(
    regex,
    (
      _,
      hex: string | undefined,
      rgb: string | undefined,
      url: string | undefined
    ) => {
      if (url) return "url(#gradient-to-solid)";
      // set white/black to match theme
      if (hex) {
        return saturateToWhite(hex);
      }

      if (
        rgb &&
        rgb.match(/((0,?\s?){3}([0-9]{3})?)|((255,?\s?){3}([0-9]{3})?)/)
      ) {
        return "#fff";
      }

      // set color to inherit of parent
      return "currentColor";
    }
  );
};
