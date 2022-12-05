//import ClassComponent from './ClassComponent'
//import Events from './Events'
//import JSX from './JSX'
//import StateExample from './StateExample'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

function App(){
  return(
      <div>
          <BrowserRouter>
              <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
          </BrowserRouter>
      {/*<StateExample/>
      <JSX/>
      <ClassComponent/>
      <Demo car="fortuner Legender" year="2021"/>
      <FuncProps carname="rolls royce" year="1980"/>
      <Events/>*/}
      </div>
          )
        }
export default App; 