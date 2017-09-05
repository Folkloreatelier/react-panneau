flklrJsonp([ 158 ], {
    36: function(e, t) {
        ace.define("ace/mode/doc_comment_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules, i = function() {
                this.$rules = {
                    start: [ {
                        token: "comment.doc.tag",
                        regex: "@[\\w\\d_]+"
                    }, i.getTagRule(), {
                        defaultToken: "comment.doc",
                        caseInsensitive: !0
                    } ]
                };
            };
            r.inherits(i, o), i.getTagRule = function(e) {
                return {
                    token: "comment.doc.tag.storage.type",
                    regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                };
            }, i.getStartRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\/\\*(?=\\*)",
                    next: e
                };
            }, i.getEndRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\*\\/",
                    next: e
                };
            }, t.DocCommentHighlightRules = i;
        }), ace.define("ace/mode/c_cpp_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./doc_comment_highlight_rules").DocCommentHighlightRules, i = e("./text_highlight_rules").TextHighlightRules, a = t.cFunctions = "\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b", l = function() {
                var e = this.$keywords = this.createKeywordMapper({
                    "keyword.control": "break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",
                    "storage.type": "asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",
                    "storage.modifier": "const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",
                    "keyword.operator": "and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eqconst_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",
                    "variable.language": "this",
                    "constant.language": "NULL|true|false|TRUE|FALSE|nullptr"
                }, "identifier"), t = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "//$",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: "//",
                        next: "singleLineComment"
                    }, o.getStartRule("doc-start"), {
                        token: "comment",
                        regex: "\\/\\*",
                        next: "comment"
                    }, {
                        token: "string",
                        regex: "'(?:" + t + "|.)?'"
                    }, {
                        token: "string.start",
                        regex: '"',
                        stateName: "qqstring",
                        next: [ {
                            token: "string",
                            regex: /\\\s*$/,
                            next: "qqstring"
                        }, {
                            token: "constant.language.escape",
                            regex: t
                        }, {
                            token: "constant.language.escape",
                            regex: /%[^'"\\]/
                        }, {
                            token: "string.end",
                            regex: '"|$',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        token: "string.start",
                        regex: 'R"\\(',
                        stateName: "rawString",
                        next: [ {
                            token: "string.end",
                            regex: '\\)"',
                            next: "start"
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                    }, {
                        token: "keyword",
                        regex: "#\\s*(?:include|import|pragma|line|define|undef)\\b",
                        next: "directive"
                    }, {
                        token: "keyword",
                        regex: "#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"
                    }, {
                        token: "support.function.C99.c",
                        regex: a
                    }, {
                        token: e,
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*"
                    }, {
                        token: "keyword.operator",
                        regex: /--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/
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
                        token: "comment",
                        regex: ".*?\\*\\/",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: ".+"
                    } ],
                    singleLineComment: [ {
                        token: "comment",
                        regex: /\\$/,
                        next: "singleLineComment"
                    }, {
                        token: "comment",
                        regex: /$/,
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    } ],
                    directive: [ {
                        token: "constant.other.multiline",
                        regex: /\\/
                    }, {
                        token: "constant.other.multiline",
                        regex: /.*\\/
                    }, {
                        token: "constant.other",
                        regex: "\\s*<.+?>",
                        next: "start"
                    }, {
                        token: "constant.other",
                        regex: '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
                        next: "start"
                    }, {
                        token: "constant.other",
                        regex: "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
                        next: "start"
                    }, {
                        token: "constant.other",
                        regex: /[^\\\/]+/,
                        next: "start"
                    } ]
                }, this.embedRules(o, "doc-", [ o.getEndRule("start") ]), this.normalizeRules();
            };
            r.inherits(l, i), t.c_cppHighlightRules = l;
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
                    var l = this.$getIndent(e.getLine(a.row));
                    e.replace(new r(t, 0, t, i - 1), l);
                }, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0];
                };
            }).call(o.prototype), t.MatchingBraceOutdent = o;
        }), ace.define("ace/mode/folding/cstyle", [ "require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode" ], function(e, t, n) {
            "use strict";
            var r = e("../../lib/oop"), o = e("../../range").Range, i = e("./fold_mode").FoldMode, a = t.FoldMode = function(e) {
                e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), 
                this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)));
            };
            r.inherits(a, i), function() {
                this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/, 
                this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, 
                this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, 
                this.getFoldWidget = function(e, t, n) {
                    var r = e.getLine(n);
                    if (this.singleLineBlockCommentRe.test(r) && !this.startRegionRe.test(r) && !this.tripleStarBlockCommentRe.test(r)) return "";
                    var o = this._getFoldWidgetBase(e, t, n);
                    return !o && this.startRegionRe.test(r) ? "start" : o;
                }, this.getFoldWidgetRange = function(e, t, n, r) {
                    var o = e.getLine(n);
                    if (this.startRegionRe.test(o)) return this.getCommentRegionBlock(e, o, n);
                    var i = o.match(this.foldingStartMarker);
                    if (i) {
                        var a = i.index;
                        if (i[1]) return this.openingBracketBlock(e, i[1], n, a);
                        var l = e.getCommentFoldRange(n, a + i[0].length, 1);
                        return l && !l.isMultiLine() && (r ? l = this.getSectionRange(e, n) : "all" != t && (l = null)), 
                        l;
                    }
                    if ("markbegin" !== t) {
                        var i = o.match(this.foldingStopMarker);
                        if (i) {
                            var a = i.index + i[0].length;
                            return i[1] ? this.closingBracketBlock(e, i[1], n, a) : e.getCommentFoldRange(n, a, -1);
                        }
                    }
                }, this.getSectionRange = function(e, t) {
                    var n = e.getLine(t), r = n.search(/\S/), i = t, a = n.length;
                    t += 1;
                    for (var l = t, s = e.getLength(); ++t < s; ) {
                        n = e.getLine(t);
                        var c = n.search(/\S/);
                        if (-1 !== c) {
                            if (r > c) break;
                            var g = this.getFoldWidgetRange(e, "all", t);
                            if (g) {
                                if (g.start.row <= i) break;
                                if (g.isMultiLine()) t = g.end.row; else if (r == c) break;
                            }
                            l = t;
                        }
                    }
                    return new o(i, a, l, e.getLine(l).length);
                }, this.getCommentRegionBlock = function(e, t, n) {
                    for (var r = t.search(/\s*$/), i = e.getLength(), a = n, l = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, s = 1; ++n < i; ) {
                        t = e.getLine(n);
                        var c = l.exec(t);
                        if (c && (c[1] ? s-- : s++, !s)) break;
                    }
                    var g = n;
                    if (g > a) return new o(a, r, g, t.length);
                };
            }.call(a.prototype);
        }), ace.define("ace/mode/c_cpp", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/c_cpp_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text").Mode, i = e("./c_cpp_highlight_rules").c_cppHighlightRules, a = e("./matching_brace_outdent").MatchingBraceOutdent, l = (e("../range").Range, 
            e("./behaviour/cstyle").CstyleBehaviour), s = e("./folding/cstyle").FoldMode, c = function() {
                this.HighlightRules = i, this.$outdent = new a(), this.$behaviour = new l(), this.foldingRules = new s();
            };
            r.inherits(c, o), function() {
                this.lineCommentStart = "//", this.blockComment = {
                    start: "/*",
                    end: "*/"
                }, this.getNextLineIndent = function(e, t, n) {
                    var r = this.$getIndent(t), o = this.getTokenizer().getLineTokens(t, e), i = o.tokens, a = o.state;
                    if (i.length && "comment" == i[i.length - 1].type) return r;
                    if ("start" == e) {
                        var l = t.match(/^.*[\{\(\[]\s*$/);
                        l && (r += n);
                    } else if ("doc-start" == e) {
                        if ("start" == a) return "";
                        var l = t.match(/^\s*(\/?)\*/);
                        l && (l[1] && (r += " "), r += "* ");
                    }
                    return r;
                }, this.checkOutdent = function(e, t, n) {
                    return this.$outdent.checkOutdent(t, n);
                }, this.autoOutdent = function(e, t, n) {
                    this.$outdent.autoOutdent(t, n);
                }, this.$id = "ace/mode/c_cpp";
            }.call(c.prototype), t.Mode = c;
        }), ace.define("ace/mode/dart_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./doc_comment_highlight_rules").DocCommentHighlightRules, i = e("./text_highlight_rules").TextHighlightRules, a = function() {
                var e = this.createKeywordMapper({
                    "constant.language.dart": "true|false|null",
                    "variable.language.dart": "this|super",
                    "keyword.control.dart": "try|catch|finally|throw|rethrow|assert|break|case|continue|default|do|else|for|if|in|return|switch|while|new|deferred|async|await",
                    "keyword.declaration.dart": "abstract|class|extends|external|factory|implements|get|native|operator|set|typedef|with|enum",
                    "storage.modifier.dart": "static|final|const",
                    "storage.type.primitive.dart": "void|bool|num|int|double|dynamic|var|String"
                }, "identifier"), t = {
                    token: "string",
                    regex: ".+"
                };
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: /\/\/.*$/
                    }, o.getStartRule("doc-start"), {
                        token: "comment",
                        regex: /\/\*/,
                        next: "comment"
                    }, {
                        token: [ "meta.preprocessor.script.dart" ],
                        regex: "^(#!.*)$"
                    }, {
                        token: "keyword.other.import.dart",
                        regex: "(?:\\b)(?:library|import|export|part|of|show|hide)(?:\\b)"
                    }, {
                        token: [ "keyword.other.import.dart", "text" ],
                        regex: "(?:\\b)(prefix)(\\s*:)"
                    }, {
                        regex: "\\bas\\b",
                        token: "keyword.cast.dart"
                    }, {
                        regex: "\\?|:",
                        token: "keyword.control.ternary.dart"
                    }, {
                        regex: "(?:\\b)(is\\!?)(?:\\b)",
                        token: [ "keyword.operator.dart" ]
                    }, {
                        regex: "(<<|>>>?|~|\\^|\\||&)",
                        token: [ "keyword.operator.bitwise.dart" ]
                    }, {
                        regex: "((?:&|\\^|\\||<<|>>>?)=)",
                        token: [ "keyword.operator.assignment.bitwise.dart" ]
                    }, {
                        regex: "(===?|!==?|<=?|>=?)",
                        token: [ "keyword.operator.comparison.dart" ]
                    }, {
                        regex: "((?:[+*/%-]|\\~)=)",
                        token: [ "keyword.operator.assignment.arithmetic.dart" ]
                    }, {
                        regex: "=",
                        token: "keyword.operator.assignment.dart"
                    }, {
                        token: "string",
                        regex: "'''",
                        next: "qdoc"
                    }, {
                        token: "string",
                        regex: '"""',
                        next: "qqdoc"
                    }, {
                        token: "string",
                        regex: "'",
                        next: "qstring"
                    }, {
                        token: "string",
                        regex: '"',
                        next: "qqstring"
                    }, {
                        regex: "(\\-\\-|\\+\\+)",
                        token: [ "keyword.operator.increment-decrement.dart" ]
                    }, {
                        regex: "(\\-|\\+|\\*|\\/|\\~\\/|%)",
                        token: [ "keyword.operator.arithmetic.dart" ]
                    }, {
                        regex: "(!|&&|\\|\\|)",
                        token: [ "keyword.operator.logical.dart" ]
                    }, {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                    }, {
                        token: e,
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                    } ],
                    comment: [ {
                        token: "comment",
                        regex: ".*?\\*\\/",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: ".+"
                    } ],
                    qdoc: [ {
                        token: "string",
                        regex: ".*?'''",
                        next: "start"
                    }, t ],
                    qqdoc: [ {
                        token: "string",
                        regex: '.*?"""',
                        next: "start"
                    }, t ],
                    qstring: [ {
                        token: "string",
                        regex: "[^\\\\']*(?:\\\\.[^\\\\']*)*'",
                        next: "start"
                    }, t ],
                    qqstring: [ {
                        token: "string",
                        regex: '[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',
                        next: "start"
                    }, t ]
                }, this.embedRules(o, "doc-", [ o.getEndRule("start") ]);
            };
            r.inherits(a, i), t.DartHighlightRules = a;
        }), ace.define("ace/mode/dart", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/c_cpp", "ace/mode/dart_highlight_rules", "ace/mode/folding/cstyle" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./c_cpp").Mode, i = e("./dart_highlight_rules").DartHighlightRules, a = e("./folding/cstyle").FoldMode, l = function() {
                o.call(this), this.HighlightRules = i, this.foldingRules = new a();
            };
            r.inherits(l, o), function() {
                this.lineCommentStart = "//", this.blockComment = {
                    start: "/*",
                    end: "*/"
                }, this.$id = "ace/mode/dart";
            }.call(l.prototype), t.Mode = l;
        });
    }
});
//# sourceMappingURL=dart.js.map