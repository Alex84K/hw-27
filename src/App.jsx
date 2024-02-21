
import Hero from './assets/images/main.jpg'
import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import { Dream } from './components/Dream'

function App() {

  return (
    <div>
      <Header />

      <main>
        <section className="left">
          <img src={Hero} />
          <img src='./assets/images/main.jpg' />
        </section>

        <Dream />

        <p className="farGalaxy">
          It is a period of civil war.
          Rebel spaceships, striking
          from a hidden base, have won
          their first victory against
          the evil Galactic Empire.

          During the battle, Rebel
          spies managed to steal secret
          plans to the Empire's
          ultimate weapon, the DEATH
          STAR, an armored space
          station with enough power
          to destroy an entire planet.

          Pursued by the Empire's
          sinister agents, Princess
          Leia races home aboard her
          starship, custodian of the
          stolen plans that can save her
          people and restore
          freedom to the galaxy....
        </p>
      </main>

      <Footer />

    </div>
  )
}

export default App
