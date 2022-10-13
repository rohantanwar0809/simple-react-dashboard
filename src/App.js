import styles from './App.module.scss';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
