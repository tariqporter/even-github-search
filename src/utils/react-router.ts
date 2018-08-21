export function normalizeParsedString(parsed: any) : any {
  const parsedNormalized = Object.keys(parsed)
    .reduce((acc: any, x: string) => { acc[x.toLowerCase()] = parsed[x]; return acc; }, {});
  return parsedNormalized;
} 

export function mapQueryToState(state: any, parsed: any): any {
  const newState = {};
  const normalizedParsed = normalizeParsedString(parsed);
  const stateKeys = Object.keys(state);
  for(const stateKey of stateKeys) {
    const key = stateKey.toLowerCase();
    if (normalizedParsed.hasOwnProperty(key)) {
      const stateValue = state[stateKey];
      if (typeof stateValue === 'string' || stateValue instanceof String) {
        newState[stateKey] = normalizedParsed[key];
      } else if (!isNaN(parseFloat(stateValue)) && isFinite(stateValue)) {
        newState[stateKey] = parseInt(normalizedParsed[key], 10);
      } else if (typeof stateValue === 'boolean') {
        newState[stateKey] = normalizedParsed[key].toLowerCase() === 'true';
      } else {
        throw Error(`Unknown type ${stateValue} in state`);
      }
    }
  }
  return newState;
}