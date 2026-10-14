import type { AnchorHTMLAttributes } from "react";

// Opens full URLs (Amazon, payment links) in a new tab; keeps in-page links like "#book" as-is.
export default function SmartLink({ href = "#", ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = /^https?:\/\//.test(href);
  return <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest} />;
}
