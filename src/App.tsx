import { Navigation } from './routes/Navigation';


/* 
  en caso de realizar cambios y estos no se reflejen(no se reinicie por si solo el servidor), lanzar este comando
  
  npm: npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh

  yarn: yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

*/
function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
