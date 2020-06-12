import { bosh, meeting } from './data.ts';
import {
  genBosh, genDailySaying, genFamousSaying, appearsTooOften,
} from './sentence.ts';

function generator(title = '无标题', limit = 1000) {
  const arr: string[] = [];
  let currentLen = 0;

  while (currentLen < limit) {
    const num = Math.random() * 100 | 0;
    let sentence = '';

    const addNewLine = num <= 10;
    const addMeetingSentence = num > 10 && num <= 20;
    const addDailySaying = num > 20 && num <= 35;
    const addFamousSaying = num > 35 && num <= 50;

    if (addNewLine) sentence = '\r\n';
    else if (addMeetingSentence) sentence = genBosh(title, meeting);
    else if (addDailySaying) sentence = genDailySaying(title);
    else if (addFamousSaying) sentence = genFamousSaying();
    else sentence = genBosh(title, bosh);

    if (
      addNewLine
      || (!addNewLine && !appearsTooOften(arr, sentence))
      || (!sentence.includes(title) && !appearsTooOften(arr, sentence, 4))
    ) {
      currentLen += sentence.length;
      arr.push(sentence);
    }
  }

  return arr.join('');
}

export { generator };
