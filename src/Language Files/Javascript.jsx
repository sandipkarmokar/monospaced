import React from "react";

const Javascript = () => {
  return (
    <pre>
      <code>
        {`
    const greeter = (name) => {
      console.log(name);
    };

    greeter("alex");
    const greeter = (name) => {
      console.log(name);
    };

    greeter("alex");
    const greeter = (name) => {
      console.log(name);
    };

    greeter("alex");
        `}
      </code>
    </pre>
  );
};

export default Javascript;
