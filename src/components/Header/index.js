import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isHamburgerClosed: true
		}
		this.handleHamClick = this.handleHamClick.bind(this)
	}

	handleHamClick() {
		this.setState({
			isHamburgerClosed: !this.state.isHamburgerClosed
		})
	}

	render() {
		return (
			<section className="top-section">
				<div className="blog-header">
					<div
						onClick={this.handleHamClick}
						onKeyPress={this.handleHamClick}
						role="button"
						tabIndex="0"
					>
						<img
							className="__ham"
							src="http://res.cloudinary.com/ddbxa4afa/image/upload/v1521130892/ham_fsbm9r.png"
							alt=""
						/>
					</div>
					<p className="__title">The Late Night Blog</p>
					<p />
				</div>
				<div
					className={`ham-expand ${this.state.isHamburgerClosed ? "__close" : "__open"}`}
				>
					<ul>
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/reading">Reading List</Link>
						</li>
						<li>
							<Link to="/bio">Bio</Link>
						</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default Header
