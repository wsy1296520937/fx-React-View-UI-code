!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react'], t)
    : t(
        (((e = 'undefined' != typeof globalThis ? globalThis : e || self)['my-lib-umd'] =
          e['my-lib-umd'] || {}),
        (e['my-lib-umd'].js = {})),
        e.React,
      );
})(this, function (e, t) {
  'use strict';
  function a(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  function n(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (a) {
          if ('default' !== a) {
            var n = Object.getOwnPropertyDescriptor(e, a);
            Object.defineProperty(
              t,
              a,
              n.get
                ? n
                : {
                    enumerable: !0,
                    get: function () {
                      return e[a];
                    },
                  },
            );
          }
        }),
      (t.default = e),
      Object.freeze(t)
    );
  }
  var r = a(t),
    l = n(t);
  const o = t.memo((e) => {
      const {
          type: a,
          width: n,
          height: l,
          disabled: o,
          circle: i,
          dashed: c,
          loading: s,
          handleClick: d,
          children: u,
        } = e,
        f = t.useMemo(
          () =>
            a || 'danger' === a || 'warning' === a || 'warning' === a || 'text' === a
              ? a
              : 'primary',
          [a],
        ),
        m = t.useMemo(() => {
          var e = { width: '100px', height: '40px' };
          return (
            n && (e.width = n + 'px'),
            l && (e.height = l + 'px'),
            i && (e = Object.assign(Object.assign({}, e), { borderRadius: '50%' })),
            c &&
              'text' === a &&
              (e = Object.assign(Object.assign({}, e), { border: '1px dashed #ccc' })),
            o && (e = Object.assign(Object.assign({}, e), { cursor: 'not-allowed' })),
            e
          );
        }, [n, l, i, c]);
      return r.default.createElement(
        'div',
        { className: 'button' },
        r.default.createElement(
          'button',
          { className: f, style: m, disabled: !!o, onClick: d },
          s && r.default.createElement('div', { className: 'loading1' }),
          u,
        ),
      );
    }),
    i = t.memo((e) => {
      const { children: a, fontSize: n, borderColor: l, align: o, dashed: i } = e,
        c = t.useMemo(
          () =>
            'left' === o
              ? { justifyContent: 'left' }
              : 'right' === o
              ? { justifyContent: 'right' }
              : {},
          [o],
        ),
        s = t.useMemo(() => (l ? { borderColor: l } : {}), [l]),
        d = t.useMemo(() => {
          if (n) return { fontSize: `${n}px` };
        }, [n]);
      return r.default.createElement(
        'div',
        { className: 'divider' },
        r.default.createElement(
          'div',
          { className: i ? 'dashed' : 'line', style: Object.assign(Object.assign({}, c), s) },
          a && r.default.createElement('span', { className: 'line-text', style: d }, a),
        ),
      );
    });
  var c = t.memo((e) => {
    const { children: a, extraStyle: n } = e,
      l = t.useMemo(() => n || {}, [n]);
    return r.default.createElement('div', { className: 'layout', style: l }, a);
  });
  var s = t.memo((e) => {
    const { children: a, extraStyle: n } = e,
      l = t.useMemo(() => n || {}, [n]);
    return r.default.createElement('div', { className: 'header', style: l }, a);
  });
  var d = t.memo((e) => {
    const { row: a, extraStyle: n } = e,
      l = t.useMemo(() => (a ? { width: `${a}0%` } : {}), [a]),
      o = t.useMemo(() => n || {}, [n]);
    return r.default.createElement(
      'div',
      { className: 'slider', style: Object.assign(Object.assign({}, l), o) },
      e.children,
    );
  });
  var u = t.memo((e) => {
    const { children: a, row: n, extraStyle: l } = e,
      o = t.useMemo(() => (n ? { width: `${n}0%` } : {}), [n]),
      i = t.useMemo(() => l || {}, [l]);
    return r.default.createElement(
      'div',
      { className: 'content', style: Object.assign(Object.assign({}, o), i) },
      a,
    );
  });
  var f = t.memo((e) => {
      const { children: a, extraStyle: n } = e,
        l = t.useMemo(() => n || {}, [n]);
      return r.default.createElement('div', { className: 'footer', style: l }, a);
    }),
    m = t.createContext({});
  function h(e, t, a) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = a),
      e
    );
  }
  function g(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        a.push.apply(a, n);
    }
    return a;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? g(Object(a), !0).forEach(function (t) {
            h(e, t, a[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : g(Object(a)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
    }
    return e;
  }
  function b(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
    return n;
  }
  function y(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var a =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != a) {
          var n,
            r,
            l = [],
            o = !0,
            i = !1;
          try {
            for (
              a = a.call(e);
              !(o = (n = a.next()).done) && (l.push(n.value), !t || l.length !== t);
              o = !0
            );
          } catch (e) {
            (i = !0), (r = e);
          } finally {
            try {
              o || null == a.return || a.return();
            } finally {
              if (i) throw r;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return b(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? b(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function v(e, t) {
    if (null == e) return {};
    var a,
      n,
      r = (function (e, t) {
        if (null == e) return {};
        var a,
          n,
          r = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) (a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
        return r;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++)
        (a = l[n]),
          t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
    }
    return r;
  }
  var E = (function (e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  })(function (e) {
    /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
    !(function () {
      var t = {}.hasOwnProperty;
      function a() {
        for (var e = [], n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          if (r) {
            var l = typeof r;
            if ('string' === l || 'number' === l) e.push(r);
            else if (Array.isArray(r)) {
              if (r.length) {
                var o = a.apply(null, r);
                o && e.push(o);
              }
            } else if ('object' === l)
              if (r.toString === Object.prototype.toString)
                for (var i in r) t.call(r, i) && r[i] && e.push(i);
              else e.push(r.toString());
          }
        }
        return e.join(' ');
      }
      e.exports ? ((a.default = a), (e.exports = a)) : (window.classNames = a);
    })();
  });
  function x(e) {
    return (
      (x =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      x(e)
    );
  }
  function k(e, t) {
    (function (e) {
      return 'string' == typeof e && -1 !== e.indexOf('.') && 1 === parseFloat(e);
    })(e) && (e = '100%');
    var a = (function (e) {
      return 'string' == typeof e && -1 !== e.indexOf('%');
    })(e);
    return (
      (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
      a && (e = parseInt(String(e * t), 10) / 100),
      Math.abs(e - t) < 1e-6
        ? 1
        : (e =
            360 === t
              ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
              : (e % t) / parseFloat(String(t)))
    );
  }
  function w(e) {
    return e <= 1 ? 100 * Number(e) + '%' : e;
  }
  function N(e) {
    return 1 === e.length ? '0' + e : String(e);
  }
  function C(e, t, a) {
    return (
      a < 0 && (a += 1),
      a > 1 && (a -= 1),
      a < 1 / 6 ? e + 6 * a * (t - e) : a < 0.5 ? t : a < 2 / 3 ? e + (t - e) * (2 / 3 - a) * 6 : e
    );
  }
  function O(e) {
    return M(e) / 255;
  }
  function M(e) {
    return parseInt(e, 16);
  }
  var S = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  };
  function j(e) {
    var t,
      a,
      n,
      r = { r: 0, g: 0, b: 0 },
      l = 1,
      o = null,
      i = null,
      c = null,
      s = !1,
      d = !1;
    return (
      'string' == typeof e &&
        (e = (function (e) {
          if (0 === (e = e.trim().toLowerCase()).length) return !1;
          var t = !1;
          if (S[e]) (e = S[e]), (t = !0);
          else if ('transparent' === e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
          var a = Y.rgb.exec(e);
          if (a) return { r: a[1], g: a[2], b: a[3] };
          if ((a = Y.rgba.exec(e))) return { r: a[1], g: a[2], b: a[3], a: a[4] };
          if ((a = Y.hsl.exec(e))) return { h: a[1], s: a[2], l: a[3] };
          if ((a = Y.hsla.exec(e))) return { h: a[1], s: a[2], l: a[3], a: a[4] };
          if ((a = Y.hsv.exec(e))) return { h: a[1], s: a[2], v: a[3] };
          if ((a = Y.hsva.exec(e))) return { h: a[1], s: a[2], v: a[3], a: a[4] };
          if ((a = Y.hex8.exec(e)))
            return { r: M(a[1]), g: M(a[2]), b: M(a[3]), a: O(a[4]), format: t ? 'name' : 'hex8' };
          if ((a = Y.hex6.exec(e)))
            return { r: M(a[1]), g: M(a[2]), b: M(a[3]), format: t ? 'name' : 'hex' };
          if ((a = Y.hex4.exec(e)))
            return {
              r: M(a[1] + a[1]),
              g: M(a[2] + a[2]),
              b: M(a[3] + a[3]),
              a: O(a[4] + a[4]),
              format: t ? 'name' : 'hex8',
            };
          if ((a = Y.hex3.exec(e)))
            return {
              r: M(a[1] + a[1]),
              g: M(a[2] + a[2]),
              b: M(a[3] + a[3]),
              format: t ? 'name' : 'hex',
            };
          return !1;
        })(e)),
      'object' == typeof e &&
        ($(e.r) && $(e.g) && $(e.b)
          ? ((t = e.r),
            (a = e.g),
            (n = e.b),
            (r = { r: 255 * k(t, 255), g: 255 * k(a, 255), b: 255 * k(n, 255) }),
            (s = !0),
            (d = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
          : $(e.h) && $(e.s) && $(e.v)
          ? ((o = w(e.s)),
            (i = w(e.v)),
            (r = (function (e, t, a) {
              (e = 6 * k(e, 360)), (t = k(t, 100)), (a = k(a, 100));
              var n = Math.floor(e),
                r = e - n,
                l = a * (1 - t),
                o = a * (1 - r * t),
                i = a * (1 - (1 - r) * t),
                c = n % 6;
              return {
                r: 255 * [a, o, l, l, i, a][c],
                g: 255 * [i, a, a, o, l, l][c],
                b: 255 * [l, l, i, a, a, o][c],
              };
            })(e.h, o, i)),
            (s = !0),
            (d = 'hsv'))
          : $(e.h) &&
            $(e.s) &&
            $(e.l) &&
            ((o = w(e.s)),
            (c = w(e.l)),
            (r = (function (e, t, a) {
              var n, r, l;
              if (((e = k(e, 360)), (t = k(t, 100)), (a = k(a, 100)), 0 === t))
                (r = a), (l = a), (n = a);
              else {
                var o = a < 0.5 ? a * (1 + t) : a + t - a * t,
                  i = 2 * a - o;
                (n = C(i, o, e + 1 / 3)), (r = C(i, o, e)), (l = C(i, o, e - 1 / 3));
              }
              return { r: 255 * n, g: 255 * r, b: 255 * l };
            })(e.h, o, c)),
            (s = !0),
            (d = 'hsl')),
        Object.prototype.hasOwnProperty.call(e, 'a') && (l = e.a)),
      (l = (function (e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      })(l)),
      {
        ok: s,
        format: e.format || d,
        r: Math.min(255, Math.max(r.r, 0)),
        g: Math.min(255, Math.max(r.g, 0)),
        b: Math.min(255, Math.max(r.b, 0)),
        a: l,
      }
    );
  }
  var D = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
    A = '[\\s|\\(]+(' + D + ')[,|\\s]+(' + D + ')[,|\\s]+(' + D + ')\\s*\\)?',
    F = '[\\s|\\(]+(' + D + ')[,|\\s]+(' + D + ')[,|\\s]+(' + D + ')[,|\\s]+(' + D + ')\\s*\\)?',
    Y = {
      CSS_UNIT: new RegExp(D),
      rgb: new RegExp('rgb' + A),
      rgba: new RegExp('rgba' + F),
      hsl: new RegExp('hsl' + A),
      hsla: new RegExp('hsla' + F),
      hsv: new RegExp('hsv' + A),
      hsva: new RegExp('hsva' + F),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function $(e) {
    return Boolean(Y.CSS_UNIT.exec(String(e)));
  }
  var B = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
  function L(e) {
    var t = (function (e, t, a) {
      (e = k(e, 255)), (t = k(t, 255)), (a = k(a, 255));
      var n = Math.max(e, t, a),
        r = Math.min(e, t, a),
        l = 0,
        o = n,
        i = n - r,
        c = 0 === n ? 0 : i / n;
      if (n === r) l = 0;
      else {
        switch (n) {
          case e:
            l = (t - a) / i + (t < a ? 6 : 0);
            break;
          case t:
            l = (a - e) / i + 2;
            break;
          case a:
            l = (e - t) / i + 4;
        }
        l /= 6;
      }
      return { h: l, s: c, v: o };
    })(e.r, e.g, e.b);
    return { h: 360 * t.h, s: t.s, v: t.v };
  }
  function R(e) {
    var t = e.r,
      a = e.g,
      n = e.b;
    return '#'.concat(
      (function (e, t, a, n) {
        var r = [
          N(Math.round(e).toString(16)),
          N(Math.round(t).toString(16)),
          N(Math.round(a).toString(16)),
        ];
        return n &&
          r[0].startsWith(r[0].charAt(1)) &&
          r[1].startsWith(r[1].charAt(1)) &&
          r[2].startsWith(r[2].charAt(1))
          ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
          : r.join('');
      })(t, a, n, !1),
    );
  }
  function T(e, t, a) {
    var n = a / 100;
    return { r: (t.r - e.r) * n + e.r, g: (t.g - e.g) * n + e.g, b: (t.b - e.b) * n + e.b };
  }
  function z(e, t, a) {
    var n;
    return (
      (n =
        Math.round(e.h) >= 60 && Math.round(e.h) <= 240
          ? a
            ? Math.round(e.h) - 2 * t
            : Math.round(e.h) + 2 * t
          : a
          ? Math.round(e.h) + 2 * t
          : Math.round(e.h) - 2 * t) < 0
        ? (n += 360)
        : n >= 360 && (n -= 360),
      n
    );
  }
  function I(e, t, a) {
    return 0 === e.h && 0 === e.s
      ? e.s
      : ((n = a ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (n = 1),
        a && 5 === t && n > 0.1 && (n = 0.1),
        n < 0.06 && (n = 0.06),
        Number(n.toFixed(2)));
    var n;
  }
  function P(e, t, a) {
    var n;
    return (n = a ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (n = 1), Number(n.toFixed(2));
  }
  function H(e) {
    for (
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = [],
        n = j(e),
        r = 5;
      r > 0;
      r -= 1
    ) {
      var l = L(n),
        o = R(j({ h: z(l, r, !0), s: I(l, r, !0), v: P(l, r, !0) }));
      a.push(o);
    }
    a.push(R(n));
    for (var i = 1; i <= 4; i += 1) {
      var c = L(n),
        s = R(j({ h: z(c, i), s: I(c, i), v: P(c, i) }));
      a.push(s);
    }
    return 'dark' === t.theme
      ? B.map(function (e) {
          var n = e.index,
            r = e.opacity;
          return R(T(j(t.backgroundColor || '#141414'), j(a[n]), 100 * r));
        })
      : a;
  }
  var q = {
      red: '#F5222D',
      volcano: '#FA541C',
      orange: '#FA8C16',
      gold: '#FAAD14',
      yellow: '#FADB14',
      lime: '#A0D911',
      green: '#52C41A',
      cyan: '#13C2C2',
      blue: '#1890FF',
      geekblue: '#2F54EB',
      purple: '#722ED1',
      magenta: '#EB2F96',
      grey: '#666666',
    },
    J = {},
    K = {};
  Object.keys(q).forEach(function (e) {
    (J[e] = H(q[e])),
      (J[e].primary = J[e][5]),
      (K[e] = H(q[e], { theme: 'dark', backgroundColor: '#141414' })),
      (K[e].primary = K[e][5]);
  }),
    J.red,
    J.volcano,
    J.gold,
    J.orange,
    J.yellow,
    J.lime,
    J.green,
    J.cyan,
    J.blue,
    J.geekblue,
    J.purple,
    J.magenta,
    J.grey;
  var V = {};
  function W(e, t) {
    'production' === process.env.NODE_ENV ||
      e ||
      void 0 === console ||
      console.error('Warning: '.concat(t));
  }
  function U(e, t) {
    !(function (e, t, a) {
      t || V[a] || (e(!1, a), (V[a] = !0));
    })(W, e, t);
  }
  function _() {
    return !('undefined' == typeof window || !window.document || !window.document.createElement);
  }
  var G = 'rc-util-key';
  function Q() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.mark;
    return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : G;
  }
  function X(e) {
    return e.attachTo ? e.attachTo : document.querySelector('head') || document.body;
  }
  function Z(e) {
    var t,
      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!_()) return null;
    var n,
      r = document.createElement('style');
    (null === (t = a.csp) || void 0 === t ? void 0 : t.nonce) &&
      (r.nonce = null === (n = a.csp) || void 0 === n ? void 0 : n.nonce);
    r.innerHTML = e;
    var l = X(a),
      o = l.firstChild;
    return (
      a.prepend && l.prepend
        ? l.prepend(r)
        : a.prepend && o
        ? l.insertBefore(r, o)
        : l.appendChild(r),
      r
    );
  }
  var ee = new Map();
  function te(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      a = X(t);
    return Array.from(ee.get(a).children).find(function (a) {
      return 'STYLE' === a.tagName && a.getAttribute(Q(t)) === e;
    });
  }
  function ae(e, t) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = X(a);
    if (!ee.has(n)) {
      var r = Z('', a),
        l = r.parentNode;
      ee.set(n, l), l.removeChild(r);
    }
    var o = te(t, a);
    if (o) {
      var i, c, s;
      if (
        (null === (i = a.csp) || void 0 === i ? void 0 : i.nonce) &&
        o.nonce !== (null === (c = a.csp) || void 0 === c ? void 0 : c.nonce)
      )
        o.nonce = null === (s = a.csp) || void 0 === s ? void 0 : s.nonce;
      return o.innerHTML !== e && (o.innerHTML = e), o;
    }
    var d = Z(e, a);
    return d.setAttribute(Q(a), t), d;
  }
  function ne(e) {
    return (
      'object' === x(e) &&
      'string' == typeof e.name &&
      'string' == typeof e.theme &&
      ('object' === x(e.icon) || 'function' == typeof e.icon)
    );
  }
  function re() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Object.keys(e).reduce(function (t, a) {
      var n = e[a];
      if ('class' === a) (t.className = n), delete t.class;
      else t[a] = n;
      return t;
    }, {});
  }
  function le(e, t, a) {
    return a
      ? r.default.createElement(
          e.tag,
          p(p({ key: t }, re(e.attrs)), a),
          (e.children || []).map(function (a, n) {
            return le(a, ''.concat(t, '-').concat(e.tag, '-').concat(n));
          }),
        )
      : r.default.createElement(
          e.tag,
          p({ key: t }, re(e.attrs)),
          (e.children || []).map(function (a, n) {
            return le(a, ''.concat(t, '-').concat(e.tag, '-').concat(n));
          }),
        );
  }
  function oe(e) {
    return H(e)[0];
  }
  function ie(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var ce =
      '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
    se = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
    de = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
  var ue = function (e) {
    var a,
      n,
      r = e.icon,
      l = e.className,
      o = e.onClick,
      i = e.style,
      c = e.primaryColor,
      s = e.secondaryColor,
      d = v(e, se),
      u = de;
    if (
      (c && (u = { primaryColor: c, secondaryColor: s || oe(c) }),
      (function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
          a = t.useContext(m).csp;
        t.useEffect(function () {
          ae(e, '@ant-design-icons', { prepend: !0, csp: a });
        }, []);
      })(),
      (a = ne(r)),
      (n = 'icon should be icon definiton, but got '.concat(r)),
      U(a, '[@ant-design/icons] '.concat(n)),
      !ne(r))
    )
      return null;
    var f = r;
    return (
      f &&
        'function' == typeof f.icon &&
        (f = p(p({}, f), {}, { icon: f.icon(u.primaryColor, u.secondaryColor) })),
      le(
        f.icon,
        'svg-'.concat(f.name),
        p(
          {
            className: l,
            onClick: o,
            style: i,
            'data-icon': f.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          d,
        ),
      )
    );
  };
  (ue.displayName = 'IconReact'),
    (ue.getTwoToneColors = function () {
      return p({}, de);
    }),
    (ue.setTwoToneColors = function (e) {
      var t = e.primaryColor,
        a = e.secondaryColor;
      (de.primaryColor = t), (de.secondaryColor = a || oe(t)), (de.calculated = !!a);
    });
  var fe = ue;
  function me(e) {
    var t = y(ie(e), 2),
      a = t[0],
      n = t[1];
    return fe.setTwoToneColors({ primaryColor: a, secondaryColor: n });
  }
  var he = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
  me('#1890ff');
  var ge = l.forwardRef(function (e, t) {
    var a,
      n = e.className,
      r = e.icon,
      o = e.spin,
      i = e.rotate,
      c = e.tabIndex,
      s = e.onClick,
      d = e.twoToneColor,
      u = v(e, he),
      f = l.useContext(m).prefixCls,
      g = void 0 === f ? 'anticon' : f,
      b = E(
        g,
        (h((a = {}), ''.concat(g, '-').concat(r.name), !!r.name),
        h(a, ''.concat(g, '-spin'), !!o || 'loading' === r.name),
        a),
        n,
      ),
      x = c;
    void 0 === x && s && (x = -1);
    var k = i
        ? { msTransform: 'rotate('.concat(i, 'deg)'), transform: 'rotate('.concat(i, 'deg)') }
        : void 0,
      w = y(ie(d), 2),
      N = w[0],
      C = w[1];
    return l.createElement(
      'span',
      p(
        p({ role: 'img', 'aria-label': r.name }, u),
        {},
        { ref: t, tabIndex: x, onClick: s, className: b },
      ),
      l.createElement(fe, { icon: r, primaryColor: N, secondaryColor: C, style: k }),
    );
  });
  (ge.displayName = 'AntdIcon'),
    (ge.getTwoToneColor = function () {
      var e = fe.getTwoToneColors();
      return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
    }),
    (ge.setTwoToneColor = me);
  var pe = ge,
    be = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
            },
          },
        ],
      },
      name: 'caret-down',
      theme: 'outlined',
    },
    ye = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: be }));
    };
  ye.displayName = 'CaretDownOutlined';
  var ve = l.forwardRef(ye),
    Ee = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
            },
          },
        ],
      },
      name: 'caret-up',
      theme: 'outlined',
    },
    xe = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Ee }));
    };
  xe.displayName = 'CaretUpOutlined';
  var ke = l.forwardRef(xe),
    we = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
            },
          },
        ],
      },
      name: 'check',
      theme: 'outlined',
    },
    Ne = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: we }));
    };
  Ne.displayName = 'CheckOutlined';
  var Ce = l.forwardRef(Ne),
    Oe = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
            },
          },
        ],
      },
      name: 'close',
      theme: 'outlined',
    },
    Me = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Oe }));
    };
  Me.displayName = 'CloseOutlined';
  var Se = l.forwardRef(Me),
    je = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
            },
          },
        ],
      },
      name: 'double-left',
      theme: 'outlined',
    },
    De = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: je }));
    };
  De.displayName = 'DoubleLeftOutlined';
  var Ae = l.forwardRef(De),
    Fe = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
            },
          },
        ],
      },
      name: 'double-right',
      theme: 'outlined',
    },
    Ye = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Fe }));
    };
  Ye.displayName = 'DoubleRightOutlined';
  var $e = l.forwardRef(Ye),
    Be = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
            },
          },
        ],
      },
      name: 'down',
      theme: 'outlined',
    },
    Le = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Be }));
    };
  Le.displayName = 'DownOutlined';
  var Re = l.forwardRef(Le),
    Te = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
            },
          },
        ],
      },
      name: 'ellipsis',
      theme: 'outlined',
    },
    ze = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Te }));
    };
  ze.displayName = 'EllipsisOutlined';
  var Ie = l.forwardRef(ze),
    Pe = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
            },
          },
        ],
      },
      name: 'eye',
      theme: 'outlined',
    },
    He = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Pe }));
    };
  He.displayName = 'EyeOutlined';
  var qe = l.forwardRef(He),
    Je = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
          {
            tag: 'path',
            attrs: {
              d: 'M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z',
            },
          },
          {
            tag: 'path',
            attrs: {
              d: 'M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z',
            },
          },
        ],
      },
      name: 'field-time',
      theme: 'outlined',
    },
    Ke = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Je }));
    };
  Ke.displayName = 'FieldTimeOutlined';
  var Ve = l.forwardRef(Ke),
    We = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
            },
          },
        ],
      },
      name: 'left',
      theme: 'outlined',
    },
    Ue = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: We }));
    };
  Ue.displayName = 'LeftOutlined';
  var _e = l.forwardRef(Ue),
    Ge = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
            },
          },
        ],
      },
      name: 'loading',
      theme: 'outlined',
    },
    Qe = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Ge }));
    };
  Qe.displayName = 'LoadingOutlined';
  var Xe = l.forwardRef(Qe),
    Ze = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
            },
          },
        ],
      },
      name: 'right',
      theme: 'outlined',
    },
    et = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: Ze }));
    };
  et.displayName = 'RightOutlined';
  var tt = l.forwardRef(et),
    at = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z',
            },
          },
        ],
      },
      name: 'rollback',
      theme: 'outlined',
    },
    nt = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: at }));
    };
  nt.displayName = 'RollbackOutlined';
  var rt = l.forwardRef(nt),
    lt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
            },
          },
        ],
      },
      name: 'swap-right',
      theme: 'outlined',
    },
    ot = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: lt }));
    };
  ot.displayName = 'SwapRightOutlined';
  var it = l.forwardRef(ot),
    ct = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
            },
          },
        ],
      },
      name: 'up',
      theme: 'outlined',
    },
    st = function (e, t) {
      return l.createElement(pe, p(p({}, e), {}, { ref: t, icon: ct }));
    };
  st.displayName = 'UpOutlined';
  var dt = l.forwardRef(st);
  var ut = t.memo((e) => {
    const {
        changePageCallback: a,
        total: n,
        pageSizeOptions: l,
        showJumpInput: o,
        showSizeChanger: i,
      } = e,
      [c, s] = t.useState(1),
      [d, u] = t.useState([]),
      [f, m] = t.useState(l ? l[0] : 10);
    t.useState(!1);
    const h = t.useMemo(() => {
      if ((s(1), Math.ceil(n / f) > 6)) u([2, 3, 4, 5, 6]);
      else if (Math.ceil(n / f) > 2) {
        const e = new Array(Math.ceil(n / f) - 2).fill(0);
        e.forEach((t, a) => {
          e[a] = a + 2;
        }),
          u(e);
      } else u([]);
      return Math.ceil(n / f);
    }, [n, f]);
    t.useEffect(() => {
      console.log(typeof c);
    }, [c]);
    const g = (e) => () => {
      if (h <= 6) return a(e), s(e);
      e > 4 && e <= h - 4 && u([e - 2, e - 1, e, e + 1, e + 2]),
        e <= 4 && u([2, 3, 4, 5, 6]),
        e > h - 4 && u([h - 5, h - 4, h - 3, h - 2, h - 1]),
        s(e),
        a(e);
    };
    return r.default.createElement(
      'div',
      { className: 'pagination' },
      r.default.createElement(
        'div',
        {
          className: 1 === c ? 'prev disabled' : 'prev',
          onClick: () => {
            if (1 !== c) {
              if ((s(c - 1), h > 6)) {
                if (c > h - 3) return;
                c > 4 ? u(d.map((e) => e - 1)) : c - 5 <= 4 && u([2, 3, 4, 5, 6]);
              }
              a(c - 1);
            }
          },
        },
        r.default.createElement(_e, null),
      ),
      r.default.createElement(
        'div',
        { className: 1 === c ? 'actived numberBox' : 'numberBox', onClick: g(1) },
        '1',
      ),
      c > 4 &&
        h > 6 &&
        r.default.createElement(
          'div',
          {
            className: 'numberBox',
            onClick: () => {
              var e = 0;
              c - 5 <= 4
                ? (u([2, 3, 4, 5, 6]), (e = c - 5 <= 1 ? 1 : c - 5))
                : c + 5 > h
                ? (u([c - 7, c - 6, c - 5, c - 4, c - 3]), (e = c - 5))
                : c - 5 > 4 && (u(d.map((e) => e - 5)), (e = c - 5)),
                s(e),
                a(e);
            },
          },
          r.default.createElement(Ie, null),
        ),
      h <= 4 &&
        d.length >= 1 &&
        d.map((e) =>
          r.default.createElement(
            'div',
            {
              className: c === e + 2 ? 'actived numberBox' : 'numberBox',
              key: e,
              onClick: g(e + 2),
            },
            e + 2,
          ),
        ),
      h > 4 &&
        d.map((e, t) =>
          r.default.createElement(
            'div',
            { className: c === e ? 'actived numberBox' : 'numberBox', key: t, onClick: g(e) },
            e,
          ),
        ),
      h - c >= 4 &&
        h > 6 &&
        r.default.createElement(
          'div',
          {
            className: 'numberBox',
            onClick: () => {
              var e = 0;
              c + 7 >= h
                ? (u([h - 5, h - 4, h - 3, h - 2, h - 1]), (e = c + 5 > h ? h : c + 5))
                : c - 5 < 0
                ? (u([c + 3, c + 4, c + 5, c + 6, c + 7]), (e = c + 5))
                : c + 5 < h && (u(d.map((e) => e + 5)), (e = c + 5)),
                s(e),
                a(e);
            },
          },
          r.default.createElement(Ie, null),
        ),
      h > 1 &&
        r.default.createElement(
          'div',
          { className: c === h ? 'actived numberBox' : 'numberBox', onClick: g(h) },
          h,
        ),
      r.default.createElement(
        'div',
        {
          className: c === h || h <= 1 ? 'next disabled' : 'next',
          onClick: () => {
            if (c !== h) {
              if ((s(c + 1), h > 6))
                if (c + 5 > h) u([h - 5, h - 4, h - 3, h - 2, h - 1]);
                else {
                  if (c < 4) return;
                  c + 5 < h && u(d.map((e) => e + 1));
                }
              a(c + 1);
            }
          },
        },
        r.default.createElement(tt, null),
      ),
      Array.isArray(l) &&
        i &&
        r.default.createElement(ft, {
          option: l.map((e) => ({ label: `${e} 条/页`, value: e })),
          width: 100,
          handleSelectCallback: (e) => {
            console.log(e), m(e);
          },
        }),
      o &&
        r.default.createElement(
          'div',
          { className: 'jumpBox' },
          r.default.createElement('span', null, '跳至'),
          r.default.createElement('input', {
            type: 'text',
            className: 'jump',
            onKeyUp: (e) => {
              if (13 === e.keyCode) {
                const t = Number(e.target.value);
                if (t > h || t < 0 || isNaN(t)) return (e.target.value = '');
                t > 6 && t < h - 6
                  ? u([t - 2, t - 1, t, t + 1, t + 2])
                  : t - 5 < 0
                  ? u([2, 3, 4, 5, 6])
                  : t + 5 > h && u([h - 5, h - 4, h - 3, h - 2, h - 1]),
                  s(t),
                  a(t),
                  (e.target.value = '');
              }
            },
          }),
          r.default.createElement('span', null, '页'),
        ),
    );
  });
  var ft = t.memo((e) => {
    const {
        option: a,
        width: n,
        placeholder: l,
        disabled: o,
        loading: i,
        showSearch: c,
        clearable: s,
        handleSelectCallback: d,
        handleTextChange: u,
      } = e,
      [f, m] = t.useState(''),
      h = t.createRef();
    t.useEffect(() => {
      (h.current.height = '0px'), console.log(a);
    }, []);
    const g = t.useMemo(() => (n ? { width: `${n}px` } : {}), [n]),
      p = t.useMemo(() => {
        if (o) return { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' };
      }, [o]),
      b = (e) => {
        e.stopPropagation(),
          o ||
            (console.log(h.current.style.height),
            '0px' === h.current.style.height || '' === h.current.style.height
              ? (h.current.style.height = c ? 100 * v.length + '%' : 100 * a.length + '%')
              : (h.current.style.height = '0px'),
            console.log(h.current.height));
      },
      y = (e, t) => {
        t.stopPropagation(),
          e.disabled || ((h.current.style.height = '0px'), m(e.label), d && d(e.value));
      },
      v = t.useMemo(() => a.filter((e) => e.label.includes(f)), [a, f]),
      E = t.useCallback(
        (e) => {
          m(e.target.value),
            (h.current.style.height =
              100 * a.filter((t) => t.label.includes(e.target.value)).length + '%'),
            u && u(e.target.value);
        },
        [f],
      );
    return c
      ? r.default.createElement(
          r.default.Fragment,
          null,
          r.default.createElement(
            'div',
            { className: 'select', style: Object.assign(Object.assign({}, g), p) },
            r.default.createElement(
              'div',
              { className: 'selected' },
              r.default.createElement('input', {
                type: 'text',
                className: 'selected',
                value: f,
                placeholder: l,
                onClick: b,
                onChange: (e) => E(e),
              }),
              s
                ? r.default.createElement(Se, { onClick: () => m('') })
                : r.default.createElement(Re, { onClick: b }),
            ),
            r.default.createElement(
              'div',
              { className: 'selectOptions', style: g, ref: h },
              v.map((e) =>
                r.default.createElement(
                  'div',
                  {
                    key: e.label,
                    className: 'option',
                    style: e.disabled
                      ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                      : {},
                    onClick: (t) => y(e, t),
                  },
                  e.label,
                ),
              ),
            ),
          ),
        )
      : r.default.createElement(
          'div',
          { className: 'select', style: Object.assign(Object.assign({}, g), p) },
          r.default.createElement(
            'div',
            { className: 'selected', onClick: b },
            f
              ? r.default.createElement('div', { className: 'size' }, f)
              : (l && r.default.createElement('div', { className: 'placeholder' }, l)) ||
                  r.default.createElement('div', null),
            i ? r.default.createElement(Xe, null) : r.default.createElement(Re, null),
          ),
          r.default.createElement(
            'div',
            { className: 'selectOptions', style: g, ref: h },
            a.map((e) =>
              r.default.createElement(
                'div',
                {
                  key: e.label,
                  className: 'option',
                  style: e.disabled
                    ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                    : {},
                  onClick: (t) => y(e, t),
                },
                e.label,
              ),
            ),
          ),
        );
  });
  var mt = t.memo((e) => {
    const {
        width: a,
        moreStyle: n,
        type: l,
        placeholder: o,
        showClear: i,
        showTogglePwd: c,
        min: s,
        max: d,
        step: u,
        handleIptChange: f,
        handleKeyDown: m,
        handleIptFocus: h,
        handleIptBlur: g,
        handleNumChange: p,
        clearCallback: b,
        defaultValue: y,
      } = e,
      [v, E] = t.useState(y || ''),
      [x, k] = t.useState(!0),
      w = t.useMemo(
        () => (c && 'password' === l ? (x ? 'password' : 'text') : l || 'text'),
        [l, c, x],
      ),
      N = t.useMemo(() => {
        let e = { width: '170px' };
        return a && (e.width = a + 'px'), Object.assign(Object.assign({}, e), n);
      }, [a, n]);
    return r.default.createElement(
      'div',
      { className: 'box', style: { width: a ? a + 'px' : '170px' } },
      r.default.createElement('input', {
        className: 'input',
        style: N,
        type: w,
        placeholder: o,
        value: y || v,
        onChange: (e) => {
          E(e.target.value), f && f(e.target.value);
        },
        onBlur: (e) => {
          'num' === l && NaN == Number(v) && E(''), g && g();
        },
        onFocus: () => {
          h && h(v);
        },
        onKeyUp: (e) => m && m(e),
      }),
      (i &&
        r.default.createElement(Se, {
          style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
          onClick: () => {
            E(''), b && b();
          },
        })) ||
        ('password' === l &&
          c &&
          r.default.createElement(qe, {
            style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
            onClick: () => k(!x),
          })) ||
        ('num' === l &&
          r.default.createElement(
            'div',
            { className: 'numTags' },
            r.default.createElement(dt, {
              style: { cursor: 'pointer', fontSize: '10px' },
              onClick: () => {
                if ('num' === l && NaN == Number(v)) return E('');
                const e = u || 1;
                return u && d && Number(v) + e > d
                  ? (p && p(d), E(d))
                  : u && s && Number(v) + e < s
                  ? (p && p(s), E(s))
                  : (p && p(Number(v) + e), void E(Number(v) + e));
              },
            }),
            r.default.createElement(Re, {
              style: { cursor: 'pointer', fontSize: '10px' },
              onClick: () => {
                if ('num' === l && NaN == Number(v)) return E('');
                const e = u || 1;
                if (u && s && Number(v) - e < s) return p && p(s), E(s);
                p && p(Number(v) - e), E(Number(v) - e);
              },
            }),
          )),
    );
  });
  var ht = t.memo((e) => {
    const { children: t } = e;
    return r.default.createElement('div', { style: { display: 'none' } }, t);
  });
  var gt = t.memo((e) => {
    const { children: a, value: n, canAddOption: l, boxStyle: o, onChange: i } = e,
      [c, s] = t.useState(n || 0),
      [d, u] = t.useState(a),
      [f, m] = t.useState(''),
      [h, g] = t.useState(l && !1);
    t.useEffect(() => {
      console.log(o);
    });
    const p = (e, t, a) => {
        e.disabled || (a && a.stopPropagation(), s(t), i && i(e, t), l && g(!1));
      },
      b = () => {
        s(d.length), g(!0);
      },
      y = (e) => {
        13 == e.keyCode && f && (u((e) => [...e, { props: { children: f } }]), g(!1));
      },
      v = (e) => {
        m(e);
      },
      E = t.useCallback(
        (e, t) => (e.disabled ? 'groupDisabledStyle' : t == c ? 'groupActive' : 'groupStyle'),
        [a, o, n, c],
      );
    return r.default.createElement(
      'div',
      { className: 'radioGroup' },
      d.map((e, t) =>
        o
          ? r.default.createElement(
              'div',
              {
                className: E(e.props, t),
                style: e.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
                key: t,
                onClick: (a) => p(e.props, t, a),
              },
              e.props.children,
            )
          : r.default.createElement(
              'div',
              {
                className: 'radioBox',
                style: e.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
                key: t,
                onClick: (a) => p(e.props, t, a),
              },
              r.default.createElement(
                'span',
                { className: e.props.disabled ? 'disabledLabel' : 'radioLabel' },
                e.props.children,
              ),
              r.default.createElement('input', {
                className: e.props.disabled ? 'disabledRadio' : 'radio',
                readOnly: !0,
                type: 'radio',
                checked: c === t,
                disabled: e.props.disabled,
              }),
            ),
      ),
      l
        ? o
          ? r.default.createElement(
              'div',
              { className: 'addOption' },
              r.default.createElement(
                'div',
                { className: c === d.length ? 'groupActive' : 'groupStyle', onClick: b },
                'More...',
              ),
              h && r.default.createElement(mt, { handleKeyDown: y, handleIptChange: v }),
            )
          : r.default.createElement(
              'div',
              { className: 'addOption' },
              r.default.createElement(
                'div',
                { className: 'radioBox', onClick: b },
                r.default.createElement('span', { className: 'radioLabel' }, 'More...'),
                r.default.createElement('input', {
                  className: 'radio',
                  type: 'radio',
                  readOnly: !0,
                  checked: c === d.length,
                }),
              ),
              h && r.default.createElement(mt, { handleKeyDown: y, handleIptChange: v }),
            )
        : r.default.createElement(r.default.Fragment, null),
    );
  });
  var pt = t.memo((e) => {
    const [a, n] = t.useState(''),
      [l, o] = t.useState(''),
      [i, c] = t.useState({}),
      { items: s, width: d, dark: u, ableToggle: f, defaultOpen: m, handleRouteChange: h } = e;
    t.useEffect(() => {
      const e = g(s, {}, '');
      if (m)
        for (var t in e)
          (e[t].height = e[t].childNum + 1),
            e[t].children.length > 0 &&
              (e[t].children.map((e) => (e.height = 50 * (e.childNum + 1) + 'px')),
              (e[t].height += e[t].children.reduce((e, t) => e.childNum + t.childNum))),
            (e[t].height = 50 * e[t].height + 'px');
      c(e);
    }, []),
      t.useEffect(() => {
        h && h(l);
      }, [l]);
    const g = (e, t, a) => (
        e.forEach((e) => {
          var n;
          e.children &&
            (1 == e.level
              ? (t[e.key] = {
                  key: e.key,
                  height: '50px',
                  childNum: e.children.length,
                  level: e.level,
                  children: [],
                })
              : null === (n = t[a]) ||
                void 0 === n ||
                n.children.push({
                  key: e.key,
                  height: '50px',
                  childNum: e.children.length,
                  level: e.level,
                }),
            g(e.children, t, e.level && 1 == e.level ? e.key : ''));
        }),
        t
      ),
      p = (e) => {
        var t;
        return i[e]
          ? { height: null === (t = i[e]) || void 0 === t ? void 0 : t.height }
          : { height: '50px' };
      },
      b = t.useCallback(
        (e) => {
          var t;
          for (var a in i) {
            const n =
              null === (t = i[a].children) || void 0 === t
                ? void 0
                : t.findIndex((t) => t.key == e);
            if (-1 !== n) return { height: i[a].children[n].height };
          }
          return { height: '50px' };
        },
        [i],
      ),
      y = t.useMemo(() => {
        if (d) {
          if ('string' == typeof d) return { width: d.includes('%') ? d : d + 'px' };
          if ('number' == typeof d) return { width: d + 'px' };
        }
        return { width: '220px' };
      }, [d]),
      v = (e) => {
        if (e.children)
          return e.children.map((t) =>
            r.default.createElement(
              'div',
              { key: t.key },
              r.default.createElement(
                'div',
                {
                  className: l == t.key ? 'activeMenuOptions' : 'childMenuOptions',
                  style: Object.assign({}, b(t.key)),
                },
                r.default.createElement(
                  'div',
                  {
                    className:
                      t.children && -1 !== t.children.findIndex((e) => e.key == l)
                        ? 'activeFatherTitle'
                        : 'fatherTitle',
                    onClick: (a) =>
                      ((e, t, a) => {
                        if (
                          (((2 == e.level && !e.children) || 3 == e.level) && (n(a), o(e.key)),
                          2 == e.level)
                        ) {
                          const t = Object.assign({}, i);
                          for (var r in t)
                            if (
                              t[r].children &&
                              -1 !== t[r].children.findIndex((t) => t.key == e.key)
                            ) {
                              const a = t[r].children.findIndex((t) => t.key == e.key);
                              t[r].children[a].height =
                                '50px' == t[r].children[a].height
                                  ? 50 * (t[r].children[a].childNum + 1) + 'px'
                                  : '50px';
                              let n = 50 * (t[r].childNum - t[r].children.length) + 50;
                              (n += t[r].children.reduce(
                                (e, t) =>
                                  Number(e.height.split('px')[0]) + Number(t.height.split('px')[0]),
                              )),
                                (t[r].height = n);
                            }
                          c(t);
                        }
                        if (3 == e.level)
                          for (var r in i)
                            i[r].children &&
                              -1 !== i[r].children.findIndex((e) => e.key == a) &&
                              n(i[r].key);
                      })(t, 0, e.key),
                  },
                  r.default.createElement('span', null, t.label),
                  t.children &&
                    ('50px' == b(t.key).height
                      ? r.default.createElement(ve, null)
                      : r.default.createElement(ke, null)),
                ),
                r.default.createElement(
                  'div',
                  { className: 'childMenuOptions', key: t.key },
                  t.children && v(t),
                ),
              ),
            ),
          );
      };
    return r.default.createElement(
      'div',
      { className: u ? 'darkMenu' : 'menu', style: y },
      s.map((e) =>
        r.default.createElement(
          'div',
          { key: e.key },
          r.default.createElement(
            'div',
            { className: 'menuOptions', style: p(e.key) },
            r.default.createElement(
              'div',
              {
                className: a == e.key ? 'activeFatherTitle' : 'fatherTitle',
                onClick: (t) =>
                  ((e, t) => {
                    t.stopPropagation();
                    const a = e.key,
                      n = Object.assign({}, i);
                    if (
                      ((n[a].height =
                        '50px' == n[a].height ? 50 * (n[a].childNum + 1) + 'px' : '50px'),
                      f)
                    ) {
                      if ('50px' !== n[a].height)
                        for (var r in n)
                          r !== a &&
                            ((n[r].height = '50px'),
                            n[r].children && n[r].children.map((e) => (e.height = '50px')));
                    } else
                      0 !== n[a].children.length &&
                        n[a].children.forEach((e) => {
                          e.height = '50px';
                        });
                    c(n);
                  })(e, t),
              },
              r.default.createElement(
                'div',
                { className: 'left' },
                r.default.createElement('i', null, e.icon),
                r.default.createElement('span', null, e.label),
              ),
              '50px' == p(e.key).height
                ? r.default.createElement(ve, null)
                : r.default.createElement(ke, null),
            ),
            r.default.createElement(r.default.Fragment, null, e.children && v(e)),
          ),
        ),
      ),
    );
  });
  var bt = t.memo((e) => {
    const {
        children: a,
        affixType: n,
        offsetTop: l,
        offsetLeft: o,
        offsetBottom: i,
        offsetRight: c,
        style: s,
      } = e,
      [d, u] = t.useState({});
    let f;
    t.useEffect(() => {
      const e = document.querySelector('.affix');
      return (
        (f = new IntersectionObserver((e) => h(e))),
        f.observe(e),
        'scroll' == n
          ? (window.addEventListener('scroll', m),
            u(
              (e) => (
                (e.position = 'relative'),
                l && !e.bottom && (e.top = 0),
                i && !e.top && (e.bottom = 0),
                o && !e.right && (e.left = 0),
                c && !e.left && (e.right = 0),
                JSON.parse(JSON.stringify(e))
              ),
            ))
          : u(
              (e) => (
                (e.position = 'fixed'),
                l && !e.bottom && (e.top = l),
                i && !e.top && (e.bottom = i),
                o && !e.right && (e.left = o),
                c && !e.left && (e.right = c),
                JSON.parse(JSON.stringify(e))
              ),
            ),
        () => {
          f.unobserve(e);
        }
      );
    }, []);
    const m = () => {
        document.querySelector('.affix'),
          window.scrollY < 200 &&
            u((e) => {
              for (const t in e)
                'position' == t
                  ? (e[t] = 'relative')
                  : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
              return JSON.parse(JSON.stringify(e));
            });
      },
      h = (e) => {
        e.forEach((e) => {
          e.isIntersecting ||
            ('relative' == d.position &&
              u(
                (e) => (
                  (e.position = 'fixed'),
                  l && l !== e.top && (e.top = `${l}px`),
                  i && i !== e.bottom && (e.bottom = `${i}px`),
                  o && o !== e.left && (e.left = `${o}px`),
                  c && c !== e.right && (e.right = `${c}px`),
                  JSON.parse(JSON.stringify(e))
                ),
              ));
        });
      };
    return r.default.createElement(
      'div',
      { className: 'affix', style: Object.assign(Object.assign({}, d), s) },
      a,
    );
  });
  var yt = t.memo((e) => {
    const { showClear: a, align: n, handleChange: l } = e,
      [o, i] = t.useState({
        startYear: new Date().getFullYear(),
        startMonth: new Date().getMonth() + 1,
        startDay: new Date().getDate(),
      }),
      [c, s] = t.useState({
        endYear: new Date().getFullYear(),
        endMonth: new Date().getMonth() + 2,
        endDay: new Date().getDate(),
      }),
      [d, u] = t.useState(''),
      [f, m] = t.useState(''),
      [h, g] = t.useState(0),
      [p, b] = t.useState(0),
      [y, v] = t.useState([]),
      [E, x] = t.useState([]),
      [k, w] = t.useState(!1),
      [N, C] = t.useState(!1),
      [O, M] = t.useState({ start: !1, end: !1 });
    let S = document.querySelector('.activeBorder');
    t.useEffect(() => {
      const { startYear: e, startMonth: t } = o,
        { endYear: a, endMonth: n } = c,
        r = new Date(`${e}/${t}/1`).getDay(),
        l = new Date(`${a}/${n}/1`).getDay(),
        i = new Date(e, t, 0).getDate(),
        s = new Date(a, n, 0).getDate(),
        d = new Array(r).fill(''),
        u = new Array(l).fill('');
      for (let e = 1; e < i + 1; e++) d.push(e);
      for (let e = 1; e < s + 1; e++) u.push(e);
      v(d), g(r), x(u), b(l);
    }, [o.startYear, o.startMonth, c.endYear, c.endMonth]),
      t.useEffect(() => {
        window.addEventListener('click', () => {
          w(!1),
            setTimeout(() => {
              C(!1);
            }, 300);
        });
      }, []),
      t.useEffect(() => {
        O.start &&
          O.end &&
          (w(!1),
          setTimeout(() => {
            C(!1);
          }, 300),
          M((e) => ((e.start = !1), (e.end = !1), Object.assign({}, e))),
          l && l(d, f));
      }, [O]);
    const j = (e) => {
        if ('start' == e) {
          const e = Object.assign({}, o);
          (e.startYear -= 1), i(e);
        } else if ('end' == e && c.endYear > o.startYear) {
          const e = Object.assign({}, c);
          (e.endYear -= 1), s(e);
        }
      },
      D = (e) => {
        if ('start' == e) {
          if (o.startYear < c.endYear) {
            const e = Object.assign({}, o);
            (e.startYear += 1), i(e);
          }
        } else if ('end' == e) {
          const e = Object.assign({}, c);
          (e.endYear += 1), s(e);
        }
      },
      A = (e) => {
        if ('start' == e) {
          const e = Object.assign({}, o);
          1 == e.startMonth ? ((e.startMonth = 12), (e.startYear -= 1)) : (e.startMonth -= 1), i(e);
        } else if ('end' == e) {
          if (c.endYear == o.startYear && c.endMonth == o.startMonth) return;
          {
            const e = Object.assign({}, c);
            1 == e.endMonth ? ((e.endMonth = 12), (e.endYear -= 1)) : (e.endMonth -= 1),
              e.endDay < o.startDay && (e.endDay = o.startDay),
              s(e);
          }
        }
      },
      F = (e) => {
        if ('start' == e) {
          if (c.endYear == o.startYear && c.endMonth == o.startMonth) return;
          {
            const e = Object.assign({}, o);
            12 == e.startMonth ? ((e.startMonth = 1), (e.startYear += 1)) : (e.startMonth += 1),
              i(e);
          }
        } else if ('end' == e) {
          const e = Object.assign({}, c);
          12 == e.endMonth ? ((e.endMonth = 1), (e.endYear += 1)) : (e.endMonth += 1), s(e);
        }
      },
      Y = t.useCallback(
        () =>
          n
            ? {
                right: { left: '360px', bottom: '20px' },
                left: { right: '600px', bottom: '20px' },
                top: { bottom: '40px' },
                bottom: { top: '40px' },
              }[n]
            : { bottom: { top: '40px' } },
        [n],
      ),
      $ = t.useCallback(
        (e) =>
          '' == e
            ? 'white'
            : o.startYear == c.endYear && o.startMonth == c.endMonth && e < o.startDay
            ? 'disabled-day'
            : 'day-box',
        [o, c],
      );
    return r.default.createElement(
      'div',
      { className: 'range', onClick: (e) => e.stopPropagation() },
      r.default.createElement(
        'div',
        { className: 'rangePicker', onClick: (e) => e.stopPropagation() },
        r.default.createElement(mt, {
          placeholder: '请输入开始日期',
          defaultValue: d || `${o.startYear}-${o.startMonth}-${o.startDay}`,
          handleIptChange: (e) => u(e),
          handleIptFocus: () => {
            w(!0), C(!0), (S.style.left = '0');
          },
          handleKeyDown: (e) =>
            ((e) => {
              if (13 == e.keyCode)
                if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(d)) {
                  const e = d.split('-');
                  Number(e[0]) <= c.endYear &&
                  Number(e[1]) <= c.endMonth &&
                  Number(e[2]) <= c.endDay
                    ? (i(
                        (t) => (
                          (t.startYear = Number(e[0])),
                          (t.startMonth = Number(e[1])),
                          (t.startDay = Number(e[2])),
                          Object.assign({}, t)
                        ),
                      ),
                      M((e) => ((e.start = !0), Object.assign({}, e))))
                    : u('');
                } else u('');
            })(e),
          handleIptBlur: () => {
            /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(d) || u('');
          },
          clearCallback: () => {
            u(''),
              i((e) => {
                const t = new Date();
                return (
                  (e.startDay = t.getDate()),
                  (e.startMonth = t.getMonth() + 1),
                  (e.startYear = t.getFullYear()),
                  Object.assign({}, e)
                );
              });
          },
          showClear: a,
        }),
        r.default.createElement(it, { style: { color: '#cccccc', fontSize: '20px' } }),
        r.default.createElement(mt, {
          placeholder: '请输入结束日期',
          defaultValue: f || `${c.endYear}-${c.endMonth}-${c.endDay}`,
          handleIptChange: (e) => m(e),
          handleIptFocus: () => {
            w(!0), C(!0), (S.style.left = '190px');
          },
          handleKeyDown: (e) =>
            ((e) => {
              if (13 == e.keyCode)
                if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(f)) {
                  const e = f.split('-');
                  Number(e[0]) >= o.startYear &&
                  Number(e[1]) >= o.startMonth &&
                  Number(e[2]) >= o.startDay
                    ? (s(
                        (t) => (
                          (t.endYear = Number(e[0])),
                          (t.endMonth = Number(e[1])),
                          (t.endDay = Number(e[2])),
                          Object.assign({}, t)
                        ),
                      ),
                      M((e) => ((e.end = !0), Object.assign({}, e))))
                    : m('');
                } else m('');
            })(e),
          handleIptBlur: () => {
            /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(f) || m('');
          },
          clearCallback: () => {
            m(''),
              s((e) => {
                const t = new Date();
                return (
                  (e.endDay = t.getDate()),
                  (e.endMonth = t.getMonth() + 1),
                  (e.endYear = t.getFullYear()),
                  Object.assign({}, e)
                );
              });
          },
          showClear: a,
        }),
        r.default.createElement('div', { className: 'activeBorder' }),
      ),
      N &&
        r.default.createElement(
          'div',
          {
            className: 'date-box',
            onClick: (e) => e.stopPropagation(),
            style: Object.assign(Object.assign({}, k ? { opacity: 1 } : {}), Y()),
          },
          r.default.createElement(
            'div',
            { className: 'left' },
            r.default.createElement(
              'div',
              { className: 'top-bar' },
              r.default.createElement(
                'div',
                { className: 'icon' },
                r.default.createElement(Ae, {
                  style: { cursor: 'pointer' },
                  onClick: () => j('start'),
                }),
                r.default.createElement(_e, {
                  style: { marginLeft: '10px', cursor: 'pointer' },
                  onClick: () => A('start'),
                }),
              ),
              r.default.createElement(
                'div',
                { className: 'info' },
                o.startYear,
                '年  ',
                o.startMonth,
                '月',
              ),
              r.default.createElement(
                'div',
                null,
                r.default.createElement(tt, {
                  style: { cursor: 'pointer' },
                  onClick: () => F('start'),
                }),
                r.default.createElement($e, {
                  style: { marginLeft: '10px', cursor: 'pointer' },
                  onClick: () => D('start'),
                }),
              ),
            ),
            r.default.createElement(
              'div',
              { className: 'week' },
              r.default.createElement('div', null, '一'),
              r.default.createElement('div', null, '二'),
              r.default.createElement('div', null, '三'),
              r.default.createElement('div', null, '四'),
              r.default.createElement('div', null, '五'),
              r.default.createElement('div', null, '六'),
              r.default.createElement('div', null, '日'),
            ),
            r.default.createElement(
              'div',
              { className: 'day-list' },
              y.map((e, t) =>
                r.default.createElement(
                  'div',
                  {
                    key: t,
                    className: '' == e ? 'white' : 'box-list',
                    style:
                      e == o.startDay
                        ? {
                            color: '#fff',
                            background: '#1890FF',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                          }
                        : {},
                    onClick: () => {
                      var t;
                      '' != (t = Number(e)) &&
                        (i((e) => ((e.startDay = t), Object.assign({}, e))),
                        M((e) => ((e.start = !0), Object.assign({}, e))),
                        u(`${o.startYear}-${o.startMonth}-${t}`),
                        o.startYear == c.endYear &&
                          o.startMonth == c.endMonth &&
                          t > c.endDay &&
                          s((e) => ((e.endDay = t), Object.assign({}, e))));
                    },
                  },
                  e,
                ),
              ),
            ),
          ),
          r.default.createElement(
            'div',
            { className: 'right' },
            r.default.createElement(
              'div',
              { className: 'top-bar' },
              r.default.createElement(
                'div',
                null,
                r.default.createElement(Ae, {
                  style: { cursor: 'pointer' },
                  onClick: () => j('end'),
                }),
                r.default.createElement(_e, {
                  style: { marginLeft: '10px', cursor: 'pointer' },
                  onClick: () => A('end'),
                }),
              ),
              r.default.createElement(
                'div',
                { className: 'info' },
                c.endYear,
                '年  ',
                c.endMonth,
                '月',
              ),
              r.default.createElement(
                'div',
                { className: 'icon' },
                r.default.createElement(tt, {
                  style: { cursor: 'pointer' },
                  onClick: () => F('end'),
                }),
                r.default.createElement($e, {
                  style: { marginLeft: '10px', cursor: 'pointer' },
                  onClick: () => D('end'),
                }),
              ),
            ),
            r.default.createElement(
              'div',
              { className: 'week' },
              r.default.createElement('div', null, '一'),
              r.default.createElement('div', null, '二'),
              r.default.createElement('div', null, '三'),
              r.default.createElement('div', null, '四'),
              r.default.createElement('div', null, '五'),
              r.default.createElement('div', null, '六'),
              r.default.createElement('div', null, '日'),
            ),
            r.default.createElement(
              'div',
              { className: 'day-list' },
              E.map((e, t) =>
                r.default.createElement(
                  'div',
                  {
                    key: t,
                    className: $(e),
                    style:
                      e == c.endDay
                        ? {
                            color: '#fff',
                            background: '#1890FF',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                          }
                        : {},
                    onClick: () => {
                      return (
                        (t = Number(e)),
                        void (
                          (o.startYear == c.endYear &&
                            o.startMonth == c.endMonth &&
                            t < o.startDay) ||
                          (M((e) => ((e.end = !0), Object.assign({}, e))),
                          s((e) => ((e.endDay = t), Object.assign({}, e))),
                          m(`${c.endYear}-${c.endMonth}-${t}`))
                        )
                      );
                      var t;
                    },
                  },
                  e,
                ),
              ),
            ),
          ),
        ),
    );
  });
  const vt = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];
  var Et = t.memo((e) => {
    const { type: a, showRange: n, showClear: l, align: o, handleChange: i } = e,
      [c, s] = t.useState(!1),
      [d, u] = t.useState(!1),
      [f, m] = t.useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      }),
      [h, g] = t.useState(0),
      [p, b] = t.useState([]),
      [y, v] = t.useState(0),
      [E, x] = t.useState(null),
      [k, w] = t.useState([2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]);
    t.useEffect(() => {
      window.addEventListener('click', () => {
        s(!1),
          setTimeout(() => {
            u(!1);
          }, 300);
      });
    }, []),
      t.useEffect(() => {
        const { year: e, month: t } = f,
          a = new Date(`${e}/${t}/1`).getDay(),
          n = new Date(e, t, 0).getDate(),
          r = new Array(a).fill('');
        for (let e = 1; e < n + 1; e++) r.push(e);
        g(a), b(r);
      }, [f.year, f.month]);
    const N = (e) => {
        e.stopPropagation(), s(!0), u(!0);
      },
      C = {
        result: { letterSpacing: 'normal', color: '#1890FF', width: '120px' },
        icon: { opacity: 1, marginLeft: '5px' },
        checkBox: { opacity: 1 },
        dayActive: {
          backgroundColor: '#1890FF',
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: '5px',
        },
      },
      O = t.useCallback(
        () =>
          o
            ? {
                right: { left: '170px', bottom: '20px' },
                left: { right: '800px', bottom: '40px' },
                top: { bottom: '40px' },
                bottom: { top: '40px' },
              }[o]
            : { bottom: { top: '40px' } },
        [o],
      );
    return n
      ? r.default.createElement(yt, {
          showClear: l,
          align: o || 'bottom',
          handleChange: (e, t) => {
            i && i(e, t);
          },
        })
      : r.default.createElement(
          'div',
          { className: 'time-picker' },
          ('primary' == a || !a) &&
            r.default.createElement(
              'div',
              { className: 'result', style: c ? C.result : {}, onClick: (e) => N(e) },
              r.default.createElement('span', null, f.year, '-', f.month, '-', f.day),
              r.default.createElement(
                'div',
                { className: 'icon', style: c ? C.icon : {} },
                r.default.createElement(Ve, null),
              ),
            ),
          'input' == a &&
            r.default.createElement(
              'div',
              null,
              r.default.createElement('input', {
                className: 'input',
                value: null !== E ? E : `${f.year}-${f.month}-${f.day}`,
                onClick: (e) => N(e),
                onChange: (e) =>
                  ((e) => {
                    x(e.target.value);
                  })(e),
                onKeyDown: (e) =>
                  ((e) => {
                    if (13 == e.keyCode) {
                      if (
                        null !== E &&
                        /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(E)
                      ) {
                        const e = E.split('-');
                        m(
                          (t) => (
                            (t.year = Number(e[0])),
                            (t.month = Number(e[1])),
                            (t.day = Number(e[2])),
                            Object.assign({}, t)
                          ),
                        ),
                          i && i(`${Number(e[0])}-${Number(e[1])}-${Number(e[2])}`);
                      }
                      x(null),
                        s(!1),
                        setTimeout(() => {
                          u(!1);
                        }, 300);
                    }
                  })(e),
                onBlur: () => {
                  if (
                    null !== E &&
                    /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(E)
                  ) {
                    const e = E.split('-');
                    m(
                      (t) => (
                        (t.year = Number(e[0])),
                        (t.month = Number(e[1])),
                        (t.day = Number(e[2])),
                        Object.assign({}, t)
                      ),
                    );
                  }
                  x(null);
                },
              }),
              l &&
                r.default.createElement(Se, {
                  style: {
                    position: 'relative',
                    right: '15px',
                    fontSize: '12px',
                    cursor: 'pointer',
                  },
                  onClick: () => {
                    m(
                      (e) => (
                        (e.year = new Date().getFullYear()),
                        (e.month = new Date().getMonth() + 1),
                        (e.day = new Date().getDate()),
                        Object.assign({}, e)
                      ),
                    ),
                      x(null);
                  },
                }),
            ),
          d &&
            r.default.createElement(
              'div',
              {
                className: 'check-box',
                style: Object.assign(Object.assign({}, c ? C.checkBox : {}), O()),
                onClick: (e) => e.stopPropagation(),
              },
              r.default.createElement(
                'div',
                { className: 'top-bar' },
                r.default.createElement('b', { className: 'year', onClick: () => v(2) }, f.year),
                r.default.createElement(
                  'b',
                  { className: 'month', onClick: () => v(1), style: { marginRight: '20px' } },
                  f.month,
                ),
                r.default.createElement(
                  'div',
                  {
                    className: 'close-icon',
                    onClick: () => {
                      s(!1),
                        setTimeout(() => {
                          u(!1);
                        }, 300);
                    },
                  },
                  r.default.createElement(Se, null),
                ),
              ),
              r.default.createElement(
                'div',
                { className: 'date-content' },
                0 == y &&
                  r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      'div',
                      { className: 'week' },
                      r.default.createElement('div', null, '日'),
                      r.default.createElement('div', null, '一'),
                      r.default.createElement('div', null, '二'),
                      r.default.createElement('div', null, '三'),
                      r.default.createElement('div', null, '四'),
                      r.default.createElement('div', null, '五'),
                      r.default.createElement('div', null, '六'),
                    ),
                    r.default.createElement(
                      'div',
                      { className: 'day-list' },
                      p.map((e, t) =>
                        r.default.createElement(
                          'div',
                          {
                            key: t,
                            className: e ? 'day' : 'white',
                            style: f.day == e ? C.dayActive : {},
                            onClick: () =>
                              ((e) => {
                                e &&
                                  (m((t) => ((t.day = e), Object.assign({}, t))),
                                  i && i(`${f.year}-${f.month}-${f.day}`),
                                  s(!1),
                                  setTimeout(() => {
                                    u(!1);
                                  }, 300));
                              })(e),
                          },
                          e,
                        ),
                      ),
                    ),
                  ),
                1 == y &&
                  r.default.createElement(
                    'div',
                    { className: 'month-toggle-box' },
                    vt.map((e, t) =>
                      r.default.createElement(
                        'div',
                        {
                          key: e,
                          className: 'month',
                          style: t + 1 == f.month ? C.dayActive : {},
                          onClick: () => {
                            return (
                              (e = t + 1),
                              m((t) => ((t.month = e), Object.assign({}, t))),
                              void v(0)
                            );
                            var e;
                          },
                        },
                        e,
                      ),
                    ),
                  ),
                2 == y &&
                  r.default.createElement(
                    'div',
                    { className: 'year-toggle-box' },
                    r.default.createElement(
                      'div',
                      { className: 'toggle-bar' },
                      r.default.createElement(Ae, {
                        style: { cursor: 'pointer' },
                        onClick: () => {
                          w((e) => [...e.map((e) => e - 9)]);
                        },
                      }),
                      r.default.createElement('span', null, k[0], '-', k[8]),
                      r.default.createElement($e, {
                        style: { cursor: 'pointer' },
                        onClick: () => {
                          w((e) => [...e.map((e) => e + 9)]);
                        },
                      }),
                    ),
                    r.default.createElement(
                      'div',
                      { className: 'list' },
                      k.map((e) =>
                        r.default.createElement(
                          'div',
                          {
                            key: e,
                            className: 'year',
                            style: e == f.year ? C.dayActive : {},
                            onClick: () => {
                              return (
                                (t = e), m((e) => ((e.year = t), Object.assign({}, e))), void v(0)
                              );
                              var t;
                            },
                          },
                          e,
                        ),
                      ),
                    ),
                  ),
              ),
              r.default.createElement(
                'div',
                { className: 'time-footer' },
                0 == y &&
                  r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      'div',
                      {
                        className: 'today',
                        onClick: () => {
                          const e = new Date();
                          m(
                            (t) => (
                              (t.year = e.getFullYear()),
                              (t.month = e.getMonth() + 1),
                              (t.day = e.getDate()),
                              Object.assign({}, t)
                            ),
                          );
                        },
                      },
                      r.default.createElement('span', null, '今天'),
                      r.default.createElement(Ce, null),
                    ),
                    r.default.createElement(
                      'div',
                      { className: 'toggle-month' },
                      r.default.createElement(_e, {
                        style: { marginRight: '5px' },
                        onClick: () => {
                          const e = Object.assign({}, f);
                          1 == e.month ? ((e.year -= 1), (e.month = 12)) : (e.month -= 1), m(e);
                        },
                      }),
                      r.default.createElement(tt, {
                        onClick: () => {
                          const e = Object.assign({}, f);
                          12 == e.month ? ((e.year += 1), (e.month = 1)) : (e.month += 1), m(e);
                        },
                      }),
                    ),
                  ),
                (1 == y || 2 == y) &&
                  r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement('div', null),
                    r.default.createElement(
                      'div',
                      { className: 'go-back-icon', onClick: () => v(0) },
                      r.default.createElement(rt, null),
                    ),
                  ),
              ),
            ),
        );
  });
  (e.Affix = bt),
    (e.Button = o),
    (e.Content = u),
    (e.DatePicker = Et),
    (e.Divider = i),
    (e.Footer = f),
    (e.Header = s),
    (e.Input = mt),
    (e.Layout = c),
    (e.Menu = pt),
    (e.Pagination = ut),
    (e.Radio = ht),
    (e.RadioGroup = gt),
    (e.Select = ft),
    (e.Slider = d),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
