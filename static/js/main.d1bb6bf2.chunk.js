(this["webpackJsonpreact-quiz-test"]=this["webpackJsonpreact-quiz-test"]||[]).push([[0],{16:function(e,t,n){},28:function(e,t,n){e.exports=n(42)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),l=n.n(s),c=n(19),o=n(6),i=(n(37),n(8)),u=n(9),m=n(11),h=n(10),d=n(15),p=(n(16),function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Elfogytak a k\xe9rd\xe9sek, v\xe9ge a kv\xedznek!"),r.a.createElement("p",null,"\xd6sszesen ",e.points," pontot gy\u0171jt\xf6tt\xe9l."),r.a.createElement("button",{className:"styledButton",onClick:e.restart},"\xdaj j\xe1t\xe9k"))}),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentQuestion:0,questionAnswered:!1,points:0,currentAnswer:null,activeOne:!1,activeTwo:!1,activeThree:!1,activeFour:!1},e.onNextQuestionHandler=function(){document.getElementById(e.props.questions[e.state.currentQuestion].answer).style.backgroundColor="",e.setState({currentQuestion:e.state.currentQuestion+1,questionAnswered:!1,activeOne:!1,activeTwo:!1,activeThree:!1,activeFour:!1,currentAnswer:null})},e.onGiveAnswerHandler=function(){+e.state.currentAnswer===+e.props.questions[e.state.currentQuestion].answer?(e.setState({questionAnswered:!0,points:e.state.points+1}),alert("Helyes v\xe1lasz gratul\xe1lok!"),document.getElementById(e.props.questions[e.state.currentQuestion].answer).style.backgroundColor="#22d6af"):null===e.state.currentAnswer?alert("V\xe1lassz ki egy v\xe1lasz lehet\u0151s\xe9get!"):(e.setState({questionAnswered:!0}),alert("Rossz v\xe1lasz!"),document.getElementById(e.props.questions[e.state.currentQuestion].answer).style.backgroundColor="#22d6af")},e.getAnswerHandler=function(t){if(!e.state.questionAnswered)switch(e.setState({currentAnswer:t.target.value}),t.target.value){case"1":e.setState({activeOne:!0,activeTwo:!1,activeThree:!1,activeFour:!1});break;case"2":e.setState({activeOne:!1,activeTwo:!0,activeThree:!1,activeFour:!1});break;case"3":e.setState({activeOne:!1,activeTwo:!1,activeThree:!0,activeFour:!1});break;case"4":e.setState({activeOne:!1,activeTwo:!1,activeThree:!1,activeFour:!0})}},e.restartgame=function(){e.props.onRestartGame()},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this;return e=this.state.currentQuestion===this.props.qstNumber?r.a.createElement(p,{points:this.state.points,restart:this.restartgame}):r.a.createElement("div",null,r.a.createElement("p",null,"\xdcdv\xf6z\xf6llek ",this.props.playerName,"! "),r.a.createElement("p",null,this.state.currentQuestion+1,". k\xe9rd\xe9s:"),r.a.createElement("p",null,this.props.questions[this.state.currentQuestion].question),"Els\u0151 v\xe1lasz: ",r.a.createElement("button",{value:"1",id:"1",className:this.state.activeOne?"styledButton active":"styledButton",onClick:function(e){return t.getAnswerHandler(e)}},this.props.questions[this.state.currentQuestion].choiceOne),"\u2003 M\xe1sodik v\xe1lasz: ",r.a.createElement("button",{value:"2",id:"2",className:this.state.activeTwo?"styledButton active":"styledButton",onClick:function(e){return t.getAnswerHandler(e)}},this.props.questions[this.state.currentQuestion].choiceTwo),r.a.createElement("p",null),"Harmadik v\xe1lasz: ",r.a.createElement("button",{value:"3",id:"3",className:this.state.activeThree?"styledButton active":"styledButton",onClick:function(e){return t.getAnswerHandler(e)}},this.props.questions[this.state.currentQuestion].choiceThree),"\u2003 Negyedik v\xe1lasz: ",r.a.createElement("button",{value:"4",id:"4",className:this.state.activeFour?"styledButton active":"styledButton",onClick:function(e){return t.getAnswerHandler(e)}},this.props.questions[this.state.currentQuestion].choiceFour),r.a.createElement("p",null),!1===this.state.questionAnswered&&r.a.createElement("button",{className:"styledButton",onClick:this.onGiveAnswerHandler},"K\xfcld\xe9s"),!0===this.state.questionAnswered&&r.a.createElement("button",{className:"styledButton",onClick:this.onNextQuestionHandler}," ",this.state.currentQuestion===this.props.qstNumber-1?"J\xe1t\xe9k v\xe9ge":"K\xf6vetkez\u0151 k\xe9rd\xe9s"),r.a.createElement("hr",null),r.a.createElement("p",null,"Pontjaid: ",this.state.points),r.a.createElement("p",null,"H\xe1tral\xe9v\u0151 k\xe9rd\xe9sek sz\xe1ma: ",this.props.qstNumber-(this.state.currentQuestion+1)),r.a.createElement("hr",null)),r.a.createElement("div",null,e)}}]),n}(a.Component),E=Object(o.b)((function(e){return{questions:e.Questions,qstNumber:e.numberOfQuestions}}),(function(e){return{onRestartGame:function(){return e({type:"RESTART_GAME"})}}}))(v),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={playerName:"player"},e.startGameHandler=function(){""===e.state.playerName?alert("N\xe9v n\xe9lk\xfcl nem lehet elind\xedtani, k\xe9rlek add meg!"):0===e.props.nmb?alert("Ha nincs k\xe9rd\xe9s hozz\xe1adva an\xe9lk\xfcl nem tudod elind\xedtani, k\xe9rlek adj hozz\xe1 legal\xe1bb 1 k\xe9rd\xe9st!"):e.props.onStartGame()},e.playerNameHandler=function(t){e.setState({playerName:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=null;return t=this.props.started?r.a.createElement(E,{playerName:this.state.playerName}):r.a.createElement("div",null,r.a.createElement("p",null,"Add meg a j\xe1t\xe9kos nevedet!"),r.a.createElement("input",{onChange:function(t){return e.playerNameHandler(t)},value:this.state.playerName}),r.a.createElement("p",null),r.a.createElement("button",{className:"styledButton",onClick:this.startGameHandler},"J\xe1t\xe9k ind\xedt\xe1sa")),r.a.createElement("div",{className:"gameBox"},t)}}]),n}(a.Component),f=Object(o.b)((function(e){return{nmb:e.numberOfQuestions,started:e.hasGameStarted}}),(function(e){return{onStartGame:function(){return e({type:"START_GAME"})}}}))(b),y=n(2),g=(n(38),n(20)),k=(n(39),function(e){return r.a.createElement("div",{className:"question"},r.a.createElement("p",null,"K\xe9rd\xe9s:",e.question.question),r.a.createElement("p",null,"Els\u0151 v\xe1lasz:",e.question.choiceOne," \u2003  M\xe1sodik v\xe1lasz:",e.question.choiceTwo),r.a.createElement("p",null,"Harmadik v\xe1lasz:",e.question.choiceThree," \u2003  Negyedik v\xe1lasz:",e.question.choiceFour),r.a.createElement("p",null,"Helyes v\xe1lasz sorsz\xe1ma:",e.question.answer),r.a.createElement("p",null,r.a.createElement("button",{className:"styledButton",onClick:e.delete},"T\xf6rl\xe9s")))}),O=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,this.props.qst.map((function(t){return r.a.createElement(k,{question:t,key:t.id,delete:function(){return e.props.onDeleteQuestion(t.id)}})}))))}}]),n}(a.Component),w=Object(o.b)((function(e){return{qst:e.Questions}}),(function(e){return{onDeleteQuestion:function(t){return e({type:"DELETE_QUETION",id:t})}}}))(O),T=(n(40),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={question:"",choiceOne:"",choiceTwo:"",choiceThree:"",choiceFour:"",answer:1},e.handleInputChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(g.a)({},r,a))},e.handleSubmit=function(t){""===e.state.question||""===e.state.choiceOne||""===e.state.choiceTwo||""===e.state.choiceThree||""===e.state.choiceFour?alert("Ki kell t\xf6lteni az \xf6sszes mez\u0151t, ahhoz hogy k\xe9rd\xe9st hozz\xe1add."):(e.props.onAddQuestion(e.state.question,e.state.choiceOne,e.state.choiceTwo,e.state.choiceThree,e.state.choiceFour,e.state.answer),e.setState({question:"Add meg a k\xe9rd\xe9st...",choiceOne:"",choiceTwo:"",choiceThree:"",choiceFour:"",answer:1})),t.preventDefault()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"formAdd"},r.a.createElement("div",{className:"scroll"},r.a.createElement(w,{questionArray:this.props.qst})),r.a.createElement("form",{className:"addQuestion",onSubmit:this.handleSubmit},"K\xe9rd\xe9s hozz\xe1ad\xe1sa:",r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("label",null,"K\xe9rd\xe9s:",r.a.createElement("input",{name:"question",type:"text",value:this.state.question,onChange:this.handleInputChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"Els\u0151 v\xe1lasz:",r.a.createElement("input",{name:"choiceOne",type:"text",value:this.state.choiceOne,onChange:this.handleInputChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"M\xe1sodik v\xe1lasz:",r.a.createElement("input",{name:"choiceTwo",type:"text",value:this.state.choiceTwo,onChange:this.handleInputChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"Harmadik v\xe1lasz:",r.a.createElement("input",{name:"choiceThree",type:"text",value:this.state.choiceThree,onChange:this.handleInputChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"Negyedik v\xe1lasz:",r.a.createElement("input",{name:"choiceFour",type:"text",value:this.state.choiceFour,onChange:this.handleInputChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"Melyik a helyes v\xe1lasz?",r.a.createElement("select",{name:"answer",value:this.state.answer,onChange:this.handleInputChange},r.a.createElement("option",{value:"1"},"Els\u0151"),r.a.createElement("option",{value:"2"},"M\xe1sodik"),r.a.createElement("option",{value:"3"},"Harmadik"),r.a.createElement("option",{value:"4"},"Negyedik")))),r.a.createElement("hr",null),r.a.createElement("input",{type:"submit",value:"Ment\xe9s"})))}}]),n}(a.Component)),q=Object(o.b)((function(e){return{qst:e.Questions}}),(function(e){return{onAddQuestion:function(t,n,a,r,s,l){return e({type:"ADD_QUESSTION",question:t,cone:n,ctwo:a,cthree:r,cfour:s,ans:l})}}}))(T),j=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.running&&(window.confirm("Biztos el szeretn\xe9d hagyni az oldalt? M\xe9g nem fejezted be a j\xe1t\xe9kot.")?e.props.restartPage():t.preventDefault())},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){this.props.restartPage()}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("header",{className:"menu"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/game"},"J\xe1t\xe9k")),r.a.createElement("li",null,r.a.createElement(d.b,{onClick:this.handleClick,to:"/questions"},"K\xe9rd\xe9sek"))))),r.a.createElement(y.a,{from:"/*",to:"/game"}),r.a.createElement(y.b,{path:"/game",exact:!0,component:f}),r.a.createElement(y.b,{path:"/questions",exact:!0,component:q})))}}]),n}(r.a.Component),z=Object(o.b)((function(e){return{running:e.hasGameStarted}}),(function(e){return{restartPage:function(){return e({type:"RESTART_GAME"})}}}))(j),Q=n(12),A={isThereQuestion:!1,Questions:[],numberOfQuestions:0,hasGameStarted:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUESSTION":var n={question:t.question,choiceOne:t.cone,choiceTwo:t.ctwo,choiceThree:t.cthree,choiceFour:t.cfour,answer:t.ans,id:Date.now()};return Object(Q.a)(Object(Q.a)({},e),{},{numberOfQuestions:e.numberOfQuestions+1,Questions:e.Questions.concat(n)});case"DELETE_QUETION":var a=e.Questions.filter((function(e){return e.id!==t.id}));return Object(Q.a)(Object(Q.a)({},e),{},{numberOfQuestions:e.numberOfQuestions-1,Questions:a});case"START_GAME":return Object(Q.a)(Object(Q.a)({},e),{},{hasGameStarted:!0});case"RESTART_GAME":return Object(Q.a)(Object(Q.a)({},e),{},{hasGameStarted:!1});default:return e}},S=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),C=Object(c.b)(N,S);C.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(C.getState())})),l.a.render(r.a.createElement(o.a,{store:C},r.a.createElement(z,null)),document.getElementById("root"));t.default=C}},[[28,1,2]]]);
//# sourceMappingURL=main.d1bb6bf2.chunk.js.map