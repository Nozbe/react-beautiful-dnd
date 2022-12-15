// @flow
export default (el: Element): typeof window => {
  if (el.ownerDocument) {
    return el.ownerDocument.defaultView || window;
  }
  // `ownerDocument` only returns null if called on Document
  return ((el: any): Document).defaultView || window;
};
