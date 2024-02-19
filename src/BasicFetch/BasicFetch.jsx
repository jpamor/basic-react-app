import axios from "axios";
import React, { useEffect, useState } from 'react';

export default function BasicFetch() {
    var instance = axios.create({
        baseURL: "https://localhost:44351",
    });

    // State to store the data fetched from the API
    const [students, setStudents] = useState(null);
    // State to track loading state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to make Axios request
        const fetchData = async () => {
            try {
                // Make Axios request
                instance.get("/api/Student", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(res => {
                    // Set the fetched data to state
                    setStudents(d => res.data);
                    // Set loading to false after successful fetch
                    setLoading(false);
                }).catch(err => {
                    console.log(err)
                    // Set loading to false after successful fetch
                    setLoading(false);
                })

            } catch (error) {
                // Handle error
                console.error('Error fetching data:', error);
                // Set loading to false in case of error
                setLoading(false);
            }
        };

        // Call fetchData function when component mounts
        fetchData();

        // Cleanup function (optional)
        return () => {
            // You can perform cleanup tasks here if needed
        };
    }, []); // Empty dependency




    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : students ? (
                <div>
                    <div>
                        <table>
                            <tr>
                                <th>StudentId</th>
                                <th>FirstName</th>
                                <th>MiddleName</th>
                                <th>LastName</th>
                                <th>BirtDate</th>
                                <th>emailAddress</th>
                            </tr>

                            <tbody>
                                {students.map((student, id) => (
                                    <tr key={id}>
                                        <td>{student.studentID}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.middleName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.birthDate}</td>
                                        <td>{student.emailAddress}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );

}