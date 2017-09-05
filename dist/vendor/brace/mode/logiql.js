flklrJsonp([ 120 ], {
    85: function(e, t) {
        ace.define("ace/mode/logiql_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var o = e("../lib/oop"), r = e("./text_highlight_rules").TextHighlightRules, i = function() {
                this.$rules = {
                    start: [ {
                        token: "comment.block",
                        regex: "/\\*",
                        push: [ {
                            token: "comment.block",
                            regex: "\\*/",
                            next: "pop"
                        }, {
                            defaultToken: "comment.block"
                        } ]
                    }, {
                        token: "comment.single",
                        regex: "//.*"
                    }, {
                        token: "constant.numeric",
                        regex: "\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?[fd]?"
                    }, {
                        token: "string",
                        regex: '"',
                        push: [ {
                            token: "string",
                            regex: '"',
                            next: "pop"
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        token: "constant.language",
                        regex: "\\b(true|false)\\b"
                    }, {
                        token: "entity.name.type.logicblox",
                        regex: "`[a-zA-Z_:]+(\\d|\\a)*\\b"
                    }, {
                        token: "keyword.start",
                        regex: "->",
                        comment: "Constraint"
                    }, {
                        token: "keyword.start",
                        regex: "--\x3e",
                        comment: "Level 1 Constraint"
                    }, {
                        token: "keyword.start",
                        regex: "<-",
                        comment: "Rule"
                    }, {
                        token: "keyword.start",
                        regex: "<--",
                        comment: "Level 1 Rule"
                    }, {
                        token: "keyword.end",
                        regex: "\\.",
                        comment: "Terminator"
                    }, {
                        token: "keyword.other",
                        regex: "!",
                        comment: "Negation"
                    }, {
                        token: "keyword.other",
                        regex: ",",
                        comment: "Conjunction"
                    }, {
                        token: "keyword.other",
                        regex: ";",
                        comment: "Disjunction"
                    }, {
                        token: "keyword.operator",
                        regex: "<=|>=|!=|<|>",
                        comment: "Equality"
                    }, {
                        token: "keyword.other",
                        regex: "@",
                        comment: "Equality"
                    }, {
                        token: "keyword.operator",
                        regex: "\\+|-|\\*|/",
                        comment: "Arithmetic operations"
                    }, {
                        token: "keyword",
                        regex: "::",
                        comment: "Colon colon"
                    }, {
                        token: "support.function",
                        regex: "\\b(agg\\s*<<)",
                        push: [ {
                            include: "$self"
                        }, {
                            token: "support.function",
                            regex: ">>",
                            next: "pop"
                        } ]
                    }, {
                        token: "storage.modifier",
                        regex: "\\b(lang:[\\w:]*)"
                    }, {
                        token: [ "storage.type", "text" ],
                        regex: "(export|sealed|clauses|block|alias|alias_all)(\\s*\\()(?=`)"
                    }, {
                        token: "entity.name",
                        regex: "[a-zA-Z_][a-zA-Z_0-9:]*(@prev|@init|@final)?(?=(\\(|\\[))"
                    }, {
                        token: "variable.parameter",
                        regex: "([a-zA-Z][a-zA-Z_0-9]*|_)\\s*(?=(,|\\.|<-|->|\\)|\\]|=))"
                    } ]
                }, this.normalizeRules();
            };
            o.inherits(i, r), t.LogiQLHighlightRules = i;
        }), ace.define("ace/mode/folding/coffee", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range" ], function(e, t, n) {
            "use strict";
            var o = e("../../lib/oop"), r = e("./fold_mode").FoldMode, i = e("../../range").Range, a = t.FoldMode = function() {};
            o.inherits(a, r), function() {
                this.getFoldWidgetRange = function(e, t, n) {
                    var o = this.indentationBlock(e, n);
                    if (o) return o;
                    var r = /\S/, a = e.getLine(n), s = a.search(r);
                    if (-1 != s && "#" == a[s]) {
                        for (var g = a.length, c = e.getLength(), l = n, u = n; ++n < c; ) {
                            a = e.getLine(n);
                            var d = a.search(r);
                            if (-1 != d) {
                                if ("#" != a[d]) break;
                                u = n;
                            }
                        }
                        if (u > l) {
                            var h = e.getLine(u).length;
                            return new i(l, g, u, h);
                        }
                    }
                }, this.getFoldWidget = function(e, t, n) {
                    var o = e.getLine(n), r = o.search(/\S/), i = e.getLine(n + 1), a = e.getLine(n - 1), s = a.search(/\S/), g = i.search(/\S/);
                    if (-1 == r) return e.foldWidgets[n - 1] = -1 != s && s < g ? "start" : "", "";
                    if (-1 == s) {
                        if (r == g && "#" == o[r] && "#" == i[r]) return e.foldWidgets[n - 1] = "", e.foldWidgets[n + 1] = "", 
                        "start";
                    } else if (s == r && "#" == o[r] && "#" == a[r] && -1 == e.getLine(n - 2).search(/\S/)) return e.foldWidgets[n - 1] = "start", 
                    e.foldWidgets[n + 1] = "", "";
                    return e.foldWidgets[n - 1] = -1 != s && s < r ? "start" : "", r < g ? "start" : "";
                };
            }.call(a.prototype);
        }), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, n) {
            "use strict";
            var o = e("../range").Range, r = function() {};
            (function() {
                this.checkOutdent = function(e, t) {
                    return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
                }, this.autoOutdent = function(e, t) {
                    var n = e.getLine(t), r = n.match(/^(\s*\})/);
                    if (!r) return 0;
                    var i = r[1].length, a = e.findMatchingBracket({
                        row: t,
                        column: i
                    });
                    if (!a || a.row == t) return 0;
                    var s = this.$getIndent(e.getLine(a.row));
                    e.replace(new o(t, 0, t, i - 1), s);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(r.prototype), t.MatchingBraceOutdent = r;
        }), ace.define("ace/mode/logiql", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/logiql_highlight_rules", "ace/mode/folding/coffee", "ace/token_iterator", "ace/range", "ace/mode/behaviour/cstyle", "ace/mode/matching_brace_outdent" ], function(e, t, n) {
            "use strict";
            var o = e("../lib/oop"), r = e("./text").Mode, i = e("./logiql_highlight_rules").LogiQLHighlightRules, a = e("./folding/coffee").FoldMode, s = e("../token_iterator").TokenIterator, g = e("../range").Range, c = e("./behaviour/cstyle").CstyleBehaviour, l = e("./matching_brace_outdent").MatchingBraceOutdent, u = function() {
                this.HighlightRules = i, this.foldingRules = new a(), this.$outdent = new l(), this.$behaviour = new c();
            };
            o.inherits(u, r), function() {
                this.lineCommentStart = "//", this.blockComment = {
                    start: "/*",
                    end: "*/"
                }, this.getNextLineIndent = function(e, t, n) {
                    var o = this.$getIndent(t), r = this.getTokenizer().getLineTokens(t, e), i = r.tokens;
                    if (/comment|string/.test(r.state)) return o;
                    if (i.length && "comment.single" == i[i.length - 1].type) return o;
                    t.match();
                    return /(-->|<--|<-|->|{)\s*$/.test(t) && (o += n), o;
                }, this.checkOutdent = function(e, t, n) {
                    return !!this.$outdent.checkOutdent(t, n) || ("\n" === n || "\r\n" === n) && !!/^\s+/.test(t);
                }, this.autoOutdent = function(e, t, n) {
                    if (!this.$outdent.autoOutdent(t, n)) {
                        var o = t.getLine(n), r = o.match(/^\s+/), i = o.lastIndexOf(".") + 1;
                        if (!r || !n || !i) return 0;
                        var a = (t.getLine(n + 1), this.getMatching(t, {
                            row: n,
                            column: i
                        }));
                        if (!a || a.start.row == n) return 0;
                        i = r[0].length;
                        var s = this.$getIndent(t.getLine(a.start.row));
                        t.replace(new g(n + 1, 0, n + 1, i), s);
                    }
                }, this.getMatching = function(e, t, n) {
                    void 0 == t && (t = e.selection.lead), "object" == typeof t && (n = t.column, t = t.row);
                    var o, r = e.getTokenAt(t, n);
                    if (r) {
                        if ("keyword.start" == r.type) {
                            var i = new s(e, t, n);
                            i.step = i.stepForward;
                        } else {
                            if ("keyword.end" != r.type) return;
                            var i = new s(e, t, n);
                            i.step = i.stepBackward;
                        }
                        for (;(o = i.step()) && "keyword.start" != o.type && "keyword.end" != o.type; ) ;
                        if (o && o.type != r.type) {
                            var a = i.getCurrentTokenColumn(), t = i.getCurrentTokenRow();
                            return new g(t, a, t, a + o.value.length);
                        }
                    }
                }, this.$id = "ace/mode/logiql";
            }.call(u.prototype), t.Mode = u;
        });
    }
});
//# sourceMappingURL=logiql.js.map