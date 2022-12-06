module.exports = {
  '**/*.+(js|jsx|ts|tsx)': ['yarn lint:fix', 'yarn format'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
}
