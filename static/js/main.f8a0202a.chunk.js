(this.webpackJsonpDiverseLit=this.webpackJsonpDiverseLit||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),l=a(1),s=a(2),c=a(4),u=a(3),m=a(5),h=a(14),d=a.n(h),p=a(11),b=a(12),g={race:{noSelect:[],black:[{isbn:9780385686150,title:"Homegoing",author:"Yaa Gyasi"},{isbn:9780399587689,title:"The Proposal",author:"Jasmine Guillory"},{isbn:9780385690324,title:"Black Leopard Red Wolf",author:"Marlon James"},{isbn:9781501168e3,title:"Heads of The Colored People",author:"Nafissa Thompson-Spires"},{isbn:9781443459587,title:"Washington Black",author:"Esi Edugyan"}],indigenous:[{isbn:9780771073038,title:"There There",author:"Tommy Orange"},{isbn:9780385691147,title:"Heart Berries",author:"Terese Marie Mailhot"},{isbn:9781443451352,title:"Birdie",author:"Tracey Lindberg"},{isbn:9780385692380,title:"A Mind Spread Out On The Ground",author:"Alicia Elliott"},{isbn:9781770414006,title:"Moon of the Crusted Snow",author:"Waubgeshig Rice"}],asian:[{isbn:9780804172707,title:"A Little Life",author:"Hanya Yanagihara"},{isbn:9780525432753,title:"The Clothing Of Books",author:"Jhumpa Lahiri"},{isbn:9780062428738,title:"Sick",author:"Porochista Khakpour"},{isbn:9780385693219,title:"The Farm",author:"Joanne Ramos"},{isbn:9780735223707,title:"Know My Name: A Memoir",author:"Chanel Miller"}],latinx:[{isbn:9780525434313,title:"Fruit of the Drunken Tree",author:"Ingrid Rojas Contreras"},{isbn:9780735217737,title:"The Line Becomes a River",author:"Francisco Cant\xfa"},{isbn:9780525511298,title:"Sabrina & Corina",author:"Kali Fajardo-Anstine"},{isbn:9780062662835,title:"With the Fire On High",author:"Elizabeth Acevedo"},{isbn:9780771094507,title:"In The Dream House: A Memoir",author:"Carmen Maria Machado"}]}},f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"fixedHeader",id:"nav"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"title"},r.a.createElement(p.b,{to:"/"},"Diverse Lit",r.a.createElement("span",null,"."))),r.a.createElement("ul",null,r.a.createElement(p.b,{to:"/about"},r.a.createElement("li",null,r.a.createElement("span",{className:"hover"}," About"))),r.a.createElement(p.b,{to:"/blog"},r.a.createElement("li",null,r.a.createElement("span",{className:"hover"},"Blog"))),r.a.createElement(p.b,{to:"/"},r.a.createElement("li",null,r.a.createElement("span",{className:"hover"},"Browse"))))))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"text"}))}}]),t}(n.Component),E={race:[{optionName:"Ethnicity",value:"noSelect"},{optionName:"Asian authors",value:"asian"},{optionName:"Black authors",value:"black"},{optionName:"Indigenous authors",value:"indigenous"},{optionName:"Latinx authors",value:"latinx"}]},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).HandleFilterSelection=function(t){e.setState({category1:t.target.value})},e.state={category1:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filter"},r.a.createElement("select",{onChange:this.HandleFilterSelection,name:"raceCategories"},E.race.map((function(e,t){return r.a.createElement("option",{className:e.value,key:t,value:e.value},e.optionName)}))),r.a.createElement("button",{onClick:function(t){return e.props.getFilteredBooksProps(t,e.state.category1)},type:"submit"},"Filter"))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement("div",{className:"categories",id:"categories"},r.a.createElement("h2",null,"Filter by categories"),r.a.createElement(y,{getFilteredBooksProps:this.props.getFilteredBooksProps})))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"books"},r.a.createElement("ul",null,this.props.bookImg.map((function(t,a){var n=e.props.bookTitles[a],o=e.props.bookAuthors[a],i=e.props.bookISBNs[a];return r.a.createElement("li",{id:i,key:a},r.a.createElement(p.b,{to:{pathname:"/".concat(i),state:{bookISBN:i,bookAuthor:o,bookTitle:n}}},r.a.createElement("div",{className:"hover-button"},r.a.createElement("img",{src:t,alt:n+" by "+o,className:"bookCover"}),r.a.createElement("div",{className:"hoverInfo"},r.a.createElement("p",{className:"moreDetails"},"Book Details \u2192"))),r.a.createElement("div",{className:"bookText"},r.a.createElement("p",{className:"title"},n),r.a.createElement("p",{className:"author"},o))))}))))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"attribution"},r.a.createElement("a",{href:"http://www.andrealacson.com/"},"\xa9 Andrea Lacson"),r.a.createElement("a",{href:"https://www.booknetcanada.ca/biblioshare"},"Data provided by BNC Biblioshare")),r.a.createElement("a",{href:"#nav"},"Back to Top")))}}]),t}(n.Component),N=function(){return r.a.createElement("div",{className:"loadingScreen"},r.a.createElement("h1",null,"Grabbing some books ..."))},O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainPage"},r.a.createElement(k,{getFilteredBooksProps:this.props.getFilteredBooksProps}),r.a.createElement("main",{className:"books",id:"books"},r.a.createElement("div",{className:"wrapper"},this.props.showLoadingScreenProps?r.a.createElement(N,null):null,r.a.createElement(w,{bookISBNs:this.props.bookISBNs,bookImg:this.props.bookImg,bookTitles:this.props.bookTitles,bookAuthors:this.props.bookAuthors})),r.a.createElement(S,null)))}}]),t}(n.Component);var j=function(){return r.a.createElement("div",{className:"aboutPage"},r.a.createElement("header",null,r.a.createElement(f,null),r.a.createElement(v,null)),r.a.createElement("main",{className:"wrapper aboutSection"},r.a.createElement("h2",{className:"sectionTitle"},"About Diverse Lit"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo aperiam facilis adipisci voluptate? Accusantium perspiciatis quae culpa assumenda, repellat dolores quidem tempore, eaque, itaque reiciendis commodi beatae iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magni ullam libero beatae quas. Ex corrupti maxime natus placeat odit alias eligendi rerum qui sapiente molestias. Aperiam aliquid minus, culpa sit nemo repellat ab nulla reiciendis deleniti consequatur exercitationem dolor aut. Aspernatur deleniti similique et dolor provident minus! Quisquam!"),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae saepe fuga pariatur quis quae amet doloremque culpa corrupti ea accusamus! Sunt dolore sequi officia numquam sint adipisci at optio obcaecati exercitationem, suscipit harum soluta quia dolorem deleniti voluptas labore voluptatem odio dolorum molestiae, iure magni neque quam! Veniam, eum asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque aspernatur repellendus id cumque corporis aliquam eveniet in quasi placeat ab libero, saepe maiores itaque?")),r.a.createElement(S,null))},T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"blogPage"},r.a.createElement("header",null,r.a.createElement(f,null),r.a.createElement(v,null)),r.a.createElement("div",{className:"wrapper blogSection"},r.a.createElement("div",{className:"blogInfo"},r.a.createElement("h1",{className:"blogTitle"},"Blog"),r.a.createElement("h2",null,"The Secret Society of Women Writers in Oxford in the 1920s"),r.a.createElement("div",{className:"blogSpecifics"},r.a.createElement("h3",null,"By: Mo Moulton"),r.a.createElement("h4",null,"September 30, 2019"))),r.a.createElement("p",null,"It began in a quiet sort of way, over hot cocoa and toasted marshmallows in a student room at Somerville College, Oxford. One evening in November 1912, some new friends, all first-year students, gathered \u201cto read aloud our literary efforts and to receive and deliver criticism.\u201d They brought stories, poems, essays, plays, and fables, and they received far more than merely criticism. In the firelight, over economical treats, they created a space in which they could grow beyond the limitations of Edwardian girlhood and become complex, creative adults with a radically capacious notion of what it might mean to be both human and female."),r.a.createElement("p",null,"The group was named by its best-known member, Dorothy L. Sayers, who would go on to be a famous detective novelist and popular theologian. Let\u2019s call ourselves the Mutual Admiration Society, she suggested, because that\u2019s what people will call us anyway. The name both captures the spirit of the group and misrepresents it. They supported each other boldly and emphatically: no false modesty or feminine shame here. They were willing to be relentless and did not insist on being liked, crucial qualities for taking advantage of the real but tenuous space they had to work within. But they were the exact opposite of the simple echo chamber of praise that the name could imply, in its pejorative sense. They were critical, and they were at odds. They fell apart and came together again, over the course of decades and remarkable careers that ranged from birth control advocacy to genre fiction, from classrooms to the stage."),r.a.createElement("p",null,"Four members of the Mutual Admiration Society (MAS) are at the heart of this story. Dorothy L. Sayers was known to her friends by her initials, DLS. Serious and a little weird, DLS was absorbed in her study of French literature and fascinated by the Middle Ages and religion. She would gain fame in adulthood as the creator of Lord Peter Wimsey, the aristocratic detective who starred in her mystery novels. Later, she would be equally well known for the essays and plays she wrote to expound her particular understanding of Christianity and personal ethics."),r.a.createElement("p",null,"Muriel St. Clare Byrne, who arrived at Somerville two years later than the others, would become DLS\u2019s closest collaborator. Like DLS, she\u2019d loved tales of knights and chivalry and derring-do as a youngster; as an adult, she paid court to the women who became her lovers and partners, immortalizing the experience in verse and drama. She, too, became a wide-ranging writer, bringing Tudor history and Elizabethan literature to life in popular histories crammed with vivid detail. Charis Barnett, by contrast, was intensely social, enthusiastic, and empathetic, far more interested in people than in ideas. Her career would follow suit, as she raised four children while becoming a nationally known authority and advocate on child-rearing, birth control, maternal mortality, and juvenile delinquency.")),r.a.createElement(S,null))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).getBookDetailsAPI=function(t){return e.setState({showBookLoadingScreen:!0}),d()({method:"GET",url:e.state.jsonAPI,responseType:"json",params:{Get:"Onix",Token:"jg9ngajqfe6vfu3d",EAN:t}}).then((function(t){var a=t.request.response.Product;console.log(a);var n=a.Title.TitleText,r=a.Contributor.PersonName,o=a.Publisher.PublisherName,i=a.MediaFile.MediaFileLink,l=a.OtherText[0].Text,s=a.NumberOfPages,c=n.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),u=l.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),m=o.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),h=new DOMParser,d=h.parseFromString(u,"text/html"),p=h.parseFromString(m,"text/html"),b=h.parseFromString(c,"text/html"),g=d.documentElement.innerHTML,f=p.documentElement.innerText,v=b.documentElement.innerText;e.setState({title:v,contributor:r,publisher:f,cover:i,description:g,pages:s,showBookLoadingScreen:!1,showBookInfo:!0})}))},e.state={isbn:"",jsonAPI:"https://biblioshare.ca/bncservices/JSON.ashx?",title:"",contributor:"",publisher:"",cover:"",authorBio:"",description:"",price:"",pages:"",showBookLoadingScreen:!1,showBookInfo:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.props.data.match.params.isbn,this.setState({isbn:e},(function(){return t.getBookDetailsAPI(t.state.isbn)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"bookPage"},r.a.createElement("header",null,r.a.createElement(f,null)),r.a.createElement("div",{className:"wrapper bookSection"},this.state.showBookLoadingScreen?r.a.createElement(N,null):null,this.state.showBookInfo?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"productInfo"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,this.state.title),r.a.createElement("h2",null,this.state.contributor),r.a.createElement("p",null,this.state.publisher),r.a.createElement("p",null,this.state.pages," pages"),r.a.createElement("p",null,this.state.isbn)),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.state.cover,alt:this.state.title+" by "+this.state.author}))),r.a.createElement("div",{className:"productExtraInfo"},r.a.createElement("h3",null,"Description"),r.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:this.state.description}}))):null),r.a.createElement(S,null))}}]),t}(n.Component),L=(a(59),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).getBookAPI=function(t){return e.setState({showLoadingScreen:!0}),d()({method:"GET",url:e.state.imageAPI,responseType:"json",params:{Token:"jg9ngajqfe6vfu3d",EAN:t,SAN:"",thumbnail:!1}})},e.getAllBooks=function(){for(var t,a,n,r=[],o=[],i=[],l=Object.keys(g.race),s=0;s<l.length;s++)for(var c=g.race[l[s]],u=0;u<c.length;u++)t=c[u].isbn,a=c[u].title,n=c[u].author,r.push(t),o.push(a),i.push(n);e.setState((function(e){return{allIsbns:r,allTitles:o,allAuthors:i}}))},e.getFilteredBooks=function(t,a){for(var n=[],r=[],o=[],i=[],l=[],s=0;s<g.race[a].length;s++)n.push(g.race[a][s].isbn),i.push(g.race[a][s].title),l.push(g.race[a][s].author);e.setState((function(e){return{allIsbns:n,allTitles:i,allAuthors:l}})),setTimeout((function(){e.state.allIsbns.map((function(t){return r.push(e.getBookAPI(t))})),d.a.all(r).then((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];a.map((function(e){return a[0]}));for(var r=0;r<a[0].length;r++)o.push(a[0][r].request.responseURL);e.setState({imageURLs:o,showLoadingScreen:!1})}))}),100)},e.state={allBooks:g,isbn:"",allIsbns:[],allTitles:[],allAuthors:[],imageURLs:[],imageAPI:"https://www.biblioshare.org/BNCServices/BNCServices.asmx/Images?",showLoadingScreen:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getAllBooks(),setTimeout((function(){var t=[],a=[];e.state.allIsbns.map((function(a){return t.push(e.getBookAPI(a))})),d.a.all(t).then((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var o=n.map((function(e){return n[0]})),i=0;i<o[0].length;i++)a.push(o[0][i].request.responseURL),e.setState({imageURLs:a,showLoadingScreen:!1})}))}),250)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{basename:"/DiverseLit"},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,render:function(){return r.a.createElement(O,{bookISBNs:e.state.allIsbns,bookImg:e.state.imageURLs,bookTitles:e.state.allTitles,bookAuthors:e.state.allAuthors,showLoadingScreenProps:e.state.showLoadingScreen,getFilteredBooksProps:e.getFilteredBooks})}}),r.a.createElement(b.a,{path:"/about",component:j}),r.a.createElement(b.a,{path:"/blog",component:T}),r.a.createElement(b.a,{path:"/:isbn",render:function(e){return r.a.createElement(B,{data:e})}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f8a0202a.chunk.js.map