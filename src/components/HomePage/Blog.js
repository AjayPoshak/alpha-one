import React from 'react'
import PropTypes from 'prop-types'

class Blog extends React.PureComponent {
	render() {
		const { heading, synopsis } = this.props

		return (
			<section className="blog-container">
				<div className="__heading">
					<h1>{heading}</h1>
				</div>
				<div className="__synopsis">
					<p>{synopsis}</p>
				</div>
			</section>
		)
	}
}

Blog.defaultProps = {
	heading: '',
	synopsis: ''
}

Blog.propTypes = {
	heading: PropTypes.string,
	synopsis: PropTypes.string
}

export default Blog
