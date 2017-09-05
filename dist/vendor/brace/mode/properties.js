flklrJsonp([ 96 ], {
    113: function(e, t) {
        ace.define("ace/mode/properties_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, i) {
            "use strict";
            var o = e("../lib/oop"), r = e("./text_highlight_rules").TextHighlightRules, s = function() {
                var e = /\\u[0-9a-fA-F]{4}|\\/;
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: /[!#].*$/
                    }, {
                        token: "keyword",
                        regex: /[=:]$/
                    }, {
                        token: "keyword",
                        regex: /[=:]/,
                        next: "value"
                    }, {
                        token: "constant.language.escape",
                        regex: e
                    }, {
                        defaultToken: "variable"
                    } ],
                    value: [ {
                        regex: /\\$/,
                        token: "string",
                        next: "value"
                    }, {
                        regex: /$/,
                        token: "string",
                        next: "start"
                    }, {
                        token: "constant.language.escape",
                        regex: e
                    }, {
                        defaultToken: "string"
                    } ]
                };
            };
            o.inherits(s, r), t.PropertiesHighlightRules = s;
        }), ace.define("ace/mode/properties", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/properties_highlight_rules" ], function(e, t, i) {
            "use strict";
            var o = e("../lib/oop"), r = e("./text").Mode, s = e("./properties_highlight_rules").PropertiesHighlightRules, n = function() {
                this.HighlightRules = s, this.$behaviour = this.$defaultBehaviour;
            };
            o.inherits(n, r), function() {
                this.$id = "ace/mode/properties";
            }.call(n.prototype), t.Mode = n;
        });
    }
});
//# sourceMappingURL=properties.js.map