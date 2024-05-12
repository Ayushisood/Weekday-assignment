import './jobCardStyles.css';
import FlashIcon from '../../assets/lightning.png';
import PropTypes from 'prop-types';


export const JobCard = ({jobData}) => {
  return (
    <div className='card-wrapper'>
    {/* header */}
        <div className='header-container'>
            <img className='company-logo' src={jobData.logoUrl}/>
            <div>
                <p className='light-text text-margin-bottom'>{jobData.companyName}</p>
                <p className='text-margin-bottom'>{jobData.jobRole}</p>
                <p>{jobData.location}</p>
            </div>
        </div>

        {/* job description */}
        <div className='job-description-container'>
            <div className='about-company-text'>About Company:</div>
            <p className='about-us-text'>About us</p>
            <p>{jobData.jobDetailsFromCompany}</p>
        </div>

        {/* experience */}
        <div className='text-margin-bottom'>
        <p className='light-text'>Minimum experience</p>
        <p>{jobData.minExp}</p>
        </div>

        {/* apply button */}
        <div className='apply-button'>
            <img src= {FlashIcon} className='apply-icon'/>
            <span className='apply-text'>Easy Apply</span>
        </div>
    </div>
  )
}

JobCard.propTypes ={
    jobData: PropTypes.object.isRequired,
}