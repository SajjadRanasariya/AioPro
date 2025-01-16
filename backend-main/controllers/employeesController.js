import Employees from "./../models/employees";
import mongoose from "mongoose";

async function getNextAutoIncrementValue() {
  const code = await Employees.countDocuments({});
  return `AIO${(1 * code + 1).toString().padStart(4, '0')}`;
}

export const allEmployees = async (query) => {
  return await Employees.find(query);
};

export const oneEmployees = async (id) => {
  return await Employees.findById(id);
};

export const addEmployees = async (data, profileImg) => {

  const nextAutoIncrementValue = await getNextAutoIncrementValue();

  const EmployeesData = {
    basicInformation: {
      profileImg: profileImg,
      employeesCode: nextAutoIncrementValue,
      firstName: data.firstName,
      middleName: data.middleName,
      surname: data.surname,
      gender: data.gender,
      workType: data.workType,
      Dob: data.Dob,
      maritalStatus: data.maritalStatus,
      anniversaryDate: data.anniversaryDate,
    },
    contactInformation: {
      primaryContact: data.primaryContact,
      alternateContact: data.alternateContact,
      email: data.email,
      country: data.country,
      state: data.state,
      hq: data.hq,
      multipleHq: data.multipleHq,
      division: data.division,
      zone: data.zone,
      homeLocation: data.homeLocation,
      permanentLoction: data.permanentLoction,
      pincode: data.pincode,
      additionalDivision: data.additionalDivision,
    },
    workInformation: {
      exStations: data.exStations,
      outStations: data.outStations,
      designation: data.designation,
      assignedTo: data.assignedTo,
      additionalSupervisor: data.additionalSupervisor,
      Doj: data.Doj,
      endProbationDate: data.endProbationDate,
      endConfirmationDate: data.endConfirmationDate,
      dailyWorkHours: data.dailyWorkHours,
      showAccompanied: data.showAccompanied,
      accompaniedEmployee: data.accompaniedEmployee,
      dateOfResignation: data.dateOfResignation,
      showInTransit: data.showInTransit,
    },
    otherInformation: {
      employeeQualification: data.employeeQualification,
      aadharNumber: data.aadharNumber,
      PanNumber: data.PanNumber,
      pfNumber: data.pfNumber,
      ESICNumber: data.ESICNumber,
      PfUanNumber: data.PfUanNumber,
      driverLicenseNumber: data.driverLicenseNumber,
      bloodGroup: data.bloodGroup,
      Language: data.Language,
    },
    dailyAllowanceInformation: {
      DA_HO: data.DA_HO,
      DA_EX: data.DA_EX,
      DA_OUT: data.DA_OUT,
      DA_RHO: data.DA_RHO,
      DA_TRANSIT: data.DA_TRANSIT,
      DA_OTHER: data.DA_OTHER,
    },
    accountInformation: {
      accountHolderName: data.accountHolderName,
      accountNumber: data.accountNumber,
      IFSCNumber: data.IFSCNumber,
      beneficiaryID: data.beneficiaryID,
      bankName: data.bankName,
      branchName: data.branchName,
      nomineeName: data.nomineeName,
    },
    status: 'pending'
  };

  return await Employees.create(EmployeesData);
};



export const updateEmployees = async (data, profileImg) => {

  const EmployeesData = {
    basicInformation: {
      profileImg: profileImg || data.profileImg,
      employeesCode: data.employeesCode,
      firstName: data.firstName,
      middleName: data.middleName,
      surname: data.surname,
      gender: data.gender,
      workType: data.workType,
      Dob: data.Dob,
      maritalStatus: data.maritalStatus,
      anniversaryDate: data.anniversaryDate,
    },
    contactInformation: {
      primaryContact: data.primaryContact,
      alternateContact: data.alternateContact,
      email: data.email,
      country: data.country,
      state: data.state,
      hq: data.hq,
      multipleHq: data.multipleHq,
      division: data.division,
      zone: data.zone,
      homeLocation: data.homeLocation,
      permanentLoction: data.permanentLoction,
      pincode: data.pincode,
      additionalDivision: data.additionalDivision,
    },
    workInformation: {
      exStations: data.exStations,
      outStations: data.outStations,
      designation: data.designation,
      assignedTo: data.assignedTo,
      additionalSupervisor: data.additionalSupervisor,
      Doj: data.Doj,
      endProbationDate: data.endProbationDate,
      endConfirmationDate: data.endConfirmationDate,
      dailyWorkHours: data.dailyWorkHours,
      showAccompanied: data.showAccompanied,
      accompaniedEmployee: data.accompaniedEmployee,
      dateOfResignation: data.dateOfResignation,
      showInTransit: data.showInTransit,
    },
    otherInformation: {
      employeeQualification: data.employeeQualification,
      aadharNumber: data.aadharNumber,
      PanNumber: data.PanNumber,
      pfNumber: data.pfNumber,
      ESICNumber: data.ESICNumber,
      PfUanNumber: data.PfUanNumber,
      driverLicenseNumber: data.driverLicenseNumber,
      bloodGroup: data.bloodGroup,
      Language: data.Language,
    },
    dailyAllowanceInformation: {
      DA_HO: data.DA_HO,
      DA_EX: data.DA_EX,
      DA_OUT: data.DA_OUT,
      DA_RHO: data.DA_RHO,
      DA_TRANSIT: data.DA_TRANSIT,
      DA_OTHER: data.DA_OTHER,
    },
    accountInformation: {
      accountHolderName: data.accountHolderName,
      accountNumber: data.accountNumber,
      IFSCNumber: data.IFSCNumber,
      beneficiaryID: data.beneficiaryID,
      bankName: data.bankName,
      branchName: data.branchName,
      nomineeName: data.nomineeName,
    },
  };

  return await Employees.findByIdAndUpdate(data._id, EmployeesData);
};

export const insertMany = async (data) => {
  const employeesData = data.map((emp) => ({
    basicInformation: {
      employeesCode: emp.employeesCode,
      firstName: emp.firstName,
      middleName: emp.middleName,
      surname: emp.surname,
      gender: emp.gender,
      workType: emp.workType,
      Dob: emp.Dob,
      maritalStatus: emp.maritalStatus,
      anniversaryDate: emp.anniversaryDate,
    },
    contactInformation: {
      primaryContact: emp.primaryContact,
      alternateContact: emp.alternateContact,
      email: emp.email,
      country: emp.country,
      state: emp.state,
      hq: emp.hq,
      multipleHq: emp.multipleHq,
      division: emp.division,
      zone: emp.zone,
      homeLocation: emp.homeLocation,
      permanentLocation: emp.permanentLocation,
      pincode: emp.pincode,
      additionalDivision: emp.additionalDivision,
    },
    workInformation: {
      exStations: emp.exStations,
      outStations: emp.outStations,
      designation: emp.designation,
      assignedTo: emp.assignedTo,
      additionalSupervisor: emp.additionalSupervisor,
      Doj: emp.Doj,
      endProbationDate: emp.endProbationDate,
      endConfirmationDate: emp.endConfirmationDate,
      dailyWorkHours: emp.dailyWorkHours,
      showAccompanied: emp.showAccompanied,
      accompaniedEmployee: emp.accompaniedEmployee,
      dateOfResignation: emp.dateOfResignation,
      showInTransit: emp.showInTransit,
    },
    otherInformation: {
      employeeQualification: emp.employeeQualification,
      aadharNumber: emp.aadharNumber,
      PanNumber: emp.PanNumber,
      pfNumber: emp.pfNumber,
      ESICNumber: emp.ESICNumber,
      PfUanNumber: emp.PfUanNumber,
      driverLicenseNumber: emp.driverLicenseNumber,
      bloodGroup: emp.bloodGroup,
      Language: emp.Language,
    },
    dailyAllowanceInformation: {
      DA_HO: emp.DA_HO,
      DA_EX: emp.DA_EX,
      DA_OUT: emp.DA_OUT,
      DA_RHO: emp.DA_RHO,
      DA_TRANSIT: emp.DA_TRANSIT,
      DA_OTHER: emp.DA_OTHER,
    },
    accountInformation: {
      accountHolderName: emp.accountHolderName,
      accountNumber: emp.accountNumber,
      IFSCNumber: emp.IFSCNumber,
      beneficiaryID: emp.beneficiaryID,
      bankName: emp.bankName,
      branchName: emp.branchName,
      nomineeName: emp.nomineeName,
    },
    status: emp.status,
  }));

  return await Employees.insertMany(employeesData);
};

export const deleteEmployees = async (id) => {
  return await Employees.findOneAndRemove({ _id: id });
};

export const deleteMany = async (Id) => {
  const deletionCriteria = {
    _id: { $in: Id.map((id) => mongoose.Types.ObjectId(id)) },
  };

  return await Employees.deleteMany(deletionCriteria, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Employees deleted successfully.");
    }
  });
};
