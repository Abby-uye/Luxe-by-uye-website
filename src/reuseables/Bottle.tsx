import { useId } from "react";

type BottleProps = {
  glass: string;
  label: string;
  className?: string;
};

const Bottle = ({ glass, label, className }: BottleProps) => {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 100 150"
      aria-hidden="true"
      style={{ ["--g" as string]: glass, ["--l" as string]: label }}
    >
      <defs>
        <linearGradient id={`cap-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6c984" />
          <stop offset="0.5" stopColor="#c9a24f" />
          <stop offset="1" stopColor="#a47d2c" />
        </linearGradient>
      </defs>
      <rect x="36" y="2" width="28" height="30" rx="3" fill={`url(#cap-${id})`} />
      <rect x="44" y="32" width="12" height="8" fill="#a47d2c" />
      <rect x="8" y="40" width="84" height="106" rx="5" fill="var(--g)" />
      <rect x="14" y="46" width="6" height="94" fill="#fff" opacity="0.35" />
      <rect x="26" y="78" width="48" height="40" fill="var(--l)" />
      <rect
        x="29"
        y="81"
        width="42"
        height="34"
        fill="none"
        stroke="#c9a24f"
        strokeWidth="1"
      />
    </svg>
  );
};

export default Bottle;
