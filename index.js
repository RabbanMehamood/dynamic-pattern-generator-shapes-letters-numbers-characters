const dropDownValuesShape = ["Shapes", "Alphabets", "Characters", "Numbers"];

const popUpObject = [
  {
    shapes: [
      "triangle",
      "inverted-triangle",
      "left-triangle",
      "right-triangle",
      "half-triangle",
      "full-circle",
      "half-circle",
      "reverse-half-circle",
      "right-half-circle",
      "left-half-circle",
      "quarter-circle-1st",
      "quarter-circle-2nd",
      "quarter-circle-3rd",
      "quarter-circle-4th",
      "square",
      "hollow-square",
      "rotated-square",
      "rhombus",
    ],
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
      "Triangle(Pyramid Pattern)",
      "Left Angle Triangle",
      "Right Angle Triangle",
      "Inverted Triangle(Mirror Pyramind Pattern)",
      "Inverted Right Angle Triangle",
      "Inverted Left Angle Triangle",
      "Hollow Pyramid Pattern",
      "Hollow Right Angle Triangle",
      "Hollow Left Angle Triangle",
      "Hollow Inverted Pyramid",
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

  if (document.querySelector(".shape-pattern-select")) {
    document.querySelector(".shape-pattern-select").remove();
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
      childDiv.classList.add("child-div", "pad-to");
      popUpDivContent.appendChild(childDiv);
    }
  } else if (userValue === "shapes") {
    for (let item of popUpList) {
      let childDiv = document.createElement("div");
      childDiv.setAttribute("id", `${item}`);
      childDiv.setAttribute("value", `${item}`);
      if (item === "triangle") {
        childDiv.classList.add("triangle-shape");
      } else if (item === "inverted-triangle") {
        childDiv.classList.add("inverted-triangle-shape");
      } else if (item === "left-triangle") {
        childDiv.classList.add("left-triangle-shape");
      } else if (item === "right-triangle") {
        childDiv.classList.add("right-triangle-shape");
      } else if (item === "half-triangle") {
        childDiv.classList.add("half-triangle-shape");
      } else if (item === "full-circle") {
        childDiv.classList.add("full-circle-shape");
      } else if (item === "half-circle") {
        childDiv.classList.add("half-circle-shape");
      } else if (item === "reverse-half-circle") {
        childDiv.classList.add("reverse-half-circle-shape");
      } else if (item === "right-half-circle") {
        childDiv.classList.add("right-half-circle-shape");
      } else if (item === "left-half-circle") {
        childDiv.classList.add("left-half-circle-shape");
      } else if (item === "quarter-circle-1st") {
        childDiv.classList.add("quarter-circle-1st-shape");
      } else if (item === "quarter-circle-2nd") {
        childDiv.classList.add("quarter-circle-2nd-shape");
      } else if (item === "quarter-circle-3rd") {
        childDiv.classList.add("quarter-circle-3rd-shape");
      } else if (item === "quarter-circle-4th") {
        childDiv.classList.add("quarter-circle-4th-shape");
      } else if (item === "square") {
        childDiv.classList.add("square-shape");
      } else if (item === "hollow-square") {
        childDiv.classList.add("hollow-square-shape");
      } else if (item === "rotated-square") {
        childDiv.classList.add("rotated-square-shape");
      } else if (item === "rhombus") {
        childDiv.classList.add("rhombus-shape");
      }
      childDiv.classList.add("child-div");
      popUpDivContent.appendChild(childDiv);
    }
  }

  // imp code down here , used concept Event Delegation
  popUpDiv.appendChild(popUpDivContent);
  popUpDivContent.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target && event.target.classList.contains("child-div")) {
      let value = event.target.getAttribute("value");
      console.log(value);
      userChoseValue["shapeContent"] = value;
    }
    popUpDiv.style.display = "none";
  });

  popUpDiv.style.display = "block";
  popUpDiv.addEventListener("click", () => {
    popUpDiv.style.display = "none";
  });

  document.body.appendChild(popUpDiv);
}

