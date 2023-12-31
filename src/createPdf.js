const React = require("react");
const path = require("path");
const fs = require("fs");

const { mailerConfig } = require("../config/mailer");

const { renderToFile } = require("@react-pdf/renderer");
const { Report } = require("./components/Report/Report");

async function createPdfReport({ id }) {
  try {
    const pdfPath = path.join(
      __dirname,
      "..",
      "tmp",
      `my-doc-fake-data-${new Date().getTime()}.pdf`
    );
    await renderToFile(<Report />, pdfPath);
    return fs.readFileSync(pdfPath);
  } catch (error) {
    return error;
  }
}

async function createPdfReportWithEmail({ from }) {
  try {
    const named = `my-doc-fake-data-${new Date().getTime()}.pdf`;
    const pdfPath = path.join(__dirname, "..", "tmp", named);

    await renderToFile(<Report />, pdfPath);
    return await mailerConfig({
      from,
      file: { filename: named, path: pdfPath },
    });
  } catch (error) {
    return error;
  }
}

module.exports = { createPdfReport, createPdfReportWithEmail };
