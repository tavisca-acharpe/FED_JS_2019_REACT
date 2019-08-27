import React from "react";

class Content extends React.Component {
    render(){
        return <section>
        <nav>
        <ul>
        <li><a className="active" href="index.html">Country</a></li>
        <li><a href="#India">India</a></li>
        <li><a href="#London">London</a></li>
        <li><a href="#Paris">Paris</a></li>
        <li><a href="index.html">Logout</a></li>
        </ul>
        </nav>
        <article>
        <div className="search-container">
        <input type="text"  list="datalist" id ="myInput" onKeyUp={e => search(e.target.value)} placeholder="Search for city......"/>
        <input  type="button" onClick={AddFunction} value="Add"/>      
            <datalist id="datalist" >
            </datalist>
        </div>
        <table id="table" >
        </table>
        </article>
        </section>;
    }
}
module.exports = Content;