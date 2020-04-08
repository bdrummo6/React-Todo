import React from 'react';

import styled from 'styled-components';

const Task = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	color: #2F4F4F;
	margin: 15px 0 10px 20px;
	padding: 2px;
`;

const Span = styled.span`
	font-size: 1.2rem;
	font-weight: bold;
	margin-right: 3px;
`;

const Todo = props => {
	return (
		<Task
			style={props.todo.completed ? { textDecoration: 'line-through', fontWeight: 'normal' } : null}
			onClick={() => props.handleToggleComplete(props.todo.id)}
		>
			<Span>-</Span> {props.todo.task}
		</Task>
	)
};

export default Todo;