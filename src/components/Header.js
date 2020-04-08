import React from 'react'

import styled from 'styled-components';

const Heading = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
	background: #2F4F4F;
`;

const H1 = styled.h1`
	color: #FFFFFF;
	font-size: 2.1rem;
	margin: auto 0;
`;

const Header = props => {
	return (
		<Heading>
			<H1>Todo App</H1>
		</Heading>
	)
};

export default Header;