import { createContext } from 'react';

type CoreContext = {
  audioContext: AudioContext
}

export default createContext<CoreContext>({ audioContext: new AudioContext() });
