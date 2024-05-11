import './App.css';
import { JobCard , Filter} from './components';

function App() {

  return (
      <div className='main-wrapper'>
      <Filter />
      <div className='job-card-container'>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      </div>
      </div>
  )
}

export default App
