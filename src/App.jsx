import "./App.css";
import Audio from "./component/Audio";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./component/Slider";

function App() {
  return (
    <>
      <div>
        <Audio
          title="The Subtle Art of Not Giving a F*ck Podcast"
          description="Sex, Drugs, and Money Might Actually Make You Happier (ft. Sonja Lyubomirsky)"
          imageSrc="logo.jpg"
          additionalText="All wight. So i did my assignment on the four types of holiday shoppers. So the first one is called the Evergreen and this buyer spreads their"
        />
      </div>
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </>
  );
}

export default App;
