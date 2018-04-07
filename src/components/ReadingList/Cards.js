import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const themeWhite = "#fffff"
const Card = styled.aside`
	max-height: 260px;
	display: inline-block;
	margin: 10px 10px 10px 0;
	background: ${themeWhite};
	border-radius: 10px;
`

const CardImgWrapper = styled.div`
	width: 100%;
	height: 100%;
`
const Image = styled.img`
	display: block;
	margin: 0 auto;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`
const CardInfo = styled.div`
	width: 80%;
	margin: 0 auto;
	position: relative;
`
const Title = styled.h3`
	font-weight: 500;
	font-size: 15px;
	padding-bottom: 2px;
	padding-top: 5px;
	height: 43px;
	line-height: 22px;
	vertical-align: middle;
	display: table-cell;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`
const Author = styled.p`
	font-weight: normal;
	font-size: 12px;
	color: #666;
	padding: 30px 0 2px 0;
`
class Cards extends React.PureComponent {
	render() {
		const TITLE_LENGTH = 35
		let { title } = this.props
		if (title.length > TITLE_LENGTH) {
			title = `${title.slice(0, TITLE_LENGTH - 2)}..`
		}
		return (
			<Card>
				<CardImgWrapper>
					<Image src={`${this.props.mobileImage}`} alt={`${this.props.title}`} />
				</CardImgWrapper>
				<CardInfo>
					<Title>{title}</Title>
					<Author>{this.props.author}</Author>
				</CardInfo>
			</Card>
		)
	}
}

Cards.defaultProps = {
	title: "",
	author: "",
	mobileImage: ""
}

Cards.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	mobileImage: PropTypes.string
}

export default Cards
