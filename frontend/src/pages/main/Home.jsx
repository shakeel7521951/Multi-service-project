import Header from '../../components/home/Header'
import Home_html from '../../components/home/Home_html'
import Home_javascript from '../../components/home/Home_javascript'
import Home_python from '../../components/home/Home_python'
import Home_sql from '../../components/home/Home_sql'
import Homecss from '../../components/home/Homecss'

const Home = () => {
  return (
    <div>
        <Header />
        <Home_html />
        <Homecss />
        <Home_javascript/>
        <Home_python />
        <Home_sql />
    </div>
  )
}

export default Home