// @flow

const find = (el: ?Element): boolean => {
  // cannot do anything else!
  if (el == null) {
    return false;
  }

  // keep looking
  const win = el.ownerDocument.defaultView;
  const isFixed = win.getComputedStyle(el).position === 'fixed';
  if (!isFixed) {
    return find(el.parentElement);
  }

  // success!
  return true;
};

export default find;
