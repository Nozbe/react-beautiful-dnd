// @flow
import { getRect, type Rect, type Position } from 'css-box-model';
import type { Viewport } from '../../types';
import { origin } from '../../state/position';
import getWindowScroll from './get-window-scroll';
import getMaxWindowScroll from './get-max-window-scroll';
import getDocumentElement from '../get-document-element';

export default (win: WindowProxy): Viewport => {
  const doc: Document = win.document;
  const scroll: Position = getWindowScroll(win);
  const maxScroll: Position = getMaxWindowScroll(doc);

  const top: number = scroll.y;
  const left: number = scroll.x;

  // window.innerHeight: includes scrollbars (not what we want)
  // document.clientHeight gives us the correct value when using the html5 doctype
  const html: HTMLElement = getDocumentElement(doc);
  // Using these values as they do not consider scrollbars
  // padding box, without scrollbar
  const width: number = html.clientWidth;
  const height: number = html.clientHeight;

  // Computed
  const right: number = left + width;
  const bottom: number = top + height;

  const frame: Rect = getRect({
    top,
    left,
    right,
    bottom,
  });

  const viewport: Viewport = {
    frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin,
      },
    },
  };

  return viewport;
};
