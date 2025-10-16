import Header from '../../components/programming/home/Header'
import Home_html from '../../components/programming/home/Home_html'
import Home_javascript from '../../components/programming/home/Home_javascript'
import Home_python from '../../components/programming/home/Home_python'
import Home_sql from '../../components/programming/home/Home_sql'
import Homecss from '../../components/programming/home/Homecss'

const Index = () => {
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

export default Index;