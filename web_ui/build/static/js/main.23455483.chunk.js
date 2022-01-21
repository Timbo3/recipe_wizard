(this.webpackJsonprw_front_end=this.webpackJsonprw_front_end||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(21),s=n.n(i),a=n(25),l=n.n(a),o=n(33),p=n(12),d=n(68),_=n(69),j=n(67),u=(n(45),n(9)),x=n.n(u),g=n(39),b=n(19),h=n(1);var m=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],i="",s=Object(c.useState)([]),a=Object(p.a)(s,2),u=a[0],m=a[1],O=Object(c.useState)([]),f=Object(p.a)(O,2),v=f[0],y=f[1],I=15;Object(c.useEffect)((function(){N()}),[]);var N=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://80.195.31.145:8000/valid_ingredient_list/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.Ingredients);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=n.map((function(e){return{value:e,label:e}}));Object(c.useEffect)((function(){0!=u&&(i=u.map((function(e){return e.value})).join(","),w())}),[u]);var w=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://80.195.31.145:8000/search_recipes_by_ingredients/"+i+"/"+I,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,y(c.Recipes);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){document.getElementById("recipePopupForRecipeID"+e.target.id).style.display="block"},R=function(e){document.getElementById("recipePopupForRecipeID"+e.target.id).style.display="none"},C=function(e){var t=e.recipeID,n=e.title,c=e.ingredients,r=e.servings,i=e.method,s=e.image,a=c.replace(/<ingredient>/g,"<li>");a=a.replace(/<\/ingredient>/g,"</li>"),c=(c=c.replace(/<ingredient>/g,"")).replace(/<\/ingredient>/g,". "),i=i.replace(/step/g,"");for(var l=0;l<20;l++){var o=new RegExp("<["+l+"]>","g"),p="<p><b>"+l+". </b>";i=i.replace(o,p),o=new RegExp("</["+l+"]>","g"),p="</p>",i=i.replace(o,p)}return Object(h.jsxs)(d.a,{className:x.a.recipe,children:[Object(h.jsxs)(d.a.Body,{children:[Object(h.jsx)(d.a.Title,{children:n}),Object(h.jsx)(d.a.Img,{className:x.a.recipe_picture,src:s}),Object(h.jsxs)(d.a.Text,{children:[Object(h.jsx)("b",{children:"Ingredients: "}),"(",r,") ",Object(h.jsx)("i",{children:c.replace(/<li>/g,"")})]}),Object(h.jsx)(_.a,{id:t,onClick:M,children:"View Recipe"})]}),Object(h.jsx)("div",{id:"recipePopupForRecipeID"+t,className:x.a.modal,children:Object(h.jsxs)("div",{className:x.a.modalcontent,children:[Object(h.jsx)("span",{id:t,className:x.a.close,onClick:R,children:"\xd7"}),Object(h.jsx)("p",{className:x.a.recipe_popup_title,children:Object(h.jsx)("b",{children:n})}),Object(h.jsx)("img",{className:x.a.recipe_picture,src:s}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Ingredients "}),"(",r,")"]}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:a}}),Object(h.jsx)("p",{children:"\xa0"}),Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"Method: "})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]})})]})};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("section",{className:x.a.Top_Bar,children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{className:x.a.logo_text,children:["Recipe",Object(h.jsx)("span",{className:x.a.wizard_logo_text,children:"Wizard"})]})}),Object(h.jsx)("div",{className:x.a.help_text,children:"Search through thousands of recipes using ingredient combinations. Get recipe ideas, use up leftover ingredients."}),Object(h.jsxs)(j.a,{className:"search-form",children:[Object(h.jsx)(g.a,{options:S,filterOption:Object(b.b)({ignoreAccents:!1}),isMulti:!0,className:x.a.IngredientsSelector,onChange:m,autoFocus:!0,placeholder:Object(h.jsx)("div",{children:"Start typing some ingredient names"})}),Object(h.jsxs)("div",{className:x.a.MaxIngredientsSelectorContainer,children:[Object(h.jsx)("label",{htmlFor:"maximum_ingredients",className:x.a.help_text,children:"Recipe Complexity:"}),Object(h.jsx)("input",{id:"maximum_ingredients",type:"range",className:x.a.MaxIngredientsSelector,defaultValue:15,min:"1",max:"25",onChange:function(e){0!=u&&(I=e.target.value,console.log("max ingredients set to "+I),i=u.map((function(e){return e.value})).join(","),w())}})]})]})]}),Object(h.jsx)("section",{className:x.a.Recipes_Area,children:v.map((function(e,t){return Object(h.jsx)(C,{recipeID:e.ID,title:e.Title,string:!0,ingredients:e.Ingredients,servings:e.Servings,method:e.Method,image:e.Picture_URL},e.ID)}))})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={Top_Bar:"style_Top_Bar__1XZY5",logo_text:"style_logo_text__389O4",wizard_logo_text:"style_wizard_logo_text__PLpmc",help_text:"style_help_text__1nf27",IngredientsSelector:"style_IngredientsSelector__YtSzJ",MaxIngredientsSelectorContainer:"style_MaxIngredientsSelectorContainer__3M_Oa",MaxIngredientsSelector:"style_MaxIngredientsSelector__l_uFb",Recipes_Area:"style_Recipes_Area__1LVhz",recipe:"style_recipe__3g2OX",modal:"style_modal___xEkE",modalcontent:"style_modalcontent__2wJuK",close:"style_close__2rQsC",recipe_popup_title:"style_recipe_popup_title__3X8Xr",recipe_picture:"style_recipe_picture__3jeUN",view_recipe_button:"style_view_recipe_button__2CIKi",li:"style_li__3xZ2s"}}},[[65,1,2]]]);
//# sourceMappingURL=main.23455483.chunk.js.map