selectShapeDropDown.addEventListener("change", (event) => {
  let userSelectedValue = event.target.value;

  userChoseValue = {};

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
      userChoseValue["number"] = userInputNumberEl.value;
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
      renderPatternInDiv(userChoseValue);
    });
    dropDownsDiv.appendChild(submitButton);
  }
}

function renderPatternInDiv(userChoseValue) {
  let { number, shape, shapeContent, shapePattern } = userChoseValue;
  console.log(number, shape, shapeContent, shapePattern);
  if (shapePattern === "Triangle(Pyramid Pattern)") {
    renderTrianglePattern(number, shapeContent);
  } else if (shapePattern == "Left Angle Triangle") {
    renderLeftAngleTriangle(number, shapeContent);
  } else if (shapePattern === "Filled Square") {
    renderSquarePattern(number, shapeContent);
  } else if (shapePattern === "Right Angle Triangle") {
    renderRightAngleTriangle(number, shapeContent);
  } else if (shapePattern == "Inverted Triangle(Mirror Pyramind Pattern)") {
    renderMirrorPyramid(number, shapeContent);
  } else if (shapePattern === "Inverted Left Angle Triangle") {
    renderInvertedLeftAngleTriangle(number, shapeContent);
  } else if (shapePattern === "Inverted Right Angle Triangle") {
    renderInvertedRightAngleTriangle(number, shapeContent);
  } else if (shapePattern === "Hollow Square") {
    renderHollowSquare(number, shapeContent);
  } else if (shapePattern === "Filled Diamond") {
    renderFilledDiamond(number, shapeContent);
  }
}

function renderTrianglePattern(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.style.flexWrap = "";
  patternContainer.style.alignContent = "";
  patternContainer.style.justifyContent = "";
  patternContainer.style.alignItems = "";
  patternContainer.innerHTML = "";
  if (shapeContent.length === 1) {
    for (let i = 1; i <= parseInt(number); i++) {
      let lineDiv = document.createElement("div");
      lineDiv.style.display = "flex";

      for (let j = 1; j <= i; j++) {
        let contentDiv = document.createElement("div");
        contentDiv.style.padding = "2px 2px";
        contentDiv.textContent = shapeContent;
        lineDiv.appendChild(contentDiv);
      }
      patternContainer.appendChild(lineDiv);
    }
  } else {
    for (let i = 1; i <= parseInt(number); i++) {
      let lineDiv = document.createElement("div");
      lineDiv.style.display = "flex";
      for (let j = 1; j <= i; j++) {
        let contentDiv = document.createElement("div");
        contentDiv.classList.add(shapeContent + "-shape");
        lineDiv.appendChild(contentDiv);
      }
      patternContainer.appendChild(lineDiv);
    }
  }
}

function renderLeftAngleTriangle(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";

  for (let i = 1; i <= parseInt(number); i++) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";
    for (let j = 1; j <= i; j++) {
      let contentDiv = document.createElement("div");
      contentDiv.style.padding = "4px";
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);
    patternContainer.style.flexWrap = "wrap";
    patternContainer.style.alignContent = "center";
    patternContainer.style.justifyContent = "center";
    patternContainer.style.alignItems = "flex-start";
  }
}

function renderSquarePattern(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";

  for (let i = 1; i <= number; i++) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";
    for (let j = 1; j <= number; j++) {
      let contentDiv = document.createElement("div");
      contentDiv.style.padding = "4px";
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);
  }
}

function renderRightAngleTriangle(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";
  for (let i = 1; i <= parseInt(number); i++) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";

    for (let j = 1; j <= parseInt(number); j++) {
      let contentDiv = document.createElement("div");
      contentDiv.style.padding = "2px";
      if (j <= number - i) {
        if (shapeContent.length === 1) {
          contentDiv.textContent = shapeContent;
          contentDiv.style.color = "#0000ff00";
        } else {
          contentDiv.classList.add(shapeContent + "-shape");
          contentDiv.style.borderColor = "#0000ff00";
          contentDiv.style.background = "#0000ff00";
        }
      } else {
        if (shapeContent.length === 1) {
          contentDiv.textContent = shapeContent;
        } else {
          contentDiv.classList.add(shapeContent + "-shape");
        }
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);
  }
}

