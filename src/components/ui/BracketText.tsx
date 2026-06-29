interface BracketTextProps {
  text: string;
  className?: string;
}

export function BracketText({ text, className = "" }: BracketTextProps) {
  const parts = text.split(/(\{[^}]+\})/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const match = part.match(/^\{([^}]+)\}$/);
        if (match) {
          return (
            <span key={i} className="font-mono text-accent-cyan">
              {"{"}
              <span className="italic text-accent-violet">{match[1].trim()}</span>
              {"}"}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
