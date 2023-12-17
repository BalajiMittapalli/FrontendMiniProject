import { useState } from "react";
import User2 from "../user2/User2";

function User() {
  let [counter, setcounter] = useState(10);
  return (
    <div className="text-center my-auto">
      <h1>Parent</h1>

      <p className="fs-3 text-info bg-secondary w-25 mx-auto">
        Counter:{counter}
      </p>
      <User2 counter={counter} setcounter={setcounter} />
    </div>
  );
}

export default User;