function renderMirrorPyramid(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";
  for (let i = number; i >= 1; i--) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";
    for (let j = 1; j <= number - i; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = " ";
        contentDiv.style.color = "#0000ff00";
      } else {
        contentDiv.textContent = " ";
      }
      lineDiv.appendChild(contentDiv);
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);
    patternContainer.style.alignItems = "";
  }
}

function renderInvertedLeftAngleTriangle(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";
  for (let i = number; i >= 1; i--) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";
    for (let j = 1; j <= number - i; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = " ";
        contentDiv.style.color = "#0000ff00";
      } else {
        contentDiv.textContent = " ";
      }
      lineDiv.appendChild(contentDiv);
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);

    patternContainer.style.alignItems = "flex-start";
    patternContainer.style.flexWrap = "wrap";
    patternContainer.style.placeContent = "center";
  }
}

function renderInvertedRightAngleTriangle(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";
  for (let i = number; i >= 1; i--) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";
    for (let j = 1; j <= number - i; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = " ";
        contentDiv.style.color = "#0000ff00";
      } else {
        contentDiv.textContent = " ";
      }
      lineDiv.appendChild(contentDiv);
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);
    patternContainer.style.alignItems = "flex-end";
    patternContainer.style.flexWrap = "wrap";
    patternContainer.style.placeContent = "center";
  }
}

function renderHollowSquare(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";
  number = parseInt(number);
  for (let i = 1; i <= number; i++) {
    let lineDiv = document.createElement("div");
    lineDiv.style.display = "flex";
    for (let j = 1; j <= number; j++) {
      let contentDiv = document.createElement("div");
      if (i === 1 || i === number || j === 1 || j === number) {
        if (shapeContent.length === 1) {
          contentDiv.textContent = shapeContent;
        } else {
          contentDiv.classList.add(shapeContent + "-shape");
        }
      } else {
        if (shapeContent.length === 1) {
          contentDiv.textContent = shapeContent;
          contentDiv.style.color = "#0000ff00";
        } else {
          contentDiv.classList.add(shapeContent + "-shape");
          contentDiv.style.borderColor = "#0000ff00";
          contentDiv.style.background = "#0000ff00";
        }
      }
      lineDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(lineDiv);
  }
}

function renderFilledDiamond(number, shapeContent) {
  let patternContainer = document.getElementById("patternContainer");
  patternContainer.innerHTML = "";
  number = parseInt(number);

  // First for loop for upper pyramid
  for (let i = 1; i <= number; i++) {
    let levelDiv = document.createElement("div");
    levelDiv.style.display = "flex";
    for (let j = 1; j <= number - i; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
        contentDiv.style.color = "#0000ff00";
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
        contentDiv.style.borderColor = "#0000ff00";
        contentDiv.style.background = "#0000ff00";
      }
      levelDiv.appendChild(contentDiv);
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      levelDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(levelDiv);
  }

  // second for loop for the lower inverted pyramid
  for (let i = number - 1; i >= 1; i--) {
    let levelDiv = document.createElement("div");
    for (let j = 1; j <= number - i; j++) {
      let contentDiv = document.createElement("div");
      levelDiv.style.display = "flex";
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
        contentDiv.style.color = "#0000ff00";
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
        contentDiv.style.borderColor = "#0000ff00";
        contentDiv.style.background = "#0000ff00";
      }
      levelDiv.appendChild(contentDiv);
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      let contentDiv = document.createElement("div");
      if (shapeContent.length === 1) {
        contentDiv.textContent = shapeContent;
      } else {
        contentDiv.classList.add(shapeContent + "-shape");
      }
      levelDiv.appendChild(contentDiv);
    }
    patternContainer.appendChild(levelDiv);
  }
}
