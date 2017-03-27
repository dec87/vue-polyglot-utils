function trimAndExtractString(string) {
  return string
    .replace(/^\s+|\s+$/g, '')
    .replace(/(^['|"]|['|"]$)/gm, '');
}

export default {
  extractLocales(string){
    const locales = {};
    const translateMethodRegex = /\$t\(([\S\s]+?)\)/g;
    let match = translateMethodRegex.exec(string);
    while (match !== null) {
      const translateMethodParams = match[1].split(/['|"]\s*,/g);
      if (translateMethodParams.length === 1) {
        const key = trimAndExtractString(translateMethodParams[0]);
        locales[key] = key;
      }
      if (translateMethodParams.length >= 2) {
        const key = trimAndExtractString(translateMethodParams[0]);
        locales[key] = trimAndExtractString(translateMethodParams[1]);
      }
      match = translateMethodRegex.exec(string);
    }
    return locales;
  }
};
