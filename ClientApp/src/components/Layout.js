import React from 'react';
import Header from './Header';
import { Container } from 'reactstrap'; 

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <div className="container-fluid">
                {children}
            </div>
        </Container>
    );
};
