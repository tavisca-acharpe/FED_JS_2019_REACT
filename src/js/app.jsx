import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const rootElement = document.getElementById("content");

class App extends React.Component {
    render(){
        return <div className="main">
             <Header />
             <Content />
             <Footer />   
        </div>;    
    }
}
ReactDOM.render(<App />,rootElement);