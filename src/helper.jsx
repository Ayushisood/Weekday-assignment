import jobs from './data.json';
export const minExperienceOptions = Array.from(new Set(jobs.data.filter((job)=> {
    return job.minExp!==null
}).map((job)=> job.minExp?.toString())));


export const companyNameOptions = Array.from(new Set(jobs.data.filter((job)=> {
    return job.companyName!==null
}).map((job)=> job.companyName)));

export const locationOptions = Array.from(new Set(jobs.data.filter((job)=> {
    return job.location!==null && job.location!=='remote'
}).map((job)=> job.location)));

export const jobRoleOptions = Array.from(new Set(jobs.data.filter((job)=> {
    return job.jobRole!==null
}).map((job)=> job.jobRole)));

export const minSalaryOptions = Array.from(new Set(jobs.data.filter((job)=> {
    return job.minJdSalary!==null
}).map((job)=> job.minJdSalary.toString())));

console.log(minSalaryOptions); 