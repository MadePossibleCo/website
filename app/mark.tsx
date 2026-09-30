/** The MadePossible mark: a block sliced in two, halves offset along the cut. */
export function Mark({ size = 20 }: { size?: number }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="19" height="10.5" fill="currentColor" />
      <rect x="5" y="13.5" width="19" height="10.5" fill="currentColor" />
    </svg>
  );
}
