import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const Layout = () => {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      <Header />
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
