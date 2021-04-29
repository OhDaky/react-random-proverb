import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["고난은 잠자던 용기와 지혜를 깨운다. 우리는 오직 고난을 통해 정신적, 영적으로 성숙해질 수 있다.",
  "아주 작은 것을 희생할 수 있는 기회를 절대 놓치지 말라. 아주 사소한 것이라도 소홀히 하지 말고 진심으로 대하라.",
  "사람들은 가진 게 많아야 행복하다고 여긴다. 하지만 자연을 보면 꼭 그렇지만은 않다.",
  "위인이 될 수 있는 사람은 많은 사상을 가진 자가 아니라, 하나의 확신을 가진 자이다.",
  "모든 것은 젊었을 때 구해야 한다. 젊음은 그 자체가 하나의 빛이다. 빛이 흐려지기 전에 열심히 구해야 한다. 젊은 시절에 열심히 찾고 구한 사람은 늙어서 풍성하다."
  ]

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.
        </p>
          {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
