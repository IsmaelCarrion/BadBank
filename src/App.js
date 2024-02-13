import React from 'react';
//import  {createBrowserRouter} from 'react-router-dom';
//import { HashRouter } from 'react-router-dom';
//import  {RouterProvider}  from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/home";
import Createaccount from "./components/createaccount";
import Deposits from "./components/deposits";
import Withdraw from "./components/withdraw";
import Alldata from "./components/alldata";
import Navbarcomponent from "./components/navbar";


// const router = createBrowserRouter([
//   {
//     element:<Navbarcomponent />,
//     children: [
//       {
//         path:'/',
//         element:<Home />
//       },
//       {
//         path:'/createaccount',
//         element:<Createaccount />
//       },
//       {
//         path:'/deposits',
//         element:<Deposits />
//       },
//       {
//         path:'/withdraw',
//         element:<Withdraw />
//       }
//       ,
//       {
//         path:'/alldata',
//         element:<Alldata />
//       }
//     ]
//   }
// ]);


// function App() {
//   return (
//     <div>
//       <RouterProvider router = {router}>
//       </RouterProvider>
//     </div>
//   );
// }


function App() {
  return (
    <HashRouter>
      <Navbarcomponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/alldata" element={<Alldata />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
