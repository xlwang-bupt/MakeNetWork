// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import first from 'containers/first';

export function createRoutes() {
  return {
    path: '/',
    indexRoute: { components: first },
  };
}
