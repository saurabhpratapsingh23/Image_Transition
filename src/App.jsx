import { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid'
import Panel from './components/Panel'
import Footer from './components/Footer'
import gsap from 'gsap'

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isGridVisible, setIsGridVisible] = useState(true)
  const [clickedPosition, setClickedPosition] = useState(null)

  const handleGridItemClick = (item, position) => {
    setSelectedItem(item)
    setClickedPosition(position)
    setIsGridVisible(false)
    setIsPanelOpen(true)
  }

  const handlePanelClose = () => {
    setIsPanelOpen(false)
    // Animate grid items back in
    const gridItems = document.querySelectorAll('.grid__item')
    gsap.to(gridItems, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      onComplete: () => {
        setIsGridVisible(true)
        setSelectedItem(null)
        setClickedPosition(null)
      }
    })
  }

  return (
    <div className="app">
      <header className="frame">
        <h1 className="frame__title">Repeating Image Transition</h1>
        <nav className="frame__links">
          <a className="line" href="https://tympanus.net/codrops/?p=92571">More info</a>
          <a className="line" href="https://github.com/codrops/RepeatingImageTransition/">Code</a>
          <a className="line" href="https://tympanus.net/codrops/demos/">All demos</a>
        </nav>
      </header>
      
      <div className="heading">
        <h2 className="heading__title">Shane Weber</h2>
        <span className="heading__meta">
          effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.
        </span>
      </div>

      {isGridVisible && <Grid onItemClick={handleGridItemClick} effectId="effect1" />}
      
      <Panel 
        isOpen={isPanelOpen} 
        item={selectedItem} 
        onClose={handlePanelClose} 
        clickedPosition={clickedPosition}
      />

      <div className="heading">
        <h2 className="heading__title">Manika Jorge</h2>
        <span className="heading__meta">
          effect 02: Adjusts mover count, rotation, timing, and animation feel.
        </span>
      </div>
      {isGridVisible && <Grid onItemClick={handleGridItemClick} effectId="effect2" />}
      
      <Panel 
        isOpen={isPanelOpen} 
        item={selectedItem} 
        onClose={handlePanelClose} 
        clickedPosition={clickedPosition}
      />

      <div className="heading">
        <h2 className="heading__title">Angela Wong</h2>
        <span className="heading__meta">
          effect 03: Big arcs, smooth start, powerful snap, slow reveal.
        </span>
      </div>

      {isGridVisible && <Grid onItemClick={handleGridItemClick} effectId="effect3" />}
      
      <Panel 
        isOpen={isPanelOpen} 
        item={selectedItem} 
        onClose={handlePanelClose} 
        clickedPosition={clickedPosition}
      />

      <div className="heading">
        <h2 className="heading__title">Kaito Nakamo</h2>
        <span className="heading__meta">
          effect 04: Quick upward motion with bold blending and smooth slow reveal.
        </span>
      </div>

      {isGridVisible && <Grid onItemClick={handleGridItemClick} effectId="effect4" />}
      
      <Panel 
        isOpen={isPanelOpen} 
        item={selectedItem} 
        onClose={handlePanelClose} 
        clickedPosition={clickedPosition}
      />

      <Footer />
    </div>
  )
}

export default App
