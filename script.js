// Get DOM Elements
const gameBoard = document.getElementById('game-board');
const movesCounter = document.getElementById('moves');
const timerElement = document.getElementById('timer');
const restartButton = document.getElementById('restart');
const levelElement = document.getElementById('level');
const scoreElement = document.getElementById('score');
const levelModal = document.getElementById('level-modal');
const modalMessage = document.getElementById('modal-message');
const nextLevelButton = document.getElementById('next-level');
const playAgainButton = document.getElementById('play-again');
const inputModal = document.getElementById('input-modal');
const userInput = document.getElementById('user-input');
const submitInputButton = document.getElementById('submit-input');
const gameCompleteModal = document.getElementById('game-complete-modal');
const finalScoreElement = document.getElementById('final-score');
const restartGameButton = document.getElementById('restart-game');
const progressFill = document.getElementById('progress-fill');

// Updated Emoji and Spanish Words Array (Replaced some less common emojis with more common ones)
// Updated Emoji and English Words Array
let wordPairs = [
    { emoji: '🐶', word: 'Dog' },
    { emoji: '🐱', word: 'Cat' },
    { emoji: '🍎', word: 'Apple' },
    { emoji: '🚗', word: 'Car' },
    { emoji: '🌟', word: 'Star' },
    { emoji: '🏀', word: 'Ball' },
    { emoji: '🍔', word: 'Burger' },
    { emoji: '📚', word: 'Book' },
    { emoji: '☀️', word: 'Sun' },
    { emoji: '🌙', word: 'Moon' },
    { emoji: '🌈', word: 'Rainbow' },
    { emoji: '🎉', word: 'Party' },
    { emoji: '🎂', word: 'Cake' },
    { emoji: '🍕', word: 'Pizza' },
    { emoji: '🍩', word: 'Donut' },
    { emoji: '🍺', word: 'Beer' },
    { emoji: '☕', word: 'Coffee' },
    { emoji: '🍫', word: 'Chocolate' },
    { emoji: '🚲', word: 'Bicycle' },
    { emoji: '🚌', word: 'Bus' },
    { emoji: '✈️', word: 'Plane' },
    { emoji: '🚀', word: 'Rocket' },
    { emoji: '⛵', word: 'Boat' },
    { emoji: '⚽', word: 'Football' },
    { emoji: '🏈', word: 'Basketball' },
    { emoji: '🎾', word: 'Tennis' },
    { emoji: '🏓', word: 'Ping Pong' },
    { emoji: '🎮', word: 'Video Game' },
    { emoji: '📱', word: 'Phone' },
    { emoji: '💻', word: 'Laptop' },
    { emoji: '⌚', word: 'Watch' },
    { emoji: '🎧', word: 'Headphones' },
    { emoji: '📷', word: 'Camera' },
    { emoji: '📺', word: 'Television' },
    { emoji: '🖨️', word: 'Printer' },
    { emoji: '🛒', word: 'Cart' },
    { emoji: '💡', word: 'Lamp' },
    { emoji: '🔑', word: 'Key' },
    { emoji: '🗝️', word: 'Ancient Key' },
    { emoji: '🚪', word: 'Door' },
    { emoji: '🛏️', word: 'Bed' },
    { emoji: '🚽', word: 'Toilet' },
    { emoji: '🛁', word: 'Bathtub' },
    { emoji: '🚿', word: 'Shower' },
    { emoji: '🧺', word: 'Basket' },
    { emoji: '🧹', word: 'Broom' },
    { emoji: '🧼', word: 'Soap' },
    { emoji: '🧽', word: 'Sponge' },
    { emoji: '🪥', word: 'Brush' },
    { emoji: '🛴', word: 'Scooter' },
    { emoji: '🛵', word: 'Moped' },
    { emoji: '🛹', word: 'Skateboard' },
    { emoji: '🪀', word: 'Yo-yo' },
    { emoji: '🪁', word: 'Kite' },
    { emoji: '🎲', word: 'Dice' },
    { emoji: '🧩', word: 'Puzzle' },
    { emoji: '🎯', word: 'Target' },
    { emoji: '🏹', word: 'Bow' },
    { emoji: '🪃', word: 'Boomerang' },
    { emoji: '🥊', word: 'Gloves' },
    { emoji: '🥋', word: 'Kimono' },
    { emoji: '⛸️', word: 'Skates' },
    { emoji: '🥌', word: 'Curling Stone' },
    { emoji: '🛷', word: 'Sled' },
    { emoji: '🎿', word: 'Ski' },
    { emoji: '🏂', word: 'Snowboard' },
    { emoji: '🏋️', word: 'Weightlifting' },
    { emoji: '🤸', word: 'Gymnastics' },
    { emoji: '🧘', word: 'Yoga' },
    { emoji: '🚴', word: 'Cycling' },
    { emoji: '🏇', word: 'Horse Riding' },
    { emoji: '🧗', word: 'Climbing' },
    { emoji: '🤼', word: 'Wrestling' },
    { emoji: '🥅', word: 'Goal' },
    { emoji: '🛶', word: 'Canoe' },
    { emoji: '🏄', word: 'Surfing' },
    { emoji: '🏊', word: 'Swimming' },
    { emoji: '🤽', word: 'Water Polo' },
    { emoji: '🥏', word: 'Frisbee' },
    { emoji: '🎤', word: 'Microphone' },
    { emoji: '🎸', word: 'Guitar' },
    { emoji: '🎹', word: 'Keyboard' },
    { emoji: '🥁', word: 'Drum' },
    { emoji: '🎺', word: 'Trumpet' },
    { emoji: '🎻', word: 'Violin' },
    { emoji: '🎷', word: 'Saxophone' },
    { emoji: '🪕', word: 'Banjo' },
    { emoji: '🎼', word: 'Music Sheet' },
    { emoji: '📀', word: 'Disk' },
    { emoji: '💿', word: 'CD' },
    { emoji: '📼', word: 'Cassette' },
    { emoji: '📞', word: 'Phone' },
    { emoji: '☎️', word: 'Telephone' },
    { emoji: '📟', word: 'Pager' },
    { emoji: '📠', word: 'Fax' },
    { emoji: '📡', word: 'Antenna' },
    { emoji: '🔋', word: 'Battery' },
    { emoji: '🔌', word: 'Plug' },
    { emoji: '🔦', word: 'Flashlight' },
    { emoji: '🕯️', word: 'Candle' },
    { emoji: '🪔', word: 'Oil Lamp' },
    { emoji: '🛎️', word: 'Bell' },
    { emoji: '🪛', word: 'Screwdriver' },
    { emoji: '🔧', word: 'Wrench' },
    { emoji: '🔨', word: 'Hammer' },
    { emoji: '🪓', word: 'Axe' },
    { emoji: '⛏️', word: 'Pickaxe' },
    { emoji: '⚒️', word: 'Tools' },
    { emoji: '🛠️', word: 'Toolbox' },
    { emoji: '🗡️', word: 'Dagger' },
    { emoji: '⚔️', word: 'Swords' },
    { emoji: '🛡️', word: 'Shield' },
    { emoji: '🚬', word: 'Cigarette' },
    { emoji: '⚰️', word: 'Coffin' },
    { emoji: '⚱️', word: 'Urn' },
    { emoji: '🗿', word: 'Moai' },
    { emoji: '🏺', word: 'Amphora' },
    { emoji: '🧰', word: 'Toolbox' },
    { emoji: '🧲', word: 'Magnet' },
    { emoji: '🧪', word: 'Test Tube' },
    { emoji: '🧫', word: 'Petri Dish' },
    { emoji: '🧬', word: 'DNA' },
    { emoji: '🔬', word: 'Microscope' },
    { emoji: '🔭', word: 'Telescope' },
    { emoji: '🛰️', word: 'Satellite' },
    { emoji: '🚁', word: 'Helicopter' },
    { emoji: '🛩️', word: 'Light Plane' },
    { emoji: '🛫', word: 'Takeoff' },
    { emoji: '🛬', word: 'Landing' },
    { emoji: '🪂', word: 'Parachute' },
    { emoji: '🛸', word: 'UFO' },
    { emoji: '🪣', word: 'Bucket' },
    { emoji: '🧯', word: 'Extinguisher' },
    { emoji: '🧨', word: 'Firecracker' },
    { emoji: '🪚', word: 'Saw' },
    { emoji: '🧅', word: 'Onion' },
    { emoji: '🧄', word: 'Garlic' },
    { emoji: '🥒', word: 'Cucumber' },
    { emoji: '🥦', word: 'Broccoli' },
    { emoji: '🍇', word: 'Grapes' },
    { emoji: '🍒', word: 'Cherry' },
    { emoji: '🍑', word: 'Peach' },
    { emoji: '🍓', word: 'Strawberry' },
    { emoji: '🥭', word: 'Mango' },
    { emoji: '🥥', word: 'Coconut' },
    { emoji: '🍉', word: 'Watermelon' },
    { emoji: '🍋', word: 'Lemon' },
    { emoji: '🍌', word: 'Banana' },
    { emoji: '🍍', word: 'Pineapple' },
    { emoji: '🍆', word: 'Eggplant' },
    { emoji: '🥔', word: 'Potato' },
    { emoji: '🥕', word: 'Carrot' },
    { emoji: '🥬', word: 'Lettuce' },
    { emoji: '🍄', word: 'Mushroom' },
    { emoji: '🌽', word: 'Corn' },
    { emoji: '🥐', word: 'Croissant' },
    { emoji: '🍞', word: 'Bread' },
    { emoji: '🧀', word: 'Cheese' },
    { emoji: '🥚', word: 'Egg' },
    { emoji: '🍖', word: 'Meat' },
    { emoji: '🍗', word: 'Chicken' },
    { emoji: '🥩', word: 'Steak' },
    { emoji: '🥞', word: 'Pancakes' },
    { emoji: '🍳', word: 'Fried Egg' },
    { emoji: '🍲', word: 'Stew' },
    { emoji: '🍱', word: 'Bento Box' },
    { emoji: '🍣', word: 'Sushi' },
    { emoji: '🍤', word: 'Shrimp' },
    { emoji: '🍝', word: 'Pasta' },
    { emoji: '🥘', word: 'Paella' },
    { emoji: '🍛', word: 'Curry' },
    { emoji: '🍜', word: 'Noodles' },
    { emoji: '🍙', word: 'Rice Ball' },
    { emoji: '🍚', word: 'Rice' },
    { emoji: '🍘', word: 'Rice Cracker' },
    { emoji: '🥫', word: 'Canned Food' },
      { emoji: '🥪', word: 'Sandwich' },
    { emoji: '🥣', word: 'Bowl' },
    { emoji: '🍬', word: 'Candy' },
    { emoji: '🍭', word: 'Lollipop' },
    { emoji: '🍰', word: 'Dessert' },
    { emoji: '🥮', word: 'Mooncake' },
    { emoji: '🥠', word: 'Fortune Cookie' },
    { emoji: '🍯', word: 'Honey' },
    { emoji: '🍞', word: 'Toast' },
    { emoji: '🥓', word: 'Bacon' },
    { emoji: '🍢', word: 'Oden' },
    { emoji: '🍡', word: 'Dango' },
    { emoji: '🥧', word: 'Pie' },
    { emoji: '🍲', word: 'Hotpot' },
    { emoji: '🥤', word: 'Soft Drink' },
    { emoji: '🧋', word: 'Bubble Tea' },
    { emoji: '🍺', word: 'Beer' },
    { emoji: '🥛', word: 'Milk' },
    { emoji: '🍶', word: 'Sake' },
    { emoji: '🍼', word: 'Baby Bottle' },
    { emoji: '🍸', word: 'Cocktail' },
    { emoji: '🍹', word: 'Tropical Drink' },
    { emoji: '🥂', word: 'Champagne' },
    { emoji: '🍷', word: 'Wine' },
    { emoji: '🥃', word: 'Whiskey' },
    { emoji: '🍏', word: 'Green Apple' },
    { emoji: '🍐', word: 'Pear' },
    { emoji: '🍈', word: 'Melon' },
    { emoji: '🍊', word: 'Orange' },
    { emoji: '🍋', word: 'Lemon' },
    { emoji: '🥥', word: 'Coconut' },
    { emoji: '🌰', word: 'Chestnut' },
    { emoji: '🥝', word: 'Kiwi' },
    { emoji: '🍠', word: 'Sweet Potato' },
    { emoji: '🥭', word: 'Mango' },
    { emoji: '🥑', word: 'Avocado' },
    { emoji: '🍅', word: 'Tomato' },
    { emoji: '🥒', word: 'Cucumber' },
    { emoji: '🌶️', word: 'Pepper' },
    { emoji: '🍋', word: 'Citrus' },
    { emoji: '🍑', word: 'Peach' },
    { emoji: '🍏', word: 'Green Apple' },
    { emoji: '🍇', word: 'Grapes' },
    { emoji: '🍒', word: 'Cherry' },
    { emoji: '🍓', word: 'Strawberry' },
    { emoji: '🧁', word: 'Cupcake' },
    { emoji: '🍕', word: 'Pepperoni' },
    { emoji: '🍦', word: 'Ice Cream' },
    { emoji: '🍯', word: 'Honey Jar' },
    { emoji: '🍿', word: 'Cinema Snack' },
    { emoji: '🥟', word: 'Dumpling' },
    { emoji: '🥯', word: 'Bagel' },
    { emoji: '🧊', word: 'Ice Cube' },
    { emoji: '🥫', word: 'Soup' },
    { emoji: '🍙', word: 'Onigiri' },
    { emoji: '🍜', word: 'Ramen' },
    { emoji: '🍥', word: 'Fish Cake' },
    { emoji: '🍣', word: 'Sashimi' },
    { emoji: '🍛', word: 'Japanese Curry' },
    { emoji: '🍜', word: 'Udon' },
    { emoji: '🥢', word: 'Chopsticks' },
    { emoji: '🥄', word: 'Spoon' },
    { emoji: '🥡', word: 'Takeout' },
    { emoji: '🥤', word: 'Smoothie' },
    { emoji: '🍳', word: 'Breakfast' },
    { emoji: '🥖', word: 'Baguette' },
    { emoji: '🍲', word: 'Soup' },
    { emoji: '🧃', word: 'Juice Box' },
    { emoji: '🧊', word: 'Iced Drink' },
    { emoji: '🍱', word: 'Lunch Box' },
    { emoji: '🥂', word: 'Toast' },
    { emoji: '🍿', word: 'Popcorn Bucket' },
    { emoji: '🥄', word: 'Utensil' },
    { emoji: '🍴', word: 'Fork' },
    { emoji: '🍫', word: 'Bar Chocolate' },
    { emoji: '🍥', word: 'Fish Cake' },
    { emoji: '🍙', word: 'Rice Ball' },
    { emoji: '🥢', word: 'Chopsticks' },
    { emoji: '🧁', word: 'Muffin' },
    { emoji: '🥐', word: 'Pastry' },
    { emoji: '🍕', word: 'Cheese Pizza' },
    { emoji: '🥨', word: 'Pretzel' },
    { emoji: '🍧', word: 'Shaved Ice' },
    { emoji: '🍛', word: 'Japanese Curry' },
    { emoji: '🍱', word: 'Lunch Box' },
    { emoji: '🥮', word: 'Mid-Autumn Mooncake' },
    { emoji: '🍞', word: 'Slice of Bread' },
    { emoji: '🥖', word: 'Baguette Bread' },
    { emoji: '🧇', word: 'Waffle' },
    { emoji: '🥧', word: 'Pie Slice' },
    { emoji: '🧃', word: 'Juice Carton' },
    { emoji: '🍹', word: 'Cocktail Glass' },
    { emoji: '🍶', word: 'Sake Jar' },
    { emoji: '🥛', word: 'Glass of Milk' },
    { emoji: '🧋', word: 'Boba Tea' },
    { emoji: '🍵', word: 'Green Tea' },
    { emoji: '🍷', word: 'Wine Glass' },
    { emoji: '🥂', word: 'Champagne Glass' },
    { emoji: '🍾', word: 'Champagne Bottle' },
    { emoji: '🍿', word: 'Popcorn' }
   
];

