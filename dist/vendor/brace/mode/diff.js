flklrJsonp([182],{65:function(e,i){ace.define("ace/mode/diff_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,i,t){"use strict";var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{regex:"^(?:\\*{15}|={67}|-{3}|\\+{3})$",token:"punctuation.definition.separator.diff",name:"keyword"},{regex:"^(@@)(\\s*.+?\\s*)(@@)(.*)$",token:["constant","constant.numeric","constant","comment.doc.tag"]},{regex:"^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",token:["constant.numeric","punctuation.definition.range.diff","constant.function","constant.numeric","punctuation.definition.range.diff","invalid"],name:"meta."},{regex:"^(\\-{3}|\\+{3}|\\*{3})( .+)$",token:["constant.numeric","meta.tag"]},{regex:"^([!+>])(.*?)(\\s*)$",token:["support.constant","text","invalid"]},{regex:"^([<\\-])(.*?)(\\s*)$",token:["support.function","string","invalid"]},{regex:"^(diff)(\\s+--\\w+)?(.+?)( .+)?$",token:["variable","variable","keyword","variable"]},{regex:"^Index.+$",token:"variable"},{regex:"^\\s+$",token:"text"},{regex:"\\s*$",token:"invalid"},{defaultToken:"invisible",caseInsensitive:!0}]}};n.inherits(r,o),i.DiffHighlightRules=r}),ace.define("ace/mode/folding/diff",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,i,t){"use strict";var n=e("../../lib/oop"),o=e("./fold_mode").FoldMode,r=e("../../range").Range,a=i.FoldMode=function(e,i){this.regExpList=e,this.flag=i,this.foldingStartMarker=RegExp("^("+e.join("|")+")",this.flag)};n.inherits(a,o),function(){this.getFoldWidgetRange=function(e,i,t){for(var n=e.getLine(t),o={row:t,column:n.length},a=this.regExpList,d=1;d<=a.length;d++){var f=RegExp("^("+a.slice(0,d).join("|")+")",this.flag);if(f.test(n))break}for(var l=e.getLength();++t<l&&(n=e.getLine(t),!f.test(n)););if(t!=o.row+1)return r.fromPoints(o,{row:t-1,column:n.length})}}.call(a.prototype)}),ace.define("ace/mode/diff",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/diff_highlight_rules","ace/mode/folding/diff"],function(e,i,t){"use strict";var n=e("../lib/oop"),o=e("./text").Mode,r=e("./diff_highlight_rules").DiffHighlightRules,a=e("./folding/diff").FoldMode,d=function(){this.HighlightRules=r,this.foldingRules=new a(["diff","index","\\+{3}","@@|\\*{5}"],"i")};n.inherits(d,o),function(){this.$id="ace/mode/diff"}.call(d.prototype),i.Mode=d})}});