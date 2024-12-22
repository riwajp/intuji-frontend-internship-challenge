function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up-animation--animate");
      // Optional: Unobserve the element to trigger the animation only once
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0.6,
});

document
  .querySelectorAll(
    ".slide-up-animation, .slide-up-animation--second, .slide-up-animation--third"
  )
  .forEach((element) => {
    observer.observe(element);
  });
