module.exports = (domain) => (plugin) => {

  plugin.enqueueFile('CNAME', () => domain);

}
