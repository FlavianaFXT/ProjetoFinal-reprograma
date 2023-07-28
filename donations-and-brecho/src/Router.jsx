import {BrowserRouter, Routes, Route} from 'react-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Doacoes from './pages/Doacoes'
import Brecho from './pages/Brecho'
import Busqueaqui from './pages/Busqueaqui'
import Faleconosco from './pages/Faleconosco'
import QueroDoar from './pages/QueroDoar'
import QueroDoacoes from './pages/QueroDoacoes'


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/doacoes' element={<Doacoes />} />
                <Route path='/brecho' element={<Brecho />}/>
                <Route path='/busqueaqui' element={<Busqueaqui />}/>
                <Route path='/faleconosco' element={<Faleconosco />}/>
            </Routes>
            <Routes>
                <Route path='/querodoar' element={<QueroDoar />}/>
                <Route path='/querodoacoes' element={<QueroDoacoes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router