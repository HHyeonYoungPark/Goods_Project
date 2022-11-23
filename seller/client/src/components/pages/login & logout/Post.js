import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "../../css/pages/Post.css";

function Post(props) {
  const complete = (data) => {
    let fullAddress = data.address;
    let zonecode = data.zonecode;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(zonecode);

    props.setAddress({
      ...props.address,
      address: fullAddress,
      zonecode: zonecode,
    });
  };

  return (
    <div className="postmodal">
      <DaumPostcode autoClose onComplete={complete} />
    </div>
  );
}

export default Post;
