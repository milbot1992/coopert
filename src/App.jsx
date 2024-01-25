import Video from './Components/Video'
import MainImage from './Components/MainImage'
import LiveSection from './Components/Live'
import Contact from './Components/Shop'
import NavAppear from './Components/NavAppear'
import '../src/Styling/NavAppear.css'
import NavInitial from './Components/NavInitial'
import Shop from './Components/Shop'

function App() {
  return (
      <>
        <div id="nav-initial">
          <NavInitial/>
        </div>
          <NavAppear/>
        <section class="parallax-container">
          <MainImage/>
        </section>
        <div id="video">
          <Video/>
        </div>
        <div id="live">
          <LiveSection/>
        </div>
        <div id="shop">
          <Shop/>
        </div>
      </>
    )

}

export default App
