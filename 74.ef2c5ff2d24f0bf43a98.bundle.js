(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1118:function(module,exports){ace.define("ace/mode/haskell_cabal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules,CabalHighlightRules=function(){this.$rules={start:[{token:"comment",regex:"^\\s*--.*$"},{token:["keyword"],regex:/^(\s*\w.*?)(:(?:\s+|$))/},{token:"constant.numeric",regex:/[\d_]+(?:(?:[\.\d_]*)?)/},{token:"constant.language.boolean",regex:"(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"markup.heading",regex:/^(\w.*)$/}]}};oop.inherits(CabalHighlightRules,TextHighlightRules),exports.CabalHighlightRules=CabalHighlightRules}),ace.define("ace/mode/folding/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(acequire,exports,module){"use strict";var oop=acequire("../../lib/oop"),BaseFoldMode=acequire("./fold_mode").FoldMode,Range=acequire("../../range").Range,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.isHeading=function(session,row){var token=session.getTokens(row)[0];return 0==row||token&&0===token.type.lastIndexOf("markup.heading",0)},this.getFoldWidget=function(session,foldStyle,row){if(this.isHeading(session,row))return"start";if("markbeginend"===foldStyle&&!/^\s*$/.test(session.getLine(row))){for(var maxRow=session.getLength();++row<maxRow&&/^\s*$/.test(session.getLine(row)););if(row==maxRow||this.isHeading(session,row))return"end"}return""},this.getFoldWidgetRange=function(session,foldStyle,row){var startColumn=session.getLine(row).length,maxRow=session.getLength(),startRow=row,endRow=row;if(this.isHeading(session,row)){for(;++row<maxRow;)if(this.isHeading(session,row)){row--;break}if((endRow=row)>startRow)for(;endRow>startRow&&/^\s*$/.test(session.getLine(endRow));)endRow--;if(endRow>startRow){var endColumn=session.getLine(endRow).length;return new Range(startRow,startColumn,endRow,endColumn)}}else if("end"===this.getFoldWidget(session,foldStyle,row)){for(endRow=row,endColumn=session.getLine(endRow).length;--row>=0&&!this.isHeading(session,row););startColumn=session.getLine(row).length;return new Range(row,startColumn,endRow,endColumn)}}}.call(FoldMode.prototype)}),ace.define("ace/mode/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/haskell_cabal_highlight_rules","ace/mode/folding/haskell_cabal"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextMode=acequire("./text").Mode,CabalHighlightRules=acequire("./haskell_cabal_highlight_rules").CabalHighlightRules,FoldMode=acequire("./folding/haskell_cabal").FoldMode,Mode=function(){this.HighlightRules=CabalHighlightRules,this.foldingRules=new FoldMode,this.$behaviour=this.$defaultBehaviour};oop.inherits(Mode,TextMode),function(){this.lineCommentStart="--",this.blockComment=null,this.$id="ace/mode/haskell_cabal"}.call(Mode.prototype),exports.Mode=Mode})}}]);
//# sourceMappingURL=74.ef2c5ff2d24f0bf43a98.bundle.js.map