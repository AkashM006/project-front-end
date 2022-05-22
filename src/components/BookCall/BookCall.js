import React from "react";
import "./BookCall.css";

function BookAServiceCall() {
  const [complaint, setComplaint] = React.useState("");
  const [Product, setProduct] = React.useState("");
  const [Remarks, setRemarks] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h1>Book A Service Call</h1>
        <br />
        <label>
          Product:
          <input
            name="Product"
            type="text"
            value={Product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Complaint:
          <input
            name="complaint"
            type="text"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Remarks:
          <input
            name="Remarks"
            type="text"
            value={Remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
        </label>
        <br />
        <button>Book!</button>
      </form>
    </div>
  );
}

export default BookAServiceCall;
