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


function App() {
  return (
 <div>
  <Provider store={appStore} >
    <RouterProvider router={appRouter}/>
  </Provider>
 </div>
  );
}




export default App;
