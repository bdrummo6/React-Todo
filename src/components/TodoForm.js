import React from 'react';

import styled from 'styled-components';

const TodoDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const TaskForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto 0;
`;

const TodoBtnsDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 15px;
	margin-bottom: 15px;
	
`;

const TodoBtn = styled.button`
	font-size: 1.1rem;
	font-weight: bold;
	margin-left: 5px;
	color: #2F4F4F;
`;

const TodoForm = props => {
	return (
		<TodoDiv>
			<TaskForm>
				<input
					type='text'
					name='todo'
					placeholder='Input todo item...'
					onChange={props.handleChange}
					value={props.value}
					style={{fontSize: '1.1rem', color: '#2F4F4F'}}
				/>
				<TodoBtnsDiv>
					<TodoBtn onClick={props.addTodo}>Add Todo</TodoBtn>
					<TodoBtn onClick={props.handleClearCompleted}>Clear Complete</TodoBtn>
				</TodoBtnsDiv>
			</TaskForm>
		</TodoDiv>
	)
};

export default TodoForm;