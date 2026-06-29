import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
}

export function Logo({ className = "h-8 w-auto", href = "/" }: LogoProps) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/moderor-logo.svg" alt="moderor.ai" className={className} />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center">
        {img}
      </Link>
    );
  }

  return img;
}
