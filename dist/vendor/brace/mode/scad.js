flklrJsonp([ 87 ], {
    124: function(e, t) {
        ace.define("ace/mode/doc_comment_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var i = e("../lib/oop"), r = e("./text_highlight_rules").TextHighlightRules, o = function() {
                this.$rules = {
                    start: [ {
                        token: "comment.doc.tag",
                        regex: "@[\\w\\d_]+"
                    }, o.getTagRule(), {
                        defaultToken: "comment.doc",
                        caseInsensitive: !0
                    } ]
                };
            };
            i.inherits(o, r), o.getTagRule = function(e) {
                return {
                    token: "comment.doc.tag.storage.type",
                    regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                };
            }, o.getStartRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\/\\*(?=\\*)",
                    next: e
                };
            }, o.getEndRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\*\\/",
                    next: e
                };
            }, t.DocCommentHighlightRules = o;
        }), ace.define("ace/mode/scad_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var i = e("../lib/oop"), r = (e("../lib/lang"), e("./doc_comment_highlight_rules").DocCommentHighlightRules), o = e("./text_highlight_rules").TextHighlightRules, s = function() {
                var e = this.createKeywordMapper({
                    "variable.language": "this",
                    keyword: "module|if|else|for",
                    "constant.language": "NULL"
                }, "identifier");
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    }, r.getStartRule("start"), {
                        token: "comment",
                        regex: "\\/\\*",
                        next: "comment"
                    }, {
                        token: "string",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                    }, {
                        token: "string",
                        regex: '["].*\\\\$',
                        next: "qqstring"
                    }, {
                        token: "string",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                    }, {
                        token: "string",
                        regex: "['].*\\\\$",
                        next: "qstring"
                    }, {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                    }, {
                        token: "constant",
                        regex: "<[a-zA-Z0-9.]+>"
                    }, {
                        token: "keyword",
                        regex: "(?:use|include)"
                    }, {
                        token: e,
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                    }, {
                        token: "keyword.operator",
                        regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"
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
                        token: "comment",
                        regex: ".*?\\*\\/",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: ".+"
                    } ],
                    qqstring: [ {
                        token: "string",
                        regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
                        next: "start"
                    }, {
                        token: "string",
                        regex: ".+"
                    } ],
                    qstring: [ {
                        token: "string",
                        regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
                        next: "start"
                    }, {
                        token: "string",
                        regex: ".+"
                    } ]
                }, this.embedRules(r, "doc-", [ r.getEndRule("start") ]);
            };
            i.inherits(s, o), t.scadHighlightRules = s;
        }), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, n) {
            "use strict";
            var i = e("../range").Range, r = function() {};
            (function() {
                this.checkOutdent = function(e, t) {
                    return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
                }, this.autoOutdent = function(e, t) {
                    var n = e.getLine(t), r = n.match(/^(\s*\})/);
                    if (!r) return 0;
                    var o = r[1].length, s = e.findMatchingBracket({
                        row: t,
                        column: o
                    });
                    if (!s || s.row == t) return 0;
                    var a = this.$getIndent(e.getLine(s.row));
                    e.replace(new i(t, 0, t, o - 1), a);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(r.prototype), t.MatchingBraceOutdent = r;
        }), ace.define("ace/mode/folding/cstyle", [ "require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode" ], function(e, t, n) {
            "use strict";
            var i = e("../../lib/oop"), r = e("../../range").Range, o = e("./fold_mode").FoldMode, s = t.FoldMode = function(e) {
                e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), 
                this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)));
            };
            i.inherits(s, o), function() {
                this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/, 
                this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, 
                this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, 
                this.getFoldWidget = function(e, t, n) {
                    var i = e.getLine(n);
                    if (this.singleLineBlockCommentRe.test(i) && !this.startRegionRe.test(i) && !this.tripleStarBlockCommentRe.test(i)) return "";
                    var r = this._getFoldWidgetBase(e, t, n);
                    return !r && this.startRegionRe.test(i) ? "start" : r;
                }, this.getFoldWidgetRange = function(e, t, n, i) {
                    var r = e.getLine(n);
                    if (this.startRegionRe.test(r)) return this.getCommentRegionBlock(e, r, n);
                    var o = r.match(this.foldingStartMarker);
                    if (o) {
                        var s = o.index;
                        if (o[1]) return this.openingBracketBlock(e, o[1], n, s);
                        var a = e.getCommentFoldRange(n, s + o[0].length, 1);
                        return a && !a.isMultiLine() && (i ? a = this.getSectionRange(e, n) : "all" != t && (a = null)), 
                        a;
                    }
                    if ("markbegin" !== t) {
                        var o = r.match(this.foldingStopMarker);
                        if (o) {
                            var s = o.index + o[0].length;
                            return o[1] ? this.closingBracketBlock(e, o[1], n, s) : e.getCommentFoldRange(n, s, -1);
                        }
                    }
                }, this.getSectionRange = function(e, t) {
                    var n = e.getLine(t), i = n.search(/\S/), o = t, s = n.length;
                    t += 1;
                    for (var a = t, g = e.getLength(); ++t < g; ) {
                        n = e.getLine(t);
                        var c = n.search(/\S/);
                        if (-1 !== c) {
                            if (i > c) break;
                            var l = this.getFoldWidgetRange(e, "all", t);
                            if (l) {
                                if (l.start.row <= o) break;
                                if (l.isMultiLine()) t = l.end.row; else if (i == c) break;
                            }
                            a = t;
                        }
                    }
                    return new r(o, s, a, e.getLine(a).length);
                }, this.getCommentRegionBlock = function(e, t, n) {
                    for (var i = t.search(/\s*$/), o = e.getLength(), s = n, a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, g = 1; ++n < o; ) {
                        t = e.getLine(n);
                        var c = a.exec(t);
                        if (c && (c[1] ? g-- : g++, !g)) break;
                    }
                    var l = n;
                    if (l > s) return new r(s, i, l, t.length);
                };
            }.call(s.prototype);
        }), ace.define("ace/mode/scad", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/scad_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle" ], function(e, t, n) {
            "use strict";
            var i = e("../lib/oop"), r = e("./text").Mode, o = e("./scad_highlight_rules").scadHighlightRules, s = e("./matching_brace_outdent").MatchingBraceOutdent, a = e("./behaviour/cstyle").CstyleBehaviour, g = e("./folding/cstyle").FoldMode, c = function() {
                this.HighlightRules = o, this.$outdent = new s(), this.$behaviour = new a(), this.foldingRules = new g();
            };
            i.inherits(c, r), function() {
                this.lineCommentStart = "//", this.blockComment = {
                    start: "/*",
                    end: "*/"
                }, this.getNextLineIndent = function(e, t, n) {
                    var i = this.$getIndent(t), r = this.getTokenizer().getLineTokens(t, e), o = r.tokens, s = r.state;
                    if (o.length && "comment" == o[o.length - 1].type) return i;
                    if ("start" == e) {
                        var a = t.match(/^.*[\{\(\[]\s*$/);
                        a && (i += n);
                    } else if ("doc-start" == e) {
                        if ("start" == s) return "";
                        var a = t.match(/^\s*(\/?)\*/);
                        a && (a[1] && (i += " "), i += "* ");
                    }
                    return i;
                }, this.checkOutdent = function(e, t, n) {
                    return this.$outdent.checkOutdent(t, n);
                }, this.autoOutdent = function(e, t, n) {
                    this.$outdent.autoOutdent(t, n);
                }, this.$id = "ace/mode/scad";
            }.call(c.prototype), t.Mode = c;
        });
    }
});
//# sourceMappingURL=scad.js.map