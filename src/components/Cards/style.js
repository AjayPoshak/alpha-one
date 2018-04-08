import styled from "styled-components"
import * as variables from "../../styles/variables"

export const Card = styled.aside`
	max-height: 260px;
	display: inline-block;
	margin: 10px 10px 10px 0;
	background: ${variables.themeWhite};
	border-radius: 10px;
`

export const CardImgWrapper = styled.div`
	width: 100%;
	height: 100%;
`
export const Image = styled.img`
	display: block;
	margin: 0 auto;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`
export const CardInfo = styled.div`
	width: 80%;
	margin: 0 auto;
	position: relative;
`
export const Title = styled.h3`
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
export const Author = styled.p`
	font-weight: normal;
	font-size: 12px;
	color: #666;
	padding: 30px 0 2px 0;
`
