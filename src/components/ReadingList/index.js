import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Header from "../Header"
import Cards from "./Cards"
import { fetchReadingList } from "./ActionCreators"
import "../../styles/ReadingList.less"

class ReadingList extends Component {
	componentDidMount() {
		this.props.dispatch(fetchReadingList())
	}

	renderCards() {
		const { data } = this.props.readingList
		return data.map((book, index) => (
			<Cards
				key={index}
				title={book.title}
				mobileImage={book.mobileImage}
				author={book.author}
			/>
		))
	}

	render() {
		const cards = this.renderCards()

		return (
			<section className="rList">
				<Header />
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

const mapStateToProps = state => ({ readingList: state.readingList })

ReadingList.defaultProps = {
	readingList: { data: [] }
}

ReadingList.propTypes = {
	readingList: PropTypes.shape({
		data: PropTypes.arrayOf(
			PropTypes.shape({
				author: PropTypes.string.isRequired,
				excerpts: PropTypes.string,
				mobileImage: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				webImage: PropTypes.string
			})
		)
	}),
	dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(ReadingList)
