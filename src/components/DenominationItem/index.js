// Write your code here
import './index.css'

const denominationItem = props => {
  const {list, updateBalance} = props
  const {id, value} = list

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        onClick={onClickDenomination}
        className="denomination-button"
      >
        {value}
      </button>
    </li>
  )
}
export default denominationItem
