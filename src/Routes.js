    import React from 'react';
    import {BrowserRouter,  Route } from 'react-router-dom';
    import Amanda from './Pages/Amanda';
    import Daiane from './Pages/Daiane';
    import Cris from './Pages/Cris';
    import Kevin from './Pages/Kevin';
    import Thais from './Pages/Thais';

    function Routes() {
    return (
        <BrowserRouter> 
        <Routes>
        <Route exact path="/Amanda" component={Amanda} />
        <Route exact path="/Daiane" component={Daiane} />
        <Route exact path="/Cris" component={Cris} />
        <Route exact path="/Kevin" component={Kevin} />
        <Route exact path="/Thais" component={Thais} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default Routes;