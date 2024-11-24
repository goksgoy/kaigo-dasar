// Vocabulary List: You can add more words and meanings
const vocabulary = [
    // Minggu 1
    { word: "尊厳を支える介護", meaning: "" }, 
    { word: "介護における人間の尊厳と自立", meaning: "" }, { word: "人間の尊厳と人権尊重", meaning: "" }, 
    { word: "介護は、高齢や障害によって日常生活に支障がある人がらしい生活を継続できるように支援をする専門職です", meaning: "" }, { word: "支援のするための基本となる考え方人間の尊厳です", meaning: "" }, 
    { word: "人間の尊厳とは、一人ひとりが個人として尊重されることです", meaning: "" }, { word: "介護が必要になっても一人の人間として尊重され、人権が守られます", meaning: "" }, 
    { word: "生活は利用者主体", meaning: "" }, { word: "生活は、生活をする人の考え方や習慣などで、一人ひとりに違いがあります。介護が必要であっても、生活の主体は利用者自身です", meaning: "" },
    { word: "どのように生活したいのか、生活のしかたや考え方を尊重し、その人らしい生活ができるように、支援していくことが介護の基本です", meaning: "" }, 
];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").style.display = "inline";
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").style.display = "none";
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").style.display = "inline";
  }
  
