/**
 * The MadePossible mark: two hooked strokes on a 60° grid that meet in the
 * middle. Each half is one curved stroke (a diagonal arm sweeping into a
 * horizontal bar) plus a straight arm that locks into its bend.
 *
 * Geometry is rebuilt from the master artwork: arms at exactly 60°, bends are
 * true circular arcs, and the top half is drawn heavier than the bottom, as in
 * the original. Units: the mark is 100 tall.
 */
export const MARK_WIDTH = 106.33;
export const MARK_HEIGHT = 100;
export const MARK_VIEWBOX = `0 0 ${MARK_WIDTH} ${MARK_HEIGHT}`;

export const MARK_TOP =
  "M22.17 0L50.29 48.71L106.33 48.71L99.14 61.17L66.51 61.17A40.8 40.8 0 0 1 31.17 40.76L14.9 12.59Z" +
  "M67.61 6.16L78.48 12.43L57.53 48.71L43.04 48.71Z";

export const MARK_BOTTOM =
  "M60.97 100L40.55 64.63L0 64.63L6.02 54.2L22.9 54.2A41.47 41.47 0 0 1 58.81 74.93L67.13 89.34Z" +
  "M34.52 64.63L46.71 64.63L27.92 97.17L18.78 91.9Z";

export function Mark({
  size = 20,
  className,
}: {
  /** Rendered height in px; width follows the mark's proportions. */
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className ? `mark ${className}` : "mark"}
      width={(size * MARK_WIDTH) / MARK_HEIGHT}
      height={size}
      viewBox={MARK_VIEWBOX}
      aria-hidden="true"
      focusable="false"
    >
      <path className="markTop" d={MARK_TOP} fill="currentColor" />
      <path className="markBottom" d={MARK_BOTTOM} fill="currentColor" />
    </svg>
  );
}
