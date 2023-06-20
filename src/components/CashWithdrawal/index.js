// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  updateBalance = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="cash-container">
          <div className="user-name">
            <div className="s-user">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="your-bal">Your Balance</p>
            <p className="amount">{count}</p>
          </div>
          <div>
            <p className="rupees">In Rupees</p>
            <p>Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationsList.map(each => (
                <DenominationItem
                  key={each.id}
                  list={each}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
