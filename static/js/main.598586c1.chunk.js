(this["webpackJsonpcode-tastic"]=this["webpackJsonpcode-tastic"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"_id":"60a921d4e9441f7ae718e2bb","isActive":false,"balance":3075.94,"age":35,"eyeColor":"green","name":"Eleanor Hull","gender":"female"},{"_id":"60a921d4d267bc48828d76ec","isActive":false,"balance":3983,"age":37,"eyeColor":"green","name":"Schmidt Douglas","gender":"male"},{"_id":"60a921d45909ecad4d4db47e","isActive":true,"balance":3282.54,"age":36,"eyeColor":"brown","name":"Joanne Browning","gender":"female"},{"_id":"60a921d45a7cc27708cd628e","isActive":false,"balance":3193.1,"age":36,"eyeColor":"brown","name":"Graham Norris","gender":"male"},{"_id":"60a921d44d258487f1eca446","isActive":false,"balance":3662.5,"age":26,"eyeColor":"green","name":"Mandy Fischer","gender":"female"},{"_id":"60a921d4e51f6b3af9ab2412","isActive":false,"balance":3801.71,"age":31,"eyeColor":"green","name":"Evangelina Dickerson","gender":"female"},{"_id":"60a921d4def1f945fea3bc99","isActive":true,"balance":3876.93,"age":38,"eyeColor":"green","name":"Harris Richards","gender":"male"},{"_id":"60a921d46e326c994fbce167","isActive":true,"balance":1198.16,"age":36,"eyeColor":"brown","name":"Michelle Medina","gender":"female"},{"_id":"60a921d4e2a575fe155a78c6","isActive":true,"balance":1274.6,"age":29,"eyeColor":"blue","name":"Rosalyn Munoz","gender":"female"},{"_id":"60a921d4b2ae0b5b99ea0374","isActive":false,"balance":3819.97,"age":36,"eyeColor":"brown","name":"Middleton Bean","gender":"male"},{"_id":"60a921d406c1e74b649ff370","isActive":false,"balance":2113.8,"age":30,"eyeColor":"brown","name":"Walter Vaughan","gender":"male"},{"_id":"60a921d4d0e8d2a1ee08f644","isActive":true,"balance":1756.4,"age":34,"eyeColor":"green","name":"Leon Gibson","gender":"male"},{"_id":"60a921d4f29cd235370084ec","isActive":true,"balance":2575.4,"age":32,"eyeColor":"blue","name":"Amber Walls","gender":"female"},{"_id":"60a921d489b443450ac8ffee","isActive":false,"balance":1385.54,"age":29,"eyeColor":"blue","name":"Langley Petty","gender":"male"},{"_id":"60a921d47107b11a5fdfebff","isActive":false,"balance":2649.25,"age":34,"eyeColor":"blue","name":"Mitzi Mendez","gender":"female"},{"_id":"60a921d4dddd992f48599fd3","isActive":true,"balance":2171.05,"age":36,"eyeColor":"green","name":"Black Pearson","gender":"male"},{"_id":"60a921d49081c248474f5e22","isActive":false,"balance":1315.11,"age":31,"eyeColor":"brown","name":"Benson Mejia","gender":"male"},{"_id":"60a921d43292e3fb57308d54","isActive":true,"balance":3837.33,"age":23,"eyeColor":"brown","name":"Claudia Patrick","gender":"female"},{"_id":"60a921d40870803a8fe64191","isActive":false,"balance":2795.73,"age":34,"eyeColor":"green","name":"Hughes Garrison","gender":"male"},{"_id":"60a921d46084220c0ee8add9","isActive":true,"balance":2744.37,"age":26,"eyeColor":"brown","name":"Landry Carrillo","gender":"male"}]')},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),i=n.n(o),c=(n(24),n(8)),s=n(9),d=n(11),l=n(10),u=(n(25),n(14)),h=n(35),b=n(34),j="\ninterface IPerson {\n  _id: string;\n  isActive: boolean;\n  balance: number;\n  age: number;\n  eyeColor: string;\n  name: string;\n  gender: string;\n}";function f(e){return!0}var g="function filterFunc(person: IPerson): boolean{\n",v="".concat(j,"\n\n ").concat(g,"\t// Put your code here...\n\treturn true;\n}"),p=n(2),C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).closePopover=function(){r.setState({editPopoverOpen:!1})},r.getCleanCode=function(){var e=r.state.unsavedCode,t=e.indexOf(g);return e=(e=e.slice(t+g.length)).slice(0,-1)},r.saveAndClose=function(){try{var e=new Function("person",r.getCleanCode());r.props.onSave(r.state.unsavedCode,e)}catch(t){console.error(t),r.props.showError()}r.closePopover()},r.cancelAndClose=function(){r.setState({unsavedCode:r.props.code}),r.closePopover()},r.state={darkMode:!1,unsavedCode:r.props.code,editPopoverOpen:!1},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{variant:"primary",onClick:function(){return e.setState({editPopoverOpen:!0})},children:this.props.buttonName}),this.state.editPopoverOpen&&Object(p.jsxs)(b.a,{size:"xl",show:!0,onHide:this.closePopover,dialogClassName:"Popover",children:[Object(p.jsx)(b.a.Header,{children:Object(p.jsx)(b.a.Title,{children:this.props.buttonName})}),Object(p.jsx)(b.a.Body,{children:Object(p.jsx)(u.a,{height:"400px",defaultLanguage:"typescript",theme:this.state.darkMode?"vs-dark":"light",defaultValue:this.props.code,onChange:function(t){e.setState({unsavedCode:t||""})}})}),Object(p.jsxs)(b.a.Footer,{children:[Object(p.jsx)(h.a,{variant:"primary",onClick:this.saveAndClose,disabled:this.props.code===this.state.unsavedCode,children:"Save"}),Object(p.jsx)(h.a,{variant:"danger",onClick:this.cancelAndClose,children:"Cancel"})]})]})]})}}]),n}(r.Component);function m(e,t){return e.age-t.age}var O="function defaultSortingFunc(p1: IPerson, p2: IPerson): number{\n",x="".concat(j,"\n\n ").concat(O,"\t// Put your code here...\n\treturn p1.age - p2.age;\n}"),y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).closePopover=function(){r.setState({editPopoverOpen:!1})},r.getCleanCode=function(){var e=r.state.unsavedCode,t=e.indexOf(O);return e=(e=e.slice(t+O.length)).slice(0,-1)},r.saveAndClose=function(){try{var e=new Function("p1","p2",r.getCleanCode());r.props.onSave(r.state.unsavedCode,e)}catch(t){console.error(t),r.props.showError()}r.closePopover()},r.cancelAndClose=function(){r.setState({unsavedCode:r.props.code}),r.closePopover()},r.state={darkMode:!1,unsavedCode:r.props.code,editPopoverOpen:!1},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{variant:"primary",onClick:function(){return e.setState({editPopoverOpen:!0})},children:this.props.buttonName}),this.state.editPopoverOpen&&Object(p.jsxs)(b.a,{size:"xl",show:!0,onHide:this.closePopover,dialogClassName:"Popover",children:[Object(p.jsx)(b.a.Header,{children:Object(p.jsx)(b.a.Title,{children:this.props.buttonName})}),Object(p.jsx)(b.a.Body,{children:Object(p.jsx)(u.a,{height:"400px",defaultLanguage:"typescript",theme:this.state.darkMode?"vs-dark":"light",defaultValue:this.props.code,onChange:function(t){e.setState({unsavedCode:t||""})}})}),Object(p.jsxs)(b.a.Footer,{children:[Object(p.jsx)(h.a,{variant:"primary",onClick:this.saveAndClose,disabled:this.props.code===this.state.unsavedCode,children:"Save"}),Object(p.jsx)(h.a,{variant:"danger",onClick:this.cancelAndClose,children:"Cancel"})]})]})]})}}]),n}(r.Component),F=n(33),S=n(13),A=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).getFilteredList=function(){return S.filter(r.props.filterFunc)},r.getSortedList=function(){return S.filter(r.props.filterFunc)},r.state={currentList:S},r}return Object(s.a)(n,[{key:"render",value:function(){var e=S;try{e=this.getFilteredList()}catch(t){console.error(t),this.props.showFilterError()}try{e=e.sort(this.props.sorterFunc)}catch(t){console.error(t),this.props.showSortError()}return Object(p.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"id"}),Object(p.jsx)("th",{children:"active"}),Object(p.jsx)("th",{children:"balance"}),Object(p.jsx)("th",{children:"age"}),Object(p.jsx)("th",{children:"eye color"}),Object(p.jsx)("th",{children:"name"}),Object(p.jsx)("th",{children:"gender"})]})}),Object(p.jsx)("tbody",{children:e.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e._id}),Object(p.jsx)("td",{children:e.isActive?"yes":"no"}),Object(p.jsx)("td",{children:e.balance}),Object(p.jsx)("td",{children:e.age}),Object(p.jsx)("td",{children:e.eyeColor}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.gender})]},e._id)}))})]})}}]),n}(r.Component),w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).onSaveFilterCode=function(e,t){r.setState({savedFilterCode:e,filterFunc:t}),r.forceUpdate()},r.showFilterError=function(){alert("filter error")},r.showSortError=function(){alert("sort error")},r.onSaveSortingCode=function(e,t){r.setState({savedSortingCode:e,sortingFunc:t}),r.forceUpdate()},r.state={filterFunc:f,sortingFunc:m,savedFilterCode:v,savedSortingCode:x},r}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"user freedom"}),Object(p.jsx)("h4",{children:"for sorting and filtering items"}),Object(p.jsx)(C,{code:this.state.savedFilterCode,onSave:this.onSaveFilterCode,buttonName:"Edit filter",showError:this.showFilterError}),Object(p.jsx)(y,{code:this.state.savedSortingCode,onSave:this.onSaveSortingCode,buttonName:"Edit sort order",showError:this.showSortError}),Object(p.jsx)(A,{filterFunc:this.state.filterFunc,sorterFunc:this.state.sortingFunc,showFilterError:this.showFilterError,showSortError:this.showSortError})]})}}]),n}(a.a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};n(30);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),P()}},[[31,1,2]]]);
//# sourceMappingURL=main.598586c1.chunk.js.map