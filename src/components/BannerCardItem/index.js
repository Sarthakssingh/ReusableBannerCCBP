// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {details, key} = props
  const {headerText, description, className} = details

  return (
    <div>
      <li className={`container ${className}`}>
        <div>
          <h1 className="heading">{headerText}</h1>
          <p className="para">{description}</p>
          <button className="button">Show More</button>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
