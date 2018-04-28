webpackJsonp([15],{"8G27":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"E/Gz":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},N73K:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>b</span><span class="token punctuation" >></span></span>Existing usernames<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>b</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >*ngFor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>let u of existingUsers<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>{{ u }}<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},U7QG:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup, FormControl } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  existingUsers = [\n    'user1',\n    'user2',\n    'user3',\n  ];\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Username',\n        placeholder: 'Username',\n        required: true,\n      },\n      asyncValidators: {\n        uniqueUsername: {\n          expression: (control: FormControl) => {\n            return new Promise((resolve, reject) => {\n              setTimeout(() => {\n                resolve(this.existingUsers.indexOf(control.value) === -1);\n              }, 1000);\n            });\n          },\n          message: 'This username is already taken.',\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},UQIa:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("WT6e"),p=a("7DMc"),o=function(){function n(){var n=this;this.form=new p.FormGroup({}),this.model={},this.options={},this.existingUsers=["user1","user2","user3"],this.fields=[{key:"text",type:"input",templateOptions:{label:"Username",placeholder:"Username",required:!0},asyncValidators:{uniqueUsername:{expression:function(s){return new Promise(function(a,t){setTimeout(function(){a(-1===n.existingUsers.indexOf(s.value))},1e3)})},message:"This username is already taken."}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Async validation of unique value",description:"\n              This example shows how to validate a username uniqueness on input.<br/>\n              The goal is to show:\n              <ul>\n                <li>how to use async validation (A server request is simulated here with a one second timeout).</li>\n              <ul>\n            ",component:o,files:[{file:"app.component.html",content:a("N73K"),filecontent:a("hS/q")},{file:"app.component.ts",content:a("izqx"),filecontent:a("U7QG")},{file:"app.module.ts",content:a("8G27"),filecontent:a("E/Gz")}]}]},l=function(){},u=a("INQx"),c=a("cPG/"),i=a("OGTa"),r=a("z4JO"),m=a("WhiG"),k=a("XPYZ"),d=a("CoID"),f=a("QMRz"),g=a("SSjb"),y=a("tGRr"),b=a("qwng"),v=a("UFNd"),C=a("PV5Z"),F=a("dI39"),h=a("Xjw4"),x=a("S3hu"),w=a("UJsg"),M=a("OiLZ"),O=a("cIfd"),U=a("njCa"),N=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,s){n(s,1,0,s.context.$implicit)})}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Existing usernames"])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275eld"](3,0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](6,802816,null,0,h.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](9,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,11).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,11).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](10,16384,null,0,p["\u0275bf"],[],null,null),t["\u0275did"](11,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](13,16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](15,0,null,null,5,"formly-form",[],null,null,null,x.b,x.a)),t["\u0275did"](16,966656,null,0,w.a,[M.a,O.a,U.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,w.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](18,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,s){var a=s.component;n(s,6,0,a.existingUsers),n(s,11,0,a.form),n(s,16,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,9,0,t["\u0275nov"](s,13).ngClassUntouched,t["\u0275nov"](s,13).ngClassTouched,t["\u0275nov"](s,13).ngClassPristine,t["\u0275nov"](s,13).ngClassDirty,t["\u0275nov"](s,13).ngClassValid,t["\u0275nov"](s,13).ngClassInvalid,t["\u0275nov"](s,13).ngClassPending)})}var q=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,N)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),G=a("9Sd6"),S=a("XHgV"),R=a("1T37"),E=a("+j5Y"),j=a("U/+3"),A=a("Mcof"),I=a("7u3n"),P=a("6sdf"),V=a("z7Rf"),Z=a("ItHS"),z=a("OE0E"),L=a("iLnc"),B=a("ApVT"),J=a("bkcK"),Q=a("Uo70"),W=a("6GVX"),H=a("gsbp"),K=a("EPl/"),X=a("kJ/S"),Y=a("j06o"),_=a("ZuzD"),$=a("sqmn"),nn=a("255V"),sn=a("ixPN"),an=a("rK2e"),tn=function(){},pn=a("bfOx"),on=a("fCQL"),en=a("ByAW"),ln=a("9N4v"),un=a("ykPx"),cn=a("nwY2"),rn=a("TqLH"),mn=a("R2dV"),kn=a("JkuO"),dn=a("BILt"),fn=a("H69Y"),gn=a("j/TD"),yn=a("daWb"),bn=a("Dm6n"),vn=a("8F5j"),Cn=a("WIBo"),Fn=a("MjWI");a.d(s,"ConfigModuleNgFactory",function(){return hn});var hn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,c.a,i.a,r.a,m.a,k.a,d.a,f.a,g.a,y.a,b.a,v.a,C.a,F.a,q]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[t.LOCALE_ID,[2,h["\u0275a"]]]),t["\u0275mpd"](6144,G.b,null,[h.DOCUMENT]),t["\u0275mpd"](4608,G.c,G.c,[[2,G.b]]),t["\u0275mpd"](4608,S.a,S.a,[]),t["\u0275mpd"](5120,R.d,R.b,[[3,R.d],t.NgZone,S.a]),t["\u0275mpd"](5120,R.g,R.f,[[3,R.g],S.a,t.NgZone]),t["\u0275mpd"](4608,E.i,E.i,[R.d,R.g,t.NgZone,h.DOCUMENT]),t["\u0275mpd"](5120,E.e,E.j,[[3,E.e],h.DOCUMENT]),t["\u0275mpd"](4608,E.h,E.h,[R.g,h.DOCUMENT]),t["\u0275mpd"](5120,E.f,E.m,[[3,E.f],h.DOCUMENT]),t["\u0275mpd"](4608,E.c,E.c,[E.i,E.e,t.ComponentFactoryResolver,E.h,E.f,t.ApplicationRef,t.Injector,t.NgZone,h.DOCUMENT]),t["\u0275mpd"](5120,E.k,E.l,[E.c]),t["\u0275mpd"](4608,j.k,j.k,[S.a]),t["\u0275mpd"](4608,j.j,j.j,[j.k,t.NgZone,h.DOCUMENT]),t["\u0275mpd"](136192,j.d,j.b,[[3,j.d],h.DOCUMENT]),t["\u0275mpd"](5120,j.n,j.m,[[3,j.n],[2,j.l],h.DOCUMENT]),t["\u0275mpd"](5120,j.i,j.g,[[3,j.i],t.NgZone,S.a]),t["\u0275mpd"](4608,A.d,A.d,[S.a]),t["\u0275mpd"](135680,A.a,A.a,[A.d,t.NgZone]),t["\u0275mpd"](5120,I.b,I.c,[E.c]),t["\u0275mpd"](4608,P.b,P.b,[]),t["\u0275mpd"](5120,V.d,V.a,[[3,V.d],[2,Z.c],z.c,[2,h.DOCUMENT]]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275i"],p["\u0275i"],[]),t["\u0275mpd"](4608,U.b,U.b,[U.a]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,M.a,M.a,[U.b,O.a]),t["\u0275mpd"](512,h.CommonModule,h.CommonModule,[]),t["\u0275mpd"](512,G.a,G.a,[]),t["\u0275mpd"](512,J.g,J.g,[]),t["\u0275mpd"](512,S.b,S.b,[]),t["\u0275mpd"](512,R.c,R.c,[]),t["\u0275mpd"](512,E.g,E.g,[]),t["\u0275mpd"](256,Q.f,!0,[]),t["\u0275mpd"](512,Q.n,Q.n,[[2,Q.f]]),t["\u0275mpd"](512,j.a,j.a,[]),t["\u0275mpd"](512,A.c,A.c,[]),t["\u0275mpd"](512,I.e,I.e,[]),t["\u0275mpd"](512,Q.x,Q.x,[]),t["\u0275mpd"](512,P.c,P.c,[]),t["\u0275mpd"](512,W.i,W.i,[]),t["\u0275mpd"](512,V.c,V.c,[]),t["\u0275mpd"](512,H.c,H.c,[]),t["\u0275mpd"](512,K.b,K.b,[]),t["\u0275mpd"](512,X.h,X.h,[]),t["\u0275mpd"](512,Y.b,Y.b,[]),t["\u0275mpd"](512,Q.o,Q.o,[]),t["\u0275mpd"](512,Q.v,Q.v,[]),t["\u0275mpd"](512,_.b,_.b,[]),t["\u0275mpd"](512,$.c,$.c,[]),t["\u0275mpd"](512,nn.a,nn.a,[]),t["\u0275mpd"](512,p["\u0275ba"],p["\u0275ba"],[]),t["\u0275mpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,sn.a,sn.a,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,tn,tn,[]),t["\u0275mpd"](512,pn.r,pn.r,[[2,pn.w],[2,pn.o]]),t["\u0275mpd"](512,l,l,[]),t["\u0275mpd"](256,I.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,X.a,!1,[]),t["\u0275mpd"](1024,U.a,function(){return[{types:[{name:"formly-group",component:on.a}]},{types:[{name:"input",component:en.a,wrappers:["fieldset","label"]},{name:"checkbox",component:ln.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:un.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:kn.a},{name:"description",component:dn.a},{name:"validation-message",component:fn.a},{name:"fieldset",component:gn.a},{name:"addons",component:yn.a}],manipulators:[{class:bn.a,method:"run"},{class:vn.a,method:"run"},{class:Cn.a,method:"run"}]},{types:[{name:"formly-group",component:on.a}]},{validationMessages:[{name:"required",message:"This field is required"}]}]},[]),t["\u0275mpd"](1024,pn.m,function(){return[[{path:"",component:Fn.a,data:e}]]},[])])})},"hS/q":function(n,s){n.exports='<b>Existing usernames</b>\n<ul>\n  <li *ngFor="let u of existingUsers">{{ u }}</li>\n</ul>\n\n<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},izqx:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup<span class="token punctuation" >,</span> FormControl <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  existingUsers <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token string" >\'user1\'</span><span class="token punctuation" >,</span>\n    <span class="token string" >\'user2\'</span><span class="token punctuation" >,</span>\n    <span class="token string" >\'user3\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Username\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Username\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      asyncValidators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        uniqueUsername<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          expression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>control<span class="token punctuation" >:</span> FormControl<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >return</span> <span class="token keyword" >new</span> <span class="token class-name" >Promise</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>resolve<span class="token punctuation" >,</span> reject<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n              <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n                <span class="token function" >resolve</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>existingUsers<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>control<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n              <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          message<span class="token punctuation" >:</span> <span class="token string" >\'This username is already taken.\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}});