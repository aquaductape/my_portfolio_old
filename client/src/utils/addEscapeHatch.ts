export default function addEscapeHatch(callback: Function) {
  const html = document.querySelector("html")!;

  const removeOnClick = () => {
    callback();
    html.removeEventListener("click", removeOnClick);
    html.removeEventListener("keydown", removeOnEscapeKey);
  };
  const removeOnEscapeKey = (e: KeyboardEvent) => {
    if (!e.key.match(/escape/i)) return null;
    callback();
    html.removeEventListener("click", removeOnClick);
    html.removeEventListener("keydown", removeOnEscapeKey);
  };
  html.addEventListener("click", removeOnClick);
  html.addEventListener("keydown", removeOnEscapeKey);

  return {
    remove() {
      callback();
      html.removeEventListener("click", removeOnClick);
      html.removeEventListener("keydown", removeOnEscapeKey);
    }
  };
}
