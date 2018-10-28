function hey(sentence) {
    sentence = sentence.trim()
    // is silence
    if (sentence.length == 0)
        return 'Fine. Be that way!'
    // is yelling question
    else if (sentence[sentence.length - 1] == '?' && sentence == sentence.toUpperCase())
        return `Calm down, I know what I'm doing!`
    // is question
    else if (sentence[sentence.length - 1] == '?')
        return 'Sure.'
    // is yelling
    else if (sentence == sentence.toUpperCase())
        return 'Whoa, chill out!'
    // is anything else
    else
        return 'Whatever!'

    return sentence
}

console.log(hey("1, 2, 3 GO!"))
