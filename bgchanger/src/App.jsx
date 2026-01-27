import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 inset-x-0 flex justify-center gap-3">
        
        <button
          onClick={() => setColor('red')}
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold"
        >
          Red
        </button>

        <button
          onClick={() => setColor('green')}
          className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold"
        >
          Green
        </button>

        <button
          onClick={() => setColor('blue')}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold"
        >
          Blue
        </button>

        <button
          onClick={() => setColor('black')}
          className="px-4 py-2 rounded-lg bg-black text-white font-semibold"
        >
          Black
        </button>

        <button
          onClick={() => setColor('olive')}
          className="px-4 py-2 rounded-lg bg-olive-500 text-white font-semibold"
        >
          Reset
        </button>

      </div>
    </div>
  )
}

export default App
