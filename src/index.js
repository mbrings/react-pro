import React from 'react';
import ReactDOM from 'react-dom';
// import Jumbotrom from './component/Jumbotrom';
// import Navbar from './component/Navbar';
import Article from './component/Article';
const article = {
	name: "name",
	content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	author:"mbring" 
};

ReactDOM.render(
    <div>
        <Article name = { article.name } content = { article.content } author = { article.author } />
        <div>i am fine to start react project thanks</div>
    </div>
    ,
    document.getElementById('root')
);