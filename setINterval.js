function OurReact(){
    return React.createElement("div",null,[
      React.createElement("h1",null,"it is done"),
      React.createElement("h1",null,`current time is ${new Date().toLocaleString()}`),
    ])
  
  }
  setInterval(function(){
   ReactDOM.render(React.createElement(OurReact),document.querySelector("#app")) 
  },1000)
  //in html<div id="app"></div>


