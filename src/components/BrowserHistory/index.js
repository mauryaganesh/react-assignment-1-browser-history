import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {logoUrl, title, domainUrl, timeAccessed} = historyDetails

  const onDelete = () => {
    deleteHistory(historyDetails.id)
  }

  return (
    <li className="list-items">
      <p>{timeAccessed}</p>
      <div className="history-detail">
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="submit"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
