<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
import { Provider } from "react-redux";

import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import Browse from "./components/Browse";


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])
<<<<<<< HEAD
=======
=======
import Body from "./components/Body";

>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175


function App() {
  return (
 <div>
<<<<<<< HEAD
  <Provider store={appStore} >
    <RouterProvider router={appRouter}/>
  </Provider>
=======
<<<<<<< HEAD
  <Provider store={appStore} >
    <RouterProvider router={appRouter}/>
  </Provider>
=======
  <Body />
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
 </div>
  );
}

<<<<<<< HEAD



=======
<<<<<<< HEAD



=======
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
export default App;
