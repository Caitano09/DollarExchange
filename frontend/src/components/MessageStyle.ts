import styled from 'styled-components';

export const Message = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    background: #bdbdbd;
	font-size: .9rem;
    width: 100%;
    height: 90px;
    border-radius: 15px;

	@media screen and (min-width: 480px){
		font-size: 1rem;
		border-radius: 20px;
		width: 420px;
	}
`


