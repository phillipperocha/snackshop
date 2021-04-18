import { Switch, Route } from 'react-router-dom'

import ItemShop from 'pages/ItemShop'
import CartCheckout from 'pages/CartCheckout'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ItemShop} />
    <Route path="/checkout" component={CartCheckout} />
  </Switch>
)

export default Routes
