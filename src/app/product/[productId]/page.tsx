import React from "react";

function page({ params }:{params:{productId: string}}) {
  return <div>your given id is {params.productId} </div>;
}

export default page;
