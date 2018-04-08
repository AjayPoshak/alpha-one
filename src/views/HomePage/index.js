import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import Blog from "../../components/Blog"
import Bio from "./Bio"
import Header from "../../components/Header"
import { shouldFetchBlogsList } from "./ActionCreators"

const HomeContainer = styled.section`
	padding: 15px;
	background: #fff;
`
class HomePage extends Component {
	componentDidMount() {
		this.props.dispatch(shouldFetchBlogsList())
		// this.props.dispatch(shouldFetchBio())
	}

	renderBlogs() {
		const { blogs } = this.props.homePage
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
				<HomeContainer>
					<header />
					{blogs}
					<aside>{bio}</aside>
				</HomeContainer>
			</section>
		)
	}
}

const mapStateToProps = state => ({ homePage: state.homePage })

export default connect(mapStateToProps)(HomePage)
