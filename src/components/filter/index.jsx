// import { useState } from "react"
import { minExperienceOptions , companyNameOptions, locationOptions, jobRoleOptions, minSalaryOptions} from "../../helper";
import './filterStyles.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Filter = () => {
  return (
    <div className="filter-wrapper">
 
 {/* min experience filter */}
      <div>
      <Autocomplete
      id="min-exp"
      options={minExperienceOptions}
      sx={{ width: 240 }}
      renderInput={(params) => <TextField {...params} color="primary" placeholder="Min experience" size="small" InputProps={{
            ...params.InputProps ,endAdornment: <InputAdornment position="end">| <ExpandMoreIcon /></InputAdornment>,
          }}/>}
    />
      </div>

      {/* company name filter */}
      <div>
      <Autocomplete
      id="company-name"
      options={companyNameOptions}
      sx={{ width: 240 }}
      renderInput={(params) => <TextField {...params} color="primary" placeholder="Company Name" size="small" InputProps={{
            ...params.InputProps ,endAdornment: <InputAdornment position="end">| <ExpandMoreIcon /></InputAdornment>,
          }}/>}
    />
      </div>

      {/* location filter */}
      <div>
      <Autocomplete
      id="company-location"
      options={locationOptions}
      sx={{ width: 240 }}
      renderInput={(params) => <TextField {...params} color="primary" placeholder="Location" size="small" InputProps={{
            ...params.InputProps ,endAdornment: <InputAdornment position="end">| <ExpandMoreIcon /></InputAdornment>,
          }}/>}
    />
      </div>

      {/* remote setting filter */}
      <div>
      <Autocomplete
      id="company-location"
      options={['remote', 'onsite']}
      sx={{ width: 240 }}
      renderInput={(params) => <TextField {...params} color="primary" placeholder="Remote/Onsite" size="small" InputProps={{
            ...params.InputProps ,endAdornment: <InputAdornment position="end">| <ExpandMoreIcon /></InputAdornment>,
          }}/>}
    />
      </div>

      {/* job role setting */}
      <div>
      <Autocomplete
      id="company-location"
      options={jobRoleOptions}
      sx={{ width: 240 }}
      renderInput={(params) => <TextField {...params} color="primary" placeholder="Job Role" size="small" InputProps={{
            ...params.InputProps ,endAdornment: <InputAdornment position="end">| <ExpandMoreIcon /></InputAdornment>,
          }}/>}
    />
      </div>

      {/* min salary filter */}
      <div>
      <Autocomplete
      id="company-location"
      options={minSalaryOptions}
      sx={{ width: 240 }}
      renderInput={(params) => <TextField {...params} color="primary" placeholder="Min Base Pay" size="small" InputProps={{
            ...params.InputProps ,endAdornment: <InputAdornment position="end">| <ExpandMoreIcon /></InputAdornment>,
          }}/>}
    />
      </div>

    </div>
  )
}
