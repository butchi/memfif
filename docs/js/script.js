let decStr = '1192';

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

function getRegExp(str) {
  let exp = '';

  [].forEach.call(str, (char) => {
    exp += `[${assocLi[char]}]`;
  })

  console.log(exp);

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

    let regExp = getRegExp("1192");

    let result = str.match(regExp);

    if(result) {
      console.log(result);
    } else {
      console.log('no match');
    }
  })
;
