const isElementInViewPort = (el: Element) => {
  const rect = el.getBoundingClientRect();
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  // Return false if it's not in the viewport
  if (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > viewWidth ||
    rect.top > viewHeight
  ) {
    return false;
  }
  return true;
};

export default isElementInViewPort;
