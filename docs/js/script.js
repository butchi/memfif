const assocLi = {
  1: 'あいうえお',
  2: 'かきくけこがぎぐげご',
  3: 'さしすせそざじずぜぞ',
  4: 'たちつてとだぢづでどっ',
  5: 'なにぬねの',
  6: 'はひふへほばびぶべぼぱぴぷぺぽ',
  7: 'まみむめも',
  8: 'やゆよゃゅょ',
  9: 'らりるれろ',
  0: 'わゐゑをん',
}

let wrapperElm = document.querySelector('.wrapper');

let resArr = [];

function getRegExp(str) {
  let exp = '';

  [].forEach.call(str, (char) => {
    exp += `[${assocLi[char]}]`;
  })

  // console.log(exp);

  ret = new RegExp(`^${exp}$`, 'gm');

  return ret;
}

fetch('data/butah012/buta012.dic')
  .then((res) => {
    return res.text();
  })
  .then((str) => {
    // const wordArr = str.split('\n');
    // console.log(wordArr.length);

    let maxRes = 0;

    let noMatchArr = [];

    for(let i = 1000; i <= 2020; i++) {
      let regExp = getRegExp(i.toString());

      let match = str.match(regExp);

      maxRes = Math.max(maxRes, (match || []).length);

      resArr.push({
        year: i,
        result: match,
      });
    }

    let tableElm = document.createElement('table');

    resArr.forEach((res) => {
      let trElm = document.createElement('tr');

      trElm.innerHTML = `<th>${res.year}</th>`;

      for(let i = 0; i < 8; i++) {
        let tdElm = document.createElement('td');

        let word = '';

        if(res.result) {
          word = res.result[i] || '';
        }

        tdElm.innerHTML = `<td>${word}<td>`;

        trElm.append(tdElm);
      }

      if(!res.result) {
        noMatchArr.push(res.year);
      }

      tableElm.append(trElm);
    });

    wrapperElm.append(tableElm);

    console.log(`nomach:`, noMatchArr);
    console.log(noMatchArr.length);
  })
;