// Variable to store the current matched word
let currentMatchedWord = '';

// Game State Variables
let currentLevel = 1;
const pairsPerLevel = 10; // Number of pairs per level
const totalLevels = Math.ceil(wordPairs.length / pairsPerLevel);
let score = 0;
let moves = 0;
let matches = 0;
let timer;
let seconds = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Initialize the game
function initGame() {
    // Reset game state variables
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    
    // Update UI elements
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    updateProgress();
    
    // Shuffle the entire wordPairs array to ensure randomness across all levels
    wordPairs = shuffle(wordPairs);
    
    // Setup the first level
    setupLevel();
    
    // Start the timer
    startTimer();
    
    // Close any open modals
    hideModal(levelModal);
    hideModal(gameCompleteModal);
    hideModal(inputModal);
}

// Setup current level
function setupLevel() {
    // Clear previous board
    gameBoard.innerHTML = '';
    matches = 0;
    updateProgress();

    // Determine number of pairs for the current level
    const startIndex = (currentLevel - 1) * pairsPerLevel;
    const endIndex = startIndex + pairsPerLevel;
    const currentPairs = wordPairs.slice(startIndex, endIndex);

    // Create card objects: one emoji and one word per pair
    let cardArray = [];
    currentPairs.forEach((pair, index) => {
        cardArray.push({
            id: index,
            type: 'emoji',
            content: pair.emoji,
            pairId: index
        });
        cardArray.push({
            id: index + pairsPerLevel, // Ensure unique id
            type: 'word',
            content: pair.word,
            pairId: index
        });
    });

    // Shuffle the cards for the current level
    cardArray = shuffle(cardArray);

    // Generate card elements with staggered animation
    cardArray.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.dataset.type = card.type;
        cardElement.dataset.pairId = card.pairId;

        cardElement.innerHTML = `
            <div class="front">${card.content}</div>
            <div class="back">?</div>
        `;

        cardElement.style.opacity = '0';
        cardElement.style.transform = 'scale(0.8) translateY(20px)';
        cardElement.style.transition = 'all 0.3s ease';
        
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
        
        // Staggered animation
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'scale(1) translateY(0)';
        }, index * 30);
    });
}

// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Flip card function
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('matched')) return;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    movesCounter.textContent = moves;

    checkForMatch();
}

// Check if two selected cards match
function checkForMatch() {
    const isSamePair = firstCard.dataset.pairId === secondCard.dataset.pairId;
    const isDifferentType = firstCard.dataset.type !== secondCard.dataset.type;

    if (isSamePair && isDifferentType) {
        // Store the correct word before prompting input
        currentMatchedWord = getCorrectWord();

        // It's a match; prompt user input
        promptUserInput();
    } else {
        // Not a match, flip back after delay
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }
}

// Reset board state
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Show modal with animation
function showModal(modal) {
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    // Force reflow for animation
    void modal.offsetWidth;
}

// Hide modal with animation
function hideModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Prompt user to type the English word after a match
function promptUserInput() {
    showModal(inputModal);
    userInput.value = '';
    setTimeout(() => {
        userInput.focus();
    }, 100);
}

// Handle user input for matched pair
function handleUserInput() {
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctWord = currentMatchedWord.toLowerCase();

    if (userAnswer === correctWord) {
        // Correct answer
        const scoreIncrease = calculateScore(true, seconds);
        const oldScore = score;
        score += scoreIncrease;
        // Animate score update
        animateValue(scoreElement, oldScore, score, 500);
        hideModal(inputModal);
        markAsMatched();
        checkLevelCompletion();
    } else {
        // Incorrect answer, show error feedback
        showErrorFeedback();
        // Flip the cards back and allow the user to attempt the match again
        hideModal(inputModal);
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 300);
    }
}

