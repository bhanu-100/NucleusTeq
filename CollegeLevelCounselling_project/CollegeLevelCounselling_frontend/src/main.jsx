import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Home/Home.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import SignUp from './components/SignUp/Signup.jsx'
import Forgot from './components/Forgot/Forgot.jsx'
import AdmissionOfficer from "./components/AdmissionOfficer/AdmissionOfficer.jsx"
import Admin from "./components/Admin/Admin.jsx"
import EditStudentDetails from "./components/Student/EditStudentDetails.jsx"
import StudentRegistration from "./components/Student/StudentRegistration.jsx"
import StudentStatus from "./components/Student/StudentStatus.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"signIn",
        element:<SignIn/>
      },
      {
        path:"signUp",
        element:<SignUp/>
      },
      {
        path:"forgot",
        element:<Forgot/>
      },
      {
        path:"admin",
        element:<Admin/>
      },
      {
        path:"studentRegistration",
        element:<StudentRegistration/>
      },
      {
        path:"studentStatus",
        element:<StudentStatus/>
      },
      {
        path:"editStudentDetails",
        element:<EditStudentDetails/>
      },
      {
        path:"admissionOfficer",
        element:<AdmissionOfficer/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
