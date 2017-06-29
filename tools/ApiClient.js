import superagent from 'superagent';
const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  if (path.startsWith('/_layouts/')) return _spPageContextInfo.webServerRelativeUrl + path;
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // Prepend `/api` to relative URL, to proxy to API server.
  const prefix = `${_spPageContextInfo.webServerRelativeUrl}/_vti_bin/ListData.svc`;

  const url = prefix + adjustedPath;

  return url.indexOf('?') != -1 ? url + `&__=${(new Date()).getTime()}` : url + `?__=${(new Date()).getTime()}`;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        request.set('Accept', 'application/json');
        if (params) {
          params.forEach(par => request.set(par));
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (data) {
          request.send(data);
        }
        //setTimeout(() => {
        request.end((err, { body } = {}) => {
          if (err && err.status != 412) {
            return reject(body || err);
          } else {
            return resolve(body && body.d);
          }
        });
        //}, Random.integer(50, 300));
      }));
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() { }
}
