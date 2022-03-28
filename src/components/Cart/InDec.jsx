import {Component} from 'react';
class IncDec extends Component{
    constructor(props) {
        super(props);
        this.state = {
          quantity: 1,
          show: true,
          max: 10,
          min: 1
        };
      }
    
      IncrementItem = () => {
          this.setState(prevState => {
            if(prevState.quantity < 9) {
              return {
                quantity: prevState.quantity + 1
              }
            } else {
              return null;
            }
          });
      }
      DecreaseItem = () => {
        this.setState(prevState => {
          if(prevState.quantity > 0) {
            return {
              quantity: prevState.quantity - 1
            }
          } else {
            return null;
          }
        });
      }
      ToggleClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      handleChange = (event) => {
        this.setState({quantity: event.target.value});
      }
    
      render() {
    
        return ( <div>
          <button onClick={this.IncrementItem}>+</button>
          <input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
          <button onClick = {this.DecreaseItem}>-</button>
          </div>
        );
      }
}
export default IncDec;