import React from "react"
import PropTypes from "prop-types"

import { Card, CardImgWrapper, Image, CardInfo, Title, Author } from "./style"

export default function Cards(props) {
	const TITLE_LENGTH = 35,
		{ title, mobileImage, author } = props,
		displayTitle = title.length > TITLE_LENGTH ? `${title.slice(0, TITLE_LENGTH - 2)}..` : title

	return (
		<Card>
			<CardImgWrapper>
				<Image src={`${mobileImage}`} alt={`${title}`} />
			</CardImgWrapper>
			<CardInfo>
				<Title>{title}</Title>
				<Author>{author}</Author>
			</CardInfo>
		</Card>
	)
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
