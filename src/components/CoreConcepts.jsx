import PropTypes from 'prop-types';

CoreConcepts.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }
  
  
  export default function CoreConcepts({ image, title, description}) {
    return (
      <li>
        <img src={image} className='image'/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }