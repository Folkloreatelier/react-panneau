flklrJsonp([ 133 ], {
    69: function(e, t) {
        ace.define("ace/mode/doc_comment_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules, a = function() {
                this.$rules = {
                    start: [ {
                        token: "comment.doc.tag",
                        regex: "@[\\w\\d_]+"
                    }, a.getTagRule(), {
                        defaultToken: "comment.doc",
                        caseInsensitive: !0
                    } ]
                };
            };
            r.inherits(a, o), a.getTagRule = function(e) {
                return {
                    token: "comment.doc.tag.storage.type",
                    regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                };
            }, a.getStartRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\/\\*(?=\\*)",
                    next: e
                };
            }, a.getEndRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\*\\/",
                    next: e
                };
            }, t.DocCommentHighlightRules = a;
        }), ace.define("ace/mode/javascript_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            function JSX() {
                var e = i.replace("\\d", "\\d\\-"), t = {
                    onMatch: function(e, t, n) {
                        var r = "/" == e.charAt(1) ? 2 : 1;
                        return 1 == r ? (t != this.nextState ? n.unshift(this.next, this.nextState, 0) : n.unshift(this.next), 
                        n[2]++) : 2 == r && t == this.nextState && (!--n[1] || n[1] < 0) && (n.shift(), 
                        n.shift()), [ {
                            type: "meta.tag.punctuation." + (1 == r ? "" : "end-") + "tag-open.xml",
                            value: e.slice(0, r)
                        }, {
                            type: "meta.tag.tag-name.xml",
                            value: e.substr(r)
                        } ];
                    },
                    regex: "</?" + e,
                    next: "jsxAttributes",
                    nextState: "jsx"
                };
                this.$rules.start.unshift(t);
                var n = {
                    regex: "{",
                    token: "paren.quasi.start",
                    push: "start"
                };
                this.$rules.jsx = [ n, t, {
                    include: "reference"
                }, {
                    defaultToken: "string"
                } ], this.$rules.jsxAttributes = [ {
                    token: "meta.tag.punctuation.tag-close.xml",
                    regex: "/?>",
                    onMatch: function(e, t, n) {
                        return t == n[0] && n.shift(), 2 == e.length && (n[0] == this.nextState && n[1]--, 
                        (!n[1] || n[1] < 0) && n.splice(0, 2)), this.next = n[0] || "start", [ {
                            type: this.token,
                            value: e
                        } ];
                    },
                    nextState: "jsx"
                }, n, comments("jsxAttributes"), {
                    token: "entity.other.attribute-name.xml",
                    regex: e
                }, {
                    token: "keyword.operator.attribute-equals.xml",
                    regex: "="
                }, {
                    token: "text.tag-whitespace.xml",
                    regex: "\\s+"
                }, {
                    token: "string.attribute-value.xml",
                    regex: "'",
                    stateName: "jsx_attr_q",
                    push: [ {
                        token: "string.attribute-value.xml",
                        regex: "'",
                        next: "pop"
                    }, {
                        include: "reference"
                    }, {
                        defaultToken: "string.attribute-value.xml"
                    } ]
                }, {
                    token: "string.attribute-value.xml",
                    regex: '"',
                    stateName: "jsx_attr_qq",
                    push: [ {
                        token: "string.attribute-value.xml",
                        regex: '"',
                        next: "pop"
                    }, {
                        include: "reference"
                    }, {
                        defaultToken: "string.attribute-value.xml"
                    } ]
                }, t ], this.$rules.reference = [ {
                    token: "constant.language.escape.reference.xml",
                    regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
                } ];
            }
            function comments(e) {
                return [ {
                    token: "comment",
                    regex: /\/\*/,
                    next: [ o.getTagRule(), {
                        token: "comment",
                        regex: "\\*\\/",
                        next: e || "pop"
                    }, {
                        defaultToken: "comment",
                        caseInsensitive: !0
                    } ]
                }, {
                    token: "comment",
                    regex: "\\/\\/",
                    next: [ o.getTagRule(), {
                        token: "comment",
                        regex: "$|^",
                        next: e || "pop"
                    }, {
                        defaultToken: "comment",
                        caseInsensitive: !0
                    } ]
                } ];
            }
            var r = e("../lib/oop"), o = e("./doc_comment_highlight_rules").DocCommentHighlightRules, a = e("./text_highlight_rules").TextHighlightRules, i = "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*", s = function(e) {
                var t = this.createKeywordMapper({
                    "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
                    keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
                    "storage.type": "const|let|var|function",
                    "constant.language": "null|Infinity|NaN|undefined",
                    "support.function": "alert",
                    "constant.language.boolean": "true|false"
                }, "identifier"), n = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
                this.$rules = {
                    no_regex: [ o.getStartRule("doc-start"), comments("no_regex"), {
                        token: "string",
                        regex: "'(?=.)",
                        next: "qstring"
                    }, {
                        token: "string",
                        regex: '"(?=.)',
                        next: "qqstring"
                    }, {
                        token: "constant.numeric",
                        regex: /0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/
                    }, {
                        token: "constant.numeric",
                        regex: /[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
                    }, {
                        token: [ "storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator" ],
                        regex: "(" + i + ")(\\.)(prototype)(\\.)(" + i + ")(\\s*)(=)",
                        next: "function_arguments"
                    }, {
                        token: [ "storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen" ],
                        regex: "(" + i + ")(\\.)(" + i + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: [ "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen" ],
                        regex: "(" + i + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: [ "storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen" ],
                        regex: "(" + i + ")(\\.)(" + i + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: [ "storage.type", "text", "entity.name.function", "text", "paren.lparen" ],
                        regex: "(function)(\\s+)(" + i + ")(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: [ "entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen" ],
                        regex: "(" + i + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: [ "text", "text", "storage.type", "text", "paren.lparen" ],
                        regex: "(:)(\\s*)(function)(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: "keyword",
                        regex: "(?:case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void)\\b",
                        next: "start"
                    }, {
                        token: [ "support.constant" ],
                        regex: /that\b/
                    }, {
                        token: [ "storage.type", "punctuation.operator", "support.function.firebug" ],
                        regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
                    }, {
                        token: t,
                        regex: i
                    }, {
                        token: "punctuation.operator",
                        regex: /[.](?![.])/,
                        next: "property"
                    }, {
                        token: "keyword.operator",
                        regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                        next: "start"
                    }, {
                        token: "punctuation.operator",
                        regex: /[?:,;.]/,
                        next: "start"
                    }, {
                        token: "paren.lparen",
                        regex: /[\[({]/,
                        next: "start"
                    }, {
                        token: "paren.rparen",
                        regex: /[\])}]/
                    }, {
                        token: "comment",
                        regex: /^#!.*$/
                    } ],
                    property: [ {
                        token: "text",
                        regex: "\\s+"
                    }, {
                        token: [ "storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen" ],
                        regex: "(" + i + ")(\\.)(" + i + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                        next: "function_arguments"
                    }, {
                        token: "punctuation.operator",
                        regex: /[.](?![.])/
                    }, {
                        token: "support.function",
                        regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
                    }, {
                        token: "support.function.dom",
                        regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
                    }, {
                        token: "support.constant",
                        regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
                    }, {
                        token: "identifier",
                        regex: i
                    }, {
                        regex: "",
                        token: "empty",
                        next: "no_regex"
                    } ],
                    start: [ o.getStartRule("doc-start"), comments("start"), {
                        token: "string.regexp",
                        regex: "\\/",
                        next: "regex"
                    }, {
                        token: "text",
                        regex: "\\s+|^$",
                        next: "start"
                    }, {
                        token: "empty",
                        regex: "",
                        next: "no_regex"
                    } ],
                    regex: [ {
                        token: "regexp.keyword.operator",
                        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
                    }, {
                        token: "string.regexp",
                        regex: "/[sxngimy]*",
                        next: "no_regex"
                    }, {
                        token: "invalid",
                        regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
                    }, {
                        token: "constant.language.escape",
                        regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
                    }, {
                        token: "constant.language.delimiter",
                        regex: /\|/
                    }, {
                        token: "constant.language.escape",
                        regex: /\[\^?/,
                        next: "regex_character_class"
                    }, {
                        token: "empty",
                        regex: "$",
                        next: "no_regex"
                    }, {
                        defaultToken: "string.regexp"
                    } ],
                    regex_character_class: [ {
                        token: "regexp.charclass.keyword.operator",
                        regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
                    }, {
                        token: "constant.language.escape",
                        regex: "]",
                        next: "regex"
                    }, {
                        token: "constant.language.escape",
                        regex: "-"
                    }, {
                        token: "empty",
                        regex: "$",
                        next: "no_regex"
                    }, {
                        defaultToken: "string.regexp.charachterclass"
                    } ],
                    function_arguments: [ {
                        token: "variable.parameter",
                        regex: i
                    }, {
                        token: "punctuation.operator",
                        regex: "[, ]+"
                    }, {
                        token: "punctuation.operator",
                        regex: "$"
                    }, {
                        token: "empty",
                        regex: "",
                        next: "no_regex"
                    } ],
                    qqstring: [ {
                        token: "constant.language.escape",
                        regex: n
                    }, {
                        token: "string",
                        regex: "\\\\$",
                        next: "qqstring"
                    }, {
                        token: "string",
                        regex: '"|$',
                        next: "no_regex"
                    }, {
                        defaultToken: "string"
                    } ],
                    qstring: [ {
                        token: "constant.language.escape",
                        regex: n
                    }, {
                        token: "string",
                        regex: "\\\\$",
                        next: "qstring"
                    }, {
                        token: "string",
                        regex: "'|$",
                        next: "no_regex"
                    }, {
                        defaultToken: "string"
                    } ]
                }, e && e.noES6 || (this.$rules.no_regex.unshift({
                    regex: "[{}]",
                    onMatch: function(e, t, n) {
                        if (this.next = "{" == e ? this.nextState : "", "{" == e && n.length) n.unshift("start", t); else if ("}" == e && n.length && (n.shift(), 
                        this.next = n.shift(), -1 != this.next.indexOf("string") || -1 != this.next.indexOf("jsx"))) return "paren.quasi.end";
                        return "{" == e ? "paren.lparen" : "paren.rparen";
                    },
                    nextState: "start"
                }, {
                    token: "string.quasi.start",
                    regex: /`/,
                    push: [ {
                        token: "constant.language.escape",
                        regex: n
                    }, {
                        token: "paren.quasi.start",
                        regex: /\${/,
                        push: "start"
                    }, {
                        token: "string.quasi.end",
                        regex: /`/,
                        next: "pop"
                    }, {
                        defaultToken: "string.quasi"
                    } ]
                }), e && 0 == e.jsx || JSX.call(this)), this.embedRules(o, "doc-", [ o.getEndRule("no_regex") ]), 
                this.normalizeRules();
            };
            r.inherits(s, a), t.JavaScriptHighlightRules = s;
        }), ace.define("ace/mode/xml_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules, a = function(e) {
                var t = "[_:a-zA-ZÀ-￿][-_:.a-zA-Z0-9À-￿]*";
                this.$rules = {
                    start: [ {
                        token: "string.cdata.xml",
                        regex: "<\\!\\[CDATA\\[",
                        next: "cdata"
                    }, {
                        token: [ "punctuation.xml-decl.xml", "keyword.xml-decl.xml" ],
                        regex: "(<\\?)(xml)(?=[\\s])",
                        next: "xml_decl",
                        caseInsensitive: !0
                    }, {
                        token: [ "punctuation.instruction.xml", "keyword.instruction.xml" ],
                        regex: "(<\\?)(" + t + ")",
                        next: "processing_instruction"
                    }, {
                        token: "comment.xml",
                        regex: "<\\!--",
                        next: "comment"
                    }, {
                        token: [ "xml-pe.doctype.xml", "xml-pe.doctype.xml" ],
                        regex: "(<\\!)(DOCTYPE)(?=[\\s])",
                        next: "doctype",
                        caseInsensitive: !0
                    }, {
                        include: "tag"
                    }, {
                        token: "text.end-tag-open.xml",
                        regex: "</"
                    }, {
                        token: "text.tag-open.xml",
                        regex: "<"
                    }, {
                        include: "reference"
                    }, {
                        defaultToken: "text.xml"
                    } ],
                    xml_decl: [ {
                        token: "entity.other.attribute-name.decl-attribute-name.xml",
                        regex: "(?:" + t + ":)?" + t
                    }, {
                        token: "keyword.operator.decl-attribute-equals.xml",
                        regex: "="
                    }, {
                        include: "whitespace"
                    }, {
                        include: "string"
                    }, {
                        token: "punctuation.xml-decl.xml",
                        regex: "\\?>",
                        next: "start"
                    } ],
                    processing_instruction: [ {
                        token: "punctuation.instruction.xml",
                        regex: "\\?>",
                        next: "start"
                    }, {
                        defaultToken: "instruction.xml"
                    } ],
                    doctype: [ {
                        include: "whitespace"
                    }, {
                        include: "string"
                    }, {
                        token: "xml-pe.doctype.xml",
                        regex: ">",
                        next: "start"
                    }, {
                        token: "xml-pe.xml",
                        regex: "[-_a-zA-Z0-9:]+"
                    }, {
                        token: "punctuation.int-subset",
                        regex: "\\[",
                        push: "int_subset"
                    } ],
                    int_subset: [ {
                        token: "text.xml",
                        regex: "\\s+"
                    }, {
                        token: "punctuation.int-subset.xml",
                        regex: "]",
                        next: "pop"
                    }, {
                        token: [ "punctuation.markup-decl.xml", "keyword.markup-decl.xml" ],
                        regex: "(<\\!)(" + t + ")",
                        push: [ {
                            token: "text",
                            regex: "\\s+"
                        }, {
                            token: "punctuation.markup-decl.xml",
                            regex: ">",
                            next: "pop"
                        }, {
                            include: "string"
                        } ]
                    } ],
                    cdata: [ {
                        token: "string.cdata.xml",
                        regex: "\\]\\]>",
                        next: "start"
                    }, {
                        token: "text.xml",
                        regex: "\\s+"
                    }, {
                        token: "text.xml",
                        regex: "(?:[^\\]]|\\](?!\\]>))+"
                    } ],
                    comment: [ {
                        token: "comment.xml",
                        regex: "--\x3e",
                        next: "start"
                    }, {
                        defaultToken: "comment.xml"
                    } ],
                    reference: [ {
                        token: "constant.language.escape.reference.xml",
                        regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
                    } ],
                    attr_reference: [ {
                        token: "constant.language.escape.reference.attribute-value.xml",
                        regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
                    } ],
                    tag: [ {
                        token: [ "meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml" ],
                        regex: "(?:(<)|(</))((?:" + t + ":)?" + t + ")",
                        next: [ {
                            include: "attributes"
                        }, {
                            token: "meta.tag.punctuation.tag-close.xml",
                            regex: "/?>",
                            next: "start"
                        } ]
                    } ],
                    tag_whitespace: [ {
                        token: "text.tag-whitespace.xml",
                        regex: "\\s+"
                    } ],
                    whitespace: [ {
                        token: "text.whitespace.xml",
                        regex: "\\s+"
                    } ],
                    string: [ {
                        token: "string.xml",
                        regex: "'",
                        push: [ {
                            token: "string.xml",
                            regex: "'",
                            next: "pop"
                        }, {
                            defaultToken: "string.xml"
                        } ]
                    }, {
                        token: "string.xml",
                        regex: '"',
                        push: [ {
                            token: "string.xml",
                            regex: '"',
                            next: "pop"
                        }, {
                            defaultToken: "string.xml"
                        } ]
                    } ],
                    attributes: [ {
                        token: "entity.other.attribute-name.xml",
                        regex: "(?:" + t + ":)?" + t
                    }, {
                        token: "keyword.operator.attribute-equals.xml",
                        regex: "="
                    }, {
                        include: "tag_whitespace"
                    }, {
                        include: "attribute_value"
                    } ],
                    attribute_value: [ {
                        token: "string.attribute-value.xml",
                        regex: "'",
                        push: [ {
                            token: "string.attribute-value.xml",
                            regex: "'",
                            next: "pop"
                        }, {
                            include: "attr_reference"
                        }, {
                            defaultToken: "string.attribute-value.xml"
                        } ]
                    }, {
                        token: "string.attribute-value.xml",
                        regex: '"',
                        push: [ {
                            token: "string.attribute-value.xml",
                            regex: '"',
                            next: "pop"
                        }, {
                            include: "attr_reference"
                        }, {
                            defaultToken: "string.attribute-value.xml"
                        } ]
                    } ]
                }, this.constructor === a && this.normalizeRules();
            };
            (function() {
                this.embedTagRules = function(e, t, n) {
                    this.$rules.tag.unshift({
                        token: [ "meta.tag.punctuation.tag-open.xml", "meta.tag." + n + ".tag-name.xml" ],
                        regex: "(<)(" + n + "(?=\\s|>|$))",
                        next: [ {
                            include: "attributes"
                        }, {
                            token: "meta.tag.punctuation.tag-close.xml",
                            regex: "/?>",
                            next: t + "start"
                        } ]
                    }), this.$rules[n + "-end"] = [ {
                        include: "attributes"
                    }, {
                        token: "meta.tag.punctuation.tag-close.xml",
                        regex: "/?>",
                        next: "start",
                        onMatch: function(e, t, n) {
                            return n.splice(0), this.token;
                        }
                    } ], this.embedRules(e, t, [ {
                        token: [ "meta.tag.punctuation.end-tag-open.xml", "meta.tag." + n + ".tag-name.xml" ],
                        regex: "(</)(" + n + "(?=\\s|>|$))",
                        next: n + "-end"
                    }, {
                        token: "string.cdata.xml",
                        regex: "<\\!\\[CDATA\\["
                    }, {
                        token: "string.cdata.xml",
                        regex: "\\]\\]>"
                    } ]);
                };
            }).call(o.prototype), r.inherits(a, o), t.XmlHighlightRules = a;
        }), ace.define("ace/mode/css_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = (e("../lib/lang"), e("./text_highlight_rules").TextHighlightRules), a = t.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index", i = t.supportFunction = "rgb|rgba|url|attr|counter|counters", s = t.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero", l = t.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow", g = t.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace", u = t.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))", c = t.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b", p = t.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|acequired|root|target|valid|visited)\\b", d = function() {
                var e = this.createKeywordMapper({
                    "support.function": i,
                    "support.constant": s,
                    "support.type": a,
                    "support.constant.color": l,
                    "support.constant.fonts": g
                }, "text", !0);
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "\\/\\*",
                        push: "comment"
                    }, {
                        token: "paren.lparen",
                        regex: "\\{",
                        push: "ruleset"
                    }, {
                        token: "string",
                        regex: "@.*?{",
                        push: "media"
                    }, {
                        token: "keyword",
                        regex: "#[a-z0-9-_]+"
                    }, {
                        token: "variable",
                        regex: "\\.[a-z0-9-_]+"
                    }, {
                        token: "string",
                        regex: ":[a-z0-9-_]+"
                    }, {
                        token: "constant",
                        regex: "[a-z0-9-_]+"
                    }, {
                        caseInsensitive: !0
                    } ],
                    media: [ {
                        token: "comment",
                        regex: "\\/\\*",
                        push: "comment"
                    }, {
                        token: "paren.lparen",
                        regex: "\\{",
                        push: "ruleset"
                    }, {
                        token: "string",
                        regex: "\\}",
                        next: "pop"
                    }, {
                        token: "keyword",
                        regex: "#[a-z0-9-_]+"
                    }, {
                        token: "variable",
                        regex: "\\.[a-z0-9-_]+"
                    }, {
                        token: "string",
                        regex: ":[a-z0-9-_]+"
                    }, {
                        token: "constant",
                        regex: "[a-z0-9-_]+"
                    }, {
                        caseInsensitive: !0
                    } ],
                    comment: [ {
                        token: "comment",
                        regex: "\\*\\/",
                        next: "pop"
                    }, {
                        defaultToken: "comment"
                    } ],
                    ruleset: [ {
                        token: "paren.rparen",
                        regex: "\\}",
                        next: "pop"
                    }, {
                        token: "comment",
                        regex: "\\/\\*",
                        push: "comment"
                    }, {
                        token: "string",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                    }, {
                        token: "string",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                    }, {
                        token: [ "constant.numeric", "keyword" ],
                        regex: "(" + u + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
                    }, {
                        token: "constant.numeric",
                        regex: u
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{6}"
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{3}"
                    }, {
                        token: [ "punctuation", "entity.other.attribute-name.pseudo-element.css" ],
                        regex: c
                    }, {
                        token: [ "punctuation", "entity.other.attribute-name.pseudo-class.css" ],
                        regex: p
                    }, {
                        token: [ "support.function", "string", "support.function" ],
                        regex: "(url\\()(.*)(\\))"
                    }, {
                        token: e,
                        regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
                    }, {
                        caseInsensitive: !0
                    } ]
                }, this.normalizeRules();
            };
            r.inherits(d, o), t.CssHighlightRules = d;
        }), ace.define("ace/mode/html_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/css_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("../lib/lang"), a = e("./css_highlight_rules").CssHighlightRules, i = e("./javascript_highlight_rules").JavaScriptHighlightRules, s = e("./xml_highlight_rules").XmlHighlightRules, l = o.createMap({
                a: "anchor",
                button: "form",
                form: "form",
                img: "image",
                input: "form",
                label: "form",
                option: "form",
                script: "script",
                select: "form",
                textarea: "form",
                style: "style",
                table: "table",
                tbody: "table",
                td: "table",
                tfoot: "table",
                th: "table",
                tr: "table"
            }), g = function() {
                s.call(this), this.addRules({
                    attributes: [ {
                        include: "tag_whitespace"
                    }, {
                        token: "entity.other.attribute-name.xml",
                        regex: "[-_a-zA-Z0-9:.]+"
                    }, {
                        token: "keyword.operator.attribute-equals.xml",
                        regex: "=",
                        push: [ {
                            include: "tag_whitespace"
                        }, {
                            token: "string.unquoted.attribute-value.html",
                            regex: "[^<>='\"`\\s]+",
                            next: "pop"
                        }, {
                            token: "empty",
                            regex: "",
                            next: "pop"
                        } ]
                    }, {
                        include: "attribute_value"
                    } ],
                    tag: [ {
                        token: function(e, t) {
                            var n = l[t];
                            return [ "meta.tag.punctuation." + ("<" == e ? "" : "end-") + "tag-open.xml", "meta.tag" + (n ? "." + n : "") + ".tag-name.xml" ];
                        },
                        regex: "(</?)([-_a-zA-Z0-9:.]+)",
                        next: "tag_stuff"
                    } ],
                    tag_stuff: [ {
                        include: "attributes"
                    }, {
                        token: "meta.tag.punctuation.tag-close.xml",
                        regex: "/?>",
                        next: "start"
                    } ]
                }), this.embedTagRules(a, "css-", "style"), this.embedTagRules(new i({
                    jsx: !1
                }).getRules(), "js-", "script"), this.constructor === g && this.normalizeRules();
            };
            r.inherits(g, s), t.HtmlHighlightRules = g;
        }), ace.define("ace/mode/markdown_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules", "ace/mode/html_highlight_rules", "ace/mode/css_highlight_rules" ], function(e, t, n) {
            "use strict";
            function github_embed(e, t) {
                return {
                    token: "support.function",
                    regex: "^\\s*```" + e + "\\s*$",
                    push: t + "start"
                };
            }
            var r = e("../lib/oop"), o = e("../lib/lang"), a = e("./text_highlight_rules").TextHighlightRules, i = e("./javascript_highlight_rules").JavaScriptHighlightRules, s = e("./xml_highlight_rules").XmlHighlightRules, l = e("./html_highlight_rules").HtmlHighlightRules, g = e("./css_highlight_rules").CssHighlightRules, u = function(e) {
                return "(?:[^" + o.escapeRegExp(e) + "\\\\]|\\\\.)*";
            }, c = function() {
                l.call(this), this.$rules.start.unshift({
                    token: "empty_line",
                    regex: "^$",
                    next: "allowBlock"
                }, {
                    token: "markup.heading.1",
                    regex: "^=+(?=\\s*$)"
                }, {
                    token: "markup.heading.2",
                    regex: "^\\-+(?=\\s*$)"
                }, {
                    token: function(e) {
                        return "markup.heading." + e.length;
                    },
                    regex: /^#{1,6}(?=\s*[^ #]|\s+#.)/,
                    next: "header"
                }, github_embed("(?:javascript|js)", "jscode-"), github_embed("xml", "xmlcode-"), github_embed("html", "htmlcode-"), github_embed("css", "csscode-"), {
                    token: "support.function",
                    regex: "^\\s*```\\s*\\S*(?:{.*?\\})?\\s*$",
                    next: "githubblock"
                }, {
                    token: "string.blockquote",
                    regex: "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
                    next: "blockquote"
                }, {
                    token: "constant",
                    regex: "^ {0,2}(?:(?: ?\\* ?){3,}|(?: ?\\- ?){3,}|(?: ?\\_ ?){3,})\\s*$",
                    next: "allowBlock"
                }, {
                    token: "markup.list",
                    regex: "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
                    next: "listblock-start"
                }, {
                    include: "basic"
                }), this.addRules({
                    basic: [ {
                        token: "constant.language.escape",
                        regex: /\\[\\`*_{}\[\]()#+\-.!]/
                    }, {
                        token: "support.function",
                        regex: "(`+)(.*?[^`])(\\1)"
                    }, {
                        token: [ "text", "constant", "text", "url", "string", "text" ],
                        regex: '^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:["][^"]+["])?(\\s*))$'
                    }, {
                        token: [ "text", "string", "text", "constant", "text" ],
                        regex: "(\\[)(" + u("]") + ")(\\]\\s*\\[)(" + u("]") + ")(\\])"
                    }, {
                        token: [ "text", "string", "text", "markup.underline", "string", "text" ],
                        regex: "(\\[)(" + u("]") + ')(\\]\\()((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)(\\s*"' + u('"') + '"\\s*)?(\\))'
                    }, {
                        token: "string.strong",
                        regex: "([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)"
                    }, {
                        token: "string.emphasis",
                        regex: "([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)"
                    }, {
                        token: [ "text", "url", "text" ],
                        regex: "(<)((?:https?|ftp|dict):[^'\">\\s]+|(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+)(>)"
                    } ],
                    allowBlock: [ {
                        token: "support.function",
                        regex: "^ {4}.+",
                        next: "allowBlock"
                    }, {
                        token: "empty_line",
                        regex: "^$",
                        next: "allowBlock"
                    }, {
                        token: "empty",
                        regex: "",
                        next: "start"
                    } ],
                    header: [ {
                        regex: "$",
                        next: "start"
                    }, {
                        include: "basic"
                    }, {
                        defaultToken: "heading"
                    } ],
                    "listblock-start": [ {
                        token: "support.variable",
                        regex: /(?:\[[ x]\])?/,
                        next: "listblock"
                    } ],
                    listblock: [ {
                        token: "empty_line",
                        regex: "^$",
                        next: "start"
                    }, {
                        token: "markup.list",
                        regex: "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
                        next: "listblock-start"
                    }, {
                        include: "basic",
                        noEscape: !0
                    }, {
                        token: "support.function",
                        regex: "^\\s*```\\s*[a-zA-Z]*(?:{.*?\\})?\\s*$",
                        next: "githubblock"
                    }, {
                        defaultToken: "list"
                    } ],
                    blockquote: [ {
                        token: "empty_line",
                        regex: "^\\s*$",
                        next: "start"
                    }, {
                        token: "string.blockquote",
                        regex: "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
                        next: "blockquote"
                    }, {
                        include: "basic",
                        noEscape: !0
                    }, {
                        defaultToken: "string.blockquote"
                    } ],
                    githubblock: [ {
                        token: "support.function",
                        regex: "^\\s*```",
                        next: "start"
                    }, {
                        token: "support.function",
                        regex: ".+"
                    } ]
                }), this.embedRules(i, "jscode-", [ {
                    token: "support.function",
                    regex: "^\\s*```",
                    next: "pop"
                } ]), this.embedRules(l, "htmlcode-", [ {
                    token: "support.function",
                    regex: "^\\s*```",
                    next: "pop"
                } ]), this.embedRules(g, "csscode-", [ {
                    token: "support.function",
                    regex: "^\\s*```",
                    next: "pop"
                } ]), this.embedRules(s, "xmlcode-", [ {
                    token: "support.function",
                    regex: "^\\s*```",
                    next: "pop"
                } ]), this.normalizeRules();
            };
            r.inherits(c, a), t.MarkdownHighlightRules = c;
        }), ace.define("ace/mode/scss_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("../lib/lang"), a = e("./text_highlight_rules").TextHighlightRules, i = function() {
                var e = o.arrayToMap(function() {
                    for (var e = "-webkit-|-moz-|-o-|-ms-|-svg-|-pie-|-khtml-".split("|"), t = "appearance|background-clip|background-inline-policy|background-origin|background-size|binding|border-bottom-colors|border-left-colors|border-right-colors|border-top-colors|border-end|border-end-color|border-end-style|border-end-width|border-image|border-start|border-start-color|border-start-style|border-start-width|box-align|box-direction|box-flex|box-flexgroup|box-ordinal-group|box-orient|box-pack|box-sizing|column-count|column-gap|column-width|column-rule|column-rule-width|column-rule-style|column-rule-color|float-edge|font-feature-settings|font-language-override|force-broken-image-icon|image-region|margin-end|margin-start|opacity|outline|outline-color|outline-offset|outline-radius|outline-radius-bottomleft|outline-radius-bottomright|outline-radius-topleft|outline-radius-topright|outline-style|outline-width|padding-end|padding-start|stack-sizing|tab-size|text-blink|text-decoration-color|text-decoration-line|text-decoration-style|transform|transform-origin|transition|transition-delay|transition-duration|transition-property|transition-timing-function|user-focus|user-input|user-modify|user-select|window-shadow|border-radius".split("|"), n = "azimuth|background-attachment|background-color|background-image|background-position|background-repeat|background|border-bottom-color|border-bottom-style|border-bottom-width|border-bottom|border-collapse|border-color|border-left-color|border-left-style|border-left-width|border-left|border-right-color|border-right-style|border-right-width|border-right|border-spacing|border-style|border-top-color|border-top-style|border-top-width|border-top|border-width|border|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|content|counter-increment|counter-reset|cue-after|cue-before|cue|cursor|direction|display|elevation|empty-cells|float|font-family|font-size-adjust|font-size|font-stretch|font-style|font-variant|font-weight|font|height|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|marker-offset|margin|marks|max-height|max-width|min-height|min-width|opacity|orphans|outline-color|outline-style|outline-width|outline|overflow|overflow-x|overflow-y|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page|pause-after|pause-before|pause|pitch-range|pitch|play-during|position|quotes|richness|right|size|speak-header|speak-numeral|speak-punctuation|speech-rate|speak|stress|table-layout|text-align|text-decoration|text-indent|text-shadow|text-transform|top|unicode-bidi|vertical-align|visibility|voice-family|volume|white-space|widows|width|word-spacing|z-index".split("|"), r = [], o = 0, a = e.length; o < a; o++) Array.prototype.push.apply(r, (e[o] + t.join("|" + e[o])).split("|"));
                    return Array.prototype.push.apply(r, t), Array.prototype.push.apply(r, n), r;
                }()), t = o.arrayToMap("hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|scale_color|transparentize|type_of|unit|unitless|unqoute".split("|")), n = o.arrayToMap("absolute|all-scroll|always|armenian|auto|baseline|below|bidi-override|block|bold|bolder|border-box|both|bottom|break-all|break-word|capitalize|center|char|circle|cjk-ideographic|col-resize|collapse|content-box|crosshair|dashed|decimal-leading-zero|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ellipsis|fixed|georgian|groove|hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|inherit|inline-block|inline|inset|inside|inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|keep-all|left|lighter|line-edge|line-through|line|list-item|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|nw-resize|none|normal|not-allowed|nowrap|oblique|outset|outside|overline|pointer|progress|relative|repeat-x|repeat-y|repeat|right|ridge|row-resize|rtl|s-resize|scroll|se-resize|separate|small-caps|solid|square|static|strict|super|sw-resize|table-footer-group|table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|top|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|zero".split("|")), r = o.arrayToMap("aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow".split("|")), a = o.arrayToMap("@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare".split("|")), i = o.arrayToMap("a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp".split("|")), s = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    }, {
                        token: "comment",
                        regex: "\\/\\*",
                        next: "comment"
                    }, {
                        token: "string",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                    }, {
                        token: "string",
                        regex: '["].*\\\\$',
                        next: "qqstring"
                    }, {
                        token: "string",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                    }, {
                        token: "string",
                        regex: "['].*\\\\$",
                        next: "qstring"
                    }, {
                        token: "constant.numeric",
                        regex: s + "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)"
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{6}"
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{3}"
                    }, {
                        token: "constant.numeric",
                        regex: s
                    }, {
                        token: [ "support.function", "string", "support.function" ],
                        regex: "(url\\()(.*)(\\))"
                    }, {
                        token: function(o) {
                            return e.hasOwnProperty(o.toLowerCase()) ? "support.type" : a.hasOwnProperty(o) ? "keyword" : n.hasOwnProperty(o) ? "constant.language" : t.hasOwnProperty(o) ? "support.function" : r.hasOwnProperty(o.toLowerCase()) ? "support.constant.color" : i.hasOwnProperty(o.toLowerCase()) ? "variable.language" : "text";
                        },
                        regex: "\\-?[@a-z_][@a-z0-9_\\-]*"
                    }, {
                        token: "variable",
                        regex: "[a-z_\\-$][a-z0-9_\\-$]*\\b"
                    }, {
                        token: "variable.language",
                        regex: "#[a-z0-9-_]+"
                    }, {
                        token: "variable.language",
                        regex: "\\.[a-z0-9-_]+"
                    }, {
                        token: "variable.language",
                        regex: ":[a-z0-9-_]+"
                    }, {
                        token: "constant",
                        regex: "[a-z0-9-_]+"
                    }, {
                        token: "keyword.operator",
                        regex: "<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*"
                    }, {
                        token: "paren.lparen",
                        regex: "[[({]"
                    }, {
                        token: "paren.rparen",
                        regex: "[\\])}]"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    }, {
                        caseInsensitive: !0
                    } ],
                    comment: [ {
                        token: "comment",
                        regex: ".*?\\*\\/",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: ".+"
                    } ],
                    qqstring: [ {
                        token: "string",
                        regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
                        next: "start"
                    }, {
                        token: "string",
                        regex: ".+"
                    } ],
                    qstring: [ {
                        token: "string",
                        regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
                        next: "start"
                    }, {
                        token: "string",
                        regex: ".+"
                    } ]
                };
            };
            r.inherits(i, a), t.ScssHighlightRules = i;
        }), ace.define("ace/mode/less_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules", "ace/mode/css_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules, a = e("./css_highlight_rules"), i = function() {
                var e = "@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|or|and|when|not", t = e.split("|"), n = a.supportType.split("|"), r = this.createKeywordMapper({
                    "support.constant": a.supportConstant,
                    keyword: e,
                    "support.constant.color": a.supportConstantColor,
                    "support.constant.fonts": a.supportConstantFonts
                }, "identifier", !0), o = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "\\/\\/.*$"
                    }, {
                        token: "comment",
                        regex: "\\/\\*",
                        next: "comment"
                    }, {
                        token: "string",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                    }, {
                        token: "string",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                    }, {
                        token: [ "constant.numeric", "keyword" ],
                        regex: "(" + o + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{6}"
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{3}"
                    }, {
                        token: "constant.numeric",
                        regex: o
                    }, {
                        token: [ "support.function", "paren.lparen", "string", "paren.rparen" ],
                        regex: "(url)(\\()(.*)(\\))"
                    }, {
                        token: [ "support.function", "paren.lparen" ],
                        regex: "(:extend|[a-z0-9_\\-]+)(\\()"
                    }, {
                        token: function(e) {
                            return t.indexOf(e.toLowerCase()) > -1 ? "keyword" : "variable";
                        },
                        regex: "[@\\$][a-z0-9_\\-@\\$]*\\b"
                    }, {
                        token: "variable",
                        regex: "[@\\$]\\{[a-z0-9_\\-@\\$]*\\}"
                    }, {
                        token: function(e, t) {
                            return n.indexOf(e.toLowerCase()) > -1 ? [ "support.type.property", "text" ] : [ "support.type.unknownProperty", "text" ];
                        },
                        regex: "([a-z0-9-_]+)(\\s*:)"
                    }, {
                        token: "keyword",
                        regex: "&"
                    }, {
                        token: r,
                        regex: "\\-?[@a-z_][@a-z0-9_\\-]*"
                    }, {
                        token: "variable.language",
                        regex: "#[a-z0-9-_]+"
                    }, {
                        token: "variable.language",
                        regex: "\\.[a-z0-9-_]+"
                    }, {
                        token: "variable.language",
                        regex: ":[a-z_][a-z0-9-_]*"
                    }, {
                        token: "constant",
                        regex: "[a-z0-9-_]+"
                    }, {
                        token: "keyword.operator",
                        regex: "<|>|<=|>=|=|!=|-|%|\\+|\\*"
                    }, {
                        token: "paren.lparen",
                        regex: "[[({]"
                    }, {
                        token: "paren.rparen",
                        regex: "[\\])}]"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    }, {
                        caseInsensitive: !0
                    } ],
                    comment: [ {
                        token: "comment",
                        regex: ".*?\\*\\/",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: ".+"
                    } ]
                }, this.normalizeRules();
            };
            r.inherits(i, o), t.LessHighlightRules = i;
        }), ace.define("ace/mode/coffee_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            function CoffeeHighlightRules() {
                var e = "[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*", t = "case|const|default|function|var|void|with|enum|export|implements|interface|let|package|private|protected|public|static|yield", n = this.createKeywordMapper({
                    keyword: "this|throw|then|try|typeof|super|switch|return|break|by|continue|catch|class|in|instanceof|is|isnt|if|else|extends|for|own|finally|function|while|when|new|no|not|delete|debugger|do|loop|of|off|or|on|unless|until|and|yes",
                    "constant.language": "true|false|null|undefined|NaN|Infinity",
                    "invalid.illegal": t,
                    "language.support.class": "Array|Boolean|Date|Function|Number|Object|RegExp|ReferenceError|String|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray",
                    "language.support.function": "Math|JSON|isNaN|isFinite|parseInt|parseFloat|encodeURI|encodeURIComponent|decodeURI|decodeURIComponent|String|",
                    "variable.language": "window|arguments|prototype|document"
                }, "identifier"), r = {
                    token: [ "paren.lparen", "variable.parameter", "paren.rparen", "text", "storage.type" ],
                    regex: /(?:(\()((?:"[^")]*?"|'[^')]*?'|\/[^\/)]*?\/|[^()"'\/])*?)(\))(\s*))?([\-=]>)/.source
                }, o = /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)/;
                this.$rules = {
                    start: [ {
                        token: "constant.numeric",
                        regex: "(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"
                    }, {
                        stateName: "qdoc",
                        token: "string",
                        regex: "'''",
                        next: [ {
                            token: "string",
                            regex: "'''",
                            next: "start"
                        }, {
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        stateName: "qqdoc",
                        token: "string",
                        regex: '"""',
                        next: [ {
                            token: "string",
                            regex: '"""',
                            next: "start"
                        }, {
                            token: "paren.string",
                            regex: "#{",
                            push: "start"
                        }, {
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        stateName: "qstring",
                        token: "string",
                        regex: "'",
                        next: [ {
                            token: "string",
                            regex: "'",
                            next: "start"
                        }, {
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        stateName: "qqstring",
                        token: "string.start",
                        regex: '"',
                        next: [ {
                            token: "string.end",
                            regex: '"',
                            next: "start"
                        }, {
                            token: "paren.string",
                            regex: "#{",
                            push: "start"
                        }, {
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        stateName: "js",
                        token: "string",
                        regex: "`",
                        next: [ {
                            token: "string",
                            regex: "`",
                            next: "start"
                        }, {
                            token: "constant.language.escape",
                            regex: o
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        regex: "[{}]",
                        onMatch: function(e, t, n) {
                            return this.next = "", "{" == e && n.length ? (n.unshift("start", t), "paren") : "}" == e && n.length && (n.shift(), 
                            this.next = n.shift() || "", -1 != this.next.indexOf("string")) ? "paren.string" : "paren";
                        }
                    }, {
                        token: "string.regex",
                        regex: "///",
                        next: "heregex"
                    }, {
                        token: "string.regex",
                        regex: /(?:\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)(?:[imgy]{0,4})(?!\w)/
                    }, {
                        token: "comment",
                        regex: "###(?!#)",
                        next: "comment"
                    }, {
                        token: "comment",
                        regex: "#.*"
                    }, {
                        token: [ "punctuation.operator", "text", "identifier" ],
                        regex: "(\\.)(\\s*)(" + t + ")"
                    }, {
                        token: "punctuation.operator",
                        regex: "\\.{1,3}"
                    }, {
                        token: [ "keyword", "text", "language.support.class", "text", "keyword", "text", "language.support.class" ],
                        regex: "(class)(\\s+)(" + e + ")(?:(\\s+)(extends)(\\s+)(" + e + "))?"
                    }, {
                        token: [ "entity.name.function", "text", "keyword.operator", "text" ].concat(r.token),
                        regex: "(" + e + ")(\\s*)([=:])(\\s*)" + r.regex
                    }, r, {
                        token: "variable",
                        regex: "@(?:" + e + ")?"
                    }, {
                        token: n,
                        regex: e
                    }, {
                        token: "punctuation.operator",
                        regex: "\\,|\\."
                    }, {
                        token: "storage.type",
                        regex: "[\\-=]>"
                    }, {
                        token: "keyword.operator",
                        regex: "(?:[-+*/%<>&|^!?=]=|>>>=?|\\-\\-|\\+\\+|::|&&=|\\|\\|=|<<=|>>=|\\?\\.|\\.{2,3}|[!*+-=><])"
                    }, {
                        token: "paren.lparen",
                        regex: "[({[]"
                    }, {
                        token: "paren.rparen",
                        regex: "[\\]})]"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    } ],
                    heregex: [ {
                        token: "string.regex",
                        regex: ".*?///[imgy]{0,4}",
                        next: "start"
                    }, {
                        token: "comment.regex",
                        regex: "\\s+(?:#.*)?"
                    }, {
                        token: "string.regex",
                        regex: "\\S+"
                    } ],
                    comment: [ {
                        token: "comment",
                        regex: "###",
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    } ]
                }, this.normalizeRules();
            }
            var r = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules;
            r.inherits(CoffeeHighlightRules, o), t.CoffeeHighlightRules = CoffeeHighlightRules;
        }), ace.define("ace/mode/jade_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules", "ace/mode/markdown_highlight_rules", "ace/mode/scss_highlight_rules", "ace/mode/less_highlight_rules", "ace/mode/coffee_highlight_rules", "ace/mode/javascript_highlight_rules" ], function(e, t, n) {
            "use strict";
            function mixin_embed(e, t) {
                return {
                    token: "entity.name.function.jade",
                    regex: "^\\s*\\:" + e,
                    next: t + "start"
                };
            }
            var r = e("../lib/oop"), o = e("./text_highlight_rules").TextHighlightRules, a = (e("./markdown_highlight_rules").MarkdownHighlightRules, 
            e("./scss_highlight_rules").ScssHighlightRules, e("./less_highlight_rules").LessHighlightRules, 
            e("./coffee_highlight_rules").CoffeeHighlightRules, e("./javascript_highlight_rules").JavaScriptHighlightRules), i = function() {
                var e = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";
                this.$rules = {
                    start: [ {
                        token: "keyword.control.import.include.jade",
                        regex: "\\s*\\binclude\\b"
                    }, {
                        token: "keyword.other.doctype.jade",
                        regex: "^!!!\\s*(?:[a-zA-Z0-9-_]+)?"
                    }, {
                        onMatch: function(e, t, n) {
                            return n.unshift(this.next, e.length - 2, t), "comment";
                        },
                        regex: /^\s*\/\//,
                        next: "comment_block"
                    }, mixin_embed("markdown", "markdown-"), mixin_embed("sass", "sass-"), mixin_embed("less", "less-"), mixin_embed("coffee", "coffee-"), {
                        token: [ "storage.type.function.jade", "entity.name.function.jade", "punctuation.definition.parameters.begin.jade", "variable.parameter.function.jade", "punctuation.definition.parameters.end.jade" ],
                        regex: "^(\\s*mixin)( [\\w\\-]+)(\\s*\\()(.*?)(\\))"
                    }, {
                        token: [ "storage.type.function.jade", "entity.name.function.jade" ],
                        regex: "^(\\s*mixin)( [\\w\\-]+)"
                    }, {
                        token: "source.js.embedded.jade",
                        regex: "^\\s*(?:-|=|!=)",
                        next: "js-start"
                    }, {
                        token: "string.interpolated.jade",
                        regex: "[#!]\\{[^\\}]+\\}"
                    }, {
                        token: "meta.tag.any.jade",
                        regex: /^\s*(?!\w+:)(?:[\w-]+|(?=\.|#)])/,
                        next: "tag_single"
                    }, {
                        token: "suport.type.attribute.id.jade",
                        regex: "#\\w+"
                    }, {
                        token: "suport.type.attribute.class.jade",
                        regex: "\\.\\w+"
                    }, {
                        token: "punctuation",
                        regex: "\\s*(?:\\()",
                        next: "tag_attributes"
                    } ],
                    comment_block: [ {
                        regex: /^\s*(?:\/\/)?/,
                        onMatch: function(e, t, n) {
                            return e.length <= n[1] ? "/" == e.slice(-1) ? (n[1] = e.length - 2, this.next = "", 
                            "comment") : (n.shift(), n.shift(), this.next = n.shift(), "text") : (this.next = "", 
                            "comment");
                        },
                        next: "start"
                    }, {
                        defaultToken: "comment"
                    } ],
                    tag_single: [ {
                        token: "entity.other.attribute-name.class.jade",
                        regex: "\\.[\\w-]+"
                    }, {
                        token: "entity.other.attribute-name.id.jade",
                        regex: "#[\\w-]+"
                    }, {
                        token: [ "text", "punctuation" ],
                        regex: "($)|((?!\\.|#|=|-))",
                        next: "start"
                    } ],
                    tag_attributes: [ {
                        token: "string",
                        regex: "'(?=.)",
                        next: "qstring"
                    }, {
                        token: "string",
                        regex: '"(?=.)',
                        next: "qqstring"
                    }, {
                        token: [ "entity.other.attribute-name.jade", "punctuation" ],
                        regex: "([a-zA-Z:\\.-]+)(=)?",
                        next: "attribute_strings"
                    }, {
                        token: "punctuation",
                        regex: "\\)",
                        next: "start"
                    } ],
                    attribute_strings: [ {
                        token: "string",
                        regex: "'(?=.)",
                        next: "qstring"
                    }, {
                        token: "string",
                        regex: '"(?=.)',
                        next: "qqstring"
                    }, {
                        token: "string",
                        regex: "(?=\\S)",
                        next: "tag_attributes"
                    } ],
                    qqstring: [ {
                        token: "constant.language.escape",
                        regex: e
                    }, {
                        token: "string",
                        regex: '[^"\\\\]+'
                    }, {
                        token: "string",
                        regex: "\\\\$",
                        next: "qqstring"
                    }, {
                        token: "string",
                        regex: '"|$',
                        next: "tag_attributes"
                    } ],
                    qstring: [ {
                        token: "constant.language.escape",
                        regex: e
                    }, {
                        token: "string",
                        regex: "[^'\\\\]+"
                    }, {
                        token: "string",
                        regex: "\\\\$",
                        next: "qstring"
                    }, {
                        token: "string",
                        regex: "'|$",
                        next: "tag_attributes"
                    } ]
                }, this.embedRules(a, "js-", [ {
                    token: "text",
                    regex: ".$",
                    next: "start"
                } ]);
            };
            r.inherits(i, o), t.JadeHighlightRules = i;
        }), ace.define("ace/mode/folding/coffee", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range" ], function(e, t, n) {
            "use strict";
            var r = e("../../lib/oop"), o = e("./fold_mode").FoldMode, a = e("../../range").Range, i = t.FoldMode = function() {};
            r.inherits(i, o), function() {
                this.getFoldWidgetRange = function(e, t, n) {
                    var r = this.indentationBlock(e, n);
                    if (r) return r;
                    var o = /\S/, i = e.getLine(n), s = i.search(o);
                    if (-1 != s && "#" == i[s]) {
                        for (var l = i.length, g = e.getLength(), u = n, c = n; ++n < g; ) {
                            i = e.getLine(n);
                            var p = i.search(o);
                            if (-1 != p) {
                                if ("#" != i[p]) break;
                                c = n;
                            }
                        }
                        if (c > u) {
                            var d = e.getLine(c).length;
                            return new a(u, l, c, d);
                        }
                    }
                }, this.getFoldWidget = function(e, t, n) {
                    var r = e.getLine(n), o = r.search(/\S/), a = e.getLine(n + 1), i = e.getLine(n - 1), s = i.search(/\S/), l = a.search(/\S/);
                    if (-1 == o) return e.foldWidgets[n - 1] = -1 != s && s < l ? "start" : "", "";
                    if (-1 == s) {
                        if (o == l && "#" == r[o] && "#" == a[o]) return e.foldWidgets[n - 1] = "", e.foldWidgets[n + 1] = "", 
                        "start";
                    } else if (s == o && "#" == r[o] && "#" == i[o] && -1 == e.getLine(n - 2).search(/\S/)) return e.foldWidgets[n - 1] = "start", 
                    e.foldWidgets[n + 1] = "", "";
                    return e.foldWidgets[n - 1] = -1 != s && s < o ? "start" : "", o < l ? "start" : "";
                };
            }.call(i.prototype);
        }), ace.define("ace/mode/jade", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/jade_highlight_rules", "ace/mode/folding/coffee" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), o = e("./text").Mode, a = e("./jade_highlight_rules").JadeHighlightRules, i = e("./folding/coffee").FoldMode, s = function() {
                this.HighlightRules = a, this.foldingRules = new i(), this.$behaviour = this.$defaultBehaviour;
            };
            r.inherits(s, o), function() {
                this.lineCommentStart = "//", this.$id = "ace/mode/jade";
            }.call(s.prototype), t.Mode = s;
        });
    }
});
//# sourceMappingURL=jade.js.map