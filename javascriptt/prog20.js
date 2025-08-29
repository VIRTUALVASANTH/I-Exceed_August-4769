// Base object
const hospital = {
    name: "City Hospital",
    location: "Bangalore",
    getDetails: function () {
        return `${this.name}, located at ${this.location}`;
    }
};

let doctor = Object.create(hospital);
doctor.name = "City Hospital";
doctor.location = "Bangalore";
doctor.doctorName = "Dr. Smith";
doctor.specialization = "Cardiology";
doctor.getDoctorInfo = function () {
    return `${this.doctorName} (${this.specialization}) at ${this.getDetails()}`;
};

// Create patient object inheriting from hospital
let patient = Object.create(hospital);
patient.name = "City Hospital";
patient.location = "Bangalore";
patient.patientName = "Rohit";
patient.ailment = "Chest Pain";
patient.getPatientInfo = function () {
    return `${this.patientName} is suffering from ${this.ailment} and is at ${this.getDetails()}`;
};

// Usage
console.log(doctor.getDoctorInfo());
console.log(patient.getPatientInfo());
