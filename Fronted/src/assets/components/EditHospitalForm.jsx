import React, { useState, useEffect } from 'react';

const EditHospitalForm = ({ hospital, updateHospital }) => {
    // State variables for form fields
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        imageUrl: '',
        specialities: [],
        rating: '',
        description: '',
        images: [],
        numberOfDoctors: '',
        numberOfDepartments: ''
    });

    const specialitiesOptions = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'];

    // Initialize form fields with hospital data on component mount/update
    useEffect(() => {
        setFormData({
            name: hospital.name,
            city: hospital.city,
            imageUrl: hospital.imageUrl,
            specialities: hospital.specialities,
            rating: hospital.rating,
            description: hospital.description,
            images: hospital.images,
            numberOfDoctors: hospital.numberOfDoctors,
            numberOfDepartments: hospital.numberOfDepartments
        });
    }, [hospital]);

    // Handle changes for all form fields dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Handle changes specifically for the specialities multi-select dropdown
    const handleSpecialitiesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setFormData(prevState => ({ ...prevState, specialities: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        updateHospital(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Hospital</h2>
            {Object.keys(formData).map((field) => (
                field !== 'specialities' && field !== 'images' ? (
                    <div key={field} className="mb-4">
                        <label className="block mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <input
                            type={field === 'rating' || field.includes('number') ? 'number' : 'text'}
                            name={field}
                            value={formData[field]}
                            placeholder={field}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required={field !== 'description' && field !== 'images'}
                            min={field === 'rating' ? "1" : undefined}
                            max={field === 'rating' ? "5" : undefined}
                        />
                    </div>

                ) : null
                
                
            ))}

            <div className="mb-4">
                <label className="block mb-2">Specialities</label>
                <select multiple value={formData.specialities} onChange={handleSpecialitiesChange} className="w-full p-2 border rounded">
                    {specialitiesOptions.map((speciality, index) => (
                        <option key={index} value={speciality}>{speciality}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Images (comma-separated URLs)</label>
                <input
                    type="text"
                    name="images"
                    value={formData.images.join(', ')}
                    onChange={(e) => setFormData(prevState => ({ ...prevState, images: e.target.value.split(', ') }))}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Update Hospital</button>
        </form>
    );
};

export default EditHospitalForm;
