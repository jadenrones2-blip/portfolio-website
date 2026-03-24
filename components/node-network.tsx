// Server component — pure static SVG, no hydration issues

const nodes = [
  { id: 1, x: 120,  y: 60,  drift: "a", delay: "0s"    },
  { id: 2, x: 340,  y: 180, drift: "b", delay: "-4s"   },
  { id: 3, x: 580,  y: 90,  drift: "a", delay: "-8s"   },
  { id: 4, x: 720,  y: 210, drift: "b", delay: "-2s"   },
  { id: 5, x: 880,  y: 55,  drift: "a", delay: "-14s"  },
  { id: 6, x: 1020, y: 160, drift: "b", delay: "-6s"   },
  { id: 7, x: 1200, y: 85,  drift: "a", delay: "-10s"  },
  { id: 8, x: 1320, y: 195, drift: "b", delay: "-18s"  },
  { id: 9, x: 240,  y: 240, drift: "a", delay: "-3s"   },
  { id: 10, x: 680, y: 145, drift: "b", delay: "-12s"  },
  { id: 11, x: 960, y: 230, drift: "a", delay: "-16s"  },
]

// Connections: pairs of node IDs
const connections = [
  { from: 1,  to: 2,  pulse: false },
  { from: 1,  to: 9,  pulse: true,  dur: "4.2s", begin: "0s"    },
  { from: 2,  to: 3,  pulse: false },
  { from: 2,  to: 9,  pulse: false },
  { from: 3,  to: 4,  pulse: true,  dur: "5.8s", begin: "1.2s"  },
  { from: 3,  to: 10, pulse: false },
  { from: 4,  to: 5,  pulse: false },
  { from: 4,  to: 10, pulse: true,  dur: "3.5s", begin: "2.4s"  },
  { from: 5,  to: 6,  pulse: false },
  { from: 5,  to: 7,  pulse: false },
  { from: 6,  to: 7,  pulse: true,  dur: "6.1s", begin: "0.8s"  },
  { from: 6,  to: 11, pulse: false },
  { from: 7,  to: 8,  pulse: false },
  { from: 8,  to: 11, pulse: true,  dur: "4.7s", begin: "3.0s"  },
]

function getNode(id: number) {
  return nodes.find(n => n.id === id)!
}

function cubicBezierPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2
  const cy = Math.abs(y2 - y1) * 0.4 + 40
  const controlY1 = y1 - cy
  const controlY2 = y2 + cy
  return `M ${x1},${y1} C ${mx},${controlY1} ${mx},${controlY2} ${x2},${y2}`
}

export function NodeNetwork() {
  return (
    <section className="relative overflow-hidden" style={{ height: "280px" }}>
      {/* Edge fades to blend with surrounding sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060C17] via-transparent to-[#060C17] pointer-events-none z-10" />
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#060C17] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#060C17] to-transparent pointer-events-none z-10" />

      <svg
        viewBox="0 0 1440 280"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="node-glow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>

        {/* Connection paths */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from)
          const to = getNode(conn.to)
          const d = cubicBezierPath(from.x, from.y, to.x, to.y)

          if (conn.pulse) {
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="rgba(147, 197, 253, 0.22)"
                strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0.15;0.55;0.15"
                  dur={conn.dur}
                  begin={conn.begin}
                  repeatCount="indefinite"
                />
              </path>
            )
          }

          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="rgba(59, 130, 246, 0.13)"
              strokeWidth="0.75"
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            className={`animate-node-drift-${node.drift}`}
            style={{ animationDelay: node.delay, transformOrigin: `${node.x}px ${node.y}px` }}
          >
            {/* Glow halo */}
            <circle
              cx={node.x}
              cy={node.y}
              r={7}
              fill="url(#node-glow-gradient)"
              opacity={0.3}
            />
            {/* Core dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={2.5}
              fill="rgba(59, 130, 246, 0.55)"
            />
          </g>
        ))}
      </svg>
    </section>
  )
}
