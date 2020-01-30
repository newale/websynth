import React, { Component } from 'react';
import CoreContext from '../../modules/core/core.context'

type OscillatorProps = {
  type: string,
  frequency: number
}

type OscillatorState = {
  power: boolean,
}

export default class Oscillator extends Component<OscillatorProps, OscillatorState> {
  static contextType = CoreContext;
  private oscillator!: OscillatorNode;

  constructor(props: OscillatorProps) {
    super(props);
    this.state = {
      power: true,
    }

    this.handlePowerCheckbox = this.handlePowerCheckbox.bind(this)
  }

  componentDidMount(): void {
    this.oscillator = this.context.audioContext.createOscillator();
    this.oscillator.type = "sine";
    this.oscillator.frequency.setValueAtTime(this.props.frequency, this.context.audioContext.currentTime);
    this.oscillator.connect(this.context.audioContext.destination);
    this.oscillator.start();
  }

  componentDidUpdate(): void {
    if(this.state.power) {
      this.oscillator.start();
    } else {
      this.oscillator.stop();
    }
  }

  handlePowerCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      power: !this.state.power,
    });
  }

  render() {
    console.log(this.state.power);
    
    return (
      <>
        <label>
          <input name="power" type="checkbox" checked={this.state.power} onChange={this.handlePowerCheckbox}/>
        </label>
        {/* <button onClick={start()}>Start</button> */}
        {/* <button onClick={stop()}>Stop</button> */}
      </>
    );
  }
}
