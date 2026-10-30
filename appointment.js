// Hospital Appointment Management System

const appointments = [];

// Create Appointment
function addAppointment(patientName, doctorName, appointmentDate) {
  const newAppointment = {
    id: appointments.length + 1,
    patientName,
    doctorName,
    appointmentDate,
    status: "Pending",
  };

  appointments.push(newAppointment);

  return newAppointment;
}

// Create Sample Appointments
addAppointment("Nimal", "Dr. Ahmed", "2026-11-10");
addAppointment("Kamal", "Dr. Sara", "2026-11-11");

// Display Appointments
console.log("Hospital Appointments:");
console.table(appointments);
