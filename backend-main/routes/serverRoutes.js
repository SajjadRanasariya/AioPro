import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import teamRoutes from "./teamRoutes";
import meetingRoutes from "./meetingRoutes";
import notificationRoutes from "./notificationRoutes"
import opdRoutes from './opdRoutes'
import greetingCardRoutes from './greetingCardRoutes'
import productRoutes from './productRoutes'
import Seles from './selesRoutes'
import Chemist from './chemistRoutes'
import doctorVisitRoutes from './doctorVisitRoutes'
import doctorRoutes from './doctorRoutes'
import holidayCalendarRoutes from './holidayCalendarRoutes'
import countryMasterRoutes from './countryMasterRoutes'
import stateMasterRoutes from './stateMasterRoutes'
import cityMasterRoutes from './cityMasterRoutes'
import workAgendaRoutes from './workAgendaRoutes'
import typeRoutes from './typeRoutes'
import testTypologyRoutes from "./testTypologyRoutes";
import taxMasterRoutes from './taxMasterRoutes'
import skippedReasonRoutes from './skippedReasonRoutes'
import leaveRoutes from './leaveRoutes'
import leaveReasonRoutes from './leaveReasonRoutes'
import activityTypeRoutes from './activityTypeRoutes'
import zoneRoutes from './zoneRoutes'
import doctorCategoryRoutes from './doctorCategoryRoutes'
import divisionRoutes from './divisionRoutes'
import doctorSpecialityRoutes from './doctorSpecialityRoutes'
import relationMasterRoutes from './relationMasterRoutes'
import otherReasonRoutes from './otherReasonRoutes'
import firmCategoryRoutes from './firmCategoryRoutes'
import hospitalCategoryRoutes from './hospitalCategoryRoutes'
import hospitalClassRoutes from './hospitalClassRoutes'
import hospitalSpecialityRoutes from './hospitalSpecialityRoutes'
import qualificationRoutes from './qualificationRoutes'
import inchargeTypeRoutes from './inchargeTypeRoutes'
import firmTypeRoutes from './firmTypeRoutes'
import productIndicationRoutes from './productIndicationRoutes'
import schemeMasterRoutes from './schemeMasterRoutes'
import productsRoutes from './productsRoutes'
import productGroupRoutes from './productGroupRoutes'
import modeOfTravel from './modeOfTravelRoutes'
import productSampleDetailsRoutes from './productSampleDetailsRoutes'
import sampleCollectionCenterRoutes from './sampleCollectionCenterRoutes'
import FaqMasterRoutes from './faqMasterRoutes'
import FaqQuestionRoutes from './faqQuestionRoutes'
import EmployeesRoutes from './employeesRoutes'
import promotionalGiftRoutes from './promotionalGiftRoutes'
import mediaGalleryRoutes from './mediaGalleryRoutes'
import administratorRoutes from './administratorRoutes'
import clinicAddressRoutes from './clinicAddressRoutes'
import backdateVisitRoutes from './backDateVisit'
import callObjectiveRoutes from "./callObjectiveRoutes";
import folderRoutes from './folderRoutes'
import filesRoutes from './filesRoutes'
import firmRoutes from './firmRoutes'
import firmVisitRoutes from './firmVisitRoutes'
import visitCounterRoutes from './visitCounterRoutes'
import targetRoutes from './targetRoutes'
import leaveEntitlementRoutes from "./leaveEntitlementRoutes";
import presentationRoutes from './presentationRoutes'
import expenseHeadRoutes from './expenseHeadRoutes'
import tourRoutes from './tourplanRoutes'
import designationsRoutes from './designationsRoutes'
import firmMonthMaintenanceRoutes from './firmMonthMaintenanceRoutes'
import doctorMonthMaintenanceRoutes from './doctorMonthMaintenanceRoutes'
import sampleGiftWithChallanRoutes from './sampleGiftWithChallanRoutes'

router.use("/api/users", userRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/team", teamRoutes);
router.use("/api/meeting", meetingRoutes);
router.use("/api/opd", opdRoutes);
router.use("/api/notification", notificationRoutes);
router.use("/api/greetingCard", greetingCardRoutes);
router.use("/api/seles", Seles);
router.use("/api/chemist", Chemist);
router.use("/api/doctorvisit", doctorVisitRoutes);
router.use("/api/doctor", doctorRoutes);
router.use("/api/holidaycalendar", holidayCalendarRoutes);
router.use("/api/countrymaster", countryMasterRoutes);
router.use("/api/statemaster", stateMasterRoutes);
router.use("/api/citymaster", cityMasterRoutes);
router.use("/api/workagenda", workAgendaRoutes);
router.use("/api/type", typeRoutes);
router.use("/api/activityType", activityTypeRoutes);
router.use("/api/testtypology", testTypologyRoutes);
router.use("/api/taxmaster", taxMasterRoutes);
router.use("/api/skippedreason", skippedReasonRoutes);
router.use("/api/leave", leaveRoutes);
router.use("/api/leavereason", leaveReasonRoutes);
router.use("/api/zone", zoneRoutes);
router.use("/api/doctorcategory", doctorCategoryRoutes);
router.use("/api/division", divisionRoutes);
router.use("/api/doctorSpeciality", doctorSpecialityRoutes);
router.use("/api/relationmaster", relationMasterRoutes);
router.use("/api/otherreason", otherReasonRoutes);
router.use("/api/firmcategory", firmCategoryRoutes);
router.use("/api/hospitalcategory", hospitalCategoryRoutes);
router.use("/api/hospitalclass", hospitalClassRoutes);
router.use("/api/hospitalspeciality", hospitalSpecialityRoutes);
router.use("/api/qualification", qualificationRoutes);
router.use("/api/inchargetype", inchargeTypeRoutes);
router.use("/api/firmtype", firmTypeRoutes);
router.use("/api/productindication", productIndicationRoutes);
router.use("/api/schememaster", schemeMasterRoutes);
router.use("/api/products", productsRoutes);
router.use("/api/productgroup", productGroupRoutes);
router.use("/api/modeoftravel", modeOfTravel);
router.use("/api/productSampleDetails", productSampleDetailsRoutes);
router.use("/api/sampleCollectionCenter", sampleCollectionCenterRoutes);
router.use("/api/faqMaster", FaqMasterRoutes);
router.use("/api/faqQuestion", FaqQuestionRoutes);
router.use("/api/employees", EmployeesRoutes);
router.use("/api/promotionalGift", promotionalGiftRoutes);
router.use("/api/mediaGallery", mediaGalleryRoutes);
router.use("/api/administrator", administratorRoutes);
router.use("/api/clinicAddress", clinicAddressRoutes);
router.use("/api/backDateVisit", backdateVisitRoutes);
router.use("/api/callObjective", callObjectiveRoutes);
router.use("/api/folder", folderRoutes);
router.use("/api/files", filesRoutes);
router.use("/api/firm", firmRoutes);
router.use("/api/firmVisit", firmVisitRoutes);
router.use("/api/visitCounter", visitCounterRoutes);
router.use("/api/target", targetRoutes);
router.use("/api/leaveEntitlement", leaveEntitlementRoutes);
router.use("/api/presentation", presentationRoutes);
router.use("/api/expenseHead", expenseHeadRoutes);
router.use("/api/tourplan", tourRoutes);
router.use("/api/designationsan", designationsRoutes);
router.use("/api/firmMonthMaintenance", firmMonthMaintenanceRoutes);
router.use("/api/doctorMonthMaintenance", doctorMonthMaintenanceRoutes);
router.use("/api/sampleGiftWithChallan", sampleGiftWithChallanRoutes);


export default router;
