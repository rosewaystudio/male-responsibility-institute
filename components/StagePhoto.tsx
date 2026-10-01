import Image from "next/image";

type Props = { label: string; alt: string; src?: string };

// Replaces the design tool's drag-and-drop <image-slot>. Shows the striped
// placeholder until a real photo path is set in lib/content.ts.
export default function StagePhoto({ label, alt, src }: Props) {
  if (!src) {
    return <div className="stage-photo is-empty" role="img" aria-label={`Photo coming soon: ${label}`}>{label}</div>;
  }
  return (
    <div className="stage-photo">
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
    </div>
  );
}
