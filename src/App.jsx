import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <div className='col-2'>
          <div className='box logo'>
            <p className='logo-text'>
              Mi Marca
            </p>
          </div>
        </div>
        <div className='col-10'>
          <div className='box header'>
            <p>Header</p>
          </div>
        </div>
        <div className='col-2'>
          <div className='box sidebar'>
            <p>Sidebar</p>
          </div>
        </div>
        <div className='col-10'>
          <div className='container'>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 1</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 2</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 3</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 4</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 5</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 6</p>
              </div>
            </div>

            <div className='col-6'>
              <div className='box indicador'>
                <p>Indicador 7</p>
              </div>
            </div>

            <div className='col-6'>
              <div className='box indicador'>
                <p>Indicador 8</p>
              </div>
            </div>

            <div className='col-6'>
              <div className='box indicador'>
                <p>Indicador 9</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 10</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 11</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 12</p>
              </div>
            </div>

            <div className='col-3'>
              <div className='box indicador'>
                <p>Indicador 13</p>
              </div>
            </div>

          </div>
        </div>
        <div className='col-2'>
        </div>
        <div className='col-10'>
          <div className='box footer'>
            <p>Footer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
