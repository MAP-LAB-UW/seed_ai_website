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

    description: "Identifying forces",

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
      // Cluster 2 items go here
    ],
  },

  cluster3: {
    name: "Cluster 3",

    description: "Description for Cluster 3.",

    facets: {
      learningGoals: [],
      misconceptions: [],
    },

    items: [],
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

  const letters = ["A", "B", "C", "D"];

  item.matrix.forEach((row, index) => {
    html += `
      <tr>

        <th>
          ${letters[index]}
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

  const letters = ["A", "B", "C", "D"];

  items.forEach((item) => {
    const card = document.createElement("div");

    card.className = "item-card";

    card.innerHTML = `

      <h3>
        Item ${item.id}
      </h3>

      <p class="question">
        ${item.question}
      </p>

      <ul class="options">

        ${item.options
          .map(
            (option, index) => `
              <li>

                <strong>
                  ${letters[index]}.
                </strong>

                ${option}

              </li>
            `,
          )
          .join("")}

      </ul>


      <button
        onclick="
          toggleMatrix(
            '${clusterId}',
            ${item.id},
            this
          )
        "
      >
        View Q-Matrix
      </button>


      ${buildMatrix(clusterId, item, true)}

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
