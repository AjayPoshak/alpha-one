import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Blog from "./Blog"
import Bio from "./Bio"
import Header from "../Header"
import { fetchBlogsList } from "./ActionCreators"
import "../../styles/homePage.less"

class HomePage extends Component {
	componentDidMount() {
		this.props.dispatch(fetchBlogsList())
		// this.props.dispatch(shouldFetchBio())
	}

	renderBlogs() {
		const { blogs } = this.props.homePage
		console.log(blogs)
		if (blogs && blogs.length > 0) {
			const blogArr = blogs.map((blog, index) => (
				<Blog key={index} heading={blog.heading} synopsis={blog.synopsis} />
			))
			return blogArr
		}
		return []
	}

	renderBio() {
		const { bio } = this.props
		if (bio && Object.keys(bio).length > 0) {
			const { profileImg, name, intro } = { ...bio }
			return <Bio profileImg={profileImg} name={name} intro={intro} />
		}
		return null
	}

	render() {
		const blogs = this.renderBlogs(),
			bio = this.renderBio()

		return (
			<section>
				<Header />
				<section className="home-container">
					<header />
					{blogs}
					<aside>{bio}</aside>
				</section>
			</section>
		)
	}
}

const mapStateToProps = state => ({ homePage: state.homePage })

export default connect(mapStateToProps)(HomePage)
