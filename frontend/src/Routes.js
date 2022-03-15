import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import Body  from './components/Body';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LoginPage />
                </Route>
                <Route path="/login" exact>
                    <LoginPage />
                </Route>
                <Route path="/registration" exact>
                    <RegistrationPage />
                </Route>
                <Route path="/body" exact>
                    <Body />
                </Route>
            </Switch>
        </Router>
    );
}