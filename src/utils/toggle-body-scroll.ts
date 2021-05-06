const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

export const disableBodyScroll = () => {
  document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  document.body.removeAttribute('style');
};
