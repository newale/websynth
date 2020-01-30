import React, { Component, Fragment } from 'react';
import AudioContext from '../core/core.context';
import Oscillator from '../../components/oscillator';

type OscillatorsState = {
  oscs: Array<OscillatorNode>
}

class Oscillators extends Component<{}, OscillatorsState> {
  oscs: Array<OscillatorNode> = [];
  oscillatorType: OscillatorType = "sine";
  static contextType = AudioContext;

  constructor(props: any) {
    super(props);
    this.onAddOscillatorHandler = this.onAddOscillatorHandler.bind(this)
  }

  onAddOscillatorHandler() {
    const oscillator = this.context.audioContext.createOscillator();
    oscillator.type = this.oscillatorType;
    oscillator.frequency.setValueAtTime(440, this.context.audioContext.currentTime);
    oscillator.connect(this.context.audioContext.destination);
    this.oscs.push(oscillator);
    console.log(this.oscs);
  }

  render() {
    return (
      <Fragment>
        <Oscillator type="sine" frequency={400} />
        <Oscillator type="sine" frequency={400} />
        {/* <select value={this.oscillatorType}>
          <option value="sine">sine</option>
          <option value="square">square</option>
          <option value="sawtooth">sawtooth</option>
          <option value="triangle">triangle</option>
        </select>
        <button onClick={this.onAddOscillatorHandler}>Add Osc</button>
        <ul>{
          this.oscs.map(oscillator => <li>{oscillator.type}</li>)
        }</ul> */}
      </Fragment>
    );
  }
}

export default Oscillators;
