"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2185],{62185:function(e,t,n){n.r(t);var r=n(29439),a=n(1413),o=n(72791),s=n(56028),i=n(61889),l=n(36151),c=n(21435),d=n(11135),u=n(25787),h=n(23814),f=n(60364),m=n(62666),p=n(45248),x=n(42649),Z=n(62410),j=n(80184),v={setModalErrorSnackMessage:x.zb},w=(0,f.$j)((function(e){return{simplePath:e.objectBrowser.simplePath}}),v);t.default=w((0,u.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)({},h.ID),h.DF))}))((function(e){var t=e.modalOpen,n=(e.folderName,e.bucketName),a=e.onClose,d=e.setModalErrorSnackMessage,u=e.classes,h=e.existingFiles,f=e.simplePath,x=(0,o.useState)(""),v=(0,r.Z)(x,2),w=v[0],P=v[1],b=(0,o.useState)(!1),g=(0,r.Z)(b,2),C=g[0],k=g[1],F=(0,o.useState)(n),E=(0,r.Z)(F,2),S=E[0],y=E[1];(0,o.useEffect)((function(){if(f){var e="".concat(n).concat(n.endsWith("/")||f.startsWith("/")?"":"/").concat(f);y(e)}}),[f,n]);var N=function(){var e="/";f&&(e=f.endsWith("/")?f:"".concat(f,"/"));if(-1===h.findIndex((function(t){return t.name===e+w}))){var t=w.split("/").filter((function(e){return""!==e.trim()})).join("/"),r="/buckets/".concat(n,"/browse/").concat((0,p.ug)("".concat(e).concat(t,"/")));m.Z.push(r),a()}else d({errorMessage:"Folder cannot have the same name as an existing file",detailedError:""})};(0,o.useEffect)((function(){var e=!0;0===w.trim().length&&(e=!1),k(e)}),[w]);return(0,j.jsx)(o.Fragment,{children:(0,j.jsx)(s.Z,{modalOpen:t,title:"Choose or create a new path",onClose:a,titleIcon:(0,j.jsx)(Z.Z9m,{}),children:(0,j.jsxs)(i.ZP,{container:!0,children:[(0,j.jsxs)(i.ZP,{item:!0,xs:12,className:u.formFieldRow,children:[(0,j.jsx)("strong",{children:"Current Path:"})," ",(0,j.jsx)("br",{}),(0,j.jsx)("div",{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:14,textAlign:"left"},dir:"rtl",children:S})]}),(0,j.jsx)(i.ZP,{item:!0,xs:12,className:u.formFieldRow,children:(0,j.jsx)(c.Z,{value:w,label:"New Folder Path",id:"folderPath",name:"folderPath",placeholder:"Enter the new Folder Path",onChange:function(e){P(e.target.value)},onKeyPress:function(e){"Enter"===e.code&&""!==w&&N()},required:!0})}),(0,j.jsxs)(i.ZP,{item:!0,xs:12,className:u.modalButtonBar,children:[(0,j.jsx)(l.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){P("")},children:"Clear"}),(0,j.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",disabled:!C,onClick:N,children:"Create"})]})]})})})})))}}]);
//# sourceMappingURL=2185.87974475.chunk.js.map