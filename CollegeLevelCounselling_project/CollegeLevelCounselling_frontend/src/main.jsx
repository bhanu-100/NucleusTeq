import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Home/Home.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import Forgot from './components/Forgot/Forgot.jsx'
import UpdateSeats from './components/AdmissionOfficer/UpdateSeats.jsx'
import StudentApplications from './components/AdmissionOfficer/StudentApplications.jsx'
import AddAdmissionOfficer from "./components/Admin/AddAdmissionOfficer.jsx"
import RemoveAdmissionOfficer from "./components/Admin/RemoveAdmissionOfficer.jsx"
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
        path:"forgot",
        element:<Forgot/>
      },
      {
        path:"addAdmissionOfficer",
        element:<AddAdmissionOfficer/>
      },
      {
        path:"removeAdmissionOfficer",
        element:<RemoveAdmissionOfficer/>
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
        path:"updateSeats",
        element:<UpdateSeats/>
      },
      {
        path:"studentApplications",
        element:<StudentApplications/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
