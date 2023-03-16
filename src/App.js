import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { ChangeDark } from './Actions/Info';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';


function App() {
  const changeThemeApp=useSelector((state)=>state.darkReducer)
  const dispatch=useDispatch()
  return (
    <div className="App" style={{
      backgroundColor: `${changeThemeApp ? "black" : "white"}`,
      color: `${changeThemeApp ? "#7fffd4" : "black"}`,
    }}>
      <p style={{textAlign:"start"}}>Geekster</p>
      <BrowserRouter>
      <Routes className="router">
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      </BrowserRouter>
     <button style={{display:"flex",justifyContent:"flex-start",margin:"10px 0px"}} onClick={()=>dispatch(ChangeDark())}>Toggle theme to light</button>
     <div className='main' style={{textAlign:"start"}}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
}

export default App;