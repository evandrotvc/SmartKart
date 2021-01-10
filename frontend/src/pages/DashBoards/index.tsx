import React , {useState}from 'react';

import Card from '../../components/Card'
import Carrosel from 'react-elastic-carousel';
import image from '../../assets/mouseDark.png'
import {ContainerDevices,Container,ContainerGames, CardGames} from './styles';
const Dashboard : React.FC = () => {
    const breakPoint = [
        {width: 100 , itemsToShow: 1},
        {width: 300 , itemsToShow: 2},
        {width: 550 , itemsToShow: 3},
        {width: 750 , itemsToShow: 4},
        {width: 1200 , itemsToShow: 3},
        {width: 1500 , itemsToShow: 4},
    ]
    return (
        <Container>
            <ContainerGames>
                <Carrosel isRTL = {false}  breakPoints = {breakPoint}  >
                    <CardGames src = {"https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png"} />
                    <CardGames src = {"https://upload.wikimedia.org/wikipedia/pt/7/7b/Sekiro_Shadows_Die_Twice_capa.png"} />            
                    <CardGames src = {"https://upload.wikimedia.org/wikipedia/pt/7/7b/Sekiro_Shadows_Die_Twice_capa.png"} />            
                    <CardGames src = {"https://upload.wikimedia.org/wikipedia/pt/7/7b/Sekiro_Shadows_Die_Twice_capa.png"} />            
                    <CardGames src = {"https://bdjogos.com.br/capas/3423-Final-Fantasy-VII-Remake-Playstation-4-capa-1.jpg"} />
                </Carrosel>
            </ContainerGames>

            <ContainerDevices>
                <Card name= {"Mouse Gamer G403 Hero Logitech"} image= {image} price={50}></Card>
                <Card name= {"HeadSet - Hyper X Cloud"}  price={90} image= {"https://img.terabyteshop.com.br/produto/g/headset-gamer-marvo-scorpion-hg8928-pretovermelho_84626.png"}></Card>
                <Card name= {"The last of Us 2"}  price={90} image= {"https://www.dlf.pt/dfpng/middlepng/81-817983_mousepad-hd-png-download.png"}></Card>
                <Card name= {"GABINETE GAMER AZZA CELESTA 340"}  price={90} image= {"https://img.terabyteshop.com.br/produto/g/gabinete-gamer-gamemax-infinit-m908-rgb-black-mid-tower-sfonte_43635.png"}></Card>
                <Card name= {"KaBuM! - Gabinete Gamer"}  price={90} image= {"https://http2.mlstatic.com/D_NQ_NP_636363-MLB41579129745_042020-V.jpg"}></Card>
                {/* <Card name= {"The last of Us 2"}  price={90} image= {"https://s3.amazonaws.com/comparegame/thumbnails/42666/large.jpg"}></Card> */}
            </ContainerDevices>
        </Container>
    );
}

export default Dashboard;