import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "../../components/Header"
import Cards from "../../components/Cards"
import { shouldFetchReadingList } from "./ActionCreators"

const rList = styled.section`
	width: 100%;
`
const SectionHeading = styled.h1`
	width: 50px;
	margin: 0 auto;
	font-size: 16px;
	font-weight: normal;
	padding: 7px;
`
const BookListCardWrapper = styled.div`
	margin-left: 10px;
	margin-right: 10px;
`
const CardContainer = styled.article`
	width: 100%;
`

class ReadingList extends Component {
	componentDidMount() {
		this.props.dispatch(shouldFetchReadingList())
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
		return (
			<rList>
				<Header />
				<SectionHeading>Books</SectionHeading>
				<BookListCardWrapper>
					<CardContainer>{this.renderCards()}</CardContainer>
				</BookListCardWrapper>
			</rList>
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
