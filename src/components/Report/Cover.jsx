const React = require('react');
const {  Page, Text, View, StyleSheet } = require('@react-pdf/renderer');


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#3735AB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    color: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 55,
    marginBottom: 5,
    textAlign: 'center'
  },
});

function Cover() {
  return (
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Relatório do Bussi</Text>
      </View>
    </Page>
  );
}

module.exports = { Cover };
