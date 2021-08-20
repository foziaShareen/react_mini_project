function Restaurant(){
    return(
    <>
    <Menu day="saturday" dish="fish"/>,
    <Menu day="sunday" dish="meat"/>,
    <Menu day="tuesday" dish="rice"/>,
    <Menu day="wednesday" dish="veg"/>,
    <Menu day="thursday" dish="soup"/>
    </>)
}
function Menu(props){
    return(
        <h1>today is {props.day} and dish is{props.dish} </h1>
    )
}
ReactDOM.render(React.createElement(Restaurant),document.querySelector("#app"))