import React, { useState } from 'react';
import './App.css';
import HospitalForm from './assets/components/HospitalForm';
import HospitalsList from './assets/components/HospitalsList';
import HospitalDetails from './assets/components/HospitalDetails';
import EditHospitalForm from './assets/components/EditHospitalForm';

const App = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const addHospital = (hospital) => {
    setHospitals([...hospitals, hospital]);
  };

  const updateHospital = (updatedHospital) => {
    setHospitals(hospitals.map(hospital => hospital.name === updatedHospital.name ? updatedHospital : hospital));
    setSelectedHospital(null);
  };

  const deleteHospital = (hospitalName) => {
    setHospitals(hospitals.filter(hospital => hospital.name !== hospitalName));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Hospital Management System</h1>
      <HospitalForm addHospital={addHospital} />
      <HospitalsList hospitals={hospitals} setSelectedHospital={setSelectedHospital} deleteHospital={deleteHospital} />
      {selectedHospital && (
        <>
          <HospitalDetails hospital={selectedHospital} />
          <EditHospitalForm hospital={selectedHospital} updateHospital={updateHospital} />
        </>
      )}
    </div>
  );
};

export default App;
