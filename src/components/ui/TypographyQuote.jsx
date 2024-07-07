export function TypographyInlineCode({ content }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {content}
    </code>
  );
}

export function TypographyBlockquote({ content }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {/* "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege." */}
      {content}
    </blockquote>
  );
}
