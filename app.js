const hospital = {
  name: "Jayanthi Medical Centre",
  location: "Kekirawa",
  doctors: 10,
};

const doctor = {
  id: 101,
  name: "Dr. Ahmed",
  speciality: "Cardiology",
  fee: 4500,
  available: false,
};

console.log("Hospital Name:", hospital.name);
console.log("Doctor Name:", doctor.name);
console.log("Speciality:", doctor.speciality);
console.log("Consultation Fee:", doctor.fee);
console.log("Available:", doctor.available);
console.log("Location:", hospital.location);
console.log("Total Doctors:", hospital.doctors);

const appointment = {
  id: 1001,
  patientName: "Nimal",
  doctorName: "Dr. Ahmed",
  appointmentDate: "2026-11-10",
  status: "Pending",
};

console.log("Appointment Details:", appointment);
