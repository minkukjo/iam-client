import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'

export interface IRoute {
  path: string
  component: () => ReactElement
}

export const createRouter = (url: string, routes: IRoute[]) => (
  <Switch>
    {routes.map(({ path, component }, index) => (
      <Route exact key={index} path={`${url}${path}`} component={component} />
    ))}
  </Switch>
)
