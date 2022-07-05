/**
 * Biliotecas utilizadas:
 * - yarn add react-native-responsive-fontsize
*/
import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon
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
                    <Icon name="power"/>
                </UserWrapper>         
            </Header>

            <HighlightCard />
        </Container>
    )
}