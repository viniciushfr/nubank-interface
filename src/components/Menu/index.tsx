import React from  'react';
import QRCode from 'react-native-qrcode'; 
import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated} from 'react-native';

export default function Menu({translateY}){
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 300],
                outputRange: [0, 1],
            })
        }}>
            <Code>
                <QRCode value="https://google.com" size={80} fgColor="#FFF" bgColor="#8B10AE"/>
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}} >
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
            
        </Container>
    )
}