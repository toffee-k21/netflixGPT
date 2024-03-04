<<<<<<< HEAD
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
=======
import Body from "./components/Body";

>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f


function App() {
  return (
 <div>
<<<<<<< HEAD
  <Provider store={appStore} >
    <RouterProvider router={appRouter}/>
  </Provider>
=======
  <Body />
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
 </div>
  );
}

<<<<<<< HEAD



=======
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
export default App;
