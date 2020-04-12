import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import '../style/DataArea.css';
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

export default function DataArea() {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
        headings: [
          { name: "Image", width: "10%", order: "descend" },
          { name: "name", width: "10%", order: "descend" },
          { name: "phone", width: "20%", order: "descend" },
          { name: "email", width: "20%", order: "descend" },
          { name: "dob", width: "10%", order: "descend" }
        ]
      });

      

    useEffect(() => {
        API.getUsers().then(results => {
          console.log(results.data.results);
        //   setDeveloperState({
        //     ...developerState,
        //     users: results.data.results,
        //     filteredUsers: results.data.results
        //   });
        });
      }, []);

    return (
        <DataAreaContext.Provider>
            <div className="dataArea">
                <Nav />
            </div>
        </DataAreaContext.Provider>
    )
}
