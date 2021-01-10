import styled , {css} from 'styled-components';

interface PropsCardGames {
    image: string;
}

export const Container = styled.div`
    width: 90vw;
    height: auto;
    background:#2c2c38;
    margin: 0 auto;
    display:grid;
`;

export const ContainerDevices = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 100px auto;

`;
export const ContainerGames = styled.div`
    width: 100%;
    height: auto;
    /* background:#2E1437; */
    margin: 20px auto;
    display:flex;
    justify-content:center;   
`;

export const CardGames = styled.img`
    height: 300px;
	width: 100%;
    border: 2px solid transparent;
    border-radius:9px;
    transition: 0.3s;
    object-fit:cover;

    &:hover {
        opacity:0.7;
        cursor: pointer;
    }

`;