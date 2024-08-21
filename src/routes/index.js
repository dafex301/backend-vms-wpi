require("dotenv").config();
const express = require("express");
const router = express.Router();
const UserRoutes = require("./user.routes");
const AuthRoutes = require("./auth.routes");
const RoleRoutes = require("./role.routes");
const JenisDocumentRoutes = require("./jenis_document.route");
const JenisSertifikasi = require("./jenis_sertifikasi.routes");
const SatuanRoutes = require("./satuan.routes");
const KursRoutes = require("./kurs.routes");
const JenisProductRoutes = require("./jenis_product.routes");
const StatusRoutes = require("./status.routes");
const provinsiRoutes = require("./provinsi.routes");
const Kota = require("./kota.routes");
const UserDocument = require("./user_document.routes");
const UserSertifikasi = require("./user_sertifikasi.routes");
const UserPengalaman = require("./user_pengalaman.routes");
const UserProduct = require("./user_product.routes");
const UserPenawaran = require("./user_penawaran.routes");
const UserPO = require("./user_po.routes");
const ManagerRoutes = require("./manager.routes");
const { serveFile } = require("../controllers/file.controller");

router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);
router.use("/role", RoleRoutes);
router.use("/jenis-document", JenisDocumentRoutes);
router.use("/jenis-sertifikasi", JenisSertifikasi);
router.use("/satuan", SatuanRoutes);
router.use("/kurs", KursRoutes);
router.use("/jenis-product", JenisProductRoutes);
router.use("/status", StatusRoutes);
router.use("/provinsi", provinsiRoutes);
router.use("/kota", Kota);
router.use("/userdocuments", UserDocument);
router.use("/usersertifikasi", UserSertifikasi);
router.use("/userpengalaman", UserPengalaman);
router.use("/userproduct", UserProduct);
router.use("/userpenawaran", UserPenawaran);
router.use("/userpo", UserPO);
router.use("/manager", ManagerRoutes);
router.get("/file/:filename", serveFile);

module.exports = router;
