import React, {useEffect, useState} from "react";
import axios from 'axios';

function App(){
  const dataContent = {
    'id': 1,
    "name": 'Dia',
    "company": "naker",
    "email": "blabla@gmail.com",
    "number": '0121548244',
    "token": '@@@@@à'
    }

  const [data, setProfil] = useState();
  useEffect(() => {
    axios.post('/profil',  dataContent )
  .then(response => console.log(response))
  .catch(error => console.log(error));
  }, []);

 return  data? (    
        <div>{data.map(p=>
          <li key={p}>{p}</li>
        )}</div>
    ): <span>loarding...</span>
      }

export default App;