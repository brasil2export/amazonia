import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'

function Trail({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    console.log(items.length)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })

    console.log(trail)

    return (
      <div className="trails-main" {...props}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
    )
  }


const Trans: React.FC = () => {
 
    const [open, set] = useState(true)
  return (
    <Trail open={open} onClick={() => set((state) => !state)}>
      <span>AMAZONIA</span>
      <span>TRERAPY</span>
    </Trail>
  )
};

export default Trans;