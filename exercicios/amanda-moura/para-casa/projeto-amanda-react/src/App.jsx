import './App.css'
import Bio from './components/Bio'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import boto from './assets/boto.jpg'
import sol from './assets/sol.jpg'

function App() {

  return (
  <>
  <Header />
  <Bio />
  <Card 
  title="Tenho medo de golfinhos"
  description = "Golfinhos são meticulosos, e não é atoa que existe a história do primo boto-cor-de-rosa"
  image={boto}
  imageAlt="botofdp" />

  <Card 
  title="Tenho imaginação de uma criança de 10 anos"
  description="Até recentemente eu acreditava que a carne de sol poderia vir do sol"
  image={sol}
  imageAlt="aquela la"

  />

  <Footer name= "Falida"/>

  </>   
  )
}

export default App
