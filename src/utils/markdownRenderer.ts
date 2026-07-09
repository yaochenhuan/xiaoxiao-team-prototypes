function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function inlineFormatting(text: string): string {
  return (
    escapeHtml(text)
      // code
      .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-gray-100 text-rose-600 text-[12.5px] font-mono">$1</code>')
      // bold
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      // italic
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      // strikethrough
      .replace(/~~([^~]+)~~/g, '<del>$1</del>')
      // line breaks
      .replace(/\n/g, '<br />')
  )
}

export function renderMarkdownToHtml(markdown: string): string {
  const lines = markdown.split('\n')
  const html: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') {
      i++
      continue
    }

    // h1
    if (/^#\s+(.+)$/.test(line)) {
      html.push(`<h1 class="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">${inlineFormatting(line.replace(/^#\s+/, ''))}</h1>`)
      i++
      continue
    }

    // h2
    if (/^##\s+(.+)$/.test(line)) {
      html.push(`<h2 class="text-lg font-bold text-gray-900 mt-6 mb-3 pb-1.5 border-b border-gray-100">${inlineFormatting(line.replace(/^##\s+/, ''))}</h2>`)
      i++
      continue
    }

    // h3
    if (/^###\s+(.+)$/.test(line)) {
      html.push(`<h3 class="text-base font-semibold text-gray-800 mt-4 mb-2">${inlineFormatting(line.replace(/^###\s+/, ''))}</h3>`)
      i++
      continue
    }

    // divider
    if (/^\s*---\s*$/.test(line)) {
      html.push('<hr class="my-4 border-gray-200" />')
      i++
      continue
    }

    // code block
    const codeMatch = line.match(/^```(\w*)\s*$/)
    if (codeMatch) {
      const lang = codeMatch[1]
      const start = i + 1
      let end = start
      while (end < lines.length && !/^```\s*$/.test(lines[end])) {
        end++
      }
      const code = escapeHtml(lines.slice(start, end).join('\n'))
      html.push(
        `<div class="my-3 rounded-lg overflow-hidden bg-slate-900 text-slate-200">` +
          (lang ? `<div class="px-3 py-1.5 text-[11px] text-slate-400 bg-slate-950/60 border-b border-slate-800 font-mono">${lang}</div>` : '') +
          `<pre class="px-4 py-3 text-[12px] leading-relaxed font-mono overflow-x-auto whitespace-pre"><code>${code}</code></pre>` +
          `</div>`,
      )
      i = end + 1
      continue
    }

    // callout
    const calloutMatch = line.match(/^>\s*(.*)$/)
    if (calloutMatch) {
      html.push(`<div class="my-3 rounded-lg border px-3.5 py-2.5 bg-blue-50 border-blue-200 text-blue-900"><div class="text-[13px] leading-relaxed">${inlineFormatting(calloutMatch[1])}</div></div>`)
      i++
      continue
    }

    // table
    if (line.includes('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i])
        i++
      }
      if (tableLines.length >= 2) {
        const cells = tableLines.map(l =>
          l
            .split('|')
            .map(c => c.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1),
        )
        const headers = cells[0]
        const rows = cells.slice(2)
        if (headers.length > 0 && rows.length > 0) {
          html.push('<div class="my-3 overflow-x-auto rounded-lg border border-gray-200"><table class="w-full text-sm">')
          html.push('<thead><tr class="bg-gray-50">' + headers.map(h => `<th class="px-3 py-2 text-left text-xs font-semibold text-gray-600 whitespace-nowrap border-b border-gray-200">${inlineFormatting(h)}</th>`).join('') + '</tr></thead>')
          html.push('<tbody>' + rows.map(row => `<tr class="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60">${row.map(cell => `<td class="px-3 py-2 text-[13px] text-gray-700 align-top">${inlineFormatting(cell)}</td>`).join('')}</tr>`).join('') + '</tbody>')
          html.push('</table></div>')
          continue
        }
      }
    }

    // list
    if (/^(\s*)(?:-\*|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line)
      const items: string[] = []
      while (i < lines.length && /^(\s*)(?:-\*|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^(\s*)(?:-\*|\d+\.)\s+/, ''))
        i++
      }
      const tag = ordered ? 'ol' : 'ul'
      const listClass = ordered ? 'list-decimal' : 'list-disc'
      html.push(`<${tag} class="text-sm text-gray-700 leading-relaxed mb-3 pl-5 space-y-1 ${listClass} marker:text-gray-400">${items.map(item => `<li class="pl-1">${inlineFormatting(item)}</li>`).join('')}</${tag}>`)
      continue
    }

    // paragraph
    const paraLines: string[] = []
    while (i < lines.length && lines[i].trim() !== '' && !/^[#>|\-]\s/.test(lines[i]) && !lines[i].includes('|')) {
      paraLines.push(lines[i])
      i++
    }
    if (paraLines.length > 0) {
      html.push(`<p class="text-sm text-gray-700 leading-relaxed mb-3 whitespace-pre-line">${inlineFormatting(paraLines.join(' '))}</p>`)
    }
  }

  return html.join('\n')
}
