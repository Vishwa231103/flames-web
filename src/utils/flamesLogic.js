export function calculateFlames(name1, name2) {
  if (!name1 || !name2) return null;

  let a = name1.toLowerCase().replace(/\s/g, '').split('');
  let b = name2.toLowerCase().replace(/\s/g, '').split('');

  // Remove common characters
  for (let i = 0; i < a.length; i++) {
    const index = b.indexOf(a[i]);
    if (index !== -1) {
      b.splice(index, 1);
      a.splice(i, 1);
      i--;
    }
  }

  const count = a.length + b.length;

  const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
  let index = 0;

  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }

  return flames[0];
}
