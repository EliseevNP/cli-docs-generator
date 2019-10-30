module.exports = license => {
  return license
    ? [
        '## License',
        `${license}.`,
      ]
    : [];
};
