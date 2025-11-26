import './App.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
function App() {
  // const nomi = [
  //   <li key={0}>Alessandro</li>,
  //   <li key={1}>Giulia</li>,
  //   <li key={2}>Marco</li>,
  //   <li key={3}>Elena</li>]
  // const nomi = ["alessandro", "giulia", "marco", "elena"]
  // con il map li trasformo per poterli aggiungere come Li con una KEY che li numera
  // const nomiJSX = nomi.map((nome, index) => <li key={index}>{nome}</li>)

  return (
    <>
      {/* {nomiJSX} */}
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
