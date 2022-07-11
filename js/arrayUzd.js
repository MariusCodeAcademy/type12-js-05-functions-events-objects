const pav = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
//             0      1      2     3      4    5   6     7
const pglb = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];

// atspausdinti is masyvu
const sp = pglb[7];
// 1. my sister is in the lake
const lake = pglb[3] + sp + pav[1] + sp + pglb[4] + sp + pglb[0] + sp + pav[6];
console.log('lake ===', lake);
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
