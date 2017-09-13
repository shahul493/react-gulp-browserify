import React from "react";
import ReactDOM from "react-dom";
import MainView from "./views/MainView"

var mainView = React.createElement(MainView,{name:"Stranger"}, null);

ReactDOM.render(mainView, document.getElementById("main"));