export type FormPoint = { x: number; y: number; z: number };

// A continuous ribbon with one half-twist. The same geometry powers the
// animated canvas and the static, no-JavaScript drawing.
export function formPoint(
  u: number,
  v: number,
  time: number,
  mode: number,
  pointerX: number,
  pointerY: number,
): FormPoint {
  const secure = Math.max(0, 1 - Math.abs(mode - 1));
  const intelligence = Math.max(0, mode - 1);
  const radius = 125 - secure * 13;
  const breadth = 34 + secure * 24;
  const wave = Math.sin(u * 3 + time * 0.35) * (3 + intelligence * 10);
  const twist = u / 2 + Math.sin(time * 0.18) * 0.12;
  const spread = v * breadth * (1 + 0.06 * Math.sin(u * 2 + time * 0.3));
  let x = (radius + spread * Math.cos(twist) + wave) * Math.cos(u);
  let y = (radius + spread * Math.cos(twist) + wave) * Math.sin(u);
  let z = spread * Math.sin(twist);
  const tilt = 0.72 + pointerY * 0.32;
  const turn = -0.3 + Math.sin(time * 0.16) * 0.25 + pointerX * 0.48;
  const roll = -0.38 + Math.sin(time * 0.12) * 0.12 + pointerX * 0.08;
  [y, z] = [
    y * Math.cos(tilt) - z * Math.sin(tilt),
    y * Math.sin(tilt) + z * Math.cos(tilt),
  ];
  [x, z] = [
    x * Math.cos(turn) + z * Math.sin(turn),
    -x * Math.sin(turn) + z * Math.cos(turn),
  ];
  [x, y] = [
    x * Math.cos(roll) - y * Math.sin(roll),
    x * Math.sin(roll) + y * Math.cos(roll),
  ];
  const perspective = 680 / (680 - z);
  return { x: x * perspective, y: y * perspective, z };
}

export function formOutline(v: number): string {
  return Array.from({ length: 97 }, (_, index) => {
    const p = formPoint((index / 96) * Math.PI * 2, v, 0, 0.35, 0, 0);
    return `${index ? 'L' : 'M'}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }).join(' ');
}

export function drawForm(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  mode: number,
  pointerX: number,
  pointerY: number,
  pulse: number,
) {
  const columns = 104;
  const rows = width < 450 ? 25 : 37;
  const scale = (Math.min(width, height * 1.13) / 390) * (1 + pulse * 0.035);
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.scale(scale, scale);
  const vertices: FormPoint[][] = [];
  for (let row = 0; row <= rows; row++) {
    vertices.push(
      Array.from({ length: columns + 1 }, (_, column) =>
        formPoint(
          (column / columns) * Math.PI * 2,
          -1 + (row / rows) * 2,
          time,
          mode,
          pointerX,
          pointerY,
        ),
      ),
    );
  }
  const faces: {
    a: FormPoint;
    b: FormPoint;
    c: FormPoint;
    d: FormPoint;
    depth: number;
  }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const a = vertices[row][column];
      const b = vertices[row][column + 1];
      const c = vertices[row + 1][column + 1];
      const d = vertices[row + 1][column];
      faces.push({ a, b, c, d, depth: (a.z + b.z + c.z + d.z) / 4 });
    }
  }
  faces.sort((a, b) => a.depth - b.depth);
  context.lineJoin = 'round';
  for (const { a, b, c, d, depth } of faces) {
    const normalX = (b.y - a.y) * (d.z - a.z) - (b.z - a.z) * (d.y - a.y);
    const normalY = (b.z - a.z) * (d.x - a.x) - (b.x - a.x) * (d.z - a.z);
    const normalZ = (b.x - a.x) * (d.y - a.y) - (b.y - a.y) * (d.x - a.x);
    const length = Math.hypot(normalX, normalY, normalZ) || 1;
    const light = Math.abs(
      (normalX * -0.25 + normalY * -0.45 + normalZ * 0.85) / length,
    );
    const shade = Math.round(206 + light * 44);
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
    context.lineTo(d.x, d.y);
    context.closePath();
    context.fillStyle = `rgb(${shade},${shade},${shade - 2})`;
    context.fill();
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.strokeStyle = `rgba(25,25,23,${0.28 + Math.max(0, Math.min(1, (depth + 150) / 300)) * 0.34})`;
    context.lineWidth = 0.48;
    context.stroke();
  }
  context.restore();
}
