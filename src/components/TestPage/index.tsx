import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const TestPage = () => (
  <Player
    autoplay
    loop
    src="https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
    style={{ height: '300px', width: '300px' }}
  />
);

export default TestPage;
