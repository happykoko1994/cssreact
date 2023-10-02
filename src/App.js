import Component from './component';
function App() {
  const colorPurple = "rgb(150, 150, 252)";
  const colorOrange = "#ffc559";

  return (
    <div className='container'>
      <Component colorOne={colorPurple} colorTwo={'black'} />
      <Component colorOne={colorOrange} colorTwo={'black'} />
    </div>
  );
}

export default App;
