import './jobCardStyles.css';
import FlashIcon from '../../assets/lightning.png';


export const JobCard = (props) => {
  return (
    <div className='card-wrapper'>
    {/* header */}
        <div className='header-container'>
            <img className='company-logo' src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"/>
            <div>
                <p className='light-text text-margin-bottom'>Company</p>
                <p className='text-margin-bottom'>Job title</p>
                <p>Location</p>
            </div>
        </div>

        {/* job description */}
        <div className='job-description-container'>
            <div className='about-company-text'>About Company:</div>
            <p className='about-us-text'>About us</p>
            <p>description</p>
        </div>

        {/* experience */}
        <div className='text-margin-bottom'>
        <p className='light-text'>Minimum experience</p>
        <p>2 years</p>
        </div>

        {/* apply button */}
        <div className='apply-button'>
            <img src= {FlashIcon} className='apply-icon'/>
            <span className='apply-text'>Easy Apply</span>
        </div>
    </div>
  )
}
