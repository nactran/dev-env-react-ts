import React from 'react';
import keyable from 'Utils/keyable';

type myState = { date: Date };
const numbers = [1, 2, 3, 4, 5];
const listItems: JSX.Element[] = numbers.map(number => <li>{number}</li>);

class App extends React.Component<keyable, myState> {
  timerID: NodeJS.Timeout | undefined;
  constructor(props: keyable) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = undefined;
  }

  componentDidMount(): void {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    if (this.timerID !== undefined) clearInterval(this.timerID);
  }

  tick(): void {
    this.setState(() => ({
      date: new Date(),
    }));
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
