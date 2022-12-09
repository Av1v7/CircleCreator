import React, { useEffect, useState } from "react";
import "./App.css";

type TPoint = {
  x: number;
  y: number;
};

let PCounter = 0;

function App() {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [RedoPoints, setRedoPoints] = useState<TPoint[]>([]);

  function PlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
    PCounter++;
  }

  function handleUndo() {
    PCounter--;
    const undoPoints = [...points];
    const undidPoints = undoPoints.pop();
    if (!undidPoints) return;
    setRedoPoints([...RedoPoints, undidPoints])
    setPoints(undoPoints);
  }

  function handleRedo() {
    PCounter++;
    const newPopped = [...RedoPoints];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setRedoPoints(newPopped);
  }

  function Clear() {
    window.location.reload();
  }

  function handleClear() {
    Clear();
  }
  

  return (
    <>
    <h2>Points Counter: {PCounter}</h2>
      <div className="Av1v-Buttons">
        <button disabled={points.length === 0} className="UndoBTN" onClick={handleUndo}>
          Undo
        </button>
        <button disabled={RedoPoints.length === 0} className="RedoBTN" onClick={handleRedo}>
        Redo
        </button>
      </div>
      <button disabled={points.length <= 0 && RedoPoints.length >= 0} className="ClearBTN" onClick={handleClear}>
        Clear
        </button>
      <div className="App" onClick={PlaceCircle}>
        {points.map((point) => (
          <div
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
