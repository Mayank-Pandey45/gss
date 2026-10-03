// Concentric defensive rings. The ring for the hovered or focused layer lights up.
const rings = [
  { r: 176, w: 16, dash: '22 10' },
  { r: 138, w: 14, dash: '18 9' },
  { r: 100, w: 12, dash: '14 8' },
  { r: 62, w: 10, dash: '10 7' },
];

export default function Ramparts({ active }) {
  return (
    <svg className="ramparts" viewBox="0 0 400 400" role="img" aria-label="Four concentric rings of defence: perimeter, entry, network and people">
      {rings.map((ring, i) => (
        <circle
          key={i}
          cx="200" cy="200" r={ring.r}
          fill="none"
          strokeWidth={ring.w}
          strokeDasharray={ring.dash}
          className={`ring ${active === i ? 'ring-on' : ''}`}
        />
      ))}
      <circle cx="200" cy="200" r="26" className="ring-core" />
      <path d="M200 186a8 8 0 0 1 4 15v10h-8v-10a8 8 0 0 1 4-15z" className="ring-keyhole" />
    </svg>
  );
}
