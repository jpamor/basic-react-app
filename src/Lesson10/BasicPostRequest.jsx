import { useState } from "react";
import { useAPI } from "./Hooks/useApi";
import "./Styles/App.css";

export default function StyledCardWithForm() {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");


    const { res, loading, error } = useAPI("/users", "POST", {
        name: name,
        job: job
    });


    function handleFormSubmit(e) {
        e.preventDefault();

    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    Basic POST Request
                </div>
                <div className="card-body">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="job" className="form-label">Job:</label>
                            <input type="text" className="form-control" id="job" value={job} onChange={(e) => setJob(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                {loading && <div className="card-footer">Loading...</div>}
                {error && <div className="card-footer text-danger">Error: {error.message}</div>}
                {res && <div className="card-footer">
                    <h5 className="card-title">Response:</h5>
                    <p className="card-text">id: {res.id}</p>
                    <p className="card-text">Name: {res.name}</p>
                    <p className="card-text">Job: {res.job}</p>
                    <p className="card-text">created At: {res.createdAt}</p>
                </div>}
            </div>
        </div>
    );
}
