flklrJsonp([ 75 ], {
    141: function(e, t) {
        ace.define("ace/mode/tex_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = (e("../lib/lang"), e("./text_highlight_rules").TextHighlightRules), i = function(e) {
                e || (e = "text"), this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "%.*$"
                    }, {
                        token: e,
                        regex: "\\\\[$&%#\\{\\}]"
                    }, {
                        token: "keyword",
                        regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",
                        next: "nospell"
                    }, {
                        token: "keyword",
                        regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "[[({]"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "[\\])}]"
                    }, {
                        token: e,
                        regex: "\\s+"
                    } ],
                    nospell: [ {
                        token: "comment",
                        regex: "%.*$",
                        next: "start"
                    }, {
                        token: "nospell." + e,
                        regex: "\\\\[$&%#\\{\\}]"
                    }, {
                        token: "keyword",
                        regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"
                    }, {
                        token: "keyword",
                        regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",
                        next: "start"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "[[({]"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "[\\])]"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "}",
                        next: "start"
                    }, {
                        token: "nospell." + e,
                        regex: "\\s+"
                    }, {
                        token: "nospell." + e,
                        regex: "\\w+"
                    } ]
                };
            };
            r.inherits(i, o), t.TexHighlightRules = i;
        }), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, n) {
            "use strict";
            var r = e("../range").Range, o = function() {};
            (function() {
                this.checkOutdent = function(e, t) {
                    return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
                }, this.autoOutdent = function(e, t) {
                    var n = e.getLine(t), o = n.match(/^(\s*\})/);
                    if (!o) return 0;
                    var i = o[1].length, a = e.findMatchingBracket({
                        row: t,
                        column: i
                    });
                    if (!a || a.row == t) return 0;
                    var c = this.$getIndent(e.getLine(a.row));
                    e.replace(new r(t, 0, t, i - 1), c);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(o.prototype), t.MatchingBraceOutdent = o;
        }), ace.define("ace/mode/tex", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/tex_highlight_rules", "ace/mode/matching_brace_outdent" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text").Mode, i = e("./text_highlight_rules").TextHighlightRules, a = e("./tex_highlight_rules").TexHighlightRules, c = e("./matching_brace_outdent").MatchingBraceOutdent, u = function(e) {
                this.HighlightRules = e ? i : a, this.$outdent = new c(), this.$behaviour = this.$defaultBehaviour;
            };
            r.inherits(u, o), function() {
                this.lineCommentStart = "%", this.getNextLineIndent = function(e, t, n) {
                    return this.$getIndent(t);
                }, this.allowAutoInsert = function() {
                    return !1;
                }, this.$id = "ace/mode/tex";
            }.call(u.prototype), t.Mode = u;
        });
    }
});
//# sourceMappingURL=tex.js.map