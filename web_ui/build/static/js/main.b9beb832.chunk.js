(this.webpackJsonprw_front_end=this.webpackJsonprw_front_end||[]).push([[0],{12:function(e,t,n){e.exports={Top_Bar:"style_Top_Bar__1XZY5",logo_text:"style_logo_text__389O4",wizard_logo_text:"style_wizard_logo_text__PLpmc",help_text:"style_help_text__1nf27",IngredientsSelector:"style_IngredientsSelector__YtSzJ",MaxIngredientsSelectorContainer:"style_MaxIngredientsSelectorContainer__3M_Oa",MaxIngredientsSelector:"style_MaxIngredientsSelector__l_uFb",Recipes_Area:"style_Recipes_Area__1LVhz",recipe:"style_recipe__3g2OX",recipe_picture:"style_recipe_picture__3jeUN",view_recipe_button:"style_view_recipe_button__2CIKi"}},66:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(21),i=n.n(s),a=n(25),l=n.n(a),o=n(33),_=n(11),u=(n(34),n(68)),j=n(69),d=n(12),p=n.n(d),x=n(1),b=function(e){var t=e.title,n=e.ingredients,r=e.url,c=e.image;return Object(x.jsxs)(u.a,{className:p.a.recipe,children:[Object(x.jsx)(u.a.Img,{className:p.a.recipe_picture,src:c}),Object(x.jsxs)(u.a.Body,{children:[Object(x.jsx)(u.a.Title,{children:t}),Object(x.jsxs)(u.a.Text,{children:[Object(x.jsx)("b",{children:"Ingredients: "}),Object(x.jsx)("i",{children:n})]})]}),Object(x.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer",children:[" ",Object(x.jsx)(j.a,{className:p.a.view_recipe_button,children:"View Recipe"})]})]})},h=n(67),g=n(40),m=n(19);var O=function(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1],s="",i=12,a=Object(r.useState)([]),u=Object(_.a)(a,2),j=u[0],d=u[1],O=Object(r.useState)([]),f=Object(_.a)(O,2),v=f[0],y=f[1];Object(r.useEffect)((function(){I()}),[]);var I=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://80.195.31.145:8000/valid_ingredient_list/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.Ingredients);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0!=j&&(s=j.map((function(e){return e.value})).join(","),w())}),[j]);var S=n.map((function(e){return{value:e,label:e}})),w=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://80.195.31.145:8000/search_recipes_by_ingredients/"+s+"/"+i,console.log("Attempting to get API response using URL "+t),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,y(r.Recipes);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("section",{className:p.a.Top_Bar,children:[Object(x.jsx)("div",{children:Object(x.jsxs)("h1",{className:p.a.logo_text,children:["Recipe",Object(x.jsx)("span",{className:p.a.wizard_logo_text,children:"Wizard"})]})}),Object(x.jsx)("div",{className:p.a.help_text,children:"Search through thousands of recipes using ingredient combinations. Get recipe ideas, use up leftover ingredients."}),Object(x.jsxs)(h.a,{className:"search-form",children:[Object(x.jsx)(g.a,{options:S,filterOption:Object(m.b)({ignoreAccents:!1}),isMulti:!0,className:p.a.IngredientsSelector,onChange:d,autoFocus:!0,placeholder:Object(x.jsx)("div",{children:"Start typing some ingredient names"})}),Object(x.jsxs)("div",{className:p.a.MaxIngredientsSelectorContainer,children:[Object(x.jsx)("label",{htmlFor:"maximum_ingredients",className:p.a.help_text,children:"Recipe Complexity"}),Object(x.jsx)("input",{id:"maximum_ingredients",type:"range",className:p.a.MaxIngredientsSelector,defaultValue:15,min:"1",max:"100",onChange:function(e){0!=j&&(i=e.target.value,s=j.map((function(e){return e.value})).join(","),w())}})]})]})]}),Object(x.jsx)("section",{className:p.a.Recipes_Area,children:v.map((function(e){return Object(x.jsx)(b,{title:e.Title,ingredients:e.Ingredients,url:e.URL,image:e.Picture_URL},e.ID)}))})]})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b9beb832.chunk.js.map