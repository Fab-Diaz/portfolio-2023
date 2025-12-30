module.exports = {
  '**/*.+(js|jsx|ts|tsx)': ['bun run lint:fix', 'bun run format'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
}
