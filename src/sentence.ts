import { famous, after, dailySayings } from './data.ts';

function randomGetItem(arr: string[]) {
  return arr[(Math.random() * arr.length) | 0];
}

// 生成名言句子
function genFamousSaying() {
  return randomGetItem(famous.body)
    .replace('a', randomGetItem(famous.before))
    .replace('b', randomGetItem(after));
}

// 生成常言句子
function genDailySaying(title: string) {
  const before = genBosh(title, dailySayings.before);
  return before + randomGetItem(dailySayings.body);
}

// 生成单独狗屁句子
function genBosh(title: string, collection: string[]) {
  return randomGetItem(collection).replace(/x/g, title);
}

// 相同句子出现太多次
function appearsTooOften(arr: string[], sentence: string, limit: number = 2) {
  return arr.filter(item => item === sentence).length >= limit;
}

export {
  randomGetItem,
  genFamousSaying,
  genDailySaying,
  genBosh,
  appearsTooOften,
};
