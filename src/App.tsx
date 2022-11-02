import './App.css';
import { Header } from './views/Header/Header';
import { Features } from './views/Features/Features';
import { Pricing } from './views/Pricing/Pricing';
import { Footer } from './views/Footer/Footer';
import { Section1 } from './components/Section/Section1';
import { FAQ } from './views/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Section1 />
      </header>
      <main>
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
