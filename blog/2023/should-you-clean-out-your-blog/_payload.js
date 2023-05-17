export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){I.metadata={tags:[]};I.sys={space:{sys:{type:d,linkType:h,id:i}},id:"6Fk3J1WEn0YRhIGUawl63P",type:s,createdAt:J,updatedAt:J,environment:{sys:{id:j,type:d,linkType:k}},revision:f,locale:l};I.fields={title:"clutter",description:"A cluttered office desk",file:{url:"\u002F\u002Fimages.ctfassets.net\u002Fl1wujzr3g1ab\u002F6Fk3J1WEn0YRhIGUawl63P\u002Fa98a9a5ba72aef1afc04111bc7a9e5f9\u002Fclutter.jpg",details:{size:281805,image:{width:t,height:u}},fileName:"clutter.jpg",contentType:"image\u002Fjpeg"}};L.metadata={tags:[]};L.sys={space:{sys:{type:d,linkType:h,id:i}},id:"5GKjEQKbXAneX7HsUv1qtm",type:p,createdAt:"2023-01-22T21:55:27.965Z",updatedAt:"2023-01-24T08:10:50.331Z",environment:{sys:{id:j,type:d,linkType:k}},revision:13,contentType:{sys:{type:d,linkType:v,id:H}},locale:l};L.fields={title:"@media (hover: hover) - CSS Media Query",slug:"hover-css-media-query",image:M,description:"The hover CSS media feature can be used to test whether the user's primary input mechanism can hover over elements.",publishDate:"2020-07-06",tags:["CSS"],body:{nodeType:q,data:{},content:[{nodeType:O,data:{},content:[{nodeType:b,data:{},content:[{nodeType:a,value:"The `hover` CSS media feature can be used to test whether the user's primary input mechanism can hover over elements.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:P,marks:[],data:{}},{nodeType:e,data:{uri:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FCSS\u002F@media\u002Fhover"},content:[{nodeType:a,value:"MDN web docs",marks:[],data:{}}]},{nodeType:a,value:o,marks:[],data:{}}]}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Not to be confused with the ",marks:[],data:{}},{nodeType:a,value:":hover",marks:[{type:c}],data:{}},{nodeType:a,value:" psuedo selector, this is a ",marks:[],data:{}},{nodeType:a,value:"media query",marks:[{type:w}],data:{}},{nodeType:a,value:" you may have never used or never considered using.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Let's look at an example and see how it could be improved using the ",marks:[],data:{}},{nodeType:a,value:m,marks:[{type:c}],data:{}},{nodeType:a,value:" media query.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Let's assume we're using this HTML for the below demonstration.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"HTML\n\u003Cbutton class=\"button\"\u003E\n  Hover me\r\n  \u003Csvg\u003E...\u003C\u002Fsvg\u003E\r\n\u003C\u002Fbutton\u003E\r",marks:[{type:c}],data:{}}]},{nodeType:n,data:{},content:[{nodeType:a,value:"Showing an icon on hover\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"This is a typical feature request. It's not very detailed, but as front-end developers, it's enough for us to work with and create a prototype button at the least.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"For this to work, we may jump to do something like this:\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"CSS\n.button {\r\n  background: darkorange;\r\n  color: white;\r\n  border: none;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\n\r\n.button svg {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.6rem;\r\n  fill: currentColor;\r\n  opacity: 0;\r\n}\n\r\n.button:hover {\r\n  padding-right: 3rem;\r\n}\n\r\n.button:hover svg {\r\n  opacity: 1;\r\n}",marks:[{type:c}],data:{}},{nodeType:a,value:o,marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"This would for sure show the icon when the button is hovered! 💪 But it doesn't work on my mobile... It doesn't know I'm hovering the button.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"So, how do we cater for touchscreen devices that can't hover? A common solution would be to always display the icon on _mobile devices (take note of this, I will come back to it later)_ and add the hovering functionality for larger screens by using a ",marks:[],data:{}},{nodeType:a,value:x,marks:[{type:c}],data:{}},{nodeType:a,value:" media query, typically these are screens that are 768px or wider:\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"CSS\n.button {\r\n  background: darkorange;\r\n  color: white;\r\n  border: none;\r\n  padding: 1rem;\r\n  padding-right: 3rem;\r\n  text-align: center;\r\n  position: relative;\r\n}\n\r\n.button svg {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.6rem;\r\n  fill: currentColor;\r\n  opacity: 1;\r\n}\n\r\n@media (min-width: 768px) {\r\n  .button {\r\n    padding-right: 1rem;\r\n    cursor: pointer;\r\n  }\n\r\n  .button svg {\r\n    opacity: 0;\r\n  }\n\r\n  .button:hover {\r\n    padding-right: 3rem;\r\n  }\n\r\n  .button:hover svg {\r\n    opacity: 1;\r\n  }\r\n}",marks:[{type:c}],data:{}},{nodeType:a,value:o,marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Great! We now have a button that always shows the icon on devices with a screen width less than 768px and will initially hide the icon on devices with a screen width of 768px wide or wider.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Chances are, this works for most cases and has been an acceptable solution for many years. However, we can't assume a device doesn't have a hover input mechanism just because of its screen width, and vice-versa.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"This is where our `hover` media query comes in. Let's take a look at how we can refactor our ",marks:[],data:{}},{nodeType:a,value:x,marks:[{type:c}],data:{}},{nodeType:a,value:" to use ",marks:[],data:{}},{nodeType:a,value:m,marks:[{type:c}],data:{}},{nodeType:a,value:" instead.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"CSS\n.button {\r\n  background: darkorange;\r\n  color: white;\r\n  border: none;\r\n  padding: 1rem;\r\n  padding-right: 3rem;\r\n  text-align: center;\r\n  position: relative;\r\n}\n\r\n.button svg {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0.6rem;\r\n  fill: currentColor;\r\n  opacity: 1;\r\n}\n\r\n@media (hover: hover) {\r\n  .button {\r\n    padding-right: 1rem;\r\n    cursor: pointer;\r\n  }\n\r\n  .button svg {\r\n    opacity: 0;\r\n  }\n\r\n  .button:hover {\r\n    padding-right: 3rem;\r\n  }\n\r\n  .button:hover svg {\r\n    opacity: 1;\r\n  }\r\n}",marks:[{type:c}],data:{}},{nodeType:a,value:o,marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Outside any media query, we define our base styles that apply to everything. Inside our ",marks:[],data:{}},{nodeType:a,value:m,marks:[{type:c}],data:{}},{nodeType:a,value:" media query, we define styles specific to devices with a hover input mechanism.\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"Can you see how this is better than determining hover-specific styles based on screen size?\r",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"It's also a cleaner method because we define our ",marks:[],data:{}},{nodeType:a,value:m,marks:[{type:w}],data:{}},{nodeType:a,value:" styles in our ",marks:[],data:{}},{nodeType:a,value:m,marks:[{type:w},{type:c}],data:{}},{nodeType:a,value:" media query, it's grouped them nicely for us. These ",marks:[],data:{}},{nodeType:a,value:m,marks:[{type:c}],data:{}},{nodeType:a,value:" styles would be harder to identify in the stylesheet if they were encapsulated in a ",marks:[],data:{}},{nodeType:a,value:x,marks:[{type:c}],data:{}},{nodeType:a,value:" media query.\r",marks:[],data:{}}]},{nodeType:"hr",data:{},content:[]},{nodeType:b,data:{},content:[{nodeType:a,value:"For a working example, I created a CodePen below (with a few extra CSS properties) that I hope will help 🙂.",marks:[],data:{}}]},{nodeType:b,data:{},content:[{nodeType:a,value:"\r\n",marks:[],data:{}},{nodeType:e,data:{uri:"https:\u002F\u002Fcodepen.io\u002Fjackdomleo7\u002Fembed\u002FjOWZRXX"},content:[{nodeType:a,value:"CodePen: hover: hover media query",marks:[],data:{}}]},{nodeType:a,value:o,marks:[],data:{}}]}]}};M.metadata={tags:[]};M.sys={space:{sys:{type:d,linkType:h,id:i}},id:"1BWwf3Fg2A0y1RhcY7oNqq",type:s,createdAt:N,updatedAt:N,environment:{sys:{id:j,type:d,linkType:k}},revision:f,locale:l};M.fields={title:"css=hover-media-query-og",description:"CSS media query for hover",file:{url:"\u002F\u002Fimages.ctfassets.net\u002Fl1wujzr3g1ab\u002F1BWwf3Fg2A0y1RhcY7oNqq\u002F0dadb7c242364de5ac4f5b63dd57f1b6\u002Fcss_hover-media-query-og.png",details:{size:13019,image:{width:t,height:u}},fileName:"css=hover-media-query-og.png",contentType:D}};return {data:{$siNM9WAguS:{metadata:{tags:[]},sys:{space:{sys:{type:d,linkType:h,id:i}},id:"2HwSTbJwsbPDLabrSltaa3",type:s,createdAt:C,updatedAt:C,environment:{sys:{id:j,type:d,linkType:k}},revision:f,locale:l},fields:{title:"Open Graphic",description:"Jack Domleo. Frontend & UX Developer.",file:{url:"\u002F\u002Fimages.ctfassets.net\u002Fl1wujzr3g1ab\u002F2HwSTbJwsbPDLabrSltaa3\u002Fb8c5098e2bfd7f192665fccfa3e3380e\u002Fog.png",details:{size:8570,image:{width:t,height:u}},fileName:"og.png",contentType:D}}},$mMA9bTNYLP:{metadata:{tags:[]},sys:{space:{sys:{type:d,linkType:h,id:i}},id:"6LjVGiRVd7SMt9ewdVBNbQ",type:p,createdAt:"2023-01-01T15:40:18.235Z",updatedAt:"2023-03-31T21:14:00.273Z",environment:{sys:{id:j,type:d,linkType:k}},revision:11,contentType:{sys:{type:d,linkType:v,id:"footer"}},locale:l},fields:{name:"Footer",quickLinks:[{id:"dbd24c1c-5840-4132-af46-08b3762b393b",key:"Home",value:"\u002F"},{id:"3b093617-4c9c-41b7-ab57-72a53a2cb400",key:"Blog",value:E},{id:"6d25b987-cc30-4b09-93f3-fd6d947c7ffc",key:"Links",value:"\u002Flinks"},{id:"ceaccf06-ba0a-41d5-9202-56beaaa5f242",key:"Projects",value:"\u002Fprojects"}],socialLinks:[{id:"6ca24d29-3228-4215-8b8e-32ad04743b65",key:"GitHub",value:"https:\u002F\u002Fgithub.com\u002Fjackdomleo7"},{id:"46719126-f516-4853-9444-e40cd0576918",key:"CodePen",value:"https:\u002F\u002Fcodepen.io\u002Fjackdomleo7"},{id:"c1581e8d-c729-4232-8944-0f767d94177d",key:"LinkedIn",value:"https:\u002F\u002Flinkedin.com\u002Fin\u002Fjackdomleo7"},{id:"9500d25a-7225-4d13-b3f0-6d31ee4ee9f5",key:"Twitter",value:"https:\u002F\u002Ftwitter.com\u002Fjackdomleo7"}],legalText:{data:{},content:[{data:{},content:[{data:{},marks:[],value:"©2018-2023",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"All rights reserved.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"Jack Domleo",nodeType:a}],nodeType:b}],nodeType:q}}},"article-should-you-clean-out-your-blog":{sys:{type:F},total:f,skip:G,limit:f,items:[{metadata:{tags:[]},sys:{space:{sys:{type:d,linkType:h,id:i}},id:"9dijdAHS9ROnOwXit47NQ",type:p,createdAt:"2023-02-16T21:37:49.894Z",updatedAt:"2023-05-15T20:40:54.892Z",environment:{sys:{id:j,type:d,linkType:k}},revision:2,contentType:{sys:{type:d,linkType:v,id:H}},locale:l},fields:{title:"Should you clean out your blog?",slug:"should-you-clean-out-your-blog",image:I,description:K,publishDate:"2023-02-16",tags:["Tips","Productivity","HTML"],suggestedArticles:[L],body:{data:{},content:[{data:{},content:[{data:{},marks:[],value:K,nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"Old and outdated articles are like dust on a coffee table; they're there for everyone to see until you decide to do something about it.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"There are three reasons why an article should be considered being cleaned from your blog:",nodeType:a}],nodeType:b},{data:{},content:[{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Outdated content - can be rewritten and updated",nodeType:a}],nodeType:b}],nodeType:g},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Outdated content - cannot be rewritten (the topic is no longer relevant)",nodeType:a}],nodeType:b}],nodeType:g},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Subject or style of writing may no longer align with you or your audience",nodeType:a}],nodeType:b}],nodeType:g}],nodeType:y},{data:{},content:[{data:{},marks:[],value:"1. Outdated content - can be rewritten and updated",nodeType:a}],nodeType:n},{data:{},content:[{data:{},marks:[],value:"More often than not, an article's subject or content is likely to become old news.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"Depending on the subject, the time in which an article is considered outdated can vary wildly. Typically, in tech (the main focus of my blog), the average time a particular thing is considered relevant and modern is 18 months. This means, after 18 months of an article being published on a given subject, at least some of its content may no longer be relevant.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"This can be a perfect opportunity to keep your content fresh and your audience trusting your ability to keep up with the times and not show them anything that may no longer be of any use to them.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"There are two ways to rewrite an article, either approach is fine but should be chosen based on preference and the best need for the blog, and both approaches work for articles with a high organic SEO rating that you'll want to maintain - ",nodeType:a},{data:{},marks:[{type:z}],value:"the approach you use may vary between different articles and article subjects within the same blog",nodeType:a},{data:{},marks:[],value:".",nodeType:a}],nodeType:b},{data:{},content:[{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Keep updating the original article keeping it forever evergreen",nodeType:a}],nodeType:b}],nodeType:g},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Writing an entirely new article",nodeType:a}],nodeType:b}],nodeType:g}],nodeType:y},{data:{},content:[{data:{},marks:[],value:"1.1 Keep updating the original article keeping it forever evergreen",nodeType:a}],nodeType:r},{data:{},content:[{data:{},marks:[],value:"This approach is the simpler of the two. Essentially, just keep updating and publishing updates and new content to the original article as if it were a \"living document\".",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"This approach only works, though, if you state, at the top of the article, \"Updated on\" with the date and\u002For time the article was last updated, otherwise, the user won't know how fresh the content is or if the article ever gets updates. This should be stated below the \"Published on\" line to show that this article gets updates. ",nodeType:a},{data:{},marks:[{type:z}],value:"You should refrain, however, from displaying \"Updated on\" if an article has never been updated since \"Updated on\" will show the same date as \"Published on\".",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"The advantage of this method is there is no need for redirects or SEO management. Just update the article's content, publish it and away you go.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"If you're more technical and want an extra potential SEO boost and to improve your article's metadata, you can add the ",nodeType:a},{data:{},marks:[{type:c}],value:"article:modified_time",nodeType:a},{data:{},marks:[],value:" ",nodeType:a},{data:{uri:"https:\u002F\u002Fogp.me\u002F"},content:[{data:{},marks:[],value:"Open Graph metadata",nodeType:a}],nodeType:e},{data:{},marks:[],value:" to the ",nodeType:a},{data:{},marks:[{type:c}],value:A,nodeType:a},{data:{},marks:[],value:" of your HTML.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[{type:c}],value:"HTML\n\u003Chead\u003E\n  \u003Cmeta property=\"og:type\" content=\"article\" \u002F\u003E\n  \u003Cmeta property=\"article:published_time\" content=\"2021-10-31\" \u002F\u003E\n  \u003Cmeta property=\"article:modified_time\" content=\"2023-02-16\" \u002F\u003E\n\u003C\u002Fhead\u003E",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"The disadvantage to this approach is if your blog is architected to show newer articles towards the top, any articles you update will likely still be low down in the list. This can be easily remedied (if it is considered an issue) by either rearchitecting the order to define new articles as the latest published or latest updated or by adding a more advanced filter\u002Fsort functionality.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"1.2 Writing an entirely new article",nodeType:a}],nodeType:r},{data:{},content:[{data:{},marks:[],value:"If updating the same article is not for you and you'd rather write an entirely new article, this should be fine. With a little bit more setup, you can rewrite an article and hopefully have no negative SEO impact.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"This new article should be written as if it were brand new and not a rewrite, whereby you should not reference or link to the old article.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"So that your article can get the best SEO benefit, it's best to delete the old article and set up a ",nodeType:a},{data:{uri:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F301"},content:[{data:{},marks:[],value:"301 (Permanent redirect)",nodeType:a}],nodeType:e},{data:{},marks:[],value:" from the old article URL to the new article URL. By setting up a 301 (Permanent redirect), all the SEO \"juice\" that was earned by the old article will be transferred to the new article, and any backlinks that reference the old article will automatically redirect users to the new version of the article.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"You could alternatively delete the old article and return a ",nodeType:a},{data:{uri:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F404"},content:[{data:{},marks:[],value:"404 (Not found)",nodeType:a}],nodeType:e},{data:{},marks:[],value:" or a ",nodeType:a},{data:{uri:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F410"},content:[{data:{},marks:[],value:"410 (Gone)",nodeType:a}],nodeType:e},{data:{},marks:[],value:" status code, but you won't get the SEO or UX (user experience) benefits that a 301 (Permanent redirect) will give you.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"If you're absolutely intent on keeping and not deleting the old article, there are some steps you could take to ensure the maximum benefit of the new article, such as adding a link at the top of the old article that directs the user to a newer version of the article and adding a ",nodeType:a},{data:{uri:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTML\u002FAttributes\u002Frel#attr-canonical"},content:[{data:{},marks:[],value:"canonical link",nodeType:a}],nodeType:e},{data:{},marks:[],value:" and the ",nodeType:a},{data:{},marks:[{type:c}],value:B,nodeType:a},{data:{},marks:[],value:Q,nodeType:a},{data:{},marks:[{type:c}],value:A,nodeType:a},{data:{},marks:[],value:" of your HTML. The ",nodeType:a},{data:{},marks:[{type:c}],value:R,nodeType:a},{data:{},marks:[],value:" link tells search engines that this page is the same as a different page and all organic SEO earned by this page should be given to the other URL. The ",nodeType:a},{data:{},marks:[{type:c}],value:B,nodeType:a},{data:{},marks:[],value:" Open Graph metadata provides extra information about when the article will expire or is going to expire.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[{type:c}],value:"HTML\n\u003Chead\u003E\n  \u003Clink rel=\"canonical\" href=\"NEW_ARTICLE_URL\" \u002F\u003E\n  \u003Cmeta property=\"og:type\" content=\"article\" \u002F\u003E\n  \u003Cmeta property=\"article:published_time\" content=\"2021-10-31\" \u002F\u003E\n  \u003Cmeta property=\"article:expiration_time\" content=\"2023-02-16\" \u002F\u003E\n\u003C\u002Fhead\u003E",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"The disadvantages to this approach are it may require more setup to properly delete and rewrite an article by adding redirects or metadata, and it could potentially take longer to completely rewrite an article than it would be to update an existing article.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"2. Outdated content - cannot be rewritten (the topic is no longer relevant)",nodeType:a}],nodeType:n},{data:{},content:[{data:{},marks:[],value:"For some topics, it is inevitable that they will reach the point where the entire topic is just no longer relevant. It's not worth rewriting, it can't be updated and it's not adding any value to your blog.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"Over time, old articles where content has not been updated for a long time can often start harming your site's global SEO rating because search engines see this as not keeping content up to date and showing neglect.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"You have two options:",nodeType:a}],nodeType:b},{data:{},content:[{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Delete the article",nodeType:a}],nodeType:b}],nodeType:g},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Keep the article",nodeType:a}],nodeType:b}],nodeType:g}],nodeType:y},{data:{},content:[{data:{},marks:[],value:"2.1 Delete the article",nodeType:a}],nodeType:r},{data:{},content:[{data:{},marks:[],value:"Simply, if the article is providing no value and is not worth rewriting or updating, delete it.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"By default, any backlinks to the article will show a 404 (Not found) error to the user. If you want to provide a better user experience, you could change this to return a 410 (Gone) status code and display a nicer error message that may say \"This article has been removed\" rather than the standard \"Page not found\".",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"Whether you return a 404 (Not found) or a 410 (Gone) status code, according to Google, will not impact SEO any differently.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Currently Google treats 410s (Gone) the same as 404s (Not found), so it’s immaterial to us whether you return one or the other.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:P,nodeType:a},{data:{uri:"https:\u002F\u002Fdevelopers.google.com\u002Fsearch\u002Fblog\u002F2011\u002F05\u002Fdo-404s-hurt-my-site"},content:[{data:{},marks:[],value:"Google Search Central",nodeType:a}],nodeType:e},{data:{},marks:[],value:"",nodeType:a}],nodeType:b}],nodeType:O},{data:{},content:[{data:{},marks:[],value:"2.2 Keep the article",nodeType:a}],nodeType:r},{data:{},content:[{data:{},marks:[],value:"If you've identified an old, outdated article but you've decided you want to keep it, you could implement an ",nodeType:a},{data:{},marks:[{type:c}],value:B,nodeType:a},{data:{},marks:[],value:Q,nodeType:a},{data:{},marks:[{type:c}],value:A,nodeType:a},{data:{},marks:[],value:" of the HTML. This ",nodeType:a},{data:{},marks:[{type:z}],value:"could",nodeType:a},{data:{},marks:[],value:" provide extra information to search engines that you as the author have identified this article as expired, although no one truly knows how search engines rank pages, so this is just an educated guess, but I don't see any negative to adding this metadata.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[{type:c}],value:"HTML\n\u003Chead\u003E\n  \u003Cmeta property=\"og:type\" content=\"article\" \u002F\u003E\n  \u003Cmeta property=\"article:published_time\" content=\"2021-10-31\" \u002F\u003E\n  \u003Cmeta property=\"article:expiration_time\" content=\"2023-02-16\" \u002F\u003E\n\u003C\u002Fhead\u003E",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"To improve user experience, you could add a note to the top of the article that the content is now outdated.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"If you want to go one step further, you could hide this article from the blog, so users searching for new articles won't be able to see this outdated article. But this would still mean anyone with the URL and backlinks will still work.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"3. Subject or style of writing may no longer align with you or your audience",nodeType:a}],nodeType:n},{data:{},content:[{data:{},marks:[],value:"As your blog progresses, your niche, style of writing or attitude may change. This might make some older articles irrelevant to your blog.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"It's very common for blogs to take different turns in their niche as they mature. Your audience may have taken a particular liking to a specific niche that some of your older articles may no longer meet.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"In this case, it's time for a decision. Do you delete these irrelevant articles? Do you keep them? Do you rewrite them or update them? What you do may vary from article to article.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"What do I do?",nodeType:a}],nodeType:n},{data:{},content:[{data:{},marks:[],value:"I tend to do a mixture of all I've mentioned above. There is no set rule, just whatever works for the specific article you're considering cleaning up. So if you ever come across my blog, just know that all the articles on my website may not be all that I've ever written... there are very likely a lot more articles I have deleted than articles that are active on my blog.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"I don't just post my articles on ",nodeType:a},{data:{uri:E},content:[{data:{},marks:[],value:"jackdomleo.dev\u002Fblog",nodeType:a}],nodeType:e},{data:{},marks:[],value:", I also cross-post them onto other blogging platforms, such as ",nodeType:a},{data:{uri:"https:\u002F\u002Fdev.to\u002Fjackdomleo7"},content:[{data:{},marks:[],value:"DEV.to",nodeType:a}],nodeType:e},{data:{},marks:[],value:" and ",nodeType:a},{data:{uri:"https:\u002F\u002Fjackdomleo7.hashnode.dev\u002F"},content:[{data:{},marks:[],value:"Hashnode",nodeType:a}],nodeType:e},{data:{},marks:[],value:", and I use ",nodeType:a},{data:{},marks:[{type:c}],value:R,nodeType:a},{data:{},marks:[],value:" links to send all the SEO \"juice\" from the articles on the blogging platforms straight to the original articles on my website. So when I'm cleaning my blog, I have to also remember to clean the blogging platforms I cross-post to.",nodeType:a}],nodeType:b},{data:{},content:[{data:{},marks:[],value:"TL;DR",nodeType:a}],nodeType:n},{data:{},content:[{data:{},marks:[],value:"Yes, you should clean out your blog and maintain it. It can provide many benefits such as improved SEO and improved user experience. Cleaning your blog does not necessarily mean deleting articles, it simply means keeping on top of your content so your articles can provide the most value to you, your blog and your audience.",nodeType:a}],nodeType:b}],nodeType:q}}}],includes:{Entry:[L],Asset:[M,I]}},$rpzcfBTaqR:{sys:{type:F},total:f,skip:G,limit:f,items:[{fields:{articleDisclaimer:{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Disclaimer: All data and information are correct to the best of my knowledge at the time of writing.",nodeType:a}],nodeType:b}],nodeType:q}},sys:{id:"3Viop9UQLlIrWglTQjk5Bd",type:p}}]}},prerenderedAt:1684285140365}}("text","paragraph","code","Link","hyperlink",1,"list-item","Space","l1wujzr3g1ab","master","Environment","en-GB","hover","heading-2","\r","Entry","document","heading-3","Asset",1200,630,"ContentType","bold","min-width","ordered-list","italic","\u003Chead\u003E","article:expiration_time","2023-02-04T20:48:16.198Z","image\u002Fpng","\u002Fblog","Array",0,"article",{},"2023-02-15T20:26:31.807Z","If like me, you own a blog, you may ask yourself if it's ever a good idea to clean it out from time to time.",{},{},"2023-01-22T21:55:22.730Z","blockquote","- "," Open Graph metadata to the ","canonical"))