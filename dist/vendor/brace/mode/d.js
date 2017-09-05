flklrJsonp([ 159 ], {
    35: function(e, t) {
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
        }), ace.define("ace/mode/d_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./doc_comment_highlight_rules").DocCommentHighlightRules, i = e("./text_highlight_rules").TextHighlightRules, a = function() {
                var e = "class|struct|union|template|interface|enum|macro", t = {
                    token: "constant.language.escape",
                    regex: "\\\\(?:(?:x[0-9A-F]{2})|(?:[0-7]{1,3})|(?:['\"\\?0abfnrtv\\\\])|(?:u[0-9a-fA-F]{4})|(?:U[0-9a-fA-F]{8}))"
                }, n = "/|/\\=|&|&\\=|&&|\\|\\|\\=|\\|\\||\\-|\\-\\=|\\-\\-|\\+|\\+\\=|\\+\\+|\\<|\\<\\=|\\<\\<|\\<\\<\\=|\\<\\>|\\<\\>\\=|\\>|\\>\\=|\\>\\>\\=|\\>\\>\\>\\=|\\>\\>|\\>\\>\\>|\\!|\\!\\=|\\!\\<\\>|\\!\\<\\>\\=|\\!\\<|\\!\\<\\=|\\!\\>|\\!\\>\\=|\\?|\\$|\\=|\\=\\=|\\*|\\*\\=|%|%\\=|\\^|\\^\\=|\\^\\^|\\^\\^\\=|~|~\\=|\\=\\>|#", r = this.$keywords = this.createKeywordMapper({
                    "keyword.modifier": "abstract|align|debug|deprecated|export|extern|const|final|in|inout|out|ref|immutable|lazy|nothrow|override|package|pragma|private|protected|public|pure|scope|shared|__gshared|synchronized|static|volatile",
                    "keyword.control": "break|case|continue|default|do|else|for|foreach|foreach_reverse|goto|if|return|switch|while|catch|try|throw|finally|version|assert|unittest|with",
                    "keyword.type": "auto|bool|char|dchar|wchar|byte|ubyte|float|double|real|cfloat|creal|cdouble|cent|ifloat|ireal|idouble|int|long|short|void|uint|ulong|ushort|ucent|function|delegate|string|wstring|dstring|size_t|ptrdiff_t|hash_t|Object",
                    keyword: "this|super|import|module|body|mixin|__traits|invariant|alias|asm|delete|typeof|typeid|sizeof|cast|new|in|is|typedef|__vector|__parameters",
                    "keyword.storage": e,
                    punctation: "\\.|\\,|;|\\.\\.|\\.\\.\\.",
                    "keyword.operator": n,
                    "constant.language": "null|true|false|__DATE__|__EOF__|__TIME__|__TIMESTAMP__|__VENDOR__|__VERSION__|__FILE__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__"
                }, "identifier"), i = "[a-zA-Z_¡-￿][a-zA-Z\\d_¡-￿]*\\b";
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    }, o.getStartRule("doc-start"), {
                        token: "comment",
                        regex: "\\/\\*",
                        next: "star-comment"
                    }, {
                        token: "comment.shebang",
                        regex: "^\\s*#!.*"
                    }, {
                        token: "comment",
                        regex: "\\/\\+",
                        next: "plus-comment"
                    }, {
                        onMatch: function(e, t, n) {
                            return n.unshift(this.next, e.substr(2)), "string";
                        },
                        regex: 'q"(?:[\\[\\(\\{\\<]+)',
                        next: "operator-heredoc-string"
                    }, {
                        onMatch: function(e, t, n) {
                            return n.unshift(this.next, e.substr(2)), "string";
                        },
                        regex: 'q"(?:[a-zA-Z_]+)$',
                        next: "identifier-heredoc-string"
                    }, {
                        token: "string",
                        regex: '[xr]?"',
                        next: "quote-string"
                    }, {
                        token: "string",
                        regex: "[xr]?`",
                        next: "backtick-string"
                    }, {
                        token: "string",
                        regex: "[xr]?['](?:(?:\\\\.)|(?:[^'\\\\]))*?['][cdw]?"
                    }, {
                        token: [ "keyword", "text", "paren.lparen" ],
                        regex: /(asm)(\s*)({)/,
                        next: "d-asm"
                    }, {
                        token: [ "keyword", "text", "paren.lparen", "constant.language" ],
                        regex: "(__traits)(\\s*)(\\()(" + i + ")"
                    }, {
                        token: [ "keyword", "text", "variable.module" ],
                        regex: "(import|module)(\\s+)((?:" + i + "\\.?)*)"
                    }, {
                        token: [ "keyword.storage", "text", "entity.name.type" ],
                        regex: "(" + e + ")(\\s*)(" + i + ")"
                    }, {
                        token: [ "keyword", "text", "variable.storage", "text" ],
                        regex: "(alias|typedef)(\\s*)(" + i + ")(\\s*)"
                    }, {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F_]+(l|ul|u|f|F|L|U|UL)?\\b"
                    }, {
                        token: "constant.numeric",
                        regex: "[+-]?\\d[\\d_]*(?:(?:\\.[\\d_]*)?(?:[eE][+-]?[\\d_]+)?)?(l|ul|u|f|F|L|U|UL)?\\b"
                    }, {
                        token: "entity.other.attribute-name",
                        regex: "@" + i
                    }, {
                        token: r,
                        regex: "[a-zA-Z_][a-zA-Z0-9_]*\\b"
                    }, {
                        token: "keyword.operator",
                        regex: n
                    }, {
                        token: "punctuation.operator",
                        regex: "\\?|\\:|\\,|\\;|\\.|\\:"
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
                    "star-comment": [ {
                        token: "comment",
                        regex: "\\*\\/",
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    } ],
                    "plus-comment": [ {
                        token: "comment",
                        regex: "\\+\\/",
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    } ],
                    "quote-string": [ t, {
                        token: "string",
                        regex: '"[cdw]?',
                        next: "start"
                    }, {
                        defaultToken: "string"
                    } ],
                    "backtick-string": [ t, {
                        token: "string",
                        regex: "`[cdw]?",
                        next: "start"
                    }, {
                        defaultToken: "string"
                    } ],
                    "operator-heredoc-string": [ {
                        onMatch: function(e, t, n) {
                            e = e.substring(e.length - 2, e.length - 1);
                            var r = {
                                ">": "<",
                                "]": "[",
                                ")": "(",
                                "}": "{"
                            };
                            return -1 != Object.keys(r).indexOf(e) && (e = r[e]), e != n[1] ? "string" : (n.shift(), 
                            n.shift(), "string");
                        },
                        regex: '(?:[\\]\\)}>]+)"',
                        next: "start"
                    }, {
                        token: "string",
                        regex: "[^\\]\\)}>]+"
                    } ],
                    "identifier-heredoc-string": [ {
                        onMatch: function(e, t, n) {
                            return (e = e.substring(0, e.length - 1)) != n[1] ? "string" : (n.shift(), n.shift(), 
                            "string");
                        },
                        regex: '^(?:[A-Za-z_][a-zA-Z0-9]+)"',
                        next: "start"
                    }, {
                        token: "string",
                        regex: "[^\\]\\)}>]+"
                    } ],
                    "d-asm": [ {
                        token: "paren.rparen",
                        regex: "\\}",
                        next: "start"
                    }, {
                        token: "keyword.instruction",
                        regex: "[a-zA-Z]+",
                        next: "d-asm-instruction"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    } ],
                    "d-asm-instruction": [ {
                        token: "constant.language",
                        regex: /AL|AH|AX|EAX|BL|BH|BX|EBX|CL|CH|CX|ECX|DL|DH|DX|EDX|BP|EBP|SP|ESP|DI|EDI|SI|ESI/i
                    }, {
                        token: "identifier",
                        regex: "[a-zA-Z]+"
                    }, {
                        token: "string",
                        regex: '".*"'
                    }, {
                        token: "comment",
                        regex: "//.*$"
                    }, {
                        token: "constant.numeric",
                        regex: "[0-9.xA-F]+"
                    }, {
                        token: "punctuation.operator",
                        regex: "\\,"
                    }, {
                        token: "punctuation.operator",
                        regex: ";",
                        next: "d-asm"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    } ]
                }, this.embedRules(o, "doc-", [ o.getEndRule("start") ]);
            };
            a.metaData = {
                comment: "D language",
                fileTypes: [ "d", "di" ],
                firstLineMatch: "^#!.*\\b[glr]?dmd\\b.",
                foldingStartMarker: "(?x)/\\*\\*(?!\\*)|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))",
                foldingStopMarker: "(?<!\\*)\\*\\*/|^\\s*\\}",
                keyEquivalent: "^~D",
                name: "D",
                scopeName: "source.d"
            }, r.inherits(a, i), t.DHighlightRules = a;
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
                        var s = e.getCommentFoldRange(n, a + i[0].length, 1);
                        return s && !s.isMultiLine() && (r ? s = this.getSectionRange(e, n) : "all" != t && (s = null)), 
                        s;
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
                    for (var s = t, g = e.getLength(); ++t < g; ) {
                        n = e.getLine(t);
                        var l = n.search(/\S/);
                        if (-1 !== l) {
                            if (r > l) break;
                            var c = this.getFoldWidgetRange(e, "all", t);
                            if (c) {
                                if (c.start.row <= i) break;
                                if (c.isMultiLine()) t = c.end.row; else if (r == l) break;
                            }
                            s = t;
                        }
                    }
                    return new o(i, a, s, e.getLine(s).length);
                }, this.getCommentRegionBlock = function(e, t, n) {
                    for (var r = t.search(/\s*$/), i = e.getLength(), a = n, s = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, g = 1; ++n < i; ) {
                        t = e.getLine(n);
                        var l = s.exec(t);
                        if (l && (l[1] ? g-- : g++, !g)) break;
                    }
                    var c = n;
                    if (c > a) return new o(a, r, c, t.length);
                };
            }.call(a.prototype);
        }), ace.define("ace/mode/d", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/d_highlight_rules", "ace/mode/folding/cstyle" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text").Mode, i = e("./d_highlight_rules").DHighlightRules, a = e("./folding/cstyle").FoldMode, s = function() {
                this.HighlightRules = i, this.foldingRules = new a(), this.$behaviour = this.$defaultBehaviour;
            };
            r.inherits(s, o), function() {
                this.lineCommentStart = "//", this.blockComment = {
                    start: "/*",
                    end: "*/"
                }, this.$id = "ace/mode/d";
            }.call(s.prototype), t.Mode = s;
        });
    }
});
//# sourceMappingURL=d.js.map