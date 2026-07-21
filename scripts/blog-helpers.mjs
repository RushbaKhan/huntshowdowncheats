export function wc(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function body(...sections) {
  return sections.join('\n\n');
}

export function escapeTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

export function faqSection(items) {
  return body(
    '## Frequently Asked Questions',
    ...items.map(({ q, a }) => `### ${q}\n\n${a}`)
  );
}

export function P(...paragraphs) {
  return paragraphs;
}
