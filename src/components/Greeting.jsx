// eslint-disable-next-line react/prop-types
function Greeting({ name = '' }) {
  return <h1>Hello, {name || 'World'}!</h1>;
}

export default Greeting;
