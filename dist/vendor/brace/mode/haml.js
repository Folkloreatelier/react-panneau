flklrJsonp([ 141 ], {
    57: function(e, t) {
        ace.define("ace/mode/css_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = (e("../lib/lang"), e("./text_highlight_rules").TextHighlightRules), o = t.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index", i = t.supportFunction = "rgb|rgba|url|attr|counter|counters", s = t.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero", l = t.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow", c = t.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace", g = t.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))", u = t.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b", d = t.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|acequired|root|target|valid|visited)\\b", p = function() {
                var e = this.createKeywordMapper({
                    "support.function": i,
                    "support.constant": s,
                    "support.type": o,
                    "support.constant.color": l,
                    "support.constant.fonts": c
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
                        regex: "(" + g + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
                    }, {
                        token: "constant.numeric",
                        regex: g
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{6}"
                    }, {
                        token: "constant.numeric",
                        regex: "#[a-f0-9]{3}"
                    }, {
                        token: [ "punctuation", "entity.other.attribute-name.pseudo-element.css" ],
                        regex: u
                    }, {
                        token: [ "punctuation", "entity.other.attribute-name.pseudo-class.css" ],
                        regex: d
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
            r.inherits(p, a), t.CssHighlightRules = p;
        }), ace.define("ace/mode/doc_comment_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = e("./text_highlight_rules").TextHighlightRules, o = function() {
                this.$rules = {
                    start: [ {
                        token: "comment.doc.tag",
                        regex: "@[\\w\\d_]+"
                    }, o.getTagRule(), {
                        defaultToken: "comment.doc",
                        caseInsensitive: !0
                    } ]
                };
            };
            r.inherits(o, a), o.getTagRule = function(e) {
                return {
                    token: "comment.doc.tag.storage.type",
                    regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                };
            }, o.getStartRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\/\\*(?=\\*)",
                    next: e
                };
            }, o.getEndRule = function(e) {
                return {
                    token: "comment.doc",
                    regex: "\\*\\/",
                    next: e
                };
            }, t.DocCommentHighlightRules = o;
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
                    next: [ a.getTagRule(), {
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
                    next: [ a.getTagRule(), {
                        token: "comment",
                        regex: "$|^",
                        next: e || "pop"
                    }, {
                        defaultToken: "comment",
                        caseInsensitive: !0
                    } ]
                } ];
            }
            var r = e("../lib/oop"), a = e("./doc_comment_highlight_rules").DocCommentHighlightRules, o = e("./text_highlight_rules").TextHighlightRules, i = "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*", s = function(e) {
                var t = this.createKeywordMapper({
                    "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
                    keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
                    "storage.type": "const|let|var|function",
                    "constant.language": "null|Infinity|NaN|undefined",
                    "support.function": "alert",
                    "constant.language.boolean": "true|false"
                }, "identifier"), n = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
                this.$rules = {
                    no_regex: [ a.getStartRule("doc-start"), comments("no_regex"), {
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
                    start: [ a.getStartRule("doc-start"), comments("start"), {
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
                }), e && 0 == e.jsx || JSX.call(this)), this.embedRules(a, "doc-", [ a.getEndRule("no_regex") ]), 
                this.normalizeRules();
            };
            r.inherits(s, o), t.JavaScriptHighlightRules = s;
        }), ace.define("ace/mode/xml_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = e("./text_highlight_rules").TextHighlightRules, o = function(e) {
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
                }, this.constructor === o && this.normalizeRules();
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
            }).call(a.prototype), r.inherits(o, a), t.XmlHighlightRules = o;
        }), ace.define("ace/mode/html_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/css_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = e("../lib/lang"), o = e("./css_highlight_rules").CssHighlightRules, i = e("./javascript_highlight_rules").JavaScriptHighlightRules, s = e("./xml_highlight_rules").XmlHighlightRules, l = a.createMap({
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
            }), c = function() {
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
                }), this.embedTagRules(o, "css-", "style"), this.embedTagRules(new i({
                    jsx: !1
                }).getRules(), "js-", "script"), this.constructor === c && this.normalizeRules();
            };
            r.inherits(c, s), t.HtmlHighlightRules = c;
        }), ace.define("ace/mode/ruby_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = e("./text_highlight_rules").TextHighlightRules, o = t.constantOtherSymbol = {
                token: "constant.other.symbol.ruby",
                regex: "[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"
            }, i = (t.qString = {
                token: "string",
                regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, t.qqString = {
                token: "string",
                regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, t.tString = {
                token: "string",
                regex: "[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"
            }, t.constantNumericHex = {
                token: "constant.numeric",
                regex: "0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"
            }), s = t.constantNumericFloat = {
                token: "constant.numeric",
                regex: "[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, l = function() {
                var e = this.$keywords = this.createKeywordMapper({
                    keyword: "alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield",
                    "constant.language": "true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING",
                    "variable.language": "$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self",
                    "support.function": "abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|acequire|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many",
                    "invalid.deprecated": "debugger"
                }, "identifier");
                this.$rules = {
                    start: [ {
                        token: "comment",
                        regex: "#.*$"
                    }, {
                        token: "comment",
                        regex: "^=begin(?:$|\\s.*$)",
                        next: "comment"
                    }, {
                        token: "string.regexp",
                        regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
                    }, [ {
                        regex: "[{}]",
                        onMatch: function(e, t, n) {
                            return this.next = "{" == e ? this.nextState : "", "{" == e && n.length ? (n.unshift("start", t), 
                            "paren.lparen") : "}" == e && n.length && (n.shift(), this.next = n.shift(), -1 != this.next.indexOf("string")) ? "paren.end" : "{" == e ? "paren.lparen" : "paren.rparen";
                        },
                        nextState: "start"
                    }, {
                        token: "string.start",
                        regex: /"/,
                        push: [ {
                            token: "constant.language.escape",
                            regex: /\\(?:[nsrtvfbae'"\\]|c.|C-.|M-.(?:\\C-.)?|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4})/
                        }, {
                            token: "paren.start",
                            regex: /#{/,
                            push: "start"
                        }, {
                            token: "string.end",
                            regex: /"/,
                            next: "pop"
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        token: "string.start",
                        regex: /`/,
                        push: [ {
                            token: "constant.language.escape",
                            regex: /\\(?:[nsrtvfbae'"\\]|c.|C-.|M-.(?:\\C-.)?|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4})/
                        }, {
                            token: "paren.start",
                            regex: /#{/,
                            push: "start"
                        }, {
                            token: "string.end",
                            regex: /`/,
                            next: "pop"
                        }, {
                            defaultToken: "string"
                        } ]
                    }, {
                        token: "string.start",
                        regex: /'/,
                        push: [ {
                            token: "constant.language.escape",
                            regex: /\\['\\]/
                        }, {
                            token: "string.end",
                            regex: /'/,
                            next: "pop"
                        }, {
                            defaultToken: "string"
                        } ]
                    } ], {
                        token: "text",
                        regex: "::"
                    }, {
                        token: "variable.instance",
                        regex: "@{1,2}[a-zA-Z_\\d]+"
                    }, {
                        token: "support.class",
                        regex: "[A-Z][a-zA-Z_\\d]+"
                    }, o, i, s, {
                        token: "constant.language.boolean",
                        regex: "(?:true|false)\\b"
                    }, {
                        token: e,
                        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                    }, {
                        token: "punctuation.separator.key-value",
                        regex: "=>"
                    }, {
                        stateName: "heredoc",
                        onMatch: function(e, t, n) {
                            var r = "-" == e[2] ? "indentedHeredoc" : "heredoc", a = e.split(this.splitRegex);
                            return n.push(r, a[3]), [ {
                                type: "constant",
                                value: a[1]
                            }, {
                                type: "string",
                                value: a[2]
                            }, {
                                type: "support.class",
                                value: a[3]
                            }, {
                                type: "string",
                                value: a[4]
                            } ];
                        },
                        regex: "(<<-?)(['\"`]?)([\\w]+)(['\"`]?)",
                        rules: {
                            heredoc: [ {
                                onMatch: function(e, t, n) {
                                    return e === n[1] ? (n.shift(), n.shift(), this.next = n[0] || "start", "support.class") : (this.next = "", 
                                    "string");
                                },
                                regex: ".*$",
                                next: "start"
                            } ],
                            indentedHeredoc: [ {
                                token: "string",
                                regex: "^ +"
                            }, {
                                onMatch: function(e, t, n) {
                                    return e === n[1] ? (n.shift(), n.shift(), this.next = n[0] || "start", "support.class") : (this.next = "", 
                                    "string");
                                },
                                regex: ".*$",
                                next: "start"
                            } ]
                        }
                    }, {
                        regex: "$",
                        token: "empty",
                        next: function(e, t) {
                            return "heredoc" === t[0] || "indentedHeredoc" === t[0] ? t[0] : e;
                        }
                    }, {
                        token: "string.character",
                        regex: "\\B\\?."
                    }, {
                        token: "keyword.operator",
                        regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
                    }, {
                        token: "paren.lparen",
                        regex: "[[({]"
                    }, {
                        token: "paren.rparen",
                        regex: "[\\])}]"
                    }, {
                        token: "text",
                        regex: "\\s+"
                    } ],
                    comment: [ {
                        token: "comment",
                        regex: "^=end(?:$|\\s.*$)",
                        next: "start"
                    }, {
                        token: "comment",
                        regex: ".+"
                    } ]
                }, this.normalizeRules();
            };
            r.inherits(l, a), t.RubyHighlightRules = l;
        }), ace.define("ace/mode/haml_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/html_highlight_rules", "ace/mode/ruby_highlight_rules" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = e("./html_highlight_rules").HtmlHighlightRules, o = e("./ruby_highlight_rules"), i = o.RubyHighlightRules, s = function() {
                a.call(this), this.$rules.start.unshift({
                    token: "punctuation.section.comment",
                    regex: /^\s*\/.*/
                }, {
                    token: "string.quoted.double",
                    regex: "==.+?=="
                }, {
                    token: "keyword.other.doctype",
                    regex: "^!!!\\s*(?:[a-zA-Z0-9-_]+)?"
                }, o.qString, o.qqString, o.tString, {
                    token: "character.escape.haml",
                    regex: "^\\s*\\\\."
                }, {
                    token: "text",
                    regex: /^\s*/,
                    next: "tag_single"
                }, o.constantNumericHex, o.constantNumericFloat, o.constantOtherSymbol, {
                    token: "text",
                    regex: "=|-|~",
                    next: "embedded_ruby"
                }), this.$rules.tag_single = [ {
                    token: "meta.tag.haml",
                    regex: /(%[\w:\-]+)/
                }, {
                    token: "keyword.attribute-name.class.haml",
                    regex: "\\.[\\w-]+"
                }, {
                    token: "keyword.attribute-name.id.haml",
                    regex: "#[\\w-]+"
                }, {
                    token: "punctuation.section",
                    regex: "\\{",
                    next: "section"
                }, o.constantOtherSymbol, {
                    token: "text",
                    regex: /\s/,
                    next: "start"
                }, {
                    token: "empty",
                    regex: "$|(?!\\.|#|\\{|\\[|=|-|~|\\/)",
                    next: "start"
                } ], this.$rules.section = [ o.constantOtherSymbol, o.qString, o.qqString, o.tString, o.constantNumericHex, o.constantNumericFloat, {
                    token: "punctuation.section",
                    regex: "\\}",
                    next: "start"
                } ], this.$rules.embedded_ruby = [ o.constantNumericHex, o.constantNumericFloat, {
                    token: "support.class",
                    regex: "[A-Z][a-zA-Z_\\d]+"
                }, {
                    token: new i().getKeywords(),
                    regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                }, {
                    token: [ "keyword", "text", "text" ],
                    regex: "(?:do|\\{)(?: \\|[^|]+\\|)?$",
                    next: "start"
                }, {
                    token: [ "text" ],
                    regex: "^$",
                    next: "start"
                }, {
                    token: [ "text" ],
                    regex: "^(?!.*\\|\\s*$)",
                    next: "start"
                } ], this.normalizeRules();
            };
            r.inherits(s, a), t.HamlHighlightRules = s;
        }), ace.define("ace/mode/folding/coffee", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range" ], function(e, t, n) {
            "use strict";
            var r = e("../../lib/oop"), a = e("./fold_mode").FoldMode, o = e("../../range").Range, i = t.FoldMode = function() {};
            r.inherits(i, a), function() {
                this.getFoldWidgetRange = function(e, t, n) {
                    var r = this.indentationBlock(e, n);
                    if (r) return r;
                    var a = /\S/, i = e.getLine(n), s = i.search(a);
                    if (-1 != s && "#" == i[s]) {
                        for (var l = i.length, c = e.getLength(), g = n, u = n; ++n < c; ) {
                            i = e.getLine(n);
                            var d = i.search(a);
                            if (-1 != d) {
                                if ("#" != i[d]) break;
                                u = n;
                            }
                        }
                        if (u > g) {
                            var p = e.getLine(u).length;
                            return new o(g, l, u, p);
                        }
                    }
                }, this.getFoldWidget = function(e, t, n) {
                    var r = e.getLine(n), a = r.search(/\S/), o = e.getLine(n + 1), i = e.getLine(n - 1), s = i.search(/\S/), l = o.search(/\S/);
                    if (-1 == a) return e.foldWidgets[n - 1] = -1 != s && s < l ? "start" : "", "";
                    if (-1 == s) {
                        if (a == l && "#" == r[a] && "#" == o[a]) return e.foldWidgets[n - 1] = "", e.foldWidgets[n + 1] = "", 
                        "start";
                    } else if (s == a && "#" == r[a] && "#" == i[a] && -1 == e.getLine(n - 2).search(/\S/)) return e.foldWidgets[n - 1] = "start", 
                    e.foldWidgets[n + 1] = "", "";
                    return e.foldWidgets[n - 1] = -1 != s && s < a ? "start" : "", a < l ? "start" : "";
                };
            }.call(i.prototype);
        }), ace.define("ace/mode/haml", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/haml_highlight_rules", "ace/mode/folding/coffee" ], function(e, t, n) {
            "use strict";
            var r = e("../lib/oop"), a = e("./text").Mode, o = e("./haml_highlight_rules").HamlHighlightRules, i = e("./folding/coffee").FoldMode, s = function() {
                this.HighlightRules = o, this.foldingRules = new i(), this.$behaviour = this.$defaultBehaviour;
            };
            r.inherits(s, a), function() {
                this.lineCommentStart = "//", this.$id = "ace/mode/haml";
            }.call(s.prototype), t.Mode = s;
        });
    }
});
//# sourceMappingURL=haml.js.map