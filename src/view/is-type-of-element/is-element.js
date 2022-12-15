// @flow
import getWindowFromEl from '../window/get-window-from-el';

export default function isElement(el: Object): boolean %checks {
  // eslint-disable-next-line no-restricted-syntax
  return !!el && el instanceof getWindowFromEl(el).Element;
}
