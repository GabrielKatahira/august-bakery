import Home from './pages/home/index'
import Products from './pages/products'
import Blog from './pages/blog'
import BlogPost from './pages/blogpost'
import Contact from './pages/contact'
import Cart from './pages/cart'
import { BrowserRouter,Routes,Route} from 'react-router'
import ScrollToTop from './scrolltotop'



function AppRoutes() {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/products' element={<Products></Products>}/>
                <Route path='/blog' element={<Blog></Blog>}/>
                <Route path='/blog/:slug' element={<BlogPost></BlogPost>}/>
                <Route path='/contact' element={<Contact></Contact>}/>
                <Route path='/cart' element={<Cart></Cart>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes