import {useEffect, useState} from 'react';
import './App.css';
import {Table} from 'react-bootstrap'
import CustomModal from './components/ui/modals'
function App() {
  const [data,setData] = useState([])
  
  return (
    <div className="App">
      <CustomModal setdata={setData}/>
      {data.length ? 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el,key)=>
            <tr key={key}>
              <td>{key+1}</td>
            <td>{el.firstName}</td>
            <td>{el.lastName}</td>
            <td>{el.email}</td>
            <td>{el.date}</td>
          </tr>
            )}
          </tbody>
        </Table>
      
      : 
      <div>Please create data</div>
      }
      
    </div>
  );
}

export default App;
