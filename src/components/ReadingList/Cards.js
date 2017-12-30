import React, {Component} from 'react'

class Cards extends Component {
	render() {
		const TITLE_LENGTH = 35;
		let title = this.props.title;
		if(title.length > TITLE_LENGTH) {
			title = title.slice(0, TITLE_LENGTH-2)+'..';
		}
		return(
		<aside className="card">
			<div className="card__image--wrapper">
				<img className="card__image" src={`${this.props.mobileImage}`} alt={`poster image of book ${this.props.title}`} />
			</div>
			<div className="card--info">
				<h3 className="card__title">{title}</h3>
				<p className="card__author">{this.props.author}</p>
			</div>
		</aside>

		)
	}
}

export default Cards
