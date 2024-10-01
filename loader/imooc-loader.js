const REG = /<script>([\s\S]+?)<\/script>/;

module.exports = function (source) {
  console.log('== imooc-loader running ==');
  const __source = source.match(REG);
  console.log(__source);
  return __source && __source[1] ? __source[1] : source;
}

if (require.main === module) {
  console.log('test');
}
