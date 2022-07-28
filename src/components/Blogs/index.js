import React from "react";
import { GET_BLOGS_INFO } from "../../gql/queries.gql";
import { useQuery } from "@apollo/client/react";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>ERROR</h4>;
  
  console.log({ loading, data, error });
  return (
    <div>
      <h1>بلاگ</h1>
    </div>
  );
};

export default Blogs;
