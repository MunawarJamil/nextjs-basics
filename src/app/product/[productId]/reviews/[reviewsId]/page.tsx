import React from "react";

function page({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  return (
    <div>
      product id is : {params.productId} and reviws id is : {params.reviewsId}
    </div>
  );
}

export default page;
