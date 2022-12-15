// @flow
import { invariant } from '../invariant';

export default (doc: Document): HTMLBodyElement => {
  const body: ?HTMLBodyElement = doc.body;
  invariant(body, 'Cannot find document.body');
  return body;
};
