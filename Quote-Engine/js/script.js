//Object Array to hold quotes and sources
var quotes = [
  {
    quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    source: 'Thomas Edison'
  },
  {
    quote: 'You can observe a lot just by watching.',
    source: 'Yogi Berra'
  },
  {
    quote: 'A house divided against itself cannot stand.',
    source: 'Abraham Lincoln'
  },
  {
    quote: 'Difficulties increase the nearer we get to the goal.',
    source: 'Johann Wolfgang von Goethe'
  },
  {
    quote: 'Be the chief but never the lord.',
    source: 'Lao Tzu'
  },
  {
    quote: 'Nothing happens unless first we dream.',
    source: 'Carl Sandburg'
  },
  {
    quote: 'Well begun is half done.',
    source: 'Aristotle'
  },
  {
    quote: 'Life is a learning experience, only if you learn.',
    source: 'Yogi Berra'
  },
  {
    quote: 'Self-complacency is fatal to progress.',
    source: 'Margaret Sangster'
  },
  {
    quote: 'Peace comes from within. Do not seek it without.',
    source: 'Buddha'
  },
  {
    quote: 'What you give is what you get.',
    source: 'Byron Pulsifer'
  },
  {
    quote: 'We can only learn to love by loving.',
    source: 'Iris Murdoch'
  },
  {
    quote: 'Life is change. Growth is optional. Choose wisely.',
    source: 'Karen Clark'
  },
  {
    quote: "You'll see it when you believe it.",
    source: 'Wayne Dyer'
  },
  {
    quote: 'Today is the tomorrow we worried about yesterday.',
    source: null
  },
  {
    quote: "It's easier to see the mistakes on someone else's paper.",
    source: null
  },
  {
    quote: 'Every man dies. Not every man really lives.',
    source: null
  },
  {
    quote: 'To lead people walk behind them.',
    source: 'Lao Tzu'
  },
  {
    quote: 'Having nothing, nothing can he lose.',
    source: 'William Shakespeare'
  },
  {
    quote: 'Trouble is only opportunity in work clothes.',
    source: 'Henry J. Kaiser'
  },
  {
    quote: 'A rolling stone gathers no moss.',
    source: 'Publilius Syrus'
  },
  {
    quote: 'Ideas are the beginning points of all fortunes.',
    source: 'Napoleon Hill'
  },
  {
    quote: 'Everything in life is luck.',
    source: 'Donald Trump'
  },
  {
    quote: 'Doing nothing is better than being busy doing nothing.',
    source: 'Lao Tzu'
  },
  {
    quote: 'Trust yourself. You know more than you think you do.',
    source: 'Benjamin Spock'
  },
  {
    quote: 'Study the past, if you would divine the future.',
    source: 'Confucius'
  },
  {
    quote: 'The day is already blessed, find peace within it.',
    source: null
  },
  {
    quote: 'From error to error one discovers the entire truth.',
    source: 'Sigmund Freud'
  },
  {
    quote: 'Well done is better than well said.',
    source: 'Benjamin Franklin'
  },
  {
    quote: 'Bite off more than you can chew, then chew it.',
    source: 'Ella Williams'
  },
  {
    quote: 'Work out your own salvation. Do not depend on others.',
    source: 'Buddha'
  },
  {
    quote: 'One today is worth two tomorrows.',
    source: 'Benjamin Franklin'
  },
  {
    quote: 'Once you choose hope, anythings possible.',
    source: 'Christopher Reeve'
  },
  {
    quote: 'God always takes the simplest way.',
    source: 'Albert Einstein'
  },
  {
    quote: 'One fails forward toward success.',
    source: 'Charles Kettering'
  },
  {
    quote: 'From small beginnings come great things.',
    source: null
  },
  {
    quote: 'Learning is a treasure that will follow its owner everywhere',
    source: 'Chinese proverb'
  },
  {
    quote: 'Be as you wish to seem.',
    source: 'Socrates'
  },
  {
    quote: 'The world is always in movement.',
    source: 'V. Naipaul'
  },
  {
    quote: 'Never mistake activity for achievement.',
    source: 'John Wooden'
  },
  {
    quote: 'What worries you masters you.',
    source: 'Haddon Robinson'
  },
  {
    quote: 'One faces the future with ones past.',
    source: 'Pearl Buck'
  },
  {
    quote: 'Goals are the fuel in the furnace of achievement.',
    source: 'Brian Tracy'
  },
  {
    quote: 'Who sows virtue reaps honour.',
    source: 'Leonardo da Vinci'
  },
  {
    quote: 'Be kind whenever possible. It is always possible.',
    source: 'Dalai Lama'
  },
  {
    quote: "Talk doesn't cook rice.",
    source: 'Chinese proverb'
  },
  {
    quote: 'He is able who thinks he is able.',
    source: 'Buddha'
  },
  {
    quote: 'A goal without a plan is just a wish.',
    source: 'Larry Elder'
  },
  {
    quote: 'To succeed, we must first believe that we can.',
    source: 'Michael Korda'
  },
  {
    quote: 'Learn from yesterday, live for today, hope for tomorrow.',
    source: 'Albert Einstein'
  },
  {
    quote: 'A weed is no more than a flower in disguise.',
    source: 'James Lowell'
  },
  {
    quote: 'Do, or do not. There is no try.',
    source: 'Yoda'
  },
  {
    quote: 'All serious daring starts from within.',
    source: 'Harriet Beecher Stowe'
  },
  {
    quote: 'The best teacher is experience learned from failures.',
    source: 'Byron Pulsifer'
  },
  {
    quote: 'Think how hard physics would be if particles could think.',
    source: 'Murray Gell-Mann'
  },
  {
    quote: "Love is the flower you've got to let grow.",
    source: 'John Lennon'
  },
  {
    quote: "Don't wait. The time will never be just right.",
    source: 'Napoleon Hill'
  },
  {
    quote: 'Time is the wisest counsellor of all.',
    source: 'Pericles'
  },
  {
    quote: 'You give before you get.',
    source: 'Napoleon Hill'
  },
  {
    quote: 'Wisdom begins in wonder.',
    source: 'Socrates'
  },
  {
    quote: 'Without courage, wisdom bears no fruit.',
    source: 'Baltasar Gracian'
  },
  {
    quote: 'Change in all things is sweet.',
    source: 'Aristotle'
  },
  {
    quote: 'What you fear is that which requires action to overcome.',
    source: 'Byron Pulsifer'
  },
  {
    quote: 'When performance exceeds ambition, the overlap is called success.',
    source: 'Cullen Hightower'
  },
  {
    quote: 'When deeds speak, words are nothing.',
    source: 'African proverb'
  },
  {
    quote: 'Real magic in relationships means an absence of judgement of others.',
    source: 'Wayne Dyer'
  },
  {
    quote: 'I never think of the future. It comes soon enough.',
    source: 'Albert Einstein'
  },
  {
    quote: 'Skill to do comes of doing.',
    source: 'Ralph Emerson'
  },
  {
    quote: 'Wisdom is the supreme part of happiness.',
    source: 'Sophocles'
  },
  {
    quote: 'I believe that every person is born with talent.',
    source: 'Maya Angelou'
  },
  {
    quote: 'Important principles may, and must, be inflexible.',
    source: 'Abraham Lincoln'
  },
  {
    quote: 'The undertaking of a new action brings new strength.',
    source: 'Richard Evans'
  },
  {
    quote: 'The years teach much which the days never know.',
    source: 'Ralph Emerson'
  },
  {
    quote: 'Our distrust is very expensive.',
    source: 'Ralph Emerson'
  },
  {
    quote: 'All know the way; few actually walk it.',
    source: 'Bodhidharma'
  },
  {
    quote: 'Great talent finds happiness in execution.',
    source: 'Johann Wolfgang von Goethe'
  },
  {
    quote: 'Faith in oneself is the best and safest course.',
    source: 'Michelangelo'
  },
  {
    quote: 'Courage is going from failure to failure without losing enthusiasm.',
    source: 'Winston Churchill'
  },
  {
    quote: 'The two most powerful warriors are patience and time.',
    source: 'Leo Tolstoy'
  },
  {
    quote: 'Anticipate the difficult by managing the easy.',
    source: 'Lao Tzu'
  },
  {
    quote: 'Those who are free of resentful thoughts surely find peace.',
    source: 'Buddha'
  },
  {
    quote: 'A short saying often contains much wisdom.',
    source: 'Sophocles'
  },
  {
    quote: 'It takes both sunshine and rain to make a rainbow.',
    source: null
  },
  {
    quote: 'A beautiful thing is never perfect.',
    source: null
  },
  {
    quote: 'Only do what your heart tells you.',
    source: 'Princess Diana'
  },
  {
    quote: 'Life is movement-we breathe, we eat, we walk, we move!',
    source: 'John Pierrakos'
  },
  {
    quote: 'No one can make you feel inferior without your consent.',
    source: 'Eleanor Roosevelt'
  },
  {
    quote: 'Argue for your limitations, and sure enough theyre yours.',
    source: 'Richard Bach'
  },
  {
    quote: 'Luck is what happens when preparation meets opportunity.',
    source: 'Seneca'
  },
  {
    quote: 'Victory belongs to the most persevering.',
    source: 'Napoleon Bonaparte'
  },
  {
    quote: 'Love all, trust a few, do wrong to none.',
    source: 'William Shakespeare'
  },
  {
    quote: 'In order to win, you must expect to win.',
    source: 'Richard Bach'
  },
  {
    quote: 'A goal is a dream with a deadline.',
    source: 'Napoleon Hill'
  },
  {
    quote: 'You can do it if you believe you can!',
    source: 'Napoleon Hill'
  },
  {
    quote: "Set your goals high, and don't stop till you get there.",
    source: 'Bo Jackson'
  },
  {
    quote: 'Every new day is another chance to change your life.',
    source: null
  },
  {
    quote: 'Smile, breathe, and go slowly.',
    source: 'Thich Nhat Hanh'
  },
  {
    quote: 'Nobody will believe in you unless you believe in yourself.',
    source: 'Liberace'
  },
  {
    quote: 'Do more than dream: work.',
    source: 'William Arthur Ward'
  },
  {
    quote: 'No man was ever wise by chance.',
    source: 'Seneca'
  },
  {
    quote: 'Some pursue happiness, others create it.',
    source: null
  },
  {
    quote: 'He that is giddy thinks the world turns round.',
    source: 'William Shakespeare'
  },
  {
    quote: "Don't ruin the present with the ruined past.",
    source: 'Ellen Gilchrist'
  },
  {
    quote: 'Do something wonderful, people may imitate it.',
    source: 'Albert Schweitzer'
  },
  {
    quote: 'We do what we do because we believe.',
    source: null
  },
  {
    quote: 'Do one thing every day that scares you.',
    source: 'Eleanor Roosevelt'
  },
  {
    quote: 'If you cannot be silent be brilliant and thoughtful.',
    source: 'Byron Pulsifer'
  },
  {
    quote: 'Who looks outside, dreams; who looks inside, awakes.',
    source: 'Carl Jung'
  },
  {
    quote: 'What we think, we become.',
    source: 'Buddha'
  },
  {
    quote: 'The shortest answer is doing.',
    source: 'Lord Herbert'
  },
  {
    quote: 'All our knowledge has its origins in our perceptions.',
    source: 'Leonardo da Vinci'
  },
  {
    quote: 'The harder you fall, the higher you bounce.',
    source: null
  },
  {
    quote: 'Trusting our intuition often saves us from disaster.',
    source: 'Anne Wilson Schaef'
  },
  {
    quote: 'Truth is powerful and it prevails.',
    source: 'Sojourner Truth'
  },
  {
    quote: 'Light tomorrow with today!',
    source: 'Elizabeth Browning'
  },
  {
    quote: 'Silence is a fence around wisdom.',
    source: 'German proverb',
  },
  {
    quote: 'Society develops wit, but its contemplation alone forms genius.',
    source: 'Madame de Stael'
  },
  {
    quote: 'The simplest things are often the truest.',
    source: 'Richard Bach'
  },
  {
    quote: 'Everyone smiles in the same language.',
    source: null
  },
  {
    quote: 'Yesterday I dared to struggle. Today I dare to win.',
    source: 'Bernadette Devlin'
  },
  {
    quote: 'No alibi will save you from accepting the responsibility.',
    source: 'Napoleon Hill'
  },
  {
    quote: 'If you can dream it, you can do it.',
    source: 'Walt Disney'
  },
  {
    quote: 'It is better to travel well than to arrive.',
    source: 'Buddha'
  },
  {
    quote: "Life shrinks or expands in proportion to one's courage.",
    source: 'Anais Nin'
  },
  {
    quote: 'You have to believe in yourself.',
    source: 'Sun Tzu'
  },
  {
    quote: 'Our intention creates our reality.',
    source: 'Wayne Dyer'
  },
  {
    quote: 'Silence is a true friend who never betrays.',
    source: 'Confucius'
  },
  {
    quote: 'Character develops itself in the stream of life.',
    source: 'Johann Wolfgang von Goethe'
  },
  {
    quote: 'From little acorns mighty oaks do grow.',
    source: 'American proverb'
  },
  {
    quote: "You can't stop the waves, but you can learn to surf.",
    source: 'Jon Kabat-Zinn'
  },
  {
    quote: 'Reality does not conform to the ideal, but confirms it.',
    source: 'Gustave Flaubert'
  },
  {
    quote: 'Speak low, if you speak love.',
    source: 'William Shakespeare'
  },
  {
    quote: 'A really great talent finds its happiness in execution.',
    source: 'Johann Wolfgang von Goethe'
  },
  {
    quote: 'Reality leaves a lot to the imagination.',
    source: 'John Lennon'
  },
  {
    quote: 'The greatest remedy for anger is delay.',
    source: 'Seneca'
  },
  {
    quote: 'Growth itself contains the germ of happiness.',
    source: 'Pearl Buck'
  },
  {
    quote: "You can do what's reasonable or you can decide what's possible.",
    source: null
  }
];

//Function returns a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function returns a random rgb color value
function getRandomColor () {
	var cyan = Math.floor(Math.random() * 256 );
	var violet = Math.floor(Math.random() * 256 );
	var indigo = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + cyan + ',' + violet + ',' + indigo + ')';
	return randomColor;
}

//Function calls getRandomQuote to return the quote object and stored in quoteString
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
//builds a string with different properties of the quote object 
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString; 

					//assigns color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Page refreshes every 10 seconds automatically
window.setInterval(function(){printQuote ();}, 10000);

//use event listener with LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);