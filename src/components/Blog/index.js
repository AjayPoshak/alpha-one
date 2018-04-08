import React from "react"
import PropTypes from "prop-types"

import { BlogContainer, BlogHeading, Synopsis } from "./style"

export default function Blog(props) {
	const { heading, synopsis } = props

	return (
		<BlogContainer>
			<BlogHeading>{heading}</BlogHeading>
			<Synopsis>{synopsis}</Synopsis>
		</BlogContainer>
	)
}

Blog.defaultProps = {
	heading: "",
	synopsis: ""
}

Blog.propTypes = {
	heading: PropTypes.string,
	synopsis: PropTypes.string
}
