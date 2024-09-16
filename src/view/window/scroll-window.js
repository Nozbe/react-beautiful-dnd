// @flow
import { type Position } from 'css-box-model';

// Not guarenteed to scroll by the entire amount
export default (win: WindowProxy) => (change: Position): void => {
  win.scrollBy(change.x, change.y);
};
