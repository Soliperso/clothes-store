import Header from './components/Header/Header';
import Store from './components/Store/Store';
import './index.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Store />
    </div>
  );
};

export default App;
