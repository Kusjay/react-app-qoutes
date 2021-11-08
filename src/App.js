import { Route, Switch } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuotes from './pages/NewQuotes';

function App() {
  return (
    <switch>
      <Route path='/quotes'>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuotes />
      </Route>
    </switch>
  );
}

export default App;
