(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[91],{421:function(t,n,o){"use strict";var e=o(1),a=(o(2),o(406)),i=o(407),c=o(408),r=o(454),s=o(380),d=o(489),l=o(378),u=o(123),b=o.n(u),j=o(300),g=o(310),O=o(120),f=o(0);n.a=Object(g.a)((function(t){return Object(j.a)(Object(e.a)({},O.h))}))((function(t){var n=t.isOpen,o=void 0!==n&&n,u=t.onClose,j=t.onCancel,g=t.onConfirm,O=t.classes,v=void 0===O?{}:O,p=t.title,m=void 0===p?"":p,x=t.isLoading,h=t.confirmationContent,I=t.cancelText,S=void 0===I?"Cancel":I,w=t.confirmText,C=void 0===w?"Confirm":w,L=t.confirmButtonProps,M=void 0===L?{}:L,y=t.cancelButtonProps,P=void 0===y?{}:y;return Object(f.jsxs)(a.a,{open:o,onClose:function(t,n){"backdropClick"!==n&&u()},className:v.root,onBackdropClick:function(){return!1},sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[Object(f.jsxs)(i.a,{className:v.title,children:[Object(f.jsx)("div",{className:v.titleText,children:m}),Object(f.jsx)("div",{className:v.closeContainer,children:Object(f.jsx)(l.a,{"aria-label":"close",className:v.closeButton,onClick:u,disableRipple:!0,size:"small",children:Object(f.jsx)(b.a,{})})})]}),Object(f.jsx)(c.a,{className:v.content,children:h}),Object(f.jsxs)(r.a,{className:v.actions,children:[Object(f.jsx)(s.a,Object(e.a)(Object(e.a)({className:v.cancelButton,onClick:j||u,disabled:x,type:"button"},P),{},{variant:"outlined",color:"primary",children:S})),Object(f.jsx)(d.a,Object(e.a)(Object(e.a)({className:v.confirmButton,type:"button",onClick:g,loading:x,disabled:x},M),{},{variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:null,autoFocus:!0,children:C}))]})]})}))},427:function(t,n,o){"use strict";var e=o(15),a=o(2),i=o(52);n.a=function(t,n){var o=Object(a.useState)(!1),c=Object(e.a)(o,2),r=c[0],s=c[1];return[r,function(o,e,a){s(!0),i.a.invoke(o,e,a).then((function(n){s(!1),t(n)})).catch((function(t){s(!1),n(t)}))}]}},454:function(t,n,o){"use strict";var e=o(4),a=o(3),i=o(2),c=(o(11),o(7)),r=o(93),s=o(8),d=o(12),l=o(70),u=o(94);function b(t){return Object(l.a)("MuiDialogActions",t)}Object(u.a)("MuiDialogActions",["root","spacing"]);var j=o(0),g=["className","disableSpacing"],O=Object(s.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(t,n){var o=t.ownerState;return[n.root,!o.disableSpacing&&n.spacing]}})((function(t){var n=t.ownerState;return Object(a.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=i.forwardRef((function(t,n){var o=Object(d.a)({props:t,name:"MuiDialogActions"}),i=o.className,s=o.disableSpacing,l=void 0!==s&&s,u=Object(e.a)(o,g),f=Object(a.a)({},o,{disableSpacing:l}),v=function(t){var n=t.classes,o={root:["root",!t.disableSpacing&&"spacing"]};return Object(r.a)(o,b,n)}(f);return Object(j.jsx)(O,Object(a.a)({className:Object(c.a)(v.root,i),ownerState:f,ref:n},u))}));n.a=f},461:function(t,n,o){"use strict";var e=o(4),a=o(3),i=o(2),c=(o(11),o(93)),r=o(8),s=o(12),d=o(95),l=o(70),u=o(94);function b(t){return Object(l.a)("MuiDialogContentText",t)}Object(u.a)("MuiDialogContentText",["root"]);var j=o(0),g=["children"],O=Object(r.a)(d.a,{shouldForwardProp:function(t){return Object(r.b)(t)||"classes"===t},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(t,n){return n.root}})({}),f=i.forwardRef((function(t,n){var o=Object(s.a)({props:t,name:"MuiDialogContentText"}),i=Object(e.a)(o,g),r=function(t){var n=t.classes,o=Object(c.a)({root:["root"]},b,n);return Object(a.a)({},n,o)}(i);return Object(j.jsx)(O,Object(a.a)({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:i},o,{classes:r}))}));n.a=f},489:function(t,n,o){"use strict";var e=o(6),a=o(4),i=o(3),c=o(2),r=(o(11),o(9)),s=o(93),d=o(8),l=o(12),u=o(380),b=o(476),j=o(70),g=o(94);function O(t){return Object(j.a)("MuiLoadingButton",t)}var f=Object(g.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),v=o(0),p=["children","disabled","loading","loadingIndicator","loadingPosition"],m=Object(d.a)(u.a,{shouldForwardProp:function(t){return function(t){return"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t}(t)||"classes"===t},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(t,n){return[n.root,n.startIconLoadingStart&&Object(e.a)({},"& .".concat(f.startIconLoadingStart),n.startIconLoadingStart),n.endIconLoadingEnd&&Object(e.a)({},"& .".concat(f.endIconLoadingEnd),n.endIconLoadingEnd)]}})((function(t){var n=t.ownerState,o=t.theme;return Object(i.a)(Object(e.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}),"center"===n.loadingPosition&&Object(e.a)({transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short})},"&.".concat(f.loading),{color:"transparent"}))})),x=Object(d.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(t,n){var o=t.ownerState;return[n.loadingIndicator,n["loadingIndicator".concat(Object(r.a)(o.loadingPosition))]]}})((function(t){var n=t.theme,o=t.ownerState;return Object(i.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&{left:14},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:n.palette.action.disabled},"end"===o.loadingPosition&&{right:14})})),h=Object(v.jsx)(b.a,{color:"inherit",size:16}),I=c.forwardRef((function(t,n){var o=Object(l.a)({props:t,name:"MuiLoadingButton"}),e=o.children,c=o.disabled,d=void 0!==c&&c,u=o.loading,b=void 0!==u&&u,j=o.loadingIndicator,g=void 0===j?h:j,f=o.loadingPosition,I=void 0===f?"center":f,S=Object(a.a)(o,p),w=Object(i.a)({},o,{disabled:d,loading:b,loadingIndicator:g,loadingPosition:I}),C=function(t){var n=t.loading,o=t.loadingPosition,e=t.classes,a={root:["root",n&&"loading"],startIcon:[n&&"startIconLoading".concat(Object(r.a)(o))],endIcon:[n&&"endIconLoading".concat(Object(r.a)(o))],loadingIndicator:["loadingIndicator",n&&"loadingIndicator".concat(Object(r.a)(o))]},c=Object(s.a)(a,O,e);return Object(i.a)({},e,c)}(w);return Object(v.jsxs)(m,Object(i.a)({disabled:d||b,ref:n},S,{classes:C,ownerState:w,children:[b&&Object(v.jsx)(x,{className:C.loadingIndicator,ownerState:w,children:g}),e]}))}));n.a=I},803:function(t,n,o){"use strict";o.r(n);var e=o(15),a=(o(2),o(39)),i=o(300),c=o(310),r=o(461),s=o(31),d=o(427),l=o(421),u=o(0),b={setErrorSnackMessage:s.e},j=Object(a.b)(null,b);n.default=Object(c.a)((function(t){return Object(i.a)({wrapText:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"}})}))(j((function(t){var n=t.classes,o=t.closeDeleteModalAndRefresh,a=t.deleteOpen,i=t.selectedServiceAccount,c=t.setErrorSnackMessage,s=Object(d.a)((function(){return o(!0)}),(function(t){return c(t)})),b=Object(e.a)(s,2),j=b[0],g=b[1];if(!i)return null;return Object(u.jsx)(l.a,{title:"Delete Service Account",confirmText:"Delete",isOpen:a,isLoading:j,onConfirm:function(){g("DELETE","/api/v1/service-accounts/".concat(i))},onClose:function(){return o(!1)},confirmationContent:Object(u.jsxs)(r.a,{children:["Are you sure you want to delete service account"," ",Object(u.jsx)("b",{className:n.wrapText,children:i}),"?"]})})})))}}]);
//# sourceMappingURL=91.f3c00545.chunk.js.map