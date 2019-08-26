import axios from 'axios';

function multiFetch() {
  return (
    axios.all([...arguments])
  );
}

function spread(data) {
  return (
    axios.spread(data)
  );
}

export { spread, multiFetch };
