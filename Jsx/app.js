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

