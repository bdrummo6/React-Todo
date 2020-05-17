import React from 'react';

import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TodoSearch = props => {
	return (
		<SearchContainer>
			<form>
				<input
					type='text'
					name='search'
					placeholder='Search Todos...'
					onChange={props.handleChange}
					style={{ fontSize: '1.1rem', color: '#2F4F4F'}}
				/>
			</form>
		</SearchContainer>
	)
};

export default TodoSearch;