import "./App.css";
function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2() {
  return (
    <div>
      <h1>Left1</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3() {
  return (
    <div>
      <h1>Left3</h1>
      <button>+</button>
    </div>
  );
}
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  return (
    <div>
      <h1>Right3</h1>
      <div></div>
    </div>
  );
}
export default function App() {
  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}