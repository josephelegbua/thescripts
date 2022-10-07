// expand button
(function () {
  let box = document.querySelector(".section-content__expand"),
    btn = document.querySelector(".btn--expand");

  if (btn && box) {
    btn.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        if (box.classList.contains("section-content__expand--hidden")) {
          box.classList.remove("section-content__expand--hidden");
          setTimeout(function () {
            box.classList.remove("section-content__expand--visuallyhidden");
          }, 20);
        } else {
          box.classList.add("section-content__expand--visuallyhidden");
          box.addEventListener(
            "transitionend",
            function (e) {
              box.classList.add("section-content__expand--hidden");
            },
            {
              capture: false,
              once: true,
              passive: false,
            }
          );
        }
      },
      false
    );
  }
})();

//video Vimeo
(function () {
  function findVideos() {
    let videos = document.querySelectorAll(".video-vimeo");

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    let link = video.querySelector(".video-vimeo__link");
    let media = video.querySelector(".video-vimeo__media");
    let subTitle = document.querySelector(".hero__subtitle");
    let title = document.querySelector(".hero__title");
    let desc = document.querySelector(".hero__desc");
    let form = document.querySelector(".download");
    let button = document.querySelector(".btn--hero-sales");
    let mobileButton = document.querySelector(".hero__play-button--mobile");
    let urlLink = constructURL(link.getAttribute("data-url"));

    button.addEventListener("click", (e) => {
      e.preventDefault();

      let iframe = createIframe(urlLink);

      link.remove();
      // button.remove();
      visuallyHide(button);
      video.appendChild(iframe);

      if (window.matchMedia("(min-width: 992px)").matches) {
        visuallyHide(subTitle);
        visuallyHide(title);
        visuallyHide(desc);
      }
      return false;
    });

    mobileButton.addEventListener("click", (e) => {
      e.preventDefault();

      let iframe = createIframe(urlLink);

      link.remove();
      // button.remove();
      visuallyHide(mobileButton);
      video.appendChild(iframe);

      if (window.matchMedia("(min-width: 992px)").matches) {
        visuallyHide(subTitle);
        visuallyHide(title);
        visuallyHide(desc);
      }
      return false;
    });

    link.removeAttribute("href");
    video.classList.add("video-vimeo--enabled");
  }

  function visuallyHide(item) {
    item.style.visibility = "hidden";
  }

  function createIframe(urlLink) {
    let iframe = document.createElement("iframe");

    //iframe.setAttribute('allowfullscreen', '0');
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("src", urlLink);
    iframe.classList.add("video-vimeo__media");

    return iframe;
  }

  function constructURL(url) {
    return `${url}?autoplay=1`;
  }

  findVideos();
})();
