import axios from 'axios';

export default function multiFetch() {
  return (
    axios.all([...arguments])
  );
}
