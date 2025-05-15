import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Grid = ({ onItemClick, effectId }) => {
  const gridRef = useRef(null)

  const effects = [
    {
      id: 'effect1',
      items: [
        // First row
        {
          id: 1,
          image: '/assets/img1.webp',
          title: 'Drift — A04',
          model: 'Amelia Hart'
        },
        {
          id: 2,
          image: '/assets/img2.webp',
          title: 'Veil — K18',
          model: 'Irina Volkova'
        },
        {
          id: 3,
          image: '/assets/img3.webp',
          title: 'Ember — M45',
          model: 'Charlotte Byrne'
        },
        {
          id: 4,
          image: '/assets/img4.webp',
          title: 'Gleam — S12',
          model: 'Anastasia Morozova'
        },
        {
          id: 5,
          image: '/assets/img5.webp',
          title: 'Bloom — J29',
          model: 'Eva Ramirez'
        },
        {
          id: 6,
          image: '/assets/img6.webp',
          title: 'Whisper — V87',
          model: 'Milana Petrova'
        },
        {
          id: 7,
          image: '/assets/img7.webp',
          title: 'Trace — Z05',
          model: 'Sofia Carter'
        },
        {
          id: 8,
          image: '/assets/img8.webp',
          title: 'Flicker — Q62',
          model: 'Alina Kuznetsova'
        },
        // Second row
        {
          id: 9,
          image: '/assets/img9.webp',
          title: 'Grain — H71',
          model: 'Isabella Novak'
        },
        {
          id: 10,
          image: '/assets/img10.webp',
          title: 'Pulse — B90',
          model: 'Daria Sokolova'
        },
        {
          id: 11,
          image: '/assets/img11.webp',
          title: 'Mist — L36',
          model: 'Victoria Fields'
        },
        {
          id: 12,
          image: '/assets/img12.webp',
          title: 'Shard — Y22',
          model: 'Natalia Popova & Emily Stone'
        },
        {
          id: 13,
          image: '/assets/img13.webp',
          title: 'Vapor — X79',
          model: 'Yulia Orlova'
        },
        {
          id: 14,
          image: '/assets/img14.webp',
          title: 'Glow — F13',
          model: 'Camila Ford'
        },
        {
          id: 15,
          image: '/assets/img15.webp',
          title: 'Flux — N48',
          model: 'Sofia Mikhailova'
        },
        {
          id: 16,
          image: '/assets/img16.webp',
          title: 'Spire — C65',
          model: 'Ava Bennett'
        }
      ]
    },
    {
      id: 'effect2',
      items: [
        // First row
        {
          id: 17,
          image: '/assets/img4.webp',
          title: 'Driftwood — W50',
          model: 'Valeria Smirnova'
        },
        {
          id: 18,
          image: '/assets/img7.webp',
          title: 'Fold — T81',
          model: 'Emma Chase'
        },
        {
          id: 19,
          image: '/assets/img8.webp',
          title: 'Shroud — E26',
          model: 'Marina Belova'
        },
        {
          id: 20,
          image: '/assets/img1.webp',
          title: 'Ripple — P34',
          model: 'Chloe Martin'
        },
        {
          id: 21,
          image: '/assets/img10.webp',
          title: 'Fray — U07',
          model: 'Alexandra Dmitrieva'
        },
        {
          id: 22,
          image: '/assets/img22.webp',
          title: 'Wane — R52',
          model: 'Isabella Moore'
        },
        {
          id: 23,
          image: '/assets/img31.webp',
          title: 'Tide — S33',
          model: 'Ksenia Egorova'
        },
        {
          id: 24,
          image: '/assets/img29.webp',
          title: 'Rift — G08',
          model: 'Mia Anderson'
        },
        // Second row
        {
          id: 25,
          image: '/assets/img8.webp',
          title: 'Spool — H94',
          model: 'Anna Mikhailova'
        },
        {
          id: 26,
          image: '/assets/img25.webp',
          title: 'Glitch — M70',
          model: 'Emily Brown'
        },
        {
          id: 27,
          image: '/assets/img32.webp',
          title: 'Slip — F02',
          model: 'Ekaterina Ivanova'
        },
        {
          id: 28,
          image: '/assets/img16.webp',
          title: 'Husk — C15',
          model: 'Olivia Reed'
        },
        {
          id: 29,
          image: '/assets/img10.webp',
          title: 'Blur — V86',
          model: 'Sofia Lebedeva'
        },
        {
          id: 30,
          image: '/assets/img11.webp',
          title: 'Fracture — A63',
          model: 'Harper Gray'
        },
        {
          id: 31,
          image: '/assets/img27.webp',
          title: 'Mote — Y39',
          model: 'Elizaveta Petrova'
        },
        {
          id: 32,
          image: '/assets/img19.webp',
          title: 'Aura — K21',
          model: 'Lily Cooper'
        }
      ]
    },
    {
      id: 'effect3',
      items: [
        // First row
        {
          id: 33,
          image: '/assets/img9.webp',
          title: 'Whorl — B45',
          model: 'Anastasia Volkova'
        },
        {
          id: 34,
          image: '/assets/img4.webp',
          title: 'Flicker — D17',
          model: 'Sophia White'
        },
        {
          id: 35,
          image: '/assets/img5.webp',
          title: 'Gleam — Z58',
          model: 'Polina Sokolova'
        },
        {
          id: 36,
          image: '/assets/img1.webp',
          title: 'Shard — J03',
          model: 'Ava Mitchell'
        },
        {
          id: 37,
          image: '/assets/img17.webp',
          title: 'Trace — Q29',
          model: 'Maria Ivanenko'
        },
        {
          id: 38,
          image: '/assets/img16.webp',
          title: 'Crush — W92',
          model: 'Ella Foster'
        },
        {
          id: 39,
          image: '/assets/img13.webp',
          title: 'Veil — X16',
          model: 'Yulia Morozova'
        },
        {
          id: 40,
          image: '/assets/img20.webp',
          title: 'Clasp — S84',
          model: 'Charlotte Hayes'
        },
        // Second row
        {
          id: 41,
          image: '/assets/img32.webp',
          title: 'Flint — T66',
          model: 'Viktoria Kuznetsova'
        },
        {
          id: 42,
          image: '/assets/img7.webp',
          title: 'Spire — E49',
          model: 'Amelia Parker'
        },
        {
          id: 43,
          image: '/assets/img28.webp',
          title: 'Plume — N22',
          model: 'Daria Smirnova'
        },
        {
          id: 44,
          image: '/assets/img10.webp',
          title: 'Hollow — B75',
          model: 'Zoe Adams'
        },
        {
          id: 45,
          image: '/assets/img11.webp',
          title: 'Brume — K10',
          model: 'Anastasiya Orlova'
        },
        {
          id: 46,
          image: '/assets/img2.webp',
          title: 'Crave — F37',
          model: 'Mia Bennett'
        },
        {
          id: 47,
          image: '/assets/img6.webp',
          title: 'Quiver — R19',
          model: 'Natalia Volkova'
        },
        {
          id: 48,
          image: '/assets/img19.webp',
          title: 'Fathom — L52',
          model: 'Isabella Young'
        }
      ]
    },
    {
      id: 'effect4',
      items: [
        // First row
        {
          id: 49,
          image: '/assets/img30.webp',
          title: 'Pulse — D61',
          model: 'Sofia Makarova'
        },
        {
          id: 50,
          image: '/assets/img22.webp',
          title: 'Fade — P42',
          model: 'Scarlett James'
        },
        {
          id: 51,
          image: '/assets/img31.webp',
          title: 'Wisp — T14',
          model: 'Ekaterina Romanova'
        },
        {
          id: 52,
          image: '/assets/img9.webp',
          title: 'Fragment — G77',
          model: 'Aria Robinson'
        },
        {
          id: 53,
          image: '/assets/img8.webp',
          title: 'Spiral — Y24',
          model: 'Daria Petrova'
        },
        {
          id: 54,
          image: '/assets/img2.webp',
          title: 'Trace — Z85',
          model: 'Chloe Evans'
        },
        {
          id: 55,
          image: '/assets/img3.webp',
          title: 'Flare — C11',
          model: 'Sofia Orlova'
        },
        {
          id: 56,
          image: '/assets/img18.webp',
          title: 'Chasm — R05',
          model: 'Grace Walker'
        },
        // Second row
        {
          id: 57,
          image: '/assets/img15.webp',
          title: 'Bloom — N38',
          model: 'Yana Melnikova'
        },
        {
          id: 58,
          image: '/assets/img24.webp',
          title: 'Shard — W20',
          model: 'Mila Scott'
        },
        {
          id: 59,
          image: '/assets/img31.webp',
          title: 'Mist — S12',
          model: 'Natalia Ivanova'
        },
        {
          id: 60,
          image: '/assets/img14.webp',
          title: 'Crush — E31',
          model: 'Ava Thompson'
        },
        {
          id: 61,
          image: '/assets/img29.webp',
          title: 'Ripple — F68',
          model: 'Anastasia Novikova'
        },
        {
          id: 62,
          image: '/assets/img26.webp',
          title: 'Gossamer — A07',
          model: 'Madison Brooks'
        },
        {
          id: 63,
          image: '/assets/img17.webp',
          title: 'Floe — K96',
          model: 'Ekaterina Smirnova'
        },
        {
          id: 64,
          image: '/assets/img28.webp',
          title: 'Shiver — V44',
          model: 'Emily Robinson'
        }
      ]
    }
  ]

  const currentEffect = effects.find(effect => effect.id === effectId)
  const items = currentEffect ? currentEffect.items : []

  const handleItemClick = (item, event) => {
    const clickedItem = event.currentTarget
    const rect = clickedItem.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Create mover elements
    const steps = 8
    const movers = []
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.top = '0'
    container.style.left = '0'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.pointerEvents = 'none'
    container.style.zIndex = '1000'
    document.body.appendChild(container)

    // Calculate target size
    const targetSize = Math.min(window.innerHeight * 0.9, rect.width * 2.5)
    const scale = targetSize / rect.width

    for (let i = 0; i < steps; i++) {
      const mover = document.createElement('div')
      mover.style.position = 'absolute'
      mover.style.width = rect.width + 'px'
      mover.style.height = rect.height + 'px'
      mover.style.backgroundImage = `url(${item.image})`
      mover.style.backgroundSize = 'cover'
      mover.style.backgroundPosition = 'center'
      mover.style.opacity = '0'
      container.appendChild(mover)
      movers.push(mover)
    }

    // Animate movers
    const tl = gsap.timeline({
      onComplete: () => {
        container.remove()
        onItemClick(item, item.id)
      }
    })

    movers.forEach((mover, index) => {
      const delay = index * 0.03
      const duration = 0.4
      const rotation = (Math.random() - 0.5) * 10
      const xOffset = (Math.random() - 0.5) * 30
      const yOffset = (Math.random() - 0.5) * 30

      // Initial position
      tl.set(mover, {
        x: centerX - rect.width / 2,
        y: centerY - rect.height / 2,
        scale: 1,
        rotation: 0,
        opacity: 1
      }, 0)

      // First animation - spread out
      tl.to(mover, {
        x: centerX - rect.width / 2 + xOffset,
        y: centerY - rect.height / 2 + yOffset,
        rotation: rotation,
        duration: duration * 0.5,
        ease: 'power2.out',
        delay: delay
      }, 0)

      // Second animation - move to center
      tl.to(mover, {
        x: window.innerWidth / 2 - (rect.width * scale) / 2,
        y: window.innerHeight / 2 - (rect.height * scale) / 2,
        scale: scale,
        rotation: 0,
        opacity: 0,
        duration: duration,
        ease: 'power2.in',
        delay: delay + duration * 0.5
      }, 0)
    })

    // Animate grid items
    const allItems = Array.from(gridRef.current.querySelectorAll('.grid__item'))
    const distances = allItems.map(el => {
      const itemRect = el.getBoundingClientRect()
      const itemCenterX = itemRect.left + itemRect.width / 2
      const itemCenterY = itemRect.top + itemRect.height / 2
      return Math.hypot(itemCenterX - centerX, itemCenterY - centerY)
    })
    const maxDistance = Math.max(...distances)

    allItems.forEach((item, index) => {
      const distance = distances[index]
      const delay = (distance / maxDistance) * 0.2
      gsap.to(item, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        delay: delay,
        ease: 'power2.in'
      })
    })
  }

  return (
    <div className="grid" ref={gridRef}>
      {items.map((item) => (
        <figure 
          key={item.id}
          className="grid__item" 
          role="img" 
          aria-labelledby={`caption${item.id}`}
          onClick={(e) => handleItemClick(item, e)}
        >
          <div 
            className="grid__item-image" 
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <figcaption className="grid__item-caption" id={`caption${item.id}`}>
            <h3>{item.title}</h3>
            <p>Model: {item.model}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default Grid 