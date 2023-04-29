// this will create react object 
const heading=React.createElement('h1',{id:"my-heading"},"Welcom");

const intro=React.createElement('p',{id:"my-intro"},"Hello THis is Afzal Khan");

const parent=React.createElement('div',{id:'parent'},[heading,intro])





const root=ReactDOM.createRoot(document.getElementById("root"));




root.render(parent)





/*

attributes of tag... 
 like h1 have an id classess 





*/