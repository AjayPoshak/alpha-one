import React, { Component } from "react"
import { Link } from "react-router-dom"

import { HAM_IMG_URL } from "../../globals/constants"
import { BlogHeader, Hamburger, Title, HamExpand, HamListItem } from "./style"

class Header extends Component {
	constructor() {
		super()
		this.state = {
			isHamburgerClosed: true,
			navLinks: [
				{ text: "Home", link: "/home" },
				{ text: "Reading List", link: "/books" },
				{ text: "Bio", link: "/bio" }
			]
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
			<section>
				<BlogHeader>
					<Hamburger
						onClick={this.handleHamClick}
						onKeyPress={this.handleHamClick}
						role="button"
						tabIndex="0"
					>
						<img className="__ham" src={HAM_IMG_URL} alt="" />
					</Hamburger>
					<Title>The Late Night Blog</Title>
					<p />
				</BlogHeader>
				<HamExpand closed={this.state.isHamburgerClosed}>
					<ul>
						{this.state.navLinks.map((navItem, index) => (
							<HamListItem key={index}>
								<Link to={navItem.link}>{navItem.text}</Link>
							</HamListItem>
						))}
					</ul>
				</HamExpand>
			</section>
		)
	}
}

export default Header
