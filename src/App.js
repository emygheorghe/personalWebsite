import './App.css';
import './tailwind.css';
import Header from './Components/Header';
import OutlinedFigure from './Assets/OutlinedFigure';
import HeroBanner from './Sections/herobanner';

function App() {
  return (
    <div className="mt-16">
      <HeroBanner className="bg-[#190f28]" />
    </div>
  );
}

export default App;
