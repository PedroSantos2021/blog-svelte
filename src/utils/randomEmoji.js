const randomEmoji = () => {
    const emojis = ["๐", "๐", "๐ฅญ", "๐ป", "๐งก"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
  
  export default randomEmoji;