(this["webpackJsonpgoit-react-hw-06-myphonebook"]=this["webpackJsonpgoit-react-hw-06-myphonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1eZcN",input:"ContactForm_input__21XG7",addBtn:"ContactForm_addBtn__1egNT"}},11:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3y1yZ",darck:"ContactListItem_darck__1HE0z",contact:"ContactListItem_contact__1CBdi",button:"ContactListItem_button__i8uXU"}},16:function(t,e,n){t.exports={section:"Filter_section__3y4rc",label:"Filter_label__3DhT5",input:"Filter_input__1C0_D"}},24:function(t,e,n){t.exports={appear:"trans_appear__P-0z2",appearActive:"trans_appearActive__2kz3R"}},25:function(t,e,n){t.exports={title:"Phonebook_title__2sKKs"}},26:function(t,e,n){t.exports={list:"ContactList_list__1-t6Y"}},35:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(8),s=n.n(o),i=(n(35),n(3)),l=(n(41),n(44)),b=n(24),u=n.n(b),h=n(25),j=n.n(h),d=function(){return Object(c.jsx)(l.a,{in:!0,appear:!0,classNames:u.a,timeout:500,children:Object(c.jsx)("h1",{className:j.a.title,children:"Phonebook"})})},m=n(7),O=n(12),p=n(13),_=n(15),f=n(14),x=n(10),C=n.n(x),g=n(2),v=n(45),N={addContact:Object(g.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(v.a)(),name:t,number:Number(e)}}}})),deleteContact:Object(g.b)("contacts/delete"),handleChangeFilter:Object(g.b)("contacts/changeFilter"),handleChangetheme:Object(g.b)("contacts/changeTheme")},y=function(t){Object(_.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(O.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(m.a)({},c,a))},t.handleSubmit=function(e){if(e.preventDefault(),!Number(t.state.number))return alert("\u0412 \u043f\u043e\u043b\u0456 Number \u0431\u0443\u043b\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435 \u0447\u0438\u0441\u043b\u043e, \u043f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443"),void t.setState({number:""});t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(p.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(c.jsxs)("form",{className:C.a.contactForm,onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:C.a.input,type:"text",value:e,name:"name",onChange:this.handleChange,required:!0})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Number",Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:C.a.input,type:"tel",value:n,name:"number",onChange:this.handleChange})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:C.a.addBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),F={onAddContact:N.addContact},k=Object(i.b)(null,F)(y),S=n(22),w=n(11),A=n.n(w),I={addContact:Object(g.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(v.a)(),name:t,number:Number(e)}}}})),deleteContact:Object(g.b)("contacts/delete"),handleChangeFilter:Object(g.b)("contacts/changeFilter"),handleChangetheme:Object(g.b)("contacts/changeTheme")},L=Object(i.b)((function(t,e){var n=t.contacts.items.find((function(t){return t.id===e.id}));return Object(S.a)(Object(S.a)({},n),{},{theme:t.contacts.changethem})}),(function(t,e){return{delCont:function(){return t(I.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.delCont,r=t.theme;return Object(c.jsxs)("li",{className:r?A.a.listItem:A.a.darck,children:[Object(c.jsxs)("p",{className:A.a.contact,children:[Object(c.jsxs)("span",{children:[e,":"]})," ",n]}),Object(c.jsx)("button",{type:"button",className:A.a.button,onClick:a,children:"\u2716"})]})})),T=n(26),B=n.n(T),z=Object(i.b)((function(t){var e=t.contacts,n=e.items,c=e.filter.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(c)}))}}))((function(t){var e=t.contacts;return Object(c.jsx)("section",{children:e.map((function(t){return Object(c.jsx)(L,{className:B.a.list,id:t.id},t.id)}))})})),D=n(16),E=n.n(D),G={onChangeFilter:N.handleChangeFilter},J=Object(i.b)((function(t){return{value:t.contacts.filter}}),G)((function(t){var e=t.filter,n=t.onChangeFilter;return Object(c.jsx)("section",{className:E.a.section,children:Object(c.jsxs)("label",{className:E.a.label,children:["Find contacts by name:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:function(t){return n(t.target.value)},value:e,name:"filter",type:"text",className:E.a.input})]})})})),P=n(9),K=n.n(P),X=function(t){Object(_.a)(n,t);var e=Object(f.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("section",{className:!0===this.props.theme?K.a.light:K.a.dark,children:[Object(c.jsxs)("div",{className:K.a.themeSelector,children:[Object(c.jsx)("span",{className:K.a.label,children:"Theme: "}),Object(c.jsxs)("label",{className:K.a.switch,children:[Object(c.jsx)("input",{type:"checkbox",checked:this.props.theme,onChange:function(){return t.props.toggleTheme(!t.props.theme)}}),Object(c.jsx)("span",{className:K.a.slider})]})]}),this.props.children]})}}]),n}(r.a.Component),Z={toggleTheme:N.handleChangetheme},q=Object(i.b)((function(t){return{theme:t.contacts.changethem}}),Z)(X);var H,M=Object(i.b)((function(t){return{value:t.contacts.items,filter:t.contacts.filter}}))((function(t){var e=t.value,n=t.filter;return Object(c.jsxs)(q,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(k,{}),Object(c.jsx)(z,{}),(e.length>1||n)&&Object(c.jsx)(J,{})]})})),R=n(27),U=n(4),Y=Object(g.c)([],(H={},Object(m.a)(H,N.addContact,(function(t,e){return[].concat(Object(R.a)(t),[e.payload.contact])})),Object(m.a)(H,N.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),H)),Q=Object(g.c)("",Object(m.a)({},N.handleChangeFilter,(function(t,e){return e.payload}))),V=Object(g.c)(!0,Object(m.a)({},N.handleChangetheme,(function(t,e){return e.payload}))),W=Object(U.c)({items:Y,filter:Q,changethem:V}),$=Object(g.a)({reducer:{contacts:W}});s.a.render(Object(c.jsx)(i.a,{store:$,children:Object(c.jsx)(M,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={light:"Section_light__166ze",dark:"Section_dark__m79Cf",themeSelector:"Section_themeSelector__21GMF",label:"Section_label__muJDo",switch:"Section_switch__3GAcA",slider:"Section_slider__1nfE9"}}},[[42,1,2]]]);
//# sourceMappingURL=main.b5690b68.chunk.js.map