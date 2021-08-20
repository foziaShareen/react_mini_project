const Dish=[
    {"day":"saturday","dish":"rice",id:"12"}, 
    {"day":"sunday","dish":"mutton",id:"13"}, 
    {"day":"saturday","dish":"meat",id:"14"}, 
    {"day":"monday","dish":"veg",id:"15"}, 
    {"day":"tuesday","dish":"beans",id:"16"}
   ]
   function Restaurant(){
       return(<> <ul>
           {Dish.map(dish=><Menu day={dish.day} dish={dish.dish} key={dish.id} />)}
           </ul>
      
      </> )}
   function Menu(props){
       return( <h1>today is {props.day} and dish is {props.dish} </h1> )
   }
   
      ReactDOM.render(React.createElement(Restaurant),document.querySelector("#app")) 
   
   