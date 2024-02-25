export default function Card(){


    
    return <>
            <div className="card">
            <img className="avatar" src="https://reqres.in/img/faces/1-image.jpg" alt="Avatar"></img>
            <div className="user-info">
                <div>
                    <label htmlFor="id">ID:</label>
                    <span id="id">1</span>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <span id="email">george.bluth@reqres.in</span>
                </div>
                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <span id="first_name">George</span>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <span id="last_name">Bluth</span>
                </div>
            </div>
        </div>
    </>
}