// @flow
import { invariant } from '../invariant';

export default (doc: Document): HTMLElement => {
  const html: ?HTMLElement = doc.documentElement;
  invariant(html, 'Cannot find document.documentElement');
  return html;
};
