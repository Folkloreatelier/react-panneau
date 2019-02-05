(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1148:function(module,exports){ace.define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules,reservedKeywords=exports.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",languageConstructs=exports.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",ShHighlightRules=function(){var keywordMapper=this.createKeywordMapper({keyword:reservedKeywords,"support.function.builtin":languageConstructs,"invalid.deprecated":"debugger"},"identifier");this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string.start",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string.end",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(value,currentState,stack){var next="-"==value[2]?"indentedHeredoc":"heredoc",tokens=value.split(this.splitRegex);return stack.push(next,tokens[4]),[{type:"constant",value:tokens[1]},{type:"text",value:tokens[2]},{type:"string",value:tokens[3]},{type:"support.class",value:tokens[4]},{type:"string",value:tokens[5]}]},rules:{heredoc:[{onMatch:function(value,currentState,stack){return value===stack[1]?(stack.shift(),stack.shift(),this.next=stack[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^\t+"},{onMatch:function(value,currentState,stack){return value===stack[1]?(stack.shift(),stack.shift(),this.next=stack[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(currentState,stack){return"heredoc"===stack[0]||"indentedHeredoc"===stack[0]?stack[0]:currentState}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:"(?:\\$(?:SHLVL|\\$|\\!|\\?))"},{token:"variable",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*=)"},{include:"variables"},{token:"support.function",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*\\s*\\(\\))"},{token:"support.function",regex:"(?:&(?:\\d+))"},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:"(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+)))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))"},{token:"constant.numeric",regex:"(?:(?:[1-9]\\d*)|(?:0))\\b"},{token:keywordMapper,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};oop.inherits(ShHighlightRules,TextHighlightRules),exports.ShHighlightRules=ShHighlightRules}),ace.define("ace/mode/makefile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/sh_highlight_rules"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules,ShHighlightFile=acequire("./sh_highlight_rules"),MakefileHighlightRules=function(){var keywordMapper=this.createKeywordMapper({keyword:ShHighlightFile.reservedKeywords,"support.function.builtin":ShHighlightFile.languageConstructs,"invalid.deprecated":"debugger"},"string");this.$rules={start:[{token:"string.interpolated.backtick.makefile",regex:"`",next:"shell-start"},{token:"punctuation.definition.comment.makefile",regex:/#(?=.)/,next:"comment"},{token:["keyword.control.makefile"],regex:"^(?:\\s*\\b)(\\-??include|ifeq|ifneq|ifdef|ifndef|else|endif|vpath|export|unexport|define|endef|override)(?:\\b)"},{token:["entity.name.function.makefile","text"],regex:"^([^\\t ]+(?:\\s[^\\t ]+)*:)(\\s*.*)"}],comment:[{token:"punctuation.definition.comment.makefile",regex:/.+\\/},{token:"punctuation.definition.comment.makefile",regex:".+",next:"start"}],"shell-start":[{token:keywordMapper,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"string",regex:"\\w+"},{token:"string.interpolated.backtick.makefile",regex:"`",next:"start"}]}};oop.inherits(MakefileHighlightRules,TextHighlightRules),exports.MakefileHighlightRules=MakefileHighlightRules}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(acequire,exports,module){"use strict";var oop=acequire("../../lib/oop"),BaseFoldMode=acequire("./fold_mode").FoldMode,Range=acequire("../../range").Range,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.getFoldWidgetRange=function(session,foldStyle,row){var range=this.indentationBlock(session,row);if(range)return range;var re=/\S/,line=session.getLine(row),startLevel=line.search(re);if(-1!=startLevel&&"#"==line[startLevel]){for(var startColumn=line.length,maxRow=session.getLength(),startRow=row,endRow=row;++row<maxRow;){var level=(line=session.getLine(row)).search(re);if(-1!=level){if("#"!=line[level])break;endRow=row}}if(endRow>startRow){var endColumn=session.getLine(endRow).length;return new Range(startRow,startColumn,endRow,endColumn)}}},this.getFoldWidget=function(session,foldStyle,row){var line=session.getLine(row),indent=line.search(/\S/),next=session.getLine(row+1),prev=session.getLine(row-1),prevIndent=prev.search(/\S/),nextIndent=next.search(/\S/);if(-1==indent)return session.foldWidgets[row-1]=-1!=prevIndent&&prevIndent<nextIndent?"start":"","";if(-1==prevIndent){if(indent==nextIndent&&"#"==line[indent]&&"#"==next[indent])return session.foldWidgets[row-1]="",session.foldWidgets[row+1]="","start"}else if(prevIndent==indent&&"#"==line[indent]&&"#"==prev[indent]&&-1==session.getLine(row-2).search(/\S/))return session.foldWidgets[row-1]="start",session.foldWidgets[row+1]="","";return session.foldWidgets[row-1]=-1!=prevIndent&&prevIndent<indent?"start":"",indent<nextIndent?"start":""}}.call(FoldMode.prototype)}),ace.define("ace/mode/makefile",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/makefile_highlight_rules","ace/mode/folding/coffee"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextMode=acequire("./text").Mode,MakefileHighlightRules=acequire("./makefile_highlight_rules").MakefileHighlightRules,FoldMode=acequire("./folding/coffee").FoldMode,Mode=function(){this.HighlightRules=MakefileHighlightRules,this.foldingRules=new FoldMode,this.$behaviour=this.$defaultBehaviour};oop.inherits(Mode,TextMode),function(){this.lineCommentStart="#",this.$indentWithTabs=!0,this.$id="ace/mode/makefile"}.call(Mode.prototype),exports.Mode=Mode})}}]);
//# sourceMappingURL=103.ef2c5ff2d24f0bf43a98.bundle.js.map