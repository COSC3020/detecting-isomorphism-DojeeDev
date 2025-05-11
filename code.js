function are_isomorphic(g1, g2) {
  if (g1.length != g2.length) { return false; }

  var n = g2.length;

  var indexArr = [];
  for (var i = 0; i < n; i++) { indexArr.push(i); }

  // var gFlatPerms = perm(g2.flat());

  var indexPerms = perm(indexArr);

  // for (p of gFlatPerms) {
  //   var newP = [];
  //   while(p.length) newP.push(p.splice(0, n));
  //   gPerms.push(newP);
  // }

  var gJSON = JSON.stringify(g1);
  for (p of indexPerms) {
    const pg = permGraph(g2, p);
    if (JSON.stringify(pg) == gJSON) { return true; }
  }
  return false;
}

//from brute force sorting
function perm(a) {
  if (a.length <= 1) {
    return [a];
  }

  var result = [];

  for (var i = 0; i < a.length; i++) {
    var nextArray = a.slice();
    nextArray.splice(i, 1);

    var subPerms = perm(nextArray);

    for (var sub of subPerms) {
      result.push([a[i]].concat(sub));
    }
  }
  return result;
}

// generates permuted graph based on index list so it knows what to swap
// Asked chatgpt how to permute a 2d array based on an array of numbers
function permGraph(g, p) {
  const n = p.length;
  const pg = Array.from({ length: n }, () => Array(n).fill(0));

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      pg[i][j] = g[p[i]][p[j]];
    }
  }

  return pg;
}
