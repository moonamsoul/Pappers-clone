import React from 'react';
import "./tableStyles.css"

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Nom de l'entreprise</th>
                    <th>Forme-Juridique</th>
                    <th>Depuis le </th>
                    <th>Activité</th>
                    <th>Code NAF </th>
                    <th>Lieu</th>
                    <th>Code_postal</th>
                    <th>Effectif</th>
                </tr>
                {data.map((item) =>(
                <tr key={item.id}>
                    <td>{item.CompanyName}</td>
                    <td>{item.Forme_Juridique}</td>
                    <td>{item.Depuis_le}</td>
                    <td>{item.Activité}</td>
                    <td>{item.Code_NAF}</td>
                    <td>{item.Lieu}</td>
                    <td>{item.Code_postal}</td>
                    <td>{item.Effectif}</td>
                </tr>
                ))}


            </tbody>
        </table>
      );
}
 
export default Table;

