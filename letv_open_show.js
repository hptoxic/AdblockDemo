!function (t) {
	String.prototype.trim === t && (String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g, "")
	}),
	Array.prototype.reduce === t && (Array.prototype.reduce = function (e) {
		if (void 0 === this || null === this)
			throw new TypeError;
		var i,
		n = Object(this),
		o = n.length >>> 0,
		a = 0;
		if ("function" != typeof e)
			throw new TypeError;
		if (0 == o && 1 == arguments.length)
			throw new TypeError;
		if (arguments.length >= 2)
			i = arguments[1];
		else
			for (; ; ) {
				if (a in n) {
					i = n[a++];
					break
				}
				if (++a >= o)
					throw new TypeError
			}
		for (; o > a; )
			a in n && (i = e.call(t, i, n[a], a, n)), a++;
		return i
	})
}
();
var Zepto = function () {
	function t(t) {
		return null == t ? String(t) : X[J.call(t)] || "object"
	}
	function e(e) {
		return "function" == t(e)
	}
	function i(t) {
		return null != t && t == t.window
	}
	function n(t) {
		return null != t && t.nodeType == t.DOCUMENT_NODE
	}
	function o(e) {
		return "object" == t(e)
	}
	function a(t) {
		return o(t) && !i(t) && t.__proto__ == Object.prototype
	}
	function r(t) {
		return t instanceof Array
	}
	function s(t) {
		return "number" == typeof t.length
	}
	function c(t) {
		return A.call(t, function (t) {
			return null != t
		})
	}
	function l(t) {
		return t.length > 0 ? S.fn.concat.apply([], t) : t
	}
	function p(t) {
		return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}
	function h(t) {
		return t in j ? j[t] : j[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
	}
	function u(t, e) {
		return "number" != typeof e || O[p(t)] ? e : e + "px"
	}
	function d(t) {
		var e,
		i;
		return E[t] || (e = $.createElement(t), $.body.appendChild(e), i = D(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), E[t] = i),
		E[t]
	}
	function f(t) {
		return "children" in t ? I.call(t.children) : S.map(t.childNodes, function (t) {
			return 1 == t.nodeType ? t : void 0
		})
	}
	function m(t, e, i) {
		for (k in e)
			i && (a(e[k]) || r(e[k])) ? (a(e[k]) && !a(t[k]) && (t[k] = {}), r(e[k]) && !r(t[k]) && (t[k] = []), m(t[k], e[k], i)) : e[k] !== x && (t[k] = e[k])
	}
	function g(t, e) {
		return e === x ? S(t) : S(t).filter(e)
	}
	function v(t, i, n, o) {
		return e(i) ? i.call(t, n, o) : i
	}
	function _(t, e, i) {
		null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
	}
	function w(t, e) {
		var i = t.className,
		n = i && i.baseVal !== x;
		return e === x ? n ? i.baseVal : i : void(n ? i.baseVal = e : t.className = e)
	}
	function b(t) {
		var e;
		try {
			return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? S.parseJSON(t) : t : e) : t
		} catch (i) {
			return t
		}
	}
	function y(t, e) {
		e(t);
		for (var i in t.childNodes)
			y(t.childNodes[i], e)
	}
	var x,
	k,
	S,
	T,
	C,
	P,
	L = [],
	I = L.slice,
	A = L.filter,
	$ = window.document,
	E = {},
	j = {},
	D = $.defaultView.getComputedStyle,
	O = {
		"column-count": 1,
		columns: 1,
		"font-weight": 1,
		"line-height": 1,
		opacity: 1,
		"z-index": 1,
		zoom: 1
	},
	U = /^\s*<(\w+|!)[^>]*>/,
	M = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	B = /^(?:body|html)$/i,
	z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
	N = ["after", "prepend", "before", "append"],
	R = $.createElement("table"),
	q = $.createElement("tr"),
	W = {
		tr: $.createElement("tbody"),
		tbody: R,
		thead: R,
		tfoot: R,
		td: q,
		th: q,
		"*": $.createElement("div")
	},
	F = /complete|loaded|interactive/,
	K = /^\.([\w-]+)$/,
	V = /^#([\w-]*)$/,
	H = /^[\w-]+$/,
	X = {},
	J = X.toString,
	Y = {},
	G = $.createElement("div");
	return Y.matches = function (t, e) {
		if (!t || 1 !== t.nodeType)
			return !1;
		var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
		if (i)
			return i.call(t, e);
		var n,
		o = t.parentNode,
		a = !o;
		return a && (o = G).appendChild(t),
		n = ~Y.qsa(o, e).indexOf(t),
		a && G.removeChild(t),
		n
	},
	C = function (t) {
		return t.replace(/-+(.)?/g, function (t, e) {
			return e ? e.toUpperCase() : ""
		})
	},
	P = function (t) {
		return A.call(t, function (e, i) {
			return t.indexOf(e) == i
		})
	},
	Y.fragment = function (t, e, i) {
		t.replace && (t = t.replace(M, "<$1></$2>")),
		e === x && (e = U.test(t) && RegExp.$1),
		e in W || (e = "*");
		var n,
		o,
		r = W[e];
		return r.innerHTML = "" + t,
		o = S.each(I.call(r.childNodes), function () {
				r.removeChild(this)
			}),
		a(i) && (n = S(o), S.each(i, function (t, e) {
				z.indexOf(t) > -1 ? n[t](e) : n.attr(t, e)
			})),
		o
	},
	Y.Z = function (t, e) {
		return t = t || [],
		t.__proto__ = S.fn,
		t.selector = e || "",
		t
	},
	Y.isZ = function (t) {
		return t instanceof Y.Z
	},
	Y.init = function (t, i) {
		if (t) {
			if (e(t))
				return S($).ready(t);
			if (Y.isZ(t))
				return t;
			var n;
			if (r(t))
				n = c(t);
			else if (o(t))
				n = [a(t) ? S.extend({}, t) : t], t = null;
			else if (U.test(t))
				n = Y.fragment(t.trim(), RegExp.$1, i), t = null;
			else {
				if (i !== x)
					return S(i).find(t);
				n = Y.qsa($, t)
			}
			return Y.Z(n, t)
		}
		return Y.Z()
	},
	S = function (t, e) {
		return Y.init(t, e)
	},
	S.extend = function (t) {
		var e,
		i = I.call(arguments, 1);
		return "boolean" == typeof t && (e = t, t = i.shift()),
		i.forEach(function (i) {
			m(t, i, e)
		}),
		t
	},
	Y.qsa = function (t, e) {
		var i;
		return n(t) && V.test(e) ? (i = t.getElementById(RegExp.$1)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : I.call(K.test(e) ? t.getElementsByClassName(RegExp.$1) : H.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e))
	},
	S.contains = function (t, e) {
		return t !== e && t.contains(e)
	},
	S.type = t,
	S.isFunction = e,
	S.isWindow = i,
	S.isArray = r,
	S.isPlainObject = a,
	S.isEmptyObject = function (t) {
		var e;
		for (e in t)
			return !1;
		return !0
	},
	S.inArray = function (t, e, i) {
		return L.indexOf.call(e, t, i)
	},
	S.camelCase = C,
	S.trim = function (t) {
		return t.trim()
	},
	S.uuid = 0,
	S.support = {},
	S.expr = {},
	S.map = function (t, e) {
		var i,
		n,
		o,
		a = [];
		if (s(t))
			for (n = 0; n < t.length; n++)
				i = e(t[n], n), null != i && a.push(i);
		else
			for (o in t)
				i = e(t[o], o), null != i && a.push(i);
		return l(a)
	},
	S.each = function (t, e) {
		var i,
		n;
		if (s(t)) {
			for (i = 0; i < t.length; i++)
				if (e.call(t[i], i, t[i]) === !1)
					return t
		} else
			for (n in t)
				if (e.call(t[n], n, t[n]) === !1)
					return t;
		return t
	},
	S.grep = function (t, e) {
		return A.call(t, e)
	},
	window.JSON && (S.parseJSON = JSON.parse),
	S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
		X["[object " + e + "]"] = e.toLowerCase()
	}),
	S.fn = {
		forEach: L.forEach,
		reduce: L.reduce,
		push: L.push,
		sort: L.sort,
		indexOf: L.indexOf,
		concat: L.concat,
		map: function (t) {
			return S(S.map(this, function (e, i) {
					return t.call(e, i, e)
				}))
		},
		slice: function () {
			return S(I.apply(this, arguments))
		},
		ready: function (t) {
			return F.test($.readyState) ? t(S) : $.addEventListener("DOMContentLoaded", function () {
				t(S)
			}, !1),
			this
		},
		get: function (t) {
			return t === x ? I.call(this) : this[t >= 0 ? t : t + this.length]
		},
		toArray: function () {
			return this.get()
		},
		size: function () {
			return this.length
		},
		remove: function () {
			return this.each(function () {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function (t) {
			return L.every.call(this, function (e, i) {
				return t.call(e, i, e) !== !1
			}),
			this
		},
		filter: function (t) {
			return e(t) ? this.not(this.not(t)) : S(A.call(this, function (e) {
					return Y.matches(e, t)
				}))
		},
		add: function (t, e) {
			return S(P(this.concat(S(t, e))))
		},
		is: function (t) {
			return this.length > 0 && Y.matches(this[0], t)
		},
		not: function (t) {
			var i = [];
			if (e(t) && t.call !== x)
				this.each(function (e) {
					t.call(this, e) || i.push(this)
				});
			else {
				var n = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? I.call(t) : S(t);
				this.forEach(function (t) {
					n.indexOf(t) < 0 && i.push(t)
				})
			}
			return S(i)
		},
		has: function (t) {
			return this.filter(function () {
				return o(t) ? S.contains(this, t) : S(this).find(t).size()
			})
		},
		eq: function (t) {
			return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
		},
		first: function () {
			var t = this[0];
			return t && !o(t) ? t : S(t)
		},
		last: function () {
			var t = this[this.length - 1];
			return t && !o(t) ? t : S(t)
		},
		find: function (t) {
			var e,
			i = this;
			return e = "object" == typeof t ? S(t).filter(function () {
					var t = this;
					return L.some.call(i, function (e) {
						return S.contains(e, t)
					})
				}) : 1 == this.length ? S(Y.qsa(this[0], t)) : this.map(function () {
					return Y.qsa(this, t)
				})
		},
		closest: function (t, e) {
			var i = this[0],
			o = !1;
			for ("object" == typeof t && (o = S(t)); i && !(o ? o.indexOf(i) >= 0 : Y.matches(i, t)); )
				i = i !== e && !n(i) && i.parentNode;
			return S(i)
		},
		parents: function (t) {
			for (var e = [], i = this; i.length > 0; )
				i = S.map(i, function (t) {
						return (t = t.parentNode) && !n(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
					});
			return g(e, t)
		},
		parent: function (t) {
			return g(P(this.pluck("parentNode")), t)
		},
		children: function (t) {
			return g(this.map(function () {
					return f(this)
				}), t)
		},
		contents: function () {
			return this.map(function () {
				return I.call(this.childNodes)
			})
		},
		siblings: function (t) {
			return g(this.map(function (t, e) {
					return A.call(f(e.parentNode), function (t) {
						return t !== e
					})
				}), t)
		},
		empty: function () {
			return this.each(function () {
				this.innerHTML = ""
			})
		},
		pluck: function (t) {
			return S.map(this, function (e) {
				return e[t]
			})
		},
		show: function () {
			return this.each(function () {
				"none" == this.style.display && (this.style.display = null),
				"none" == D(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
			})
		},
		replaceWith: function (t) {
			return this.before(t).remove()
		},
		wrap: function (t) {
			var i = e(t);
			if (this[0] && !i)
				var n = S(t).get(0), o = n.parentNode || this.length > 1;
			return this.each(function (e) {
				S(this).wrapAll(i ? t.call(this, e) : o ? n.cloneNode(!0) : n)
			})
		},
		wrapAll: function (t) {
			if (this[0]) {
				S(this[0]).before(t = S(t));
				for (var e; (e = t.children()).length; )
					t = e.first();
				S(t).append(this)
			}
			return this
		},
		wrapInner: function (t) {
			var i = e(t);
			return this.each(function (e) {
				var n = S(this),
				o = n.contents(),
				a = i ? t.call(this, e) : t;
				o.length ? o.wrapAll(a) : n.append(a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				S(this).replaceWith(S(this).children())
			}),
			this
		},
		clone: function () {
			return this.map(function () {
				return this.cloneNode(!0)
			})
		},
		hide: function () {
			return this.css("display", "none")
		},
		toggle: function (t) {
			return this.each(function () {
				var e = S(this);
				(t === x ? "none" == e.css("display") : t) ? e.show() : e.hide()
			})
		},
		prev: function (t) {
			return S(this.pluck("previousElementSibling")).filter(t || "*")
		},
		next: function (t) {
			return S(this.pluck("nextElementSibling")).filter(t || "*")
		},
		html: function (t) {
			return t === x ? this.length > 0 ? this[0].innerHTML : null : this.each(function (e) {
				var i = this.innerHTML;
				S(this).empty().append(v(this, t, e, i))
			})
		},
		text: function (t) {
			return t === x ? this.length > 0 ? this[0].textContent : null : this.each(function () {
				this.textContent = t
			})
		},
		attr: function (t, e) {
			var i;
			return "string" == typeof t && e === x ? 0 == this.length || 1 !== this[0].nodeType ? x : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : this.each(function (i) {
				if (1 === this.nodeType)
					if (o(t))
						for (k in t)
							_(this, k, t[k]);
					else
						_(this, t, v(this, e, i, this.getAttribute(t)))
			})
		},
		removeAttr: function (t) {
			return this.each(function () {
				1 === this.nodeType && _(this, t)
			})
		},
		prop: function (t, e) {
			return e === x ? this[0] && this[0][t] : this.each(function (i) {
				this[t] = v(this, e, i, this[t])
			})
		},
		data: function (t, e) {
			var i = this.attr("data-" + p(t), e);
			return null !== i ? b(i) : x
		},
		val: function (t) {
			return t === x ? this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function (t) {
					return this.selected
				}).pluck("value") : this[0].value) : this.each(function (e) {
				this.value = v(this, t, e, this.value)
			})
		},
		offset: function (t) {
			if (t)
				return this.each(function (e) {
					var i = S(this),
					n = v(this, t, e, i.offset()),
					o = i.offsetParent().offset(),
					a = {
						top: n.top - o.top,
						left: n.left - o.left
					};
					"static" == i.css("position") && (a.position = "relative"),
					i.css(a)
				});
			if (0 == this.length)
				return null;
			var e = this[0].getBoundingClientRect();
			return {
				left: e.left + window.pageXOffset,
				top: e.top + window.pageYOffset,
				width: Math.round(e.width),
				height: Math.round(e.height)
			}
		},
		css: function (e, i) {
			if (arguments.length < 2 && "string" == typeof e)
				return this[0] && (this[0].style[C(e)] || D(this[0], "").getPropertyValue(e));
			var n = "";
			if ("string" == t(e))
				i || 0 === i ? n = p(e) + ":" + u(e, i) : this.each(function () {
						this.style.removeProperty(p(e))
					});
			else
				for (k in e)
					e[k] || 0 === e[k] ? n += p(k) + ":" + u(k, e[k]) + ";" : this.each(function () {
						this.style.removeProperty(p(k))
					});
			return this.each(function () {
				this.style.cssText += ";" + n
			})
		},
		index: function (t) {
			return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function (t) {
			return L.some.call(this, function (t) {
				return this.test(w(t))
			}, h(t))
		},
		addClass: function (t) {
			return this.each(function (e) {
				T = [];
				var i = w(this),
				n = v(this, t, e, i);
				n.split(/\s+/g).forEach(function (t) {
					S(this).hasClass(t) || T.push(t)
				}, this),
				T.length && w(this, i + (i ? " " : "") + T.join(" "))
			})
		},
		removeClass: function (t) {
			return this.each(function (e) {
				return t === x ? w(this, "") : (T = w(this), v(this, t, e, T).split(/\s+/g).forEach(function (t) {
						T = T.replace(h(t), " ")
					}), void w(this, T.trim()))
			})
		},
		toggleClass: function (t, e) {
			return this.each(function (i) {
				var n = S(this),
				o = v(this, t, i, w(this));
				o.split(/\s+/g).forEach(function (t) {
					(e === x ? !n.hasClass(t) : e) ? n.addClass(t) : n.removeClass(t)
				})
			})
		},
		scrollTop: function () {
			return this.length ? "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
		},
		position: function () {
			if (this.length) {
				var t = this[0],
				e = this.offsetParent(),
				i = this.offset(),
				n = B.test(e[0].nodeName) ? {
					top: 0,
					left: 0
				}
				 : e.offset();
				return i.top -= parseFloat(S(t).css("margin-top")) || 0,
				i.left -= parseFloat(S(t).css("margin-left")) || 0,
				n.top += parseFloat(S(e[0]).css("border-top-width")) || 0,
				n.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
					top: i.top - n.top,
					left: i.left - n.left
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent || $.body; t && !B.test(t.nodeName) && "static" == S(t).css("position"); )
					t = t.offsetParent;
				return t
			})
		}
	},
	S.fn.detach = S.fn.remove,
	["width", "height"].forEach(function (t) {
		S.fn[t] = function (e) {
			var o,
			a = this[0],
			r = t.replace(/./, function (t) {
					return t[0].toUpperCase()
				});
			return e === x ? i(a) ? a["inner" + r] : n(a) ? a.documentElement["offset" + r] : (o = this.offset()) && o[t] : this.each(function (i) {
				a = S(this),
				a.css(t, v(this, e, i, a[t]()))
			})
		}
	}),
	N.forEach(function (e, i) {
		var n = i % 2;
		S.fn[e] = function () {
			var e,
			o,
			a = S.map(arguments, function (i) {
					return e = t(i),
					"object" == e || "array" == e || null == i ? i : Y.fragment(i)
				}),
			r = this.length > 1;
			return a.length < 1 ? this : this.each(function (t, e) {
				o = n ? e : e.parentNode,
				e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null,
				a.forEach(function (t) {
					if (r)
						t = t.cloneNode(!0);
					else if (!o)
						return S(t).remove();
					y(o.insertBefore(t, e), function (t) {
						null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
					})
				})
			})
		},
		S.fn[n ? e + "To" : "insert" + (i ? "Before" : "After")] = function (t) {
			return S(t)[e](this),
			this
		}
	}),
	Y.Z.prototype = S.fn,
	Y.uniq = P,
	Y.deserializeValue = b,
	S.zepto = Y,
	S
}
();
window.Zepto = Zepto, "$" in window || (window.$ = Zepto), function (t) {
	function e(t) {
		var e = this.os = {},
		i = this.browser = {},
		n = t.match(/WebKit\/([\d.]+)/),
		o = t.match(/(Android)\s+([\d.]+)/),
		a = t.match(/(iPad).*OS\s([\d_]+)/),
		r = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
		s = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
		c = s && t.match(/TouchPad/),
		l = t.match(/Kindle\/([\d.]+)/),
		p = t.match(/Silk\/([\d._]+)/),
		h = t.match(/(BlackBerry).*Version\/([\d.]+)/),
		u = t.match(/(BB10).*Version\/([\d.]+)/),
		d = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
		f = t.match(/PlayBook/),
		m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
		g = t.match(/Firefox\/([\d.]+)/);
		(i.webkit = !!n) && (i.version = n[1]),
		o && (e.android = !0, e.version = o[2]),
		r && (e.ios = e.iphone = !0, e.version = r[2].replace(/_/g, ".")),
		a && (e.ios = e.ipad = !0, e.version = a[2].replace(/_/g, ".")),
		s && (e.webos = !0, e.version = s[2]),
		c && (e.touchpad = !0),
		h && (e.blackberry = !0, e.version = h[2]),
		u && (e.bb10 = !0, e.version = u[2]),
		d && (e.rimtabletos = !0, e.version = d[2]),
		f && (i.playbook = !0),
		l && (e.kindle = !0, e.version = l[1]),
		p && (i.silk = !0, i.version = p[1]),
		!p && e.android && t.match(/Kindle Fire/) && (i.silk = !0),
		m && (i.chrome = !0, i.version = m[1]),
		g && (i.firefox = !0, i.version = g[1]),
		e.tablet = !!(a || f || o && !t.match(/Mobile/) || g && t.match(/Tablet/)),
		e.phone = !(e.tablet || !(o || r || s || h || u || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || g && t.match(/Mobile/)))
	}
	e.call(t, navigator.userAgent),
	t.__detect = e
}
(Zepto), function (t) {
	function e(t) {
		return t._zid || (t._zid = d++)
	}
	function i(t, i, a, r) {
		if (i = n(i), i.ns)
			var s = o(i.ns);
		return (u[e(t)] || []).filter(function (t) {
			return t && (!i.e || t.e == i.e) && (!i.ns || s.test(t.ns)) && (!a || e(t.fn) === e(a)) && (!r || t.sel == r)
		})
	}
	function n(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function o(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function a(e, i, n) {
		"string" != t.type(e) ? t.each(e, n) : e.split(/\s/).forEach(function (t) {
			n(t, i)
		})
	}
	function r(t, e) {
		return t.del && ("focus" == t.e || "blur" == t.e) || !!e
	}
	function s(t) {
		return m[t] || t
	}
	function c(i, o, c, l, p, h) {
		var d = e(i),
		f = u[d] || (u[d] = []);
		a(o, c, function (e, o) {
			var a = n(e);
			a.fn = o,
			a.sel = l,
			a.e in m && (o = function (e) {
				var i = e.relatedTarget;
				return !i || i !== this && !t.contains(this, i) ? a.fn.apply(this, arguments) : void 0
			}),
			a.del = p && p(o, e);
			var c = a.del || o;
			a.proxy = function (t) {
				var e = c.apply(i, [t].concat(t.data));
				return e === !1 && (t.preventDefault(), t.stopPropagation()),
				e
			},
			a.i = f.length,
			f.push(a),
			i.addEventListener(s(a.e), a.proxy, r(a, h))
		})
	}
	function l(t, n, o, c, l) {
		var p = e(t);
		a(n || "", o, function (e, n) {
			i(t, e, n, c).forEach(function (e) {
				delete u[p][e.i],
				t.removeEventListener(s(e.e), e.proxy, r(e, l))
			})
		})
	}
	function p(e) {
		var i,
		n = {
			originalEvent: e
		};
		for (i in e)
			_.test(i) || void 0 === e[i] || (n[i] = e[i]);
		return t.each(w, function (t, i) {
			n[t] = function () {
				return this[i] = g,
				e[t].apply(e, arguments)
			},
			n[i] = v
		}),
		n
	}
	function h(t) {
		if (!("defaultPrevented" in t)) {
			t.defaultPrevented = !1;
			var e = t.preventDefault;
			t.preventDefault = function () {
				this.defaultPrevented = !0,
				e.call(this)
			}
		}
	}
	var u = (t.zepto.qsa, {}),
	d = 1,
	f = {},
	m = {
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	f.click = f.mousedown = f.mouseup = f.mousemove = "MouseEvents",
	t.event = {
		add: c,
		remove: l
	},
	t.proxy = function (i, n) {
		if (t.isFunction(i)) {
			var o = function () {
				return i.apply(n, arguments)
			};
			return o._zid = e(i),
			o
		}
		if ("string" == typeof n)
			return t.proxy(i[n], i);
		throw new TypeError("expected function")
	},
	t.fn.bind = function (t, e) {
		return this.each(function () {
			c(this, t, e)
		})
	},
	t.fn.unbind = function (t, e) {
		return this.each(function () {
			l(this, t, e)
		})
	},
	t.fn.one = function (t, e) {
		return this.each(function (i, n) {
			c(this, t, e, null, function (t, e) {
				return function () {
					var i = t.apply(n, arguments);
					return l(n, e, t),
					i
				}
			})
		})
	};
	var g = function () {
		return !0
	},
	v = function () {
		return !1
	},
	_ = /^([A-Z]|layer[XY]$)/,
	w = {
		preventDefault: "isDefaultPrevented",
		stopImmediatePropagation: "isImmediatePropagationStopped",
		stopPropagation: "isPropagationStopped"
	};
	t.fn.delegate = function (e, i, n) {
		return this.each(function (o, a) {
			c(a, i, n, e, function (i) {
				return function (n) {
					var o,
					r = t(n.target).closest(e, a).get(0);
					return r ? (o = t.extend(p(n), {
								currentTarget: r,
								liveFired: a
							}), i.apply(r, [o].concat([].slice.call(arguments, 1)))) : void 0
				}
			})
		})
	},
	t.fn.undelegate = function (t, e, i) {
		return this.each(function () {
			l(this, e, i, t)
		})
	},
	t.fn.live = function (e, i) {
		return t(document.body).delegate(this.selector, e, i),
		this
	},
	t.fn.die = function (e, i) {
		return t(document.body).undelegate(this.selector, e, i),
		this
	},
	t.fn.on = function (e, i, n) {
		return !i || t.isFunction(i) ? this.bind(e, i || n) : this.delegate(i, e, n)
	},
	t.fn.off = function (e, i, n) {
		return !i || t.isFunction(i) ? this.unbind(e, i || n) : this.undelegate(i, e, n)
	},
	t.fn.trigger = function (e, i) {
		return ("string" == typeof e || t.isPlainObject(e)) && (e = t.Event(e)),
		h(e),
		e.data = i,
		this.each(function () {
			"dispatchEvent" in this && this.dispatchEvent(e)
		})
	},
	t.fn.triggerHandler = function (e, n) {
		var o,
		a;
		return this.each(function (r, s) {
			o = p("string" == typeof e ? t.Event(e) : e),
			o.data = n,
			o.target = s,
			t.each(i(s, e.type || e), function (t, e) {
				return a = e.proxy(o),
				o.isImmediatePropagationStopped() ? !1 : void 0
			})
		}),
		a
	},
	"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
		t.fn[e] = function (t) {
			return t ? this.bind(e, t) : this.trigger(e)
		}
	}),
	["focus", "blur"].forEach(function (e) {
		t.fn[e] = function (t) {
			return t ? this.bind(e, t) : this.each(function () {
				try {
					this[e]()
				} catch (t) {}
			}),
			this
		}
	}),
	t.Event = function (t, e) {
		"string" != typeof t && (e = t, t = e.type);
		var i = document.createEvent(f[t] || "Events"),
		n = !0;
		if (e)
			for (var o in e)
				"bubbles" == o ? n = !!e[o] : i[o] = e[o];
		return i.initEvent(t, n, !0, null, null, null, null, null, null, null, null, null, null, null, null),
		i.isDefaultPrevented = function () {
			return this.defaultPrevented
		},
		i
	}
}
(Zepto), function (t) {
	function e(e, i, n) {
		var o = t.Event(i);
		return t(e).trigger(o, n),
		!o.defaultPrevented
	}
	function i(t, i, n, o) {
		return t.global ? e(i || _, n, o) : void 0
	}
	function n(e) {
		e.global && 0 === t.active++ && i(e, null, "ajaxStart")
	}
	function o(e) {
		e.global && !--t.active && i(e, null, "ajaxStop")
	}
	function a(t, e) {
		var n = e.context;
		return e.beforeSend.call(n, t, e) === !1 || i(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void i(e, n, "ajaxSend", [t, e])
	}
	function r(t, e, n) {
		var o = n.context,
		a = "success";
		n.success.call(o, t, a, e),
		i(n, o, "ajaxSuccess", [e, n, t]),
		c(a, e, n)
	}
	function s(t, e, n, o) {
		var a = o.context;
		o.error.call(a, n, e, t),
		i(o, a, "ajaxError", [n, o, t]),
		c(e, n, o)
	}
	function c(t, e, n) {
		var a = n.context;
		n.complete.call(a, e, t),
		i(n, a, "ajaxComplete", [e, n]),
		o(n)
	}
	function l() {}
	function p(t) {
		return t && (t = t.split(";", 2)[0]),
		t && (t == k ? "html" : t == x ? "json" : b.test(t) ? "script" : y.test(t) && "xml") || "text"
	}
	function h(t, e) {
		return (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function u(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
		!e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = h(e.url, e.data))
	}
	function d(e, i, n, o) {
		var a = !t.isFunction(i);
		return {
			url: e,
			data: a ? i : void 0,
			success: a ? t.isFunction(n) ? n : void 0 : i,
			dataType: a ? o || n : n
		}
	}
	function f(e, i, n, o) {
		var a,
		r = t.isArray(i),
		s = t.isPlainObject(i);
		t.each(i, function (i, c) {
			a = t.type(c),
			o && (i = n ? o : o + "[" + (s || "object" == a || "array" == a ? i : "") + "]"),
			!o && r ? e.add(c.name, c.value) : "array" == a || !n && "object" == a ? f(e, c, n, i) : e.add(i, c)
		})
	}
	var m,
	g,
	v = 0,
	_ = window.document,
	w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	b = /^(?:text|application)\/javascript/i,
	y = /^(?:text|application)\/xml/i,
	x = "application/json",
	k = "text/html",
	S = /^\s*$/;
	t.active = 0,
	t.ajaxJSONP = function (e) {
		if (!("type" in e))
			return t.ajax(e);
		var i,
		n = "jsonp" + ++v,
		o = _.createElement("script"),
		c = function () {
			clearTimeout(i),
			t(o).remove(),
			delete window[n]
		},
		p = function (t) {
			c(),
			t && "timeout" != t || (window[n] = l),
			s(null, t || "abort", h, e)
		},
		h = {
			abort: p
		};
		return a(h, e) === !1 ? (p("abort"), !1) : (window[n] = function (t) {
			c(),
			r(t, h, e)
		}, o.onerror = function () {
			p("error")
		}, o.src = e.url.replace(/=\?/, "=" + n), t("head").append(o), e.timeout > 0 && (i = setTimeout(function () {
						p("timeout")
					}, e.timeout)), h)
	},
	t.ajaxSettings = {
		type: "GET",
		beforeSend: l,
		success: l,
		error: l,
		complete: l,
		context: null,
		global: !0,
		xhr: function () {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript",
			json: x,
			xml: "application/xml, text/xml",
			html: k,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	},
	t.ajax = function (e) {
		var i = t.extend({}, e || {});
		for (m in t.ajaxSettings)
			void 0 === i[m] && (i[m] = t.ajaxSettings[m]);
		n(i),
		i.crossDomain || (i.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(i.url) && RegExp.$2 != window.location.host),
		i.url || (i.url = window.location.toString()),
		u(i),
		i.cache === !1 && (i.url = h(i.url, "_=" + Date.now()));
		var o = i.dataType,
		c = /=\?/.test(i.url);
		if ("jsonp" == o || c)
			return c || (i.url = h(i.url, "callback=?")), t.ajaxJSONP(i);
		var d,
		f = i.accepts[o],
		v = {},
		_ = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol,
		w = i.xhr();
		i.crossDomain || (v["X-Requested-With"] = "XMLHttpRequest"),
		f && (v.Accept = f, f.indexOf(",") > -1 && (f = f.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(f)),
		(i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && (v["Content-Type"] = i.contentType || "application/x-www-form-urlencoded"),
		i.headers = t.extend(v, i.headers || {}),
		w.onreadystatechange = function () {
			if (4 == w.readyState) {
				w.onreadystatechange = l,
				clearTimeout(d);
				var e,
				n = !1;
				if (w.status >= 200 && w.status < 300 || 304 == w.status || 0 == w.status && "file:" == _) {
					o = o || p(w.getResponseHeader("content-type")),
					e = w.responseText;
					try {
						"script" == o ? (1, eval)(e) : "xml" == o ? e = w.responseXML : "json" == o && (e = S.test(e) ? null : t.parseJSON(e))
					} catch (a) {
						n = a
					}
					n ? s(n, "parsererror", w, i) : r(e, w, i)
				} else
					s(null, w.status ? "error" : "abort", w, i)
			}
		};
		var b = "async" in i ? i.async : !0;
		w.open(i.type, i.url, b);
		for (g in i.headers)
			w.setRequestHeader(g, i.headers[g]);
		return a(w, i) === !1 ? (w.abort(), !1) : (i.timeout > 0 && (d = setTimeout(function () {
						w.onreadystatechange = l,
						w.abort(),
						s(null, "timeout", w, i)
					}, i.timeout)), w.send(i.data ? i.data : null), w)
	},
	t.get = function (e, i, n, o) {
		return t.ajax(d.apply(null, arguments))
	},
	t.post = function (e, i, n, o) {
		var a = d.apply(null, arguments);
		return a.type = "POST",
		t.ajax(a)
	},
	t.getJSON = function (e, i, n) {
		var o = d.apply(null, arguments);
		return o.dataType = "json",
		t.ajax(o)
	},
	t.fn.load = function (e, i, n) {
		if (!this.length)
			return this;
		var o,
		a = this,
		r = e.split(/\s/),
		s = d(e, i, n),
		c = s.success;
		return r.length > 1 && (s.url = r[0], o = r[1]),
		s.success = function (e) {
			a.html(o ? t("<div>").html(e.replace(w, "")).find(o) : e),
			c && c.apply(a, arguments)
		},
		t.ajax(s),
		this
	};
	var T = encodeURIComponent;
	t.param = function (t, e) {
		var i = [];
		return i.add = function (t, e) {
			this.push(T(t) + "=" + T(e))
		},
		f(i, t, e),
		i.join("&").replace(/%20/g, "+")
	}
}
(Zepto), function (t) {
	t.fn.serializeArray = function () {
		var e,
		i = [];
		return t(Array.prototype.slice.call(this.get(0).elements)).each(function () {
			e = t(this);
			var n = e.attr("type");
			"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && i.push({
				name: e.attr("name"),
				value: e.val()
			})
		}),
		i
	},
	t.fn.serialize = function () {
		var t = [];
		return this.serializeArray().forEach(function (e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}),
		t.join("&")
	},
	t.fn.submit = function (e) {
		if (e)
			this.bind("submit", e);
		else if (this.length) {
			var i = t.Event("submit");
			this.eq(0).trigger(i),
			i.defaultPrevented || this.get(0).submit()
		}
		return this
	}
}
(Zepto), function (t, e) {
	function i(t) {
		return n(t.replace(/([a-z])([A-Z])/, "$1-$2"))
	}
	function n(t) {
		return t.toLowerCase()
	}
	function o(t) {
		return a ? a + t : n(t)
	}
	var a,
	r,
	s,
	c,
	l,
	p,
	h,
	u,
	d = "",
	f = {
		Webkit: "webkit",
		Moz: "",
		O: "o",
		ms: "MS"
	},
	m = window.document,
	g = m.createElement("div"),
	v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
	_ = {};
	t.each(f, function (t, i) {
		return g.style[t + "TransitionProperty"] !== e ? (d = "-" + n(t) + "-", a = i, !1) : void 0
	}),
	r = d + "transform",
	_[s = d + "transition-property"] = _[c = d + "transition-duration"] = _[l = d + "transition-timing-function"] = _[p = d + "animation-name"] = _[h = d + "animation-duration"] = _[u = d + "animation-timing-function"] = "",
	t.fx = {
		off: a === e && g.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: d,
		transitionEnd: o("TransitionEnd"),
		animationEnd: o("AnimationEnd")
	},
	t.fn.animate = function (e, i, n, o) {
		return t.isPlainObject(i) && (n = i.easing, o = i.complete, i = i.duration),
		i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3),
		this.anim(e, i, n, o)
	},
	t.fn.anim = function (n, o, a, d) {
		var f,
		m,
		g,
		w = {},
		b = "",
		y = this,
		x = t.fx.transitionEnd;
		if (o === e && (o = .4), t.fx.off && (o = 0), "string" == typeof n)
			w[p] = n, w[h] = o + "s", w[u] = a || "linear", x = t.fx.animationEnd;
		else {
			m = [];
			for (f in n)
				v.test(f) ? b += f + "(" + n[f] + ") " : (w[f] = n[f], m.push(i(f)));
			b && (w[r] = b, m.push(r)),
			o > 0 && "object" == typeof n && (w[s] = m.join(", "), w[c] = o + "s", w[l] = a || "linear")
		}
		return g = function (e) {
			if ("undefined" != typeof e) {
				if (e.target !== e.currentTarget)
					return;
				t(e.target).unbind(x, g)
			}
			t(this).css(_),
			d && d.call(this)
		},
		o > 0 && this.bind(x, g),
		this.size() && this.get(0).clientLeft,
		this.css(w),
		0 >= o && setTimeout(function () {
			y.each(function () {
				g.call(this)
			})
		}, 0),
		this
	},
	g = null
}
(Zepto), function (t) {
	function e(t, e, i, n) {
		return Math.abs(t - e) >= Math.abs(i - n) ? t - e > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
	}
	function i() {
		l = null,
		h.last && (h.el.trigger("longTap"), h = {})
	}
	function n() {
		l && clearTimeout(l),
		l = null
	}
	function o() {
		r && clearTimeout(r),
		s && clearTimeout(s),
		c && clearTimeout(c),
		l && clearTimeout(l),
		r = s = c = l = null,
		h = {}
	}
	function a(t) {
		return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary
	}
	var r,
	s,
	c,
	l,
	p,
	h = {},
	u = 750;
	t(document).ready(function () {
		var d,
		f,
		m,
		g = 0,
		v = 0;
		"MSGesture" in window && (p = new MSGesture, p.target = document.body),
		t(document).bind("MSGestureEnd", function (t) {
			var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
			e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
		}).on("touchstart MSPointerDown", function (e) {
			("MSPointerDown" != e.type || a(e)) && (m = "MSPointerDown" == e.type ? e : e.touches[0], d = Date.now(), f = d - (h.last || d), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), r && clearTimeout(r), h.x1 = m.pageX, h.y1 = m.pageY, f > 0 && 250 >= f && (h.isDoubleTap = !0), h.last = d, l = setTimeout(i, u), p && "MSPointerDown" == e.type && p.addPointer(e.pointerId))
		}).on("touchmove MSPointerMove", function (t) {
			("MSPointerMove" != t.type || a(t)) && (m = "MSPointerMove" == t.type ? t : t.touches[0], n(), h.x2 = m.pageX, h.y2 = m.pageY, g += Math.abs(h.x1 - h.x2), v += Math.abs(h.y1 - h.y2))
		}).on("touchend MSPointerUp", function (i) {
			("MSPointerUp" != i.type || a(i)) && (n(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function () {
						h.el.trigger("swipe"),
						h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)),
						h = {}
					}, 0) : "last" in h && (30 > g && 30 > v ? s = setTimeout(function () {
								var e = t.Event("tap");
								e.cancelTouch = o,
								h.el.trigger(e),
								h.isDoubleTap ? (h.el.trigger("doubleTap"), h = {}) : r = setTimeout(function () {
										r = null,
										h.el.trigger("singleTap"),
										h = {}
									}, 250)
							}, 0) : h = {}), g = v = 0)
		}).on("touchcancel MSPointerCancel", o),
		t(window).on("scroll", o)
	}),
	["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
		t.fn[e] = function (t) {
			return this.on(e, t)
		}
	})
}
(Zepto), function (t) {
	function e(t) {
		return t
	}
	function i(t) {
		try {
			return decodeURIComponent(t.replace(o, " "))
		} catch (e) {}
	}
	function n(t) {
		0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return a.json ? JSON.parse(t) : t
		} catch (e) {}
	}
	var o = /\+/g,
	a = t.cookie = function (o, r, s) {
		if (void 0 !== r) {
			if (s = t.extend({}, a.defaults, s), "number" == typeof s.expires) {
				var c = s.expires,
				l = s.expires = new Date;
				l.setDate(l.getDate() + c)
			}
			return r = a.json ? JSON.stringify(r) : String(r),
			document.cookie = [a.raw ? o : encodeURIComponent(o), "=", a.raw ? r : encodeURIComponent(r), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
		}
		for (var p = a.raw ? e : i, h = document.cookie.split("; "), u = o ? void 0 : {}, d = 0, f = h.length; f > d; d++) {
			var m = h[d].split("="),
			g = p(m.shift()),
			v = p(m.join("="));
			if (o && o === g) {
				u = n(v);
				break
			}
			o || (u[g] = n(v))
		}
		return "deleted" === u ? "" : u
	};
	a.defaults = {},
	t.removeCookie = function (e, i) {
		return void 0 !== t.cookie(e) ? (t.cookie(e, "", t.extend({}, i, {
					expires: -1
				})), !0) : !1
	}
}
(Zepto), this.LTK || function (t, e) {
	var i = t.LTK = {
		version: "2.1"
	},
	n = {},
	o = function (t) {
		if (t.indexOf("/") > 0 || (t = t.replace(/\./g, "/")), n.hasOwnProperty(t))
			return n[t];
		var a = i[t];
		if ("function" == typeof a) {
			n[t] = function () {};
			var r = {
				exports: {}
			};
			a = a(o, r.exports, r),
			a === e && (a = r.exports)
		} else if (a === e)
			throw "LTK error: module " + t + " is not found";
		return i[t] = null,
		n[t] = a
	};
	i.require = i.use = t.require = o,
	t.define = function (t, e) {
		i[t] = e
	}
}
(this), Cookie = {
	set: function (t, e, i) {
		i || (i = {});
		var n = new Date,
		o = i.exp;
		"number" == typeof o ? n.setTime(n.getTime() + 36e5 * o) : "forever" === o ? n.setFullYear(n.getFullYear() + 50) : null === e ? (e = "", n.setTime(n.getTime() - 36e5)) : n = o instanceof Date ? o : "",
		document.cookie = t + "=" + encodeURIComponent(e) + (n && "; expires=" + n.toUTCString()) + "; domain=" + (i.domain || document.domain) + "; path=" + (i.path || "/") + (i.secure ? "; secure" : "")
	},
	get: function (t) {
		t += "=";
		for (var e, i = (document.cookie || "").split(";"), n = t.length, o = i.length; o--; )
			if (e = i[o].replace(/^\s+/, ""), e.slice(0, n) === t)
				return decodeURIComponent(e.slice(n)).replace(/\s+$/, "");
		return ""
	}
}, window.le = window.le || {}, window.LETV = window.LETV || {}, le.m = le.m || {}, le.v = le.v || {}, le.app = le.app || {}, le.msg = le.msg || {}, le.tpl = le.tpl || {}, le.evt = le.evt || {}, le._cb_ = le._cb_ || {}, le.api_host = le.api_host || {}, le.__proto = le.__proto || {}, !function (t) {
	function e(t) {
		try {
			return new Function("return " + t)()
		} catch (e) {
			return ""
		}
	}
	if (!t.Ker) {
		var i = {},
		n = {},
		o = {},
		a = 1,
		r = !0,
		s = "_Ker_8s1hj29c3x";
		t.Ker = {
			on: function (t, e) {
				if (e)
					"-" === t.charAt(0) && (t = t.substr(1), i[t] || (n[t] = !0)), i[t] || (i[t] = e);
				else
					for (var o in t)
						t.hasOwnProperty(o) && this.on(o, t[o])
			},
			del: function (t) {
				delete i[t],
				delete n[t]
			},
			click: function (t, e, i) {
				var n = t.getAttribute("k-name"),
				o = e;
				"-" === e.charAt(0) && (e = e.substr(1)),
				n ? (" " + n + " ").indexOf(" " + e + " ") < 0 && t.setAttribute("k-name", n + " " + e) : t.setAttribute("k-name", e),
				i && this.on(o, i)
			},
			off: function (t, e) {
				var i = t.getAttribute("k-name");
				e && i !== e ? i && t.setAttribute("k-name", (" " + i + " ").replace(" " + e + " ", " ").replace(/^\s|\s$/g, "")) : t.removeAttribute("k-name")
			},
			emit: function (t, e, r, c) {
				if (n[t] && e) {
					if (e[s] || (e[s] = " " + a++), o[t + e[s]])
						return;
					o[t + e[s]] = !0
				}
				var l = i[t];
				l && l(e, r, c)
			},
			data: function (t, i) {
				var n = t.getAttribute("k-data"),
				o = typeof i;
				if ("undefined" === o)
					return n ? "{" === n.charAt(0) ? e(n) : n : "";
				if ("object" === o) {
					if (null === i)
						return void t.setAttribute("k-data", "");
					var a,
					r;
					if (n && "{" === n.charAt(0))
						if (n = e(n))
							for (a in i)
								n[a] = i[a];
						else
							n = i;
					else
						n = i;
					i = [];
					for (a in n)
						r = n[a], i.push(a + ":" + ("string" == typeof r ? "'" + r.replace(/'/g, "\\'") + "'" : r));
					i = "{" + i.join(",") + "}"
				}
				t.setAttribute("k-data", i)
			},
			free: function (t, e) {
				t && delete o[e + t[s]]
			},
			stop: function () {
				r = !1
			}
		};
		var c = document.addEventListener ? function (t, e, i) {
			t && t.addEventListener && t.addEventListener(e, i, !1)
		}
		 : function (t, e, i) {
			t && t.attachEvent && t.attachEvent("on" + e, i)
		};
		$(function () {
			c(document.body, "click", function (e) {
				e || (e = t.event);
				for (var c, l = e.target || e.srcElement, p = l; p && 1 === p.nodeType && r; ) {
					if (c = p.getAttribute("k-name")) {
						if (n[c]) {
							if (p[s] || (p[s] = " " + a++), o[c + p[s]]) {
								p = p.parentNode;
								continue
							}
							o[c + p[s]] = !0
						}
						var h = i[c];
						if (h)
							h(p, l, e);
						else
							for (var u = c.split(" "), d = 0, f = u.length; f > d; d++) {
								if (c = u[d], n[c]) {
									if (p[s] || (p[s] = " " + a++), o[c + p[s]])
										continue;
									o[c + p[s]] = !0
								}
								h = i[c],
								h && h(p, l, e)
							}
					}
					p = p.parentNode
				}
				r = !0
			})
		})
	}
}
(window), function () {
	"use strict";
	window.le = window.le || {};
	var t = location.host.indexOf("le.com") > -1 ? "le.com" : "letv.com",
	e = location.host.split(".").slice(-2).join("."),
	i = "http:" === window.location.protocol,
	n = {
		dc: i ? "http://apple.www.letv.com" : "https://apple-www.le.com",
		hd_my: i ? "http://hd.my." + t : "https://hd-my." + t,
		v_stat: i ? "http://v.stat.letv.com" : "https://vstat-api.letv.com",
		d_api: i ? "http://d.api.m." + t : "https://d-api-m." + t,
		s_api: i ? "http://s.api.m." + t : "https://s-api-m." + t,
		api_my: i ? "http://api.my." + t : "https://api-my." + t,
		api_zhifu: i ? "http://api.zhifu." + t : "https://ibuy." + t,
		cdn_api_my: i ? "http://cdn.api.my." + t : "https://cdn-api-my." + t,
		apple_www: i ? "http://apple.www.letv.com" : "https://apple-www.le.com",
		static_api: i ? "http://static.api." + t : "https://static-api.letv.com",
		package_my: i ? "http://package.my." + t : "https://package-my." + t,
		hk_api_zhifu: i ? "http://hk.api.zhifu." + t : "https://hkibuy." + t,
		upload_app_m: i ? "http://upload.app.m.letv.com" : "https://upload-app-m.letv.com",
		dynamic_pay_app_m: i ? "http://dynamic.pay.app.m." + t : "https://d-pay-app-m." + t
	};
	window.le.api_host = {
		m: "//m." + t,
		dc: n.dc,
		api: "//api.letv.com",
		ark: "//ark.letv.com",
		rec: "//rec.letv.com",
		www: "//www." + t,
		host: "m." + t,
		main: e,
		stat: "//stat.letv.com",
		zhifu: "//zhifu." + t,
		app_m: "//app.m.letv.com",
		d_api: n.d_api,
		s_api: n.s_api,
		hd_my: n.hd_my,
		fe_go: "//fe-go.letv.com",
		m_href: "//m." + t,
		api_my: n.api_my,
		v_stat: n.v_stat,
		data_so: "//data.so.letv.com",
		yuanxian: "//yuanxian." + t,
		api_live: "//api.live.letv.com",
		minisite: "//minisite." + t,
		leho_api: "//api.leho.le.com",
		sso_http: "//sso." + t,
		sso_https: "https://sso." + t,
		api_zhifu: n.api_zhifu,
		apple_www: n.apple_www,
		n_api_live: "//n.api.live.letv.com",
		static_api: n.static_api,
		cdn_api_my: n.cdn_api_my,
		package_my: n.package_my,
		hk_api_zhifu: n.hk_api_zhifu,
		upload_app_m: n.upload_app_m,
		static_api_sports: "//static.api.sports.letv.com",
		dynamic_pay_app_m: n.dynamic_pay_app_m
	}
}
(), le.m.userCenter = {
	openLoginPage: function (t) {
		if (window.LEPass) {
			var e = $.extend({
					plat: "msite"
				}, t);
			window.LEPass.openLoginPage(location.href, "_self", e)
		} else {
			var i = t.language || "zh_CN";
			location.href = le.api_host.sso_http + "/user/mloginHome?plat=msite&language=" + i + "&next_action=" + encodeURIComponent(location.href)
		}
	},
	openRegisterPage: function () {
		window.LEPass ? window.LEPass.openRegisterPage(location.href, "_self", {
			plat: "msite"
		}) : location.href = le.api_host.sso_http + "/user/mmobileReg?plat=msite&next_action=" + encodeURIComponent(location.href)
	},
	logOut: function () {
		window.LEPass ? window.LEPass.logOut(function () {
			location.href = le.api_host.m
		}) : $.ajax({
			url: "http://sso.le.com/user/loginout?jsonp=?",
			success: function () {
				location.href = le.api_host.m
			}
		})
	},
	isLogin: function () {
		return window.LEPass ? window.LEPass.isLogin() : !!Cookie.get("ssouid")
	}
}, le.m.isLogin = function () {
	return le.m.userCenter.isLogin()
}, LTK["sdk/stats/api_host"] = function (t, e, i) {
	"use strict";
	var n = "http:" === window.location.protocol,
	o = {
		dc: n ? "http://apple.www.letv.com" : "https://apple-www.le.com"
	},
	a = {
		so: "so.letv.com",
		dc: o.dc,
		main: location.host.split(".").slice(-2).join("."),
		fe_go: "//fe-go.letv.com",
		test: "//develop.bigdata.le.com/"
	};
	i.exports = a
}, LTK["sdk/stats/Stats"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function (e) {
			var i = t("sdk/stats/api_host"),
			n = {};
			e.funcSet ? (n.api_env = i.test + e.funcSet + "/env/?", n.api_lg = i.test + e.funcSet + "/lg/?", n.api_op = i.test + e.funcSet + "/op/?", n.api_pgv = i.test + e.funcSet + "/pgv/?") : (n.api_env = i.dc + "/env/?", n.api_lg = i.dc + "/lg/?", n.api_op = i.dc + "/op/?", n.api_pgv = i.dc + "/pgv/?");
			var o = {
				VER: "2.0",
				P1: "1",
				P2: "10",
				cookieDomain: "." + i.main,
				api_so: i.so,
				api_fe: i.fe_go + "/ds?",
				api_env: n.api_env,
				api_lg: n.api_lg,
				api_op: n.api_op,
				api_pgv: n.api_pgv
			};
			return o.imgRequest = function (t, e) {
				var i = new Image;
				i.onload = i.onerror = function () {
					i = null,
					e && ("string" == typeof e ? window.location.href = e : e())
				},
				i.src = t,
				setTimeout(function () {
					i && e && ("string" == typeof e ? window.location.href = e : e(), e = !1)
				}, 1e3)
			},
			o.getCookie = function (t) {
				var e = new RegExp("(?:^| )" + t + "=([^;]*)(?:;|$)"),
				i = e.exec(document.cookie);
				return i ? unescape(i[1]) : ""
			},
			o.setCookie = function (t, e, i) {
				i || (i = {});
				var n = new Date,
				o = i.exp;
				"number" == typeof o ? n.setTime(n.getTime() + 36e5 * o) : "forever" === o ? n.setFullYear(n.getFullYear() + 50) : null === e ? (e = "", n.setTime(n.getTime() - 36e5)) : n = o instanceof Date ? o : "",
				document.cookie = t + "=" + escape(e) + (n && "; expires=" + n.toGMTString()) + "; domain=" + (i.domain || this.cookieDomain) + "; path=" + (i.path || "/") + (i.secure ? "; secure" : "")
			},
			o.getLC = function () {
				var t = this.getCookie("tj_lc");
				if (t)
					return t;
				if (t = LocalStore.read("lc"))
					this.setCookie("tj_lc", t);
				else {
					t = "";
					for (var e = 32; e--; )
						t += Math.floor(16 * Math.random()).toString(16);
					(LocalStore.isReady || !LocalStore.flash) && LocalStore.write("lc", t)
				}
				return t
			},
			o.setLC = function (t) {
				this.setCookie("tj_lc", t, {
					exp: "forever"
				})
			},
			window.LocalStore = {
				ready: function (t) {
					t()
				}
			},
			o.getLC = function () {
				var t = this.getCookie("tj_lc");
				if (!t) {
					t = "";
					for (var e = 32; e--; )
						t += Math.floor(16 * Math.random()).toString(16);
					var i = "tj_lc";
					this.setCookie(i, t, {
						exp: "forever"
					})
				}
				return t
			},
			o.P1 = "0",
			o.P2 = "04",
			o.app_name = "letv_msite",
			o.getUUID = function () {
				var t = this.getCookie("tj_uuid");
				return t || (t = String((new Date).getTime()) + String(Math.random()).slice(-7), this.setCookie("tj_uuid", t)),
				t
			},
			o.WEID = String((new Date).getTime()) + String(Math.random()).slice(-7),
			o.UID = o.getCookie("ssouid"),
			o
		}
	}
}, LTK["sdk/stats/br"] = function (t, e, i) {
	"use strict";
	function n(t) {
		var e,
		i,
		n,
		o,
		a,
		r = "other",
		s = navigator.userAgent.toLowerCase();
		for (i = 0, n = t.length; n > i; i++)
			if (e = t[i], o = e.tag, a = "string" == typeof o ? s.indexOf(o) > -1 : o.test(s)) {
				r = e.flag;
				break
			}
		return location.href.indexOf("site=toutiaonews") > 0 && (r = "toutiao"),
		r
	}
	var o = [{
			tag: "liebaofast",
			flag: "liebao"
		}, {
			tag: "letvmobileclient",
			flag: "letvmobcli"
		}, {
			tag: "letvclient",
			flag: "letvcli"
		}, {
			tag: "micromessenger",
			flag: "weixin"
		}, {
			tag: "__weibo__",
			flag: "weibo"
		}, {
			tag: /ucbrowser|ucweb/,
			flag: "uc"
		}, {
			tag: /leuibrowser|eui browser/,
			flag: "leui"
		}, {
			tag: "baiduboxapp",
			flag: "baidubox"
		}, {
			tag: "baidubrowser",
			flag: "baidubrowser"
		}, {
			tag: "qqbrowser",
			flag: "qq"
		}, {
			tag: "qqlivebrowser",
			flag: "qqlive"
		}, {
			tag: "oppobrowser",
			flag: "oppo"
		}, {
			tag: "sogoumobilebrowser",
			flag: "sougou"
		}, {
			tag: "xiaomi",
			flag: "xiaomi"
		}, {
			tag: "storm_browser",
			flag: "storm"
		}, {
			tag: "360video",
			flag: "360video"
		}, {
			tag: "qqdownloader",
			flag: "yyb"
		}, {
			tag: "wandoujia spider",
			flag: "wandoujia"
		}, {
			tag: "mogujie",
			flag: "mogujie"
		}, {
			tag: "dolphinbrowsercn",
			flag: "dolphin"
		}, {
			tag: "kanqiu",
			flag: "hupu"
		}, {
			tag: "iemobile",
			flag: "iemobile"
		}, {
			tag: "msie ",
			flag: "ie"
		}, {
			tag: "chrome",
			flag: "chrome"
		}, {
			tag: "crios",
			flag: "chrome"
		}, {
			tag: "firefox",
			flag: "firefox"
		}, {
			tag: "opera",
			flag: "opera"
		}, {
			tag: /iphone.+?\bsafari/,
			flag: "safari"
		}, {
			tag: /iphone.+?\bmobile\/\w+$/,
			flag: "gaosu"
		}
	];
	i.exports = n(o)
}, LTK["sdk/stats/op"] = function (t, e, i) {
	"use strict";
	var n = window.__INFO__ || {},
	o = n.video || {},
	a = encodeURIComponent;
	i.exports = {
		init: function (t) {
			var e = {
				acode: "0",
				ap: "-",
				ar: "0",
				cid: o.cid || "-",
				pid: o.pid || "-",
				vid: o.vid || "-",
				uid: t.UID || "-",
				uuid: t.getUUID(),
				lc: "-",
				cur_url: a(window.location.href),
				auid: "-",
				ilu: t.UID ? "0" : "1",
				targeturl: "-",
				ver: t.VER,
				p1: t.P1,
				p2: t.P2,
				app_name: t.app_name
			},
			i = t.getCookie("tj_lc");
			return i ? e.lc = i : LocalStore.ready(function () {
					e.lc = t.getLC()
				}), {
				sendAction: function (i, n) {
					i || (i = {});
					var o,
					r = t.data || {},
					s = [];
					for (o in r)
						r.hasOwnProperty(o) && (e[o] = a(r[o]));
					for (o in i)
						i.hasOwnProperty(o) && s.push(o + "=" + a(i[o]));
					t.AUID && (e.auid = t.AUID);
					for (o in e)
						!i.hasOwnProperty(o) && e.hasOwnProperty(o) && s.push(o + "=" + e[o]);
					s.push("r=" + (Math.random() + "").slice(2, 14)),
					s.push("ctime=" + (new Date).getTime()),
					t.imgRequest(t.api_op + s.join("&"), n)
				}
			}
		}
	}
}, LTK["sdk/stats/pv"] = function (t, e, i) {
	"use strict";
	var n = window.__INFO__ || {},
	o = n.video || {},
	a = encodeURIComponent,
	r = document,
	s = r.referrer;
	i.exports = {
		init: function (t) {
			function e() {
				for (var t = ["letvclient", "letvmobileclient", "leautocamera", "lesports", "cn.hi.wifi", "foxconn.hi.wifi"], e = t || [], i = navigator.userAgent.toLowerCase(), n = "", o = 0; o < e.length; o++)
					if (n = e[o], n && i.indexOf(n) > -1)
						return !0;
				return !1
			}
			var i = {
				cid: o.cid || "-",
				pid: o.pid || "-",
				vid: o.vid || "-",
				uid: t.UID || "-",
				uuid: t.getUUID(),
				lc: t.getLC(),
				ref: a(s || "-"),
				ct: "-",
				rcid: "-",
				kw: a(n.wd || "-"),
				cur_url: a(window.location.href),
				ch: t.BR,
				auid: "-",
				ilu: t.UID ? "0" : "1",
				weid: t.WEID,
				ver: t.VER,
				p1: t.P1,
				p2: t.P2,
				app_name: t.app_name
			};
			return {
				api: "04" === t.P2 && "0" === t.P1 ? t.api_pgv : t.api_pgv,
				domain: t.cookieDomain,
				sengin: ["video.baidu.com", "www.baidu.com", "baidu.com", "google.com.hk", "google.com", "v.sogou.com", "sogou.com", "zhongsou.com", "search.yahoo.com", "one.cn.yahoo.com", "soso.com", "search.live.com", "youdao.com", "gougou.com", "bing.com", t.api_so, "soku.com", "so.360.cn"],
				sword: ["word", "word", "wd", "q", "q", "query", "query", "w", "p", "p", "w", "kw", "q", "q", "search", "q", "wd", "keyword", "q"],
				daytime: 86400,
				init: function () {
					var n = location.search;
					if (n) {
						n = n.slice(1).replace("?", "&");
						var o = this.getValue("ch", n) || this.getValue("ref", n) || this.getValue("q2", n);
						o && (i.ch = a(o))
					}
					this.getCt();
					var r = t.getCookie("tj_lc"),
					s = this;
					e() || (r ? (i.lc = r, s.postData()) : LocalStore.ready(function () {
							i.lc = t.getLC(),
							s.postData()
						}))
				},
				getValue: function (t, e) {
					var i = new RegExp("(^|&|\\?)" + t + "=(.*?)(&|$|#)"),
					n = e.match(i);
					return n ? n[2] : ""
				},
				getCt: function () {
					var t = s;
					if (t) {
						for (var e = this.sengin, n = e.length, o = this.sword; n--; )
							if (t.indexOf(e[n]) > -1 && this.getValue(o[n], t))
								return void(i.ct = 3);
						i.ct = this.isLetv(t) ? 2 : 4
					} else
						i.ct = 1
				},
				isLetv: function (t) {
					return t ? (t = t.split("/"), t.length > 2 && t[2].indexOf(this.domain) > -1) : !1
				},
				getArea: function () {
					var e = t.getCookie("tj_area");
					e ? (i.area = e, t.setCookie("tj_area", null)) : delete i.area
				},
				getParam: function () {
					"04" === t.P2 && (i.ref = a(this.getValue("ref", location.search) || s || ("other" === i.ch ? "-" : i.ch))),
					this.getArea();
					var e,
					n = t.data || {},
					o = [];
					for (e in n)
						n.hasOwnProperty(e) && (i[e] = a(n[e]));
					for (e in i)
						i.hasOwnProperty(e) && o.push(e + "=" + i[e]);
					return o.push("r=" + (Math.random() + "").slice(2, 14)),
					o.join("&")
				},
				postData: function (e) {
					if (!(location.search && location.search.indexOf("noPv=1") > -1)) {
						e && (i.auid = e);
						try {
							var n = "IMG_" + String(Math.random()),
							o = t[n] = new Image(1, 1);
							o.onload = function () {
								o = t[n] = null
							},
							o.src = this.api + this.getParam(),
							setTimeout(function () {}, 1e3)
						} catch (a) {
							a.code = "STATS-PV-01",
							console.log(a)
						}
					}
				}
			}
		}
	}
}, LTK["sdk/stats/env"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function (t) {
			var e = {
				mac: "-",
				nt: "-",
				uid: t.UID || "-",
				br: t.BR,
				ver: "2.0",
				p1: t.P1,
				p2: t.P2,
				app_name: t.app_name
			};
			return {
				ua: navigator.userAgent.toLowerCase(),
				system: [["winxp", "windows nt 5.1"], ["win7", "windows nt 6.1"], ["win8", "windows nt 6.2"], ["vista", "windows nt 6.0"], ["wince", "windows ce"], ["wince", "windows phone"], ["android", "android"], ["ios", "ipad"], ["ios", "iphone"], ["symbian", "symbianos"], ["linux", "linux"]],
				init: function () {
					if (!t.getCookie("tj_env")) {
						var e = t.getCookie("tj_lc"),
						i = this;
						e ? i.initAction() : LocalStore.ready(function () {
							i.initAction()
						}),
						t.setCookie("tj_env", "1")
					}
				},
				initAction: function () {
					e.lc = t.getLC(),
					e.uuid = t.getUUID(),
					e.ro = window.screen.width + "_" + window.screen.height,
					this.getOs(),
					this.postData()
				},
				getParam: function () {
					var t,
					i = [];
					for (t in e)
						e.hasOwnProperty(t) && i.push(t + "=" + e[t]);
					return i.push("r=" + (Math.random() + "").slice(2, 14)),
					i.join("&")
				},
				postData: function () {
					try {
						var e = new Image(1, 1);
						e.onload = function () {
							e = null
						},
						e.src = t.api_env + this.getParam(),
						setTimeout(function () {}, 1e3)
					} catch (i) {
						i.code = "STATS-ENV-01",
						console.log(i)
					}
				},
				getOs: function () {
					for (var t = this.system, i = this.ua, n = 0, o = t.length; o > n; n++)
						if (i.indexOf(t[n][1]) > -1) {
							e.os = t[n][0];
							break
						}
				}
			}
		}
	}
}, LTK["sdk/stats/lg"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function (t) {
			var e = {
				uid: t.UID || "-",
				auid: "-",
				uuid: t.getUUID(),
				ver: "2.0",
				p1: t.P1,
				p2: t.P2,
				app_name: t.app_name
			};
			return {
				init: function () {
					var i = t.getCookie("tj_lc");
					i ? e.lc = i : LocalStore.ready(function () {
							e.lc = t.getLC()
						})
				},
				getCh: function () {
					var t = window.location.host.split(".")[0];
					"www" === t && 19 === window.location.href.indexOf("/ptv/vplay") && (t = "play"),
					e.ch = t
				},
				getRef: function () {
					var i = t.getCookie("tj_lg_r");
					i ? (e.ref = encodeURIComponent(i), t.setCookie("tj_lg_r", null)) : delete e.ref
				},
				clearLgCookie: function () {
					t.setCookie("tj_lg_r", null)
				},
				getParam: function (i) {
					i || (i = {}),
					0 === i.st && (e.uid = t.getCookie("ssouid") || "-");
					var n,
					o = [];
					for (n in i)
						i.hasOwnProperty(n) && o.push(n + "=" + encodeURIComponent(i[n]));
					for (n in e)
						!i.hasOwnProperty(n) && e.hasOwnProperty(n) && o.push(n + "=" + e[n]);
					return o.push("ts=" + Math.floor((new Date).getTime() / 1e3)),
					o.push("r=" + (Math.random() + "").slice(2, 14)),
					o.join("&")
				},
				postData: function (i) {
					if (console.log(), this.getCh(), this.getRef(), t.AUID) {
						e.auid = t.AUID;
						try {
							var n = new Image(1, 1);
							n.onload = function () {
								n = null
							},
							n.src = t.api_lg + this.getParam(i),
							setTimeout(function () {}, 1e3)
						} catch (o) {
							o.code = "STATS-LG-01",
							console.log(o)
						}
					}
				}
			}
		}
	}
}, LTK["sdk/stats/pvuv"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function (t) {
			var e = {
				weixin: "wx",
				weibo: "wb",
				uc: "uc",
				qq: "qq",
				qqlive: "qqlive",
				leui: "leui",
				letvmobcli: "letvmobcli",
				letvcli: "letvcli",
				baidubox: "baidubox",
				baidubrowser: "baidubro",
				oppo: "oppo",
				sougou: "sougou",
				xiaomi: "xiaomi",
				toutiao: "toutiao",
				iemobile: "iemobile",
				chrome: "chrome",
				safari: "safari",
				gaosu: "gaosu",
				storm: "storm",
				other: "o"
			},
			i = window.info && window.info.region,
			n = ":" + (e[t.BR] || "o"),
			o = ["pv" + n, "region:" + i];
			Cookie.get("fe_uv") || (o.push("uv" + n), Cookie.set("fe_uv", 1));
			var a = location.pathname || "";
			if (0 === a.indexOf("/kzt/") ? o.push("kzt") : 0 === a.indexOf("/izt/") && o.push("izt"), window.info && info.feStatData)
				for (var r, s = info.feStatData, c = s.length; c--; )
					if (r = s[c], r.code)
						if (r.uv) {
							var l = "fe_uv_" + r.uv;
							Cookie.get(l) || (r.code && o.push(r.code), Cookie.set(l, 1))
						} else
							r.code && o.push(r.br ? r.code + n : r.code);
			t.imgRequest(t.api_fe + "pv=1&code=" + o.join(",") + "&_=" + String(Math.random())),
			t.pvuv = !0
		}
	}
}, LTK["sdk/stats/index"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function (e) {
			var i,
			n = t("sdk/stats/Stats").init(e),
			o = t("sdk/stats/br"),
			a = t("sdk/stats/op"),
			r = t("sdk/stats/pv"),
			s = t("sdk/stats/env"),
			c = t("sdk/stats/lg"),
			l = t("sdk/stats/pvuv"),
			p = window.Stat;
			if (window.Stat)
				for (i in p)
					p.hasOwnProperty(i) && (n[i] = p[i]);
			return n.BR = o,
			n.sendAction = a.init(n).sendAction,
			n.Pv = r.init(n),
			n.Env = s.init(n),
			n.Lg = c.init(n),
			n.Pv.init(),
			n.Env.init(),
			n.Lg.init(),
			l.init(n),
			n
		}
	}
}, LTK["sdk/bridge/base/listeners"] = function (t, e, i) {
	"use strict";
	var n = {};
	i.exports = {
		listeners: n
	}
}, LTK["sdk/bridge/base/cb"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/listeners"),
	o = function (t, e) {
		var i = n[t];
		e = e || "{}";
		try {
			e = JSON.parse(e),
			e.eventName = t,
			i && i(e)
		} catch (o) {}
	},
	a = function (t, e) {
		var i = n[t];
		e = e || "{}";
		try {
			e = JSON.parse(e)
		} catch (o) {}
		i && i(e),
		delete n[t];
		var a = document.getElementById(t);
		a && a.parentNode.removeChild(a)
	};
	i.exports = {
		fireEvent: o,
		callback: a
	}
}, LTK["sdk/common/md5"] = function (t, e, i) {
	function n(t, e) {
		var i = (65535 & t) + (65535 & e),
		n = (t >> 16) + (e >> 16) + (i >> 16);
		return n << 16 | 65535 & i
	}
	function o(t, e) {
		return t << e | t >>> 32 - e
	}
	function a(t, e, i, a, r, s) {
		return n(o(n(n(e, t), n(a, s)), r), i)
	}
	function r(t, e, i, n, o, r, s) {
		return a(e & i | ~e & n, t, e, o, r, s)
	}
	function s(t, e, i, n, o, r, s) {
		return a(e & n | i & ~n, t, e, o, r, s)
	}
	function c(t, e, i, n, o, r, s) {
		return a(e ^ i ^ n, t, e, o, r, s)
	}
	function l(t, e, i, n, o, r, s) {
		return a(i ^ (e | ~n), t, e, o, r, s)
	}
	function p(t, e) {
		t[e >> 5] |= 128 << e % 32,
		t[(e + 64 >>> 9 << 4) + 14] = e;
		var i,
		o,
		a,
		p,
		h,
		u = 1732584193,
		d = -271733879,
		f = -1732584194,
		m = 271733878;
		for (i = 0; i < t.length; i += 16)
			o = u, a = d, p = f, h = m, u = r(u, d, f, m, t[i], 7, -680876936), m = r(m, u, d, f, t[i + 1], 12, -389564586), f = r(f, m, u, d, t[i + 2], 17, 606105819), d = r(d, f, m, u, t[i + 3], 22, -1044525330), u = r(u, d, f, m, t[i + 4], 7, -176418897), m = r(m, u, d, f, t[i + 5], 12, 1200080426), f = r(f, m, u, d, t[i + 6], 17, -1473231341), d = r(d, f, m, u, t[i + 7], 22, -45705983), u = r(u, d, f, m, t[i + 8], 7, 1770035416), m = r(m, u, d, f, t[i + 9], 12, -1958414417), f = r(f, m, u, d, t[i + 10], 17, -42063), d = r(d, f, m, u, t[i + 11], 22, -1990404162), u = r(u, d, f, m, t[i + 12], 7, 1804603682), m = r(m, u, d, f, t[i + 13], 12, -40341101), f = r(f, m, u, d, t[i + 14], 17, -1502002290), d = r(d, f, m, u, t[i + 15], 22, 1236535329), u = s(u, d, f, m, t[i + 1], 5, -165796510), m = s(m, u, d, f, t[i + 6], 9, -1069501632), f = s(f, m, u, d, t[i + 11], 14, 643717713), d = s(d, f, m, u, t[i], 20, -373897302), u = s(u, d, f, m, t[i + 5], 5, -701558691), m = s(m, u, d, f, t[i + 10], 9, 38016083), f = s(f, m, u, d, t[i + 15], 14, -660478335), d = s(d, f, m, u, t[i + 4], 20, -405537848), u = s(u, d, f, m, t[i + 9], 5, 568446438), m = s(m, u, d, f, t[i + 14], 9, -1019803690), f = s(f, m, u, d, t[i + 3], 14, -187363961), d = s(d, f, m, u, t[i + 8], 20, 1163531501), u = s(u, d, f, m, t[i + 13], 5, -1444681467), m = s(m, u, d, f, t[i + 2], 9, -51403784), f = s(f, m, u, d, t[i + 7], 14, 1735328473), d = s(d, f, m, u, t[i + 12], 20, -1926607734), u = c(u, d, f, m, t[i + 5], 4, -378558), m = c(m, u, d, f, t[i + 8], 11, -2022574463), f = c(f, m, u, d, t[i + 11], 16, 1839030562), d = c(d, f, m, u, t[i + 14], 23, -35309556), u = c(u, d, f, m, t[i + 1], 4, -1530992060), m = c(m, u, d, f, t[i + 4], 11, 1272893353), f = c(f, m, u, d, t[i + 7], 16, -155497632), d = c(d, f, m, u, t[i + 10], 23, -1094730640), u = c(u, d, f, m, t[i + 13], 4, 681279174), m = c(m, u, d, f, t[i], 11, -358537222), f = c(f, m, u, d, t[i + 3], 16, -722521979), d = c(d, f, m, u, t[i + 6], 23, 76029189), u = c(u, d, f, m, t[i + 9], 4, -640364487), m = c(m, u, d, f, t[i + 12], 11, -421815835), f = c(f, m, u, d, t[i + 15], 16, 530742520), d = c(d, f, m, u, t[i + 2], 23, -995338651), u = l(u, d, f, m, t[i], 6, -198630844), m = l(m, u, d, f, t[i + 7], 10, 1126891415), f = l(f, m, u, d, t[i + 14], 15, -1416354905), d = l(d, f, m, u, t[i + 5], 21, -57434055), u = l(u, d, f, m, t[i + 12], 6, 1700485571), m = l(m, u, d, f, t[i + 3], 10, -1894986606), f = l(f, m, u, d, t[i + 10], 15, -1051523), d = l(d, f, m, u, t[i + 1], 21, -2054922799), u = l(u, d, f, m, t[i + 8], 6, 1873313359), m = l(m, u, d, f, t[i + 15], 10, -30611744), f = l(f, m, u, d, t[i + 6], 15, -1560198380), d = l(d, f, m, u, t[i + 13], 21, 1309151649), u = l(u, d, f, m, t[i + 4], 6, -145523070), m = l(m, u, d, f, t[i + 11], 10, -1120210379), f = l(f, m, u, d, t[i + 2], 15, 718787259), d = l(d, f, m, u, t[i + 9], 21, -343485551), u = n(u, o), d = n(d, a), f = n(f, p), m = n(m, h);
		return [u, d, f, m]
	}
	function h(t) {
		var e,
		i = "";
		for (e = 0; e < 32 * t.length; e += 8)
			i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
		return i
	}
	function u(t) {
		var e,
		i = [];
		for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1)
			i[e] = 0;
		for (e = 0; e < 8 * t.length; e += 8)
			i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
		return i
	}
	function d(t) {
		return h(p(u(t), 8 * t.length))
	}
	function f(t, e) {
		var i,
		n,
		o = u(t),
		a = [],
		r = [];
		for (a[15] = r[15] = void 0, o.length > 16 && (o = p(o, 8 * t.length)), i = 0; 16 > i; i += 1)
			a[i] = 909522486 ^ o[i], r[i] = 1549556828 ^ o[i];
		return n = p(a.concat(u(e)), 512 + 8 * e.length),
		h(p(r.concat(n), 640))
	}
	function m(t) {
		var e,
		i,
		n = "0123456789abcdef",
		o = "";
		for (i = 0; i < t.length; i += 1)
			e = t.charCodeAt(i), o += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
		return o
	}
	function g(t) {
		return unescape(encodeURIComponent(t))
	}
	function v(t) {
		return d(g(t))
	}
	function _(t) {
		return m(v(t))
	}
	function w(t, e) {
		return f(g(t), g(e))
	}
	function b(t, e) {
		return m(w(t, e))
	}
	function y(t, e, i) {
		return e ? i ? w(e, t) : b(e, t) : i ? v(t) : _(t)
	}
	i.exports = y
}, LTK["sdk/common/base64"] = function (t, e, i) {
	var n = {
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode: function (t) {
			var e,
			i,
			o,
			a,
			r,
			s,
			c,
			l = "",
			p = 0;
			for (t = n._utf8_encode(t); p < t.length; )
				e = t.charCodeAt(p++), i = t.charCodeAt(p++), o = t.charCodeAt(p++), a = e >> 2, r = (3 & e) << 4 | i >> 4, s = (15 & i) << 2 | o >> 6, c = 63 & o, isNaN(i) ? s = c = 64 : isNaN(o) && (c = 64), l = l + this._keyStr.charAt(a) + this._keyStr.charAt(r) + this._keyStr.charAt(s) + this._keyStr.charAt(c);
			return l
		},
		decode: function (t) {
			var e,
			i,
			o,
			a,
			r,
			s,
			c,
			l = "",
			p = 0;
			for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < t.length; )
				a = this._keyStr.indexOf(t.charAt(p++)), r = this._keyStr.indexOf(t.charAt(p++)), s = this._keyStr.indexOf(t.charAt(p++)), c = this._keyStr.indexOf(t.charAt(p++)), e = a << 2 | r >> 4, i = (15 & r) << 4 | s >> 2, o = (3 & s) << 6 | c, l += String.fromCharCode(e), 64 != s && (l += String.fromCharCode(i)), 64 != c && (l += String.fromCharCode(o));
			return l = n._utf8_decode(l)
		},
		_utf8_encode: function (t) {
			t = t.replace(/\r\n/g, "\n");
			for (var e = "", i = 0; i < t.length; i++) {
				var n = t.charCodeAt(i);
				128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
			}
			return e
		},
		_utf8_decode: function (t) {
			for (var e = "", i = 0, n = c1 = c2 = 0; i < t.length; )
				n = t.charCodeAt(i), 128 > n ? (e += String.fromCharCode(n), i++) : n > 191 && 224 > n ? (c2 = t.charCodeAt(i + 1), e += String.fromCharCode((31 & n) << 6 | 63 & c2), i += 2) : (c2 = t.charCodeAt(i + 1), c3 = t.charCodeAt(i + 2), e += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
			return e
		}
	};
	i.exports = n
}, LTK["sdk/common/decode"] = function (t, e, i) {
	function n(t, e) {
		var e = e ? e : "",
		i = 4;
		e = s(e);
		var n = s(e.substr(0, 16)),
		l = s(e.substr(16, 16));
		if (i)
			var p = t.substr(0, i);
		else
			var p = "";
		var h,
		u = n + s(n + p);
		t = t.substr(i),
		h = c.decode(t);
		for (var d = new Array(256), f = 0; 256 > f; f++)
			d[f] = f;
		for (var m = new Array, f = 0; 256 > f; f++)
			m[f] = u.charCodeAt(f % u.length);
		for (var g = f = 0; 256 > f; f++)
			g = (g + d[f] + m[f]) % 256, tmp = d[f], d[f] = d[g], d[g] = tmp;
		var v = "";
		h = h.split("");
		for (var _ = g = f = 0; f < h.length; f++)
			_ = (_ + 1) % 256, g = (g + d[_]) % 256, tmp = d[_], d[_] = d[g], d[g] = tmp, v += a(r(h[f]) ^ d[(d[_] + d[g]) % 256]);
		return v = (0 == v.substr(0, 10) || v.substr(0, 10) - o() > 0) && v.substr(10, 16) == s(v.substr(26) + l).substr(0, 16) ? v.substr(26) : ""
	}
	function o() {
		var t = (new Date).getTime();
		return parseInt(t / 1e3)
	}
	function a(t) {
		return String.fromCharCode(t)
	}
	function r(t) {
		return t.charCodeAt()
	}
	var s = t("sdk/common/md5"),
	c = t("sdk/common/base64");
	i.exports = n
}, LTK["sdk/common/index"] = function (t, e, i) {
	var n = t("sdk/common/decode"),
	o = function (t) {
		var e = "iWFeNzVA7669bOni|mOC2O3sJMQbwIwOL|gJ8DbpRG4ecetQF2|hLTnSUxZixla3j0n|Y8yEqn61vi84cQsd",
		i = e.split("|");
		return 16 == t.length ? i.indexOf(t) > -1 : "le" === n(t, "m")
	},
	a = function (t) {
		if (o(t.key)) {
			LemSdk.access = !0;
			for (var e in LemSdk)
				"function" == typeof LemSdk[e].config && (LemSdk[e].config(), delete LemSdk[e].config);
			setTimeout(function () {
				"function" == typeof LemSdk.onReady && LemSdk.onReady()
			}, 1)
		}
	};
	i.exports = {
		config: a,
		check: o
	}
}, LTK["sdk/bridge/base/register"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/listeners"),
	o = navigator.userAgent.toLowerCase(),
	a = o.indexOf("lesuperview") > -1,
	r = /iphone|ipad|ipod/.test(o) ? !0 : !1,
	s = {
		core: {},
		fun: {}
	},
	c = function (t, e, i) {
		var n = document.createElement("iframe");
		n.id = i,
		n.style.display = "none",
		document.documentElement.appendChild(n),
		n.src = "letvjsbridge:" + e + ":" + t
	},
	l = function (t, e) {
		window.LetvJSBridge_For_Android && window.LetvJSBridge_For_Android[e] && window.LetvJSBridge_For_Android[e](t)
	},
	p = function (t) {
		window.LeSuperWebview && window.LeSuperWebview.callNativeFunc && window.LeSuperWebview.callNativeFunc(t)
	},
	h = function (t, e) {
		var i = "letv_bridge_" + (new Date).getTime() + Math.floor(1e4 * Math.random()),
		o = {};
		n[i] = e,
		o.name = t,
		o.callback_id = i,
		o.callback = "LetvJSBridge.callback",
		window.LeSuperWebview && window.LeSuperWebview.callEventManage && window.LeSuperWebview.callEventManage(JSON.stringify(o))
	},
	u = function (t, e) {
		var i = t.split(".");
		2 === i.length && (s[i[0]][i[1]] = function (t, o) {
			t = t || "{}",
			o = o || function () {};
			var s = "letv_bridge_" + (new Date).getTime() + Math.floor(1e4 * Math.random()),
			h = r ? i.join(".") : i.join("_"),
			u = {};
			n[s] = o,
			u.name = t,
			u.callback_id = s,
			u.callback = "LetvJSBridge.callback",
			u.func = h,
			a && (u.eventname = e || ""),
			a ? p(JSON.stringify([u])) : r ? c(JSON.stringify([u]), h, s) : l(JSON.stringify([u]), h)
		})
	};
	i.exports = {
		bridge: s,
		registerFunc: u,
		registerEvent: h
	}
}, LTK["sdk/bridge/app"] = function (t, e, i) {
	"use strict";
	var n = navigator.userAgent.toLowerCase(),
	o = n.indexOf("letvclient") > -1 || n.indexOf("letvmobileclient") > -1,
	a = n.indexOf("lesuperview") > -1,
	r = t("sdk/bridge/base/register"),
	s = {};
	r.registerFunc("core.getVersion"),
	s.getVersion = function (t) {
		r.bridge.core.getVersion(null, t)
	},
	s.isAppEnv = o,
	s.isLeSuperView = a,
	i.exports = s
}, LTK["sdk/bridge/base/event"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/listeners"),
	o = function (t, e) {
		"function" == typeof e && (n[t] = e)
	};
	i.exports = {
		on: o
	}
}, LTK["sdk/bridge/user"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = t("sdk/bridge/base/event"),
	a = Object.create(o);
	n.registerFunc("fun.callLogin"),
	n.registerFunc("fun.callLogout"),
	n.registerFunc("core.getUserInfo"),
	a.login = function (t) {
		n.bridge.fun.callLogin(null, t)
	},
	a.logout = function (t) {
		n.bridge.fun.callLogout(null, t)
	},
	a.getInfo = function (t) {
		n.bridge.core.getUserInfo(null, t)
	},
	i.exports = a
}, LTK["sdk/bridge/video"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.playVideo"),
	n.registerFunc("fun.saveVideo"),
	n.registerFunc("fun.autoPlay"),
	o.play = function (t, e) {
		t.type = t.type || 1,
		t.screen = t.screen || 1,
		n.bridge.fun.playVideo(t, e)
	},
	o.playLive = function (t, e) {
		t.type = t.type || 2,
		t.screen = t.screen || 2,
		n.bridge.fun.playVideo(t, e)
	},
	o.save = function (t, e) {
		t.pid = t.pid || "",
		t.definition = t.definition || "1000",
		n.bridge.fun.saveVideo(t, e)
	},
	o.auto = function (t, e) {
		n.bridge.fun.autoPlay(t, e)
	},
	i.exports = o
}, LTK["sdk/bridge/shake"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = t("sdk/bridge/base/event"),
	a = Object.create(o);
	n.registerFunc("fun.enableShake"),
	a.enable = function (t) {
		n.bridge.fun.enableShake(null, t)
	},
	i.exports = a
}, LTK["sdk/bridge/share"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = t("sdk/bridge/base/event"),
	a = Object.create(o);
	n.registerFunc("fun.callShare", "onsharebefore"),
	n.registerFunc("fun.setShare"),
	a.callShare = function (t, e) {
		n.bridge.fun.callShare(t, e)
	},
	a.setShare = function (t, e) {
		n.bridge.fun.setShare(t, e)
	},
	i.exports = a
}, LTK["sdk/bridge/alert"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.callAlert"),
	o.toast = function (t, e) {
		t.type = "alert",
		n.bridge.fun.callAlert(t, e)
	},
	i.exports = o
}, LTK["sdk/bridge/device"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("core.getDeviceInfo"),
	n.registerFunc("core.getOnlineDevice"),
	n.registerFunc("core.getPowerLevel"),
	n.registerFunc("core.getSpaceSize"),
	o.getInfo = function (t) {
		n.bridge.core.getDeviceInfo(null, t)
	},
	o.getOnline = function (t) {
		n.bridge.core.getOnlineDevice(null, t)
	},
	o.getPowerLevel = function (t) {
		n.bridge.core.getPowerLevel(null, t)
	},
	o.getSpaceSize = function (t) {
		n.bridge.core.getSpaceSize(null, t)
	},
	i.exports = o
}, LTK["sdk/bridge/qrcode"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.callScanCode"),
	o.scan = function (t) {
		n.bridge.fun.callScanCode(null, t)
	},
	i.exports = o
}, LTK["sdk/bridge/screen"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/event"),
	o = Object.create(n);
	i.exports = o
}, LTK["sdk/bridge/network"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = t("sdk/bridge/base/event"),
	a = Object.create(o);
	n.registerFunc("core.getNetworkState"),
	a.getInfo = function (t) {
		n.bridge.core.getNetworkState(null, t)
	},
	i.exports = a
}, LTK["sdk/bridge/browser"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.callBrowser"),
	o.view = function (t, e) {
		n.bridge.fun.callBrowser(t, e)
	},
	i.exports = o
}, LTK["sdk/bridge/gallery"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.openImage"),
	n.registerFunc("fun.openCamera"),
	o.openImage = function (t, e) {
		t.scale = t.scale || .1,
		n.bridge.fun.openImage(t, e)
	},
	o.openCamera = function (t, e) {
		t.scale = t.scale || .1,
		n.bridge.fun.openCamera(t, e)
	},
	i.exports = o
}, LTK["sdk/bridge/webview"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.callWebview"),
	n.registerFunc("fun.callNativeUI"),
	n.registerFunc("fun.openNewWin"),
	o.open = function (t, e) {
		t.target = t.target || 0,
		n.bridge.fun.callWebview(t, e)
	},
	o.callNativeUI = function (t, e) {
		t.url = t.url || "Home",
		n.bridge.fun.callNativeUI(t, e)
	},
	o.openNewWin = function (t, e) {
		t.type = t.type || 1,
		t.isShowNav = t.isShowNav || 1,
		t.title = t.title || "",
		n.bridge.fun.openNewWin(t, e)
	},
	i.exports = o
}, LTK["sdk/bridge/geolocation"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.getGeolocation"),
	o.get = function (t) {
		n.bridge.fun.getGeolocation(null, t)
	},
	i.exports = o
}, LTK["sdk/bridge/vip"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = {};
	n.registerFunc("fun.updateStatus"),
	o.update = function (t, e) {
		var i = {
			type: "vip",
			info: t
		};
		n.bridge.fun.updateStatus(i, e)
	},
	i.exports = o
}, LTK["sdk/bridge/hasFeature"] = function (t, e, i) {
	"use strict";
	var n = navigator.userAgent.toLowerCase(),
	o = /iphone|ipad|ipod/.test(n) ? !0 : !1,
	a = t("sdk/bridge/base/register");
	a.registerFunc("core.hasFeature"),
	i.exports = function (t, e) {
		t = o ? t : t.replace(".", "_"),
		a.bridge.core.hasFeature(t, e)
	}
}, LTK["sdk/bridge/gEvent"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/register"),
	o = t("sdk/bridge/base/event"),
	a = Object.create(o);
	a.enable = function (t, e) {
		var i = {
			eventName: t,
			"switch": 1
		};
		n.registerEvent(i, e)
	},
	a.disable = function (t, e) {
		var i = {
			eventName: t,
			"switch": 0
		};
		n.registerEvent(i, e)
	},
	i.exports = a
}, LTK["sdk/bridge/index"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/bridge/base/cb"),
	o = window.LetvJSBridge || {};
	o.callback = n.callback,
	o.fireEvent = n.fireEvent,
	window.LetvJSBridge = o;
	var a = {
		name: "bridge",
		version: "0.2.7"
	},
	r = t("sdk/common/index"),
	s = function () {
		a.app = t("sdk/bridge/app"),
		a.user = t("sdk/bridge/user"),
		a.video = t("sdk/bridge/video"),
		a.shake = t("sdk/bridge/shake"),
		a.share = t("sdk/bridge/share"),
		a.alert = t("sdk/bridge/alert"),
		a.device = t("sdk/bridge/device"),
		a.qrcode = t("sdk/bridge/qrcode"),
		a.screen = t("sdk/bridge/screen"),
		a.network = t("sdk/bridge/network"),
		a.browser = t("sdk/bridge/browser"),
		a.gallery = t("sdk/bridge/gallery"),
		a.webview = t("sdk/bridge/webview"),
		a.geolocation = t("sdk/bridge/geolocation"),
		a.vip = t("sdk/bridge/vip"),
		a.hasFeature = t("sdk/bridge/hasFeature"),
		a.gEvent = t("sdk/bridge/gEvent")
	},
	c = function () {
		arguments.length > 0 ? r.check(arguments[0].key) && s() : s()
	};
	window.LemSdk && LemSdk.access ? c() : a.config = c,
	window.LemSdk && (LemSdk.config = r.config),
	i.exports = a
}, LTK["components/user/getUserInfo"] = function (t, e, i) {
	var n,
	o = !1,
	a = [],
	r = function () {
		for (var t = 0, e = a.length; e > t; t++)
			a[t](n);
		a.length = 0
	};
	i.exports = function (t) {
		"function" == typeof t || (t = function () {});
		var e = $.cookie("ssouid");
		if (!e)
			return n = null, void t(null);
		if (n)
			return void t(n);
		if (a.push(t), !o) {
			o = !0;
			var i = $.cookie("sso_picture"),
			s = $.cookie("sso_icon");
			s = s ? s.split(",") : [i, i, i],
			n = {
				ssouid: e,
				username: $.cookie("m"),
				nickname: $.cookie("sso_nickname"),
				headicon: i,
				headicon_50: s[3],
				headicon_70: s[2],
				headicon_200: s[1]
			},
			$.ajax({
				url: le.api_host.yuanxian + "/letv/net/checkLogin.jsp?callback=?&location=" + location.href,
				dataType: "jsonp",
				success: function (t) {
					t || (t = {}),
					n.userlevel = t.isvip,
					n.lasttime = t.productEndTime,
					n.surplus = t.days,
					n.expireDate = t.endtime,
					o = !1,
					r()
				}
			})
		}
	}
}, !function (t, e) {
	"function" == typeof define && (define.amd || define.cmd) ? define(function () {
		return e(t)
	}) : e(t, !0)
}
(this, function (t, e) {
	function i(e, i, n) {
		t.WeixinJSBridge ? WeixinJSBridge.invoke(e, o(i), function (t) {
			s(e, t, n)
		}) : p(e, n)
	}
	function n(e, i, n) {
		t.WeixinJSBridge ? WeixinJSBridge.on(e, function (t) {
			n && n.trigger && n.trigger(t),
			s(e, t, i)
		}) : n ? p(e, n) : p(e, i)
	}
	function o(t) {
		return t = t || {},
		t.appId = C.appId,
		t.verifyAppId = C.appId,
		t.verifySignType = "sha1",
		t.verifyTimestamp = C.timestamp + "",
		t.verifyNonceStr = C.nonceStr,
		t.verifySignature = C.signature,
		t
	}
	function a(t, e) {
		return {
			scope: e,
			signType: "sha1",
			timeStamp: t.timestamp + "",
			nonceStr: t.nonceStr,
			addrSign: t.addrSign
		}
	}
	function r(t) {
		return {
			timeStamp: t.timestamp + "",
			nonceStr: t.nonceStr,
			"package": t["package"],
			paySign: t.paySign,
			signType: t.signType || "SHA1"
		}
	}
	function s(t, e, i) {
		var n,
		o,
		a;
		switch (delete e.err_code, delete e.err_desc, delete e.err_detail, n = e.errMsg, n || (n = e.err_msg, delete e.err_msg, n = c(t, n, i), e.errMsg = n), i = i || {}, i._complete && (i._complete(e), delete i._complete), n = e.errMsg || "", C.debug && !i.isInnerInvoke && alert(JSON.stringify(e)), o = n.indexOf(":"), a = n.substring(o + 1)) {
		case "ok":
			i.success && i.success(e);
			break;
		case "cancel":
			i.cancel && i.cancel(e);
			break;
		default:
			i.fail && i.fail(e)
		}
		i.complete && i.complete(e)
	}
	function c(t, e) {
		var i,
		n,
		o,
		a;
		if (e) {
			switch (i = e.indexOf(":"), t) {
			case m.config:
				n = "config";
				break;
			case m.openProductSpecificView:
				n = "openProductSpecificView";
				break;
			default:
				n = e.substring(0, i),
				n = n.replace(/_/g, " "),
				n = n.replace(/\b\w+\b/g, function (t) {
						return t.substring(0, 1).toUpperCase() + t.substring(1)
					}),
				n = n.substring(0, 1).toLowerCase() + n.substring(1),
				n = n.replace(/ /g, ""),
				-1 != n.indexOf("Wcpay") && (n = n.replace("Wcpay", "WCPay")),
				o = g[n],
				o && (n = o)
			}
			a = e.substring(i + 1),
			"confirm" == a && (a = "ok"),
			-1 != a.indexOf("failed_") && (a = a.substring(7)),
			-1 != a.indexOf("fail_") && (a = a.substring(5)),
			a = a.replace(/_/g, " "),
			a = a.toLowerCase(),
			("access denied" == a || "no permission to execute" == a) && (a = "permission denied"),
			"config" == n && "function not exist" == a && (a = "ok"),
			e = n + ":" + a
		}
		return e
	}
	function l(t) {
		var e,
		i,
		n,
		o;
		if (t) {
			for (e = 0, i = t.length; i > e; ++e)
				n = t[e], o = m[n], o && (t[e] = o);
			return t
		}
	}
	function p(t, e) {
		if (C.debug && !e.isInnerInvoke) {
			var i = g[t];
			i && (t = i),
			e && e._complete && delete e._complete,
			console.log('"' + t + '",', e || "")
		}
	}
	function h() {
		if (!("6.0.2" > k || T.systemType < 0)) {
			var t = new Image;
			T.appId = C.appId,
			T.initTime = S.initEndTime - S.initStartTime,
			T.preVerifyTime = S.preVerifyEndTime - S.preVerifyStartTime,
			I.getNetworkType({
				isInnerInvoke: !0,
				success: function (e) {
					T.networkType = e.networkType;
					var i = "https://open.weixin.qq.com/sdk/report?v=" + T.version + "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion + "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime + "&p=" + T.preVerifyTime + "&u=" + T.url;
					t.src = i
				}
			})
		}
	}
	function u() {
		return (new Date).getTime()
	}
	function d(e) {
		b && (t.WeixinJSBridge ? e() : v.addEventListener && v.addEventListener("WeixinJSBridgeReady", e, !1))
	}
	function f() {
		I.invoke || (I.invoke = function (e, i, n) {
			t.WeixinJSBridge && WeixinJSBridge.invoke(e, o(i), n)
		}, I.on = function (e, i) {
			t.WeixinJSBridge && WeixinJSBridge.on(e, i);
		})
	}
	var m,
	g,
	v,
	_,
	w,
	b,
	y,
	x,
	k,
	S,
	T,
	C,
	P,
	L,
	I;
	return t.jWeixin ? void 0 : (m = {
			config: "preVerifyJSAPI",
			onMenuShareTimeline: "menu:share:timeline",
			onMenuShareAppMessage: "menu:share:appmessage",
			onMenuShareQQ: "menu:share:qq",
			onMenuShareWeibo: "menu:share:weiboApp",
			previewImage: "imagePreview",
			getLocation: "geoLocation",
			openProductSpecificView: "openProductViewWithPid",
			addCard: "batchAddCard",
			openCard: "batchViewCard",
			chooseWXPay: "getBrandWCPayRequest"
		}, g = function () {
		var t,
		e = {};
		for (t in m)
			e[m[t]] = t;
		return e
	}
		(), v = t.document, _ = v.title, w = navigator.userAgent.toLowerCase(), b = -1 != w.indexOf("micromessenger"), y = -1 != w.indexOf("android"), x = -1 != w.indexOf("iphone") || -1 != w.indexOf("ipad"), k = function () {
		var t = w.match(/micromessenger\/(\d+\.\d+\.\d+)/) || w.match(/micromessenger\/(\d+\.\d+)/);
		return t ? t[1] : ""
	}
		(), S = {
			initStartTime: u(),
			initEndTime: 0,
			preVerifyStartTime: 0,
			preVerifyEndTime: 0
		}, T = {
			version: 1,
			appId: "",
			initTime: 0,
			preVerifyTime: 0,
			networkType: "",
			isPreVerifyOk: 1,
			systemType: x ? 1 : y ? 2 : -1,
			clientVersion: k,
			url: encodeURIComponent(location.href)
		}, C = {}, P = {
			_completes: []
		}, L = {
			state: 0,
			res: {}
		}, d(function () {
			S.initEndTime = u()
		}), I = {
			config: function (t) {
				C = t,
				p("config", t),
				d(function () {
					i(m.config, {
						verifyJsApiList: l(C.jsApiList)
					}, function () {
						P._complete = function (t) {
							S.preVerifyEndTime = u(),
							L.state = 1,
							L.res = t
						},
						P.success = function () {
							T.isPreVerifyOk = 0
						},
						P.fail = function (t) {
							P._fail ? P._fail(t) : L.state = -1
						};
						var t = P._completes;
						return t.push(function () {
							C.debug || h()
						}),
						P.complete = function (e) {
							for (var i = 0, n = t.length; n > i; ++i)
								t[i](e);
							P._completes = []
						},
						P
					}
						()),
					S.preVerifyStartTime = u()
				}),
				C.beta && f()
			},
			ready: function (t) {
				0 != L.state ? t() : (P._completes.push(t), !b && C.debug && t())
			},
			error: function (t) {
				"6.0.2" > k || (-1 == L.state ? t(L.res) : P._fail = t)
			},
			checkJsApi: function (t) {
				var e = function (t) {
					var e,
					i,
					n = t.checkResult;
					for (e in n)
						i = g[e], i && (n[i] = n[e], delete n[e]);
					return t
				};
				i("checkJsApi", {
					jsApiList: l(t.jsApiList)
				}, function () {
					return t._complete = function (t) {
						if (y) {
							var i = t.checkResult;
							i && (t.checkResult = JSON.parse(i))
						}
						t = e(t)
					},
					t
				}
					())
			},
			onMenuShareTimeline: function (t) {
				n(m.onMenuShareTimeline, {
					complete: function () {
						i("shareTimeline", {
							title: t.title || _,
							desc: t.title || _,
							img_url: t.imgUrl,
							link: t.link || location.href
						}, t)
					}
				}, t)
			},
			onMenuShareAppMessage: function (t) {
				n(m.onMenuShareAppMessage, {
					complete: function () {
						i("sendAppMessage", {
							title: t.title || _,
							desc: t.desc || "",
							link: t.link || location.href,
							img_url: t.imgUrl,
							type: t.type || "link",
							data_url: t.dataUrl || ""
						}, t)
					}
				}, t)
			},
			onMenuShareQQ: function (t) {
				n(m.onMenuShareQQ, {
					complete: function () {
						i("shareQQ", {
							title: t.title || _,
							desc: t.desc || "",
							img_url: t.imgUrl,
							link: t.link || location.href
						}, t)
					}
				}, t)
			},
			onMenuShareWeibo: function (t) {
				n(m.onMenuShareWeibo, {
					complete: function () {
						i("shareWeiboApp", {
							title: t.title || _,
							desc: t.desc || "",
							img_url: t.imgUrl,
							link: t.link || location.href
						}, t)
					}
				}, t)
			},
			startRecord: function (t) {
				i("startRecord", {}, t)
			},
			stopRecord: function (t) {
				i("stopRecord", {}, t)
			},
			onVoiceRecordEnd: function (t) {
				n("onVoiceRecordEnd", t)
			},
			playVoice: function (t) {
				i("playVoice", {
					localId: t.localId
				}, t)
			},
			pauseVoice: function (t) {
				i("pauseVoice", {
					localId: t.localId
				}, t)
			},
			stopVoice: function (t) {
				i("stopVoice", {
					localId: t.localId
				}, t)
			},
			onVoicePlayEnd: function (t) {
				n("onVoicePlayEnd", t)
			},
			uploadVoice: function (t) {
				i("uploadVoice", {
					localId: t.localId,
					isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
				}, t)
			},
			downloadVoice: function (t) {
				i("downloadVoice", {
					serverId: t.serverId,
					isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
				}, t)
			},
			translateVoice: function (t) {
				i("translateVoice", {
					localId: t.localId,
					isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
				}, t)
			},
			chooseImage: function (t) {
				i("chooseImage", {
					scene: "1|2"
				}, function () {
					return t._complete = function (t) {
						if (y) {
							var e = t.localIds;
							e && (t.localIds = JSON.parse(e))
						}
					},
					t
				}
					())
			},
			previewImage: function (t) {
				i(m.previewImage, {
					current: t.current,
					urls: t.urls
				}, t)
			},
			uploadImage: function (t) {
				i("uploadImage", {
					localId: t.localId,
					isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
				}, t)
			},
			downloadImage: function (t) {
				i("downloadImage", {
					serverId: t.serverId,
					isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
				}, t)
			},
			getNetworkType: function (t) {
				var e = function (t) {
					var e,
					i,
					n,
					o = t.errMsg;
					if (t.errMsg = "getNetworkType:ok", e = t.subtype, delete t.subtype, e)
						t.networkType = e;
					else
						switch (i = o.indexOf(":"), n = o.substring(i + 1)) {
						case "wifi":
						case "edge":
						case "wwan":
							t.networkType = n;
							break;
						default:
							t.errMsg = "getNetworkType:fail"
						}
					return t
				};
				i("getNetworkType", {}, function () {
					return t._complete = function (t) {
						t = e(t)
					},
					t
				}
					())
			},
			openLocation: function (t) {
				i("openLocation", {
					latitude: t.latitude,
					longitude: t.longitude,
					name: t.name || "",
					address: t.address || "",
					scale: t.scale || 28,
					infoUrl: t.infoUrl || ""
				}, t)
			},
			getLocation: function (t) {
				i(m.getLocation, function () {
					var e = a(t, "jsapi_location");
					return e.type = "wgs84",
					e
				}
					(), function () {
					return t._complete = function (t) {
						delete t.type
					},
					t
				}
					())
			},
			hideOptionMenu: function (t) {
				i("hideOptionMenu", {}, t)
			},
			showOptionMenu: function (t) {
				i("showOptionMenu", {}, t)
			},
			closeWindow: function (t) {
				i("closeWindow", {
					immediate_close: t && t.immediateClose || 0
				}, t)
			},
			hideMenuItems: function (t) {
				i("hideMenuItems", {
					menuList: t.menuList
				}, t)
			},
			showMenuItems: function (t) {
				i("showMenuItems", {
					menuList: t.menuList
				}, t)
			},
			hideAllNonBaseMenuItem: function (t) {
				i("hideAllNonBaseMenuItem", {}, t)
			},
			showAllNonBaseMenuItem: function (t) {
				i("showAllNonBaseMenuItem", {}, t)
			},
			scanQRCode: function (t) {
				i("scanQRCode", {
					desc: t.desc,
					needResult: t.needResult || 0,
					scanType: t.scanType || ["qrCode", "barCode"]
				}, t)
			},
			openProductSpecificView: function (t) {
				i(m.openProductSpecificView, {
					pid: t.productId,
					view_type: t.viewType || 0
				}, t)
			},
			addCard: function (t) {
				var e,
				n,
				o,
				a,
				r = t.cardList,
				s = [];
				for (e = 0, n = r.length; n > e; ++e)
					o = r[e], a = {
						card_id: o.cardId,
						card_ext: o.cardExt
					},
				s.push(a);
				i(m.addCard, {
					card_list: s
				}, function () {
					return t._complete = function (t) {
						var e,
						i,
						n,
						o = t.card_list;
						if (o) {
							for (o = JSON.parse(o), e = 0, i = o.length; i > e; ++e)
								n = o[e], n.cardId = n.card_id, n.cardExt = n.card_ext, n.isSuccess = n.is_succ ? !0 : !1, delete n.card_id, delete n.card_ext, delete n.is_succ;
							t.cardList = o,
							delete t.card_list
						}
					},
					t
				}
					())
			},
			chooseCard: function (t) {
				i("chooseCard", {
					app_id: C.appId,
					location_id: t.shopId || "",
					sign_type: t.signType || "SHA1",
					card_id: t.cardId || "",
					card_type: t.cardType || "",
					card_sign: t.cardSign,
					time_stamp: t.timestamp + "",
					nonce_str: t.nonceStr
				}, function () {
					return t._complete = function (t) {
						t.cardList = t.choose_card_info,
						delete t.choose_card_info
					},
					t
				}
					())
			},
			openCard: function (t) {
				var e,
				n,
				o,
				a,
				r = t.cardList,
				s = [];
				for (e = 0, n = r.length; n > e; ++e)
					o = r[e], a = {
						card_id: o.cardId,
						code: o.code
					},
				s.push(a);
				i(m.openCard, {
					card_list: s
				}, t)
			},
			chooseWXPay: function (t) {
				i(m.chooseWXPay, r(t), t)
			}
		}, e && (t.wx = t.jWeixin = I), I)
}), LTK["components/player/mPlayer"] = function (t, e, i) {
	"use strict";
	function n() {
		"undefined" == typeof window.__canControlPlayer && (window.__canControlPlayer = !0);
		var t,
		e = $("video");
		return e.length > 0 && window.__canControlPlayer ? t = e.parent().parent() : null
	}
	function o() {
		var t = n();
		t && t.css("display", "")
	}
	function a() {
		var t = n();
		t && t.css("display", "none")
	}
	i.exports = {
		show: o,
		hide: a
	}
}, LTK["sdk/share/assign"] = function (t, e, i) {
	"use strict";
	function n(t) {
		if (null === t || void 0 === t)
			throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(t)
	}
	function o() {
		try {
			if (!Object.assign)
				return !1;
			var t = new String("abc");
			if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0])
				return !1;
			for (var e = {}, i = 0; 10 > i; i++)
				e["_" + String.fromCharCode(i)] = i;
			var n = Object.getOwnPropertyNames(e).map(function (t) {
					return e[t]
				});
			if ("0123456789" !== n.join(""))
				return !1;
			var o = {};
			return "abcdefghijklmnopqrst".split("").forEach(function (t) {
				o[t] = t
			}),
			"abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, o)).join("") ? !1 : !0
		} catch (a) {
			return !1
		}
	}
	var a = Object.prototype.hasOwnProperty,
	r = Object.prototype.propertyIsEnumerable;
	i.exports = o() ? Object.assign : function (t, e) {
		for (var i, o, s = n(t), c = 1; c < arguments.length; c++) {
			i = Object(arguments[c]);
			for (var l in i)
				a.call(i, l) && (s[l] = i[l]);
			if (Object.getOwnPropertySymbols) {
				o = Object.getOwnPropertySymbols(i);
				for (var p = 0; p < o.length; p++)
					r.call(i, o[p]) && (s[o[p]] = i[o[p]])
			}
		}
		return s
	}
}, LTK["sdk/share/appShare"] = function (t, e, i) {
	"use strict";
	var n = navigator.userAgent.toLowerCase(),
	o = /iphone|ipad|ipod/.test(n) ? !0 : !1,
	a = n.indexOf("letvclient") > -1 || n.indexOf("letvmobileclient") > -1,
	r = "letvjsbridge",
	s = {},
	c = {
		fun: {}
	},
	l = function (t, e) {
		if (e = e || "{}", s[t])
			try {
				s[t](JSON.parse(e)),
				delete s[t]
			} catch (i) {}
		var n = document.getElementById(t);
		n && n.parentNode.removeChild(n)
	};
	window.LetvJSBridge = window.LetvJSBridge || {},
	window.LetvJSBridge.shareback = l;
	var p = function (t, e, i) {
		var n = t.split(".");
		2 === n.length && (c[n[0]][n[1]] = function () {
			var t,
			e,
			i = "letv_bridge_" + (new Date).getTime() + Math.floor(1e4 * Math.random()),
			a = o ? n.join(".") : n.join("_"),
			r = {};
			if (0 === arguments.length ? (t = "{}", e = function () {}) : 1 === arguments.length ? "function" != typeof arguments[0] ? (t = arguments[0] || "{}", e = function () {}) : (t = "{}", e = "function" == typeof arguments[0] ? arguments[0] : function () {}) : (t = arguments[0] || "{}", e = "function" == typeof arguments[1] ? arguments[1] : function () {}), "hasFeature" !== n[1] && "string" == typeof t)
				try {
					t = JSON.parse(t)
				} catch (c) {
					return void alert("å‚æ•°ä¸æ˜¯ä¸€ä¸ªæœ‰æ•ˆçš„JSONæ ¼å¼")
				}
			s[i] = e,
			r.name = t,
			r.callback_id = i,
			r.callback = "LetvJSBridge.shareback",
			r.func = a,
			d(JSON.stringify([r]), a, i)
		})
	},
	h = function (t, e, i) {
		try {
			var n = document.createElement("iframe");
			n.id = i,
			n.style.display = "none",
			document.documentElement.appendChild(n),
			n.src = r + ":" + e + ":" + t
		} catch (o) {}
	},
	u = function (t, e) {
		try {
			window.LetvJSBridge_For_Android[e](t)
		} catch (i) {}
	},
	d = o ? h : u;
	["fun.callShare", "fun.setShare"].forEach(p),
	c.isAppEnv = a,
	i.exports = c
}, LTK["sdk/share/url"] = function (t, e, i) {
	"use strict";
	var n = {
		_query: null,
		getParam: function (t) {
			var e = this._query;
			return null === e && (e = this._query = this.parseParam(window.location.search.slice(1))),
			t ? e[t.toLowerCase()] || "" : e
		},
		serializeParam: function (t) {
			var e,
			i,
			n = [];
			for (e in t)
				i = t[e], "" !== i && t.hasOwnProperty(e) && n.push(e + "=" + encodeURIComponent(i));
			return n.join("&")
		},
		parseParam: function (t) {
			t = t.split("#")[0],
			t.indexOf("?") > 0 && (t = t.split("?")[1]),
			t = t.split("&");
			for (var e, i, n, o = {}, a = 0, r = t.length; r > a; a++)
				e = t[a], e && (i = e.indexOf("="), n = e.slice(i + 1), n && i > 0 && (o[e.slice(0, i).toLowerCase()] = decodeURIComponent(n)));
			return o
		},
		setParam: function (t, e) {
			var i = "";
			if (t.indexOf("#") > -1 && (t = t.split("#"), i = "#" + t[1], t = t[0]), t.indexOf("?") > 0) {
				var n = this.parseParam(t);
				for (var o in n)
					e.hasOwnProperty(o) || n.hasOwnProperty(o) && (e[o] = n[o]);
				t = t.split("?")[0]
			}
			return t + "?" + this.serializeParam(e) + i
		}
	};
	i.exports = n
}, LTK["sdk/share/jsonp"] = function (t, e, i) {
	"use strict";
	var n = function (t, e) {
		var i = Math.floor((new Date).getTime() / 1e3);
		t += "&callback=jsonp" + i;
		var n = document.createElement("script");
		n.src = t,
		n.id = "jsonpScript",
		document.body.appendChild(n),
		window["jsonp" + i] = function (t) {
			document.getElementById("jsonpScript") && document.body.removeChild(n),
			e(t)
		}
	};
	i.exports = n
}, LTK["sdk/share/index"] = function (t, e, i) {
	"use strict";
	var n = t("sdk/share/assign"),
	o = t("sdk/share/appShare"),
	a = t("sdk/share/url"),
	r = t("sdk/share/jsonp"),
	s = ["weixin", "weibo", "qzone", "tw", "fb"].join(","),
	c = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"],
	l = function () {},
	p = {
		tsina: "1414119400",
		debug: !1,
		appId: "",
		timestamp: "",
		nonceStr: "",
		signature: "",
		jsApiList: c
	},
	h = {
		type: "webpage",
		title: "",
		desc: "",
		summary: "",
		link: "",
		imgUrl: "",
		onsuccess: l,
		oncancel: l
	},
	u = function (t, e) {
		e.success = function () {
			h.onsuccess({
				type: t
			})
		},
		e.cancel = function () {
			h.oncancel({
				type: t
			})
		},
		wx && wx[t](e)
	},
	d = function (t) {
		var e = h.link.indexOf("ref=share_" + t),
		i = h.link.indexOf("?"),
		n = /&$/.test(h.link),
		o = -1 === e ? -1 === i ? h.link + "?ref=share_" + t : n ? h.link + "ref=share_" + t : h.link + "&ref=share_" + t : h.link;
		return o
	},
	f = function (t) {
		var e = "http://s.api.m.le.com/api/newwxparam?_debug=1&url=";
		e += encodeURIComponent(window.location.href.split("#")[0]),
		r(e, function (e) {
			n(p, e.data),
			t()
		})
	},
	m = {
		weixin: function () {
			if (!window.wx)
				return void console.log("è¯·å…ˆå¼•å…¥å¾®ä¿¡JSSDKï¼");
			var t = function () {
				wx.config({
					debug: p.debug,
					appId: p.appId,
					timestamp: p.timestamp,
					nonceStr: p.nonceStr,
					signature: p.signature,
					jsApiList: p.jsApiList
				}),
				wx.error(function () {}),
				wx.ready(function () {
					var t = {
						title: h.title,
						desc: h.desc,
						link: h.link,
						imgUrl: h.imgUrl
					};
					u("onMenuShareTimeline", t),
					u("onMenuShareAppMessage", t),
					u("onMenuShareQQ", t),
					u("onMenuShareWeibo", t)
				})
			};
			p.appId ? t() : f(t)
		},
		weibo: function () {
			var t = "http://service.weibo.com/share/share.php?";
			t += "url=" + encodeURIComponent(d("tsina")),
			t += "&title=" + encodeURIComponent(h.desc),
			t += "&pic=" + encodeURIComponent(h.imgUrl),
			t += "&appkey=" + encodeURIComponent(p.tsina),
			window.location.href = t
		},
		qzone: function () {
			var t = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
			t += "url=" + encodeURIComponent(d("qzone")),
			t += "&title=" + encodeURIComponent(h.title),
			t += "&desc=" + encodeURIComponent(h.desc),
			t += "&summary=" + encodeURIComponent(h.summary),
			t += "&site=",
			t += "&pics=" + encodeURIComponent(h.imgUrl),
			window.open(t, "_blank")
		},
		fb: function () {
			var t = "https://www.facebook.com/sharer/sharer.php?";
			t += "u=" + encodeURIComponent(d("facebook")),
			t += "&display=popup&ref=plugin&src=share_button&app_id=",
			window.open(t, "_blank")
		},
		tw: function () {
			var t = "https://twitter.com/intent/tweet?";
			t += "url=" + encodeURIComponent(d("twitter")),
			t += "&text=" + encodeURIComponent(h.title),
			t += "&related=msite",
			window.location.href = t
		}
	},
	g = function () {
		h.title = h.title && h.title.length > 50 ? h.title.substr(0, 50) + "..." : h.title,
		h.desc = h.desc && h.desc.length > 140 ? h.desc.substr(0, 140) + "..." : h.desc,
		h.summary = h.summary && h.summary.length > 50 ? h.summary.substr(0, 50) + "..." : h.summary,
		h.onsuccess = h.onsuccess || l,
		h.oncancel = h.oncancel || l
	},
	v = function () {
		return {
			type: h.type || "webpage",
			title: h.title,
			webUrl: h.link,
			webImage: h.imgUrl,
			desc: h.desc
		}
	},
	_ = {
		callShare: function (t) {
			"object" == typeof t && -1 !== s.indexOf(t.channelName) && (n(h, t), "weixin" === t.channelName && (n(p, h.cfg), "1" !== a.getParam("_wxdebug") || p.debug || (p.debug = !0)), delete h.cfg, g(), m[h.channelName]())
		},
		callAppShare: function (t) {
			n(h, t),
			delete h.cfg,
			g();
			var e = function (t) {
				200 === t.result ? h.onsuccess(t) : h.oncancel(t)
			};
			o.isAppEnv && o.fun.callShare(v(), e)
		},
		setAppShare: function (t) {
			n(h, t),
			delete h.cfg,
			g();
			var e = function (t) {
				200 === t.result ? h.onsuccess(t) : h.oncancel(t)
			};
			o.isAppEnv && o.fun.setShare(v(), e)
		}
	},
	w = {
		name: "share",
		version: "0.2.6"
	},
	b = t("sdk/common/index"),
	y = function () {
		w.callShare = _.callShare,
		w.setAppShare = _.setAppShare,
		w.callAppShare = _.callAppShare
	},
	x = function () {
		arguments.length > 0 ? b.check(arguments[0].key) && y() : y()
	};
	window.LemSdk && LemSdk.access ? x() : w.config = x,
	window.LemSdk && (LemSdk.config = b.config),
	i.exports = w
}, LTK["air/lang/extend"] = function (t, e, i) {
	var n = function (t, e, i) {
		var n;
		if (i === !1)
			for (n in e)
				!t.hasOwnProperty(n) && e.hasOwnProperty(n) && (t[n] = e[n]);
		else
			for (n in e)
				e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	};
	i.exports = n
}, LTK["air/env/ua"] = function (t, e, i) {
	var n = {},
	o = navigator.userAgent.toLowerCase(),
	a = {
		platforms: [{
				tag: "windows phone",
				flags: ["winPhone", "mobile"]
			}, {
				tag: "win",
				flags: ["win"]
			}, {
				tag: "ipad",
				flags: ["ipad", "ios"]
			}, {
				tag: "ipod",
				flags: ["ipod", "ios", "mobile"]
			}, {
				tag: "iphone",
				flags: ["iphone", "ios", "mobile"]
			}, {
				tag: "macintosh",
				flags: ["mac", "ios"]
			}, {
				tag: "android",
				flags: ["android"]
			}, {
				tag: "blackberry",
				flags: ["blackberry", "mobile"]
			}, {
				tag: "linux",
				flags: ["linux"]
			}
		],
		browsers: [{
				tag: "micromessenger",
				flags: ["weixin"]
			}, {
				tag: "__weibo__",
				flags: ["weibo"]
			}, {
				tag: /ucbrowser|ucweb/,
				flags: ["uc"]
			}, {
				tag: "qqbrowser",
				flags: ["qq"]
			}, {
				tag: /letvmobileclient\s+android;letv;/,
				flags: ["superLetvClient"]
			}, {
				tag: /leuibrowser|eui browser/,
				flags: ["letvMobile", "letvBrowser"]
			}, {
				tag: "baiduboxapp",
				flags: ["baidubox"]
			}, {
				tag: "baidubrowser",
				flags: ["baidu"]
			}, {
				tag: "xiaomi",
				flags: ["xiaomi"]
			}, {
				tag: "iemobile",
				flags: ["ieMobile", "mobile"]
			}, {
				tag: "msie ",
				flags: ["msie"]
			}, {
				tag: "chrome",
				flags: ["chrome"]
			}, {
				tag: "crios",
				flags: ["chrome"]
			}, {
				tag: "firefox",
				flags: ["firefox"]
			}, {
				tag: "opera",
				flags: ["opera"]
			}, {
				tag: /iphone.+?safari/,
				flags: ["safari"]
			}
		],
		engines: [{
				tag: "trident",
				flags: ["trident"]
			}, {
				tag: "webkit",
				flags: ["webkit"]
			}, {
				tag: "gecko",
				flags: ["gecko"]
			}, {
				tag: "presto",
				flags: ["presto"]
			}
		]
	},
	r = function (t) {
		var e,
		i,
		a,
		r,
		s,
		c,
		l;
		for (a = 0, r = t.length; r > a; a++)
			if (i = t[a], s = i.tag, c = "string" == typeof s ? o.indexOf(s) > -1 : s.test(o)) {
				if (e = i.flags)
					for (l = e.length; l--; )
						n[e[l]] = !0;
				break
			}
	};
	r(a.platforms),
	r(a.browsers),
	r(a.engines),
	n.mobile || (n.mobile = o.indexOf("mobile") > 0),
	n.android && (n.androidPad = !n.mobile),
	n.msie || (n.msie = !!window.ActiveXObject || "ActiveXObject" in window);
	try {
		n.letvTv = "function" == typeof LetvFish.getBrowserType,
		n.letvTv && (n.letvBox = o.indexOf("letvc1") > 0, n.letvS40 = o.indexOf("letvx40") > 0, n.letvX60 = o.indexOf("letvx60") > 0)
	} catch (s) {}
	n.letvClient = o.indexOf("letvclient") > -1 || o.indexOf("letvmobileclient") > -1,
	n.letvMobile || (n.letvMobile = /\bx\d\d\d\b/.test(o)),
	n.src = o,
	i.exports = n
}, LTK["components/com_base/global"] = function (t, e, i) {
	"use strict";
	var n = {
		init: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {
			window.info = window.info || {},
			this.geo = Cookie.get("geo") || "CN_0_0"
		},
		initEvent: function () {},
		initPage: function () {
			window.info.lang = window.info.lang || "zh_cn",
			window.info.region = window.info.region || "CN",
			window.info.geo = this.geo
		}
	};
	n.init()
}, LTK["components/langPack/pub"] = function (t, e, i) {
	"use strict";
	t("components/com_base/global");
	var n = {
		pre_end: "è¯•çœ‹å·²ç»“æŸ",
		pre_time: "3ç§’",
		pre_full: "è§‚çœ‹å®Œæ•´ç‰ˆ",
		downapp: "ä¸‹è½½ä¹è§†è§†é¢‘APP",
		downapp_ty: "ä¸‹è½½ä¹è§†ä½“è‚²APP",
		timeout1: "ç¨‹åºå‘˜å“¥å“¥æ‰“çžŒç¡ç¡ç€äº†",
		timeout2: "æˆ³è¿™é‡Œå«ä»–èµ·åºŠ",
		timeout3: "ç¡å¾—å¤ªé¦™äº†,ç«Ÿç„¶æ²¡æœ‰é†’",
		timeout4: "ç»§ç»­æˆ³ä»–",
		timeout5: "ç¨‹åºå‘˜å“¥å“¥å¤ªç–²åŠ³,å†è®©ä»–ç¡ä¼šå§",
		timeout6: "ç¨åŽå†è¯•",
		browser: "//i2.letvimg.com/lc02_img/201512/02/14/41/browser.png",
		watch_now: "ç«‹å³è§‚çœ‹",
		shareImg: "//i0.letvimg.com/lc03_img/201508/21/10/59/1058/share.png",
		layerImg: "//i1.letvimg.com/lc05_img/201601/11/14/37/1436/ms_layer.png",
		topdl: "ä½¿ç”¨ä¹è§†è§†é¢‘APPçœ‹ç›´æ’­æ›´æµç•…",
		topapp: "ä¸‹è½½App",
		topdl_ty: "ä½¿ç”¨ä¹è§†ä½“è‚²APP çœ‹èµ›äº‹ç›´æ’­æ›´æµç•…",
		topdl_pre1: "è¯•çœ‹",
		topdl_pre2: "åˆ†é’Ÿï¼Œå®Œæ•´ç‰ˆå°½åœ¨ä¹è§†è§†é¢‘APP",
		loadmore1: "ä¸Šæ‹‰åŠ è½½æ›´å¤š",
		loadmore2: "ä¸‹æ‹‰åŠ è½½æ›´å¤š",
		loadmore3: "åŠ è½½ä¸­...",
		loadmore4: "åŠ è½½å¤±è´¥ï¼Œè¯·ä¸Šæ‹‰é‡è¯•",
		loadmore5: "åŠ è½½å¤±è´¥ï¼Œè¯·ä¸‹æ‹‰é‡è¯•",
		bdphone1: "ä¸ºå……åˆ†ä¿æŠ¤æ‚¨ä¿¡æ¯å®‰å…¨å’Œåˆæ³•æƒåˆ©",
		bdphone2: "è¯·ç»‘å®šæ‰‹æœºåŽæ–¹å¯è¯„è®º",
		bdphone3: "å‰å¾€ç»‘å®š",
		qq: "QQç©ºé—´",
		wb: "æ–°æµªå¾®åš",
		wx: "å¾®ä¿¡",
		cancel: "å–æ¶ˆ",
		layerImg2: "//i2.letvimg.com/lc03_img/201510/20/17/45/img_collect.png",
		pcover1: "æœ¬ç‰‡ä¸ºä»˜è´¹å½±ç‰‡ï¼Œå¼€é€šä¼šå‘˜å¯å…è´¹è§‚çœ‹",
		pcover2: "è¯•çœ‹å·²ç»“æŸï¼Œç»§ç»­è§‚çœ‹è¯·å¼€é€šä¼šå‘˜",
		pcover3: "å¼€é€šä¼šå‘˜",
		pcover4: "å·²æ˜¯ä¼šå‘˜ï¼Œç«‹å³ç™»å½•",
		item_w: " ä¸‡",
		item_y: " äº¿",
		vip0: "ä¼šå‘˜æžé€Ÿçœ‹è§†é¢‘",
		vip1: "ä¹æ¬¡å…ƒå½±è§†ä¼šå‘˜",
		vip2: "ä¹è§†è¶…çº§å½±è§†ä¼šå‘˜"
	},
	o = {
		pre_end: "Preview has ended",
		pre_time: "",
		pre_full: "",
		downapp: "Watch the full movie by downloading the Le",
		downapp_ty: "Use LeSports now",
		timeout1: "The computer programmer fell asleep",
		timeout2: "Call him up here",
		timeout3: "Sleep too sweet, not even wake up",
		timeout4: "Continue to call him",
		timeout5: "The computer programmer is too tired, then let him sleep",
		timeout6: "Try again later",
		browser: "//i3.letvimg.com/lc06_img/201606/20/16/20/1619/us_browser.png",
		watch_now: "Watch now",
		shareImg: "//i0.letvimg.com/lc06_img/201606/20/16/51/1650/us_share.png",
		layerImg: "//i2.letvimg.com/lc07_img/201606/20/18/34/1833/en_layer.png",
		topdl: "Use Le app now!",
		topapp: "Download App",
		topdl_ty: "Use Le Sports app now!",
		topdl_pre1: "",
		topdl_pre2: "",
		loadmore1: "Pull up to load more",
		loadmore2: "Down to load more",
		loadmore3: "Loading...",
		loadmore4: "Failed to load, please try again",
		loadmore5: "Failed to load, please try again",
		bdphone1: "To fully protect your information security and lawful rights",
		bdphone2: "You can remark only after you peg your mobile phone number to your account",
		bdphone3: "To linked up with your mobile",
		qq: "Q-Zone",
		wb: "Weibo",
		wx: "WeChat",
		cancel: "Cancel",
		layerImg2: "//i3.letvimg.com/lc06_img/201606/23/17/46/1744/en_img_collect.png",
		pcover1: "This movie is a premium movie free for members",
		pcover2: "The preview has ended. To continue, please activate membership",
		pcover3: "Activate membership",
		pcover4: "Log in now",
		item_w: "",
		item_y: "",
		vip0: "Express viewing membership",
		vip1: "LeEco+ Mobile",
		vip2: "Super LePass"
	},
	a = {
		pre_end: "è©¦ç‡å·²çµæŸ",
		pre_time: "3ç§’",
		pre_full: "è§€çœ‹å®Œæ•´ç‰ˆ",
		downapp: "ä¸‹è¼‰æ¨‚è¦–è¦–é » APP",
		downapp_ty: "ä¸‹è¼‰æ¨‚è¦–é«”è‚² APP",
		timeout1: "ç¨‹å¼å¸«å“¥å“¥æ‰“çžŒç¡ç¡è‘—äº†",
		timeout2: "æˆ³é€™è£¡å«ä»–èµ·åºŠ",
		timeout3: "ç¡çš„å¤ªé¦™äº†ï¼Œç«Ÿç„¶æ²’æœ‰é†’",
		timeout4: "ç¹¼çºŒæˆ³ä»–",
		timeout5: "ç¨‹å¼å¸«å“¥å“¥å¤ªç–²å‹žï¼Œå†è®“ä»–ç¡æœƒå…’å§",
		timeout6: "ç¨å¾Œå†è©¦",
		browser: "//i2.letvimg.com/lc06_img/201606/20/16/20/1619/hk_browser.png",
		watch_now: "ç«‹å³è§€çœ‹",
		shareImg: "//i1.letvimg.com/lc06_img/201606/20/16/51/1650/hk_share.png",
		layerImg: "//i1.letvimg.com/lc07_img/201606/20/18/34/1833/hk_layer.png",
		topdl: "ä½¿ç”¨æ¨‚è¦–è¦–é » APP çœ‹ç›´æ’­æ›´æµæš¢",
		topapp: "ä¸‹è¼‰App",
		topdl_ty: "ä½¿ç”¨æ¨‚è¦–é«”è‚²APP çœ‹è³½äº‹ç›´æ’­æ›´æµæš¢",
		topdl_pre1: "è©¦çœ‹",
		topdl_pre2: "åˆ†é˜ï¼Œå®Œæ•´ç‰ˆç›¡åœ¨æ¨‚è¦–è¦–é »APP",
		loadmore1: "ä¸Šæ‹‰è¼‰å…¥æ›´å¤š",
		loadmore2: "ä¸‹æ‹‰è¼‰å…¥æ›´å¤š",
		loadmore3: "åŠ è¼‰ä¸­...",
		loadmore4: "åŠ è¼‰å¤±æ•—ï¼Œè«‹ä¸Šæ‹‰é‡è©¦",
		loadmore5: "åŠ è¼‰å¤±æ•—ã€‚è«‹ä¸‹æ‹‰é‡è©¦",
		bdphone1: "çˆ²å……åˆ†ä¿è­·æ‚¨çš„ä¿¡æ¯å®‰å…¨å’Œåˆæ³•æ¬Šåˆ©",
		bdphone2: "è«‹ç¶å®šæ‰‹æé›»è©±å¾Œå†è©•è«–",
		bdphone3: "åŽ»ç¶å®šæ‰‹æé›»è©±è™Ÿç¢¼",
		qq: "QQç©ºé–“",
		wb: "æ–°æµªå¾®åš",
		wx: "å¾®ä¿¡",
		cancel: "å–æ¶ˆ",
		layerImg2: "//i3.letvimg.com/lc06_img/201606/23/17/46/1744/hk_img_collect.png",
		pcover1: "æœ¬ç‰‡ç‚ºä»˜è²»å½±ç‰‡ï¼Œé–‹é€šæœƒå“¡å¯å…è²»è§€çœ‹",
		pcover2: "è©¦ç‡å·²çµæŸï¼Œç¹¼çºŒè§€çœ‹è«‹é–‹é€šæœƒå“¡",
		pcover3: "é–‹é€šæœƒå“¡",
		pcover4: "å·²æ˜¯æœƒå“¡ï¼Œç«‹å³ç™»å…¥",
		item_w: " è¬",
		item_y: " å„„",
		vip0: "æœƒå“¡æ¥µé€Ÿçœ‹è¦–é »",
		vip1: "æ¨‚æ¬¡å…ƒå½±è¦–æœƒå“¡",
		vip2: "æ¨‚è¦–è¶…ç´šå½±è¦–æœƒå“¡"
	},
	r = {
		init: function () {
			this.initDom(),
			this.initLangPack()
		},
		initDom: function () {
			this.zh_cn = n,
			this.en_us = this.hi_in = o,
			this.zh_hk = a
		},
		initLangPack: function () {
			info.langPack ? $.extend(info.langPack, this[info.lang] || this.zh_cn) : info.langPack = this[info.lang] || this.zh_cn
		}
	};
	r.init()
}, LTK["components/share/share_base"] = function (t, e, i) {
	var n = t("components/player/mPlayer"),
	o = t("sdk/share/index"),
	a = t("air/lang/extend"),
	r = t("air/env/ua"),
	s = {};
	t("components/langPack/pub"),
	o.config({
		key: "iWFeNzVA7669bOni",
		debug: !1
	});
	var c = {
		init: function () {
			this._getShareInfo(),
			r.weixin && (s = this.getShareInfo(), this._weixinUpdate(s))
		},
		_cache: {
			weixinLayer: null,
			collectLayer: null,
			extendObj: null
		},
		_currentShareInfo: {},
		_currentShareFomartInfo: {},
		_getShareInfo: function () {
			this._currentShareInfo = {
				title: document.title,
				link: location.href,
				desc: $('meta[name="description"]').attr("content"),
				imgUrl: $("body img").length > 0 && $("body img").eq(0).attr("src") || "http://i0.letvimg.com/lc05_img/201601/11/14/37/1436/appLetv.png"
			},
			window.info && window.info.share && (window.info.share.imgUrl = window.info.share.imgUrl || window.info.share.img || window.info.share.webImage, window.info.share.link = info.share.link || info.share.webUrl || info.share.url, this._currentShareInfo = $.extend(this._currentShareInfo, window.info.share))
		},
		getShareInfo: function () {
			return this._currentShareInfo
		},
		setShareInfo: function (t) {
			return t = t || {},
			t.imgUrl = t.imgUrl || t.img || t.webImage,
			t.link = t.link || t.webUrl || t.url,
			this._currentShareInfo = $.extend(this._currentShareInfo, t),
			this._updateShareInfo(),
			this._currentShareInfo
		},
		_updateShareInfo: function () {
			r.weixin && this._weixinUpdate(this._currentShareInfo)
		},
		_weixinUpdate: function (t) {
			var e,
			i = this;
			e = i._cache.extendObj && i._cache.extendObj.customCallback || window.info && window.info.share && window.info.share.customCallback;
			var r = function () {
				i._cache.weixinLayer.hide(),
				n.show(),
				e && e()
			},
			s = {
				channelName: "weixin",
				onsuccess: r
			};
			o.callShare(a(s, t))
		},
		bindDom: function (t) {
			var e = this;
			t && t.on("tap", function (t) {
				t.preventDefault(),
				t.stopPropagation();
				var i = $(this).attr("data-type");
				"weixin" == i ? e._weixinAction(i) : e._otherAction(i)
			})
		},
		_otherAction: function (t) {
			var e = this,
			i = {
				channelName: t
			};
			o.callShare(a(i, e._currentShareInfo)),
			Stats.sendAction({
				ap: "ch=share&link=" + t
			})
		},
		_weixinAction: function (t) {
			var e = this;
			if (this._cache.weixinLayer && 0 !== this._cache.weixinLayer.length)
				this._cache.weixinLayer.show(), n.hide();
			else {
				var i = '<div class="j-wx-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:101%;z-index:20000;"></div><div class="j-wx-openTip" style="position:fixed;right:25px;top:5px;background:url(' + info.langPack.shareImg + ') no-repeat center center; width:265px; height:35px; background-size:100%;margin:0 auto;z-index:20001"></div>';
				$("body").append(i),
				this._cache.weixinLayer = $(".j-wx-openTip"),
				this._cache.weixinLayer.on("tap", function (t) {
					t.stopPropagation(),
					e._cache.weixinLayer.hide(),
					n.show(),
					$("#uniShare_close").trigger("click")
				}),
				this._cache.weixinLayer.show(),
				n.hide()
			}
			$("#uniShare_close").trigger("click"),
			$("#uniShare_layer").hide(),
			$("#uniShare_cover").hide(),
			Stats.sendAction({
				ap: "ch=share&link=weixin"
			})
		},
		_weixinCollect: function () {
			var t = this;
			this._cache.collectLayer && 0 != this._cache.collectLayer.length || (tipHTML = '<div class="j-wx-cl-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:101%;z-index:20000;"></div><div class="j-wx-cl-openTip" style="position:fixed;right:25px;top:5px;background:url(' + info.langPack.layerImg2 + ') no-repeat center center; width:265px; height:35px; background-size:100%;margin:0 auto;z-index:20001"></div>', $("body").append(tipHTML), this._cache.collectLayer = $(".j-wx-cl-openTip"), this._cache.collectLayer.on("click", function (e) {
					e.stopPropagation(),
					t._cache.collectLayer.hide(),
					n.show()
				})),
			this._cache.collectLayer.show(),
			n.hide()
		},
		otherShare: function (t) {
			this._otherAction(t)
		},
		weixinShare: function () {
			this._weixinAction()
		},
		weixinCollect: function () {
			this._weixinCollect()
		}
	};
	c.init(),
	i.exports = {
		getShareInfo: function () {
			return c.getShareInfo()
		},
		setShareInfo: function (t) {
			return c.setShareInfo(t)
		},
		bind: function (t) {
			c.bindDom(t)
		},
		otherShare: function (t) {
			c.otherShare(t)
		},
		weixinShare: function () {
			c.weixinShare()
		},
		weixinCollect: function () {
			c.weixinCollect()
		},
		setCallBack: function (t) {
			c._cache.extendObj = t
		}
	}
}, LTK["air/event/givee"] = function (t, e, i) {
	var n = {
		on: function (t, e, i) {
			if (!t)
				return void trace("CustomEvent::on:", arguments.callee.caller);
			var n = t.indexOf(".");
			return n > 0 && (e._ENAME_ = t.slice(n), t = t.slice(0, n)),
			e._ONCE_ = i || !1,
			(this._EVENTS_[t] || (this._EVENTS_[t] = [])).push(e),
			this
		},
		one: function (t, e) {
			return this.on(t, e, !0)
		},
		off: function (t) {
			var e = t.indexOf(".");
			if (e > 0) {
				var i = t.slice(e);
				if (t = this._EVENTS_[t.slice(0, e)])
					for (var n = t.length; n--; )
						e = t[n], e && e._ENAME_ === i && (t[n] = !1)
			} else
				this._EVENTS_[t] = null;
			return this
		},
		emit: function (t) {
			if (!t)
				return void trace("CustomEvent::emit:", arguments.callee.caller);
			var e,
			i = t.indexOf(".");
			if (i > 0 && (e = t.slice(i), t = t.slice(0, i)), t = this._EVENTS_[t])
				for (var n, o = 0, a = t.length, r = t.slice.call(arguments, 1); a > o; o++)
					n = t[o], !n || e && n._ENAME_ !== e || (n.apply(this, r), n._ONCE_ && (t[o] = !1));
			return this
		}
	},
	o = function (t) {
		return "function" == typeof t && (t = t.prototype),
		t._EVENTS_ || (t._EVENTS_ = {}),
		t.on || (t.on = n.on),
		t.one || (t.one = n.one),
		t.off || (t.off = n.off),
		t.emit || (t.emit = n.emit),
		t
	};
	i.exports = o
}, LTK["components/util/events"] = function (t, e, i) {
	i.exports = t("air/event/givee")({})
}, LTK["components/share/share_ui_imitateApp"] = function (t, e, i) {
	var n = t("components/util/events"),
	o = t("components/share/share_base"),
	a = "",
	r = info.region || "CN";
	"CN" === r && (a = '<div class="shareBox" style=" display:block"><ul><li class="ico_weixin" id="uniShare_weixin" data-type="weixin" style="display:none;"><a href="javascript:;"><i></i><span>' + info.langPack.wx + '</span></a></li><li class="ico_qq"  id="uniShare_qqzone" data-type="qzone"><a href="javascript:;"><i style="background:url(http://i0.letvimg.com/img/201503/25/1718/QQ.png) no-repeat;background-size:100%"></i><span>' + info.langPack.qq + '</span></a></li><li class="ico_weibo" id="uniShare_weibo" data-type="weibo"><a href="javascript:;"><i style="background:url(http://i2.letvimg.com/img/201503/25/1718/xinlang.png) no-repeat;background-size:100%"></i><span>' + info.langPack.wb + '</span></a></li><li class="ico_pyq" id="uniShare_timeline"   style="display:none;"><a href="javascript:;"><i></i><span>æœ‹å‹åœˆ</span></a></li></ul><div class="qx_btn"><p class="qx"><a id="uniShare_close" href="javascript:;">' + info.langPack.cancel + "</a></p></div></div>"),
	("HK" === r || "US" === r || "IN" === r) && (a = '<div class="shareBox" style=" display:block"><ul><li class="ico_weixin" id="uniShare_weixin" data-type="weixin" style="display:none;"><a href="javascript:;"><i></i></a></li><li class="ico_twitter"  id="uniShare_twitter" data-type="tw"><a href="javascript:;"><i style="background:url(http://i0.letvimg.com/lc05_img/201606/03/11/19/1118/twitter.png) no-repeat;background-size:100%"></i></a></li><li class="ico_facebook" id="uniShare_facebook" data-type="fb"><a href="javascript:;"><i style="background:url(http://i0.letvimg.com/lc05_img/201606/03/11/19/1118/facebook.png) no-repeat;background-size:100%"></i></a></li><li class="ico_pyq" id="uniShare_timeline"   style="display:none;"><a href="javascript:;"><i></i></a></li></ul><div class="qx_btn"><p class="qx"><a id="uniShare_close" href="javascript:;">cancel</a></p></div></div>');
	var s,
	c,
	l,
	p = {
		css: '<style type="text/css">.block_layer{ position:fixed; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:100; left:0; top:0;}.shareBox .qx_btn{clear:both;margin-bottom:18px}.shareBox .qx_btn .qx{width:60%;height:30px;line-height:30px;margin:0 auto;text-align:center;border:1px solid #00a0e9;border-radius:4px}.shareBox .qx_btn .qx a{display:block;width:100%;height:100%;color:#00a0e9;font-size:12px}.shareBox{position:fixed;width:100%;height:auto;left:0;bottom:0;background:#fff;background:rgba(255,255,255,0.9);text-align:center;z-index:101;display:none}.shareBox ul{width:100%;text-align:center;-webkit-padding-start:0}.shareBox li{display:inline-block;margin:0 16px 16px 16px;color:#fff;list-style:none}.shareBox a{text-decoration:none}.shareBox a:hover{color:#529bef}.shareBox li i{display:block;width:46px;height:46px;margin:0 auto;background-size:100%;margin-top:9px;margin-bottom:9px}.shareBox span{color:#5c5c5c;font:12px/1.14 "FAE8F6F96C59ED1",Arial,sans-serif,"5B0B8BF53"}.shareBox .ico_weixin i{background:url(http://i0.letvimg.com/img/201503/25/1718/weixin.png) no-repeat;background-size:100%} .shareBox .ico_pyq i{background:url(http://i3.letvimg.com/img/201503/25/1718/pyq.png) no-repeat;background-size:100%}.fadeInUp{-webkit-animation:fadeInUp .5s linear .2s 1;-ms-animation:fadeInUp .5s linear .2s 1;-moz-animation:fadeInUp .5s linear .2s 1;-o-animation:fadeInUp .5s linear .2s 1;animation:fadeInUp .5s linear .2s 1;-webkit-animation-fill-mode:forwards}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0px,100%,0px);transform:translate3d(0px,100%,0px)}100%{opacity:1;-webkit-transform:none;transform:none}}</style>',
		shareHtml: a,
		coverHTML: '<div id="uniShare_cover" class="block_layer" style="display:none;"></div>'
	},
	h = {
		init: function () {
			this._createShareButton()
		},
		_createShareLayer: function () {
			s || c || ($("head").append(s = $(p.css)), $("body").append(c = $(p.shareHtml)).append(coverHTML = $(p.coverHTML)), $("#uniShare_close, #uniShare_cover").on("click", function () {
					coverHTML.hide(),
					c.hide()
				}), $("#uniShare_close, #uniShare_cover, .shareBox").on("touchmove", function (t) {
					t.preventDefault()
				}), /MicroMessenger/i.test(navigator.userAgent) && $("#uniShare_weixin").show(), $(".shareBox").on("click", "li", $.proxy(this._startShare, this)))
		},
		_createShareButton: function () {
			var t = this;
			window.info && window.info.share && window.info.share.shareButton && (0 == $("#j-btn-showhide").length && $("body").append($('<div class="up-letv" id="j-btn-showhide"></div>')), 0 == $("#j-btn-showhide .diy_share").length && ($("head").append('<style>.up-letv{position:fixed;right:8px;bottom:65px;width:50px;z-index:99;}.up-letv .diy_share{width:50px;height:50px;text-indent:-3000px;position:absolute;left:0;top:0;color:#f9a038;font-size:16px;text-align:center;line-height:50px;background:url("http://i2.letvimg.com/img/201503/25/1647/share_btn.png") no-repeat left top; background-size:100%;}</style>'), $("#j-btn-showhide").append(l = $('<span data-type="weixin"><a href="javascript:;"><b class="diy_share">åˆ†äº«</b></a></span>'))), $("#j-btn-showhide").show(), $("#j-btn-showhide .diy_share").show().on("click", function () {
					t.show()
				}))
		},
		changeEvent: function (t) {
			$("#j-btn-showhide .diy_share").off("click").on("click", function () {
				t()
			})
		},
		show: function () {
			this._createShareLayer(),
			coverHTML.show(),
			c.show()
		},
		hide: function () {
			coverHTML.hide(),
			c.hide()
		},
		bindDom: function (t) {
			var e = this;
			t && t.on("click", function (t) {
				t.preventDefault(),
				e.show()
			})
		},
		setShareInfo: function (t) {
			o.setShareInfo(t)
		},
		_startShare: function (t) {
			t.preventDefault();
			var e = $(t.target).closest("li"),
			i = e.attr("data-type");
			n.emit("sendDataShare", i),
			"weixin" === i ? o.weixinShare() : o.otherShare(i)
		}
	};
	h.init(),
	i.exports = {
		show: function () {
			h.show()
		},
		hide: function () {
			h.hide()
		},
		bind: function (t) {
			h.bindDom(t)
		},
		changeEvent: function (t) {
			h.changeEvent(t)
		}
	}
}, LTK["components/app/appAddList"] = function (t, e, i) {
	var n = {
		tv: ["1711_2_1002696317"],
		movie: ["1711_1_1002697474"],
		sports: ["1711_4_1002696794"],
		zongyi: ["1711_11_1002696813"],
		comic: ["1711_5_1002696762"],
		vip: ["1711_1000_1002697479"],
		music: ["1711_9_1002697478"],
		news: ["1711_1009_1002698457"],
		qinzi: ["1711_34_1002697460"],
		nba: ["1711_1004_1002697497"],
		finance: ["1711_22_1002697461"],
		fashion: ["1711_20_1002700424"],
		jilu: ["1711_16_1002697542"],
		auto: ["1711_14_1002699936"],
		travel: ["1711_23_1002697252"],
		gaoxiao: ["1711_1010_1002702325", le.api_host.m_href + "/"],
		dubi: ["1711_1001", le.api_host.m_href + "/"],
		hot: ["hot"],
		live_lunbo: ["Live_lunbo", le.api_host.m_href + "/live/"],
		live_weishi: ["Live_weishi", le.api_host.m_href + "/live/list/channel/weishi/"],
		live_ent: ["Live_ent", le.api_host.m_href + "/live/list/channel/ent/"],
		live_music: ["Live_music", le.api_host.m_href + "/live/list/channel/music/"],
		live_other: ["Live_other", le.api_host.m_href + "/live/list/channel/letv_other/"],
		special: ["Topics", le.api_host.m_href + "/"],
		me_record: ["Me_Record", le.api_host.m_href + "/history"],
		pay: ["Me_Checkout", le.api_host.zhifu + "/mz/tobuy/pro"],
		"pay.reg": ["Me_Checkout", le.api_host.zhifu + "/mz/tobuy/regular"],
		"pay.pro": ["Me_Checkout", le.api_host.zhifu + "/mz/tobuy/pro"],
		me: ["Me_Login", le.api_host.m_href + "/my/"],
		setpannel: ["NiceApp", le.api_host.m_href + "/my/"],
		search: ["Search", le.api_host.m_href + "/search"],
		soft: ["NiceApp", le.api_host.m_href + "/static/soft"]
	};
	i.exports = n
}, LTK["components/app/apph5Adapter"] = function (t, e, i) {
	var n = {},
	o = {
		env: ""
	},
	a = t("sdk/bridge/index"),
	r = t("components/user/getUserInfo"),
	s = t("components/share/share_base"),
	c = t("components/share/share_ui_imitateApp"),
	l = t("components/app/appAddList");
	a.config({
		key: "iWFeNzVA7669bOni",
		debug: !1
	});
	var p = function (t, e) {
		u[t] ? u[t]["default"] = e : alert("appAdapter no find this method")
	};
	n.setMethod = p;
	var h = function () {
		var t = [],
		e = [];
		for (var i in u)
			t.push(i);
		var a = function () {
			if (0 !== e.length) {
				var t = e.shift();
				t(),
				arguments.callee()
			}
		},
		r = function () {
			if (0 === t.length)
				return void a();
			var i = t.shift();
			n[i] = u[i][o.env],
			u[i].init && e.push(u[i].init),
			arguments.callee()
		},
		s = function () {
			for (var t in u)
				n[t] = u[t]["default"], u[t].init && u[t].init()
		};
		"app" === o.env ? r() : s()
	},
	u = {
		isApp: {
			name: "isAppEnv",
			app: function () {
				return "app" === o.env ? !0 : !1
			},
			"default": function () {
				return u.isApp.app()
			}
		},
		getVersion: {
			name: "core.getVersion",
			app: function (t) {
				a.app.getVersion(function (e) {
					t(e)
				})
			},
			"default": function (t) {
				t({
					result: 200,
					version: "msite"
				})
			}
		},
		getUserInfo: {
			name: "core.getUserInfo",
			app: function (t) {
				a.user.getInfo(function (e) {
					t(e)
				})
			},
			"default": function (t) {
				r(t)
			}
		},
		getNetworkState: {
			name: "core.getNetworkState",
			app: function (t) {
				a.network.getInfo(function (e) {
					t(e)
				})
			},
			"default": function (t) {
				t({})
			}
		},
		getPowerLevel: {
			name: "core.getPowerLevel",
			app: function (t) {
				a.device.getPowerLevel(function (e) {
					t(e)
				})
			},
			"default": function (t) {
				t({})
			}
		},
		autoPlay: {
			name: "fun.autoPlay",
			app: function (t, e) {
				a.video.auto(t, function (t) {
					e(t)
				})
			},
			"default": function (t, e) {
				e({})
			}
		},
		getDeviceInfo: {
			name: "core.getDeviceInfo",
			app: function (t) {
				a.device.getInfo(function (e) {
					t(e)
				})
			},
			"default": function (t) {
				t({})
			}
		},
		callLogin: {
			name: "fun.callLogin",
			app: function () {
				a.user.login(function (t) {})
			},
			"default": function (t) {
				location.href = le.api_host.sso_http + "/user/mloginHome?next_action=" + encodeURIComponent(location.href)
			}
		},
		callLogout: {
			name: "fun.callLogout",
			app: function (t) {
				a.user.logout(function (e) {
					t(e)
				})
			},
			"default": function (t) {
				$.ajax({
					url: le.api_host.sso_http + "/user/loginout?jsonp=?",
					dataType: "jsonp",
					jsonp: "jsonp",
					success: function () {
						t && t.next_action ? location.href = t.next_action : location.href = le.api_host.m_href
					}
				})
			}
		},
		callWebview: {
			name: "fun.callWebview",
			app: function (t, e) {
				t = t || {},
				t.url = u.callWebview.map(t.url) || "Home",
				t.params && (t.params.title && (t.url += "_" + t.params.title), t.params.url && (t.url += "_" + t.params.url)),
				a.webview.open(t, function (t) {
					e(t)
				})
			},
			"default": function (t) {
				t = t || {},
				location.href = u.callWebview.map(t.url) || le.api_host.m_href
			},
			map: function (t) {
				var e = l[t];
				return e ? "app" === o.env ? e[0] : 1 === e.length ? le.api_host.m_href + "/" + t : e[1] : t
			}
		},
		callAlert: {
			name: "fun.callAlert",
			app: function (t, e) {
				a.alert.toast(t, function (t) {
					e(t)
				})
			},
			"default": function (t) {
				"alert" === t.type && alert(t.text)
			}
		},
		callShare: {
			name: "fun.callShare",
			init: function () {
				"app" === o.env && c.changeEvent(function () {
					u.callShare.app()
				})
			},
			app: function (t, e) {
				var i = u.callShare.argumentsFormat(arguments);
				a.share.callShare(u.callShare.setShare(i.shareInfo), function (t) {
					i.callback(t)
				})
			},
			"default": function (t, e) {
				u.callShare.setShare(t),
				t && "function" == typeof t.showCustomLayer ? t.showCustomLayer() : c.show()
			},
			setShare: function (t) {
				t = t || {};
				var e = s.setShareInfo(t);
				return e.type = "webpage",
				e.title = t.title,
				e.webUrl = t.link || t.webUrl,
				e.webImage = t.imgUrl || t.img || t.webImage,
				e.desc = t.desc,
				e
			},
			argumentsFormat: function (t) {
				var e;
				return e = t && 2 === t.length ? {
					shareInfo: t[0],
					callback: t[1]
				}
				 : {
					shareInfo: s.getShareInfo(),
					callback: t && 1 === t.length && "function" == typeof t ? t[0] : function () {}
				}
			}
		},
		setShare: {
			name: "fun.setShare",
			init: function () {
				"app" === o.env && u.setShare.app(function () {})
			},
			app: function (t, e) {
				var i = u.callShare.argumentsFormat(arguments);
				a.share.setShare(u.callShare.setShare(i.shareInfo), function (t) {
					i.callback(t)
				})
			},
			"default": function (t) {}
		},
		playVideo: {
			name: "fun.playVideo",
			app: function (t, e) {
				t.type = "1",
				t.screen = t.screen || 1,
				t.vid = t.id || t.vid,
				a.video.play(t, function (t) {
					e(t)
				})
			},
			"default": function (t) {
				t.vid = t.id || t.vid,
				location.href = le.api_host.m_href + "/vplay_" + t.vid + ".html"
			}
		},
		playLiveVideo: {
			name: "fun.playLiveVideo",
			app: function (t, e) {
				t.type = "2",
				t.screen = t.screen || 1,
				t.liveid = t.id || t.liveid,
				t.channel = t.channel || "other",
				a.video.playLive(t, function (t) {
					e(t)
				})
			},
			"default": function (t) {
				t.liveid = t.id || t.liveid,
				t.channel = t.channel || "other",
				location.href = le.api_host.m_href + "/live/play_" + t.channel + ".html?id=" + t.liveid
			}
		},
		callBrowser: {
			name: "fun.callBrowser",
			app: function (t, e) {
				t = t || {},
				t.url = t.url || le.api_host.m_href,
				a.browser.view(t, function (t) {})
			},
			"default": function (t, e) {
				t = t || {},
				location.href = t.url || le.api_host.m_href
			}
		},
		callScanCode: {
			name: "fun.callScanCode",
			app: function (t) {
				a.qrcode.scan(function (e) {
					t(e)
				})
			},
			"default": function (t, e) {}
		}
	};
	o.env = a.app.isAppEnv ? "app" : "browser",
	h(),
	le.app = n,
	i.exports = {
		setMethod: n.setMethod
	}
}, LTK["components/app/appPvReport"] = function (t, e, i) {
	"use strict";
	t("components/app/apph5Adapter");
	var n = {
		init: function () {
			var t;
			if (window.Stats) {
				var e = Stats.getCookie("tj_lc");
				le.app && le.app.isApp() && (e ? le.app.getDeviceInfo(function (e) {
						t = e.deviceId || "-",
						Stats.AUID = t,
						Stats.Pv.postData(t)
					}) : le.app.getDeviceInfo(function (e) {
						t = e.deviceId || "-",
						Stats.AUID = t,
						LocalStore.ready(function () {
							Stats.Pv.postData(t)
						})
					}))
			}
		}
	};
	i.exports = n
}, LTK["components/stats/feStat"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function () {
			var t = encodeURIComponent,
			e = Stats.imgRequest;
			Stats.feStat = function (i, n) {
				i || (i = {}),
				i.scode && (i.code += ":" + i.scode, delete i.scode);
				var o,
				a = [];
				for (o in i)
					i.hasOwnProperty(o) && a.push(o + "=" + t(i[o]));
				e(Stats.api_fe + a.join("&") + "&_=" + String(Math.random()), n)
			},
			Ker.on("send-feStat", function (t) {
				var i = t.getAttribute("data-feStat"),
				n = t.getAttribute("data-href");
				i ? e(Stats.api_fe + i, n) : n && (window.location.href = n)
			})
		}
	}
}, LTK["components/stats/sendClickStat"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function () {
			Ker.on("send-click-stat", function (t) {
				var e = t.getAttribute("data-click-stat"),
				i = t.getAttribute("data-href");
				e ? Stats.sendAction({
					ap: e,
					targeturl: i || t.href || "-"
				}, i) : i && (window.location.href = i)
			})
		}
	}
}, LTK["air/string/parseJSON"] = function () {
	return function (t) {
		try {
			return new Function("return " + t)()
		} catch (e) {
			return console.log(e),
			null
		}
	}
}, LTK["components/stats/sendBlockClick"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function () {
			Stats.sendBlockClick = function (e) {
				var i = t("air/string/parseJSON")(e.getAttribute("data-stat")),
				n = e.getAttribute("data-href");
				i ? i.ap ? Stats.sendAction(i, n) : Stats.feStat(i, n) : n && (window.location.href = n)
			},
			Ker.on("send-stat", function (t, e) {
				("a" === e.nodeName.toLowerCase() || $(e).parents("a").length) && Stats.sendBlockClick(t)
			}),
			Ker.on("send-stat-any", function (t) {
				Stats.sendBlockClick(t)
			})
		}
	}
}, LTK["air/util/ScrollTrigger"] = function (t, e, i) {
	var n = $(window),
	o = [],
	a = 0,
	r = !1,
	s = function () {
		clearTimeout(a),
		a = setTimeout(function () {
				c._call()
			}, 100)
	},
	c = {
		calling: !1,
		add: function (t) {
			t.offsetY || (t.offsetY = 0),
			o.push(t),
			this.calling || this._call(),
			r || (window.addEventListener ? window.addEventListener("scroll", s, !1) : n.on("scroll", s), r = !0)
		},
		_call: function () {
			var t = o.length;
			if (0 === t)
				return window.removeEventListener ? window.removeEventListener("scroll", s) : n.off("scroll", s), void(r = !1);
			this.calling = !0;
			for (var e, i, a = n.scrollTop() + n.height(); t--; )
				e = o[t], i = "number" == typeof e.point ? e.point : $(e.point).offset().top + e.offsetY, a > i && (e.isOnce === !1 || o.splice(t, 1), e.handler());
			this.calling = !1
		}
	};
	i.exports = c
}, LTK["components/stats/bindExposure"] = function (t, e, i) {
	"use strict";
	var n = t("air/util/ScrollTrigger"),
	o = t("air/string/parseJSON");
	i.exports = {
		init: function () {
			Stats.bindExposure()
		},
		bindExposure: function () {
			$(".j-exposure-stat").each(function () {
				var t = $(this),
				e = t.attr("data-exposure");
				e ? (e = "{" === e.charAt(0) ? o(e) : {
						acode: "41",
						ap: e
					}, e.acode || (e.acode = "41")) : e = {
					acode: t.attr("data-acode") || "41",
					ap: t.attr("data-ap")
				},
				e.ap && n.add({
					point: t,
					offsetY: t.attr("data-exposure-offsetY") || 0,
					handler: function () {
						Stats.sendAction(e)
					}
				}),
				t.removeClass("j-exposure-stat"),
				t = null
			})
		}
	}
}, LTK["components/sendStat/com_stats"] = function (t, e, i) {
	var n = t("components/stats/feStat"),
	o = t("components/stats/sendClickStat"),
	a = t("components/stats/sendBlockClick"),
	r = t("components/stats/bindExposure"),
	s = {
		init: function () {
			Stats.bindExposure = r.bindExposure,
			n.init(),
			o.init(),
			a.init(),
			r.init()
		}
	};
	i.exports = s
}, LTK["components/sendStat/StatsInit"] = function (t, e, i) {
	"use strict";
	i.exports = {
		init: function () {
			var e = t("sdk/stats/index"),
			i = t("components/app/appPvReport"),
			n = e.init({});
			window.Stats = n,
			i.init();
			var o = t("components/sendStat/com_stats");
			o.init(n)
		}
	}
}, LTK["components/util/img_load"] = function (t, e, i) {
	i.exports = function (t, e, i) {
		var n =  + (new Date).getTime(),
		o = window["_IMG=" + n] = new Image;
		o.onload = o.onerror = function () {
			o = null,
			window["_IMG=" + n] = null,
			"function" == typeof e && e()
		},
		t = i ? t : t + "&_r_=" + n,
		o.src = t
	}
}, LTK["air/util/scrollTo"] = function (t, e, i) {
	var n = function (t, e, i, n) {
		var o,
		a,
		r,
		s = window,
		c = 0,
		l = window.scrollY;
		i = i || 50,
		1 > e && (e *= 1e3),
		o = e / i,
		r = (t - window.scrollY) / o,
		a = setInterval(function () {
				++c < o ? s.scrollTo(0, l + r * c) : (s.scrollTo(0, t), clearInterval(a))
			}, i)
	};
	i.exports = n
}, LTK["components/scroll/scrollUp"] = function (t) {
	var e = t("components/util/img_load"),
	i = t("air/util/scrollTo"),
	n = {
		init: function () {
			this._initDom(),
			this._initEvent()
		},
		_initDom: function () {
			this._showHide = $("#j-btn-showhide"),
			this._goTop = $("#j-btn-gotop"),
			this._vipDeta = $("#j-btn-vipdeta"),
			this._win = $(window),
			this._showTop = this._win.height() / 2,
			this.currentTop = this._win.scrollTop(),
			this.scrollTimer = null,
			this.btnShouldShow = !1
		},
		_initEvent: function () {
			this._win.on("touchmove scroll", $.proxy(this._scroll, this)),
			this._vipDeta.on("click", $.proxy(this._vipClick, this)),
			this._goTop.on("click", $.proxy(this._click, this))
		},
		_vipClick: function () {
			e("/doc.gif?action=btn_vip_click")
		},
		_click: function (t) {
			t.preventDefault();
			var e = this;
			i(0, 100),
			setTimeout(function () {
				e._hide()
			}, 100)
		},
		_scroll: function () {
			this.scrollTimer || (this.scrollTimer = setTimeout($.proxy(this._doCalcScroll, this), 200))
		},
		_doCalcScroll: function () {
			var t = this._win.scrollTop();
			t > this.currentTop ? this._hide() : this._show(),
			this.currentTop = t,
			!this._isShow && t > this._showTop && (this.btnShouldShow = !0, this._showHide.addClass("isgoTop")),
			t <= this._showTop && (this.btnShouldShow = !1, this._showHide.removeClass("isgoTop"), this._showHide.removeClass("ani_goTopShow"), this._showHide.removeClass("ani_goTopHide")),
			this.scrollTimer = null
		},
		_show: function () {
			this.btnShouldShow && (this._showHide.removeClass("ani_goTopHide"), this._showHide.addClass("ani_goTopShow"))
		},
		_hide: function () {
			this.btnShouldShow && this._showHide.hasClass("ani_goTopShow") && (this._showHide.removeClass("ani_goTopShow"), this._showHide.addClass("ani_goTopHide"))
		}
	};
	n.init()
}, LTK["main/base/base_home"] = function (t) {
	"use strict";
	var e = t("components/sendStat/StatsInit");
	e.init(),
	t("components/scroll/scrollUp")
}, require("main/base/base_home"), function (t) {
	t.extend(t, {
		contains: function (t, e) {
			return t.compareDocumentPosition ? !!(16 & t.compareDocumentPosition(e)) : t !== e && t.contains(e)
		}
	})
}
(Zepto), function (t, e) {
	t.extend(t, {
		toString: function (t) {
			return Object.prototype.toString.call(t)
		},
		slice: function (t, e) {
			return Array.prototype.slice.call(t, e || 0)
		},
		later: function (t, e, i, n, o) {
			return window["set" + (i ? "Interval" : "Timeout")](function () {
				t.apply(n, o)
			}, e || 0)
		},
		parseTpl: function (t, e) {
			var i = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g, function (t, e) {
					return "'," + e.replace(/\\'/g, "'") + ",'"
				}).replace(/<%([\s\S]+?)%>/g, function (t, e) {
					return "');" + e.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
				}).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
			n = new Function("obj", i);
			return e ? n(e) : n
		},
		throttle: function (i, n, o) {
			function a() {
				function t() {
					s = Date.now(),
					n.apply(c, p)
				}
				function a() {
					r = e
				}
				var c = this,
				l = Date.now() - s,
				p = arguments;
				o && !r && t(),
				r && clearTimeout(r),
				o === e && l > i ? t() : r = setTimeout(o ? a : t, o === e ? i - l : i)
			}
			var r,
			s = 0;
			return "function" != typeof n && (o = n, n = i, i = 250),
			a._zid = n._zid = n._zid || t.proxy(n)._zid,
			a
		},
		debounce: function (i, n, o) {
			return n === e ? t.throttle(250, i, !1) : t.throttle(i, n, o === e ? !1 : o !== !1)
		}
	}),
	t.each("String Boolean RegExp Number Date Object Null Undefined".split(" "), function (n, o) {
		var a;
		if (!("is" + o in t)) {
			switch (o) {
			case "Null":
				a = function (t) {
					return null === t
				};
				break;
			case "Undefined":
				a = function (t) {
					return t === e
				};
				break;
			default:
				a = function (t) {
					return new RegExp(o + "]", "i").test(i(t))
				}
			}
			t["is" + o] = a
		}
	});
	var i = t.toString
}
(Zepto), function (t, e) {
	var i = navigator.userAgent,
	n = navigator.appVersion,
	o = t.browser;
	t.extend(o, {
		qq: /qq/i.test(i),
		uc: /UC/i.test(i) || /UC/i.test(n)
	}),
	o.uc = o.uc || !o.qq && !o.chrome && !o.firefox && !/safari/i.test(i);
	try {
		o.version = o.uc ? n.match(/UC(?:Browser)?\/([\d.]+)/)[1] : o.qq ? i.match(/MQQBrowser\/([\d.]+)/)[1] : o.version
	} catch (a) {}
	t.support = t.extend(t.support || {}, {
			orientation: !(o.uc || parseFloat(t.os.version) < 5 && (o.qq || o.chrome)) && !(t.os.android && parseFloat(t.os.version) > 3) && "orientation" in window && "onorientationchange" in window,
			touch: "ontouchend" in document,
			cssTransitions: "WebKitTransitionEvent" in window,
			has3d: "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix
		})
}
(Zepto), function (t) {
	function e() {
		t(window).on("scroll", t.debounce(80, function () {
				t(document).trigger("scrollStop")
			}, !1))
	}
	function i() {
		t(window).off("scroll"),
		e()
	}
	t.matchMedia = function () {
		var e = 0,
		i = "gmu-media-detect",
		n = t.fx.transitionEnd,
		o = t.fx.cssPrefix,
		a = t("<style></style>").append("." + i + "{" + o + "transition: width 0.001ms; width: 0; height: 0; position: relative; bottom: 0px;}\n").appendTo("head");
		return function (o) {
			var r,
			s = i + e++,
			c = t('<div class="' + i + '" id="' + s + '"></div>').appendTo("body"),
			l = [];
			return a.append("@media " + o + " { #" + s + " { width: 100px; } }\n"),
			c.on(n, function () {
				r.matches = 100 === c.width(),
				t.each(l, function (e, i) {
					t.isFunction(i) && i.call(r, r)
				})
			}),
			r = {
				matches: 100 === c.width(),
				media: o,
				addListener: function (t) {
					return l.push(t),
					this
				},
				removeListener: function (t) {
					var e = l.indexOf(t);
					return ~e && l.splice(e, 1),
					this
				}
			}
		}
	}
	(),
	t(function () {
		var e = function (e) {
			i !== e.matches && (t(window).trigger("ortchange"), i = e.matches)
		},
		i = !0;
		t.mediaQuery = {
			ortchange: "screen and (width: " + window.innerWidth + "px)"
		},
		t.matchMedia(t.mediaQuery.ortchange).addListener(e)
	}),
	e(),
	t(window).on("pageshow", function (e) {
		e.persisted && t(document).off("touchstart", i).one("touchstart", i)
	})
}
(Zepto), function (t) {
	var e;
	t.fn.imglazyload = function (i) {
		function n(t) {
			var e = l ? window : s.offset(),
			n = e[p.win[0]],
			o = e[p.win[1]];
			return n >= t[p.img[0]] - i.threshold - o && n <= t[p.img[0]] + t[p.img[1]]
		}
		function o(n) {
			var o = !1;
			"IMG" === n.tagName && (o = !0);
			var a,
			r = t(n);
			t.isFunction(i.startload) && i.startload.call(r);
			var s = r.attr(i.urlName) || r.attr(i.optUrlName);
			a = t("<img />").on("load", function () {
					var t = r;
					o && (t = r.next()),
					t.css({
						opacity: "0",
						"background-image": "url(" + s + ")"
					}),
					o && t.css({
						"background-size": "cover"
					}),
					t.trigger("loadcomplete"),
					a.off("load"),
					r.attr(i.urlName, null).attr(i.optUrlName, null),
					t.animate({
						opacity: 1
					})
				}).on("error", function () {
					var i = t.Event("error");
					r.trigger(i),
					i.defaultPrevented || e.push(n),
					a.off("error").remove()
				}).attr("src", s)
		}
		function a() {
			var i,
			a,
			s,
			c;
			for (i = e.length; i--; )
				a = t(c = e[i]), s = a.offset(), n(s) && (r.call(e, i, 1), o(c))
		}
		var r = Array.prototype.splice,
		i = t.extend({
				threshold: 0,
				container: window,
				urlName: "data-src",
				optUrlName: "data-url",
				placeHolder: "",
				eventName: "scrollStop",
				refresh: !1,
				innerScroll: !1,
				isVertical: !0,
				startload: null
			}, i),
		s = t(i.container),
		c = i.isVertical,
		l = t.isWindow(s.get(0)),
		p = {
			win: [c ? "scrollY" : "scrollX", c ? "innerHeight" : "innerWidth"],
			img: [c ? "top" : "left", c ? "height" : "width"]
		};
		return !l && (p.win = p.img),
		e = t.slice(this).reverse(),
		i.refresh ? this : (t(document).ready(function () {
				i.placeHolder && t(e).append(i.placeHolder),
				a()
			}), !i.innerScroll && t(window).on(i.eventName + " ortchange", function () {
				a()
			}), t.fn.imglazyload.detect = a, this)
	}
}
(Zepto), LTK["components/app/open_app_schema"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = function (t) {
		return t.replace(/^\s+|\s+$/g, "")
	},
	a = function (t) {
		return "letvclient://msiteAction?" + (n.android ? "actionType=12&" : "") + "from=" + encodeURIComponent(t.from)
	},
	r = function (t) {
		return "letvclient://msiteAction?actionType=" + (n.android ? "9" : "0") + "&pid=" + t.pid + "&vid=" + t.vid + "&cid=" + t.cid + "&isfullscene=" + encodeURIComponent(t.isfullscene) + "&from=" + encodeURIComponent(t.from)
	},
	s = function (t) {
		return "letvclient://msiteAction?actionType=4&weburl=" + encodeURIComponent(t.weburl) + "&from=" + encodeURIComponent(t.from)
	},
	c = function (t) {
		var e = n.android ? "&liveid=" + t.streamid + "&livetype=" + encodeURIComponent(t.livetype) + "&ispay=" + encodeURIComponent(t.ispay) + "&ishalf=" + t.ishalf : "";
		return "letvclient://msiteAction?actionType=3&streamid=" + encodeURIComponent(t.streamid) + "&from=" + encodeURIComponent(t.from) + e
	},
	l = function (t) {
		return "letvclient://msiteAction?actionType=17&version=2.0&back=1&streamid=" + encodeURIComponent(t.streamid) + "&from=" + encodeURIComponent(t.from)
	},
	p = function (t) {
		switch (o(t.app.toLowerCase())) {
		case "letv":
			switch (o(t.type)) {
			case "home":
				return a(t);
			case "play":
				return r(t);
			case "webview":
				return s(t);
			case "live":
				return c(t);
			case "book":
				return l(t);
			default:
				return a(t)
			}
			break;
		case "lesport":
			return "letvsportslaunch://com.lesports.glivesports/main";
		default:
			return a(t)
		}
	};
	i.exports = p
}, LTK["air/util/Url"] = function (t, e, i) {
	var n = {
		_query: null,
		getParam: function (t) {
			var e = this._query;
			return null === e && (e = this._query = this.parseParam(window.location.search.slice(1))),
			t ? e[t.toLowerCase()] || "" : e
		},
		serializeParam: function (t) {
			var e,
			i,
			n = [];
			for (e in t)
				i = t[e], "" !== i && t.hasOwnProperty(e) && n.push(e + "=" + encodeURIComponent(i));
			return n.join("&")
		},
		parseParam: function (t) {
			t = t.split("#")[0],
			t.indexOf("?") > 0 && (t = t.split("?")[1]),
			t = t.split("&");
			for (var e, i, n = {}, o = 0, a = t.length; a > o; o++)
				e = t[o], e && (i = e.indexOf("="), v = e.slice(i + 1), v && i > 0 && (n[e.slice(0, i).toLowerCase()] = decodeURIComponent(v)));
			return n
		},
		setParam: function (t, e) {
			var i = "";
			if (t.indexOf("#") > -1 && (t = t.split("#"), i = "#" + t[1], t = t[0]), t.indexOf("?") > 0) {
				var n = this.parseParam(t);
				for (var o in n)
					e.hasOwnProperty(o) || n.hasOwnProperty(o) && (e[o] = n[o]);
				t = t.split("?")[0]
			}
			return t + "?" + this.serializeParam(e) + i
		}
	};
	i.exports = n
}, LTK["components/tips/msTip"] = function (t, e, i) {
	var n = t("components/player/mPlayer");
	t("components/langPack/pub");
	var o = function (t) {
		this.options = $.extend(o.DEFAULT, t)
	};
	o.DEFAULT = {
		bgImg: info.langPack.browser,
		width: 1243,
		height: 1129,
		showBtn: !1,
		showClose: !1
	},
	o.prototype.showTip = function () {
		var t = this,
		e = t.options.bgImg,
		i = t.options.width,
		o = t.options.height,
		a = t.options.$cacheLayer;
		if (!a || 0 === a.length) {
			var r = '<div class="j-ms-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div><div id="j-ms-openTip-bg" class="j-ms-openTip" style="position:fixed;top:0;background:url(' + e + ') no-repeat center center;width:auto;height:320px;background-size:100% auto;z-index:20001;margin:0 auto;left:0;right:0;min-width:320px;max-width:414px;"></div>';
			t.options.showBtn && t.options.showClose && (r = '<div class="j-ms-openTip" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div><div id="j-ms-openTip-bg" class="j-ms-openTip" style="position:fixed;top:50%;background:url(' + e + ') no-repeat center center;width:300px;height:300px;background-size:100% auto;z-index:20001;margin:-200px 0 0 -150px;left:50%;border-radius:5px;"><a href="javascript:;" id="btnContinueAction" style="position: absolute;display:block; width:100%;height:50px;background:#ff4b4b;bottom:-48px;left:0; border-radius: 0px 0px 5px 5px;text-align:center;color:#fff; font-size:14px;line-height:50px;">' + info.langPack.watch_now + '</a><a href="javascript:;" id="btnMsTipClose" style="display:block;width:25px;height:25px;border-radius:50%;position:absolute;right:10px;top:126px;background: rgba(0,0,0,.7) url(http://i3.letvimg.com/lc03_img/201512/10/21/59/close.png) no-repeat;background-size:100%;"></a></div>'),
			$("body").append(r);
			var s = i / ($("#j-ms-openTip-bg")[0].offsetWidth || 320);
			!t.options.showClose && !t.options.showBtn && $("#j-ms-openTip-bg").css("height", o / s),
			t.options.$cacheLayer = a = $(".j-ms-openTip"),
			a.on("click", function (t) {
				t.stopPropagation(),
				a.hide(),
				n.show()
			})
		}
		n.hide(),
		a.show(),
		$("#j-ms-openTip-bg").css("background-image", "url(" + t.options.bgImg + ")"),
		t.options.showBtn && $("#btnContinueAction").show(),
		t.options.showClose && $("#btnMsTipClose").show()
	},
	i.exports = o
}, require("components/langPack/pub"), LTK["components/tips/msTip_v2"] = function (t, e, i) {
	var n = t("components/player/mPlayer"),
	o = function (t) {
		this.options = $.extend(o.DEFAULT, t)
	};
	o.DEFAULT = {
		bgImg: info.langPack.browser,
		width: 1243,
		height: 1129
	},
	o.prototype.showTip = function () {
		var t = this,
		e = t.options.bgImg,
		i = t.options.width,
		o = t.options.height,
		a = t.options.$cacheLayer;
		if (!a || 0 === a.length) {
			var r = '<div class="j-ms-openTip-v2" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div><div id="j-ms-openTip-bg-v2" class="j-ms-openTip-v2" style="position:fixed;top:0;background:url(' + e + ') no-repeat center center;width:auto;height:320px;background-size:100% auto;z-index:20001;margin:0 auto;left:0;right:0;min-width:320px;max-width:414px;"></div>';
			$("body").append(r);
			var s = i / ($("#j-ms-openTip-bg-v2")[0].offsetWidth || 320);
			$("#j-ms-openTip-bg-v2").css("height", o / s),
			t.options.$cacheLayer = a = $(".j-ms-openTip-v2"),
			a.on("click", function (t) {
				t.stopPropagation(),
				a.hide(),
				n.show()
			})
		}
		n.hide(),
		a.show()
	},
	i.exports = o
}, LTK["components/tips/msTip_v3"] = function (t, e, i) {
	var n = t("components/player/mPlayer");
	t("components/langPack/pub");
	var o = function (t) {
		this.options = $.extend(o.DEFAULT, t)
	};
	o.DEFAULT = {
		bgImg: info.langPack.browser,
		width: 1243,
		height: 1129
	},
	o.prototype.showTip = function () {
		var t = this,
		e = t.options.bgImg,
		i = t.options.width,
		o = t.options.height,
		a = t.options.$cacheLayer;
		if (!a || 0 === a.length) {
			var r = '<div class="j-ms-openTip-v3" style="background:rgba(0,0,0,0.9);position:fixed;left:0;top:0;width:100%;height:150%;z-index:20000;"></div><div id="j-ms-openTip-bg-v3" class="j-ms-openTip-v3" style="position:fixed;top:0;background:url(' + e + ') no-repeat center center;width:auto;height:320px;background-size:100% auto;z-index:20001;margin:0 auto;left:0;right:0;min-width:320px;max-width:414px;"></div>';
			$("body").append(r);
			var s = i / ($("#j-ms-openTip-bg-v3")[0].offsetWidth || 320);
			$("#j-ms-openTip-bg-v3").css("height", o / s),
			t.options.$cacheLayer = a = $(".j-ms-openTip-v3"),
			a.on("click", function (t) {
				t.stopPropagation(),
				a.hide(),
				n.show()
			})
		}
		n.hide(),
		a.show()
	},
	i.exports = o
};
var getSchemaUri = require("components/app/open_app_schema");
require("components/langPack/pub");
var Url = require("air/util/Url");
window.__openApp || (window.__openApp = {
		defaultWxUrl: {
			lesport: "http://h5api.mobile.lesports.com/download?from=141",
			letv: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632"
		},
		defultDownloadUrl: {
			lesport: "http://h5api.mobile.lesports.com/download?from=141",
			letv: le.api_host.app_m + "/download.php"
		},
		MsTip: require("components/tips/msTip"),
		MsTip_v2: require("components/tips/msTip_v2"),
		MsTip_v3: require("components/tips/msTip_v3"),
		param: {},
		thirdApp: "",
		notCN: "https://play.google.com/store/apps/details?id=com.letv.android.client&hl=",
		checkUA: function () {
			var t = this,
			e = navigator.userAgent.toLowerCase();
			t.isandroid = /android/.test(e),
			t.isiPhone = /iphone/.test(e),
			t.isLePhone = /\bx\d\d\d\b/.test(e),
			t.isWeiXin = /micromessenger/.test(e),
			t.isWeibo = /weibo/.test(e),
			t.isbaidubox = /baiduboxapp/.test(e),
			t.isIOS10 = /iphone\s+os\s+10_\d_\d\s+like mac os/.test(e),
			t.isLowerIOS = /iphone\s+os\s+[4-8]_\d_\d\s+like mac os/.test(e),
			t.isSogouSearch = 1 == Url.getParam("fromvsogou"),
			/360video/.test(e) ? t.thirdApp = "360video" : /newsarticle/.test(e) && (t.thirdApp = "toutiao")
		},
		initParam: function (t) {
			var e = this;
			if (t.app && "letv" === t.app.toLowerCase()) {
				var i = window.info || {};
				e.param.vid = t.vid || i.vid || "",
				e.param.pid = t.pid || i.pid || "",
				e.param.cid = t.cid || i.ptvcid || "",
				e.param.weburl = t.weburl || i.weburl || "",
				e.param.streamid = t.streamid || i.id || "",
				e.param.type = t.type || (e.param.pid || e.param.vid ? "play" : ""),
				e.param.livetype = t.livetype || "",
				e.param.ispay = t.ispay || 0,
				e.param.ishalf = t.ishalf || 0,
				e.param.from = t.from || "m_letv",
				e.param.isfullscene = t.isfullscene || !1,
				e.param.app = e._trim(t.app || "letv")
			} else
				e.param.app = e._trim(t.app || "lesport");
			!e.isLowerIOS && e.isiPhone && !e.options.isOnlyOpen && e.isWeiXin ? e.param.from = e.param.from + "_ulinks" : e.isSogouSearch && (e.param.from = e.param.from + "_sogousearch"),
			window.__APPGUIDE = window.__APPGUIDE || {},
			window.__APPGUIDE.common = window.__APPGUIDE.common || {}
		},
		callUniversalLinks: function () {
			var t = this,
			e = getSchemaUri(t.param),
			i = (t._getDownloadAppUrl(), location.host);
			i = "m.le.com" === i ? i.replace("m.le.com", "m.letv.com") : i.replace("m.letv.com", "m.le.com");
			var n = document.createElement("a");
			n.href = location.protocol + "//" + i + "/u_links/?" + e.replace("letvclient://msiteAction?", "") + "&redirect_url=1",
			n.click()
		},
		_bindDefaultAppEvent: function (t) {
			var e = this,
			i = navigator.userAgent.toLowerCase();
			if (!(i.indexOf("leautocamera") > -1))
				if (e.options = t || {}, e.checkUA(), e.initParam(t), e.isDownload = e.options.isOnlyOpen ? !1 : !0, e.isWeiXin)
					t.isTryLook && window.info && info.appGuideImage ? new e.MsTip({
						bgImg: info.appGuideImage,
						width: 1243,
						height: 1506
					}).showTip() : e.isLowerIOS || !e.isiPhone || e.options.isOnlyOpen ? e._gotoDownloadUrl() : e.callUniversalLinks();
				else if (e.isWeibo)
					t.isTryLook ? info.appGuideImage ? new e.MsTip_v2({
						bgImg: info.appGuideImage,
						width: 1243,
						height: 1506
					}).showTip() : new e.MsTip_v3({
						bgImg: info.langPack.layerImg,
						width: 1243,
						height: 1506
					}).showTip() : (new e.MsTip).showTip();
				else if (e.options.app) {
					var n = getSchemaUri(e.param);
					e._lanuchApp(n)
				} else
					e._gotoDownloadUrl()
		},
		_gotoDownloadUrl: function () {
			var t = this._getDownloadAppUrl();
			t && (location.href = t),
			window.info && "play" === window.info.pageid && window.info.videoBelowDaoliu && Stats.feStat({
				code: "down_app"
			})
		},
		_getDownloadAppUrl: function () {
			var t = this,
			e = "",
			i = t.options,
			n = t.defaultWxUrl,
			o = t.defultDownloadUrl,
			a = t._trim(i.app ? i.app.toLowerCase() : "letv");
			return t.isWeiXin ? (e = (i.wxUrl ? i.wxUrl : n[a]) + "&android_schema=" + encodeURIComponent(getSchemaUri(t.param)), !t.isLowerIOS && t.isiPhone && (e = i.wxUrl ? i.wxUrl : n[a])) : (e = t.thirdApp && i.thirdApp && i.thirdApp[t.thirdApp] ? encodeURI(t._trim(i.thirdApp[t.thirdApp])) : i.url ? encodeURI(t._trim(i.url)) : t.isandroid ? encodeURI(i.androidUrl ? t._trim(i.androidUrl) : o[a]) : encodeURI(i.iosUrl ? t._trim(i.iosUrl) : o[a]), window.info && (t.isandroid ? "HK" === window.info.region ? e = t.notCN + "zh_hk" : "" !== window.info.region && "CN" !== window.info.region && (e = t.notCN + "en_us") : t.isiPhone && "" !== window.info.region && "CN" !== window.info.region && (e = "http://app.m.letv.com/download_general.php"))),
			e
		},
		_lanuchApp: function (t) {
			var e = this;
			if (e.isandroid)
				setTimeout(function () {
					var i = (new Date).valueOf(),
					n = document.createElement("iframe");
					if (n.style.cssText = "width:0px;height:0px;position:fixed;top:0;left:0;border:0;", n.src = t, document.body.appendChild(n), i = (new Date).valueOf(), e.isDownload)
						if ("toutiao" === e.thirdApp) {
							var o,
							a = 0,
							r = +new Date;
							o = setInterval(function () {
									a++;
									var t = +new Date - r;
									a >= 50 && (clearInterval(o), 1080 > t && !e.isLePhone && e._gotoDownloadUrl())
								}, 20)
						} else
							setTimeout(function () {
								var t = (new Date).valueOf();
								1550 > t - i && e._gotoDownloadUrl()
							}, 1500)
				}, 100);
			else {
				var i,
				n,
				o,
				a,
				r,
				s = e.isbaidubox && e.isIOS10 ? 1500 : 1300;
				n = function (t, i) {
					e.isDownload && i && e._gotoDownloadUrl(),
					window.removeEventListener("pagehide", o, !0),
					window.removeEventListener("pageshow", o, !0),
					a && r && (a.onload = null, r.removeChild(a), a = null)
				},
				o = function (t) {
					clearTimeout(i),
					n(t, !1)
				},
				window.addEventListener("pagehide", o, !0),
				window.addEventListener("pageshow", o, !0),
				e.isLowerIOS ? (r = document.body, a = document.createElement("iframe"), a.style.display = "none", a.onload = n, a.src = t, r.appendChild(a)) : location.href = t;
				var c = +new Date;
				i = setTimeout(function () {
						i = setTimeout(function () {
								var t = +new Date;
								t - c > s ? n(null, !1) : n(null, !0)
							}, 1200)
					}, 60)
			}
		},
		_trim: function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		}
	}), LTK["components/app/home_open_app"] = function (t) {
	var e = (t("components/app/apph5Adapter"), t("air/env/ua")),
	i = {
		init: function () {
			this._initDom(),
			this._initEvent()
		},
		_initDom: function () {
			this._win = $(window)
		},
		_initEvent: function () {
			var t = this;
			Ker.on("open_app", function (i, n, o) {
				le.app.isApp() && e.android || t._open(i, n, o)
			})
		},
		_open: function (t, i, n) {
			n.preventDefault();
			var o = "javascript:void(0)",
			t = $(t);
			t.find("a").attr("href", o);
			var a = t.attr("data-vid"),
			r = t.attr("data-app"),
			s = t.attr("data-pid"),
			c = t.attr("data-order"),
			l = "undefined" != typeof __homeOpenApp && "undefined" != typeof __homeOpenApp[c] ? __homeOpenApp[c] : "",
			p = e.letvMobile ? "lingxian" : e.android ? "android" : "ios",
			h = Stats && Stats.BR ? Stats.BR : "letv",
			u = "apponly";
			__openApp._bindDefaultAppEvent({
				app: r || "",
				url: l ? l.url : "",
				wxUrl: l ? l.wxUrl : "",
				wxShortUrl: l ? l.wxShortUrl : "",
				vid: a || "",
				pid: s || "",
				type: "play",
				from: "m_" + p + "_" + h + "_" + u,
				thirdApp: l ? l.thirdApp : {}
			})
		}
	};
	i.init()
}, LTK["components/touchComp/touchEvent"] = function (t, e, i) {
	"use strict";
	var n = $(document),
	o = function () {};
	o.prototype = {
		constructor: o,
		init: function (t) {
			this.initDom(t),
			this.initEvent()
		},
		initDom: function (t) {
			this.settings = t,
			this.container = t.container,
			this.target = t.target || ""
		},
		initEvent: function () {
			this.settings.onOrtChange && $(window).on("resize ortchange", this.settings.onOrtChange),
			this.container.on("touchstart", this.target, $.proxy(this.onTouchStart, this)),
			this.settings.onTransitionEnd && this.container.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", this.settings.onTransitionEnd)
		},
		onTouchStart: function (t) {
			this.settings.onTouchStart(t),
			n.on("touchmove", this.target, this.settings.onTouchMove),
			n.on("touchend touchcancel", $.proxy(this.onTouchEnd, this))
		},
		onTouchEnd: function (t) {
			this.settings.onTouchEnd(t),
			n.off("touchmove", this.target, this.settings.onTouchMove),
			n.off("touchend touchcancel", $.proxy(this.onTouchEnd, this))
		}
	},
	i.exports = o
}, LTK["components/touchComp/touchUtil"] = function (t, e, i) {
	"use strict";
	var n = {
		_vendor: function () {
			for (var t, e = document.createElement("div").style, i = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, o = i.length; o > n; n++)
				if (t = i[n] + "ransform", t in e)
					return i[n].substr(0, i[n].length - 1);
			return !1
		},
		_prefixStyle: function (t) {
			var e = this._vendor();
			return e === !1 ? !1 : "" === e ? t : e + t.charAt(0).toUpperCase() + t.substr(1)
		},
		setTransition: function (t, e, i) {
			var n = this._prefixStyle("transition"),
			o = i || "cubic-bezier(0.1, 0.57, 0.1, 1)";
			t[0] && (t[0].style[n] = "all " + e + "ms " + o)
		},
		removeTransition: function (t) {
			var e = this._prefixStyle("transition"),
			i = t[0];
			i && i.style && (i.style[e] = "")
		},
		setTranslateX: function (t, e) {
			this.setTranslate(t, e, 0)
		},
		setTranslateY: function (t, e) {
			this.setTranslate(t, 0, e)
		},
		setTranslate: function (t, e, i) {
			var n = this._prefixStyle("transform");
			t[0] && (t[0].style[n] = "translate(" + parseInt(e, 10) + "px, " + parseInt(i, 10) + "px)")
		},
		removeTranslate: function (t) {
			var e = this._prefixStyle("transform");
			t[0].style[e] = ""
		},
		removeTrans: function (t) {
			this.removeTransition(t),
			this.removeTranslate(t)
		},
		getWidth: function (t) {
			return t.getBoundingClientRect().width
		}
	};
	i.exports = n
}, LTK["components/touchComp/leTimer"] = function (t, e, i) {
	"use strict";
	var n = {
		setInterval: function (t, e) {
			var i = {},
			n = (new Date).getTime();
			return this._interval(t, n, e, i),
			i
		},
		setTimeout: function (t, e) {
			var i = {},
			n = (new Date).getTime();
			return this._timeout(t, n, e, i),
			i
		},
		clear: function (t) {
			t && t.timer && window.cancelAnimationFrame(t.timer)
		},
		_interval: function (t, e, i, n) {
			var o = this,
			a = (new Date).getTime(),
			r = e;
			a - e >= i && (r = a, t && t.call(this)),
			n.timer = window.requestAnimationFrame(function () {
					o._interval(t, r, i, n)
				})
		},
		_timeout: function (t, e, i, n) {
			var o = this,
			a = (new Date).getTime(),
			r = e,
			s = a - e;
			s >= i && 300 > s - i ? (r = a, t && t.call(this), window.cancelAnimationFrame(n.timer)) : n.timer = window.requestAnimationFrame(function () {
					o._timeout(t, r, i, n);
				})
		}
	};
	i.exports = n
}, LTK["components/touchComp/slider"] = function (t, e, i) {
	"use strict";
	var n = (t("components/util/events"), t("components/touchComp/touchEvent")),
	o = t("components/touchComp/touchUtil"),
	a = t("components/touchComp/leTimer"),
	r = function () {};
	r.prototype = {
		constructor: r,
		init: function (t) {
			this.initDom(t),
			this.initEvent(),
			this.initFocus()
		},
		initDom: function (t) {
			var e = {
				container: "#container",
				wrapper: "#wrapper",
				sliderSelector: "li",
				speed: 300,
				needHeight: !1,
				rate: 9 / 16,
				autoPlay: !1,
				pagination: !1,
				bulletSelector: "li",
				textSelector: "",
				bulletActiveClass: "active",
				slideActiveClass: "active",
				preloadImgAttr: "data-src",
				initialSlide: 0,
				loop: !1,
				onTouchStart: function () {},
				onTouchMove: function () {},
				onTouchEnd: function () {},
				onTransitionStart: function () {},
				onTransitionEnd: function () {}
			};
			this.settings = $.extend(e, t),
			this.container = $(this.settings.container),
			this.wrapper = this.container.find(this.settings.wrapper),
			this.slides = this.shadowSlides = this.wrapper.find(this.settings.sliderSelector),
			this.speed = this.settings.speed,
			this.autoPlay = this.settings.autoPlay,
			this.loop = this.settings.loop,
			this.preloadImgAttr = this.settings.preloadImgAttr,
			this.needHeight = this.settings.needHeight,
			this.rate = this.settings.rate,
			this.pagination = this.settings.pagination ? this.container.find(this.settings.pagination) : !1,
			this.bulletSelector = this.pagination && this.pagination.find(this.settings.bulletSelector),
			this.settings.textSelector && (this.textSelector = this.pagination && this.pagination.find(this.settings.textSelector)),
			this.bulletActiveClass = this.settings.bulletActiveClass,
			this.slideActiveClass = this.settings.slideActiveClass,
			this.randomId = (new Date).getTime(),
			this.wrapper.attr("data-id", this.randomId),
			this.translateWidth = this.container.width(),
			this.sliderLength = this.slides.length,
			this.initialSlide = this.settings.initialSlide >= 0 && this.settings.initialSlide < this.sliderLength ? this.settings.initialSlide : 0,
			this.slides.width(this.translateWidth),
			this.needHeight && this.slides.height(this.translateWidth * this.rate),
			this.slides.forEach(function (t, e) {
				$(t).attr("data-slide-index", e)
			}),
			this.minSlide = this.translateWidth / 5,
			this.translateX = 0,
			this.activeIndex = this.initialSlide,
			this.shadowSlide = 0,
			this.shadowIndex = 0
		},
		initEvent: function () {
			var t = new n;
			t.init({
				container: this.container,
				onTouchStart: $.proxy(this.onTouchStart, this),
				onTouchMove: $.proxy(this.onTouchMove, this),
				onTouchEnd: $.proxy(this.onTouchEnd, this),
				onOrtChange: $.proxy(this.onResize, this)
			})
		},
		onResize: function () {
			var t = this.container.width();
			t && (this.translateWidth = t, this.shadowSlide && (this.shadowSlide = this.translateWidth), this.shadowSlides.width(this.translateWidth), this.needHeight && this.shadowSlides.height(this.translateWidth * this.rate), this.setActiveIndex(void 0, !0))
		},
		initFocus: function () {
			this.loop && this.initLoop(),
			this.autoPlay && this.setAutoPlay(),
			this.setActiveIndex(void 0, !0)
		},
		setAutoPlay: function () {
			var t = this;
			this.clearTimer(),
			this.timer = a.setInterval(function () {
					t.activeIndex++,
					t.activeIndex !== t.sliderLength || t.loop || (t.activeIndex = 0),
					t.setActiveIndex()
				}, this.autoPlay)
		},
		clearTimer: function () {
			this.timer && (a.clear(this.timer), this.timer = null)
		},
		initLoop: function () {
			var t = this.slides.eq(this.sliderLength - 1).clone(),
			e = this.slides.eq(0).clone();
			this.wrapper.append(e).prepend(t),
			this.shadowSlides = this.wrapper.find(this.settings.sliderSelector),
			this.loadImg(this.shadowSlides.eq(0)),
			this.shadowSlide = this.translateWidth,
			this.shadowIndex = 1
		},
		onTouchStart: function (t) {
			t.targetTouches && t.targetTouches.length > 1 || (this.pause(), o.removeTransition(this.wrapper), this.doChargeSlide(), this.settings.onTouchStart(this), this.startX = t.targetTouches[0].clientX, this.startY = t.targetTouches[0].clientY)
		},
		onTouchMove: function (t) {
			t.targetTouches && t.targetTouches.length > 1 || (this.currentX = t.targetTouches[0].clientX, this.currentY = t.targetTouches[0].clientY, Math.abs(this.currentX - this.startX) < Math.abs(this.currentY - this.startY) || (t.preventDefault(), this.settings.onTouchMove(this), this.positionFocus()))
		},
		onTouchEnd: function () {
			this.settings.onTouchEnd(this),
			this.doStep()
		},
		doStep: function () {
			this.delta > this.minSlide && this.activeIndex > 0 - this.shadowIndex ? this.activeIndex -= 1 : this.delta < -this.minSlide && this.activeIndex < this.sliderLength - 1 + this.shadowIndex && (this.activeIndex += 1),
			this.setActiveIndex()
		},
		positionFocus: function () {
			this.delta = this.currentX - this.startX;
			var t = this.translateX + this.delta;
			this.setTranslateX(t, !0)
		},
		setActiveIndex: function (t, e) {
			this.setActiveSlide(t, e),
			this.setActiveBullet(t)
		},
		setActiveSlide: function (t, e) {
			e || (this.setTransition(), this.settings.onTransitionStart(this), a.setTimeout($.proxy(this.onTransitionEnd, this), this.speed));
			var i = void 0 !== t ? t : this.activeIndex;
			this.currentSlide = this.slides.eq(i),
			this.activeIndex = i,
			this.loadImg(this.currentSlide),
			this.slideActiveClass && this.currentSlide.addClass(this.slideActiveClass).siblings().removeClass(this.slideActiveClass),
			this.translateX = -this.activeIndex * this.translateWidth,
			this.setTranslateX(this.translateX, e)
		},
		setActiveBullet: function (t) {
			var e = void 0 !== t ? t : this.activeIndex;
			this.pagination && (this.bulletSelector.eq(e).addClass(this.bulletActiveClass).siblings().removeClass(this.bulletActiveClass), this.textSelector && this.textSelector.eq(e).addClass(this.bulletActiveClass).siblings().removeClass(this.bulletActiveClass))
		},
		setTranslateX: function (t, e) {
			var i = t - this.shadowSlide;
			o.setTranslateX(this.wrapper, i),
			this.activeIndex <= -1 && this.setActiveBullet(this.sliderLength - 1),
			this.activeIndex >= this.sliderLength && this.setActiveBullet(0)
		},
		setTransition: function () {
			o.setTransition(this.wrapper, this.speed, "linear")
		},
		onTransitionEnd: function () {
			this.delta = 0,
			o.removeTransition(this.wrapper),
			this.autoPlay && !this.timer && this.resume(),
			this.doChargeSlide(),
			this.settings.onTransitionEnd(this)
		},
		doChargeSlide: function () {
			var t = this;
			this.activeIndex <= -1 && a.setTimeout(function () {
				t.setActiveSlide(t.sliderLength - 1, !0)
			}, 50),
			this.activeIndex >= this.sliderLength && a.setTimeout(function () {
				t.setActiveSlide(0, !0)
			}, 50)
		},
		loadImg: function (t) {
			var e = this.preloadImgAttr,
			i = new Image,
			n = t.find("[" + e + "]"),
			o = n.attr(e);
			$(i).on("load", function () {
				n.removeAttr(e),
				n.css({
					opacity: "0",
					"background-image": "url(" + o + ")"
				}),
				i = null,
				n.animate({
					opacity: 1
				})
			}).attr("src", o)
		},
		pause: function () {
			this.clearTimer()
		},
		resume: function () {
			this.setAutoPlay()
		}
	},
	i.exports = r
}, LTK["components/util/mUa"] = function (t, e, i) {
	"use strict";
	var n = {
		isApp: function () {
			var t = ["letvclient", "letvmobileclient", "leautocamera", "lesports", "cn.hi.wifi", "foxconn.hi.wifi"],
			e = this.checkInMind(t);
			return e
		},
		checkInMind: function (t) {
			for (var e = t || [], i = navigator.userAgent.toLowerCase(), n = "", o = 0; o < e.length; o++)
				if (n = e[o], n && i.indexOf(n) > -1)
					return !0;
			return !1
		}
	};
	i.exports = n
}, LTK["projects/homeChannel/public/pub_flag"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = t("components/util/mUa"),
	a = t("components/util/events"),
	r = {
		init: function () {
			this.initDom(),
			this.initEvent()
		},
		initDom: function () {
			this.appLists = ".j_a_app",
			this.vipLists = ".j_a_pay",
			this.letvPhone = n.letvMobile
		},
		initEvent: function () {
			a.on("homeDynamicBlockOver", $.proxy(this.beginRenderIcon, this))
		},
		beginRenderIcon: function () {
			this.renderApp(),
			this.renderVip()
		},
		renderApp: function () {
			if (!this.letvPhone && !o.isApp()) {
				var t = $(this.appLists);
				t.attr("k-name", "send-stat open_app"),
				t.removeAttr("data-href"),
				t.addClass("a_app"),
				t.attr("data-app", "letv"),
				t.attr("data-order", "common")
			}
		},
		renderVip: function () {
			for (var t = $(this.vipLists), e = 0; e < t.length; e++) {
				var i = t.eq(e);
				i.addClass("a_vip")
			}
		}
	};
	i.exports = r
}, le.m.getPromotion = {
	init: function (t) {
		var e = this,
		i = "undefined" != typeof info && "undefined" != typeof info.ptvcid ? String(info.ptvcid) : "0";
		return e._ptvcidParam = "undefined" != typeof t[i] ? t[i] : t[0],
		e._getTimeRange(),
		e._getPromotion()
	},
	_getTimeRange: function () {
		for (var t = this, e = t._ptvcidParam.length, i = 0, n = 1; e > n; n++)
			t._ptvcidParam[n].time && i++;
		if (t._timeParam = [], 1 == e || 0 === i)
			return void(t._timeParam = t._ptvcidParam);
		for (var o = new Date, a = new Date, r = new Date, n = 1; e > n; n++) {
			var s = t._ptvcidParam[n].time.split("-");
			if (begin = s[0].split(":"), end = s[1].split(":"), 2 != begin.length || 2 != end.length)
				return;
			if (o.getTime() > a.setHours(begin[0], begin[1]) && o.getTime() < r.setHours(end[0], end[1])) {
				t._timeParam = t._ptvcidParam[n].value;
				break
			}
		}
		t._timeParam.length || (t._timeParam = t._ptvcidParam)
	},
	_getPromotion: function () {
		var t = this;
		if (1 == t._timeParam.length)
			return t._timeParam[0].options;
		var e = 1,
		i = 100,
		n = [],
		o = (t._timeParam[0].options, _.random(e, i));
		$.each(t._timeParam, function (t, e) {
			n[t] = (0 == t ? 0 : n[t - 1]) + e.random
		});
		for (var a = n.length; a--; )
			if ((0 == a ? e : n[a - 1]) <= o && o < n[a])
				return t._timeParam[a].options
	}
}, le.m.commonbannerDict = {}, le.m.commonbannerDict.relation = {
	home: "homeBanner",
	"channel/home": "homeBanner",
	chat: "",
	comment: "",
	detail: "",
	"basketball/index": "",
	"basketball/list": "",
	"basketball/schedule": "",
	"basketball/table": "",
	history: "",
	"kzt/index": "",
	play: "playBanner",
	list: "",
	"live/list": "homeBanner",
	"live/play": "playBanner",
	"live/playLw": "playBanner",
	"live/home": "homeBanner",
	hot: "homeBanner",
	"leso/home": "leso/home",
	"leso/start": "",
	"leso/list": "leso/list",
	top: "homeBanner",
	"share/play": "shareplayBanner"
}, le.m.commonbannerDict.stat = {
	"leso/home": "fl=di&dp=msite_leso_home_1",
	"leso/list": "fl=di&dp=msite_leso_list_1",
	home: "fl=di&dp=msite_common_top_banner",
	"channel/home": "fl=di&dp=msite_common_top_banner",
	"share/play": "fl=di&dp=msite_playshare_banner",
	play: "fl=di&dp=msite_play_top_banner",
	"live/play": "fl=di&dp=msite_liveplay_top_banner",
	"live/list": "fl=di&dp=msite_livelist_top_banner"
}, le.m.commonbannerDict.statExp = {
	"leso/home": "msite_leso_home_1_exposure",
	"leso/list": "msite_leso_list_1_exposure",
	home: "msite_common_top_banner_exposure",
	"channel/home": "msite_common_top_banner_exposure"
}, le.m.commonbannerDict.trans = function () {
	this.pageid = "undefined" != typeof info.pageid ? info.pageid : "";
	var t;
	for (var e in this.relation)
		this.pageid == e && (t = this.relation[e]);
	return t ? t : ""
}, LTK["components/util/utils"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = t("components/util/events"),
	a = {
		loadImg: function (t, e) {
			var i = "data-src",
			n = t.find("[" + i + "]");
			n.each(function (t, n) {
				var o = $(n),
				a = $(n).attr(i),
				r = new Image;
				$(r).on("load", function () {
					o.removeAttr(i);
					var t = {
						"background-image": "url(" + a + ")"
					};
					e || (t.opacity = 0),
					o.css(t),
					r = null,
					e || o.animate({
						opacity: 1
					})
				}).attr("src", a)
			})
		},
		isLowerIOS: function () {
			return !!navigator.userAgent.match(/OS [5-8]_\d[_\d]* like Mac OS X/i)
		},
		daoliuApp: function (t) {
			var e = n.letvMobile ? "lingxian" : n.android ? "android" : "ios",
			i = Stats && Stats.BR ? Stats.BR : "letv",
			o = t.position || "home",
			a = {
				app: "letv",
				url: le.api_host.app_m + "/download_general.php?ref=010110678",
				wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
				from: "m_" + e + "_" + i + "_" + o,
				type: "home"
			},
			r = $.extend(a, t.daoliuConfig);
			this.openApp(r)
		},
		openApp: function (t) {
			__openApp._bindDefaultAppEvent(t)
		},
		sendClickStats: function (t) {
			var e = t.ap;
			this.send("0", e)
		},
		sendExplorStats: function (t) {
			var e = t.ap;
			this.send("41", e)
		},
		sendDragStats: function (t) {
			var e = t.ap;
			this.send("34", e)
		},
		sendRegestStats: function (t) {
			var e = t.ap;
			this.send("19", e)
		},
		send: function (t, e) {
			Stats.sendAction({
				acode: t,
				ap: e
			})
		},
		goLeft: function (t, e) {
			var i = "ani_goLeft";
			n.ios && (i = "ani_goLeft toStaic"),
			t.removeClass("ani_goRight").addClass(i),
			e.removeClass("ani_goRight").addClass("ani_goLeft toFixed"),
			o.emit("pageAnimateGoLeft")
		},
		goBack: function (t, e) {
			var i = "ani_goLeft";
			n.ios && (i = "ani_goLeftEnd"),
			t.height("auto").removeClass("ani_goLeft").addClass("ani_goRight"),
			e.removeClass(i).addClass("ani_goRight toFixed"),
			o.emit("pageAnimateGoBack")
		},
		animateEnd: function (t, e, i) {
			switch (i.animationName) {
			case "ani_goLeft":
				t.height($(window).height()),
				n.ios ? e.removeClass("toFixed ani_goLeft").addClass("ani_goLeftEnd") : e.removeClass("toFixed"),
				window.scrollTo(0, 0);
				break;
			case "ani_goRight":
				var o = "ani_goRight";
				n.ios && (o = "ani_goRight toStaic"),
				t.removeClass(o),
				e.removeClass("ani_goRight toFixed")
			}
		}
	};
	i.exports = a
}, LTK["components/touchComp/animateScroll"] = function (t, e, i) {
	"use strict";
	var n = t("components/touchComp/touchEvent"),
	o = t("components/touchComp/touchUtil"),
	a = t("components/touchComp/leTimer"),
	r = function () {};
	r.prototype = {
		constructor: r,
		init: function (t) {
			this.initDom(t),
			this.initEvent(),
			this.initPage()
		},
		initDom: function (t) {
			var e = {
				container: "#container",
				wrapper: "#wrapper",
				offsetWidth: 0
			};
			this.settings = $.extend(e, t),
			this.container = $(this.settings.container),
			this.wrapper = this.container.find(this.settings.wrapper),
			this.offsetWidth = this.settings.offsetWidth,
			this.items = this.wrapper.find("li"),
			this.offsetWrapperWidth = this.settings.offsetWrapperWidth || 0,
			this.maxTranslateX = 1e4,
			this.translateX = 0,
			this.delta = 0,
			this.currentScrolledIndex = 0
		},
		initEvent: function () {
			var t = new n;
			t.init({
				container: this.container,
				onTouchStart: $.proxy(this.onTouchStart, this),
				onTouchMove: $.proxy(this.onTouchMove, this),
				onTouchEnd: $.proxy(this.onTouchEnd, this),
				onOrtChange: $.proxy(this.onBeforePageResize, this)
			})
		},
		initPage: function () {
			this.setWrapperSize()
		},
		onBeforePageResize: function () {
			a.setTimeout($.proxy(this.onPageResize, this), 500)
		},
		onPageResize: function () {
			var t = this.maxTranslateX;
			this.setWrapperSize(),
			t > this.maxTranslateX && this.translateX === -t && this.setTranslateX(-this.maxTranslateX),
			this.scrollTo(this.currentScrolledIndex)
		},
		setWrapperSize: function () {
			for (var t = 0, e = 0; e < this.items.length; e++)
				t += o.getWidth(this.items[e]);
			t && (1 == this.items.length && (t += 20), this.wrapper.width(t + this.offsetWrapperWidth), this.maxTranslateX = t - o.getWidth(this.container[0]) + this.offsetWidth)
		},
		onTouchStart: function (t) {
			o.removeTransition(this.wrapper),
			this.startX = t.targetTouches[0].clientX,
			this.startY = t.targetTouches[0].clientY,
			this.startTimer = (new Date).getTime()
		},
		onTouchMove: function (t) {
			if (this.currentX = t.targetTouches[0].clientX, this.currentY = t.targetTouches[0].clientY, this.delta = this.currentX - this.startX, !(Math.abs(this.currentX - this.startX) < Math.abs(this.currentY - this.startY))) {
				if (t.preventDefault(), this.translateX + this.delta > 0)
					return this.translateX = 0, this.delta = 0, void this.setTranslateX(0);
				if (this.translateX + this.delta < -this.maxTranslateX)
					return this.translateX = -this.maxTranslateX, this.delta = 0, void this.setTranslateX(-this.maxTranslateX);
				var e = this.translateX + this.delta;
				this.setTranslateX(e)
			}
		},
		onTouchEnd: function (t) {
			this.endTimer = (new Date).getTime();
			var e = this.endTimer - this.startTimer,
			i = Math.abs(this.delta);
			if (this.speed = i / e, e > 700 || 10 > i || 0 === this.speed)
				return void(this.translateX += this.delta);
			var n = Math.floor(3 * e);
			this.delta > 0 ? this.doAnimateScroll(3 * i * this.speed, n) : this.doAnimateScroll(3 * -i * this.speed, n)
		},
		doAnimateScroll: function (t, e) {
			this.translateX = t + this.translateX,
			o.setTransition(this.wrapper, e),
			this.setTranslateX(this.translateX, !0),
			a.setTimeout($.proxy(this.onTransitionEnd, this), e)
		},
		onTransitionEnd: function (t) {
			o.removeTransition(this.wrapper),
			this.speed = 0,
			this.delta = 0
		},
		setTranslateX: function (t, e) {
			if (!(t > 0 || t < -this.maxTranslateX && !e))
				if (e && t < -this.maxTranslateX) {
					var i = -this.maxTranslateX;
					i > 0 && (i = 0),
					o.setTranslateX(this.wrapper, i)
				} else
					o.setTranslateX(this.wrapper, t)
		},
		scrollTo: function (t, e) {
			var i = 0,
			n = e || 0;
			this.currentScrolledIndex = t;
			for (var a = 0; t > a; a++)
				i += o.getWidth(this.items[a]);
			this.translateX = -Math.round(i + n),
			this.setTranslateX(this.translateX, !0)
		}
	},
	i.exports = r
}, LTK["components/app/callApp"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = {
		call: function (t) {
			var e = n.letvMobile ? "lingxian" : n.android ? "android" : "ios",
			i = Stats && Stats.BR ? Stats.BR : "letv",
			o = t.position || "home",
			a = {
				app: "letv",
				url: le.api_host.app_m + "/download_general.php?ref=010110678",
				wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
				from: "m_" + e + "_" + i + "_" + o,
				type: "home"
			},
			r = $.extend(a, t.daoliuConfig);
			this.openApp(r)
		},
		openApp: function (t) {
			__openApp._bindDefaultAppEvent(t)
		}
	};
	i.exports = o
}, LTK["components/com_header/pub_header"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = t("components/util/mUa"),
	a = (t("air/util/Url"), t("components/util/utils")),
	r = (t("components/util/events"), t("components/touchComp/leTimer")),
	s = (t("components/touchComp/touchUtil"), t("components/touchComp/animateScroll")),
	c = t("components/app/callApp"),
	l = {
		init: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {
			this.$navContainer = $("#j-nav"),
			this.$mainLayout = $(".layout"),
			this.$channelWall = $("#j_channelWall"),
			this.$header = $("header .headBox"),
			this.isLogin = le.m.isLogin(),
			this.beforeScrollTop = 0,
			this.IP = info.region || "CN",
			(n.ios || "HK" === info.region) && (this.$navContainer.find(".j-android").remove(), this.$channelWall.find(".channel_nav .j-android").remove())
		},
		initEvent: function () {
			this.$navContainer.on("click", ".arrow-channel", $.proxy(this.showChannelWall, this)),
			this.$navContainer.on("click", "li", $.proxy(this.onNavClicked, this)),
			this.$channelWall.on("webkitAnimationEnd animationend", $.proxy(this.onAnimationEnd, this)),
			this.$channelWall.on("click", ".icon_go_back", $.proxy(this.onChannelWallBack, this)),
			this.$header.find(".icon_user1").on("click", $.proxy(this.onUserIconClicked, this)),
			this.needDaoliu = this.checkRightEvt(),
			this.needDaoliu ? this.$header.find(".leapp_btn").on("click", $.proxy(this.onDaoliuClicked, this)) : this.noDaoliu(),
			o.isApp() && this.$header.find(".leapp_btn,.icon_seach").remove()
		},
		initPage: function () {
			this.initScroll(),
			this.initUserLogo(),
			this._initGVal(),
			this.sendExplorStats()
		},
		initUserLogo: function () {
			if (this.isLogin) {
				var t = Cookie.get("sso_picture") || "//i0.letvimg.com/img/201207/30/tx70.png";
				this.$header.find(".icon_user_in1").show(),
				this.$header.find(".icon_user_in1").find("img").attr("src", t),
				this.$header.find(".icon_user").hide(),
				this.$header.find(".icon_user1").hide()
			}
		},
		showChannelWall: function (t) {
			var e = this.IP;
			this.beforeScrollTop = $("body").scrollTop();
			var i = $(t.currentTarget);
			if (this.addClickEffict(i), a.goLeft(this.$mainLayout, this.$channelWall), a.loadImg(this.$channelWall), setTimeout(function () {
					a.sendExplorStats({
						ap: "msite_common_jump_channel_all_all_" + e
					})
				}, 0), o.isApp()) {
				var n = this.$channelWall.find(".shengtaiNav");
				n.next(".channel_nav").remove(),
				n.remove()
			}
		},
		onNavClicked: function (t) {
			var e = $(t.currentTarget);
			this.addClickEffict(e)
		},
		addClickEffict: function (t) {
			t.addClass("btn_click"),
			r.setTimeout(function () {
				t.removeClass("btn_click")
			}, 400)
		},
		onChannelWallBack: function (t) {
			a.goBack(this.$mainLayout, this.$channelWall),
			window.scrollTo(0, this.beforeScrollTop || 0)
		},
		onUserIconClicked: function (t) {
			t.preventDefault();
			var e = {
				zh_cn: "zh_CN",
				en_us: "en_US",
				zh_hk: "zh_HK"
			};
			le.m.userCenter.openLoginPage({
				language: e[info.lang] || "zh_CN"
			})
		},
		initScroll: function () {
			var t = new s;
			t.init({
				container: "#j-nav",
				wrapper: "#j_nav_wrapper",
				offsetWrapperWidth: 15,
				offsetWidth: 80
			}),
			t.scrollTo($("#j_nav_wrapper").find("li.active").index())
		},
		onAnimationEnd: function (t) {
			a.animateEnd(this.$mainLayout, this.$channelWall, t)
		},
		onDaoliuClicked: function (t) {
			t.preventDefault(),
			this.openApp()
		},
		openApp: function () {
			var t = window.__PromotionApp && __PromotionApp.commonBanner,
			e = t.vid || info.vid || "",
			i = e ? "play" : "",
			o = n.letvMobile ? "lingxian" : n.android ? "android" : "ios",
			a = Stats && Stats.BR ? Stats.BR : "letv",
			r = "bbanner";
			if (window.info && info.pageid)
				switch (info.pageid) {
				case "home":
					r = "hbanner";
					break;
				case "channel/home":
					r = "cbanner";
					break;
				case "leso/home":
					r = "sbanner";
					break;
				case "leso/list":
					r = "srbanner"
				}
			var s = {
				app: t.app || "",
				wxUrl: t.wxUrl || "",
				vid: e
			};
			s = "lesport" === t.app ? $.extend(s, {
					iosUrl: t.iosUrl || "",
					androidUrl: t.androidUrl || "",
					iosShortUrl: t.iosShortUrl || "",
					androidShortUrl: t.androidShortUrl || ""
				}) : $.extend(s, {
					url: t.url || "",
					wxShortUrl: t.wxShortUrl || "",
					pid: t.pid || info.pid || "",
					type: i,
					from: "m_" + o + "_" + a + "_" + r,
					thirdApp: t.thirdApp || {}
				}),
			this.open(s)
		},
		open: function (t) {
			c.openApp(t)
		},
		checkRightEvt: function () {
			return !window.info || "play" !== window.info.pageid && "share/play" !== window.info.pageid ? !0 : !1
		},
		_initGVal: function () {
			this._relation = le.m.commonbannerDict.trans(),
			this._relation && window.__PromotionApp && __PromotionApp[this._relation] && (__PromotionApp.commonBanner = le.m.getPromotion.init(__PromotionApp[this._relation])),
			window.__PromotionApp && __PromotionApp.commonBanner || this.noDaoliu()
		},
		noDaoliu: function () {
			this.$header.find(".leapp_btn").remove()
		},
		sendExplorStats: function () {
			a.sendExplorStats({
				ap: "msite_common_jump_sso_all_all_" + this.IP
			}),
			a.sendExplorStats({
				ap: "msite_common_jump_search_all_all_" + this.IP
			}),
			this.needDaoliu && a.sendExplorStats({
				ap: "msite_common_top_banner_exposure"
			}),
			this.$navContainer.find(".arrow-channel").length && (a.sendExplorStats({
					ap: "msite_common_jump_channelwall_all_all_" + this.IP
				}), a.sendExplorStats({
					ap: "msite_common_jump_channelnav_all_all_" + this.IP
				}))
		}
	};
	i.exports = l
}, LTK["projects/homeChannel/public/pub_history"] = function (t, e, i) {
	"use strict";
	var n = t("components/util/events"),
	o = {
		init: function (t) {
			return this.isLogin = le.m.isLogin(),
			this.clickDom = t.clickDom || "j_autopid",
			this.isLogin ? (this.historyData = {}, n.on("historyCallback", $.proxy(this.doRealInit, this)), void this.requestHistory()) : void $("body").on("click", "." + this.clickDom, $.proxy(this.onHistoryClick, this))
		},
		doRealInit: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {},
		initEvent: function () {
			$("body").on("click", "." + this.clickDom, $.proxy(this.onHistoryClick, this))
		},
		initPage: function () {},
		onHistoryClick: function (t) {
			var e = $(t.currentTarget);
			if (!e.hasClass("a_app")) {
				var i = e.attr("data-pid"),
				n = e.attr("data-vid"),
				o = n;
				this.isLogin && this.historyData[i] && (o = this.historyData[i]),
				this.jumpPage(o)
			}
		},
		jumpPage: function (t) {
			setTimeout(function () {
				location.href = "/vplay_" + t + ".html"
			}, 300)
		},
		requestHistory: function () {
			var t = this;
			$.ajax({
				url: le.api_host.d_api + "/history/list",
				dataType: "jsonp",
				data: {
					lang: info.lang || "zh_cn",
					region: info.region || "cn",
					pagesize: 20
				},
				success: function (e) {
					"200" === e.code && e.data && (t.formatHistoryData(e.data), n.emit("historyCallback"))
				}
			})
		},
		formatHistoryData: function (t) {
			var e = {};
			if (t.length > 0)
				for (var i = 0; i < t.length; i++)
					e = t[i], this.historyData[e.pid] = e.vid
		}
	};
	i.exports = o
}, LTK["projects/homeChannel/public"] = function (t, e, i) {
	"use strict";
	t("components/app/home_open_app");
	var n = (t("components/com_base/global"), t("components/util/events")),
	o = t("components/touchComp/slider"),
	a = t("projects/homeChannel/public/pub_flag"),
	r = t("components/com_header/pub_header"),
	s = t("projects/homeChannel/public/pub_history"),
	c = {
		init: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {
			window.__homeDataStore = {}
		},
		initEvent: function () {
			n.on("pageAnimateGoLeft", $.proxy(this.pauseFousImage, this)),
			n.on("pageAnimateGoBack", $.proxy(this.resumeFousImage, this)),
			n.on("startPageShow", $.proxy(this.pauseFousImage, this)),
			n.on("startPageWebWatch", $.proxy(this.resumeFousImage, this))
		},
		pauseFousImage: function () {
			this.focusImage.pause()
		},
		resumeFousImage: function () {
			this.focusImage.resume()
		},
		initPage: function () {
			this.initPublic()
		},
		initPublic: function () {
			r.init(),
			a.init(),
			s.init({
				clickDom: "j_autopid"
			}),
			this.initFocus({
				container: "#j-slide-wrapper",
				wrapper: "#j-scroller",
				pagination: "#j-pointer",
				preloadImgAttr: "data-img",
				autoPlay: 3e3,
				needHeight: !0,
				loop: !0
			})
		},
		initFocus: function (t) {
			this.focusImage = new o,
			this.focusImage.init(t)
		}
	};
	i.exports = c
}, LTK["components/geoPack/home_v3"] = function (t, e, i) {
	"use strict";
	t("components/com_base/global");
	var n = {
		titleImg: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.titleImg || "//i1.letvimg.com/lc05_img/201601/11/14/37/1436/banner1.png",
		conImg: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.conImg || "//i0.letvimg.com/cms/201405/30/6205b6aa1e224db7827bf4fc3709516a.jpg",
		app: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.app || "",
		spurl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.url || "",
		wxUrl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.wxUrl || "",
		wxShortUrl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.wxShortUrl || "",
		vid: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.vid || "",
		bgcolor: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.background || "#000"
	},
	o = {
		titleImg: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.titleImg_us || "//i2.letvimg.com/lc06_iscms/201606/29/17/05/2a36d3653d8842288c5916265faddf1f.jpg",
		conImg: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.conImg_us || "//i3.letvimg.com/lc06_iscms/201606/29/17/05/1b72728fbf8e4f65892067d89366f6ae.jpg",
		app: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.app_us || "",
		spurl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.url_us || "",
		wxUrl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.wxUrl_us || "",
		wxShortUrl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.wxShortUrl_us || "",
		vid: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.vid_us || "",
		bgcolor: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.background_us || "#000"
	},
	a = {
		titleImg: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.titleImg_hk || "//i2.letvimg.com/lc05_iscms/201606/29/16/10/ac0b192d716d439d9e04b47e0e3aad35.jpg",
		conImg: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.conImg_hk || "//i3.letvimg.com/lc07_iscms/201606/29/16/10/4aba1d7f14454fe986fe7131dcaa06e6.jpg",
		app: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.app_hk || "",
		spurl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.url_hk || "",
		wxUrl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.wxUrl_hk || "",
		wxShortUrl: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.wxShortUrl_hk || "",
		vid: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.vid_hk || "",
		bgcolor: "undefined" != typeof __PromotionApp && __PromotionApp.startPage.background_hk || "#000"
	},
	r = {
		init: function () {
			this.initDom(),
			this.initGeoPack()
		},
		initDom: function () {
			this.CN = n,
			this.US = this.IN = o,
			this.HK = a
		},
		initGeoPack: function () {
			info.geoPack ? $.extend(info.geoPack, this[info.region] || this.CN) : info.geoPack = this[info.region] || this.CN
		}
	};
	r.init()
}, LTK["components/langPack/home_v3"] = function (t, e, i) {
	"use strict";
	t("components/com_base/global");
	var n = {
		skip: "è·³è¿‡",
		appview: "å®¢æˆ·ç«¯è§‚çœ‹",
		lastStaticTip: "ç»§ç»­æ‹–åŠ¨ï¼ŒæŸ¥çœ‹å…¨éƒ¨",
		lastDragingTip: "é‡Šæ”¾åˆ‡æ¢è‡³ä¸‹ä¸€å±",
		nextStaticTip: "ä¸‹æ‹‰è¿”å›žè‡³é¢‘é“é¡µ",
		nextDragingTip: "é‡Šæ”¾è¿”å›žè‡³é¢‘é“é¡µ",
		view: "æ’­æ”¾",
		view_h: "",
		item_c: "æ¬¡",
		item_w: " ä¸‡",
		item_y: " äº¿",
		viewtip: "äººæ­£åœ¨çœ‹",
		tap: "ç‚¹å‡»",
		addToDesk: "æ·»åŠ åˆ°æ‰‹æœºæ¡Œé¢ï¼Œéšæ—¶æ‰“å¼€çœ‹è§†é¢‘",
		bottomDaoliu: "ä½¿ç”¨ä¹è§†è§†é¢‘APPï¼Œé«˜æ¸…å¤§å‰§æŠ¢å…ˆçœ‹",
		letv: "ä¹è§†è§†é¢‘",
		downloadFree: "å…è´¹ä¸‹è½½",
		contentTip: "å†…å®¹",
		xinxiti_ju: "é›†",
		xinxiti_ju_all: "é›†å…¨",
		xinxiti_zy: "æœŸ",
		xinxiti_zy_all: "æœŸå…¨",
		xinxiti_update: "æ›´æ–°è‡³"
	},
	o = {
		skip: "Skip",
		appview: "Watch in APP",
		lastStaticTip: "Continue to drag to view all ",
		lastDragingTip: "Release to switch to the next screen",
		nextStaticTip: "Pull down to return to channel page",
		nextDragingTip: "Release to go back to the channel page",
		view: "",
		view_h: " views",
		item_c: "",
		item_w: "",
		item_y: "",
		viewtip: " views",
		tap: "Tap",
		addToDesk: " to add to the desktop and watch videos anytime",
		bottomDaoliu: "Watch in the Le",
		letv: "Le",
		downloadFree: "Download APP",
		contentTip: " Videos",
		xinxiti_ju: "",
		xinxiti_ju_all: " all",
		xinxiti_zy: "",
		xinxiti_zy_all: " all",
		xinxiti_update: "Updated to "
	},
	a = {
		skip: "ç•¥éŽ",
		appview: "ç”¨æˆ¶ç«¯è§€çœ‹",
		lastStaticTip: "ç¹¼çºŒæ‹–å‹•ï¼ŒæŸ¥çœ‹å…¨éƒ¨",
		lastDragingTip: "é‡‹æ”¾åˆ‡æ›è‡³ä¸‹ä¸€èž¢å¹•",
		nextStaticTip: "å‘ä¸‹æ‹‰è¿”å›žè‡³é »é“é ",
		nextDragingTip: "é‡‹æ”¾è¿”å›žè‡³é »é“é é¢",
		view: "æ’­æ”¾",
		view_h: "",
		item_c: "æ¬¡",
		item_w: " è¬",
		item_y: " å„„",
		viewtip: "äººæ­£åœ¨çœ‹",
		tap: "é»žæ“Š",
		addToDesk: "æ–°å¢žè‡³æ‰‹æ©Ÿæ¡Œé¢ï¼Œéš¨æ™‚é–‹å•Ÿçœ‹è¦–é »",
		bottomDaoliu: "ä½¿ç”¨æ¨‚è¦–è¦–é »APPï¼Œé«˜æ¸…å¤§åŠ‡æ¶å…ˆçœ‹",
		letv: "æ¨‚è¦–è¦–é »",
		downloadFree: "å…è²»ä¸‹è¼‰",
		contentTip: "å…§å®¹",
		xinxiti_ju: "é›†",
		xinxiti_ju_all: "é›†å…¨",
		xinxiti_zy: "æœŸ",
		xinxiti_zy_all: "æœŸå…¨",
		xinxiti_update: "æ›´æ–°è‡³"
	},
	r = {
		init: function () {
			this.initDom(),
			this.initLangPack()
		},
		initDom: function () {
			this.zh_cn = n,
			this.en_us = this.hi_in = o,
			this.zh_hk = a
		},
		initLangPack: function () {
			info.langPack ? $.extend(info.langPack, this[info.lang] || this.zh_cn) : info.langPack = this[info.lang] || this.zh_cn
		}
	};
	r.init()
}, le.m.startPage = {
	ua: require("air/env/ua"),
	events: require("components/util/events"),
	mUa: require("components/util/mUa"),
	daoliuApp: require("components/app/callApp"),
	init: function () {
		if (!this.mUa.isApp() && "letvphone" !== info.openby) {
			Cookie.set("_starttips1_", n, {
				exp: "forever"
			}),
			var t = Cookie.get("_starttips1_");
			if (!t || t.slice(-1) % 2)
				return info.query.noopenimg || "uc" === info.query.ref ? void Cookie.set("noopenimg", "1") : void(Cookie.get("noopenimg") || "undefined" != typeof __PromotionApp && "undefined" != typeof __PromotionApp.startPage && (this._initDom(), this._initEvent(), this.notip = !1))
		}
	},
	_initDom: function () {
		this._win = $(window),
		this._body = $("body"),
		this._homeEls = this._body.find(".layout").length ? this._body.find(".layout").children() : this._body.find(".m-home").children()
	},
	_initEvent: function () {
		this.__render = $.proxy(this._render, this),
		this._win.on("load", this.__render)
	},
	_tpl: function () {
		return "undefined" != typeof __PromotionApp && "undefined" != typeof __PromotionApp.startPage && (__PromotionApp.startPage = le.m.getPromotion.init(__PromotionApp.startPage)),
		require("components/geoPack/home_v3"),
		require("components/langPack/home_v3"),
		['<div class="m-start">', '<div class="open-show" style="background-color:' + info.geoPack.bgcolor + '">', '<p class="p1">', '<img src="' + info.geoPack.titleImg + '" alt="" />', "</p>", '<p class="p4">', '<img alt="" src="' + info.geoPack.conImg + '" alt="" />', "</p>", '<p class="p2">', '<span><a href="javascript:;" class="clientWatch class' + (new Date).getTime() + '" style="background:#ffffff">' + info.langPack.appview + "</a>", '<a href="javascript:;" class="webWatch class' + (new Date).getTime() + '" style="background:#ffffff">' + info.langPack.skip + "</a></span>", "</p>", '<p class="p3"><!--<span><a href="javascript:;" data-action="notip"><i></i><b>ä¸å†æç¤º</b></a></span>--></p>', "</div>", "</div>"].join("")
	},
	_render: function () {
		this.events.emit("startPageShow"),
		this._body.append(this._tpl()).addClass("show-start").css("background-color", info.geoPack.bgcolor),
		this._homeEls.css("display", "none"),
		this._wrapper = $(".open-show"),
		this._skip = $(".webWatch"),
		Stats.sendAction({
			ap: "fl=di&dp=msite_home_startpage_exposure",
			acode: "19"
		}),
		this._destory(),
		this._wrapper.on("click", ".clientWatch", $.proxy(this._clientWatch, this)),
		this._wrapper.on("click", ".webWatch", $.proxy(this._webWatch, this))
	},
	_clientWatch: function (t) {
		t.preventDefault(),
		Stats.sendAction({
			ap: "fl=di&dp=msite_home_startpage_launchdown"
		});
		var e = this.ua.letvMobile ? "lingxian" : this.ua.android ? "android" : "ios",
		i = Stats && Stats.BR ? Stats.BR : "letv",
		n = "start",
		o = info.geoPack.vid,
		a = o ? "play" : "";
		this.daoliuApp.call({
			daoliuConfig: {
				app: info.geoPack.app,
				url: info.geoPack.spurl,
				wxUrl: info.geoPack.wxUrl,
				wxShortUrl: info.geoPack.wxShortUrl,
				from: "m_" + e + "_" + i + "_" + n,
				vid: o,
				type: a
			}
		})
	},
	_webWatch: function (t) {
		var e = this;
		setTimeout(function () {
			t.preventDefault(),
			Stats.sendAction({
				ap: "fl=di&dp=msite_home_startpage_launchskip"
			});
			var i = String((new Date).getTime()),
			n = +i.slice(-1) % 2 ? String(+i + 1) : i,
			o = new Date;
			o.setHours(o.getHours() + 2);
			Cookie.set("_starttips1_", n, {
				exp: o
			}),
			e._homeEls.css("display", ""),
			e._body.removeClass("show-start").css("background-color", ""),
			e._destory(),
			e.events.emit("startPageWebWatch")
		}, 100)
	},
	_destory: function () {
		this.__render && (this._win.off("load", this.__render), delete this.__render, this._win = null),
		this.__clientWatch && (this._wrapper && this._wrapper.off("click", ".clientWatch", this.__clientWatch), delete this.__clientWatch, this._wrapper = this._body = null),
		this.__webWatch && (this._wrapper && this._wrapper.off("click", ".webWatch", this.__webWatch), delete this.__webWatch, this._wrapper = this._body = null)
	}
}, LTK["projects/homeChannel/public/pub_change"] = function (t, e, i) {
	"use strict";
	var n = t("components/touchComp/leTimer"),
	o = t("components/util/utils"),
	a = {
		init: function (t) {
			this.initDom(t),
			this.initEvent(),
			this.initPage()
		},
		initDom: function (t) {
			var e = {
				container: "#j-content",
				changeBtn: ".changeBox"
			};
			this.settings = $.extend(e, t),
			this.$container = $(this.settings.container),
			this.animating = !1,
			this.isLowerIOS = o.isLowerIOS()
		},
		initEvent: function () {
			this.$container.on("tap", this.settings.changeBtn, $.proxy(this.onChangeBtnClicked, this))
		},
		initPage: function () {},
		onChangeBtnClicked: function (t) {
			if (!this.animating || this.isLowerIOS) {
				var e = this,
				i = $(t.currentTarget),
				a = i.attr("data-id"),
				r = parseInt(i.attr("data-index"), 10) || 0,
				s = i.parents('section[data-id="' + a + '"]'),
				c = s.find(".j_changeBox"),
				l = c.length,
				p = r + 1 >= l ? r + 1 - l : r + 1,
				h = i.attr("data-index", p).find(".icon_change1");
				this.isLowerIOS || (h.addClass("ani_icon_change"), n.setTimeout(function () {
						e.animating = !1,
						h.removeClass("ani_icon_change")
					}, 500)),
				this.animating = !0,
				c.hide(),
				c.eq(p).show(),
				o.loadImg(c.eq(p));
				var u = s.attr("data-ap").replace(/_p1_/g, "_p" + (p + 1) + "_");
				o.sendExplorStats({
					ap: u
				})
			}
		}
	};
	i.exports = a
}, LTK["projects/homeChannel/home_customBtn"] = function (t, e, i) {
	"use strict";
	var n = t("components/util/events"),
	o = t("components/touchComp/leTimer"),
	a = t("components/util/utils"),
	r = t("air/string/parseJSON"),
	s = {
		init: function (t) {
			this.initDom(t),
			this.initEvent(),
			this.initPage()
		},
		initDom: function (t) {
			var e = {
				containerSelector: "#j-content",
				clickBtnSelector: ".icon_custom",
				tipSelector: ".custom_tip"
			};
			this.settings = $.extend(e, t),
			this.container = $(this.settings.containerSelector),
			this.openClass = "ani_goWidth",
			this.closeClass = "ani_outWidth",
			a.isLowerIOS() && (this.openClass = "goWidth", this.closeClass = "outWidth")
		},
		initEvent: function () {
			this.container.on("click", this.settings.clickBtnSelector, $.proxy(this.onBtnClicked, this)),
			this.container.on("click", this.settings.tipSelector, $.proxy(this.hideTips, this)),
			n.on("customTipHide", $.proxy(this.hideTips, this))
		},
		initPage: function () {
			Cookie.get("home_tip_clicked") ? this.hideTips() : this.hideOtherTips()
		},
		onBtnClicked: function (t) {
			var e = this.openClass,
			i = $(t.target),
			o = $(t.currentTarget);
			if (i.hasClass("icon_close1"))
				t.preventDefault(), this.hideTips(), o.hasClass(e) ? this.closeOpearation(o) : (this.closeOpearation(), this.openOperation(o)), this.addClickEffict(o.parents(".column_tit"));
			else if (i.hasClass("icon_card_manage"))
				n.emit("event_showManagerLayout"), o.removeClass(e);
			else if (i.hasClass("icon_card_top")) {
				var a = o.closest("section.column");
				this.setListTop(a.attr("data-id")),
				o.removeClass(e)
			}
		},
		openOperation: function (t) {
			t.addClass(this.openClass),
			this.sendExplorerStats(t)
		},
		closeOpearation: function (t) {
			var e = this.closeClass,
			i = t || $("." + e);
			i.removeClass(this.openClass).addClass(e),
			o.setTimeout(function () {
				i.removeClass(e)
			}, 400)
		},
		addClickEffict: function (t) {
			a.isLowerIOS() || (t.addClass("btn_click"), o.setTimeout(function () {
					t.removeClass("btn_click")
				}, 400))
		},
		sendExplorerStats: function (t) {
			var e = t.find(".icon_card_manage").attr("data-stat"),
			i = t.find(".icon_card_top").attr("data-stat");
			r(e).ap && a.sendExplorStats({
				ap: r(e).ap
			}),
			r(i).ap && a.sendExplorStats({
				ap: r(i).ap
			})
		},
		hideTips: function () {
			this.container.find(this.settings.tipSelector).hide(),
			Cookie.set("home_tip_clicked", "1", {
				exp: "forever"
			})
		},
		hideOtherTips: function () {
			this.container.find(this.settings.tipSelector).each(function (t, e) {
				0 !== t && $(e).hide()
			})
		},
		setListTop: function (t) {
			for (var e = this, i = __homeDataStore.blockOrder, a = 0; a < i.length; a++)
				t === i[a] && i.splice(a, 1);
			i.unshift(t),
			o.setTimeout(function () {
				n.emit("blockOrderResorted"),
				e.scrollToFirst()
			}, 500)
		},
		scrollToFirst: function () {
			var t = this.container.offset().top - $("header").height() - $("#j-nav").height();
			window.scrollTo(0, t)
		}
	};
	i.exports = s
}, LTK["air/util/tpl"] = function (t, e, i) {
	var n = function (t, e) {
		this.tpl = t,
		this.mix = e
	};
	n.prototype = {
		render: function (t, e) {
			if (!t || !this.tpl)
				return "";
			e = e || this.mix;
			var i,
			n,
			o,
			a = "function" == typeof e,
			r = this.tpl,
			s = "";
			if ("string" == typeof r) {
				var c,
				l = r.replace(/[\r\n\t]/g, "").replace(/\'/g, "\\'").replace(/\\{/g, "\\u001").replace(/\\}/g, "\\u002").split("{"),
				p = "return '" + l[0] + "'";
				for (i = 1, n = l.length; n > i; i++)
					c = l[i].split("}"), p += c[0].indexOf("$item.") < 0 ? "+($item." + c[0] + "==null ? '' : $item." + c[0] + ")+'" + c[1] + "'" : "+(" + (c[0].indexOf("[[") < 0 ? c[0] : c[0].replace(/\[\[/g, "'").replace(/\]\]/g, "'")) + ")+'" + c[1] + "'";
				r = this.tpl = new Function("$item", p.replace(/\\u001/g, "{").replace(/\\u002/g, "}"))
			}
			if (t.sort && t.join)
				for (i = 0, n = t.length; n > i; i++)
					o = t[i], a && e(o, i), s += r(o);
			else
				a && e(t, 0), s = r(t);
			return s
		}
	},
	n.render = function (t, e, i) {
		if (!e)
			return "";
		var n,
		o,
		a,
		r,
		s = "function" == typeof i,
		c = "",
		l = t.replace(/[\r\n\t]/g, "").replace(/\'/g, "\\'").replace(/\\{/g, "\\u001").replace(/\\}/g, "\\u002").split("{"),
		p = "return '" + l[0] + "'";
		for (n = 1, o = l.length; o > n; n++)
			r = l[n].split("}"), p += r[0].indexOf("$item.") < 0 ? "+($item." + r[0] + "==null ? '' : $item." + r[0] + ")+'" + r[1] + "'" : "+(" + (r[0].indexOf("[[") < 0 ? r[0] : r[0].replace(/\[\[/g, "'").replace(/\]\]/g, "'")) + ")+'" + r[1] + "'";
		if (t = new Function("$item", p.replace(/\\u001/g, "{").replace(/\\u002/g, "}")), e.sort && e.join)
			for (n = 0, o = e.length; o > n; n++)
				a = e[n], s && i(a, n), c += t(a);
		else
			s && i(e, 0), c = t(e);
		return c
	},
	n.simple = function (t, e) {
		return e || (e = {}),
		t.replace(/{(\w+)}/g, function (t, i) {
			return e[i] || (0 === e[i] ? "0" : "")
		})
	},
	i.exports = n
}, LTK["components/touchComp/dragSort"] = function (t, e, i) {
	"use strict";
	var n = t("components/touchComp/leTimer"),
	o = t("components/touchComp/touchUtil"),
	a = t("components/touchComp/touchEvent"),
	r = function () {};
	r.prototype = {
		constructor: r,
		init: function (t) {
			this.initDom(t),
			this.initEvent(),
			this.initDragSort()
		},
		initDom: function (t) {
			this.options = t,
			this.container = $(this.options.container),
			this.draggable = this.options.draggable,
			this.draggableItems = this.container.find(this.options.draggable),
			this.handle = this.options.handle,
			this.ghostClass = this.options.ghostClass,
			this.onDragEnd = this.options.onDragEnd || function () {},
			this.beginTop = this.container[0].getBoundingClientRect().top,
			this.outerHeight = 0,
			this.transStak = {}
		},
		initEvent: function () {
			var t = new a;
			t.init({
				container: this.container,
				target: this.handle,
				onTouchStart: $.proxy(this.onTouchStart, this),
				onTouchMove: $.proxy(this.onTouchMove, this),
				onTouchEnd: $.proxy(this.onTouchEnd, this),
				onOrtChange: $.proxy(this.onBeforePageResize, this)
			})
		},
		onBeforePageResize: function () {
			n.setTimeout($.proxy(this.onPageResize, this), 500)
		},
		onPageResize: function () {},
		initDragSort: function () {},
		onTouchStart: function (t) {
			t.preventDefault();
			var e = t.touches && t.touches[0],
			i = e.target;
			this.dragEl = $(i).closest(this.draggable),
			this.startPos = {
				rect: this.dragEl[0].getBoundingClientRect(),
				x: e.clientX,
				y: e.clientY
			},
			this.dragEl.css({
				opacity: 0
			});
			var n = this.dragEl.css("margin").split(" ");
			this.outerHeight = parseInt(n[0] || 0) + parseInt(n[2] || 0),
			this.outerWidth = parseInt(n[1] || 0) + parseInt(n[3] || 0),
			this.beforeIndex = this.dragEl.index(),
			this._appendGhost(e.pageY)
		},
		onTouchMove: function (t) {
			t.preventDefault();
			var e = t.touches && t.touches[0];
			this.currentPos = {
				x: e.clientX,
				y: e.clientY
			};
			var i = this.currentPos.x - this.startPos.x,
			n = this.deltaY = this.currentPos.y - this.startPos.y;
			o.setTranslate(this.ghostEl, i, n),
			this._calcIndex(),
			this._animateItem()
		},
		onTouchEnd: function () {
			this.ghostEl.remove(),
			this.ghostEl = null;
			for (var t = 0; t < this.draggableItems.length; t++)
				o.removeTrans(this.draggableItems.eq(t));
			this.step > 0 ? this.dragEl.insertAfter(this.draggableItems[this.afterIndex]) : this.step < 0 && this.dragEl.insertBefore(this.draggableItems[this.afterIndex]),
			this.draggableItems = this.container.find(this.draggable),
			this.dragEl.css({
				opacity: ""
			}),
			this.transStak = {},
			this.step = 0,
			this.onDragEnd({
				beforeIndex: this.beforeIndex,
				afterIndex: this.afterIndex,
				dragEl: this.dragEl
			})
		},
		_appendGhost: function (t) {
			if (!this.ghostEl) {
				var e = this.dragEl,
				i = this.itemHeight = e.height(),
				n = e.width();
				this.ghostEl = this.dragEl.clone(),
				this.ghostEl.addClass(this.ghostClass),
				this.container.append(this.ghostEl),
				this.ghostEl.css({
					top: t - 1.5 * i,
					left: this.outerWidth / 2,
					width: n,
					height: i,
					opacity: .8,
					position: "absolute",
					zIndex: "100000",
					pointerEvents: "none"
				})
			}
		},
		_calcIndex: function () {
			this.step = Math.round(this.deltaY / (this.itemHeight + this.outerHeight)),
			this.afterIndex = this.beforeIndex + this.step,
			this.afterIndex < 0 && (this.afterIndex = 0),
			this.afterIndex >= this.draggableItems.length - 1 && (this.afterIndex = this.draggableItems.length - 1),
			this.targetEl = this.draggableItems.eq(this.afterIndex)
		},
		_animateItem: function () {
			var t = this.step === Math.abs(this.step) ? -1 : 1,
			e = Math.max(this.beforeIndex, this.afterIndex),
			i = Math.min(this.beforeIndex, this.afterIndex),
			n = this.targetEl.index();
			this.transStak[n] = !0,
			o.setTransition(this.targetEl, 150);
			for (var a in this.transStak)
				this.transStak.hasOwnProperty(a) && (a >= i && e >= a ? o.setTranslate(this.draggableItems.eq(a), 0, t * (this.itemHeight + this.outerHeight)) : o.setTranslate(this.draggableItems.eq(a), 0, 0))
		},
		refresh: function () {
			this.container = $(this.options.container),
			this.draggable = this.options.draggable,
			this.draggableItems = this.container.find(this.options.draggable)
		}
	},
	i.exports = r
}, LTK["projects/homeChannel/home_cardManager"] = function (t, e, i) {
	"use strict";
	var n = t("air/util/tpl"),
	o = (t("air/env/ua"), t("components/util/events")),
	a = t("components/util/utils"),
	r = t("components/touchComp/dragSort"),
	s = {
		init: function (t) {
			this.initDom(t),
			this.initEvent(),
			this.initPage()
		},
		initDom: function (t) {
			var e = {
				mainLayoutSelector: "#j_mainLayout",
				cardSelector: "#j_cardManager",
				dragAreaSelector: "#j_sortablelist",
				triggerSelector: "#j_manager_btn .manageCard"
			};
			this.settings = $.extend(e, t),
			this.$mainLayout = $(this.settings.mainLayoutSelector),
			this.$managerLayout = $(this.settings.cardSelector),
			this.$dragArea = $(this.settings.dragAreaSelector),
			this.$triggerBtn = $(this.settings.triggerSelector),
			this.orderedBlockList = __homeDataStore.orderedBlockList,
			this.blockOrder = __homeDataStore.blockOrder,
			this.$staticBlocks = $("#j_mainLayout").find(".j-recstatic"),
			this.$staticList = $("#j_cardManager").find(".j_static_list"),
			this.beforeScrollTop = 0,
			this.IP = info.region || "CN",
			this.yindaoHide = !1
		},
		initEvent: function () {
			this.$triggerBtn.on("click", $.proxy(this.showManagerlayout, this)),
			this.$managerLayout.on("webkitAnimationEnd animationend", $.proxy(this.onAnimationEnd, this)),
			o.on("event_showManagerLayout", $.proxy(this.showManagerlayout, this)),
			this.$managerLayout.on("click", ".img_site_yindao", $.proxy(this.onHideYinDaoLayer, this)),
			this.$managerLayout.on("touchmove", ".img_site_yindao", $.proxy(this.onYinDaoTouchMove, this)),
			this.$managerLayout.find(".icon_go_back").on("click", $.proxy(this.onManagerBack, this)),
			this.$managerLayout.on("click", ".btn_nav_cpl", $.proxy(this.onSortComplete, this)),
			o.on("blockOrderResorted", $.proxy(this.onBlockResorted, this))
		},
		initPage: function () {
			this.setStaticList(),
			Cookie.get("home_drag_yindao_layer") && this.onHideYinDaoLayer()
		},
		setStaticList: function () {
			for (var t = [], e = 0; e < this.$staticBlocks.length; e++) {
				var i = {};
				i.title = this.$staticBlocks.eq(e).attr("data-static"),
				t.push(i)
			}
			var o = '<li class="sort_item"><a href="javascript:;"><span class="card_name sort_lock">{title}</span></a></li>',
			a = new n(o);
			this.$staticList.html(a.render(t))
		},
		showManagerlayout: function () {
			var t = this.IP;
			o.emit("customTipHide"),
			this.beforeScrollTop = $("body").scrollTop(),
			a.goLeft(this.$mainLayout, this.$managerLayout),
			setTimeout(function () {
				this.yindaoHide || a.sendExplorStats({
					ap: "msite_setting_show_manage_all_all_" + t
				}),
				a.sendExplorStats({
					ap: "msite_setting_jump_backhome_all_all_" + t
				}),
				a.sendExplorStats({
					ap: "msite_setting_jump_save_all_all_" + t
				})
			}, 0),
			this.dragSort || (this.$dragArea.html(this.getSortList()), this.initSortable())
		},
		onManagerBack: function () {
			a.goBack(this.$mainLayout, this.$managerLayout),
			o.emit("blockOrderResorted"),
			window.scrollTo(0, this.beforeScrollTop || 0)
		},
		initSortable: function () {
			this.dragSort = new r,
			this.dragSort.init({
				container: "#j_sortablelist",
				draggable: "li",
				handle: ".icon_site_drag",
				ghostClass: "sort_active",
				onDragEnd: $.proxy(this.onDragEnd, this)
			})
		},
		onDragEnd: function (t) {
			var e = t.dragEl.attr("data-id"),
			i = t.beforeIndex,
			n = t.afterIndex,
			o = this.IP,
			r = "msite_setting_other_remove_" + e + "_" + i + "to" + n + "_" + o;
			a.sendClickStats({
				ap: r
			})
		},
		getSortList: function () {
			var t = this,
			e = '<li class="sort_item" data-name="{blockOrderId}" data-id="{blockOrderId}"><a href="javascript:;"><span class="card_name">{blockname}</span><span class="icon_font icon_site_drag"></span></a></li>',
			i = new n(e),
			o = i.render(this.orderedBlockList, function (e, i) {
					e.blockOrderId = t.blockOrder[i]
				});
			return o
		},
		onHideYinDaoLayer: function () {
			this.yindaoHide = !0,
			this.$managerLayout.find(".img_site_yindao").hide(),
			this.$dragArea.find(".sort_active").removeClass("sort_active"),
			this.$managerLayout.off("click", ".img_site_yindao", $.proxy(this.onHideYinDaoLayer, this)),
			this.$managerLayout.off("touchMove", ".img_site_yindao", $.proxy(this.onYinDaoTouchMove, this)),
			Cookie.set("home_drag_yindao_layer", "1", {
				exp: "forever"
			})
		},
		onYinDaoTouchMove: function (t) {
			t.preventDefault()
		},
		onSortComplete: function () {
			this.getNewOrder(),
			this.onManagerBack()
		},
		onAnimationEnd: function (t) {
			a.animateEnd(this.$mainLayout, this.$managerLayout, t)
		},
		getNewOrder: function () {
			var t = [];
			this.$dragArea.find("li").each(function (e, i) {
				t.push($(i).attr("data-id"))
			}),
			this.blockOrder = __homeDataStore.blockOrder = t,
			o.emit("blockOrderResorted")
		},
		onBlockResorted: function () {
			for (var t = __homeDataStore.blockOrder, e = t.length - 1; e >= 0; e--) {
				var i = t[e];
				this.$dragArea.prepend(this.$dragArea.find('li[data-id="' + i + '"]'))
			}
			this.dragSort && this.dragSort.refresh()
		}
	};
	i.exports = s
}, LTK["projects/homeChannel/home_blockManager"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = t("components/util/mUa"),
	a = t("components/util/utils"),
	r = t("components/util/events"),
	s = (t("components/touchComp/leTimer"), t("projects/homeChannel/home_customBtn")),
	c = t("projects/homeChannel/home_cardManager"),
	l = {
		init: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {
			window.info && window.info.recData ? this.data = this.formatBlockData(window.info.recData) : this.data = {},
			__homeDataStore.blockOrder = this.getBlockOrder(),
			__homeDataStore.orderedBlockList = [],
			this.blockWrapper = $("#j-content"),
			this.appRecId = ""
		},
		initEvent: function () {
			r.on("blockOrderResorted", $.proxy(this.onBlockResorted, this)),
			a.isLowerIOS() && (r.on("pageAnimateGoLeft", $.proxy(this.onPageGoLeft, this)), r.on("pageAnimateGoBack", $.proxy(this.onPageGoBack, this)))
		},
		formatBlockData: function (t) {
			for (var e = {}, i = 0; i < t.length; i++) {
				var n = t[i];
				n.fragId && (e[n.fragId] = n)
			}
			return e
		},
		onPageGoLeft: function () {
			this.blockWrapper.hide()
		},
		onPageGoBack: function () {
			this.blockWrapper.show()
		},
		initPage: function () {
			this.setOrderCookie(),
			this.addHtmlToPage(),
			Stats.bindExposure(),
			s.init({}),
			c.init({})
		},
		addHtmlToPage: function () {
			for (var t = {}, e = [], i = 0; i < __homeDataStore.blockOrder.length; i++)
				t = this.data[__homeDataStore.blockOrder[i]], t && t && t.html && (__homeDataStore.orderedBlockList.push(t), e.push(t.html));
			this.blockWrapper.html(e.join("")),
			r.emit("homeDynamicBlockOver"),
			this.initLazyImage()
		},
		initLazyImage: function () {
			$(".j_img_active").find("i[data-src]").imglazyload()
		},
		setOrderBlockList: function () {
			var t = {};
			__homeDataStore.orderedBlockList.length = 0;
			for (var e = 0; e < __homeDataStore.blockOrder.length; e++)
				t = this.data[__homeDataStore.blockOrder[e]], t && t.html && __homeDataStore.orderedBlockList.push(t)
		},
		setOrderCookie: function () {
			var t = __homeDataStore.blockOrder.join(",");
			Cookie.set("leBlockOrder", t, {
				exp: "forever"
			})
		},
		getBlockOrder: function () {
			var t = this.data,
			e = [],
			i = Cookie.get("leBlockOrder") || "",
			a = [],
			r = 0;
			for (var s in t)
				t.hasOwnProperty(s) && ("183" === t[s].contentStyle && (n.ios || o.isApp()) ? (this.appRecId = s, delete t[s]) : r++);
			if (i)
				if (a = i.split(","), r !== a.length)
					e = this.getBlockOrderFromData();
				else
					for (var c = 0; c < a.length; c++) {
						if (!this.data[a[c]]) {
							e = this.getBlockOrderFromData();
							break
						}
						e.push(a[c])
					}
			else
				e = this.getBlockOrderFromData();
			return e
		},
		getBlockOrderFromData: function () {
			var t = [];
			if (window.info && window.info.recData && window.info.recData.length)
				for (var e = 0; e < window.info.recData.length; e++)
					window.info.recData[e].fragId !== this.appRecId && t.push(window.info.recData[e].fragId);
			return t
		},
		onBlockResorted: function () {
			this.setOrderCookie(),
			this.resortBlockList(),
			this.setOrderBlockList()
		},
		resortBlockList: function () {
			for (var t = __homeDataStore.blockOrder, e = t.length - 1; e >= 0; e--) {
				var i = t[e];
				this.blockWrapper.prepend(this.blockWrapper.find('section[data-id="' + i + '"]'))
			}
		}
	};
	i.exports = l
}, LTK["air/env/isIE6"] = function (t, e, i) {
	i.exports = !window.XMLHttpRequest && !!window.ActiveXObject
}, LTK["air/ui/mask"] = function (t, e, i) {
	var n = t("air/env/isIE6"),
	o = {
		$layer: null,
		_zIndex: 8e3,
		setZIndex: function (t) {
			return this._zIndex = t,
			this.$layer.css("z-index", t),
			this
		},
		getZIndex: function () {
			return this._zIndex
		},
		onClick: function (t) {
			return this._click = t,
			this
		},
		show: function (t) {
			return n && this.$layer.css("height", $(document).height()),
			this.$layer.css("opacity", t || .2).show(),
			this
		},
		hide: function () {
			this._click = null,
			this.$layer.hide()
		}
	},
	a = $('<div style="display:none;background:none repeat scroll 0 0 #000000;width:100%;height:100%;position:' + (n ? "absolute" : "fixed") + '; top:0; left:0;"></div>');
	$(document.body).append(a),
	o.$layer = a,
	a.on("click", function () {
		o._click && o._click()
	}),
	i.exports = o
}, LTK["air/event/resize"] = function (t, e, i) {
	var n = {},
	o = 1,
	a = "resize._" + (new Date).getTime() + "_";
	n.add = function (t, e) {
		var i = 0,
		n = a + o++;
		return e || (e = 25),
		$(window).on(n, function () {
			clearTimeout(i),
			i = setTimeout(t, e)
		}),
		n
	},
	n.remove = function (t) {
		$(window).off(t)
	},
	i.exports = n
}, LTK["air/ui/overlay"] = function (t, e, i) {
	function n(e) {
		var i = this;
		i.mask = e.mask === !1 ? !1 : e.mask || .2,
		i.onClickMask = e.onClickMask || !1,
		i.onShow = e.onShow || c,
		i.onHide = e.onHide || c,
		i.onClose = e.onClose || c,
		i.showFn = e.showFn || !1,
		i.hideFn = e.hideFn || !1;
		var n;
		e.html ? (i.$box = n = $(e.html), $(document.body).append(n)) : "string" == typeof n ? i.$box = n = $(n) : i.$box = n = e.$box,
		i.fixed = e.fixed === !1 ? !1 : !0,
		n.css("position", i.fixed ? "fixed" : "absolute"),
		n.css("z-index", o),
		i._zIndex = o++,
		i.$underlay = {
			css: c,
			show: c,
			hide: c,
			remove: c
		},
		i._calcSize(),
		e.underlay && i._initUnderlay(),
		e.draggable ? (i._drag(), i.resize = "") : i.resize = t("air/event/resize").add(function () {
				i.setMiddle()
			}),
		setTimeout(function () {
			i._bindEvents(e.events),
			e.visible === !1 || i.show(),
			e.autoClose && setTimeout(function () {
				i.close()
			}, e.autoClose)
		}, 80),
		a && i._fixIE6()
	}
	var o = 8001,
	a = t("air/env/isIE6"),
	r = t("air/ui/mask"),
	s = $(window),
	c = function () {};
	n.prototype = {
		constructor: n,
		_bindEvents: function (t) {
			var e,
			i,
			n = this,
			o = n.$box;
			for (e in t)
				i = e.split(/ +/), 2 === i.length && o.find(i[1]).on(i[0], function (t) {
					return function (e) {
						t.call(n, e, this)
					}
				}
					(t[e]))
		},
		_calcSize: function () {
			var t = this,
			e = t.$box;
			e.outerWidth ? (t.width = e.outerWidth(), t.height = e.outerHeight()) : (t.width = e.width(), t.height = e.height()),
			t.$underlay.css({
				width: t.width,
				height: t.height
			})
		},
		setMiddle: function () {
			return this._calcSize(),
			this.setPosition({
				top: (s.height() - this.height) / 2,
				left: (s.width() - this.width) / 2
			}),
			this
		},
		setPosition: function (t) {
			var e = t.top,
			i = t.left;
			return e && ((!this.fixed || a) && (e += s.scrollTop()), t.top = e > 0 ? e : 0),
			i && (a && (i += s.scrollLeft()), t.left = i > 0 ? i : 0),
			this.$box.css(t),
			this.$underlay.css(t),
			this
		},
		show: function () {
			var t = this;
			return t.showFn ? t.showFn() : (t.$box.css("display", "block"), t.setMiddle(), t.$box.css("visibility", "visible")),
			t.$underlay.show(),
			t.mask && (r.setZIndex(t._zIndex - 1).show(t.mask), t.onClickMask && r.onClick(function () {
					t.onClickMask()
				})),
			t
		},
		hide: function () {
			return this.hideFn ? this.hideFn() : this.$box.css("display", "none").css("visibility", "hidden"),
			this.$underlay.hide(),
			this.mask && r.hide(),
			this
		},
		close: function () {
			if (!this._closed) {
				this._closed = !0;
				var t = this.$box;
				this.hideFn ? this.hideFn() : t.css("visibility", "hidden"),
				setTimeout(function () {
					t.remove()
				}, 3e3),
				this.$underlay.remove(),
				this.mask && r.hide(),
				this.resize && s.off(this.resize)
			}
		},
		setContent: function (t) {
			return this.$box.find(".j-content").html(t),
			this
		},
		_drag: function () {
			var t = this.$box,
			e = t.find(".j-dragbar");
			if (e.length) {
				var i,
				n,
				o = this.$underlay,
				a = function (e) {
					var a = e.pageX - i,
					r = e.pageY - n;
					0 > a && (a = 0),
					0 > r && (r = 0),
					t.css({
						top: r,
						left: a
					}),
					o.css({
						top: r,
						left: a
					})
				},
				r = function () {
					document.onselectstart = function () {
						return !0
					},
					$(document).off("mousemove", a).off("mouseup", r)
				};
				e.on("mousedown", function (e) {
					document.onselectstart = function () {
						return !1
					},
					e.preventDefault(),
					i = e.pageX - parseInt(t.css("left")),
					n = e.pageY - parseInt(t.css("top")),
					$(document).on("mousemove", a).on("mouseup", r)
				})
			}
		},
		_initUnderlay: function () {
			this.$underlay = $('<iframe style="background:none repeat scroll 0 0 #ffffff;overflow:hidden; position:' + (this.fixed ? "fixed" : "absolute") + "; z-index:" + this._zIndex + "; width:" + this.width + "px;height:" + this.height + 'px; border:none; display:none;" frameborder="0"></iframe>'),
			this.$box.before(this.$underlay)
		},
		_fixIE6: function () {
			var t = this;
			t.fixed && (t.$box.css("position", "absolute"), t.$underlay.css("position", "absolute"), s.on("scroll", function () {
					t.setPosition({
						top: (s.height() - t.height) / 2
					})
				}))
		}
	},
	i.exports = n
}, LTK["air/ui/tips"] = function (t, e, i) {
	function n(t) {
		"string" == typeof t && (t = {
				content: t
			});
		var e = {
			mask: !1,
			autoClose: 3e3,
			content: "å†…å®¹",
			hideFn: function () {
				this.$box.fadeOut()
			}
		};
		for (var i in t)
			e[i] = t[i];
		return e.html = t.html || o.replace("{content}", t.content),
		new a(e)
	}
	var o = '<div style="width:100px; padding:6px; background-color:#fff; position:fixed; top:0; left:0;color:#000; font-size:14px; border:3px solid #ddd; border-radius:5px; text-align:center;">{content}</div>',
	a = t("air/ui/overlay");
	i.exports = n
}, LTK["air/string/thousand"] = function (t, e, i) {
	i.exports = function (t) {
		return String(t).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
	}
}, LTK["projects/homeChannel/comp/components/util"] = function (t, e, i) {
	"use strict";
	var n = {
		thousand: t("air/string/thousand"),
		formatCount: function (t) {
			if (parseInt(t, 10) >= 0) {
				var e = "";
				return e = 1e4 > t ? this.thousand(t) : 1e8 > t ? "zh_cn" === info.lang || "zh_hk" === info.lang ? (t / 1e4).toFixed(1) + info.langPack.item_w : 1e6 > t ? (t / 1e3).toFixed(1) + " K" : (t / 1e6).toFixed(1) + " M" : "zh_cn" === info.lang || "zh_hk" === info.lang ? (t / 1e8).toFixed(1) + info.langPack.item_y : 1e9 > t ? (t / 1e6).toFixed(1) + " M" : 1e12 > t ? (t / 1e9).toFixed(1) + " B" : (t / 1e12).toFixed(1) + " T"
			}
			return ""
		}
	};
	i.exports = n
}, LTK["projects/homeChannel/comp/onlineNum"] = function (t, e, i) {
	"use strict";
	var n = t("components/util/events"),
	o = (t("air/ui/tips"), t("projects/homeChannel/comp/components/util")),
	a = {
		init: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {
			this.liveids = [],
			this.lunboids = [],
			this.weishiids = [],
			this.vids = [],
			this.a = 0,
			this.b = 0,
			this.c = 0,
			this.d = 0,
			this.f = 0,
			this.zhibo = {},
			this.lunbo = {},
			this.weishi = {},
			this.vid = {},
			this.isVid = 0,
			this.otherId = 0
		},
		initEvent: function () {
			n.on("dataReady", $.proxy(this.inputData, this)),
			n.on("dataAll", $.proxy(this.inputData, this))
		},
		initPage: function () {
			var t,
			e,
			i,
			n,
			o = this;
			$(".j-onlineNum").each(function () {
				t = $(this).attr("data-liveid"),
				e = $(this).attr("data-vid"),
				i = $(this).attr("data-lunboid"),
				n = $(this).attr("data-weishiid"),
				e && (o.vids[o.a] = e, o.a++),
				i && (o.lunboids[o.b] = i, o.b++),
				n && (o.weishiids[o.c] = n, o.c++),
				t && (o.liveids[o.d] = t, o.d++)
			}),
			o.i = 0,
			o.a && (o.f = 1),
			o.b && o.i++,
			o.c && o.i++,
			o.d && o.i++,
			o.b || o.c || o.d || (this.otherId = 1),
			o.a && this.getDataVid(),
			o.b && this.getData("lunbo"),
			o.c && this.getData("weishi"),
			o.d && this.getData("zhibo")
		},
		getData: function (t) {
			var e,
			i = this,
			o = t;
			switch (o) {
			case "zhibo":
				e = this.liveids.join(",");
				break;
			case "weishi":
				e = this.weishiids.join(",");
				break;
			case "lunbo":
				e = this.lunboids.join(",")
			}
			var a = le.api_host.d_api + "/combine/getlivecounts";
			$.ajax({
				url: a,
				dataType: "jsonp",
				data: {
					type: o,
					channel_flag: e
				},
				success: function (t) {
					i[o] = t.data,
					i.f ? (i.otherId = 1, i.i--, i.isVid && 0 == i.i && n.emit("dataAll")) : (i.i--, 0 == i.i && n.emit("dataReady"))
				}
			})
		},
		getDataVid: function () {
			var t = this,
			e = this.vids.join(","),
			i = le.api_host.v_stat + "/vplay/getIdsInfo";
			$.ajax({
				url: i,
				dataType: "jsonp",
				data: {
					type: "vlist",
					ids: e
				},
				success: function (e) {
					for (var i, o = {}, a = 0; a < e.length; a++)
						i = t.vids[a], o[i] = e[a].play_count;
					t.vid = o,
					t.isVid = 1,
					t.otherId && n.emit("dataAll")
				}
			})
		},
		inputData: function () {
			var t,
			e,
			i,
			a,
			r = this;
			$(".j-onlineNum").each(function () {
				t = $(this).attr("data-liveid"),
				e = $(this).attr("data-vid"),
				i = $(this).attr("data-lunboid"),
				a = $(this).attr("data-weishiid"),
				t && r.zhibo[t] && $(this).html('<i class="icon_font icon_user1"></i>' + o.formatCount(r.zhibo[t]) + info.langPack.viewtip),
				i && r.lunbo[i] && $(this).html(o.formatCount(r.lunbo[i]) + info.langPack.viewtip),
				a && r.weishi[a] && $(this).html(o.formatCount(r.weishi[a]) + info.langPack.viewtip),
				e && r.vid[e] && $(this).html('<i class="icon_font icon_change1"></i>' + info.langPack.view + o.formatCount(r.vid[e]) + info.langPack.item_c + info.langPack.view_h)
			}),
			n.emit("dataReadyPage")
		}
	};
	i.exports = a,
	a.init()
}, LTK["projects/homeChannel/home"] = function (t, e, i) {
	"use strict";
	var n = t("air/env/ua"),
	o = t("components/util/mUa"),
	a = (t("components/util/events"), t("components/util/utils")),
	r = t("projects/homeChannel/public/pub_change"),
	s = t("projects/homeChannel/home_blockManager"),
	c = {
		init: function () {
			le.m.startPage.init(),
			this.initDom(),
			this.initPage(),
			this.initEvent()
		},
		initDom: function () {
			this.$managerBtn = $("#j_manager_btn"),
			this.iosSafari = n.safari && n.ios,
			this.IP = info.region || "CN"
		},
		initEvent: function () {},
		initPage: function () {
			s.init(),
			r.init({
				container: "#j_mainLayout",
				changeBtn: ".changeBox"
			}),
			this.addDesktopTip(),
			setTimeout(function () {
				t("projects/homeChannel/comp/onlineNum")
			}, 0)
		},
		addDesktopTip: function () {
			var t = this,
			e = this.IP,
			i = "msite_home_download_apk_all_all_" + e,
			n = "msite_home_download_adddesk_all_all_" + e,
			r = '<div class="addDesktop j-exposure-stat" data-ap="' + n + '"><a href="javascript:;" id="j-addDesktop" class="m_index_logo"><div class="logo"><span class="icon_font icon_logo1"></span></div><span class="addDesktop_txt">' + (info.langPack.tap || "ç‚¹å‡»") + '<i class="icon_font icon_share4"></i>' + (info.langPack.addToDesk || "æ·»åŠ åˆ°æ‰‹æœºæ¡Œé¢ï¼Œéšæ—¶æ‰“å¼€çœ‹è§†é¢‘") + "</span></a></div>",
			s = '<div class="addDesktop j-exposure-stat" data-ap="' + i + '"><a href="javascript:;" id="j-addDesktop" class="android"><div class="logo"><span class="icon_font icon_logo1"></span></div><div class="android_tit"><h3>' + (info.langPack.letv || "ä¹è§†è§†é¢‘") + "</h3><p>" + (info.langPack.bottomDaoliu || "ä½¿ç”¨ä¹è§†è§†é¢‘APPï¼Œé«˜æ¸…å¤§å‰§æŠ¢å…ˆçœ‹") + "</p></div><span>" + (info.langPack.downloadFree || "å…è´¹ä¸‹è½½") + "</span></a></div>",
			c = s;
			this.iosSafari && (c = r),
			o.isApp() || this.$managerBtn.after(c),
			$("#j-addDesktop").on("click", function () {
				var i = "msite_home_download_adddesk_all_all_" + e;
				t.iosSafari || (i = "msite_home_download_apk_all_all_" + e, a.daoliuApp({
						daoliuConfig: {
							url: le.api_host.app_m + "/download_general.php?ref=010112327",
							wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.letv.android.client&ckey=CK1302109994632",
							type: "home"
						},
						position: "home"
					})),
				a.sendClickStats({
					ap: i
				})
			}),
			Stats.bindExposure()
		}
	};
	i.exports = c
}, LTK["main/homeChannel/home"] = function (t) {
	"use strict";
	var e = t("projects/homeChannel/public"),
	i = t("projects/homeChannel/home"),
	n = {
		init: function () {
			this.initDom(),
			this.initEvent(),
			this.initPage()
		},
		initDom: function () {},
		initEvent: function () {},
		initPage: function () {
			e.init(),
			i.init()
		}
	};
	n.init()
}, require("main/homeChannel/home");
