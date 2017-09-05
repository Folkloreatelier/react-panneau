flklrJsonp([ 170 ], {
    20: function(e, t) {
        ace.define("ace/mode/asciidoc_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var o = e("../lib/oop"), l = e("./text_highlight_rules").TextHighlightRules, i = function() {
                function quoteRule(e) {
                    return (/\w/.test(e) ? "\\b" : "(?:\\B|^)") + e + "[^" + e + "].*?" + e + "(?![\\w*])";
                }
                this.$rules = {
                    start: [ {
                        token: "empty",
                        regex: /$/
                    }, {
                        token: "literal",
                        regex: /^\.{4,}\s*$/,
                        next: "listingBlock"
                    }, {
                        token: "literal",
                        regex: /^-{4,}\s*$/,
                        next: "literalBlock"
                    }, {
                        token: "string",
                        regex: /^\+{4,}\s*$/,
                        next: "passthroughBlock"
                    }, {
                        token: "keyword",
                        regex: /^={4,}\s*$/
                    }, {
                        token: "text",
                        regex: /^\s*$/
                    }, {
                        token: "empty",
                        regex: "",
                        next: "dissallowDelimitedBlock"
                    } ],
                    dissallowDelimitedBlock: [ {
                        include: "paragraphEnd"
                    }, {
                        token: "comment",
                        regex: "^//.+$"
                    }, {
                        token: "keyword",
                        regex: "^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):"
                    }, {
                        include: "listStart"
                    }, {
                        token: "literal",
                        regex: /^\s+.+$/,
                        next: "indentedBlock"
                    }, {
                        token: "empty",
                        regex: "",
                        next: "text"
                    } ],
                    paragraphEnd: [ {
                        token: "doc.comment",
                        regex: /^\/{4,}\s*$/,
                        next: "commentBlock"
                    }, {
                        token: "tableBlock",
                        regex: /^\s*[|!]=+\s*$/,
                        next: "tableBlock"
                    }, {
                        token: "keyword",
                        regex: /^(?:--|''')\s*$/,
                        next: "start"
                    }, {
                        token: "option",
                        regex: /^\[.*\]\s*$/,
                        next: "start"
                    }, {
                        token: "pageBreak",
                        regex: /^>{3,}$/,
                        next: "start"
                    }, {
                        token: "literal",
                        regex: /^\.{4,}\s*$/,
                        next: "listingBlock"
                    }, {
                        token: "titleUnderline",
                        regex: /^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/,
                        next: "start"
                    }, {
                        token: "singleLineTitle",
                        regex: /^={1,5}\s+\S.*$/,
                        next: "start"
                    }, {
                        token: "otherBlock",
                        regex: /^(?:\*{2,}|_{2,})\s*$/,
                        next: "start"
                    }, {
                        token: "optionalTitle",
                        regex: /^\.[^.\s].+$/,
                        next: "start"
                    } ],
                    listStart: [ {
                        token: "keyword",
                        regex: /^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/,
                        next: "listText"
                    }, {
                        token: "meta.tag",
                        regex: /^.+(?::{2,4}|;;)(?: |$)/,
                        next: "listText"
                    }, {
                        token: "support.function.list.callout",
                        regex: /^(?:<\d+>|\d+>|>) /,
                        next: "text"
                    }, {
                        token: "keyword",
                        regex: /^\+\s*$/,
                        next: "start"
                    } ],
                    text: [ {
                        token: [ "link", "variable.language" ],
                        regex: /((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/
                    }, {
                        token: "link",
                        regex: /(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/
                    }, {
                        token: "link",
                        regex: /\b[\w\.\/\-]+@[\w\.\/\-]+\b/
                    }, {
                        include: "macros"
                    }, {
                        include: "paragraphEnd"
                    }, {
                        token: "literal",
                        regex: /\+{3,}/,
                        next: "smallPassthrough"
                    }, {
                        token: "escape",
                        regex: /\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/
                    }, {
                        token: "escape",
                        regex: /\\[_*'`+#]|\\{2}[_*'`+#]{2}/
                    }, {
                        token: "keyword",
                        regex: /\s\+$/
                    }, {
                        token: "text",
                        regex: "[a-zA-Z¡-￿]+\\b"
                    }, {
                        token: [ "keyword", "string", "keyword" ],
                        regex: /(<<[\w\d\-$]+,)(.*?)(>>|$)/
                    }, {
                        token: "keyword",
                        regex: /<<[\w\d\-$]+,?|>>/
                    }, {
                        token: "constant.character",
                        regex: /\({2,3}.*?\){2,3}/
                    }, {
                        token: "keyword",
                        regex: /\[\[.+?\]\]/
                    }, {
                        token: "support",
                        regex: /^\[{3}[\w\d =\-]+\]{3}/
                    }, {
                        include: "quotes"
                    }, {
                        token: "empty",
                        regex: /^\s*$/,
                        next: "start"
                    } ],
                    listText: [ {
                        include: "listStart"
                    }, {
                        include: "text"
                    } ],
                    indentedBlock: [ {
                        token: "literal",
                        regex: /^[\s\w].+$/,
                        next: "indentedBlock"
                    }, {
                        token: "literal",
                        regex: "",
                        next: "start"
                    } ],
                    listingBlock: [ {
                        token: "literal",
                        regex: /^\.{4,}\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "constant.numeric",
                        regex: "<\\d+>"
                    }, {
                        token: "literal",
                        regex: "[^<]+"
                    }, {
                        token: "literal",
                        regex: "<"
                    } ],
                    literalBlock: [ {
                        token: "literal",
                        regex: /^-{4,}\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "constant.numeric",
                        regex: "<\\d+>"
                    }, {
                        token: "literal",
                        regex: "[^<]+"
                    }, {
                        token: "literal",
                        regex: "<"
                    } ],
                    passthroughBlock: [ {
                        token: "literal",
                        regex: /^\+{4,}\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "literal",
                        regex: "[a-zA-Z¡-￿]+\\b|\\d+"
                    }, {
                        include: "macros"
                    }, {
                        token: "literal",
                        regex: "."
                    } ],
                    smallPassthrough: [ {
                        token: "literal",
                        regex: /[+]{3,}/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "literal",
                        regex: /^\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "literal",
                        regex: "[a-zA-Z¡-￿]+\\b|\\d+"
                    }, {
                        include: "macros"
                    } ],
                    commentBlock: [ {
                        token: "doc.comment",
                        regex: /^\/{4,}\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "doc.comment",
                        regex: "^.*$"
                    } ],
                    tableBlock: [ {
                        token: "tableBlock",
                        regex: /^\s*\|={3,}\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "tableBlock",
                        regex: /^\s*!={3,}\s*$/,
                        next: "innerTableBlock"
                    }, {
                        token: "tableBlock",
                        regex: /\|/
                    }, {
                        include: "text",
                        noEscape: !0
                    } ],
                    innerTableBlock: [ {
                        token: "tableBlock",
                        regex: /^\s*!={3,}\s*$/,
                        next: "tableBlock"
                    }, {
                        token: "tableBlock",
                        regex: /^\s*|={3,}\s*$/,
                        next: "dissallowDelimitedBlock"
                    }, {
                        token: "tableBlock",
                        regex: /!/
                    } ],
                    macros: [ {
                        token: "macro",
                        regex: /{[\w\-$]+}/
                    }, {
                        token: [ "text", "string", "text", "constant.character", "text" ],
                        regex: /({)([\w\-$]+)(:)?(.+)?(})/
                    }, {
                        token: [ "text", "markup.list.macro", "keyword", "string" ],
                        regex: /(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/
                    }, {
                        token: [ "markup.list.macro", "keyword", "string" ],
                        regex: /([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/
                    }, {
                        token: [ "markup.list.macro", "keyword" ],
                        regex: /([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/
                    }, {
                        token: "keyword",
                        regex: /^:.+?:(?= |$)/
                    } ],
                    quotes: [ {
                        token: "string.italic",
                        regex: /__[^_\s].*?__/
                    }, {
                        token: "string.italic",
                        regex: quoteRule("_")
                    }, {
                        token: "keyword.bold",
                        regex: /\*\*[^*\s].*?\*\*/
                    }, {
                        token: "keyword.bold",
                        regex: quoteRule("\\*")
                    }, {
                        token: "literal",
                        regex: quoteRule("\\+")
                    }, {
                        token: "literal",
                        regex: /\+\+[^+\s].*?\+\+/
                    }, {
                        token: "literal",
                        regex: /\$\$.+?\$\$/
                    }, {
                        token: "literal",
                        regex: quoteRule("`")
                    }, {
                        token: "keyword",
                        regex: quoteRule("^")
                    }, {
                        token: "keyword",
                        regex: quoteRule("~")
                    }, {
                        token: "keyword",
                        regex: /##?/
                    }, {
                        token: "keyword",
                        regex: /(?:\B|^)``|\b''/
                    } ]
                };
                var e = {
                    macro: "constant.character",
                    tableBlock: "doc.comment",
                    titleUnderline: "markup.heading",
                    singleLineTitle: "markup.heading",
                    pageBreak: "string",
                    option: "string.regexp",
                    otherBlock: "markup.list",
                    literal: "support.function",
                    optionalTitle: "constant.numeric",
                    escape: "constant.language.escape",
                    link: "markup.underline.list"
                };
                for (var t in this.$rules) for (var n = this.$rules[t], o = n.length; o--; ) {
                    var l = n[o];
                    if (l.include || "string" == typeof l) {
                        var i = [ o, 1 ].concat(this.$rules[l.include || l]);
                        l.noEscape && (i = i.filter(function(e) {
                            return !e.next;
                        })), n.splice.apply(n, i);
                    } else l.token in e && (l.token = e[l.token]);
                }
            };
            o.inherits(i, l), t.AsciidocHighlightRules = i;
        }), ace.define("ace/mode/folding/asciidoc", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range" ], function(e, t, n) {
            "use strict";
            var o = e("../../lib/oop"), l = e("./fold_mode").FoldMode, i = e("../../range").Range, r = t.FoldMode = function() {};
            o.inherits(r, l), function() {
                this.foldingStartMarker = /^(?:\|={10,}|[\.\/=\-~^+]{4,}\s*$|={1,5} )/, this.singleLineHeadingRe = /^={1,5}(?=\s+\S)/, 
                this.getFoldWidget = function(e, t, n) {
                    var o = e.getLine(n);
                    return this.foldingStartMarker.test(o) ? "=" == o[0] ? this.singleLineHeadingRe.test(o) ? "start" : e.getLine(n - 1).length != e.getLine(n).length ? "" : "start" : "dissallowDelimitedBlock" == e.bgTokenizer.getState(n) ? "end" : "start" : "";
                }, this.getFoldWidgetRange = function(e, t, n) {
                    function getTokenType(t) {
                        return (g = e.getTokens(t)[0]) && g.type;
                    }
                    function getLevel() {
                        var t = g.value.match(c);
                        if (t) return t[0].length;
                        var o = k.indexOf(g.value[0]) + 1;
                        return 1 == o && e.getLine(n - 1).length != e.getLine(n).length ? 1 / 0 : o;
                    }
                    var o = e.getLine(n), l = o.length, r = e.getLength(), a = n, s = n;
                    if (o.match(this.foldingStartMarker)) {
                        var g, k = [ "=", "-", "~", "^", "+" ], c = this.singleLineHeadingRe;
                        if ("markup.heading" == getTokenType(n)) {
                            for (var d = getLevel(); ++n < r; ) if ("markup.heading" == getTokenType(n)) {
                                var x = getLevel();
                                if (x <= d) break;
                            }
                            if ((s = g && g.value.match(this.singleLineHeadingRe) ? n - 1 : n - 2) > a) for (;s > a && (!getTokenType(s) || "[" == g.value[0]); ) s--;
                            if (s > a) {
                                var u = e.getLine(s).length;
                                return new i(a, l, s, u);
                            }
                        } else {
                            if ("dissallowDelimitedBlock" == e.bgTokenizer.getState(n)) {
                                for (;n-- > 0 && -1 != e.bgTokenizer.getState(n).lastIndexOf("Block"); ) ;
                                if ((s = n + 1) < a) {
                                    var u = e.getLine(n).length;
                                    return new i(s, 5, a, l - 5);
                                }
                            } else {
                                for (;++n < r && "dissallowDelimitedBlock" != e.bgTokenizer.getState(n); ) ;
                                if ((s = n) > a) {
                                    var u = e.getLine(n).length;
                                    return new i(a, 5, s, u - 5);
                                }
                            }
                        }
                    }
                };
            }.call(r.prototype);
        }), ace.define("ace/mode/asciidoc", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/asciidoc_highlight_rules", "ace/mode/folding/asciidoc" ], function(e, t, n) {
            "use strict";
            var o = e("../lib/oop"), l = e("./text").Mode, i = e("./asciidoc_highlight_rules").AsciidocHighlightRules, r = e("./folding/asciidoc").FoldMode, a = function() {
                this.HighlightRules = i, this.foldingRules = new r();
            };
            o.inherits(a, l), function() {
                this.type = "text", this.getNextLineIndent = function(e, t, n) {
                    if ("listblock" == e) {
                        var o = /^((?:.+)?)([-+*][ ]+)/.exec(t);
                        return o ? new Array(o[1].length + 1).join(" ") + o[2] : "";
                    }
                    return this.$getIndent(t);
                }, this.$id = "ace/mode/asciidoc";
            }.call(a.prototype), t.Mode = a;
        });
    }
});
//# sourceMappingURL=asciidoc.js.map