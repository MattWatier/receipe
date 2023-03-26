(function(e){function t(t){for(var a,r,s=t[0],l=t[1],p=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,p||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},o={app:0},n=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://mattwatier.github.io/receipe/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),o=(i("7f7f"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"reading-typography"},[e.recipe?e._e():t("h1",[e._v("Add a New Recipe")]),e.recipe?t("h1",[e._v("Edit Recipe: "+e._s(e.recipe.title))]):e._e(),t("div",{staticClass:"grid-x_5:lg grid gap_5:lg gap_6:xl gap_4"},[t("form",{staticClass:"flex flex_column gap_3 justify_start col-start_start col-end_4",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"title"}},[e._v("Title:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],attrs:{type:"text",id:"title"},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"author"}},[e._v("Author:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.author,expression:"recipe.author"}],attrs:{type:"text",id:"author"},domProps:{value:e.recipe.author},on:{input:function(t){t.target.composing||e.$set(e.recipe,"author",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"date"}},[e._v("Date:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.date,expression:"recipe.date"}],attrs:{type:"date",id:"date"},domProps:{value:e.recipe.date},on:{input:function(t){t.target.composing||e.$set(e.recipe,"date",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"description"}},[e._v("Description:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.description,expression:"recipe.description"}],attrs:{id:"description"},domProps:{value:e.recipe.description},on:{input:function(t){t.target.composing||e.$set(e.recipe,"description",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"image"}},[e._v("Image URL:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.image,expression:"recipe.image"}],attrs:{type:"url",id:"image"},domProps:{value:e.recipe.image},on:{input:function(t){t.target.composing||e.$set(e.recipe,"image",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"yield"}},[e._v("Yield:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.yield,expression:"recipe.yield"}],attrs:{type:"text",id:"yield"},domProps:{value:e.recipe.yield},on:{input:function(t){t.target.composing||e.$set(e.recipe,"yield",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"prep_time"}},[e._v("Prep Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],attrs:{type:"text",id:"prep_time"},domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"cook_time"}},[e._v("Cook Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.cook_time,expression:"recipe.cook_time"}],attrs:{type:"text",id:"cook_time"},domProps:{value:e.recipe.cook_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"cook_time",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"total_time"}},[e._v("Total Time:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.total_time,expression:"recipe.total_time"}],attrs:{type:"text",id:"total_time"},domProps:{value:e.recipe.total_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"total_time",t.target.value)}}})]),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display"},[e._v("Ingredients:")]),e._l(e.recipe.ingredients,(function(i,a){return t("div",{key:a,staticClass:"flex_column flex gap_3"},[t("form-group",{staticClass:"flex flex_row gap_2"},[t("label",{staticClass:"font_medium"},[e._v("Ingredient "+e._s(a+1)+":")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.name,expression:"ingredient.name"}],attrs:{type:"text",placeholder:"Ingredient name"},domProps:{value:i.name},on:{input:function(t){t.target.composing||e.$set(i,"name",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:i.quantity,expression:"ingredient.quantity"}],attrs:{type:"text",placeholder:"Quantity"},domProps:{value:i.quantity},on:{input:function(t){t.target.composing||e.$set(i,"quantity",t.target.value)}}}),t("select",{directives:[{name:"model",rawName:"v-model",value:i.unit,expression:"ingredient.unit"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(i,"unit",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:""}},[e._v("Select unit")]),t("option",{attrs:{value:"whole"}},[e._v("~")]),t("option",{attrs:{value:"tsp"}},[e._v("tsp")]),t("option",{attrs:{value:"tbsp"}},[e._v("tbsp")]),t("option",{attrs:{value:"cups"}},[e._v("cups")]),t("option",{attrs:{value:"oz"}},[e._v("oz")]),t("option",{attrs:{value:"g"}},[e._v("g")]),t("option",{attrs:{value:"lb"}},[e._v("lb")]),t("option",{attrs:{value:"kg"}},[e._v("kg")])]),t("button",{staticClass:"btn btn-light self_start",on:{click:function(t){return e.addIngredientDetails(i)}}},[e._v("Add Details")])]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:i.detail,expression:"ingredient.detail"},{name:"model",rawName:"v-model",value:i.detail,expression:"ingredient.detail"}],staticClass:"p_2 p_3:md font_ui",attrs:{name:"i",id:"",cols:"30",rows:"2"},domProps:{value:i.detail},on:{input:function(t){t.target.composing||e.$set(i,"detail",t.target.value)}}})],1)})),t("button",{staticClass:"btn btn-secondary self_start",on:{click:e.addIngredient}},[e._v("Add Ingredient")])],2),t("div",{staticClass:"flex flex_column gap_2"},[t("label",{staticClass:"font_bold font-size_up-1 font_display"},[e._v("Cooking Instructions:")]),e._l(e.recipe.instructions,(function(i,a){return t("div",{key:a,staticClass:"flex_column flex gap_3"},[t("label",[e._v("Instruction "+e._s(a+1)+":")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:i.content,expression:"instruction.content"}],attrs:{placeholder:"Enter cooking instruction"},domProps:{value:i.content},on:{input:function(t){t.target.composing||e.$set(i,"content",t.target.value)}}}),t("div",{staticClass:"flex_row flex gap_4"},[t("form-group",{staticClass:"flex flex_row gap_2"},[t("label",{staticClass:"font_medium",attrs:{for:"prep_time"}},[e._v("Prep Time")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.prep_time,expression:"instruction.prep_time"}],attrs:{type:"number",name:"prep_time"},domProps:{value:i.prep_time},on:{input:function(t){t.target.composing||e.$set(i,"prep_time",t.target.value)}}})]),t("form-group",{staticClass:"flex flex_row gap_2"},[t("label",{staticClass:"font_medium",attrs:{for:"cook_time"}},[e._v("Cook Time")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.cook_time,expression:"instruction.cook_time"}],attrs:{type:"number",name:"cook_time"},domProps:{value:i.cook_time},on:{input:function(t){t.target.composing||e.$set(i,"cook_time",t.target.value)}}})]),t("form-group",{staticClass:"flex flex_row gap_2"},[t("label",{staticClass:"font_medium",attrs:{for:"nonactive_time"}},[e._v("Non Active Time")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.nonactive_time,expression:"instruction.nonactive_time"}],attrs:{type:"number",name:"nonactive_time"},domProps:{value:i.nonactive_time},on:{input:function(t){t.target.composing||e.$set(i,"nonactive_time",t.target.value)}}})])],1)])}))],2),t("button",{attrs:{type:"button"},on:{click:e.addInstruction}},[e._v("Add Instruction")]),t("button",{staticClass:"btn btn-primary self_start",attrs:{type:"submit"}},[e._v(e._s(e.recipe?"Save":"Create"))])]),t("aside",{staticClass:"col-start_4 col-end_end"},[t("section",{staticClass:"flex flex_column gap_3 p-y_4"},[t("label",{staticClass:"font_bold font-size_up-1 font_display",attrs:{for:"json"}},[e._v("Paste JSON Data:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonData,expression:"jsonData"}],attrs:{id:"json"},domProps:{value:e.jsonData},on:{input:function(t){t.target.composing||(e.jsonData=t.target.value)}}}),t("button",{staticClass:"btn btn-primary self_start",on:{click:e.loadRecipe}},[e._v("Load Recipe")])]),e.recipe?t("div",{staticClass:"bg_black-1 br_round p_4"},[t("h2",{staticClass:"c_primary-5"},[e._v("Recipe Data")]),t("code",{staticClass:"block c_white bg_black-8 br_radius p_4"},[t("pre",{staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[t("div",{staticClass:"font_0 font_ui user-select-all"},[e._v(e._s(e.recipeData))])])])]):e._e()])])])}),n=[],r={data:function(){return{recipe:{title:"",author:"Matt Watier",date:"2023-01-01",description:"",image:"",yield:"",prep_time:"",cook_time:"",total_time:"",ingredients:[{name:"",quantity:"",unit:""}],instructions:[{content:"",prep_time:"",cook_time:"",nonactive_time:""}]},jsonData:null,recipeData:null}},methods:{addIngredient:function(){this.recipe.ingredients.push({name:"",quantity:"",unit:""})},addInstruction:function(){this.recipe.instructions.push({content:"",prep_time:"",cook_time:"",nonactive_time:""})},addIngredientDetails:function(e){e.detail="add detail"},submitForm:function(){this.recipeData=JSON.stringify(this.recipe,null,2)},loadRecipe:function(){try{var e=JSON.parse(this.jsonData);if(!e||!e.recipe)throw new Error("Invalid recipe data");this.recipe=e.recipe,this.recipeData=null}catch(t){alert("Error loading recipe data"),console.error(t)}}}},s=r,l=i("2877"),p=Object(l["a"])(s,o,n,!1,null,null,null),c=p.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.e444b00c.js.map