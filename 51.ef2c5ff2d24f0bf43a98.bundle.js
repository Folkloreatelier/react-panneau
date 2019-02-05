(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1095:function(module,exports){ace.define("ace/mode/diff_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextHighlightRules=acequire("./text_highlight_rules").TextHighlightRules,DiffHighlightRules=function(){this.$rules={start:[{regex:"^(?:\\*{15}|={67}|-{3}|\\+{3})$",token:"punctuation.definition.separator.diff",name:"keyword"},{regex:"^(@@)(\\s*.+?\\s*)(@@)(.*)$",token:["constant","constant.numeric","constant","comment.doc.tag"]},{regex:"^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",token:["constant.numeric","punctuation.definition.range.diff","constant.function","constant.numeric","punctuation.definition.range.diff","invalid"],name:"meta."},{regex:"^(\\-{3}|\\+{3}|\\*{3})( .+)$",token:["constant.numeric","meta.tag"]},{regex:"^([!+>])(.*?)(\\s*)$",token:["support.constant","text","invalid"]},{regex:"^([<\\-])(.*?)(\\s*)$",token:["support.function","string","invalid"]},{regex:"^(diff)(\\s+--\\w+)?(.+?)( .+)?$",token:["variable","variable","keyword","variable"]},{regex:"^Index.+$",token:"variable"},{regex:"^\\s+$",token:"text"},{regex:"\\s*$",token:"invalid"},{defaultToken:"invisible",caseInsensitive:!0}]}};oop.inherits(DiffHighlightRules,TextHighlightRules),exports.DiffHighlightRules=DiffHighlightRules}),ace.define("ace/mode/folding/diff",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(acequire,exports,module){"use strict";var oop=acequire("../../lib/oop"),BaseFoldMode=acequire("./fold_mode").FoldMode,Range=acequire("../../range").Range,FoldMode=exports.FoldMode=function(levels,flag){this.regExpList=levels,this.flag=flag,this.foldingStartMarker=RegExp("^("+levels.join("|")+")",this.flag)};oop.inherits(FoldMode,BaseFoldMode),function(){this.getFoldWidgetRange=function(session,foldStyle,row){for(var line=session.getLine(row),start={row:row,column:line.length},regList=this.regExpList,i=1;i<=regList.length;i++){var re=RegExp("^("+regList.slice(0,i).join("|")+")",this.flag);if(re.test(line))break}for(var l=session.getLength();++row<l&&(line=session.getLine(row),!re.test(line)););if(row!=start.row+1)return Range.fromPoints(start,{row:row-1,column:line.length})}}.call(FoldMode.prototype)}),ace.define("ace/mode/diff",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/diff_highlight_rules","ace/mode/folding/diff"],function(acequire,exports,module){"use strict";var oop=acequire("../lib/oop"),TextMode=acequire("./text").Mode,HighlightRules=acequire("./diff_highlight_rules").DiffHighlightRules,FoldMode=acequire("./folding/diff").FoldMode,Mode=function(){this.HighlightRules=HighlightRules,this.foldingRules=new FoldMode(["diff","index","\\+{3}","@@|\\*{5}"],"i")};oop.inherits(Mode,TextMode),function(){this.$id="ace/mode/diff"}.call(Mode.prototype),exports.Mode=Mode})}}]);
//# sourceMappingURL=51.ef2c5ff2d24f0bf43a98.bundle.js.map