// Animate value change
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = Math.round(end);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Show error feedback
function showErrorFeedback() {
    userInput.style.borderColor = '#f5576c';
    userInput.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        userInput.style.borderColor = '';
        userInput.style.animation = '';
    }, 500);
}

// Mark the matched cards as matched
function markAsMatched() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
    matches++;
    updateProgress();
    
    // Add celebration animation
    createCelebrationEffect(firstCard);
}

// Get the correct word for the current matched pair
function getCorrectWord() {
    // Determine which card is the word
    if (firstCard.dataset.type === 'word') {
        return firstCard.textContent.trim();
    } else {
        return secondCard.textContent.trim();
    }
}

// Calculate score based on user input
function calculateScore(isCorrect, timeTaken) {
    if (isCorrect) {
        const timeBonus = Math.max(100 - timeTaken, 20); // Bonus decreases with time
        return timeBonus;
    } else {
        return -20; // Penalty for incorrect answer
    }
}

// Update progress bar
function updateProgress() {
    const progress = (matches / pairsPerLevel) * 100;
    progressFill.style.width = `${progress}%`;
}

// Create celebration effect
function createCelebrationEffect(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create confetti-like particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 0.6s ease-out';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 50 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        setTimeout(() => {
            particle.style.transform = `translate(${x}px, ${y}px) scale(0)`;
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}

