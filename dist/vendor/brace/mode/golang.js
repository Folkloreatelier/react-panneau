flklrJsonp([ 142 ], {
    55: function(e, t) {
        ace.define("ace/mode/doc_comment_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var i = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules, r = function() {
                this.$rules = {
                    start: [ {
                        token: "comment.doc.tag",
                        regex: "@[\\w\\d_]+"
                    }, r.getTagRule(), {
                        defaultToken: "comment.doc",
                        caseInsensitive: !0
                    } ]
                };
            };
            i.inherits(r, o), r.getTagRule = function(e) {
                return {
                    token: "comment.doc.tag.storage.type",
                    regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                };
            }, r.getStartRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\/\\*(?=\\*)",
                    next: e
                };
            }, r.getEndRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\*\\/",
                    next: e
                };
            }, t.DocCommentHighlightRules = r;
        }), ace.define("ace/mode/golang_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            var i = e("../lib/oop"), o = e("./doc_comment_highlight_rules").DocCommentHighlightRules, r = e("./text_highlight_rules").TextHighlightRules, a = function() {
                var e = this.createKeywordMapper({
                    keyword: "else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var",
                    "constant.language": "nil|true|false|iota",
                    "support.function": "new|close|cap|copy|panic|panicln|print|println|len|make|delete|real|recover|imag|append",
                    "support.type": "string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error"
                }, ""), t = "\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'\"\\\\])".replace(/\\h/g, "[a-fA-F\\d]");
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    }, o.getStartRule("doc-start"), {
                        token: "comment.start",
                        regex: "\\/\\*",
                        next: "comment"
                    }, {
                        token: "string",
                        regex: /"(?:[^"\\]|\\.)*?"/
                    }, {
                        token: "string",
                        regex: "`",
                        next: "bqstring"
                    }, {
                        token: "constant.numeric",
                        regex: "'(?:[^\\'�-�]|[�-�][�-�]|" + t.replace('"', "") + ")'"
                    }, {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                    }, {
                        token: [ "keyword", "text", "entity.name.function" ],
                        regex: "(func)(\\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\\b"
                    }, {
                        token: function(t) {
                            return "(" == t[t.length - 1] ? [ {
                                type: e(t.slice(0, -1)) || "support.function",
                                value: t.slice(0, -1)
                            }, {
                                type: "paren.lparen",
                                value: t.slice(-1)
                            } ] : e(t) || "identifier";
                        },
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"
                    }, {
                        token: "keyword.operator",
                        regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="
                    }, {
                        token: "punctuation.operator",
                        regex: "\\?|\\:|\\,|\\;|\\."
                    }, {
                        token: "paren.lparen",
                        regex: "[[({]"
                    }, {
                        token: "paren.rparen",
                        regex: "[\\])}]"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    } ],
                    comment: [ {
                        token: "comment.end",
                        regex: "\\*\\/",
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    } ],
                    bqstring: [ {
                        token: "string",
                        regex: "`",
                        next: "start"
                    }, {
                        defaultToken: "string"
                    } ]
                }, this.embedRules(o, "doc-", [ o.getEndRule("start") ]);
            };
            i.inherits(a, r), t.GolangHighlightRules = a;
        }), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, n) {
            "use strict";
            var i = e("../range").Range, o = function() {};
            (function() {
                this.checkOutdent = function(e, t) {
                    return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
                }, this.autoOutdent = function(e, t) {
                    var n = e.getLine(t), o = n.match(/^(\s*\})/);
                    if (!o) return 0;
                    var r = o[1].length, a = e.findMatchingBracket({
                        row: t,
                        column: r
                    });
                    if (!a || a.row == t) return 0;
                    var g = this.$getIndent(e.getLine(a.row));
                    e.replace(new i(t, 0, t, r - 1), g);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(o.prototype), t.MatchingBraceOutdent = o;
        }), ace.define("ace/mode/folding/cstyle", [ "require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode" ], function(e, t, n) {
            "use strict";
            var i = e("../../lib/oop"), o = e("../../range").Range, r = e("./fold_mode").FoldMode, a = t.FoldMode = function(e) {
                e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), 
                this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)));
            };
            i.inherits(a, r), function() {
                this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/, 
                this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, 
                this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, 
                this.getFoldWidget = function(e, t, n) {
                    var i = e.getLine(n);
                    if (this.singleLineBlockCommentRe.test(i) && !this.startRegionRe.test(i) && !this.tripleStarBlockCommentRe.test(i)) return "";
                    var o = this._getFoldWidgetBase(e, t, n);
                    return !o && this.startRegionRe.test(i) ? "start" : o;
                }, this.getFoldWidgetRange = function(e, t, n, i) {
                    var o = e.getLine(n);
                    if (this.startRegionRe.test(o)) return this.getCommentRegionBlock(e, o, n);
                    var r = o.match(this.foldingStartMarker);
                    if (r) {
                        var a = r.index;
                        if (r[1]) return this.openingBracketBlock(e, r[1], n, a);
                        var g = e.getCommentFoldRange(n, a + r[0].length, 1);
                        return g && !g.isMultiLine() && (i ? g = this.getSectionRange(e, n) : "all" != t && (g = null)), 
                        g;
                    }
                    if ("markbegin" !== t) {
                        var r = o.match(this.foldingStopMarker);
                        if (r) {
                            var a = r.index + r[0].length;
                            return r[1] ? this.closingBracketBlock(e, r[1], n, a) : e.getCommentFoldRange(n, a, -1);
                        }
                    }
                }, this.getSectionRange = function(e, t) {
                    var n = e.getLine(t), i = n.search(/\S/), r = t, a = n.length;
                    t += 1;
                    for (var g = t, s = e.getLength(); ++t < s; ) {
                        n = e.getLine(t);
                        var c = n.search(/\S/);
                        if (-1 !== c) {
                            if (i > c) break;
                            var l = this.getFoldWidgetRange(e, "all", t);
                            if (l) {
                                if (l.start.row <= r) break;
                                if (l.isMultiLine()) t = l.end.row; else if (i == c) break;
                            }
                            g = t;
                        }
                    }
                    return new o(r, a, g, e.getLine(g).length);
                }, this.getCommentRegionBlock = function(e, t, n) {
                    for (var i = t.search(/\s*$/), r = e.getLength(), a = n, g = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, s = 1; ++n < r; ) {
                        t = e.getLine(n);
                        var c = g.exec(t);
                        if (c && (c[1] ? s-- : s++, !s)) break;
                    }
                    var l = n;
                    if (l > a) return new o(a, i, l, t.length);
                };
            }.call(a.prototype);
        }), ace.define("ace/mode/golang", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/golang_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle" ], function(e, t, n) {
            var i = e("../lib/oop"), o = e("./text").Mode, r = e("./golang_highlight_rules").GolangHighlightRules, a = e("./matching_brace_outdent").MatchingBraceOutdent, g = e("./behaviour/cstyle").CstyleBehaviour, s = e("./folding/cstyle").FoldMode, c = function() {
                this.HighlightRules = r, this.$outdent = new a(), this.foldingRules = new s(), this.$behaviour = new g();
            };
            i.inherits(c, o), function() {
                this.lineCommentStart = "//", this.blockComment = {
                    start: "/*",
                    end: "*/"
                }, this.getNextLineIndent = function(e, t, n) {
                    var i = this.$getIndent(t), o = this.getTokenizer().getLineTokens(t, e), r = o.tokens;
                    o.state;
                    if (r.length && "comment" == r[r.length - 1].type) return i;
                    if ("start" == e) {
                        t.match(/^.*[\{\(\[]\s*$/) && (i += n);
                    }
                    return i;
                }, this.checkOutdent = function(e, t, n) {
                    return this.$outdent.checkOutdent(t, n);
                }, this.autoOutdent = function(e, t, n) {
                    this.$outdent.autoOutdent(t, n);
                }, this.$id = "ace/mode/golang";
            }.call(c.prototype), t.Mode = c;
        });
    }
});
//# sourceMappingURL=golang.js.map