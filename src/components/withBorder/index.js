import React, { useState, useEffect } from "react";

export default function (Component) {
  return ({ result, ...props }) => {
    const [borderResultClass, setBorderResultClass] = useState("");

    useEffect(() => {
      setBorderResultClass(result || "");
    }, [result]);

    return <Component {...props} borderResultClass={borderResultClass} />;
  };
}
