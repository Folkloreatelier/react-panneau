flklrJsonp([ 100 ], {
    109: function(e, t) {
        ace.define("ace/mode/plain_text", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/behaviour" ], function(e, t, i) {
            "use strict";
            var o = e("../lib/oop"), h = e("./text").Mode, n = e("./text_highlight_rules").TextHighlightRules, l = e("./behaviour").Behaviour, u = function() {
                this.HighlightRules = n, this.$behaviour = new l();
            };
            o.inherits(u, h), function() {
                this.type = "text", this.getNextLineIndent = function(e, t, i) {
                    return "";
                }, this.$id = "ace/mode/plain_text";
            }.call(u.prototype), t.Mode = u;
        });
    }
});
//# sourceMappingURL=plain_text.js.map