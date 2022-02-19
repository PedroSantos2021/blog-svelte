const readingTime = text => {
    const wordsPerminute = 200;
    const numOfWords = text.split(/\s/g).length;
    const minutes = numOfWords / wordsPerminute;

    const readTime = Math.ceil(minutes);
    return `📖 ${readTime} Min`;
};

export default readingTime;