// // const teachers = require("../models/teacherModel");
// // const { registerSchema } = require("../helpers/auth");
// // const { initializingPassport } = require("../helpers/teacherPassport");
// // const teacherMessage = require("../helpers/apiError");
// // const { successResponse, alertResponse, errorResponse } = require("../helpers/responseErrHelper");

// const login = async (req, res) => {
//   try {
//     res.status(200).json(successResponse(200, "Success", teacherMessage.teacher.teacherLogin, req.user));
//   } catch (e) {
//     res.status(400).json(errorResponse(400, "Error", teacherMessage["teacher"].teacherNotFound));
//   }
// };

// // get all teacher information
// const teacherList = async (req, res) => {
//   try {
//     const list = await teachers.find().populate("admin_id", "_id firstname lastname");
//     res.status(200).json(successResponse(200, "success", teacherMessage.teacher.teacherList, list));
//   } catch (e) {
//     res.status(400).json(errorResponse(400, "error", teacherMessage["teacher"].teacherNotFound));
//   }
// };

// // adding teacher infomation

// const teacherAdd = async (req, res) => {
//   try {
//     const { firstname, lastname, email, password, confirmpassword, admin_id } = req.body;
//     const result = await registerSchema.validateAsync(req.body);
//     const teacherExist = await teachers.findOne({ email: result.email });
//     if (teacherExist) {
//       res.status(401).json(alertResponse(401, "Error", teacherMessage["teacher"].teacherExistError));
//     } else {
//       const teacher = await new teachers({
//         firstname,
//         lastname,
//         email,
//         password,
//         confirmpassword,
//         admin_id,
//       });
//       await teacher.save();
//       res.status(200).json(successResponse(200, "Success", teacherMessage["teacher"].teacherSuccess, teacher));
//     }
//   } catch (error) {
//     res.status(400).json(errorResponse(400, "Error", teacherMessage["teacher"].teacherAddError));
//   }
// };
