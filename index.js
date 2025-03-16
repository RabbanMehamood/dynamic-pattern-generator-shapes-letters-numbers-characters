const dropDownValuesShape = ["Shape", "Alphabets", "Characters", "Numbers"];

const popUpObject = [
  {
    shape: ["Triangle", "Square", "Rectangle", "Rhombus"],
  },
  {
    alphabets: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
  },
  {
    characters: "!@#$%^&*()-_=+{}[]|".split(""),
  },
  {
    numbers: "0123456789".split(""),
  },
];

const patternDropDownValues = [
  "Triangle",
  "Square",
  "Diamond",
  "Rectangle",
  "Rhombus",
];

const patternObject = [
  {
    Triangle: [
      "Right Angle Triangle",
      "Hollow Right Angle",
      "Hollow Triangle",
      "Inverted Triangle",
      "Mirrored Right Angle Triangle",
      "Hollow Inverted Triangle",
    ],
  },
  { Square: ["Filled Square", "Hollow Square", "Square With Diagonals"] },
  { Diamond: ["Filled Diamond", "Hollow Diamond"] },
  { Rectangle: ["Filled Rectangle", "Hollow Rectangle"] },
  { Rhombus: ["Filled Rhombus", "Hollow Rhombus"] },
];

let userChoseValue = new Object();
const dropDownsDiv = document.createElement("div");
const selectShapeDropDown = document.createElement("select");
let heading = document.createElement("h2");
heading.textContent =
  "Select Shape,Character,Alphabet Or Number To Generate Pattern In The Below Area";
heading.style.textAlign = "center";

for (let i = 0; i < dropDownValuesShape.length; i++) {
  let optionEl = document.createElement("option");
  optionEl.setAttribute("value", `${dropDownValuesShape[i]}`);
  optionEl.textContent = `${dropDownValuesShape[i]}`;
  selectShapeDropDown.appendChild(optionEl);
}

selectShapeDropDown.classList.add("drop-down-style");
dropDownsDiv.appendChild(selectShapeDropDown);

let userInputNumberEl = document.createElement("input");
userInputNumberEl.setAttribute("type", "number");
userInputNumberEl.classList.add("drop-down-style");
userInputNumberEl.setAttribute("value", "2");
userInputNumberEl.setAttribute("min", "2");
userInputNumberEl.setAttribute("max", "10");
dropDownsDiv.appendChild(userInputNumberEl);

document.body.appendChild(dropDownsDiv);
document.body.appendChild(heading);

let patternContainer = document.createElement("div");
patternContainer.setAttribute("id", "patternContainer");
patternContainer.classList.add("pat-container-style");
document.body.appendChild(patternContainer);

let patternDropDown;

function showPopUp(value) {
  let userValue = value.toLowerCase();
  if (document.getElementById("popUpDiv")) {
    document.getElementById("popUpDiv").remove();
  }
  const popUpDiv = document.createElement("div");
  popUpDiv.setAttribute("id", "popUpDiv");
  popUpDiv.classList.add("popup-div-style");
  popUpDiv.innerHTML = "";

  const popUpDivContent = document.createElement("div");
  popUpDivContent.setAttribute("id", "popUpDivContent");
  popUpDivContent.classList.add("pop-up-flex");

  let popUpList = popUpObject.find((item) => item.hasOwnProperty(userValue));
  popUpList = popUpList[userValue];

  if (userValue !== "shapes") {
    for (let item of popUpList) {
      let childDiv = document.createElement("div");
      childDiv.textContent = `${item}`;
      childDiv.setAttribute("id", `${item}`);
      childDiv.setAttribute("value", `${item}`);
      childDiv.classList.add("child-div");
      popUpDivContent.appendChild(childDiv);
    }
  } else if (userValue === "shapes") {
    for (let item of popUpList) {
      let childDiv = document.createElement("div");
      childDiv.setAttribute("id", `${item}`);
      childDiv.setAttribute("value", `${item}`);
      if (item === "Triangle") {
        childDiv.classList.add("triangle-shape");
      } else if (item === "Square") {
        childDiv.classList.add("square-shape");
      } else if (item === "Rectangle") {
        childDiv.classList.add("rectangle-shape");
      } else if (item === "Rhombus") {
        childDiv.classList.add("rhombus-shape");
      }
      childDiv.classList.add("child-div");
      popUpDivContent.appendChild(childDiv);
    }
  }
  popUpDiv.appendChild(popUpDivContent);
  popUpDivContent.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target && event.target.classList.contains("child-div")) {
      let value = event.target.getAttribute("value");
      userChoseValue["firstSACNInput"] = value;
    }
  });

  popUpDiv.style.display = "block";
  popUpDiv.addEventListener("click", () => {
    popUpDiv.style.display = "none";
  });

  document.body.appendChild(popUpDiv);
}

selectShapeDropDown.addEventListener("change", (event) => {
  let userSelectedValue = event.target.value;

  showPopUp(userSelectedValue);
  let existingPatternDropDown = document.querySelector(".pattern-drop-down");
  if (existingPatternDropDown) {
    existingPatternDropDown.remove();
  }
  if (document.getElementById("genPattern")) {
    document.getElementById("genPattern").remove();
  }
  if (!document.querySelector(".pattern-drop-down")) {
    const patternDropDown = document.createElement("select");
    patternDropDown.classList.add("pattern-drop-down", "drop-down-style");

    for (let i = 0; i < patternDropDownValues.length; i++) {
      let optionEl = document.createElement("option");
      optionEl.setAttribute("value", `${patternDropDownValues[i]}`);
      optionEl.textContent = `${patternDropDownValues[i]}`;
      patternDropDown.appendChild(optionEl);
    }

    patternDropDown.addEventListener("change", (event) => {
      const patternValue = event.target.value;
      userChoseValue["shape"] = patternValue;
      userChoseValue["Number"] = userInputNumberEl.value;
      selectShapePattern(patternValue);
    });

    dropDownsDiv.appendChild(patternDropDown);
  }
});

function selectShapePattern(value) {
  let shape = value;

  let existingPatternSelect = document.querySelector(".shape-pattern-select");
  if (existingPatternSelect) {
    existingPatternSelect.remove();
  }

  let selectPatternEl = document.createElement("select");
  selectPatternEl.classList.add("shape-pattern-select", "drop-down-style");

  let patterns = patternObject.filter((item) => item[shape]);
  if (patterns.length > 0) {
    patterns = patterns[0][shape];
  }

  for (let patname of patterns) {
    let optionEl = document.createElement("option");
    optionEl.setAttribute("id", `${patname}`);
    optionEl.setAttribute("value", `${patname}`);
    optionEl.textContent = `${patname}`;
    selectPatternEl.appendChild(optionEl);
  }

  dropDownsDiv.appendChild(selectPatternEl);
  if (document.getElementById("genPattern")) {
    document.getElementById("genPattern").remove();
  }

  if (!document.querySelector("#genPattern")) {
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "genPattern");
    submitButton.textContent = "Generate Pattern";
    submitButton.addEventListener("click", () => {
      userChoseValue["shapePattern"] = selectPatternEl.value;
      console.log(userChoseValue);
    });
    dropDownsDiv.appendChild(submitButton);
  }
}
