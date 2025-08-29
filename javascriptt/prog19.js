// Base class
class Hospital {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getDetails() {
        return `${this.name}, located at ${this.location}`;
    }
}

// Doctor class extending Hospital
class Doctor extends Hospital {
    constructor(name, location, doctorName, specialization) {
        super(name, location);
        this.doctorName = doctorName;
        this.specialization = specialization;
    }

    getDoctorInfo() {
        return `${this.doctorName} (${this.specialization}) at ${this.getDetails()}`;
    }
}

// Patient class extending Hospital
class Patient extends Hospital {
    constructor(name, location, patientName, cause) {
        super(name, location);
        this.patientName = patientName;
        this.cause = cause;
    }

    getPatientInfo() {
        return `${this.patientName} is suffering from ${this.cause} and is at ${this.getDetails()}`;
    }
}

// Usage
const doctor = new Doctor("City Hospital", "Bangalore", "Dr. Smith", "Cardiology");
const patient = new Patient("City Hospital", "Bangalore", "Rohit", "Chest Pain");

console.log(doctor.getDoctorInfo());
console.log(patient.getPatientInfo());
