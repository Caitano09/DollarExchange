import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 100vh;
	padding: 16px;
	padding-bottom: 0;
	background-color: #212121;
	box-sizing: border-box;
`;

export const DivForm = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	height: 50%;

	@media screen and (min-width: 480px){
		width: 420px;
	}
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #DBC7B8;
    text-align: center;
    margin-bottom: 50px;
    text-transform: uppercase;
`;

export const Input = styled.input`
	padding: 14px;
	border: none;
	border: 1px solid #BDBDBD;
	border-radius: 12px;
	background-color: inherit;
	outline: none;
	color: #BDBDBD;
	font-size: 1rem;
	margin-bottom: 28px;

	:disabled{
		background-color: #757575;
		color: #424242;
		cursor: not-allowed;
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	padding: 16px;
	border-radius: 8px;
	background-color: #DBC7BB;
	color: #424242;
	font-weight: bold;
	font-size: 1rem;
	box-sizing: border-box;
	width: 100%;

	:disabled{
		background-color: #757575;
		color: #424242;
		cursor: not-allowed;
	}
`;

export const Label = styled.label`
	font-size: 1rem;
	color: #BDBDBD;
	margin-bottom: 6px;
`;


