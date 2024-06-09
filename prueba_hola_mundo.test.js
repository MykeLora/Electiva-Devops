const { execSync } = require('child_process');

test('Output should be "¡Hola, Mundo!"', () => {
  const output = execSync('node hola_mundo.js').toString();
  expect(output.trim()).toBe('¡Hola, Mundo!');
});