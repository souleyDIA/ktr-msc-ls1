import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider, defaultTheme } from '@adobe/react-spectrum'
import Profil from './component/register'
import Login from './component/login'

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
                    <Route exact path="/register" component={Profil} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
