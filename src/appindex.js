import {useState} from 'react'
import './appindex.css'

const MyApp=()=>{
const [currentState,setCreds]=useState({statusText:"Your Device is Locked",
    btnText:"Unlock",
    imgUrl:"https://assets.ccbp.in/frontend/hooks/lock-img.png",
    altText:"unlock"})

    const onUnlock=()=>{
      setCreds({statusText:"Your Device is Unlocked",
        btnText:"Lock",
        imgUrl:"https://assets.ccbp.in/frontend/hooks/unlock-img.png",
        altText:"lock"})
    }
    
    const onLock=()=>{
     setCreds({statusText:"Your Device is Locked",
        btnText:"Unlock",
        imgUrl:"https://assets.ccbp.in/frontend/hooks/lock-img.png",
        altText:"unlock"})
    }

    const {statusText,btnText,altText,imgUrl}=currentState
    
return <div className="container">
    <img src={imgUrl} alt={altText}/>
    <h1>{statusText}</h1>
    {btnText==="Unlock"?<button type="button" onClick={onUnlock}>UnLock</button>:<button type="button" onClick={onLock}>Lock</button>}
</div>
}
export default MyApp