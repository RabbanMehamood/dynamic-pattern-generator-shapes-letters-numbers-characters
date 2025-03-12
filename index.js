const dropDownValuesShape = ["Shape", "Alphabets", "Characters", "Numbers"];

const popUpObject = [
  {
    shape: ["Triangle", "Square", "Rectangle", "Rhombus"],
  },
  {
    alphabets: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
  },
  {
    characters: [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      "{",
      "}",
      "[",
      "]",
      "|",
    ],
  },
  {
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
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

const dropDownsDiv = document.createElement("div");
const selectShapeDropDown = document.createElement("select");

for (let i = 0; i < dropDownValuesShape.length; i++) {
  let optionEl = document.createElement("option");
  optionEl.setAttribute("value", `${dropDownValuesShape[i]}`);
  optionEl.textContent = `${dropDownValuesShape[i]}`;
  selectShapeDropDown.appendChild(optionEl);
}

selectShapeDropDown.classList.add("drop-down-style");
dropDownsDiv.appendChild(selectShapeDropDown);

let userInput = document.createElement("input");
userInput.setAttribute("type", "number");
userInput.classList.add("drop-down-style");
userInput.setAttribute("value", "2");
dropDownsDiv.appendChild(userInput);

document.body.appendChild(dropDownsDiv);
let patternContainer = document.createElement("div");
patternContainer.setAttribute("id", "patternContainer");
patternContainer.classList.add("pat-container-style");
document.body.appendChild(patternContainer);

let patternDropDown;

selectShapeDropDown.addEventListener("change", (event) => {
  let userSelectedValue = event.target.value;
  showPopUp(userSelectedValue);
  let existingPatternDropDown = document.querySelector(".pattern-drop-down");
  if (existingPatternDropDown) {
    existingPatternDropDown.remove();
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

    showPopUp(userSelectedValue);

    patternDropDown.addEventListener("change", (event) => {
      const patternValue = event.target.value;
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
    dropDownsDiv.appendChild(submitButton);
  }
}

function showPopUp(value) {
  let userValue = value;

  const popUpDiv = document.createElement("div");
  popUpDiv.setAttribute("id", "popUpdiv");
  popUpDiv.classList.add("popup-div-style");
  popUpDiv.innerHTML = "";

  let popUpList = popUpObject.filter((item) => item[userValue]);
  if (popUpList.length !== 0) {
    popUpList = popUpList[0][userValue];
  }

  if (userValue !== "shapes") {
    for (let item of popUpList) {
      let childDiv = document.createElement("div");
      childDiv.textContent = `${item}`;
      popUpDiv.appendChild(childDiv);
    }
  } else {
    for (let item of popUpList) {
      let childDiv = document.createElement("div");
      childDiv.setAttribute("id", `${item}`);
      if (item === "Triangle") {
        childDiv.classList.add("triangle-shape");
      } else if (item === "Square") {
        childDiv.classList.add("square-shape");
      } else if (item === "Rectangle") {
        childDiv.classList.add("rectangle-shape");
      } else if (item === "Rhombus") {
        childDiv.classList.add("rhombus-shape");
      }

      popUpDiv.appendChild(childDiv);
    }
  }
  popUpDiv.style.display = "block";

  document.body.appendChild(popUpDiv);
}
