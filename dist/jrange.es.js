function e(r, u, n = 1) {
  if (arguments.length === 0)
    return [];
  if (arguments.length === 1 && (u = r, r = 0), n === 0)
    return [];
  if (r === u)
    return [];
  if (r > u && n >= 0)
    return [];
  if (r < u && n <= 0)
    return [];
  const i = [];
  for (let f = r; f < u; f += n)
    i.push(f);
  return i;
}
export {
  e as default
};
