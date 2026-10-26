const clusters = {
  cluster1: {
    name: "Cluster 1",

    description:
      "The current facet map covers 17 dimensions of student understanding about confidence intervals.",

    facets: {
      learningGoals: [
        {
          id: "A1",
          description:
            "As sample size increases, standard errors decrease and the sampling distribution becomes more packed.",
        },
        {
          id: "A2",
          description:
            "As sample size increases, the sampling distribution approaches normal and does not mirror the population.",
        },
        {
          id: "A3",
          description:
            "The mean of the sampling distribution equals the population mean.",
        },
        {
          id: "A4",
          description:
            "Confidence level is the percentage of intervals capturing the parameter across repeated samples.",
        },
        {
          id: "A5",
          description:
            "A confidence interval estimates a population parameter, not a sample statistic.",
        },
        {
          id: "A6",
          description:
            "Confidence interval width increases as confidence level increases.",
        },
        {
          id: "A7",
          description:
            "Confidence interval width increases when standard error increases.",
        },
      ],

      misconceptions: [
        {
          id: "B8",
          description:
            "Sampling distribution is the same as sample distribution.",
        },
        {
          id: "B9",
          description:
            "Sampling distribution mirrors the population distribution.",
        },
        {
          id: "B10",
          description:
            "Larger samples make the sampling distribution more spread out.",
        },
        {
          id: "B11",
          description:
            "Larger samples make the sampling distribution closer to the population distribution.",
        },
        {
          id: "B12",
          description:
            "Sampling distribution is always normal regardless of sample size.",
        },
        {
          id: "B13",
          description:
            "Mean of the sampling distribution depends on sample size.",
        },
        {
          id: "B14",
          description:
            "A larger sample mean is always closer to the population mean.",
        },
        {
          id: "B15",
          description:
            "A confidence interval is a probability statement about a specific interval.",
        },
        {
          id: "B16",
          description:
            "Confidence intervals estimate sample statistics rather than population parameters.",
        },
        {
          id: "B17",
          description:
            "Higher confidence means a more precise, shorter confidence interval.",
        },
      ],
    },

    items: [
      {
        id: 2,

        question:
          "A researcher surveys a random sample of n=200 customers at a grocery chain and computes a 90% confidence interval for the mean weekly grocery spending of all customers at this chain. The resulting interval is (78.40, 93.20). Which of the following is a valid interpretation of this interval?",

        type: "multiple_choice",

        options: [
          "There is a 90% probability that the true mean weekly grocery spending of all customers at this chain is between 78.40 and 93.20.",
          "We are 90% confident that the true mean weekly grocery spending of all customers at this chain is between 78.40 and 93.20.",
          "We are 90% confident that the mean weekly grocery spending of the 200 sampled customers is between 78.40 and 93.20.",
          "90% of the 200 customers in the sample spend between 78.40 and 93.20 per week on groceries.",
        ],

        matrix: [
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        ],
      },

      {
        id: 5,

        question:
          "A researcher draws a random sample of n=16 from a population with mean \\(\\mu=80\\) and standard deviation \\(\\sigma=20\\), and constructs a 95% confidence interval for the population mean. She then draws a second random sample of n=64 from the same population and constructs another 95% confidence interval. Compared to the interval from the first sample (n=16), the 95% confidence interval from the second sample (n=64) will definitely be:",

        type: "multiple_choice",

        options: [
          "Half as wide, because the standard error is halved when n increases from 16 to 64.",
          "Half as wide, and the sample mean from the second sample will definitely be closer to \\(\\mu=80\\) than the first sample mean.",
          "One-quarter as wide, because n is quadrupled from 16 to 64.",
          "Wider, because using a larger sample introduces more variability into the sampling distribution.",
        ],

        matrix: [
          [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: 8,

        question:
          "A city's household electricity usage is right-skewed with a population mean of \\(\\mu =900 \\) kWh and a population standard deviation of \\(\\sigma=300\\) kWh. A researcher draws random samples of size n=100 from this population and constructs the sampling distribution of the sample mean \\(\\bar{x}\\). Which of the following best describes the shape and mean of this sampling distribution?",

        type: "multiple_choice",

        options: [
          "Approximately normal with a mean of 900 kWh.",
          "Right-skewed with a mean of 900 kWh.",
          "Approximately normal with a mean of \\( \\frac{900}{\\sqrt{100}} = 90 \\)  kWh.",
          "Right-skewed with a mean of \\( \\frac{900}{\\sqrt{100}} = 90 \\) kWh.",
        ],

        matrix: [
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        ],
      },

      {
        id: 11,

        question:
          "A city's household water usage follows a strongly right-skewed distribution with mean \\(\\mu=80\\) and standard deviation \\(\\sigma=30\\). A researcher first draws many random samples of size n=5 and then repeats the process with samples of size n=100. What should she expect to see?",

        type: "multiple_choice",

        options: [
          "Both distributions of sample means will be right-skewed, matching the population distribution.",
          "Both distributions will be approximately normal, even for n=5.",
          "The distribution for n=5 will still be noticeably skewed, but the distribution for n=100 will be approximately normal.",
          "The distribution for n=5 will be approximately normal, but the distribution for n=100 will become right-skewed.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: 18,

        question:
          "A researcher draws random samples from a right-skewed population with mean \\(\\mu=200\\) and standard deviation \\(\\sigma=40\\). She first uses samples of size n=16 and constructs 95% confidence intervals for \\(\\mu\\). She then switches to samples of size n=64. Compared to the intervals based on n=16, how will the intervals based on n=64 change, and why?",

        type: "multiple_choice",

        options: [
          "They will be narrower, because the standard error decreases from \\(\\frac{40}{\\sqrt{16}}=10\\) to \\(\\frac{40}{\\sqrt{64}}=5\\).",
          "They will be wider because a larger sample captures more population variability.",
          "They will be narrower because the sampling distribution more closely mirrors the right-skewed population.",
          "They will be wider because the sampling distribution more closely matches the population's spread.",
        ],

        matrix: [
          [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: 19,

        question:
          "A population of household incomes in a small town is strongly right-skewed with a mean of \\(\\mu=48,000\\) and a standard deviation of \\(\\sigma=15,000\\). A researcher draws all possible random samples of size n=100 and plots the sampling distribution of the sample mean. Which statement best describes this sampling distribution?",

        type: "multiple_choice",

        options: [
          "It is approximately normal with a mean of 48,000.",
          "It is strongly right-skewed with a mean of 48,000.",
          "It is always exactly normal with a mean of 48,000, even if n were as small as 5.",
          "It is approximately normal with a mean that depends on sample size.",
        ],

        matrix: [
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        ],
      },

      {
        id: 37,

        question:
          "A researcher draws a random sample of n=100 employees and computes a 95% confidence interval for the mean commute time: (22.4, 31.6) minutes. She then considers drawing a new sample of n=400 employees. Which of the following correctly describes what would happen?",

        type: "multiple_choice",

        options: [
          "The new interval would be wider because the larger sample produces a more spread-out sampling distribution, and it would estimate the true population mean commute time.",
          "The new interval would be narrower because standard error decreases, and it would estimate the true population mean commute time.",
          "The new interval would be narrower because standard error decreases, and it would more precisely estimate the sample mean commute time.",
          "The new interval would be wider because the larger sample produces a more spread-out sampling distribution and would estimate the sample mean.",
        ],

        matrix: [
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        ],
      },

      {
        id: 41,

        question:
          "A researcher collects a random sample of n=50 wait times at a hospital emergency room. The sample data are heavily right-skewed. She computes a 95% confidence interval of (42.3, 58.1) minutes. Which conclusion is valid?",

        type: "multiple_choice",

        options: [
          "We are 95% confident that the true mean wait time for all patients is between 42.3 and 58.1 minutes.",
          "We are 95% confident that the mean wait time of the 50 sampled patients is between 42.3 and 58.1 minutes.",
          "The confidence interval is invalid because the sample data are skewed.",
          "We are 95% confident that each observed wait time falls between 42.3 and 58.1 minutes.",
        ],

        matrix: [
          [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        ],
      },

      {
        id: 46,

        question:
          "A population of household electricity bills is strongly right-skewed with mean \\(\\mu=120\\) dollars and standard deviation \\(\\sigma=40\\) dollars. A researcher repeatedly draws random samples of size n=100 and plots the distribution of the resulting sample means. Which of the following best describes the shape and center?",

        type: "multiple_choice",

        options: [
          "Approximately normal with a mean of 120 dollars.",
          "Strongly right-skewed with a mean of 120 dollars.",
          "Approximately normal with a mean of \\(\\frac{120}{\\sqrt{100}}= 12 \\) dollars.",
          "Strongly right-skewed with a mean of \\(\\frac{120}{\\sqrt{100}}= 12 \\)  dollars.",
        ],

        matrix: [
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        ],
      },

      {
        id: 50,

        question:
          "A researcher draws random samples from a population with mean \\(\\mu=200\\) and standard deviation \\(\\sigma=40\\). She takes one sample of n=16 and obtains \\(\\bar{x}_1=196\\), and another sample of n=400 and obtains \\(\\bar{x}_2=203\\). She then constructs a 95% confidence interval from the larger sample. Which statement correctly describes her results?",

        type: "multiple_choice",

        options: [
          "The larger sample mean must be closer to \\(\\mu\\) because larger samples always produce sample means closer to the population mean.",
          "The 95% confidence interval from the larger sample estimates the true population mean \\(\\mu\\), which equals the mean of the sampling distribution regardless of sample size.",
          "The interval estimates the sample mean \\(\\bar{x}_2=203\\), and the mean of the sampling distribution equals \\(\\mu\\) regardless of sample size.",
          "The confidence interval estimates the true population mean \\(\\mu\\), and a larger sample always produces a sample mean closer to \\(\\mu\\).",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        ],
      },
    ],
  },

  cluster2: {
    name: "Cluster 7",

    description: "Identifying forces.",

    facets: {
      learningGoals: [
        {
          id: "A1",
          description:
            "Students can identify the relevant forces exerted on an object.",
        },
        {
          id: "A2",
          description:
            "Students can correctly identify the direction of all relevant forces.",
        },
        {
          id: "A3",
          description:
            "Students can compare the relative sizes of forces on static objects.",
        },
        {
          id: "A4",
          description:
            "Students correctly describe how forces work together when resistance forces are involved.",
        },
      ],

      misconceptions: [
        {
          id: "B5",
          description:
            "For an object at rest or moving horizontally, the downward force is greater than the upward force.",
        },
        {
          id: "B6",
          description:
            "Force is a property of an object and its size is indicated by the magnitude of other properties of the object.",
        },
        {
          id: "B7",
          description: "Force is not differentiated from energy.",
        },
        {
          id: "B8",
          description:
            "A passive object cannot exert a force even though it touches the other object.",
        },
        {
          id: "B9",
          description: "Motion determines the existence of force.",
        },
      ],
    },

    items: [
      {
        id: "1-1",

        type: "multiple_choice",

        question:
          "After a lecture on forces in science class, Frank was thinking about the forces acting on a box at rest on his desk. Which statement do you think best represents the forces acting on the box?",

        options: [
          "No forces act on the box at rest.",
          "The force of gravity is the only force acting on the box.",
          "Earth pulls down and the table pushes up equally on the box.",
          "The downward pull of gravity is larger than the upward push of the desk.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [1, 1, 1, 0, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 1, 0, 0, 0, 0],
        ],
      },

      {
        id: "1-2",

        type: "multiple_choice",

        question:
          "Frank then pushes lightly on the side of the box, but it still remains at rest. Which of the following statements best describes why the box remains at rest?",

        options: [
          "Frank is not using enough energy yet to move the box.",
          "The downward weight is greater than the upward force plus the sideways force.",
          "There must be a frictional force equally pushing in the opposite direction.",
          "While the box remains at rest, there are still no forces acting on it.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 1, 0, 0, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
        ],
      },

      {
        id: "1-3",

        type: "multiple_choice",

        question:
          "Frank then pushes harder on the box until it starts to move. Frank pushes it across the desk at a constant speed. Which of the following statements best represents the forces on the box now?",

        options: [
          "The table can only push up on the box, so any sideways force will cause it to move.",
          "The downward force of gravity is still larger than the up push of the table.",
          "The box will continue to move until the force of motion from Frank is used up.",
          "The box moves because the table cannot push to keep the box from moving.",
          "The horizontal friction is exactly equal and opposite to the push from Frank.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 0, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [1, 1, 1, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "1-4",

        type: "multiple_choice",

        question:
          "Next, Frank pushes so that the box moves at a faster constant speed. How would the force he uses on the box as it moves at the fast constant speed compare to the force he uses when the box moved at a slow constant speed?",

        options: [
          "Frank must be pushing harder to make the box move at a faster constant speed.",
          "The force Frank exerts is still equal in size and opposite in direction to friction.",
          "The box now has a greater force of motion.",
          "There is a greater difference between the downward force and the upward force.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 1, 0, 0, 1, 0, 0, 0, 0],
        ],
      },

      {
        id: "1-5",

        type: "multiple_choice",

        question:
          "Frank and his dad were discussing what force makes the car move forward from rest. What is the force that starts a car moving from rest?",

        options: [
          "The force of the road",
          "The force of motion",
          "The force of the engine",
          "The force of the tires",
        ],

        matrix: [
          [1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
        ],
      },

      {
        id: "1-6",

        type: "multiple_choice",

        question:
          "(paired with Q5) How would you explain this force to Frank and his dad?",

        options: [
          "The energy in the engine pushes the car.",
          "The motion forward indicates the car has a force of motion.",
          "Since the tires are moving, they push the car.",
          "The friction of the road on the tires pushes the car forward.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
          [1, 1, 0, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "1-7",

        type: "multiple_choice",

        question:
          "Frank and his dad were also wondering why the car slows down when the foot is taken off the gas. Which of the following statements is the best explanation?",

        options: [
          "The force of motion is used up after a while.",
          "The engine is no longer pushing the car.",
          "Friction from the road pushes against the car's motion.",
          "The car's weight is larger than the road's push up.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 1, 1, 0, 0, 1, 0, 0],
          [1, 1, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0],
        ],
      },

      {
        id: "1-8",

        type: "multiple_choice",

        question:
          "Frank is experimenting with a metal ball that he is holding up at the end of a string as shown at right. Which of the following is the best statement about the forces acting on the ball?",

        images: ["images/c7/q18.jpg"],

        options: [
          "Frank is pulling up on the ball.",
          "The ball hangs down tight on the string, so the weight of the ball is greater than the pull of the string.",
          "The ball is not moving, so there are no forces involved in this situation.",
          "The up force of the string is equal to the force of gravity on the ball.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [1, 1, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 0, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "1-9",

        type: "multiple_choice",

        question:
          "Suppose Frank uses a much stronger string to hold the ball. How does the force by this new string compare to the force by the string in the previous question?",

        images: ["images/c7/q18.jpg"],

        options: [
          "The forces by the strings are the same.",
          "The force by the new string is greater.",
          "The force by the original string is greater.",
          "Neither string is exerting a force.",
        ],

        matrix: [
          [1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
        ],
      },

      {
        id: "1-10",

        type: "open_response",

        question:
          "In the space below, explain your answer to the previous question.",

        matrix: [],
      },

      {
        id: "2-1",

        type: "multiple_choice",

        question:
          "Justin was playing with his little sister, Callie, after school. They began building block towers and knocking them over. Justin began to think about the forces on a single block resting on the table. Which statement do you think best represents the forces acting on the block?",

        images: ["images/c7/q21.jpg"],

        options: [
          "The downward pull of gravity is larger than the upward push of the desk.",
          "The Earth pulls down and the table pushes up equally on the block.",
          "There are no forces acting on the block at rest.",
          "The force of gravity is the only force acting on the block.",
        ],

        matrix: [
          [1, 1, 0, 0, 1, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
        ],
      },

      {
        id: "2-2",

        type: "multiple_choice",

        question:
          "Justin then pushes gently on the block, but the block does not move. Which of the following statements best describes why the block remains at rest?",

        options: [
          "The downward weight is greater than the upward force plus the sideways force.",
          "A frictional force by the table is equally pushing on the block in the opposite direction.",
          "While the block remains at rest, there are still no forces acting on it.",
          "Justin is not using enough energy yet to move the block.",
        ],

        matrix: [
          [1, 1, 0, 0, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 0, 1, 0, 0],
        ],
      },

      {
        id: "2-3",

        type: "multiple_choice",

        question:
          "Justin then stacks a second block on top of the first block as shown at right. How many forces are acting on the lower block?",

        images: ["images/c7/q23.jpg"],

        options: [
          "None",
          "One - gravity",
          "Two - gravity and the table",
          "Three - gravity, the table and the upper block",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "2-4",

        type: "open_response",

        question:
          "In the space below, explain how you know there no forces acting on the lower block.",

        matrix: [],
      },

      {
        id: "2-5",

        type: "open_response",

        question:
          "In the space below, explain how you know there is one force, gravity, acting on the lower block.",

        matrix: [],
      },

      {
        id: "2-6",

        type: "open_response",

        question:
          "In the space below, explain how you know there are two forces acting on the lower block: gravity and the table.",

        matrix: [],
      },

      {
        id: "2-7",

        type: "multiple_choice",

        question:
          "Justin turns on a battery powered car for Callie and sets it on the floor. He is curious about what force makes the car move forward from rest. What do you think is the force that starts a car moving from rest?",

        options: [
          "The force of the floor",
          "The force of motion",
          "The force of the battery",
          "The force of the tires",
        ],

        matrix: [
          [1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 1],
        ],
      },

      {
        id: "2-8",

        type: "multiple_choice",

        question:
          "(Paired with Q7) How would you explain this force to Justin?",

        options: [
          "The energy in the battery pushes the car.",
          "The motion forward indicates the car has a force of motion.",
          "Since the tires are moving, they push the car.",
          "The friction of the floor on the tires pushes the car forward.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 0, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "2-9",

        type: "multiple_choice",

        question:
          "Justin pushes a second toy car. This one does not have a battery. He notices that it begins to slow down after he stops pushing it. He wonders why the car slows down. Which answer do you think best describes the force(s) acting on the car as it slows down?",

        options: [
          "The force by Justin's hand is wearing off.",
          "The force of motion slowly wears out.",
          "The friction by the floor pushes opposite the motion.",
          "Gravity slows the car down.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 0, 0],
          [1, 1, 0, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "2-10",

        type: "multiple_choice",

        question:
          "Callie wants to learn how to make a yo-yo go up and down. She first holds the yo-yo up by its string as shown at right. Which of the following is the best statement about the forces acting on the yo-yo?",

        images: ["images/c7/q18.jpg"],

        options: [
          "Callie is pulling up on the yo-yo since the string does not exert a force.",
          "The yo-yo hangs down tight on the string, so the weight of the yo-yo is greater than the pull of the string.",
          "The yo-yo is not moving, so there are no forces involved in this situation.",
          "The up force of the string is equal to the force of gravity on the yo-yo.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [1, 1, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 0, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "2-11",

        type: "multiple_choice",

        question:
          "Justin holds his yo-yo from the end of his string to demonstrate to Callie how to get it started. Justin's yo-yo has a much stronger string than Callie's, but the yo-yo's are the same. How does the force by the stronger string compare to the force by Callie's string in the previous question?",

        images: ["images/c7/q211.jpg"],

        options: [
          "The forces by the strings are the same.",
          "The force by Justin's string is greater.",
          "The force by Callie's string is greater.",
          "Neither string is exerting a force.",
        ],

        matrix: [
          [0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1],
        ],
      },
    ],
  },

  cluster3: {
    name: "Cluster 3",

    description: "Forces as Interactions.",

    facets: {
      learningGoals: [
        {
          id: "A1",
          description: "A1",
        },
        {
          id: "A2",
          description: "A2",
        },
        {
          id: "A3",
          description: "A3",
        },
        {
          id: "A4",
          description: "A4",
        },
      ],
      misconceptions: [
        {
          id: "B5",
          description: "B5",
        },
        {
          id: "B6",
          description: "B6",
        },
        {
          id: "B9",
          description: "B9",
        },
      ],
    },

    items: [
      {
        id: "1-1",

        type: "multiple_choice",

        question:
          "Jennifer and Katie stand and lean on each other. Jennifer weighs 150 pounds and Katie weighs 120 pounds. Which one pushes harder on the other?",

        images: ["images/c9/q11.jpg"],

        options: [
          "Katie must push harder because she weighs less and has to compensate for having less weight.",
          "Jennifer and Katie push on each other with the same size force because force pairs are always equal.",
          "Jennifer pushes harder because she weighs more.",
          "It depends on whether Jennifer or Katie moves.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 1, 0],
          [1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 0, 0],
        ],
      },

      {
        id: "1-2",

        type: "open_response",

        question:
          "In the space below, describe who exerts the greater force in each of the following conditions AND why.",

        prompts: ["If Katie moves", "If Jennifer moves", "If neither moves"],

        matrix: [],
      },

      {
        id: "1-3",

        type: "multiple_choice",

        question:
          "In the picture at right, the book is at rest on the table. Which statement best describes the forces resulting from an interaction between objects?",

        options: [
          "The book pushes down on the table with the same force that the table pushes up on the book.",
          "The force by the table is equal and opposite to the force of gravity.",
          "The gravitational force is equal to the weight of the book.",
          "There are no forces due to an interaction in this situation since gravity is the only force acting on the book.",
        ],

        matrix: [],
      },

      {
        id: "1-4",

        type: "multiple_choice",

        question:
          "Jared is trying to decide if he will be able to push his car home after it runs out of gas. Which of the following conclusions is most likely to be true?",

        options: [
          "If the car does move, it is because Jared pushed harder on the car than the car pushed on him.",
          "The car will NOT move because it is heavier than Jared, so the car pushes back on him harder than he can push on the car.",
          "The car will NOT move because the forces on the car are equal and opposite, so there is no net force.",
          "The car may move. The motion of the car depends only on the forces acting on the car, not the force of the car pushing back on Jared.",
          "Only if Jared is strong enough will he be able to push harder on the car than the car can push on him.",
        ],

        matrix: [
          [0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
        ],
      },

      {
        id: "1-5",

        type: "multiple_choice",

        question:
          "Bob weighs 150 pounds (667 newtons). Which of the following statements best explains the gravitational force affecting Bob?",

        options: [
          "The Earth pulls on Bob with 150 pounds of gravitational force, but Bob pulls with less gravitational force on the earth since he has less mass.",
          "The Earth pulls on Bob with 150 pounds of gravitational force, and Bob pulls on the Earth with equal gravitational force since force pairs are equal.",
          'Since Bob will fall "toward the Earth" if he steps off a chair, the Earth\'s gravity must pull on him more than he pulls on the Earth.',
          "The gravitational force acting on Bob must be more than the gravitational force he exerts on the Earth since Bob is the one who accelerates as he falls.",
        ],

        matrix: [
          [0, 0, 1, 0, 0, 1, 0],
          [1, 1, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 1, 1, 0],
          [0, 0, 1, 0, 1, 0, 0],
        ],
      },

      {
        id: "1-6",

        type: "multiple_choice",

        question:
          "Sarah plays defensive back on her school's soccer team. At practice she kicks the ball that was rolling toward her to the other end of the field. Which statement describes the force by the ball acting on Sarah's foot during the kick?",

        options: [
          "The ball does not exert a force on Sarah's foot.",
          "The force by the ball is less than the force of Sarah's kick.",
          "The force by the ball is equal to the force of Sarah's kick.",
          "The force by the ball is greater than the force of Sarah's kick.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 0],
        ],
      },

      {
        id: "1-7",

        type: "multiple_choice",

        question:
          "(Paired with Item 6) Which reason best fits your answer to the previous question?",

        options: [
          "Sarah is stronger than the ball.",
          "Sarah's kick made the ball move, but the ball did not move Sarah.",
          "Only Sarah can exert a force; the ball is not alive.",
          "All interacting objects exert equal forces on each other.",
          "The ball hurt Sarah's foot more than she hurt the ball.",
          "The ball was moving when Sarah kicked the ball.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 1],
          [1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
        ],
      },

      {
        id: "1-8",

        type: "open_response",

        question:
          "When two objects interact and exert forces on each other, how can you tell which object exerts more force? Explain your answer in the space below.",

        matrix: [],
      },

      {
        id: "2-1",

        type: "multiple_choice",

        question:
          "The picture at right shows a ball bouncing on the floor. There is a force by the ball that is straight down on the floor and equal to 0.1 Newtons. Which of the descriptions below best describes the force by the floor on the ball at t = 2 seconds?",

        images: ["images/c9/q21.jpg"],

        options: [
          "The force is upward and to the right and larger than 0.1N to make the ball go up and to the right.",
          "The force is straight up on the ball and equal to 0.1N because that is how large the force by the ball is on the floor.",
          "The force is straight up on the ball and smaller than 0.1N because the ball was moving when it hit the floor but the floor does not move.",
          "The force by the floor is zero, since it is the released energy that makes the ball bounce.",
        ],

        matrix: [
          [0, 0, 0, 0, 1, 1, 0],
          [0, 1, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 1],
        ],
      },

      {
        id: "2-2",

        type: "multiple_choice",

        question:
          "Doug and Amy lean back pulling on each other. Doug weighs 180 pounds, and Amy weighs 110 pounds. Which one pulls harder on the other?",

        images: ["images/c9/q22.jpg"],

        options: [
          "Doug and Amy pull on each other with the same size force.",
          "Amy must pull harder because she weighs less and has to compensate.",
          "Doug pulls harder because he weighs more.",
          "It depends on whether Doug or Amy moves.",
        ],

        matrix: [
          [0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1, 0, 0],
        ],
      },

      {
        id: "2-3",

        type: "open_response",

        question:
          "In the space below, describe who exerts the greater force in each of the following conditions AND why.",

        prompts: ["If Amy moves", "If Doug moves", "If neither moves"],

        matrix: [],
      },

      {
        id: "2-4",

        type: "multiple_choice",

        question:
          "Bill is trying to push a table to the other side of the kitchen in order to clean the floor. Which of the following statements makes the most sense?",

        options: [
          "The table will move if Bill is able to push on the table harder than it pushes back on him.",
          "The table may move. The motion of the table depends only on the forces acting on the table, not the force of the table pushing back on Bill.",
          "The table will NOT move because the forces on the table are equal and opposite, so there is no net force",
          "The table definitely will move because Bill is heavier than the table so he pushes on it harder than it can push back on him.",
        ],

        matrix: [
          [0, 0, 0, 0, 1, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
        ],
      },

      {
        id: "2-5",

        type: "multiple_choice",

        question:
          "Sarah weighs 120 pounds (534 newtons). Which of the following statements best describes the gravitational force between Sarah and the earth?",

        options: [
          "Sarah pulls on the earth with 120 pounds of force and the earth pulls back on Sarah with 120 pounds of force. Force pairs are always equal.",
          "The earth pulls on Sarah with 120 pounds of force, but Sarah pulls less on the earth since she has much less mass.",
          "The earth pulls on Sarah harder than Sarah pulls back. If this was not true then Sarah would not accelerate toward the earth when she steps off a chair.",
          'Neither Sarah nor the earth pull on each other. The earth is not "alive" so it cannot exert a force on Sarah.',
        ],

        matrix: [
          [1, 1, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 1, 0],
          [0, 0, 1, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 1],
        ],
      },

      {
        id: "2-6",

        type: "multiple_choice",

        question:
          "Dylan is on his school's football team. One day he is punting and kicks the ball to the other end of the field. Which statement best describes the force acting on Dylan's foot by the ball during the kick?",

        options: [
          "The ball does not exert a force on Dylan's foot.",
          "The force by the ball is less than the force of Dylan's kick.",
          "The force by the ball is equal to Dylan's kick.",
          "The force by the ball is greater than Dylan's kick.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "2-7",

        type: "multiple_choice",

        question:
          "(Paired with Q6) Which reason best fits your answer to the previous question?",

        options: [
          "Dylan is stronger than the ball.",
          "Dylan's kick made the ball move, but the ball did not move Dylan.",
          "Only Dylan can exert a force, since the ball is not alive.",
          "All interacting objects exert equal forces on each other.",
          "The ball hurt Dylan's foot more than his foot hurt the ball.",
        ],

        matrix: [
          [0, 0, 0, 0, 0, 1, 0],
          [0, 0, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 1, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
        ],
      },

      {
        id: "2-8",

        type: "open_response",

        question:
          "When two objects interact and exert forces on each other, how can you tell which object exerts the most force?",

        matrix: [],
      },
    ],
  },
};

function getFacetIds(clusterId) {
  const cluster = clusters[clusterId];

  const learningGoals = cluster.facets.learningGoals.map((facet) => facet.id);

  const misconceptions = cluster.facets.misconceptions.map((facet) => facet.id);

  return [...learningGoals, ...misconceptions];
}

function renderFacets(clusterId) {
  const cluster = clusters[clusterId];

  const container = document.getElementById("facets-container");

  const description = document.getElementById("facet-description");

  description.textContent = cluster.description;

  const learningGoals = cluster.facets.learningGoals
    .map(
      (facet) => `
      <div class="facet">
        <strong>${facet.id}</strong>

        <span>
          ${facet.description}
        </span>
      </div>
    `,
    )
    .join("");

  const misconceptions = cluster.facets.misconceptions
    .map(
      (facet) => `
      <div class="facet">
        <strong>${facet.id}</strong>

        <span>
          ${facet.description}
        </span>
      </div>
    `,
    )
    .join("");

  container.innerHTML = `
    <div class="facet-columns">

      <div class="facet-box">
        <h3>Learning Goals (A-Facets)</h3>

        ${learningGoals}
      </div>


      <div class="facet-box">
        <h3>Misconceptions (B-Facets)</h3>

        ${misconceptions}
      </div>

    </div>
  `;
}

function buildMatrix(clusterId, item, hidden = true) {
  const facets = getFacetIds(clusterId);

  const hiddenClass = hidden ? "hidden" : "";

  let html = `
    <div
      class="matrix-container ${hiddenClass}"
      id="matrix-${clusterId}-${item.id}"
    >

      <table>

        <thead>
          <tr>
            <th>Option</th>

            ${facets.map((facet) => `<th>${facet}</th>`).join("")}

          </tr>
        </thead>

        <tbody>
  `;

  item.matrix.forEach((row, index) => {
    html += `
      <tr>

        <th>
          ${String.fromCharCode(65 + index)}
        </th>

        ${row.map((value) => `<td>${value}</td>`).join("")}

      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  return html;
}

function renderItems(clusterId) {
  const container = document.getElementById("items-container");

  container.innerHTML = "";

  const items = clusters[clusterId].items;

  items.forEach((item) => {
    const card = document.createElement("div");

    card.className = "item-card";

    // Images
    let imagesHtml = "";

    if (item.images) {
      imagesHtml = item.images
        .map(
          (image) => `
            <img
              src="${image}"
              class="item-image"
              alt="Illustration for Item ${item.id}"
            >
          `,
        )
        .join("");
    }

    // Multiple-choice options
    let optionsHtml = "";

    if (item.type === "multiple_choice" && item.options) {
      optionsHtml = `
        <ul class="options">

          ${item.options
            .map(
              (option, index) => `
                <li>
                  <strong>
                    ${String.fromCharCode(65 + index)}.
                  </strong>

                  ${option}
                </li>
              `,
            )
            .join("")}

        </ul>
      `;
    }

    // Open-response prompts
    let promptsHtml = "";

    if (item.type === "open_response" && item.prompts) {
      promptsHtml = `
        <div class="open-response">

          ${item.prompts
            .map(
              (prompt) => `
                <div class="response-prompt">
                  ${prompt}
                </div>
              `,
            )
            .join("")}

        </div>
      `;
    }

    // Q-matrix
    let matrixHtml = "";

    if (item.matrix && item.matrix.length > 0) {
      matrixHtml = `
        <button
          onclick="
            toggleMatrix(
              '${clusterId}',
              '${item.id}',
              this
            )
          "
        >
          View Q-Matrix
        </button>

        ${buildMatrix(clusterId, item, true)}
      `;
    }

    card.innerHTML = `
      <h3>
        Item ${item.id}
      </h3>

      <p class="question">
        ${item.question}
      </p>

      ${imagesHtml}

      ${optionsHtml}

      ${promptsHtml}

      ${matrixHtml}
    `;

    container.appendChild(card);
  });

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function toggleMatrix(clusterId, itemId, button) {
  const matrix = document.getElementById(`matrix-${clusterId}-${itemId}`);

  matrix.classList.toggle("hidden");

  if (matrix.classList.contains("hidden")) {
    button.textContent = "View Q-Matrix";
  } else {
    button.textContent = "Hide Q-Matrix";
  }
}

function renderSummary(clusterId) {
  const summary = document.getElementById("matrix-summary");

  summary.innerHTML = "";

  const items = clusters[clusterId].items;

  items.forEach((item) => {
    const section = document.createElement("div");

    section.className = "matrix-item";

    section.innerHTML = `
      <h3>
        Item ${item.id}
      </h3>

      ${buildMatrix(clusterId, item, false)}
    `;

    summary.appendChild(section);
  });
}

function renderCluster(clusterId) {
  renderFacets(clusterId);
  renderItems(clusterId);
  renderSummary(clusterId);
}

const clusterSelect = document.getElementById("cluster-select");

clusterSelect.addEventListener("change", function () {
  renderCluster(this.value);
});

renderCluster("cluster1");
