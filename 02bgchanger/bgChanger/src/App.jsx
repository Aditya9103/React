import { useState } from 'react';
import './App.css';
import ColorButton from './component/ColorButton';

function App() {
  const [color, setColor] = useState('olive');

  const colors = ["blue", "red", "green", "pink", "yellow", "purple"];

  return (

    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
          {colors.map((clr) => (
            <ColorButton 
              key={clr} 
              color={clr} 
              setColor={setColor} 
            />
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
