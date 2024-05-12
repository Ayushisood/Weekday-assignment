import "./App.css";
import { JobCard, Filter } from "./components";
import jobs from "./data.json";

function App() {
  return (
    <div className="main-wrapper">
      <Filter />
      <div className="job-card-container">
        {jobs.data.map((job, index) => (
            <JobCard jobData={job} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
