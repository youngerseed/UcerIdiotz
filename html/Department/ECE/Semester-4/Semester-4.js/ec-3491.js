

//  todo funciton for create and add the topics to the respective division

function createDivision(unit_color,string,unitId,count){
  const units_div = document.querySelector(`.${unit_color}`);
 
   units_div.innerHTML += `
      <div class="video-container" id="video-container">
                      <p id="video-text_u${unitId}0${count+1}" class="video-text">${string}</p>
                      <!--          iframe tag -->
                      <div id="video-iframe-container_u${unitId}0${count+1}"
                          class="video-iframe-container col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                          style="display: none;">
                          <div class="link-container">
                              <a href="#"><i class="fa-brands fa-youtube fa-fade"
                                      style="color: #e01b24;"></i>For Tamil</a>
                              <a href="#"><i class="fa-brands fa-youtube fa-fade"
                                      style="color: #e01b24;"></i>For English</a>
                          </div>
                          
                      </div>
      </div>
      `;
};

// todo  funciton for loop the topics and add to html

function loopTopics(split_text,divClolor,unit_count){
  for(let count =0 ; count <split_text.length ; count++){
      createDivision(divClolor ,split_text[count],unit_count,count);
  }
};
// todo  function for seperate the text 

function Seperate_text(topics){
let split_text = [];
split_text = topics.split('-');
return split_text;
};

// todo   function for adding the papper code and title  

function Add_Papper_Code(Papper_code,semester_count,title){
const Papper_codes =document.querySelector('.header');
const semester_counts =document.querySelector('.unit');
//   changingthe title of the page
document.title = title
// changing papper code and papper name
Papper_codes.innerHTML = ` <p>${Papper_code}</p>`;
semester_counts.innerHTML = `  <i class="fa-solid fa-graduation-cap "></i>
<span>0${semester_count}</span>`; 
};

// todo ShowVideo Funciton 

function showVideo(unitId) {

  // todo unit topics automate js
  const videoText_u509 = document.getElementById(`video-text_u${unitId}`);
  console.log(videoText_u509);

  // todo  getting the papper code and name to perform search
  const papper_id = document.querySelector('.header').innerText;

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
  <a href="https://www.youtube.com/results?search_query=${papper_id} Important Questions"><i class="bi bi-question-diamond-fill
  style ="color:"blue;">
  </i>
  ImportantQuestions</a>
  </div>
 `;
  // linkContainer.classList.add('link-container');

  // todo end youtube search

  // todo addind the hover effect and onclick event

  const unit_div = document.getElementById('unit-div');
  const video_container =document.getElementById('video-container');
 
  const videoIframeContainer_u509 = document.getElementById(`video-iframe-container_u${unitId}`);
  videoText_u509.addEventListener("click", function () {
      if (videoIframeContainer_u509.style.display === "none") {
          videoIframeContainer_u509.style.display = "block";
          unit_div.classList.add("unit-div-2");
          video_container.style.textAlign = 'center';
          videoIframeContainer_u509.classList.remove("hoverback");
      } else {
          unit_div.classList.remove("unit-div-2");
          videoIframeContainer_u509.classList.add("hoverback");
          setTimeout(function () {
              videoIframeContainer_u509.style.display = "none";
          }, 1000)
      };
  });
};


// todo Function for loop the unit

function loopUnit(unit_count, Topics_count) {
  // console.log(typeof(unit_count),typeof(Topics_count));
  for (let i = 1; i <= Topics_count; i++) {
      // i <= 9 ? showVideo(unit_count + '0' + i) : showVideo(unit_count + "" + i);
     showVideo(unit_count + '0' + i); 
  }
};


function Unit_loop_function(text , unit_color ,unit_count){

  const Unit_topics =text;
  loopTopics(Seperate_text(Unit_topics),unit_color,unit_count);
  loopUnit(unit_count,Seperate_text(Unit_topics).length);

};
// **********************    End of the all functions ********************   

// todo   Unit_color List Dont Change this 

const unit_01_color = 'bd-blue';
const unit_02_color = 'bd-yellow';
const unit_03_color = 'bd-green';
const unit_04_color = 'bd-pink' ;
const unit_05_color = 'bd-orange';

// todo Unit text  Change Input text


let unit_text1 = `Review of signals and systems - Time and Frequency domain representation of signals - Principles of Amplitude Modulation Systems- DSB, SSB and VSB modulations - Angle Modulation - Representation
of FM and PM signals - Spectral characteristics of angle modulated signals - SSB Generation - Filter
and Phase Shift Methods - VSB Generation - Filter Method - Hilbert Transform - Pre-envelope &
complex envelope AM techniques - Superheterodyne Receiver.`;

let unit_text2 = `Review of probability and random process - Gaussian and white noise characteristics - Noise in amplitude modulation systems - Noise in Frequency modulation systems - Pre-emphasis and Deemphasis - Threshold effect in angle modulation -Low pass sampling  - Aliasing - Signal Reconstruction - Quantization - Uniform & non-uniform quantization - quantization noise - Nyquist criterion- Logarithmic Companding - PAM, PPM, PWM,PCM, TDM, FDM`;

let unit_text3 = `Pulse modulation Differential pulse code modulation - Delta modulation - Noise considerations in PCM - Digital Multiplexers - Channel coding theorem - Linear Block codes - Hamming codes - Cyclic codes - Convolutional codes - Viterbi Decoder`;

let unit_text4 = `Geometric Representation of signals - Generation - detection - IQ representation - PSD & BER of Coherent BPSK, BFSK, & QPSK - QAM - Carrier Synchronization - Structure of Non-coherent
Receivers Synchronization - Carrier Recovery for Digital modulation- Spectrum Analysis -
Occupied bandwidth - Adjacent channel power - EVM - Principle of DPSK`;

let unit_text5 = `Elements of Detection Theory - Optimum detection of signals in noise - Coherent communication with waveforms - Probability of Error evaluations - Baseband Pulse Transmission- Inter symbol
Interference - Optimum demodulation of digital signals over band limited channels.`;




// todo Cont Change the Fucniton Call 
Unit_loop_function(unit_text1 , unit_01_color , 1);
Unit_loop_function(unit_text2 , unit_02_color , 2);
Unit_loop_function(unit_text3 , unit_03_color , 3);
Unit_loop_function(unit_text4 , unit_04_color , 4);
Unit_loop_function(unit_text5 , unit_05_color , 5);


// ****************************  End Of the Funciton call *****************








