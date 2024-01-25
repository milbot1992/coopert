import Video from './Components/Video'
import MainImage from './Components/MainImage'
import CalendarPage from './Components/Calendar'
import Contact from './Components/Contact'
import NavAppear from './Components/NavAppear'
import '../src/Styling/NavAppear.css'
import NavInitial from './Components/NavInitial'
import Quotes from './Components/Quotes'

function App() {
  return (
      <>
          <NavInitial/>
          <NavAppear/>
        <section class="parallax-container">
          <MainImage/>
        </section>
        <div id="about">
          <Video/>
        </div>
        <div id="calendar">
          <CalendarPage/>
        </div>
        <div id="quotes">
          <Quotes/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </>
    )

}

export default App
