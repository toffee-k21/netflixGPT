import Browse from "./Browse"
import SignIn from "./SignIn"
import React from "react"
import {RouterProvider} from "react-router-dom"
import { createBrowserRouter} from "react-router-dom"

const Body = () => {



const AppRouter  = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: 'browse',
        element : <Browse />
    }
])

return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
)

}

export default Body