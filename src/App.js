import './styles.css';
import Navbar from './Components/Navbar'
//import {Routes} from "react-router-dom"
import { COMPANIES } from './Components/companies';
import { useState } from 'react';
import Table from './Components/table'


export default function App(){

  const [query,setQuery]=useState(""); //for the search bar  
  
  //the search keys 
  const keys =["CompanyName","Lieu","Code_NAF"]

   /*
     let's make this cleaner:
     console.log(COMPANIES[0])

    return data.filter((item)=>item.CompanyName.toLowerCase().includes(query)||
    item.Code_NAF.toLowerCase().includes(query)||
    item.Lieu.toLowerCase().includes(query)); 

    */
 const search =(data)=>{
    return (
         data.filter((item)=>
          keys.some((key)=>item[key].toLowerCase().includes(query)) )
   );

    //using the data fromp the current component format to get the match, tho in the actual PAPPERS front the data that's used is the complete one containing all the info : SIREN,.... 
  };


  console.log(COMPANIES.filter(company=>company.CompanyName.toLowerCase().includes(" ")) );
  return (

    <><div className="App">
      <Navbar />
    </div>

    <div> 
      <input type ="text" placeholder="Entreprise,N Siren,Dirigeant,Mot-Clé..." 
      className="search" onChange={e=>setQuery(e.target.value)} />

      <Table data={search(COMPANIES)}/>
    </div> 

    
 {/* <div>
    <ul className="list" >
      
        {COMPANIES.filter(company =>company.CompanyName.toLowerCase().includes(query)).map((company) => (
         
            <li key={company.id} className='listItem'> {company.CompanyName}</li> 

        ))}
    </ul>
    </div>*/}
    
    
    </>
  
  );
  


}
           /* <h2>Nom de l'entreprise :{company.CompanyName}</h2>
            <p> Forme Juridique {company.Forme_Juridique}</p>
            <p>Activité :{company.ACtivité}</p>
            <p>Depuis le {company.Depuis_le}</p>
            <p>code NAF {company.Code_NAF}</p>
            <p>Lieu {company.Lieu}</p>
            <p>Code postal {company.Code_postal}</p>
            <p>Effectif {company.Effectif}</p>
        </li>*/
