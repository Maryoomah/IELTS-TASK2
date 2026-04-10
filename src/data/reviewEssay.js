export const reviewEssay = (essay) => {
  const words = essay.trim().split(/\s+/);
  const wordCount = words.length;
  const lowerEssay = essay.toLowerCase();

  const sentences = essay
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const paragraphs = essay.split("\n").filter(p => p.trim() !== "");

  let feedback = [];

  // ======================
  // GRAMMAR
  // ======================
  let grammarScore = 0;

  const shortSentences = sentences.filter(s => s.split(" ").length < 6);
  const longSentences = sentences.filter(s => s.split(" ").length > 15);

  if (sentences.length >= 5) grammarScore++;
  else feedback.push("Grammar: Too few sentences.");

  if (shortSentences.length <= sentences.length * 0.6) grammarScore++;
  else feedback.push("Grammar: Too many short sentences.");

  if (longSentences.length > 0) grammarScore++;
  else feedback.push("Grammar: Use more complex sentences.");

  if (essay.includes(",")) grammarScore++;
  else feedback.push("Grammar: Use commas.");

  const complexMarkers = ["because","although","while","which","who","that","if"];
  if (complexMarkers.some(word => lowerEssay.includes(word))) grammarScore++;
  else feedback.push("Grammar: Add complex structures.");

  // ======================
  // COHERENCE
  // ======================
  let coherenceScore = 0;

  const conclusionPhrases = ["in conclusion","to conclude","in summary","overall"];
  if (conclusionPhrases.some(p => lowerEssay.includes(p))) coherenceScore++;
  else feedback.push("Coherence: Add a conclusion.");

  if (paragraphs.length >= 3) coherenceScore++;
  else feedback.push("Coherence: Use clear paragraphs.");

  const linkingWords = ["however","therefore","moreover","in addition","for example"];
  if (linkingWords.some(w => lowerEssay.includes(w))) coherenceScore++;
  else feedback.push("Coherence: Use linking words.");

  // ======================
  // TASK RESPONSE
  // ======================
  let taskScore = 0;

  if (wordCount >= 250) taskScore++;
  else feedback.push("Task Response: Under 250 words.");

  const opinionPhrases = ["i believe","in my opinion","i agree","i disagree"];
  if (opinionPhrases.some(p => lowerEssay.includes(p))) taskScore++;
  else feedback.push("Task Response: Opinion is unclear.");

  const exampleMarkers = ["for example","for instance","such as"];
  if (exampleMarkers.some(m => lowerEssay.includes(m))) taskScore++;
  else feedback.push("Task Response: Add examples.");

  // ======================
  // LEXICAL RESOURCE
  // ======================
  let lexicalScore = 0;

  // 1. Vocabulary variety
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const varietyRatio = uniqueWords.size / words.length;

  if (varietyRatio > 0.5) lexicalScore++;
  else feedback.push("Lexical: Vocabulary is repetitive. Use more variety.");

  // 2. Advanced vocabulary (basic detection)
  const advancedWords = [
    "significant","numerous","various","factors","impact",
    "beneficial","detrimental","moreover","consequently","however"
  ];

  if (advancedWords.some(word => lowerEssay.includes(word))) lexicalScore++;
  else feedback.push("Lexical: Try using more advanced vocabulary.");

  // 3. Informal words check
  const informalWords = ["kids","stuff","a lot","things"];
  if (!informalWords.some(word => lowerEssay.includes(word))) lexicalScore++;
  else feedback.push("Lexical: Avoid informal words (e.g., kids, stuff).");

  // ======================
  // FINAL BAND SCORE
  // ======================
  const totalScore = grammarScore + coherenceScore + taskScore + lexicalScore;

  let band;
  if (totalScore >= 12) band = 8;
  else if (totalScore >= 10) band = 7;
  else if (totalScore >= 8) band = 6;
  else band = 5;

  feedback.push(`Estimated Band: ${band}`);

  return feedback.join("\n");
};