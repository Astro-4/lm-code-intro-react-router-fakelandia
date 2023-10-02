import React, { useState } from "react";
const Confession: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const isFormValid = subject !== "" && details !== "";

  return (
    <form>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={subject ? "valid" : "invalid"}
        />
      </div>
      <div>
        <label htmlFor="reason">Reason:</label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className={reason ? "valid" : "invalid"}
        >
          <option value="">Select a reason</option>
          {/* Add options for misdemeanour kinds */}
        </select>
      </div>
      <div>
        <label htmlFor="details">Details:</label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className={details ? "valid" : "invalid"}
        />
      </div>
      <button type="submit" disabled={!isFormValid}>
        Confess
      </button>
    </form>
  );
};

export default Confession;
