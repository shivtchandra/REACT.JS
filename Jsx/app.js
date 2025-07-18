// Here we intend to create an tic tac toe game and this one is more like an outline on how jsx works and its rules .
// This is a mere template of the game and not a fully functional game .

export default function Board() {
  return (
    <>
// In jsx unlike in javascript we have to give class as className and also write everyting we want to be shown on the page in return tag .
      <div className="row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

// But here typing button for these many isnt a godd practice as what will we do if we have a long text to be displayed and also huge count of buttons to be displayed 
// Instead we can use props in the file .
// so here we define the function of the button and then call it whenevver we want it .
//Instead of typing the same thiing again and again 
function Square({ values }) {
  return <button className="square">{values}</button>;
}

export default function Board() {
  return (
    <>
      <div className="row">
        <Square values="1" />
        <Square values="2" />
        <Square values="3" />
      </div>
      <div className="row">
        <Square values="4" />
        <Square values="5" />
        <Square values="6" />
      </div>
      <div className="row">
        <Square values="7" />
        <Square values="8" />
        <Square values="9" />
      </div>
    </>
  );
}
