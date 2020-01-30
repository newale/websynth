import { createContext } from 'react';

type OscillatorsContext = {
  oscillators: Array<OscillatorNode>
}

export default createContext<OscillatorsContext>({ oscillators: [] });
