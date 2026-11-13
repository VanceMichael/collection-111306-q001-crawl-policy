export function declarationLines(text) {
  return text.split(/\r?\n/).map(value => value.replace(/#.*$/, '').trim()).filter(Boolean).map(value => {
    const separator = value.indexOf(':');
    if (separator < 1) throw new Error('声明行缺少名称');
    return { name: value.slice(0, separator).toLowerCase(), value: value.slice(separator + 1).trim() };
  });
}
export function preview(data) {
  return { version: data.version, declarations: declarationLines(data.robots), discovered: data.links, mode: 'raw' };
}
