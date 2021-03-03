const escapeStringRegexp = require('escape-string-regexp');
const flatten = require('flat');
const fs = require('fs');
const loaderUtils = require('loader-utils');
const path = require('path');
const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    delimiters: {
      type: 'array',
      items: [{ type: 'string' }, { type: 'string' }],
      additionalItems: false,
      uniqueItems: true,
    },
    escape: {
      type: 'boolean',
    },
    pathToDictionary: {
      type: 'string',
    },
    prefix: {
      type: 'string',
    },
  },
};

/**
 * Adds a file to the cache for already read files.
 *
 * @param {String} file the file to read and parse
 */
const cache = new Map();
const cacheFile = (file) => {
  let json = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));

  cache.set(file, flatten(json));
};

/**
 *  Accepts full path to JSON file
 *     reads from disk
 *     flattens into key:val obj
 *  @param {String} file full path to json dictionary file
 *  @return {Object} dictionary representation of json
 */
const getDictionaryFromDisk = (file) => {
  if (!cache.has(file)) {
    cacheFile(file);
  }

  return cache.get(file);
};

/**
 * When single quotes are used in the consuming JavaScript, the values should be
 * escaped to prevent an accidental early string termination. The escaped value
 * is an HTML entity as dictionary copy is intended for rendering to the DOM.
 * @example
 * // dictionary
 * {"some-key": "some 'value'"}
 * // Without escape
 * 'some 'value''
 * // With escape
 * 'some \'value\''
 */
const escapeApostrophe = (str) => {
  if (typeof str !== 'string') return;

  return str.replace(/"/g, '\\"').replace(/'/g, "\\'");
};

/**
 * Validates options then fetches dictionary and replaces
 * text in source with values where keys are marked by delimiters
 * @param {String} source
 * @return {String} modified source with replacement from dictionary
 */
const load = (source, options) => {
  validate(schema, options, 'dictionary-inline-loader');

  let delims = {
    start: options.delimiters[0],
    end: options.delimiters[1],
  };
  let shouldEscape = !!options.escape;
  let shouldReplace =
    source.includes(delims.start) && source.includes(delims.end);

  if (shouldReplace) {
    return source.replace(
      new RegExp(
        escapeStringRegexp(delims.start) +
          '(.+?)\\.(.+?)' +
          escapeStringRegexp(delims.end),
        'g'
      ),
      function (str, file, key) {
        let dict = getDictionaryFromDisk(
          path.join(options.pathToDictionary, file + '.json')
        );

        if (dict[key]) {
          return shouldEscape ? escapeApostrophe(dict[key]) : dict[key];
        }

        return key;
      }
    );
  }

  return source;
};

module.exports = function (source) {
  let options = loaderUtils.getOptions(this);

  return load(source, options);
};
