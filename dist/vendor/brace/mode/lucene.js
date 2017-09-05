flklrJsonp([ 118 ], {
    89: function(e, t) {
        ace.define("ace/mode/lucene_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, r) {
            "use strict";
            var i = e("../lib/oop"), n = (e("../lib/lang"), e("./text_highlight_rules").TextHighlightRules), o = function() {
                this.$rules = {
                    start: [ {
                        token: "constant.character.negation",
                        regex: "[\\-]"
                    }, {
                        token: "constant.character.interro",
                        regex: "[\\?]"
                    }, {
                        token: "constant.character.asterisk",
                        regex: "[\\*]"
                    }, {
                        token: "constant.character.proximity",
                        regex: "~[0-9]+\\b"
                    }, {
                        token: "keyword.operator",
                        regex: "(?:AND|OR|NOT)\\b"
                    }, {
                        token: "paren.lparen",
                        regex: "[\\(]"
                    }, {
                        token: "paren.rparen",
                        regex: "[\\)]"
                    }, {
                        token: "keyword",
                        regex: "[\\S]+:"
                    }, {
                        token: "string",
                        regex: '".*?"'
                    }, {
                        token: "text",
                        regex: "\\s+"
                    } ]
                };
            };
            i.inherits(o, n), t.LuceneHighlightRules = o;
        }), ace.define("ace/mode/lucene", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/lucene_highlight_rules" ], function(e, t, r) {
            "use strict";
            var i = e("../lib/oop"), n = e("./text").Mode, o = e("./lucene_highlight_rules").LuceneHighlightRules, l = function() {
                this.HighlightRules = o, this.$behaviour = this.$defaultBehaviour;
            };
            i.inherits(l, n), function() {
                this.$id = "ace/mode/lucene";
            }.call(l.prototype), t.Mode = l;
        });
    }
});
//# sourceMappingURL=lucene.js.map