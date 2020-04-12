import React, {useEffect} from 'react';
import Nav from './Nav';
import '../style/DataArea.css';
import API from "../utils/API";

export default function DataArea() {

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
        <div className="dataArea">
            <Nav />
        </div>
    )
}
