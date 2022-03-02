import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider, defaultTheme } from '@adobe/react-spectrum'
import Profil from './component/register'
import Login from './component/login'
import Library from './component/library'

function App() {
    return (
        <Provider
            colorScheme="dark"
            theme={defaultTheme}
            scale="large"
            position="relative"
        >
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Profil} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/library" component={Library} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
