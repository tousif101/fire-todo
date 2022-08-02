import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Navbar'
import Profile from './Components/pages/Profile'
import SignIn from './Components/pages/SignIn'
import SignUp from './Components/pages/SignUp'
import ForgotPassword from './Components/pages/ForgotPassword'
import ToDo from './Components/ToDo'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Explore will be our Intro page */}
          {/* <Route path='/' element={<ToDo />} /> */}
          {/* Make / into a private route*/}
          <Route path='/' element={<ToDo />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  )
}

export default App