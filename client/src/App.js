import React, {useEffect, useState} from "react";

function App(){
  const [data, setProfil] = useState();
  useEffect(() => {
    fetch("profil").then(
      (res) => res.json()
      ).then((data) => setProfil(data));
  }, []);

 return  data? (    
        <div>{data.profil.map(p=>
          <li key={p}>{p}</li>
        )}</div>
    ): <span>loarding...</span>
      }

export default App;