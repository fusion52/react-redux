import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

// const PageOne = () => {
//   return (
//     <div>
//       PageOne
//       <Link to='/pagetwo'>Navigate to Page Two</Link>
//     </div>
//   );
// };
//
// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       <button>Click Me!</button>
//       <Link to='/'>Navigate to Page One</Link>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          {/* <Route path='/' exact component={PageOne} /> */}
          {/* <Route path='/pagetwo' component={PageTwo} /> */}
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
