import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cards from './Cards'
import { shouldFetchReadingList } from './ActionCreators'
import '../../styles/ReadingList.less'

class ReadingList extends Component {
	componentDidMount() {
		this.props.dispatch(shouldFetchReadingList())
	}

	renderCards() {
		const { data } = this.props.readingList
		if (data && data.length > 0) {
			const cardsArr = data.map((book, index) => (
				<Cards
					key={index}
					title={book.title}
					mobileImage={book.mobileImage}
					author={book.author}
				/>
			))
			return cardsArr
		}
		return null
	}
	render() {
		const cards = this.renderCards()

		return (
			<section className="rList">
				<div className="rList--header">
					<h1 className="section--heading">Books</h1>
				</div>
				<div className="rList--card-wrapper">
					<article className="rList--card-container">{cards}</article>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state => ({ readingList: state.readingList }))

ReadingList.defaultProps = {
	readingList: { data: [] }
}

ReadingList.propTypes = {
	readingList: PropTypes.shape({
		data: PropTypes.array
	})
}

export default connect(mapStateToProps)(ReadingList)
