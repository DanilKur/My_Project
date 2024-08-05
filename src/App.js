import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/header';
import Menu from './components/Menu/Menu';
import ScrollProvider from './components/Helper/ScrollContext'
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ScrollProvider>
        <Header/>
        <Menu/>
      </ScrollProvider>
      <Footer/>
    </div>
  );
}

export default App;







