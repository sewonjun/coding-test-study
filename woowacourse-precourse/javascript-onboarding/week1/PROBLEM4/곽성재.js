function problem4(word) {
  let answer = "";
  // 1) 모든철자를 대소문자 구분하여 만드는 과정
  const alphabet_L = "abcdefghijklmnopqrstuvwxyz";
  const alphabet_U = alphabet_L.toUpperCase();

  // 3) 순회하면서 대소문자에 맞게 변환하는 과정
  for (let spell of word) {
    if (alphabet_L.includes(spell)) {
      answer += convert(spell, alphabet_L);
    } else if (alphabet_U.includes(spell)) {
      answer += convert(spell, alphabet_U);
    } else {
      // 4) 알파벳 외의 문자는 변환하지 않고 그대로 넣어주는 과정
      answer += spell;
    }
  }

  return answer;
}

// 2) 청개구리 언어로 변환하는 과정
function convert(spell, fullSpell) {
  const idx = 25 - fullSpell.indexOf(spell);
  return fullSpell[idx];
}
