import React from 'react';
import { CSVLink } from 'react-csv';
import styles from "./TrackList.css"
import cross from "./cross.png"
function TrackList({ tracks, onRemoveTrack, onClearAllTracks, onExportToCSV }) {
  return (

    <div>
    <div className={styles.power}>
      <h2>Selected Tracks</h2> 
      <button onClick={onClearAllTracks}>Clear All</button> 
      <a href="/homescreendark" onClick={onExportToCSV}><button>Submit List</button>
  </a>
  </div>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
             <img src={track.image} alt="Song Icon" />
            {track.name} - {track.artist}
            <button className={styles.removeButton} onClick={() => onRemoveTrack(track.id)}> <img src={cross} alt="Remove" style={{
            width:"100%" }}/></button>
          </li>
        ))}
      </ul>
      </div>
     
      
  
   
  );
}

export default TrackList;
