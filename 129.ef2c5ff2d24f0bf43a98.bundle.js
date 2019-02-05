(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1174:function(module,exports){ace.define("ace/mode/tex_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextHighlightRules=(acequire("../lib/lang"),acequire("./text_highlight_rules").TextHighlightRules),TexHighlightRules=function(textClass){textClass||(textClass="text"),this.$rules={start:[{token:"comment",regex:"%.*$"},{token:textClass,regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:textClass,regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell."+textClass,regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell."+textClass,regex:"\\s+"},{token:"nospell."+textClass,regex:"\\w+"}]}};oop.inherits(TexHighlightRules,TextHighlightRules),exports.TexHighlightRules=TexHighlightRules}),ace.define("ace/mode/r_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/tex_highlight_rules"],function(acequire,exports,module){var oop=acequire("../lib/oop"),lang=acequire("../lib/lang"),TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules,TexHighlightRules=acequire("./tex_highlight_rules").TexHighlightRules,RHighlightRules=function(){var keywords=lang.arrayToMap("function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|acequire|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass".split("|")),buildinConstants=lang.arrayToMap("NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|NA_complex_".split("|"));this.$rules={start:[{token:"comment.sectionhead",regex:"#+(?!').*(?:----|====|####)\\s*$"},{token:"comment",regex:"#+'",next:"rd-start"},{token:"comment",regex:"#.*$"},{token:"string",regex:'["]',next:"qqstring"},{token:"string",regex:"[']",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+[Li]?\\b"},{token:"constant.numeric",regex:"\\d+L\\b"},{token:"constant.numeric",regex:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b"},{token:"constant.numeric",regex:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b"},{token:"constant.language.boolean",regex:"(?:TRUE|FALSE|T|F)\\b"},{token:"identifier",regex:"`.*?`"},{onMatch:function(value){return keywords[value]?"keyword":buildinConstants[value]?"constant.language":"..."==value||value.match(/^\.\.\d+$/)?"variable.language":"identifier"},regex:"[a-zA-Z.][a-zA-Z0-9._]*\\b"},{token:"keyword.operator",regex:"%%|>=|<=|==|!=|\\->|<\\-|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||~|\\$|:"},{token:"keyword.operator",regex:"%.*?%"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]};for(var rdRules=new TexHighlightRules("comment").getRules(),i=0;i<rdRules.start.length;i++)rdRules.start[i].token+=".virtual-comment";this.addRules(rdRules,"rd-"),this.$rules["rd-start"].unshift({token:"text",regex:"^",next:"start"}),this.$rules["rd-start"].unshift({token:"keyword",regex:"@(?!@)[^ ]*"}),this.$rules["rd-start"].unshift({token:"comment",regex:"@@"}),this.$rules["rd-start"].push({token:"comment",regex:"[^%\\\\[({\\])}]+"})};oop.inherits(RHighlightRules,TextHighlightRules),exports.RHighlightRules=RHighlightRules}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(acequire,exports,module){"use strict";var Range=acequire("../range").Range,MatchingBraceOutdent=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(doc,row){var match=doc.getLine(row).match(/^(\s*\})/);if(!match)return 0;var column=match[1].length,openBracePos=doc.findMatchingBracket({row:row,column:column});if(!openBracePos||openBracePos.row==row)return 0;var indent=this.$getIndent(doc.getLine(openBracePos.row));doc.replace(new Range(row,0,row,column-1),indent)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(MatchingBraceOutdent.prototype),exports.MatchingBraceOutdent=MatchingBraceOutdent}),ace.define("ace/mode/r",["require","exports","module","ace/range","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/r_highlight_rules","ace/mode/matching_brace_outdent"],function(acequire,exports,module){"use strict";acequire("../range").Range;var oop=acequire("../lib/oop"),TextMode=acequire("./text").Mode,RHighlightRules=(acequire("./text_highlight_rules").TextHighlightRules,acequire("./r_highlight_rules").RHighlightRules),MatchingBraceOutdent=acequire("./matching_brace_outdent").MatchingBraceOutdent,Mode=function(){this.HighlightRules=RHighlightRules,this.$outdent=new MatchingBraceOutdent,this.$behaviour=this.$defaultBehaviour};oop.inherits(Mode,TextMode),function(){this.lineCommentStart="#",this.$id="ace/mode/r"}.call(Mode.prototype),exports.Mode=Mode})}}]);
//# sourceMappingURL=129.ef2c5ff2d24f0bf43a98.bundle.js.map