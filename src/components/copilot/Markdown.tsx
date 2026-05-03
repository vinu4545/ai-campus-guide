// Tiny markdown renderer for copilot bubbles (no external deps).
export const Markdown = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  const out: JSX.Element[] = [];
  let listBuf: string[] = [];

  const flushList = (key: number) => {
    if (listBuf.length) {
      out.push(
        <ul key={`ul-${key}`}>
          {listBuf.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inline(item) }} />
          ))}
        </ul>
      );
      listBuf = [];
    }
  };

  const inline = (s: string) =>
    s
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  lines.forEach((line, i) => {
    if (line.startsWith("### ")) {
      flushList(i);
      out.push(<h3 key={i} dangerouslySetInnerHTML={{ __html: inline(line.slice(4)) }} />);
    } else if (/^\s*[-*]\s+/.test(line)) {
      listBuf.push(line.replace(/^\s*[-*]\s+/, ""));
    } else if (/^\d+\.\s+/.test(line)) {
      flushList(i);
      out.push(<p key={i} dangerouslySetInnerHTML={{ __html: inline(line) }} />);
    } else if (line.trim()) {
      flushList(i);
      out.push(<p key={i} dangerouslySetInnerHTML={{ __html: inline(line) }} />);
    }
  });
  flushList(9999);

  return <div className="prose-copilot text-sm">{out}</div>;
};
