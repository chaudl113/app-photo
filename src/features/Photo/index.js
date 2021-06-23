import React from 'react';
import {Route,Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEdit from './AddEdit';
import Main from './Main';

const Photo = () => {
    const match = useRouteMatch();
    return (
      <Switch>
          <Route exact path={match.url} component={Main} />
          <Route path={`${match.url}/add`} component={AddEdit} />
          <Route  path={`${match.url}/add/:photoId`} component={AddEdit} />
          <Route component={NotFound}/>
      </Switch>
    )
}

export default Photo
