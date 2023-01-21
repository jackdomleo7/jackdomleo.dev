import { documentToHtmlString, type Options } from '@contentful/rich-text-html-renderer';
import type { Node, Document } from '@contentful/rich-text-types';
import type { EntryFields } from 'contentful'

export function parseRichText(document: EntryFields.RichText | Node | Document, composables?: { $img: any }, options?: Options) {
  return documentToHtmlString(document, {
    renderNode: {
      'embedded-asset-block': (node: Node) => `<img src="${composables?.$img(node.data.target.fields.file.url, { width: 768 }, { provider: 'contentful' })}" alt="${node.data.target.fields.description}" width="768" height="403" loading="lazy" />`,
      'table': (node: Node) => `<div class="table"><table>${documentToHtmlString(node)}</table></div>`,
      ...options?.renderNode
    },
    renderMark: {
      ...options?.renderMark
    }
  })
}