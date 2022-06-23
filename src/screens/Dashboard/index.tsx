/**
 * Biliotecas utilizadas:
 * - yarn add react-native-responsive-fontsize
*/
import React from 'react';

import { Text, View } from 'react-native';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    
} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/46384388?v=4'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Tiago</UserName>
                        </User>
                    </UserInfo> 
                </UserWrapper>         
            </Header>
        </Container>
    )
}