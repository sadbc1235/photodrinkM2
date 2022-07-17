// booth switch
const upBtn = document.querySelector(".upArrow");
const upBtnText = upBtn.querySelector(".arrowName>h3");
const downBtn = document.querySelector(".downArrow");
const downBtnText = downBtn.querySelector(".arrowName>h3");
const boothBoxWrapper = document.querySelector(".boothBoxWrapper");
const boothBoxs = boothBoxWrapper.querySelectorAll(".boothBox");

upBtn.addEventListener("click", () => {

  let currentBooth = boothBoxWrapper.querySelector(".boothBox.active");
  let currentBoothIndex = parseInt(currentBooth.getAttribute("data-index"));
  let nextBoothIndex = null;

  currentBoothIndex !== boothBoxs.length-1
    ? (nextBoothIndex = currentBoothIndex+1)
    : (nextBoothIndex = 0);

  let currentBoothConceptList = currentBooth.querySelector(".conceptListBox");
  let currentBoothName = currentBooth.querySelector(".boothName");
  let currentBoothExplain = currentBooth.querySelector(".boothExplain");
  currentBoothConceptList.classList.remove("active");
  currentBoothName.classList.remove("active");
  currentBoothExplain.classList.remove("active");

  setTimeout(() => {
    currentBooth.classList.add("up");
    currentBooth.classList.remove("active");
    boothBoxs[nextBoothIndex].classList.add("down");

    setTimeout(() => {
      boothBoxs[nextBoothIndex].classList.add("active");
      boothBoxs[nextBoothIndex].classList.remove("down");
      currentBooth.classList.remove("up");

      upBtnText.innerText = boothBoxs[(nextBoothIndex === boothBoxs.length-1) ? 0 : nextBoothIndex + 1].querySelector("h2").innerText;
      downBtnText.innerText = boothBoxs[currentBoothIndex].querySelector("h2").innerText;

      setTimeout(() => {
        let nextBoothConceptList = boothBoxs[nextBoothIndex].querySelector(".conceptListBox");
        let nextBoothName = boothBoxs[nextBoothIndex].querySelector(".boothName");
        let nextBoothExplain = boothBoxs[nextBoothIndex].querySelector(".boothExplain");
        nextBoothConceptList.classList.add("active");
        nextBoothName.classList.add("active");
        nextBoothExplain.classList.add("active");
      }, 350)
    }, 290)

  }, 300)

})

downBtn.addEventListener("click", () => {

  let currentBooth = boothBoxWrapper.querySelector(".boothBox.active");
  let currentBoothIndex = parseInt(currentBooth.getAttribute("data-index"));
  let nextBoothIndex = null;

  currentBoothIndex !== 0
    ? (nextBoothIndex = currentBoothIndex-1)
    : (nextBoothIndex = boothBoxs.length-1);

  let currentBoothConceptList = currentBooth.querySelector(".conceptListBox");
  let currentBoothName = currentBooth.querySelector(".boothName");
  let currentBoothExplain = currentBooth.querySelector(".boothExplain");
  currentBoothConceptList.classList.remove("active");
  currentBoothName.classList.remove("active");
  currentBoothExplain.classList.remove("active");

  setTimeout(() => {
    currentBooth.classList.add("down");
    currentBooth.classList.remove("active");
    boothBoxs[nextBoothIndex].classList.add("up");

    setTimeout(() => {
      boothBoxs[nextBoothIndex].classList.add("active");
      boothBoxs[nextBoothIndex].classList.remove("up");
      currentBooth.classList.remove("down");

      downBtnText.innerText = boothBoxs[(nextBoothIndex === 0) ? boothBoxs.length-1 : nextBoothIndex - 1].querySelector("h2").innerText;
      upBtnText.innerText = boothBoxs[currentBoothIndex].querySelector("h2").innerText;

      setTimeout(() => {
        let nextBoothConceptList = boothBoxs[nextBoothIndex].querySelector(".conceptListBox");
        let nextBoothName = boothBoxs[nextBoothIndex].querySelector(".boothName");
        let nextBoothExplain = boothBoxs[nextBoothIndex].querySelector(".boothExplain");
        nextBoothConceptList.classList.add("active");
        nextBoothName.classList.add("active");
        nextBoothExplain.classList.add("active");
      }, 350)
    }, 290)

  }, 300)

})