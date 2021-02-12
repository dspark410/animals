import './App.css'
import { videoData } from './constant'

function App() {
  return (
    <div className='video-container'>
      {videoData.map((animal, i) => {
        return (
          <iframe
            className='video'
            key={i}
            src={animal.video}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
          />
        )
      })}
    </div>
  )
}

export default App
