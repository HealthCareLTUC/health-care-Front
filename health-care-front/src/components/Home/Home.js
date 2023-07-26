import Reserve from "../Reserve/Reserve"
import { Route, Routes } from 'react-router';

function Home() {
    return(
        <div>
            <Routes> 
            <Route path='/home' element={<Reserve/>}/>
           
            </Routes>
        </div>
    )
}
export default Home