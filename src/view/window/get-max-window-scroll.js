// @flow
import type { Position } from 'css-box-model';
import getMaxScroll from '../../state/get-max-scroll';
import getDocumentElement from '../get-document-element';

export default (doc: Document): Position => {
  const html: HTMLElement = getDocumentElement(doc);

  const maxScroll: Position = getMaxScroll({
    // unclipped padding box, with scrollbar
    scrollHeight: html.scrollHeight,
    scrollWidth: html.scrollWidth,
    // clipped padding box, without scrollbar
    width: html.clientWidth,
    height: html.clientHeight,
  });

  return maxScroll;
};
