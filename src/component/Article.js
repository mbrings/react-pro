import  { Component } from 'react';

const noDirection = "#";
export default class Article extends Component {
	render() {
		return (
			<div className = "article" >
				<div class="article__title">
					<a className="article__name" href = {noDirection}>{ this.props.name }</a>
				</div>
				<div className="article__content">
					<p className="article__paragraph">{ this.props.content }</p>
				</div>
					<div className="article__author">{ this.props.author }</div>	
			</div>
		)
	}
}