import React from 'react'
import {Image} from "react-bootstrap";

const FollowAccount = () => {
  return(
    <div className="ui items" style={{marginLeft: "30px"}}>
      <div className="item">
        <div className="ui small image">
          <Image style={{width: "40px"}} src="https://static-cdn.jtvnw.net/jtv_user_pictures/98bb53c3-4e2f-47f3-9c4b-6c0484b383f6-profile_image-300x300.png" roundedCircle />
        </div>
        <div className="content" style={{marginLeft: "-120px", paddingTop: "2px"}}>
          <div className="header" style={{fontSize: "90%"}}>다라바</div>
          <div className="meta" style={{marginTop: "1px"}}>
            <span className="price" style={{fontSize: "90%"}}>추천작가</span>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="ui small image">
          <Image style={{width: "40px"}} src="https://static-cdn.jtvnw.net/jtv_user_pictures/98bb53c3-4e2f-47f3-9c4b-6c0484b383f6-profile_image-300x300.png" roundedCircle />
        </div>
        <div className="content" style={{marginLeft: "-120px", paddingTop: "2px"}}>
          <div className="header" style={{fontSize: "90%"}}>다라바</div>
          <div className="meta" style={{marginTop: "1px"}}>
            <span className="price" style={{fontSize: "90%"}}>추천작가</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ui small image">
          <Image style={{width: "40px"}} src="https://static-cdn.jtvnw.net/jtv_user_pictures/98bb53c3-4e2f-47f3-9c4b-6c0484b383f6-profile_image-300x300.png" roundedCircle />
        </div>
        <div className="content" style={{marginLeft: "-120px", paddingTop: "2px"}}>
          <div className="header" style={{fontSize: "90%"}}>다라바</div>
          <div className="meta" style={{marginTop: "1px"}}>
            <span className="price" style={{fontSize: "90%"}}>추천작가</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowAccount;