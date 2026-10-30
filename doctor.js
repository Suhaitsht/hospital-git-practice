const doctors = [];

function addDoctor(name, speciality, fee) {
  const newDoctor = {
    id: doctors.length + 1,
    name,
    speciality,
    fee,
    available: false,
  };

  doctors.push(newDoctor);

  return newDoctor;
}

addDoctor("Dr. Ahmed", "Cardiology", 3500);
addDoctor("Dr. Sara", "Dermatology", 2500);

console.log(doctors);
