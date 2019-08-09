import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import {User} from './component/private/User';
import Lost from './component/public/Lost';
import App from './App';

describe("Test APP application", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('router user', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter initialEntries={['/user']}>
                <User/>
            </MemoryRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('router lost', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter initialEntries={['/doesnotexists']}>
                <Lost/>
            </MemoryRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
});