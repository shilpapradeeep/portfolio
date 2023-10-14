import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/'
import Sidebar from '../Sidebar/'

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main className="drake-main">
          <div id="smooth-wrapper">
            <div id="smooth-content">

                <Outlet />
            </div>
          </div>
      </main>
    </div>
  )
}

export default Layout;