// Check if the current level is completed after user input
function checkLevelCompletion() {
    if (matches === pairsPerLevel) {
        // Level completed
        clearInterval(timer);
        updateProgress(); // Ensure progress is 100%
        setTimeout(() => {
            showModal(levelModal);
            modalMessage.textContent = `You have completed level ${currentLevel}!`;
        }, 500);
    }
}

// Timer functions
function startTimer() {
    timer = setInterval(() => {
        seconds++;
        timerElement.textContent = formatTime(seconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    timerElement.textContent = '00:00';
}

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Proceed to next level
function nextLevel() {
    hideModal(levelModal);
    currentLevel++;
    if (currentLevel > totalLevels) {
        endGame();
    } else {
        matches = 0;
        moves = 0;
        seconds = 0;
        levelElement.textContent = currentLevel;
        movesCounter.textContent = moves;
        timerElement.textContent = formatTime(seconds);
        // Animate level change
        levelElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            levelElement.style.transform = 'scale(1)';
        }, 300);
        setupLevel();
        resetTimer();
        startTimer();
    }
}

// End game after final level
function endGame() {
    showModal(gameCompleteModal);
    // Animate final score
    animateValue(finalScoreElement, 0, score, 1000);
}

// Play again from level 1
function playAgain() {
    hideModal(levelModal);
    hideModal(gameCompleteModal);
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    wordPairs = shuffle(wordPairs); // Reshuffle all pairs for a fresh start
    setupLevel();
    resetTimer();
    startTimer();
}

// Reset the entire game
function resetGame() {
    clearInterval(timer);
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    wordPairs = shuffle(wordPairs); // Reshuffle all pairs for a fresh start
    hideModal(levelModal);
    hideModal(gameCompleteModal);
    hideModal(inputModal);
    setupLevel();
    resetTimer();
    startTimer();
}

// Event Listeners
restartButton.addEventListener('click', () => {
    resetGame();
});

nextLevelButton.addEventListener('click', () => {
    nextLevel();
});

playAgainButton.addEventListener('click', () => {
    playAgain();
});

submitInputButton.addEventListener('click', () => {
    handleUserInput();
});

// Also allow pressing Enter to submit input
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Close modals when clicking backdrop
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', function() {
        const modal = this.parentElement;
        if (modal.id === 'input-modal') {
            // Don't close input modal on backdrop click
            return;
        }
        hideModal(modal);
    });
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (inputModal.getAttribute('aria-hidden') === 'false') {
            hideModal(inputModal);
            // Flip cards back
            if (firstCard && secondCard) {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            }
        } else if (levelModal.getAttribute('aria-hidden') === 'false') {
            // Don't close level modal with Escape
        } else if (gameCompleteModal.getAttribute('aria-hidden') === 'false') {
            // Don't close game complete modal with Escape
        }
    }
});

// Initialize on page load
window.onload = initGame;
