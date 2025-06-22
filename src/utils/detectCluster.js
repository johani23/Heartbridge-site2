export function detectCluster(answers) {
  let score = {
    idealist: 0,
    survivor: 0,
    doubter: 0,
    dataLover: 0,
  };

  Object.values(answers).forEach((answer) => {
    const lower = answer.toLowerCase();

    if (lower.includes("احتواء") || lower.includes("حب نقي")) {
      score.idealist += 1;
    }
    if (lower.includes("خيانة") || lower.includes("خذلان") || lower.includes("جرح")) {
      score.survivor += 1;
    }
    if (lower.includes("صمت") || lower.includes("أخاف") || lower.includes("تردد")) {
      score.doubter += 1;
    }
    if (lower.includes("منطقي") || lower.includes("تحليل") || lower.includes("أرقام")) {
      score.dataLover += 1;
    }
  });

  const maxCluster = Object.entries(score).reduce(
    (prev, curr) => (curr[1] > prev[1] ? curr : prev),
    ["none", 0]
  )[0];

  const names = {
    idealist: "The Idealist",
    survivor: "The Burnt Survivor",
    doubter: "The Silent Doubter",
    dataLover: "The Data-Lover",
  };

  return names[maxCluster] || null;
}
