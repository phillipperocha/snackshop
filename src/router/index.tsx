import { Switch, Route } from 'react-router-dom'

import ItemShop from 'pages/ItemShop'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ItemShop} />
  </Switch>
)

export default Routes
