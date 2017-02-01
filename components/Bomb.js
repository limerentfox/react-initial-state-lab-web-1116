const React = require('react')


class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
    this.timerCheck = this.timerCheck.bind(this)
  }

  timerCheck(){
    if (this.state.secondsLeft === 0){
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }

  }

  render() {
    return (
      <div>

        <p>{this.timerCheck()}</p>
      </div>)
  }
}



module.exports = Bomb
