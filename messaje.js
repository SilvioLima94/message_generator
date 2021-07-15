const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.-Nelson Mandela", 
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.-Steve Jobs",
"The way to get started is to quit talking and begin doing.-Walt Disney", 
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.-James Cameron" , "Life is what happens when you're busy making other plans.-John Lennon"]

function getRandomQuotes(arr){
    return arr[Math.floor((Math.random()*arr.length))];
}
console.log(getRandomQuotes(quotes))
