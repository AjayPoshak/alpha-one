import React from "react"
import PropTypes from "prop-types"

class Bio extends React.PureComponent {
	render() {
		const { profileImg, name, intro } = this.props
		return (
			<section className="bio-container">
				<img src={profileImg} alt={name} />
				<p>{name}</p>
				<p>{intro}</p>
			</section>
		)
	}
}

Bio.defaultProps = {
	profileImg: "",
	name: "Ajay Poshak",
	intro: "Hi there, I am Ajay Poshak."
}

Bio.propTypes = {
	profileImg: PropTypes.string,
	name: PropTypes.string,
	intro: PropTypes.string
}

export default Bio
