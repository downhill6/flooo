const urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';

/**
 *
 * @public
 */
export const nanoid = (size = 21) => {
  let id = '';
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  let i = size;
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    // eslint-disable-next-line no-bitwise
    id += urlAlphabet[(Math.random() * 64) | 0];
  }
  return id;
};
