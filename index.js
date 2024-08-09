

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { types: c } = require('@babel/core');
const generator = require('@babel/generator').default;


module.exports = function (source) {
  if (!source.includes('__cursorPointer')) return source
  const ast = parser.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript', 'decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true
    }
  });
  traverse(ast, {
    JSXElement(path) {
      const has = !!path.node.openingElement?.attributes?.find(v => v.name.name == '__cursorPointer')
      if (has) {
        const styleObject = c.objectExpression([
          c.objectProperty(c.identifier('cursor'), c.stringLiteral('pointer')),
        ]);
        const styleTPL = c.jsxAttribute(
          c.jsxIdentifier('style'),
          c.jSXExpressionContainer(styleObject)
        )

        const oldStyle = path.node.openingElement.attributes.find(v => v.name.name == 'style')
        if (!!oldStyle) {
          oldStyle.value.expression.properties.push(styleObject.properties[0])
        } else {
          path.node.openingElement.attributes.push(styleTPL)
        }
        path.node.openingElement.attributes = path.node.openingElement.attributes.filter(v => v?.name.name != '__cursorPointer')
      }
    },
  });


  const transformedCode = generator(ast, {}, source).code;
  return transformedCode


};

