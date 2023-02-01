// Creating variables to bring in boxes and adding event listeners to the window
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// Creating function that checks trigger point for boxes to do css animation
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
