import { documentToHtmlString, type Options } from '@contentful/rich-text-html-renderer';
import highlightjs from 'highlight.js'
import { decode } from 'html-entities';
import { type Node, type Document } from '@contentful/rich-text-types';
import type { EntryFields } from 'contentful'
import codepen from './codepen';
import twitter from './twitter';

export function parseRichText(document: EntryFields.RichText | Node | Document, composables?: { $img: any }, options?: Options) {
  return documentToHtmlString(document, {
    renderNode: {
      'embedded-asset-block': (node: Node) => `<img src="${composables?.$img(node.data.target.fields.file.url, { width: 768 }, { provider: 'contentful' })}" alt="${node.data.target.fields.description}" width="768" height="403" loading="lazy" />`,
      'table': (node: Node) => `<div class="table"><table>${parseRichText(node, composables)}</table></div>`,
      'hyperlink': (node) => {
        if(node.data.uri.includes("youtube.com/embed")) {
          return `<iframe class="youtube" width="560" height="315" title="${node.content[0].value.replace('YouTube: ', '')} on YouTube" src="${node.data.uri}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
        }
        else if (node.data.uri.includes("codepen.io") && node.data.uri.includes('/embed/')) {
          const url = codepen.urlExtractor(node.data.uri, node.content[0].value)
          return `<p class="codepen" data-height="300" data-theme-id="39164" data-default-tab="result" data-user="${url.username}" data-slug-hash="${url.id}" data-pen-title="${url.title}" data-preview="${url.lazyload}"><span>See the Pen <a href="${url.domain}/${url.username}/pen/${url.id}" rel="nofollow noopener">${url.title}</a> by <a href="${url.domain}/${url.username}" rel="nofollow noopener">@${url.username}</a> on <a href="${url.domain}" rel="nofollow noopener">CodePen</a></span></p>`
        }
        else if (node.data.uri.includes('twitter.com') && (node.content[0].value.startsWith('Twitter: ') || node.content[0].value.startsWith('Tweet: '))) {
          const url = twitter.urlExtractor(node.data.uri, node.content[0].value)
          return `<blockquote class="twitter-tweet"><a href="${node.data.uri}" rel="nofollow noopener"><p class="twitter-tweet__username">@${url.username}</p><p class="twitter-tweet__body">${url.title}</p></a></blockquote>`
        }
        else {
          return `<a href="${node.data.uri}" ${node.data.uri.startsWith('/') || node.data.uri.includes('https://jackdomleo.dev') ? '' : 'rel="nofollow noopener"'}>${node.content[0].value}</a>`
        }
      },
      'blockquote': (node: Node) => `<div class="quote"><blockquote>${parseRichText(node, composables, {
        renderNode: {
          'paragraph': (node: Node) => {
            if (node.content[0].value.startsWith('-')) {
              return `<cite>${parseRichText(node, composables)}</cite>`
            }
            else {
              return `<p>${parseRichText(node, composables)}</p>`
            }
          }
        }
      })}</blockquote></div>`,
      ...options?.renderNode
    },
    renderMark: {
      'code': (text: string) => {
        const langs = ['HTML', 'CSS', 'SCSS', 'JAVASCRIPT', 'TYPESCRIPT', 'VUE']
        const lang = text.split('\n')[0].toLowerCase()
        if (langs.includes(lang.toUpperCase())) {
          return `<pre><code data-lang="${lang.toUpperCase()}" class="hljs language-${lang}">${highlightjs.highlight(decode(text.replace(`${lang.toUpperCase()}\n`, '')), { language: lang }).value}</code></pre>`
        }
        else if (text.split('\n')[0] === 'RAW_HTML') {
          return decode(text.replace('RAW_HTML\n', ''))
        }
        else {
          return `<code>${text}</code>`
        }
      },
      ...options?.renderMark
    }
  })
}