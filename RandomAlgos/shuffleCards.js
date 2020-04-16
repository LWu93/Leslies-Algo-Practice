let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

//Solution 1
const swap = (cards, idx) => {
	let randIdx = Math.floor(Math.random() * (cards.length - 1));
	let placeholder = cards[randIdx];
	cards[randIdx] = cards[idx];
	cards[idx] = placeholder;
};

const shuffle = (cards) => {
	cards.forEach((card, idx) => {
		swap(cards, idx);
	});
	return cards;
};

shuffle(deck) //==> should return a shuffled deck

//Solution 2

// const swap = (cards, idx) => {
// 	let randIdx = Math.floor(Math.random() * (cards.length - 1));
// 	[cards[randIdx], cards[idk]] = [cards[idx], cards[randIdx]];
// };

// const shuffle = (cards) => {
// 	cards.forEach((card, idx) => {
// 		swap(cards, idx);
// 	});
// 	return cards;
// };

//Solution 3 - with cloned array

// const swap = (cards, idx) => {
// 	let randIdx = Math.floor(Math.random() * (cards.length - 1));
// 	[cards[randIdx], cards[idk]] = [cards[idx], cards[randIdx]];
// };

// const shuffle = (cards) => {
// 	let clone = [...cards];
// 	clone.forEach((card, idx) => {
// 		swap(clone, idx);
// 	});
// 	return clone;
// };
