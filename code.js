function are_isomorphic(g1, g2) {
  if (g1.length != g2.length) { return false; }

  var n = g2.length;

  var gFlatPerms = perm(g2.flat());

  var gPerms = [];

  for (p of gFlatPerms) {
    var newP = [];
    while(p.length) newP.push(p.splice(0, n));
    gPerms.push(newP);
  }

  var gJSON = JSON.stringify(g1);
  for (g of gPerms) {
    if (JSON.stringify(g) == gJSON) { return true; }
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

