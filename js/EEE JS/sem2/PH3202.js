// todo ShowVideo Funciton 

function showVideo(unitId) {
  const videoText_u509 = document.getElementById(`video-text_u${unitId}`);
  console.log(videoText_u509);
  // todo  auto performypiutube search 
  const linkContainer = document.querySelector('.link-container');
  // console.log(linkContainer);
  const topic = videoText_u509.textContent;
  // console.log(topic);
  linkContainer.outerHTML = 
  `<div class="link-container-01">
  <a href="https://www.youtube.com/results?search_query=${topic} Tamil"><i class="fa-brands fa-youtube fa-fade"
          style="color: #e01b24;"></i>For Tamil</a>
  <a href="https://www.youtube.com/results?search_query=${topic} English"><i class="fa-brands fa-youtube fa-fade"
          style="color: #e01b24;"></i>For English</a>
  </div>
  <p style="color:black;">Scroll Last to Download PDF<a href="#pdf"><i class="fa-solid fa-file-pdf"
          id="pdf"></i></a>
  </p>`;

  // todo end youtube search
  const unit_div = document.getElementById('unit-div');
  const videoIframeContainer_u509 = document.getElementById(`video-iframe-container_u${unitId}`);
  videoText_u509.addEventListener("click", function () {
      if (videoIframeContainer_u509.style.display === "none") {
          videoIframeContainer_u509.style.display = "block";
          unit_div.classList.add("unit-div-2");
          videoIframeContainer_u509.classList.remove("hoverback");
      } else {
          unit_div.classList.remove("unit-div-2");
          videoIframeContainer_u509.classList.add("hoverback");
          setTimeout(function () {
              videoIframeContainer_u509.style.display = "none";
          }, 1000)
      }
  });
};


// todo Function for loop the unit

function loopUnit(unit_count, Topics_count) {
  // console.log(typeof(unit_count),typeof(Topics_count));
  for (let i = 1; i <= Topics_count; i++) {
      i <= 9 ? showVideo(unit_count + '0' + i) : showVideo(unit_count + '' + i);
  }
};

//   ?    Unit Loop Function Call 
loopUnit(1, 14);
loopUnit(2, 17);
loopUnit(3, 12);
loopUnit(4, 15);
loopUnit(5, 16);


