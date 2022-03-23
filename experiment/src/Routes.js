import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import IdeaListing from './containers/ideaListing';
import IdeaDetails from './containers/ideaDetails';
import { AddIdea } from './components/AddIdea';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LoginPage />
                </Route>
                <Route path="/registration" exact>
                    <RegistrationPage />
                </Route>
                <Route path="/idealisting" exact>
                <IdeaListing />
            </Route>
            <Route path="/idea/:ideaId" exact>
            <IdeaDetails />
        </Route>
        <Route path="/add" exact>
        <AddIdea />
    </Route>
            </Switch>
        </Router>
    );
}