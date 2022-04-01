import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import IdeaListing from './containers/ideaListing';
import IdeaDetails from './containers/ideaDetails';
import { AddIdea } from './components/AddIdea';
import { UpdateIdea } from './containers/updateForm';
import { DeletePage } from './containers/deleteIdea';
import AllIdeaListing from './containers/AllIdeaListing';
import AllIdeaDetails from './containers/AllIdeaDetails';

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
        <AddIdea />
    </Route>
    <Route path="/idea/update/:ideaId1" exact>
    <UpdateIdea />
    </Route>
    <Route path="/idea/delete/:ideaId2" exact>
    <DeletePage />
</Route>
<Route path="/allidearepo" exact>
<AllIdeaListing />
</Route>
            </Switch>
        </Router>
    );
}