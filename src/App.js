// import React from 'react'
// // import Counter from './Test/1.Counter/Counter'
// import SignIn from './Test/3.SignIn/SignIn'

// const App = () => {
//   return (
//     <div>
//       {/* <Counter /> */}
// 	  <SignIn />
//     </div>
//   )
// }

// export default App


import React from 'react';
import TodoList from './Test/2.TodoList/components/TodoList';
// import SignIn from './UnitTest/3.SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;