import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
