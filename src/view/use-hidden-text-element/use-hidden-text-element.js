// @flow
import { useEffect } from 'react';
import { useMemo } from 'use-memo-one';
import type { ContextId, ElementId } from '../../types';
import getBodyElement from '../get-body-element';
import useUniqueId from '../use-unique-id';

type GetIdArgs = {|
  contextId: ContextId,
  uniqueId: string,
|};

export function getElementId({ contextId, uniqueId }: GetIdArgs): ElementId {
  return `rbd-hidden-text-${contextId}-${uniqueId}`;
}

type Args = {|
  contextId: ContextId,
  text: string,
  win: WindowProxy,
|};

export default function useHiddenTextElement({
  contextId,
  text,
  win,
}: Args): ElementId {
  const uniqueId: string = useUniqueId('hidden-text', { separator: '-' });
  const id: ElementId = useMemo(() => getElementId({ contextId, uniqueId }), [
    uniqueId,
    contextId,
  ]);

  useEffect(
    function mount() {
      const doc: Document = win.document;
      const el: HTMLElement = doc.createElement('div');

      // identifier
      el.id = id;

      // add the description text
      el.textContent = text;

      // Using `display: none` prevent screen readers from reading this element in the document flow
      el.style.display = 'none';

      // Add to body
      getBodyElement(doc).appendChild(el);

      return function unmount() {
        // checking if element exists as the body might have been changed by things like 'turbolinks'
        const body: HTMLBodyElement = getBodyElement(doc);
        if (body.contains(el)) {
          body.removeChild(el);
        }
      };
    },
    [id, text, win],
  );

  return id;
}
