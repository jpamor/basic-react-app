import "./Styles/App.css";
import { useAPI } from "./Hooks/useApi";

export default function BasicGetRequest() {

    const { res, loading, error } = useAPI("/users?page=1", "GET");

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>Error occurred</h2>;

    if (res && res.data && res.data.length > 0) {
        return (
            <div className="user-cards">
                {res.data.map(user => (
                    <div className="card" key={user.id}>
                        <h2>User Details</h2>
                        <p>ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                        <p>First Name: {user.first_name}</p>
                        <p>Last Name: {user.last_name}</p>
                        <img src={user.avatar} alt="User Avatar" />
                    </div>
                ))}
            </div>
        );
    } else {
        return <h2>No data available</h2>;
    }
}
