export default function addEscapeHatch(callback: Function) {
  const removeOnClick = () => {
    callback();
    document.removeEventListener("click", removeOnClick);
    document.removeEventListener("touchend", removeOnClick);
    document.removeEventListener("keydown", removeOnEscapeKey);
  };
  const removeOnEscapeKey = (e: KeyboardEvent) => {
    if (!e.key.match(/escape/i)) return null;
    callback();
    document.removeEventListener("click", removeOnClick);
    document.removeEventListener("touchend", removeOnClick);
    document.removeEventListener("keydown", removeOnEscapeKey);
  };
  document.addEventListener("click", removeOnClick);
  document.addEventListener("touchend", removeOnClick);
  document.addEventListener("keydown", removeOnEscapeKey);

  return {
    remove() {
      callback();
      document.removeEventListener("click", removeOnClick);
      document.removeEventListener("touchend", removeOnClick);
      document.removeEventListener("keydown", removeOnEscapeKey);
    }
  };
}
