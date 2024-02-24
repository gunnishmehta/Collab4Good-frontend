
import React from 'react'
import BaseDashboard from '../BaseDashboard'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { server } from '../../App';

import { Chart } from 'react-google-charts'

const CorporateDashboard = () => {
  const data = [
    ["Ngo Events", "Thousands of dollars"],
    ["Event A", 11],
    ["Event B", 2],
    ["Event C", 2],
    ["Event D", 2],
    ["Event E", 7],
  ];
  const options = {
    // title: "Donations made",
    is3D: true,
  };

  //   const [donationData, setDonationData] = useState([
  //     { title: 'One', value: 10, color: '#E38627' },
  //     { title: 'Two', value: 15, color: '#C13C37' },
  //     { title: 'Three', value: 20, color: '#6A2135' },
  // ])
  // useEffect(async()=>{
  //   const response = await axios.get(`${server}/api/corporate/getDonations`)
  //     setDonationData(response.data.donations)
  // },[]);

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

export default CorporateDashboard
