(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),o=a.n(s),i=(a(16),a(1)),c=a(2),l=a(4),d=a(3),u=a(6),h=a(5),m=(a(17),a(7)),p=function(e){function t(e){var a;Object(i.a)(this,t);var r=(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).props,n=r.header,s=r.sort;return a.state={header:n,sort:s},a.changeSortDirection=a.changeSortDirection.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"changeSortDirection",value:function(){var e=this.props.updateSortSettings,t=this.state,a=t.sort,r=t.header,n={sort:{order:"asc"===a.order?"desc":"asc",column:r.id}};this.setState(n),e(n)}},{key:"render",value:function(){var e=this.state,t=e.sort,a=e.header,r=a.id===t.column?"#304760":"#e2e9ef";return n.a.createElement("div",{role:"button",key:m(),className:"th",onClick:this.changeSortDirection},a.label,n.a.createElement("div",{className:"desc"===t.order?"sortarrow rotate180":"sortarrow"},n.a.createElement("svg",{display:"flex",xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 36 36",version:"1.1"},n.a.createElement("path",{d:"M31.06,11,18,24.06,4.94,11Z",stroke:r,fill:r}))))}}]),t}(r.Component),v=a(7),g=function(e){function t(e){var a;Object(i.a)(this,t);var r=(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).props.headers;return a.state={headers:r},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sort,a=e.updateSortSettings,r=this.state.headers;return r.length?n.a.createElement("div",{key:v(),className:"thead"},n.a.createElement("div",{className:"tr"},r.map(function(e){return n.a.createElement(p,{key:v(),header:e,sort:t,updateSortSettings:a})}))):n.a.createElement("h1",null,"Loading")}}]),t}(r.Component),f=function(e){var t=e.searchChange;return n.a.createElement("div",{className:"searchbox"},n.a.createElement("input",{className:"searchfield",placeholder:"S\xf6k",onChange:t}))},b=function(e){var t=e.title,a=e.searchChange,r=e.settings,s={};return r&&(s={background:r.themecolor}),n.a.createElement("div",{className:"tabletop",style:s},n.a.createElement("h2",{className:"project-title"},t),n.a.createElement(f,{searchChange:a}))},w=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).onRowClick=function(){var e=a.state.rowData,t={message:"ebo.redirect",header:"".concat(e.district," - ").concat(e.id.replace("FS","")," - ").concat(e.address," - ").concat(e.title),link:e.link};window.parent.frames[1].postMessage(t,e.origin)};var r=a.props.rowData;return a.state={rowData:r},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.rowData;return n.a.createElement("div",{className:"tr",onClick:this.onRowClick},n.a.createElement("div",{className:"td"},e.id),n.a.createElement("div",{className:"td"},e.title),n.a.createElement("div",{className:"td"},e.completeaddress),n.a.createElement("div",{className:"td"},e.district),n.a.createElement("div",{className:"td"},e.type))}}]),t}(r.Component),E=a(7),S=function(e){var t=e.data;return n.a.createElement("div",{className:"tbody"},t.map(function(e){return n.a.createElement(w,{key:E(),rowData:e})}))},O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onSortChange=function(){var t=e.state.sort,a=t.order,r=t.column;return function(e,t){if(!Object.prototype.hasOwnProperty.call(e,r)||!Object.prototype.hasOwnProperty.call(t,r))return 0;var n="string"===typeof e[r]?e[r].toLowerCase():e[r],s="string"===typeof t[r]?t[r].toLowerCase():t[r],o=0;return n>s?o=1:n<s&&(o=-1),"desc"===a?-1*o:o}},e.state={headers:[],data:[],searchfield:"",sort:{order:"asc",column:"id"},settings:[]},e.updateSortSettings=e.updateSortSettings.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("message",function(t){new Promise(function(e,a){var r=0,n=setInterval(function(){var s=t.data;s.headers.length&&s.rows.length&&"ebo-data-grid"===s.module_info.name?(e(s),clearInterval(n)):(r>10&&(a(new Error("No data was recieved for 10 seconds")),clearInterval(n)),r+=1)},1e3)}).then(function(t){var a=t.rows.map(function(e){return{id:e.markerid.trim(),title:e.title.trim(),address:e.adress.trim(),postalnumber:e.postalnumber.trim(),postalrown:e.postaltown.trim(),completeaddress:"".concat(e.adress.trim(),", ").concat(e.postalnumber.trim(),", ").concat(e.postaltown.trim()).trim(),district:e.tags[0].trim(),type:e.type.trim(),link:e.sbolink.trim(),origin:t.eboTGMLOrigin.trim()}}),r=t.headers.map(function(e){return{label:e.label,id:e.id}}),n=t.module_info.settings;e.setState({headers:r,data:a,settings:n})})})}},{key:"updateSortSettings",value:function(e){var t=this.state.data;this.setState(e),t.sort(this.onSortChange())}},{key:"render",value:function(){var e="EBO Data Grid",t=this.state,a=t.headers,r=t.data,s=t.searchfield,o=t.sort,i=t.settings,c=r.sort(this.onSortChange()).filter(function(e){return JSON.stringify(e).toLowerCase().includes(s.toLowerCase())});return i&&(e=i.headertitle),r.length?n.a.createElement("div",{className:"app"},n.a.createElement(b,{title:e,searchChange:this.onSearchChange,settings:i}),n.a.createElement("div",{className:"table"},n.a.createElement(g,{headers:a,sort:o,updateSortSettings:this.updateSortSettings}),n.a.createElement(S,{data:c}))):n.a.createElement("h1",null,"Loading")}}]),t}(r.Component);o.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7ff1bbea.chunk.js.map