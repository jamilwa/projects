import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import IdeaListing from './containers/ideaListing';
import IdeaDetails from './containers/ideaDetails';
import { UpdateIdea } from './containers/updateForm';
import AllIdeaListing from './containers/AllIdeaListing';
import AllIdeaDetails from './containers/AllIdeaDetails';
import { AddForm } from './containers/AddForm';

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
        <Route path="/allidea/:ideaId3" exact>
            <AllIdeaDetails />
        </Route>
        <Route path="/add" exact>
        <AddForm />
    </Route>
    <Route path="/idea/update/:ideaId1" exact>
    <UpdateIdea />
    </Route>
<Route path="/allidearepo" exact>
<AllIdeaListing />
</Route>
            </Switch>
        </Router>
    );
}