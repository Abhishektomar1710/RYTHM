import React, { useEffect, useState } from 'react';

export const Song = (props)=>{
    const [songs, setSongs] = useState([]);
    const [currOrder, setOrder] =useState('asc');
    const audioStyle = {
        width:'300px'
    }
    const imageStyle = {
        height:'150px',
        width:'150px'
    }
    const changeOrder=()=>{

        const button = document.querySelector('#orderbutton');
        if(currOrder==='asc'){
            setOrder('desc')
            button.innerHTML = 'Descending';
        }
        else {
            setOrder('asc');
            button.innerHTML = 'Ascending';
        }    
    }
    let singerName  = props.singerName;
    if(!singerName){
        singerName = props.match.params.singerName;
    }

   
    console.log('Singer Name Rec is ', singerName);
    useEffect(()=>{
            let url = `${process.env.REACT_APP_SONG_URL}?name=${singerName}`;
            const promise = fetch(url);
            promise.then(response=>{
                response.json().then(data=>{
                    if(currOrder === 'desc')
                    {data.sort((a, b)=>{
                        if(b.name < a.name)
                         return -1;
                        if(b.name > a.name)
                         return 1;
                        return 0; 
                    })}
                    else
                    {data.sort((a, b)=>{
                        if(a.name < b.name)
                         return -1;
                        if(a.name > b.name)
                         return 1;
                        return 0; 
                    })
                    }
                    setSongs(data);
                }).catch(err=>{
                    console.log('JSON Error is ', err);
                })
            }).catch(err=>console.log("Error is ",err));
    });
    return (<>
    <div >
    <h3>Song of {singerName}</h3>
    <br />
    <button className="btn btn-primary" id="orderbutton" onClick={changeOrder}>Change order</button>
   
    {/* <span> click to reverse order</span> */}
    <br />
    <br />
    {songs.map(song=>{
        return (<div>
            <img src={song.imageurl} style={imageStyle} alt ='Song'/>

            <p>{song.name}</p>
            <audio controls style={audioStyle}>
                <source src={song.url} type="audio/mp4"></source>
            </audio>
            <br />
            <br />
        </div>)
    })}
    </div>
    </>
    )
}