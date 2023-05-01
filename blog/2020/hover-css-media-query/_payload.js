export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){y.metadata={tags:[]};y.sys={space:{sys:{type:d,linkType:h,id:i}},id:"1BWwf3Fg2A0y1RhcY7oNqq",type:q,createdAt:z,updatedAt:z,environment:{sys:{id:j,type:d,linkType:k}},revision:e,locale:l};y.fields={title:"css=hover-media-query-og",description:"CSS media query for hover",file:{url:"\u002F\u002Fimages.ctfassets.net\u002Fl1wujzr3g1ab\u002F1BWwf3Fg2A0y1RhcY7oNqq\u002F0dadb7c242364de5ac4f5b63dd57f1b6\u002Fcss_hover-media-query-og.png",details:{size:13019,image:{width:s,height:t}},fileName:"css=hover-media-query-og.png",contentType:u}};return {data:{$siNM9WAguS:{metadata:{tags:[]},sys:{space:{sys:{type:d,linkType:h,id:i}},id:"2HwSTbJwsbPDLabrSltaa3",type:q,createdAt:r,updatedAt:r,environment:{sys:{id:j,type:d,linkType:k}},revision:e,locale:l},fields:{title:"Open Graphic",description:"Jack Domleo. Frontend & UX Developer.",file:{url:"\u002F\u002Fimages.ctfassets.net\u002Fl1wujzr3g1ab\u002F2HwSTbJwsbPDLabrSltaa3\u002Fb8c5098e2bfd7f192665fccfa3e3380e\u002Fog.png",details:{size:8570,image:{width:s,height:t}},fileName:"og.png",contentType:u}}},"article-hover-css-media-query":{sys:{type:v},total:e,skip:w,limit:e,items:[{metadata:{tags:[]},sys:{space:{sys:{type:d,linkType:h,id:i}},id:"5GKjEQKbXAneX7HsUv1qtm",type:m,createdAt:"2023-01-22T21:55:27.965Z",updatedAt:"2023-01-24T08:10:50.331Z",environment:{sys:{id:j,type:d,linkType:k}},revision:13,contentType:{sys:{type:d,linkType:x,id:"article"}},locale:l},fields:{title:"@media (hover: hover) - CSS Media Query",slug:"hover-css-media-query",image:y,description:"The hover CSS media feature can be used to test whether the user's primary input mechanism can hover over elements.",publishDate:"2020-07-06",tags:["CSS"],body:{nodeType:n,data:{},content:[{nodeType:"blockquote",data:{},content:[{nodeType:b,data:{},content:[{nodeType:a,value:"The `hover` CSS media feature can be used to test whether the user's primary input mechanism can hover over elements.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"- ",marks:[],data:{}},{nodeType:A,data:{uri:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FCSS\u002F@media\u002Fhover"},content:[{nodeType:a,value:"MDN web docs",marks:[],data:{}}]},{nodeType:a,value:g,marks:[],data:{}}]}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Not to be confused with the ",marks:[],data:{}},{nodeType:a,value:":hover",marks:[{type:c}],data:{}},{nodeType:a,value:" psuedo selector, this is a ",marks:[],data:{}},{nodeType:a,value:"media query",marks:[{type:o}],data:{}},{nodeType:a,value:" you may have never used or never considered using.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Let's look at an example and see how it could be improved using the ",marks:[],data:{}},{nodeType:a,value:f,marks:[{type:c}],data:{}},{nodeType:a,value:" media query.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Let's assume we're using this HTML for the below demonstration.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"HTML\n\u003Cbutton class=\"button\"\u003E\n  Hover me\r\n  \u003Csvg\u003E...\u003C\u002Fsvg\u003E\r\n\u003C\u002Fbutton\u003E\r",marks:[{type:c}],data:{}}]},{nodeType:"heading-2",data:{},content:[{nodeType:a,value:"Showing an icon on hover\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"This is a typical feature request. It's not very detailed, but as front-end developers, it's enough for us to work with and create a prototype button at the least.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"For this to work, we may jump to do something like this:\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"CSS\n.button {\r\n  background: darkorange;\r\n  color: white;\r\n  border: none;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\n\r\n.button svg {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.6rem;\r\n  fill: currentColor;\r\n  opacity: 0;\r\n}\n\r\n.button:hover {\r\n  padding-right: 3rem;\r\n}\n\r\n.button:hover svg {\r\n  opacity: 1;\r\n}",marks:[{type:c}],data:{}},{nodeType:a,value:g,marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"This would for sure show the icon when the button is hovered! 💪 But it doesn't work on my mobile... It doesn't know I'm hovering the button.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"So, how do we cater for touchscreen devices that can't hover? A common solution would be to always display the icon on _mobile devices (take note of this, I will come back to it later)_ and add the hovering functionality for larger screens by using a ",marks:[],data:{}},{nodeType:a,value:p,marks:[{type:c}],data:{}},{nodeType:a,value:" media query, typically these are screens that are 768px or wider:\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"CSS\n.button {\r\n  background: darkorange;\r\n  color: white;\r\n  border: none;\r\n  padding: 1rem;\r\n  padding-right: 3rem;\r\n  text-align: center;\r\n  position: relative;\r\n}\n\r\n.button svg {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.6rem;\r\n  fill: currentColor;\r\n  opacity: 1;\r\n}\n\r\n@media (min-width: 768px) {\r\n  .button {\r\n    padding-right: 1rem;\r\n    cursor: pointer;\r\n  }\n\r\n  .button svg {\r\n    opacity: 0;\r\n  }\n\r\n  .button:hover {\r\n    padding-right: 3rem;\r\n  }\n\r\n  .button:hover svg {\r\n    opacity: 1;\r\n  }\r\n}",marks:[{type:c}],data:{}},{nodeType:a,value:g,marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Great! We now have a button that always shows the icon on devices with a screen width less than 768px and will initially hide the icon on devices with a screen width of 768px wide or wider.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Chances are, this works for most cases and has been an acceptable solution for many years. However, we can't assume a device doesn't have a hover input mechanism just because of its screen width, and vice-versa.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"This is where our `hover` media query comes in. Let's take a look at how we can refactor our ",marks:[],data:{}},{nodeType:a,value:p,marks:[{type:c}],data:{}},{nodeType:a,value:" to use ",marks:[],data:{}},{nodeType:a,value:f,marks:[{type:c}],data:{}},{nodeType:a,value:" instead.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"CSS\n.button {\r\n  background: darkorange;\r\n  color: white;\r\n  border: none;\r\n  padding: 1rem;\r\n  padding-right: 3rem;\r\n  text-align: center;\r\n  position: relative;\r\n}\n\r\n.button svg {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.6rem;\r\n  fill: currentColor;\r\n  opacity: 1;\r\n}\n\r\n@media (hover: hover) {\r\n  .button {\r\n    padding-right: 1rem;\r\n    cursor: pointer;\r\n  }\n\r\n  .button svg {\r\n    opacity: 0;\r\n  }\n\r\n  .button:hover {\r\n    padding-right: 3rem;\r\n  }\n\r\n  .button:hover svg {\r\n    opacity: 1;\r\n  }\r\n}",marks:[{type:c}],data:{}},{nodeType:a,value:g,marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Outside any media query, we define our base styles that apply to everything. Inside our ",marks:[],data:{}},{nodeType:a,value:f,marks:[{type:c}],data:{}},{nodeType:a,value:" media query, we define styles specific to devices with a hover input mechanism.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Can you see how this is better than determining hover-specific styles based on screen size?\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"It's also a cleaner method because we define our ",marks:[],data:{}},{nodeType:a,value:f,marks:[{type:o}],data:{}},{nodeType:a,value:" styles in our ",marks:[],data:{}},{nodeType:a,value:f,marks:[{type:o},{type:c}],data:{}},{nodeType:a,value:" media query, it's grouped them nicely for us. These ",marks:[],data:{}},{nodeType:a,value:f,marks:[{type:c}],data:{}},{nodeType:a,value:" styles would be harder to identify in the stylesheet if they were encapsulated in a ",marks:[],data:{}},{nodeType:a,value:p,marks:[{type:c}],data:{}},{nodeType:a,value:" media query.\r",marks:[],data:{}}]},{nodeType:"hr",data:{},content:[]},{nodeType:b,data:{},content:[{nodeType:a,value:"For a working example, I created a CodePen below (with a few extra CSS properties) that I hope will help 🙂.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"\r\n",marks:[],data:{}},{nodeType:A,data:{uri:"https:\u002F\u002Fcodepen.io\u002Fjackdomleo7\u002Fembed\u002FjOWZRXX"},content:[{nodeType:a,value:"CodePen: hover: hover media query",marks:[],data:{}}]},{nodeType:a,value:g,marks:[],data:{}}]}]}}}],includes:{Asset:[y]}},$mMA9bTNYLP:{metadata:{tags:[]},sys:{space:{sys:{type:d,linkType:h,id:i}},id:"6LjVGiRVd7SMt9ewdVBNbQ",type:m,createdAt:"2023-01-01T15:40:18.235Z",updatedAt:"2023-03-31T21:14:00.273Z",environment:{sys:{id:j,type:d,linkType:k}},revision:11,contentType:{sys:{type:d,linkType:x,id:"footer"}},locale:l},fields:{name:"Footer",quickLinks:[{id:"dbd24c1c-5840-4132-af46-08b3762b393b",key:"Home",value:"\u002F"},{id:"3b093617-4c9c-41b7-ab57-72a53a2cb400",key:"Blog",value:"\u002Fblog"},{id:"6d25b987-cc30-4b09-93f3-fd6d947c7ffc",key:"Links",value:"\u002Flinks"},{id:"ceaccf06-ba0a-41d5-9202-56beaaa5f242",key:"Projects",value:"\u002Fprojects"}],socialLinks:[{id:"6ca24d29-3228-4215-8b8e-32ad04743b65",key:"GitHub",value:"https:\u002F\u002Fgithub.com\u002Fjackdomleo7"},{id:"46719126-f516-4853-9444-e40cd0576918",key:"CodePen",value:"https:\u002F\u002Fcodepen.io\u002Fjackdomleo7"},{id:"c1581e8d-c729-4232-8944-0f767d94177d",key:"LinkedIn",value:"https:\u002F\u002Flinkedin.com\u002Fin\u002Fjackdomleo7"},{id:"9500d25a-7225-4d13-b3f0-6d31ee4ee9f5",key:"Twitter",value:"https:\u002F\u002Ftwitter.com\u002Fjackdomleo7"}],legalText:{data:{},content:[{data:{},content:[{data:{},marks:[],value:"©2018-2023",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"All rights reserved.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"Jack Domleo",nodeType:a}],nodeType:b}],nodeType:n}}},$rpzcfBTaqR:{sys:{type:v},total:e,skip:w,limit:e,items:[{fields:{articleDisclaimer:{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Disclaimer: All data and information are correct to the best of my knowledge at the time of writing.",nodeType:a}],nodeType:b}],nodeType:n}},sys:{id:"3Viop9UQLlIrWglTQjk5Bd",type:m}}]}},prerenderedAt:1682902779616}}("text","paragraph","code","Link",1,"hover","\r","Space","l1wujzr3g1ab","master","Environment","en-GB","Entry","document","bold","min-width","Asset","2023-02-04T20:48:16.198Z",1200,630,"image\u002Fpng","Array",0,"ContentType",{},"2023-01-22T21:55:22.730Z","hyperlink"))