const express = require("express");
const { createPdfReport, createPdfReportWithEmail } = require("./createPdf");
const { mailerConfig } = require("../config/mailer");

const app = express();

app.get("/show/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pdf = await createPdfReport({ id });
    res.contentType("application/pdf");
    res.send(pdf);
  } catch (err) {
    res.send(err);
  }
});

app.get("/", async (req, res) => {
  try {
    const pdf = await createPdfReport({ id: 2 });
    res.contentType("application/pdf");
    res.send(pdf);
  } catch (err) {
    res.send(err);
  }
});

app.get("/email", async (req, res) => {
  try {
    const email = await mailerConfig({ from: "leonardo.bussi@leavening.com" });
    res.send(email);
  } catch (err) {
    res.send(err);
  }
});

app.get("/pdf-email", async (req, res) => {
  try {
    const email = await createPdfReportWithEmail({
      from: "leonardo.bussi@leavening.com",
    });
    res.send(email);
  } catch (err) {
    res.send(err);
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
