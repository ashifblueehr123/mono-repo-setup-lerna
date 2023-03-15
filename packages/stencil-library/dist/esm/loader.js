import { p as promiseResolve, b as bootstrapLazy } from './index-8f6d7426.js';
export { s as setNonce } from './index-8f6d7426.js';

/*
 Stencil Client Patch Esm v3.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map