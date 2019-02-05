(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1136:function(module,exports){ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules,LatexHighlightRules=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:["keyword","lparen","variable.parameter","rparen","lparen","storage.type","rparen"],regex:"(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"},{token:["keyword","lparen","variable.parameter","rparen"],regex:"(\\\\(?:label|v?ref|cite(?:[^{]*)))(?:({)([^}]*)(}))?"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\(?:begin|end))({)(\\w*)(})"},{token:"storage.type",regex:"\\\\[a-zA-Z]+"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"constant.character.escape",regex:"\\\\[^a-zA-Z]?"},{token:"string",regex:"\\${1,2}",next:"equation"}],equation:[{token:"comment",regex:"%.*$"},{token:"string",regex:"\\${1,2}",next:"start"},{token:"constant.character.escape",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"error",regex:"^\\s*$",next:"start"},{defaultToken:"string"}]}};oop.inherits(LatexHighlightRules,TextHighlightRules),exports.LatexHighlightRules=LatexHighlightRules}),ace.define("ace/mode/folding/latex",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],function(acequire,exports,module){"use strict";var oop=acequire("../../lib/oop"),BaseFoldMode=acequire("./fold_mode").FoldMode,Range=acequire("../../range").Range,TokenIterator=acequire("../../token_iterator").TokenIterator,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.foldingStartMarker=/^\s*\\(begin)|(section|subsection|paragraph)\b|{\s*$/,this.foldingStopMarker=/^\s*\\(end)\b|^\s*}/,this.getFoldWidgetRange=function(session,foldStyle,row){var match,line=session.doc.getLine(row);return(match=this.foldingStartMarker.exec(line))?match[1]?this.latexBlock(session,row,match[0].length-1):match[2]?this.latexSection(session,row,match[0].length-1):this.openingBracketBlock(session,"{",row,match.index):(match=this.foldingStopMarker.exec(line))?match[1]?this.latexBlock(session,row,match[0].length-1):this.closingBracketBlock(session,"}",row,match.index+match[0].length):void 0},this.latexBlock=function(session,row,column){var keywords={"\\begin":1,"\\end":-1},stream=new TokenIterator(session,row,column),token=stream.getCurrentToken();if(token&&("storage.type"==token.type||"constant.character.escape"==token.type)){var dir=keywords[token.value],getType=function(){var type="lparen"==stream.stepForward().type?stream.stepForward().value:"";return-1===dir&&(stream.stepBackward(),type&&stream.stepBackward()),type},stack=[getType()],startColumn=-1===dir?stream.getCurrentTokenColumn():session.getLine(row).length,startRow=row;for(stream.step=-1===dir?stream.stepBackward:stream.stepForward;token=stream.step();)if(token&&("storage.type"==token.type||"constant.character.escape"==token.type)){var level=keywords[token.value];if(level){var type=getType();if(level===dir)stack.unshift(type);else if(stack.shift()!==type||!stack.length)break}}if(!stack.length){row=stream.getCurrentTokenRow();return-1===dir?new Range(row,session.getLine(row).length,startRow,startColumn):(stream.stepBackward(),new Range(startRow,startColumn,row,stream.getCurrentTokenColumn()))}}},this.latexSection=function(session,row,column){var keywords=["\\subsection","\\section","\\begin","\\end","\\paragraph"],stream=new TokenIterator(session,row,column),token=stream.getCurrentToken();if(token&&"storage.type"==token.type){for(var startLevel=keywords.indexOf(token.value),stackDepth=0,endRow=row;token=stream.stepForward();)if("storage.type"===token.type){var level=keywords.indexOf(token.value);if(level>=2){if(stackDepth||(endRow=stream.getCurrentTokenRow()-1),(stackDepth+=2==level?1:-1)<0)break}else if(level>=startLevel)break}for(stackDepth||(endRow=stream.getCurrentTokenRow()-1);endRow>row&&!/\S/.test(session.getLine(endRow));)endRow--;return new Range(row,session.getLine(row).length,endRow,session.getLine(endRow).length)}}}.call(FoldMode.prototype)}),ace.define("ace/mode/latex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/latex_highlight_rules","ace/mode/folding/latex"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextMode=acequire("./text").Mode,LatexHighlightRules=acequire("./latex_highlight_rules").LatexHighlightRules,LatexFoldMode=acequire("./folding/latex").FoldMode,Mode=function(){this.HighlightRules=LatexHighlightRules,this.foldingRules=new LatexFoldMode,this.$behaviour=this.$defaultBehaviour};oop.inherits(Mode,TextMode),function(){this.type="text",this.lineCommentStart="%",this.$id="ace/mode/latex"}.call(Mode.prototype),exports.Mode=Mode})}}]);
//# sourceMappingURL=91.ef2c5ff2d24f0bf43a98.bundle.js.map