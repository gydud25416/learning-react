 
import './App.css';
import { getEmotionImgById } from './until';

function App() {
  return (
    <div className="App">
      <img src={getEmotionImgById(1)} alt="감정1" />
      <img src={getEmotionImgById(2)} alt="감정2" />
      <img src={getEmotionImgById(3)} alt="감정3" />
      <img src={getEmotionImgById(4)} alt="감정4" />
      <img src={getEmotionImgById(5)} alt="감정5" />
      </div>
  );
}
export default App;
