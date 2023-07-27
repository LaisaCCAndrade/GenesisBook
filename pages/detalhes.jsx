import React from "react";
import { useRouter } from "next/router";
import BookDetails from "../components/BookDetails";

const Detalhes = () => {
  const { id } = useRouter().query;

  return (
    <div>
      <BookDetails id={id} />
    </div>
  );
};

export default Detalhes;
