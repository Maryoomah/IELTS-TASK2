
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

    modelEssay: (
      <div className="space-y-6 text-slate-600 leading-8 [&_p]:text-justify [&_p]:leading-8 [&_h5]:text-base [&_h5]:font-bold [&_h5]:text-slate-900 [&_h5]:mb-2">
        <div>
          <h5>Introduction</h5>

          <p>
            Technology has transformed the way people communicate in modern
            society. While some argue that it reduces social interaction, I
            disagree because it enables new and meaningful forms of connection.
          </p>
        </div>

        <div>
          <h5>Body Paragraph 1</h5>

          <p>
            Firstly, technology allows individuals to maintain relationships
            across long distances. For example, video calls and messaging
            applications help families stay connected despite geographical
            separation. As a result, people can communicate more frequently and
            maintain stronger emotional bonds even when living far apart.
          </p>
        </div>

        <div>
          <h5>Body Paragraph 2</h5>

          <p>
            Moreover, online communities enable people with shared interests to
            interact regularly, which can strengthen social bonds rather than
            weaken them. Many individuals join discussion groups, educational
            forums, and hobby-based communities where they exchange ideas and
            support one another. This demonstrates that technology can actually
            expand social interaction instead of limiting it.
          </p>
        </div>

        <div>
          <h5>Conclusion</h5>

          <p>
            In conclusion, although technology changes communication styles, it
            ultimately enhances social interaction by creating more
            opportunities for connection. Therefore, I strongly believe that
            technology has had a positive effect on people’s social lives.
          </p>
        </div>
      </div>
    ),
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

    modelEssay: (
      <div className="space-y-6 text-slate-600 leading-8 [&_p]:text-justify [&_p]:leading-8 [&_h5]:text-base [&_h5]:font-bold [&_h5]:text-slate-900 [&_h5]:mb-2">
        <div>
          <h5>Introduction</h5>

          <p>
            Education has evolved significantly with the rise of digital
            technology. While some believe online learning is more effective,
            others argue that traditional classrooms remain superior. This essay
            will discuss both perspectives before presenting my own view.
          </p>
        </div>

        <div>
          <h5>Body Paragraph 1</h5>

          <p>
            Supporters of online education claim that it offers flexibility and
            accessibility. Students can learn at their own pace and access
            courses regardless of location, which is particularly beneficial for
            working adults and individuals living in remote areas. Furthermore,
            online platforms often provide recorded lessons and additional
            resources that allow learners to review materials whenever
            necessary.
          </p>
        </div>

        <div>
          <h5>Body Paragraph 2</h5>

          <p>
            However, traditional classrooms provide direct interaction with
            teachers and classmates, which improves engagement and motivation.
            Face-to-face communication encourages active participation,
            immediate feedback, and stronger relationships among students. In
            addition, classroom environments reduce distractions and help
            learners maintain focus more effectively than studying alone online.
          </p>
        </div>

        <div>
          <h5>Conclusion</h5>

          <p>
            In conclusion, although online learning offers convenience and
            flexibility, traditional classroom education provides stronger
            interaction and a more supportive learning environment. Therefore, I
            believe face-to-face education remains more effective overall.
          </p>
        </div>
      </div>
    ),
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

    modelEssay: (
      <div className="space-y-6 text-slate-600 leading-8 [&_p]:text-justify [&_p]:leading-8 [&_h5]:text-base [&_h5]:font-bold [&_h5]:text-slate-900 [&_h5]:mb-2">
        <div>
          <h5>Introduction</h5>

          <p>
            Traffic congestion has become a major issue in many urban areas
            worldwide, causing serious social, economic, and environmental
            concerns. This essay will discuss the main problems caused by heavy
            traffic and suggest practical solutions to reduce its impact.
          </p>
        </div>

        <div>
          <h5>Body Paragraph 1</h5>

          <p>
            One significant problem caused by traffic congestion is increased
            air pollution. When large numbers of vehicles remain on the road for
            long periods, they release harmful gases that negatively affect
            public health and contribute to environmental damage. Additionally,
            long commuting times reduce productivity and increase stress among
            workers, as many people spend several hours travelling instead of
            resting or completing useful tasks.
          </p>
        </div>

        <div>
          <h5>Body Paragraph 2</h5>

          <p>
            These issues can be addressed by improving public transportation
            systems and encouraging car-sharing initiatives. If buses, trains,
            and other public transport options are affordable, reliable, and
            convenient, fewer people will depend on private cars. Governments
            could also promote cycling infrastructure by building safe bicycle
            lanes, which would reduce traffic pressure and encourage healthier
            travel habits.
          </p>
        </div>

        <div>
          <h5>Conclusion</h5>

          <p>
            In conclusion, traffic congestion creates environmental and economic
            problems, especially through air pollution, stress, and wasted time.
            However, effective transport policies and alternative travel options
            can significantly reduce its impact on cities and residents.
          </p>
        </div>
      </div>
    ),
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

  modelEssay: (
    <div className="space-y-6 text-slate-600 leading-8 [&_p]:text-justify [&_p]:leading-8 [&_h5]:text-base [&_h5]:font-bold [&_h5]:text-slate-900 [&_h5]:mb-2">
      <div>
        <h5>Introduction</h5>

        <p>
          Remote working has grown rapidly due to technological advancements
          and changing workplace expectations. This trend has both positive
          and negative effects, as it offers employees greater flexibility
          while also creating challenges for communication and teamwork.
        </p>
      </div>

      <div>
        <h5>Body Paragraph 1</h5>

        <p>
          One major advantage of remote work is flexibility. Employees can
          often organise their schedules more effectively, which allows them
          to balance work and personal responsibilities. This can improve job
          satisfaction and reduce stress, especially for workers with family
          commitments. Furthermore, companies can reduce operational costs
          because they may spend less on office space, electricity, and other
          workplace facilities.
        </p>
      </div>

      <div>
        <h5>Body Paragraph 2</h5>

        <p>
          However, remote work also has disadvantages. It may lead to social
          isolation because employees have fewer opportunities to interact
          with colleagues in person. In addition, reduced face-to-face
          communication can make collaboration more difficult, especially when
          teams need to share ideas or solve problems quickly. Over time,
          this may negatively affect creativity, teamwork, and employee
          wellbeing.
        </p>
      </div>

      <div>
        <h5>Conclusion</h5>

        <p>
          In conclusion, while remote work offers flexibility and cost
          savings, it also presents challenges related to communication,
          collaboration, and social connection. Therefore, organisations
          should try to balance remote work with opportunities for regular
          interaction among employees.
        </p>
      </div>
    </div>
  ),
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

  modelEssay: (
    <div className="space-y-6 text-slate-600 leading-8 [&_p]:text-justify [&_p]:leading-8 [&_h5]:text-base [&_h5]:font-bold [&_h5]:text-slate-900 [&_h5]:mb-2">
      <div>
        <h5>Introduction</h5>

        <p>
          In recent years, an increasing number of individuals have chosen to
          live in foreign countries for various reasons. This essay will
          explain why many people decide to move abroad and argue that this
          is generally a positive development.
        </p>
      </div>

      <div>
        <h5>Body Paragraph 1</h5>

        <p>
          Many people move abroad to access better employment opportunities
          and higher standards of living. In some countries, wages are low
          and career options are limited, so relocating can give individuals
          a better chance to improve their financial situation. Others choose
          to live overseas for educational advancement, as foreign
          universities may offer stronger academic programmes, better
          facilities, or more specialised courses.
        </p>
      </div>

      <div>
        <h5>Body Paragraph 2</h5>

        <p>
          Overall, this trend is largely positive because it promotes
          personal growth and cultural exchange. People who live abroad often
          develop independence, confidence, and a broader understanding of
          the world. Moreover, they are exposed to different languages,
          traditions, and ways of thinking, which can make them more
          open-minded. Although challenges such as homesickness and cultural
          adjustment may occur, these difficulties can usually be overcome
          with time and support.
        </p>
      </div>

      <div>
        <h5>Conclusion</h5>

        <p>
          In conclusion, people relocate abroad mainly for economic and
          educational reasons. Despite certain difficulties, this development
          is generally beneficial because it encourages personal development
          and greater cultural understanding.
        </p>
      </div>
    </div>
  ),
},


];

