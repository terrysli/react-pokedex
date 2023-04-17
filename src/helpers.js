/**
 * Return two arrays of randomly selected items, each of length=items.length / 2
 */
function choice(items) {
  const handSize = items.length / 2;
  const hand1 = [];
  let hand2 = [];

  for (let i = 0; i < handSize; i++) {
    const idx = Math.floor(Math.random() * items.length);
    hand1.push(items.splice(idx, 1));
  }

  hand2 = items.slice();

  return { hand1, hand2 };
}

export default choice;