import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Panel = ({ isOpen, item, onClose, clickedPosition }) => {
  const panelRef = useRef(null)
  const imgRef = useRef(null)

  // Get effect number from clickedPosition (1-4)
  const getEffectNumber = (position) => {
    return Math.floor(position / 16) + 1
  }

  const getAnimationConfig = (effectNumber, isLeftSide) => {
    const baseConfig = {
      panel: {
        initial: {
          clipPath: isLeftSide ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)'
        },
        final: {
          clipPath: 'inset(0% 0% 0% 0%)'
        }
      },
      image: {
        initial: {
          x: isLeftSide ? '50%' : '-50%',
          xPercent: isLeftSide ? 0 : -100,
          width: '60%',
          height: 'calc(100vh - 20px)',
          margin: '10px auto'
        },
        final: {
          x: isLeftSide ? '100%' : '0%',
          xPercent: isLeftSide ? -100 : 0
        }
      }
    }

    switch (effectNumber) {
      case 1: // Effect 01: Straight linear paths, smooth easing
        return {
          ...baseConfig,
          panel: {
            ...baseConfig.panel,
            duration: 0.6,
            ease: 'power2.inOut'
          },
          image: {
            ...baseConfig.image,
            duration: 0.6,
            ease: 'power2.inOut'
          }
        }
      case 2: // Effect 02: Adjusted mover count, rotation
        return {
          ...baseConfig,
          panel: {
            ...baseConfig.panel,
            duration: 0.8,
            ease: 'power3.inOut'
          },
          image: {
            ...baseConfig.image,
            duration: 0.8,
            ease: 'power3.inOut',
            rotation: isLeftSide ? 5 : -5
          }
        }
      case 3: // Effect 03: Big arcs, smooth start, powerful snap
        return {
          ...baseConfig,
          panel: {
            ...baseConfig.panel,
            duration: 1,
            ease: 'elastic.out(1, 0.5)'
          },
          image: {
            ...baseConfig.image,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
            y: -50,
            scale: 0.9
          }
        }
      case 4: // Effect 04: Quick upward motion with bold blending
        return {
          ...baseConfig,
          panel: {
            ...baseConfig.panel,
            duration: 0.7,
            ease: 'power4.out'
          },
          image: {
            ...baseConfig.image,
            duration: 0.7,
            ease: 'power4.out',
            y: -100,
            scale: 1.1
          }
        }
      default:
        return baseConfig
    }
  }

  useEffect(() => {
    if (isOpen && item) {
      const isLeftSide = clickedPosition % 8 < 4
      const effectNumber = getEffectNumber(clickedPosition)
      const animationConfig = getAnimationConfig(effectNumber, isLeftSide)

      // Set initial positions
      gsap.set(panelRef.current, animationConfig.panel.initial)
      gsap.set(imgRef.current, animationConfig.image.initial)

      // Animate panel opening
      gsap.to(panelRef.current, {
        ...animationConfig.panel.final,
        duration: animationConfig.panel.duration,
        ease: animationConfig.panel.ease
      })

      // Animate image to final position
      gsap.to(imgRef.current, {
        ...animationConfig.image.final,
        duration: animationConfig.image.duration,
        ease: animationConfig.image.ease
      })

      // Animate content with effect-specific timing
      gsap.fromTo(
        panelRef.current.querySelector('.panel__content'),
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: animationConfig.panel.duration * 0.8,
          delay: animationConfig.panel.duration * 0.3,
          ease: 'power2.out'
        }
      )

      // Animate close button
      gsap.fromTo(
        panelRef.current.querySelector('.panel__close-btn'),
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: animationConfig.panel.duration * 0.5,
          ease: 'back.out(1.7)'
        }
      )
    }
  }, [isOpen, item, clickedPosition])

  const handleClose = () => {
    const isLeftSide = clickedPosition % 8 < 4
    const effectNumber = getEffectNumber(clickedPosition)
    const animationConfig = getAnimationConfig(effectNumber, isLeftSide)

    // Animate close button
    gsap.to(panelRef.current.querySelector('.panel__close-btn'), {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in'
    })

    // Animate image back to original position
    gsap.to(imgRef.current, {
      ...animationConfig.image.initial,
      duration: animationConfig.image.duration,
      ease: animationConfig.image.ease
    })

    // Animate panel closing
    gsap.to(panelRef.current, {
      ...animationConfig.panel.initial,
      duration: animationConfig.panel.duration,
      ease: animationConfig.panel.ease,
      onComplete: onClose
    })
  }

  if (!item) return null

  const isLeftSide = clickedPosition % 8 < 4
  const effectNumber = getEffectNumber(clickedPosition)
  const animationConfig = getAnimationConfig(effectNumber, isLeftSide)

  return (
    <div 
      ref={panelRef}
      className={`panel ${isOpen ? 'panel--open' : ''}`}
      style={{ clipPath: animationConfig.panel.initial.clipPath }}
    >
      <div 
        ref={imgRef}
        className="panel__img" 
        style={{ 
          backgroundImage: `url(${item.image})`,
          position: 'absolute',
          left: isLeftSide ? '50%' : '0%'
        }}
      />
      <div className={`panel__content ${isLeftSide ? 'panel__content--right' : 'panel__content--left'}`}>
        <h3>{item.title}</h3>
        <p>Model: {item.model}</p>
      </div>
      <button 
        className="panel__close-btn" 
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '2rem',
          [isLeftSide ? 'right' : 'left']: '2rem'
        }}
      >
        Close
      </button>
    </div>
  )
}

export default Panel 