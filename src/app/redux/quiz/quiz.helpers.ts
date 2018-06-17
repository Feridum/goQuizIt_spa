export const mapToArray = obs$ => obs$.map(x => x !== null ? Object.values(x) : null);
