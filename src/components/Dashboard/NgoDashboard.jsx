import React, { useEffect, useState } from 'react'
import BaseDashboard from '../BaseDashboard'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios';
import { server } from '../../App';
import { Chart } from 'react-google-charts'

const NgoDashboard = () => {
    const data = [
        ["Company", "Thousands of dollars"],
        ["Company A", 11],
        ["Company B", 2],
        ["Company C", 2],
        ["Company D", 2],
        ["Company E", 7],
    ];
    const options = {
        // title: "Donations recieved",
        is3D: true,
    };


    // const [donationData, setDonationData] = useState()
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get(`${server}/api/ngo/getDonations`)
    //         setDonationData(response.data.donations)
    //     }
    //     fetchData()
    // }, []);

    return (
        <>
            <Navbar />
            <BaseDashboard />
            <div className="container mt-4">
                <h2 className="mb-4">Donations made</h2>
                <div className="row">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <a href="#" className="btn btn-light btn-outline-dark mt-3 align-self-end" >Show More ...</a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NgoDashboard



