import React, { useState } from "react";

export const BoardSubmit = () => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        console.log("Guessing Grade...");
      }}
    >
      Guess Grade
    </button>
  );
};
