import './Styles/App.css';
import data from "./Data/PeriodicTable.json"

function App() {

  const colorMap = {
    "diatomic nonmetal" : "#32d3ff",
    "alkali metal" : "#cb1dd9",
    "alkaline earth metal": "#ab4cfe",
    "transition metal" :"#38d0fb",
    "metallic gray" : "#ff6e41",
    "metalloid" :"#17ee7b",
    "actinide" : "#ff2020",
    "noble gas" : "#f1be21",
    "lanthanide" : "#befa42",
    "post-transition metal" : "#fe6d42",
    "polyatomic nonmetal" : "#3d9ef5",
  }
  return (
    <>
      <div className="table">
        { data.elements.map((element) => {
          return (
            <div className="element" 
              key={ element.name}  
              style={
                { 
                  gridColumn: element.xpos, 
                  gridRow: element.ypos, 
                  borderColor: colorMap[element.category], 
                  color: colorMap[element.category] 
                }
              }
            > 
              <div className='number'> {element.number} </div>
              <div className='symbol'> {element.symbol} </div>
              <div className='name'> {element.name} </div>
            </div>
          )
        })}
      </div>
      <div className='key'>
        {Object.entries(colorMap).map(([key, value]) => (
          <div className="key-entry" key={key}> 
            <h6> {key.toUpperCase()} </h6>
            <div className='color-block' style={{backgroundColor : value}}></div>          
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
