// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbDetails, getFilteredImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbDetails
  const thumbnailClassName = isActive ? `active` : `thumbnail`

  const onDisplay = () => {
    getFilteredImage(id)
  }

  return (
    <li className="thumbnail-list-items">
      <button type="button" onClick={onDisplay} className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
