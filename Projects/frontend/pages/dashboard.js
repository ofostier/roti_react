import Dashboard from "../components/Dashboard";
import PleaseSignIn from '../components/PleaseSignIn';

export default function CreateRotiPage() {
  return(
    <PleaseSignIn>
      <Dashboard />
    </PleaseSignIn>   
  )
}