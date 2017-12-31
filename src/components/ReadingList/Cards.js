import React from 'react'
import PropTypes from 'prop-types'

class Cards extends React.PureComponent {
	render() {
		const TITLE_LENGTH = 35;
		let { title } = this.props;
		if (title.length > TITLE_LENGTH) {
			title = `${title.slice(0, TITLE_LENGTH - 2)}..`
		}
		return (
			<aside className="card">
				<div className="card__image--wrapper">
					<img className="card__image" src={`${this.props.mobileImage}`} alt={`${this.props.title}`} />
				</div>
				<div className="card--info">
					<h3 className="card__title">{title}</h3>
					<p className="card__author">{this.props.author}</p>
				</div>
			</aside>
		)
	}
}

Cards.defaultProps = {
	title: '',
	author: '',
	mobileImage: ''
}

Cards.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	mobileImage: PropTypes.string
}

export default Cards
