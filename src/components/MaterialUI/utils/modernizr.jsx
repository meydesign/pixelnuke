/* eslint no-shadow-restricted-names:0, no-extend-native:0 */
module.exports = (function modernizr(window, document, undefined) {
  const version = '2.8.3';

  const Modernizr = {};

  const docElement = document.documentElement;

  const mod = 'modernizr';
  const modElem = document.createElement(mod);
  const mStyle = modElem.style;

  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const omPrefixes = 'Webkit Moz O ms';
  const cssomPrefixes = omPrefixes.split(' ');
  const domPrefixes = omPrefixes.toLowerCase().split(' ');

  const tests = {};
  const classes = [];
  const slice = classes.slice;

  const _hasOwnProperty = ({}).hasOwnProperty;

  let featureName;

  function injectElementWithStyles(rule, callback, sNodes, testnames) {
    let style;
    let ret;
    let node;
    let docOverflow;
    let nodes;

    const div = document.createElement('div');
    const body = document.body;
    const fakeBody = body || document.createElement('body');

    if (parseInt(nodes, 10)) {
      nodes = sNodes;

      while (nodes--) {
        node = document.createElement('div');

        node.id = testnames
          ? testnames[nodes]
          : mod + (nodes + 1);

        div.appendChild(node);
      }
    }

    style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
    div.id = mod;

    (body ? div : fakeBody).innerHTML += style;

    fakeBody.appendChild(div);

    if (!body) {
      fakeBody.style.background = '';
      fakeBody.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(fakeBody);
    }

    ret = callback(div, rule);

    if (!body) {
      fakeBody.parentNode.removeChild(fakeBody);
      docElement.style.overflow = docOverflow;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;
  }

  function is(obj, type) {
    return typeof obj === type;
  }

  function hasOwnProp(object, property) {
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      return _hasOwnProperty.call(object, property);
    }

    return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
  }

  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {
      const target = this;

      if (typeof target !== 'function') {
        throw new TypeError();
      }

      const args = slice.call(arguments, 1);
      const bound = function bound() {
        if (this instanceof bound) {
          const F = function F() {};

          F.prototype = target.prototype;

          const self = new F();

          const result = target.apply(self,
            args.concat(slice.call(arguments))
          );

          if (Object(result) === result) {
            return result;
          }

          return self;
        }

        return target.apply(that,
          args.concat(slice.call(arguments))
        );
      };

      return bound;
    };
  }

  function setCss(str) {
    mStyle.cssText = str;
  }

  function setCssAll(str1, str2) {
    return setCss(prefixes.join(str1 + ';') + (str2 || ''));
  }

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  function testProps(props, prefixed) {
    for (const i in props) {
      if (!contains(props[i], '-') && mStyle[props[i]] !== undefined) {
        return prefixed === 'pfx' ? props[i] : true;
      }
    }

    return false;
  }

  function testDOMProps(props, obj, elem) {
    for (const i in props) {
      if (obj[props[i]] !== undefined) {
        if (elem === false) {
          return props[i];
        }

        if (is(obj[props[i]], 'function')) {
          return obj[props[i]].bind(elem || obj);
        }

        return obj[props[i]];
      }
    }

    return false;
  }

  function testPropsAll(prop, prefixed, elem) {
    const ucProp = prop.charAt(0).toUpperCase() + prop.slice(1);

    let props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed);
    }

    props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');

    return testDOMProps(props, prefixed, elem);
  }

  tests.borderradius = function borderradius() {
    return testPropsAll('borderRadius');
  };

  tests.boxshadow = function boxshadow() {
    return testPropsAll('boxShadow');
  };

  tests.opacity = function opacity() {
    setCssAll('opacity:.55');

    return (/^0.55$/).test(mStyle.opacity);
  };

  tests.csstransforms = function csstransforms() {
    return !!testPropsAll('transform');
  };

  tests.csstransforms3d = function csstransforms3d() {
    let ret = !!testPropsAll('perspective');

    if (ret && 'webkitPerspective' in docElement.style) {
      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function style3d(node) {
        ret = node.offsetLeft === 9 && node.offsetHeight === 3;
      });
    }

    return ret;
  };

  tests.csstransitions = function csstransitions() {
    return testPropsAll('transition');
  };

  for (const feature in tests) {
    if (hasOwnProp(tests, feature)) {
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();
      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }

  Modernizr.addTest = function addTest(feature, test) {
    if (typeof feature === 'object') {
      for (const key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[key]);
        }
      }
    } else {
      const rFeature = feature.toLowerCase();

      if (Modernizr[rFeature] !== undefined ) {
        return Modernizr;
      }

      const rTest = (typeof test === 'function')
        ? test()
        : test;

      if (typeof enableClasses !== 'undefined' && enableClasses) {
        docElement.className += ' ' + (rTest ? '' : 'no-') + rFeature;
      }

      Modernizr[rFeature] = rTest;
    }

    return Modernizr;
  };

  setCss('');

  Modernizr._version = version;
  Modernizr._prefixes = prefixes;
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;

  Modernizr.testProp = function testProp(prop) {
    return testProps([prop]);
  };
  Modernizr.testAllProps = testPropsAll;


  Modernizr.testStyles = injectElementWithStyles;
  Modernizr.prefixed = function prefixed(prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    }

    return testPropsAll(prop, obj, elem);
  };

  return Modernizr;
})(window, window.document);
