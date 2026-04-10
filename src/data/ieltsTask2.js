export const essayTypes = [
  // ================= OPINION =================
  {
    id: "opinion",
    title: "Opinion Essay (Agree or Disagree)",

    description:
      "You must clearly state whether you agree or disagree with a statement and support your opinion throughout the essay.",

    question:
      "Some people believe technology makes people less social. Do you agree or disagree?",

    structure: [
      "Introduction – paraphrase topic + clear opinion",
      "Body Paragraph 1 – first reason + explanation + example",
      "Body Paragraph 2 – second reason + explanation + example",
      "Conclusion – restate opinion and summarize ideas",
    ],

    sketch: `Introduction:
Technology has transformed the way people communicate in modern society. While some argue that it reduces social interaction, I disagree because it enables new and meaningful forms of connection.

Body Paragraph 1:
Firstly, technology allows individuals to maintain relationships across long distances. For example, video calls and messaging applications help families stay connected despite geographical separation.

Body Paragraph 2:
Moreover, online communities enable people with shared interests to interact regularly, which can strengthen social bonds rather than weaken them.

Conclusion:
In conclusion, although technology changes communication styles, it ultimately enhances social interaction by creating more opportunities for connection.`,
  },

  // ================= DISCUSSION =================
  {
    id: "discussion",
    title: "Discussion Essay (Discuss Both Views)",

    description:
      "You must discuss two opposing views fairly and present your own opinion if the question requires it.",

    question:
      "Some people think online learning is better than classroom learning, while others disagree. Discuss both views and give your opinion.",

    structure: [
      "Introduction – introduce topic + both views + opinion",
      "Body Paragraph 1 – explain first view",
      "Body Paragraph 2 – explain second view",
      "Conclusion – summarize discussion + opinion",
    ],

    sketch: `Introduction:
Education has evolved significantly with the rise of digital technology. While some believe online learning is more effective, others argue that traditional classrooms remain superior. This essay will discuss both perspectives before presenting my view.

Body Paragraph 1:
Supporters of online education claim that it offers flexibility and accessibility. Students can learn at their own pace and access courses regardless of location.

Body Paragraph 2:
However, traditional classrooms provide direct interaction with teachers and classmates, which improves engagement and motivation.

Conclusion:
In conclusion, although online learning offers convenience, face-to-face education provides stronger interaction and therefore remains more effective overall.`,
  },

  // ================= PROBLEM SOLUTION =================
  {
    id: "problem-solution",
    title: "Problem–Solution Essay",

    description:
      "You must identify problems related to an issue and suggest practical and realistic solutions.",

    question:
      "Many cities around the world face increasing traffic congestion. What problems does this cause and what solutions can be implemented?",

    structure: [
      "Introduction – introduce issue",
      "Body Paragraph 1 – problems and effects",
      "Body Paragraph 2 – solutions and explanations",
      "Conclusion – summarize key points",
    ],

    sketch: `Introduction:
Traffic congestion has become a major issue in many urban areas worldwide, causing serious social and environmental concerns.

Body Paragraph 1:
One significant problem is increased air pollution, which negatively affects public health. Additionally, long commuting times reduce productivity and increase stress among workers.

Body Paragraph 2:
These issues can be addressed by improving public transportation systems and encouraging car-sharing initiatives. Governments could also promote cycling infrastructure to reduce reliance on private vehicles.

Conclusion:
In conclusion, traffic congestion creates environmental and economic problems, but effective transport policies and alternative travel options can significantly reduce its impact.`,
  },

  // ================= ADVANTAGES DISADVANTAGES =================
  {
    id: "advantages-disadvantages",
    title: "Advantages and Disadvantages Essay",

    description:
      "You evaluate both the positive and negative aspects of a development or trend objectively.",

    question:
      "Remote work is becoming increasingly common. What are the advantages and disadvantages of this trend?",

    structure: [
      "Introduction – introduce trend",
      "Body Paragraph 1 – advantages with examples",
      "Body Paragraph 2 – disadvantages with examples",
      "Conclusion – balanced summary or opinion",
    ],

    sketch: `Introduction:
Remote working has grown rapidly due to technological advancements and changing workplace expectations.

Body Paragraph 1:
One major advantage is flexibility, allowing employees to balance work and personal responsibilities more effectively. Furthermore, companies can reduce operational costs such as office space.

Body Paragraph 2:
However, remote work may lead to social isolation and reduced collaboration among team members, which can negatively affect creativity and teamwork.

Conclusion:
In conclusion, while remote work offers flexibility and cost savings, it also presents challenges related to communication and employee wellbeing.`,
  },

  // ================= DIRECT QUESTION =================
  {
    id: "direct-question",
    title: "Direct Question Essay",

    description:
      "You must answer two or more specific questions directly and clearly in separate paragraphs.",

    question:
      "Why do many people choose to live abroad? Is this a positive or negative development?",

    structure: [
      "Introduction – paraphrase topic",
      "Body Paragraph 1 – answer first question",
      "Body Paragraph 2 – answer second question",
      "Conclusion – summarize answers",
    ],

    sketch: `Introduction:
In recent years, an increasing number of individuals have chosen to live in foreign countries for various reasons.

Body Paragraph 1:
Many people move abroad to access better employment opportunities and higher standards of living. Others seek educational advancement or cultural experiences.

Body Paragraph 2:
Overall, this trend is largely positive because it promotes cultural exchange and personal growth, although challenges such as homesickness may occur.

Conclusion:
In conclusion, people relocate abroad mainly for economic and educational reasons, and despite certain difficulties, the development is generally beneficial.`,
  },
];