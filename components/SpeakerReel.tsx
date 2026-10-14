import { reel } from "@/lib/content";

// Shows the striped placeholder until reel.embedUrl is set in lib/content.ts.
export default function SpeakerReel() {
  if (reel.embedUrl) {
    return (
      <div className="reel">
        <iframe
          src={reel.embedUrl}
          title={`${reel.title}: Odis Bellinger`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="reel" role="img" aria-label="Speaker reel coming soon">
      <div className="reel-play" aria-hidden="true" />
      <div className="reel-label" aria-hidden="true">
        <b>{reel.title}</b>
        {reel.label}
      </div>
    </div>
  );
}
