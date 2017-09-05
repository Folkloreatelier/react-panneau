flklrJsonp([ 165 ], {
    25: function(e, t) {
        ace.define("ace/mode/c9search_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            function safeCreateRegexp(e, t) {
                try {
                    return new RegExp(e, t);
                } catch (e) {}
            }
            var r = e("../lib/oop"), i = e("../lib/lang"), a = e("./text_highlight_rules").TextHighlightRules, s = function() {
                this.$rules = {
                    start: [ {
                        tokenNames: [ "c9searchresults.constant.numeric", "c9searchresults.text", "c9searchresults.text", "c9searchresults.keyword" ],
                        regex: /(^\s+[0-9]+)(:)(\d*\s?)([^\r\n]+)/,
                        onMatch: function(e, t, n) {
                            var r = this.splitRegex.exec(e), i = this.tokenNames, a = [ {
                                type: i[0],
                                value: r[1]
                            }, {
                                type: i[1],
                                value: r[2]
                            } ];
                            r[3] && (" " == r[3] ? a[1] = {
                                type: i[1],
                                value: r[2] + " "
                            } : a.push({
                                type: i[1],
                                value: r[3]
                            }));
                            var s, o = n[1], c = r[4], u = 0;
                            if (o && o.exec) for (o.lastIndex = 0; s = o.exec(c); ) {
                                var h = c.substring(u, s.index);
                                if (u = o.lastIndex, h && a.push({
                                    type: i[2],
                                    value: h
                                }), s[0]) a.push({
                                    type: i[3],
                                    value: s[0]
                                }); else if (!h) break;
                            }
                            return u < c.length && a.push({
                                type: i[2],
                                value: c.substr(u)
                            }), a;
                        }
                    }, {
                        regex: "^Searching for [^\\r\\n]*$",
                        onMatch: function(e, t, n) {
                            var r = e.split("");
                            if (r.length < 3) return "text";
                            var a, s, o, c = 0, u = [ {
                                value: r[c++] + "'",
                                type: "text"
                            }, {
                                value: s = r[c++],
                                type: "text"
                            }, {
                                value: "'" + r[c++],
                                type: "text"
                            } ];
                            for (" in" !== r[2] && (o = r[c], u.push({
                                value: "'" + r[c++] + "'",
                                type: "text"
                            }, {
                                value: r[c++],
                                type: "text"
                            })), u.push({
                                value: " " + r[c++] + " ",
                                type: "text"
                            }), r[c + 1] ? (a = r[c + 1], u.push({
                                value: "(" + r[c + 1] + ")",
                                type: "text"
                            }), c += 1) : c -= 1; c++ < r.length; ) r[c] && u.push({
                                value: r[c],
                                type: "text"
                            });
                            o && (s = o, a = ""), s && (/regex/.test(a) || (s = i.escapeRegExp(s)), /whole/.test(a) && (s = "\\b" + s + "\\b"));
                            var h = s && safeCreateRegexp("(" + s + ")", / sensitive/.test(a) ? "g" : "ig");
                            return h && (n[0] = t, n[1] = h), u;
                        }
                    }, {
                        regex: "^(?=Found \\d+ matches)",
                        token: "text",
                        next: "numbers"
                    }, {
                        token: "string",
                        regex: "^\\S:?[^:]+",
                        next: "numbers"
                    } ],
                    numbers: [ {
                        regex: "\\d+",
                        token: "constant.numeric"
                    }, {
                        regex: "$",
                        token: "text",
                        next: "start"
                    } ]
                }, this.normalizeRules();
            };
            r.inherits(s, a), t.C9SearchHighlightRules = s;
        }), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, n) {
            "use strict";
            var r = e("../range").Range, i = function() {};
            (function() {
                this.checkOutdent = function(e, t) {
                    return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
                }, this.autoOutdent = function(e, t) {
                    var n = e.getLine(t), i = n.match(/^(\s*\})/);
                    if (!i) return 0;
                    var a = i[1].length, s = e.findMatchingBracket({
                        row: t,
                        column: a
                    });
                    if (!s || s.row == t) return 0;
                    var o = this.$getIndent(e.getLine(s.row));
                    e.replace(new r(t, 0, t, a - 1), o);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(i.prototype), t.MatchingBraceOutdent = i;
        }), ace.define("ace/mode/folding/c9search", [ "require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode" ], function(e, t, n) {
            "use strict";
            var r = e("../../lib/oop"), i = e("../../range").Range, a = e("./fold_mode").FoldMode, s = t.FoldMode = function() {};
            r.inherits(s, a), function() {
                this.foldingStartMarker = /^(\S.*:|Searching for.*)$/, this.foldingStopMarker = /^(\s+|Found.*)$/, 
                this.getFoldWidgetRange = function(e, t, n) {
                    var r = e.doc.getAllLines(n), a = r[n], s = /^(Found.*|Searching for.*)$/, o = /^(\S.*:|\s*)$/, c = s.test(a) ? s : o, u = n, h = n;
                    if (this.foldingStartMarker.test(a)) {
                        for (var l = n + 1, g = e.getLength(); l < g && !c.test(r[l]); l++) ;
                        h = l;
                    } else if (this.foldingStopMarker.test(a)) {
                        for (var l = n - 1; l >= 0 && (a = r[l], !c.test(a)); l--) ;
                        u = l;
                    }
                    if (u != h) {
                        var d = a.length;
                        return c === s && (d = a.search(/\(Found[^)]+\)$|$/)), new i(u, d, h, 0);
                    }
                };
            }.call(s.prototype);
        }), ace.define("ace/mode/c9search", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/c9search_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/folding/c9search" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), i = e("./text").Mode, a = e("./c9search_highlight_rules").C9SearchHighlightRules, s = e("./matching_brace_outdent").MatchingBraceOutdent, o = e("./folding/c9search").FoldMode, c = function() {
                this.HighlightRules = a, this.$outdent = new s(), this.foldingRules = new o();
            };
            r.inherits(c, i), function() {
                this.getNextLineIndent = function(e, t, n) {
                    return this.$getIndent(t);
                }, this.checkOutdent = function(e, t, n) {
                    return this.$outdent.checkOutdent(t, n);
                }, this.autoOutdent = function(e, t, n) {
                    this.$outdent.autoOutdent(t, n);
                }, this.$id = "ace/mode/c9search";
            }.call(c.prototype), t.Mode = c;
        });
    }
});
//# sourceMappingURL=c9search.js.map