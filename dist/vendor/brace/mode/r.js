flklrJsonp([ 93 ], {
    116: function(e, t) {
        ace.define("ace/mode/tex_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, r) {
            "use strict";
            var n = e("../lib/oop"), o = (e("../lib/lang"), e("./text_highlight_rules").TextHighlightRules), i = function(e) {
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
            n.inherits(i, o), t.TexHighlightRules = i;
        }), ace.define("ace/mode/r_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/tex_highlight_rules" ], function(e, t, r) {
            var n = e("../lib/oop"), o = e("../lib/lang"), i = e("./text_highlight_rules").TextHighlightRules, a = e("./tex_highlight_rules").TexHighlightRules, s = function() {
                var e = o.arrayToMap("function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|acequire|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass".split("|")), t = o.arrayToMap("NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|NA_complex_".split("|"));
                this.$rules = {
                    start: [ {
                        token: "comment.sectionhead",
                        regex: "#+(?!').*(?:----|====|####)\\s*$"
                    }, {
                        token: "comment",
                        regex: "#+'",
                        next: "rd-start"
                    }, {
                        token: "comment",
                        regex: "#.*$"
                    }, {
                        token: "string",
                        regex: '["]',
                        next: "qqstring"
                    }, {
                        token: "string",
                        regex: "[']",
                        next: "qstring"
                    }, {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+[Li]?\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "\\d+L\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b"
                    }, {
                        token: "constant.language.boolean",
                        regex: "(?:TRUE|FALSE|T|F)\\b"
                    }, {
                        token: "identifier",
                        regex: "`.*?`"
                    }, {
                        onMatch: function(r) {
                            return e[r] ? "keyword" : t[r] ? "constant.language" : "..." == r || r.match(/^\.\.\d+$/) ? "variable.language" : "identifier";
                        },
                        regex: "[a-zA-Z.][a-zA-Z0-9._]*\\b"
                    }, {
                        token: "keyword.operator",
                        regex: "%%|>=|<=|==|!=|\\->|<\\-|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||~|\\$|:"
                    }, {
                        token: "keyword.operator",
                        regex: "%.*?%"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "[[({]"
                    }, {
                        token: "paren.keyword.operator",
                        regex: "[\\])}]"
                    }, {
                        token: "text",
                        regex: "\\s+"
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
                };
                for (var r = new a("comment").getRules(), n = 0; n < r.start.length; n++) r.start[n].token += ".virtual-comment";
                this.addRules(r, "rd-"), this.$rules["rd-start"].unshift({
                    token: "text",
                    regex: "^",
                    next: "start"
                }), this.$rules["rd-start"].unshift({
                    token: "keyword",
                    regex: "@(?!@)[^ ]*"
                }), this.$rules["rd-start"].unshift({
                    token: "comment",
                    regex: "@@"
                }), this.$rules["rd-start"].push({
                    token: "comment",
                    regex: "[^%\\\\[({\\])}]+"
                });
            };
            n.inherits(s, i), t.RHighlightRules = s;
        }), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, r) {
            "use strict";
            var n = e("../range").Range, o = function() {};
            (function() {
                this.checkOutdent = function(e, t) {
                    return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
                }, this.autoOutdent = function(e, t) {
                    var r = e.getLine(t), o = r.match(/^(\s*\})/);
                    if (!o) return 0;
                    var i = o[1].length, a = e.findMatchingBracket({
                        row: t,
                        column: i
                    });
                    if (!a || a.row == t) return 0;
                    var s = this.$getIndent(e.getLine(a.row));
                    e.replace(new n(t, 0, t, i - 1), s);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(o.prototype), t.MatchingBraceOutdent = o;
        }), ace.define("ace/mode/r", [ "require", "exports", "module", "ace/range", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/r_highlight_rules", "ace/mode/matching_brace_outdent" ], function(e, t, r) {
            "use strict";
            var n = (e("../range").Range, e("../lib/oop")), o = e("./text").Mode, i = (e("./text_highlight_rules").TextHighlightRules, 
            e("./r_highlight_rules").RHighlightRules), a = e("./matching_brace_outdent").MatchingBraceOutdent, s = function() {
                this.HighlightRules = i, this.$outdent = new a(), this.$behaviour = this.$defaultBehaviour;
            };
            n.inherits(s, o), function() {
                this.lineCommentStart = "#", this.$id = "ace/mode/r";
            }.call(s.prototype), t.Mode = s;
        });
    }
});
//# sourceMappingURL=r.js.map