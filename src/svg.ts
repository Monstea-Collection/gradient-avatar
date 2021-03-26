const svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="$SIZE" height="$SIZE" viewBox="0 0 $SIZE $SIZE" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g>
    <defs>
      <linearGradient id="$ID" x1="0" y1="0" x2="1" y2="1">
        <stop offset="$START%" stop-color="$FIRST"/>
        <stop offset="$END%" stop-color="$SECOND"/>
      </linearGradient>
    </defs>
    <circle fill="url(#$ID)" cx="$RADIUS" cy="$RADIUS" r="$RADIUS" transform="rotate($ROTATE, $RADIUS, $RADIUS)"/>
  </g>
</svg>`
export default svg
