const React = require('react');
const { Document } = require('@react-pdf/renderer');

const { Cover, Graphics } = require('./index');

function Report() {
  return (
      <Document>
        <Cover/>
        <Graphics/>
      </Document>
  );
}

module.exports = { Report };
