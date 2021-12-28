import Footer from "../ui/Footer"
import { Nav } from "../ui/Nav"

const Layout = ({children}) => {
    return (
        <div>
            <Nav/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout