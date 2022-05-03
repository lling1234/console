(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[380],{23804:function(e,t,n){"use strict";n(72791);var r=n(11135),i=n(25787),o=n(61889),s=n(80184);t.Z=(0,i.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,r=e.title,i=e.help;return(0,s.jsx)("div",{className:t.root,children:(0,s.jsxs)(o.ZP,{container:!0,children:[(0,s.jsxs)(o.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,r]}),(0,s.jsx)(o.ZP,{item:!0,xs:12,className:t.helpText,children:i})]})})}))},47986:function(e,t,n){"use strict";n(72791);var r=n(61889),i=n(64554),o=n(23804),s=n(80184);t.Z=function(e){var t=e.iconComponent,n=e.entity;return(0,s.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,s.jsx)(r.ZP,{item:!0,xs:12,children:(0,s.jsx)(o.Z,{title:"".concat(n," not available"),iconComponent:t,help:(0,s.jsxs)(i.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,s.jsx)("div",{children:"This feature is not available for a single-disk setup. "}),(0,s.jsxs)("div",{children:["Please deploy a server in"," ",(0,s.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},92217:function(e,t,n){"use strict";var r=n(93433),i=n(29439),o=n(1413),s=n(72791),l=n(61889),a=(n(2574),n(69874)),c=n(9461),d=n(73975),u=n(80745),h=n(30829),x=n(20068),m=n(64554),f=n(11135),g=n(25787),p=n(84570),j=n(23814),b=n(56375),v=n(40603),Z=n(78029),S=n.n(Z),y=n(64294),C=n(80184),w={json:d.AV,yaml:function(){return c.i.define(u.r)}},P=y.tk.theme({"&":{backgroundColor:"#FBFAFA"},".cm-content":{caretColor:"#05122B"},"&.cm-focused .cm-cursor":{borderLeftColor:"#05122B"},".cm-gutters":{backgroundColor:"#FBFAFA",color:"#000000",border:"none"},".cm-gutter.cm-foldGutter":{borderRight:"1px solid #eaeaea"},".cm-gutterElement":{fontSize:"13px"},".cm-line":{fontSize:"13px",color:"#2781B0","& .\u037cc":{color:"#C83B51"}},"& .\u037cb":{color:"#2781B0"},".cm-activeLine":{backgroundColor:"#dde1f1"},".cm-matchingBracket":{backgroundColor:"#05122B",color:"#ffffff"},".cm-selectionMatch":{backgroundColor:"#ebe7f1"},".cm-selectionLayer":{fontWeight:500}," .cm-selectionBackground":{backgroundColor:"#a180c7",color:"#ffffff"}},{dark:!1}),k=y.tk.theme({"&":{backgroundColor:"#282a36",color:"#ffb86c"},".cm-gutter.cm-foldGutter":{borderRight:"1px solid #eaeaea"},".cm-gutterElement":{fontSize:"13px"},".cm-line":{fontSize:"13px","& .\u037cd, & .\u037cc":{color:"#8e6cef"}},"& .\u037cb":{color:"#2781B0"},".cm-activeLine":{backgroundColor:"#44475a"},".cm-matchingBracket":{backgroundColor:"#842de5",color:"#ff79c6"},".cm-selectionLayer .cm-selectionBackground":{backgroundColor:"green"}},{dark:!0});t.Z=(0,g.Z)((function(e){return(0,f.Z)((0,o.Z)({},j.YI))}))((function(e){var t=e.value,n=e.label,o=void 0===n?"":n,c=e.tooltip,d=void 0===c?"":c,u=e.mode,f=void 0===u?"json":u,g=e.classes,j=e.onBeforeChange,Z=e.readOnly,y=void 0!==Z&&Z,F=e.editorHeight,N=void 0===F?"250px":F,E=(0,s.useState)(!1),B=(0,i.Z)(E,2),T=B[0],I=B[1],O=[];return w[f]&&(O=[].concat((0,r.Z)(O),[w[f]()])),(0,C.jsxs)(s.Fragment,{children:[(0,C.jsxs)(h.Z,{className:g.inputLabel,children:[(0,C.jsx)("span",{children:o}),""!==d&&(0,C.jsx)("div",{className:g.tooltipContainer,children:(0,C.jsx)(x.Z,{title:d,placement:"top-start",children:(0,C.jsx)("div",{className:g.tooltip,children:(0,C.jsx)(p.Z,{})})})})]}),(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)("br",{})}),(0,C.jsxs)(l.ZP,{item:!0,xs:12,sx:{border:"1px solid #eaeaea"},children:[(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsx)(a.ZP,{value:t,theme:T?k:P,extensions:O,editable:!y,basicSetup:!0,height:N,onChange:function(e,t){j(null,null,e)}})}),(0,C.jsx)(l.ZP,{item:!0,xs:12,sx:{borderTop:"1px solid #eaeaea",background:T?"#282c34":"#f7f7f7"},children:(0,C.jsxs)(m.Z,{className:T?"dark-theme":"",sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}},"&.dark-theme button":{background:"#FFFFFF"}},children:[(0,C.jsx)(v.Z,{tooltip:"Change theme",onClick:function(){I(!T)},text:"",icon:(0,C.jsx)(b.EOM,{}),color:"primary",variant:"outlined"}),(0,C.jsx)(S(),{text:t,children:(0,C.jsx)(v.Z,{tooltip:"Copy to Clipboard",onClick:function(){},text:"",icon:(0,C.jsx)(b.TIy,{}),color:"primary",variant:"outlined"})})]})})]})]})}))},87998:function(e,t,n){"use strict";var r=n(1413),i=n(4942),o=n(72791),s=n(47630),l=n(40986),a=n(78917),c=n(64554),d=n(80184),u=(0,s.ZP)(l.Z)((function(){var e;return e={height:10,borderRadius:5},(0,i.Z)(e,"&.".concat(a.Z.colorPrimary),{backgroundColor:"#f1f1f1"}),(0,i.Z)(e,"& .".concat(a.Z.bar),{borderRadius:5}),e})),h=(0,s.ZP)(u)((function(){return(0,i.Z)({height:6,borderRadius:3},"& .".concat(a.Z.bar),{borderRadius:3})}));function x(e){var t="#000",n=18;return e.error?(t="#C83B51",n=14):e.cancelled&&(t="#FFBD62",n=14),(0,d.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsx)(c.Z,{sx:{width:"100%",mr:3},children:(0,d.jsx)(u,(0,r.Z)({variant:"determinate"},e))}),(0,d.jsx)(c.Z,{sx:{minWidth:35,fontSize:n,color:t},className:"value",children:e.cancelled?"Cancelled":(0,d.jsx)(o.Fragment,{children:e.error?"Failed":"".concat(Math.round(e.value||0),"%")})})]})}t.Z=function(e){var t=e.value,n=e.ready,i=e.indeterminate,o=e.withLabel,s=e.size,l=void 0===s?"regular":s,a=e.error,c=e.cancelled,m={variant:!i||n||c?"determinate":"indeterminate",value:n?100:t,color:a?"error":c?"warning":100===t&&n?"success":"primary"};return o?(0,d.jsx)(x,(0,r.Z)((0,r.Z)({},m),{},{error:!!a,cancelled:!!c})):"small"===l?(0,d.jsx)(h,(0,r.Z)({},m)):(0,d.jsx)(u,(0,r.Z)({},m))}},15962:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(93433),i=n(29439),o=n(1413),s=n(72791),l=n(60364),a=n(95087),c=n(61889),d=n(36151),u=n(11135),h=n(25787),x=n(72426),m=n.n(x),f=n(32291),g=n(23814),p=n(26824),j=n(56375),b=n(56087),v=n(26181),Z=n.n(v),S=n(45248),y=n(85531),C=n(92217),w=n(19913),P=n(28265),k=n(82839),F=n(18602),N=n(28182),E=n(80184),B=(0,h.Z)((function(e){return(0,u.Z)({objectGeneralTitle:{lineHeight:1,fontSize:50,color:"#696969"},generalUnit:{color:"#000",fontSize:12,fontWeight:"bold"},testUnitRes:{fontSize:60,color:"#081C42",fontWeight:"bold",textAlign:"right"},metricValContainer:{lineHeight:1,verticalAlign:"bottom"},objectsUnitRes:{fontSize:22,marginTop:6,color:"#696969",fontWeight:"bold",textAlign:"right"},objectsUnit:{color:"#696969",fontSize:16,fontWeight:"bold"},iconTd:{verticalAlign:"bottom"}})}))((function(e){var t=e.classes,n=e.title,r=e.icon,i=e.throughput,o=e.objects,s=(0,S.Am)(i),l="0",a="";return 0!==s.total&&(l=s.total.toString(),a="".concat(s.unit,"/s")),(0,E.jsxs)("table",{children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:t.objectGeneralTitle,children:n}),(0,E.jsx)("td",{className:t.iconTd,children:r})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.testUnitRes),children:l}),(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.generalUnit),children:a})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.objectsUnitRes),children:o}),(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.objectsUnit),children:0!==o&&"Objs/S"})]})]})})),T=(0,h.Z)((function(e){return(0,u.Z)({actionButtons:{textAlign:"right"},descriptorLabel:{fontWeight:"bold",fontSize:14},resultsContainer:{backgroundColor:"#FBFAFA",borderTop:"#F1F1F1 1px solid",marginTop:30,padding:25},resultsIcon:{display:"flex",alignItems:"center","& svg":{fill:"#07193E"}},detailedItem:{display:"flex",alignItems:"center",justifyContent:"flex-start"},detailedVersion:{display:"flex",alignItems:"center",justifyContent:"flex-end"},serversTable:{width:"100%",marginTop:15,"& thead > tr > th":{textAlign:"left",padding:15,fontSize:14,fontWeight:"bold"},"& tbody > tr":{"&:last-of-type":{"& > td":{borderBottom:"#E2E2E2 1px solid"}},"& > td":{borderTop:"#E2E2E2 1px solid",padding:15,fontSize:14,"&:first-of-type":{borderLeft:"#E2E2E2 1px solid"},"&:last-of-type":{borderRight:"#E2E2E2 1px solid"}}}},serverIcon:{width:55},serverValue:{width:140},serverHost:{maxWidth:540,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},tableOverflow:{overflowX:"auto",paddingBottom:15},objectGeneral:{marginTop:15},download:{"& .min-icon":{width:35,height:35,color:"rgb(113,200,150)"}},upload:{"& .min-icon":{width:35,height:35,color:"rgb(66,127,172)"}}})}))((function(e){var t=e.classes,n=e.results,o=e.start,l=(0,s.useState)(!1),a=(0,i.Z)(l,2),d=a[0],u=a[1],h=n[n.length-1]||[],x=Z()(h,"GETStats.servers",[])||[],m=Z()(h,"PUTStats.servers",[])||[],f=Z()(h,"GETStats.throughputPerSec",0),g=Z()(h,"GETStats.objectsPerSec",0),p=Z()(h,"PUTStats.throughputPerSec",0),b=Z()(h,"PUTStats.objectsPerSec",0),v=[];x.forEach((function(e){var t=e.endpoint,n=m.find((function(e){return e.endpoint===t})),r={getUnit:"-",getValue:"N/A",host:e.endpoint,putUnit:"-",putValue:"N/A"};if(e.err&&""!==e.err)r.getError=e.err,r.getUnit="-",r.getValue="N/A";else{var i=(0,S.Am)(e.throughputPerSec.toString());r.getUnit=i.unit,r.getValue=i.total.toString()}if(n)if(n.err&&""!==n.err)r.putError=n.err,r.putUnit="-",r.putValue="N/A";else{var o=(0,S.Am)(n.throughputPerSec.toString());r.putUnit=o.unit,r.putValue=o.total.toString()}v.push(r)}));var N=h?JSON.stringify(h,null,4):"",T=function(e){var t=e.filter((function(e){return"0"!==e.version&&0!==e.disks})).map((function(e){var t,n;return{get:(null===(t=e.GETStats)||void 0===t?void 0:t.throughputPerSec)||0,put:(null===(n=e.PUTStats)||void 0===n?void 0:n.throughputPerSec)||0}}));return[{get:0,put:0}].concat((0,r.Z)(t))}(n);return(0,E.jsxs)(s.Fragment,{children:[(0,E.jsxs)(c.ZP,{container:!0,className:t.objectGeneral,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsxs)(c.ZP,{container:!0,className:t.objectGeneral,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsx)(B,{icon:(0,E.jsx)("div",{className:t.download,children:(0,E.jsx)(j.Q_z,{})}),title:"GET",throughput:f,objects:g})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsx)(B,{icon:(0,E.jsx)("div",{className:t.upload,children:(0,E.jsx)(j.jhp,{})}),title:"PUT",throughput:p,objects:b})})]})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsx)(w.h,{width:"99%",children:(0,E.jsxs)(P.T,{data:T,children:[(0,E.jsxs)("defs",{children:[(0,E.jsxs)("linearGradient",{id:"colorPut",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,E.jsx)("stop",{offset:"0%",stopColor:"#2781B0",stopOpacity:.9}),(0,E.jsx)("stop",{offset:"95%",stopColor:"#fff",stopOpacity:0})]}),(0,E.jsxs)("linearGradient",{id:"colorGet",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,E.jsx)("stop",{offset:"0%",stopColor:"#4CCB92",stopOpacity:.9}),(0,E.jsx)("stop",{offset:"95%",stopColor:"#fff",stopOpacity:0})]})]}),(0,E.jsx)(k.q,{strokeDasharray:"0 0",strokeWidth:1,strokeOpacity:.5,stroke:"#F1F1F1",vertical:!1}),(0,E.jsx)(F.u,{type:"monotone",dataKey:"get",stroke:"#4CCB92",fill:"url(#colorGet)",fillOpacity:.3,strokeWidth:2,dot:!1}),(0,E.jsx)(F.u,{type:"monotone",dataKey:"put",stroke:"#2781B0",fill:"url(#colorPut)",fillOpacity:.3,strokeWidth:2,dot:!1})]})})})]}),(0,E.jsx)("br",{}),T.length>1&&(0,E.jsxs)(s.Fragment,{children:[(0,E.jsxs)(c.ZP,{container:!0,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,className:t.descriptorLabel,children:o?(0,E.jsx)(s.Fragment,{children:"Preliminar Results:"}):(0,E.jsx)(s.Fragment,{children:d?"JSON Results:":"Detailed Results:"})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,className:t.actionButtons,children:!o&&(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)(y.Z,{"aria-label":"Download",onClick:function(){var e=new Date,t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+JSON.stringify(h)),t.setAttribute("download","speedtest_results-".concat(e.toISOString(),".log")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},size:"large",children:(0,E.jsx)(j._8t,{})}),"\xa0",(0,E.jsx)(y.Z,{"aria-label":"Download",onClick:function(){u(!d)},size:"large",children:(0,E.jsx)(j.iH5,{})})]})})]}),(0,E.jsx)(c.ZP,{container:!0,className:t.resultsContainer,children:d?(0,E.jsx)(s.Fragment,{children:(0,E.jsx)(C.Z,{value:N,readOnly:!0,onBeforeChange:function(){}})}):(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,sm:12,md:1,lg:1,className:t.resultsIcon,alignItems:"flex-end",children:(0,E.jsx)(j.UMk,{width:45})}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,className:t.detailedItem,children:["Nodes:\xa0",(0,E.jsx)("strong",{children:h.servers})]}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,className:t.detailedItem,children:["Drives:\xa0",(0,E.jsx)("strong",{children:h.disks})]}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,className:t.detailedItem,children:["Concurrent:\xa0",(0,E.jsx)("strong",{children:h.concurrent})]}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:12,md:12,lg:5,className:t.detailedVersion,children:[(0,E.jsx)("span",{className:t.versionIcon,children:(0,E.jsx)(j.Dbk,{})})," ","MinIO VERSION\xa0",(0,E.jsx)("strong",{children:h.version})]}),(0,E.jsx)(c.ZP,{item:!0,xs:12,className:t.tableOverflow,children:(0,E.jsxs)("table",{className:t.serversTable,cellSpacing:0,cellPadding:0,children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("th",{colSpan:2,children:"Servers"}),(0,E.jsx)("th",{children:"GET"}),(0,E.jsx)("th",{children:"PUT"})]})}),(0,E.jsx)("tbody",{children:v.map((function(e,n){return(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:t.serverIcon,children:(0,E.jsx)(j.idV,{})}),(0,E.jsx)("td",{className:t.serverHost,children:e.host}),e.getError&&""!==e.getError?(0,E.jsx)("td",{children:e.getError}):(0,E.jsx)(s.Fragment,{children:(0,E.jsxs)("td",{className:t.serverValue,children:[(0,S.CE)(parseFloat(e.getValue)),"\xa0",e.getUnit,"/s."]})}),e.putError&&""!==e.putError?(0,E.jsx)("td",{children:e.putError}):(0,E.jsx)(s.Fragment,{children:(0,E.jsxs)("td",{className:t.serverValue,children:[(0,S.CE)(parseFloat(e.putValue)),"\xa0",e.putUnit,"/s."]})})]},"storage-".concat(n.toString()))}))})]})})]})})]})]})})),I=n(21435),O=n(87998),z=n(56578),A=n(74794),U=n(38442),R=n(47986),V=n(23804),G=n(89357),L=n(72401),_=(0,l.$j)((function(e){return{distributedSetup:e.system.distributedSetup}}),null)((0,h.Z)((function(e){return(0,u.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({advancedContent:{backgroundColor:"#FBFAFA",maxHeight:0,transitionDuration:"0.3s",overflow:"hidden",padding:"0 15px",marginTop:15,justifyContent:"space-between","&.open":{maxHeight:400,paddingBottom:15}},stepProgressText:{fontSize:13,marginBottom:8}},g.S),g.OR),g.qg),g.DF),(0,g.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.distributedSetup,o=(0,s.useState)(!1),l=(0,i.Z)(o,2),u=l[0],h=l[1],x=(0,s.useState)(null),g=(0,i.Z)(x,2),v=g[0],Z=g[1],S=(0,s.useState)("64"),y=(0,i.Z)(S,2),C=y[0],w=y[1],P=(0,s.useState)("MB"),k=(0,i.Z)(P,2),F=k[0],N=k[1],B=(0,s.useState)(0),_=(0,i.Z)(B,2),W=_[0],D=_[1],M=(0,s.useState)(0),H=(0,i.Z)(M,2),J=H[0],K=H[1],q=(0,s.useState)(0),Q=(0,i.Z)(q,2),X=Q[0],Y=Q[1],$=(0,s.useState)(0),ee=(0,i.Z)($,2),te=ee[0],ne=ee[1];return(0,s.useEffect)((function(){if(u){var e=new URL(window.location.toString()),t=e.port,n=new URL(document.baseURI).pathname,i=(0,p.x2)(e.protocol),o=new a.w3cwebsocket("".concat(i,"://").concat(e.hostname,":").concat(t).concat(n,"ws/speedtest?&size=").concat(C).concat(F)),s=m()(),l=s.unix()/1e3,c=s.add(2*parseInt("10"),"s").unix()/1e3,d=(c-l)/1e3;D(c),K(l),Y(d);var x=null;if(null!==o)return o.onopen=function(){console.log("WebSocket Client Connected"),o.send("ok"),x=setInterval((function(){o.send("ok")}),1e4)},o.onmessage=function(e){var t=JSON.parse(e.data.toString());Z((function(e){var n=[];e&&(n=(0,r.Z)(e));var i=0!==t.servers?[t]:[];return[].concat((0,r.Z)(n),i)}));var n=m()().unix()/1e3;K(n)},o.onclose=function(){clearInterval(x),console.log("connection closed by server"),h(!1)},function(){o.close(1e3),clearInterval(x),console.log("closing websockets")}}else h(!1)}),[C,F,u]),(0,s.useEffect)((function(){var e=100-100*((W-J)/1e3)/X;e>100&&(e=100),ne(e)}),[u,J,W,X]),(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)(f.Z,{label:"Performance"}),(0,E.jsx)(A.Z,{children:n?(0,E.jsxs)(U.s,{scopes:[b.Ft.ADMIN_HEAL],resource:b.C3,children:[(0,E.jsxs)(c.ZP,{item:!0,xs:12,className:t.boxy,children:[(0,E.jsxs)(c.ZP,{container:!0,children:[(0,E.jsxs)(c.ZP,{item:!0,md:6,sm:12,children:[(0,E.jsx)("div",{className:t.stepProgressText,children:u?(0,E.jsxs)(s.Fragment,{children:["Speedtest in progress...",(0,E.jsx)(L.Z,{style:{width:15,height:15}})]}):(0,E.jsx)(s.Fragment,{children:v&&!u?(0,E.jsx)("b",{children:"Speed Test results:"}):(0,E.jsx)("b",{children:"Performance test"})})}),(0,E.jsx)("div",{children:(0,E.jsx)(O.Z,{value:te,ready:null!==v&&!u,indeterminate:u,size:"small"})})]}),(0,E.jsx)(c.ZP,{item:!0,xs:4,children:(0,E.jsx)("div",{style:{marginLeft:10,width:300},children:(0,E.jsx)(I.Z,{id:"size",name:"size",label:"Object Size",onChange:function(e){w(e.target.value)},noLabelMinWidth:!0,value:C,disabled:u,overlayObject:(0,E.jsx)(z.Z,{id:"size-unit",onUnitChange:N,unitSelected:F,unitsList:[{label:"KiB",value:"KiB"},{label:"MiB",value:"MiB"},{label:"GiB",value:"GiB"}],disabled:u})})})}),(0,E.jsx)(c.ZP,{item:!0,xs:2,textAlign:"right",children:(0,E.jsxs)(d.Z,{onClick:function(){Z(null),h(!0)},color:"primary",type:"button",id:"start-speed-test",variant:null===v||u?"outlined":"contained",className:"".concat(t.buttonBackground," ").concat(t.speedStart),disabled:""==="10".trim()||""===C.trim()||u,children:[!u&&(0,E.jsx)(s.Fragment,{children:null!==v?"Retest":"Start"}),u?"Start":""]})})]}),(0,E.jsx)(c.ZP,{container:!0,className:t.multiModule,children:(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(s.Fragment,{children:(0,E.jsx)(c.ZP,{item:!0,xs:12,children:null!==v&&(0,E.jsx)(s.Fragment,{children:(0,E.jsx)(T,{results:v,start:u})})})})})})]}),!u&&!v&&(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)("br",{}),(0,E.jsx)(V.Z,{title:"During the speed test all your production traffic will be temporarily suspended.",iconComponent:(0,E.jsx)(G.Z,{}),help:(0,E.jsx)(s.Fragment,{})})]})]}):(0,E.jsx)(R.Z,{iconComponent:(0,E.jsx)(j.QBB,{}),entity:"Speedtest"})})]})})))},26824:function(e,t,n){"use strict";n.d(t,{HE:function(){return o},V9:function(){return r},ci:function(){return i},x2:function(){return s}});var r=1006,i=1008,o=1011,s=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},94210:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},95087:function(e,t,n){var r;if("object"===typeof globalThis)r=globalThis;else try{r=n(94210)}catch(l){}finally{if(r||"undefined"===typeof window||(r=window),!r)throw new Error("Could not determine global this")}var i=r.WebSocket||r.MozWebSocket,o=n(51496);function s(e,t){return t?new i(e,t):new i(e)}i&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(s,e,{get:function(){return i[e]}})})),e.exports={w3cwebsocket:i?s:null,version:o}},51496:function(e,t,n){e.exports=n(19794).version},19794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=380.3104cfc3.chunk.js.map