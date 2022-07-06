//create a function component
function ShowAlert() {
  //create an function
  const show = (a) => {
    alert(a.type);
  };
  //return html: use event handler to call function show, pass the argument
  return <button onClick={(event) => show(event)}>click here </button>;
}
//create another function compoment SayHi
function SayHi() {
  return <h1>hi from SayHi</h1>;
}
export { ShowAlert, SayHi };
