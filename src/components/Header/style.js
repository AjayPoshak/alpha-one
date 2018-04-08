import styled from "styled-components"

const black = "#000000"
export const BlogHeader = styled.div`
	color: ${black};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 15px;
	padding-right: 15px;
`
export const Title = styled.p`
	line-height: 40px;
`
export const Hamburger = styled.div`
	img {
		height: 30px;
		width: 30px;
	}
`
export const HamExpand = styled.div`
	padding: 0 15px 0 15px;
	display: ${props => (props.closed ? "none" : "block")};
`
export const HamListItem = styled.li`
	padding: 10px 0 10px 0;
	list-style: none;
	border-top: 1px solid #444d56;

	a {
		text-decoration: none;
	}
`
