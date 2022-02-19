import React from 'react';
import './compare.css';

function Compare({ first, second }) {
  const cache = [...Array(first.length)].map(() => Array(second.length));
  
  const common = lcs(first, second, 0, 0, cache);
  function getDiff(s, common, type) {
    const result = [];

    for (let i = 0, j = 0; i < s.length; i++) {
      if (s[i] === common[j]) {
        result.push(s[i]);
        j++;
      } else {
        result.push(<span key={i} className={`diff-${type}`}>{s[i]}</span>);
      }
    }
    return result;
  }
  
  return (
    <div className="d-flex cols pt-1 pb-3">
      <div className="result-col">
        {getDiff(first, common, "red")}
      </div>
      <div className=" result-col">
        {getDiff(second, common, "green")}
      </div>
    </div>
  )
}

function lcs(s1, s2, i, j, cache) {
  if (s1.length === i || s2.length === j) {
    return '';
  }
  if (cache[i][j]) {
    return cache[i][j];
  }
  if (s1[i] === s2[j]) {
    cache[i][j] = s1[i] + lcs(s1, s2, i + 1, j + 1, cache);
  } else {
      const next1 = lcs(s1, s2, i + 1, j, cache);
      const next2 = lcs(s1, s2, i, j + 1, cache);

      cache[i][j] = (next1.length > next2.length) ? next1 : next2;
  }
  return cache[i][j];
}
export default Compare;