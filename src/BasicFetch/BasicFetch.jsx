import axios from "axios";
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import './App.css';
import { baseURL } from './api_links';

export default function BasicFetch() {
    var instance = axios.create({
        baseURL: baseURL,
    });

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make Axios request
                instance.get("/api/Student", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(res => {
                    setStudents(d => res.data);
                    setLoading(false);
                }).catch(err => {
                    console.log(err)
                    setLoading(false);
                })
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
        return () => {

        };
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : students ? (
                <table>
                    <thead>
                        <tr>
                            <th>STUDENT ID</th>
                            <th>FIRST NAME</th>
                            <th>MIDDLE NAME</th>
                            <th>LAST NAME</th>
                            <th>BIRTHDATE</th>
                            <th>EMAIL ADDRESS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, id) => (
                            <tr key={id}>
                                <td>{student.studentID}</td>
                                <td>{student.firstName}</td>
                                <td>{student.middleName}</td>
                                <td>{student.lastName}</td>
                                <td>{moment(student.birthDate).format("MM/DD/YYYY")}</td>
                                <td>{student.emailAddress}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            ) : (
                <p>No data available</p>
            )
            }
        </div >
    );

}