import React from 'react';

import styled from 'styled-components';

import Todo from './Todo';

const TodoListContainer = styled.div`
	width: 40%;
	margin: 10px 30% 0 30%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border: 2px solid #2F4F4F;
`;

const ListHeading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10vh;
	background: #2F4F4F;	
	font-size: 1.2rem;
	color: #FFFFFF;
`;

const TodoList = props => {
	return (
		<TodoListContainer>
			<ListHeading>
				<h2>Task List</h2>
			</ListHeading>
			{props.todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					handleToggleComplete={props.handleToggleComplete}
				/>
			))}
		</TodoListContainer>
	)
};

export default TodoList;