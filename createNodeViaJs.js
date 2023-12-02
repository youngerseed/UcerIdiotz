
function createNodeViaJS(){
    // creating video container element
    const videoContainer = document.createElement("div");
    videoContainer.className='video-container';
    videoContainer.id='video-container';
    
    
    // creating video text
    const videoText = document.createElement("p");
    videoText.className = 'video-text';
    videoText.setAttribute('id','video-text_u101');
    console.log(videoText);
    videoText.textContent = "sample Test";
    // appending video text to videoContainer
    videoContainer.append(videoText);
    
    
    
    
    // creating videoFrame Div
    const videoFrame = document.createElement("div");
    // creating link container div
    const linkContainer = document.createElement("div");
    linkContainer.className = 'link-container';
    
    // creating itag youtube tag
    const youtubeSymbol = document.createElement("i");
    youtubeSymbol.classList.add("fa-brands", "fa-youtube", "fa-fade");
    youtubeSymbol.style.color = `#e01b24`;
    console.log(youtubeSymbol);
    // cloning the youtube node
    const youtubeCloneNode = youtubeSymbol.cloneNode(true);
    console.log(youtubeCloneNode);
    // creating itag Quesstion symbol
    const questionSymbol = document.createElement("i");
    questionSymbol.classList.add("bi", "bi-question-diamond-fill");
    questionSymbol.style.color = "blue";
    console.log(questionSymbol);
    
    // creating forTamil Link
    
    const forTamil = document.createElement("a");
    forTamil.textContent = "For Tamil";
    forTamil.setAttribute('href','youtube.com')
    forTamil.append(youtubeSymbol);
    console.log(forTamil);
    
    // creating forEnglish link
    const forEnglish = document.createElement("a");
    forEnglish.textContent = "For English";
    forEnglish.setAttribute('href','youtube.com');
    forEnglish.append(youtubeCloneNode);
    console.log(forEnglish);
    
    // creating important question link
    const importantQuestion = document.createElement("a");
    importantQuestion.textContent = "Important Question";
    importantQuestion.setAttribute('href','youtube.com');
    importantQuestion.append(questionSymbol);
    console.log(importantQuestion);


    // creating download link via code Using Examveda
    const subCode = document.title;
    const splitCode = subCode.split('|');
    const downloadBtn = units_div.querySelector('a');
    downloadBtn.setAttribute('href',`https://examveda.org/?s=${splitCode[1].replace('-','')}`)
    
    // appending link to the Link Container
    const linksArray = [forTamil, forEnglish, importantQuestion];
    const linkFragment = document.createDocumentFragment();
    
    linksArray.forEach((links) => {
      linkFragment.append(links);
      linkContainer.append(linkFragment);
    });
    console.log(linkContainer);
    
    // appending link container into video frame 
    videoFrame.append(linkContainer);
    videoFrame.classList.add('video-iframe-container','col-sm-12','col-md-12' ,'col-lg-12', 'col-xl-12', 'col-xxl-12');
    videoFrame.setAttribute('id','video-iframe-container_u101');
    console.log(videoFrame);
    videoContainer.append(videoText);
    videoContainer.append(videoFrame);
    console.log(videoContainer);
    
    // units_div.append(videoContainer);
    }
    
    
      //  adding Download Pdf Via ExamVeda 

    
    
    /*  --------------------------------------------------------------------------------- */
    
    
    //  todo funciton for create and add the topics to the respective division
    
    function createDivision(unit_color,string,unitId,count){
        
   const units_div = document.querySelector(`.${unit_color}`);

  //  adding Download Pdf Via ExamVeda 
    
    
    // creating video container element
    const videoContainer = document.createElement("div");
    videoContainer.className='video-container';
    videoContainer.id='video-container';
    
    
    // creating video text
    const videoText = document.createElement("p");
    videoText.className = 'video-text';
    videoText.setAttribute('id',`video-text_u${unitId}0${count+1}`);
    console.log(videoText);
    videoText.textContent = `${string}`;
    // appending video text to videoContainer
    videoContainer.append(videoText);
    
    
    
    
    // creating videoFrame Div
    const videoFrame = document.createElement("div");
    // creating link container div
    const linkContainer = document.createElement("div");
    linkContainer.className = 'link-container';
    
    // creating itag youtube tag
    const youtubeSymbol = document.createElement("i");
    youtubeSymbol.classList.add("fa-brands", "fa-youtube", "fa-fade");
    youtubeSymbol.style.color = `#e01b24`;
    console.log(youtubeSymbol);
    // cloning the youtube node
    const youtubeCloneNode = youtubeSymbol.cloneNode(true);
    console.log(youtubeCloneNode);
    // creating itag Quesstion symbol
    const questionSymbol = document.createElement("i");
    questionSymbol.classList.add("bi", "bi-question-diamond-fill");
    questionSymbol.style.color = "blue";
    console.log(questionSymbol);
    
    // creating forTamil Link
    
    const forTamil = document.createElement("a");
    forTamil.textContent = "For Tamil";
    forTamil.setAttribute('href',`https://www.youtube.com/results?search_query=${string} Tamil`)
    forTamil.append(youtubeSymbol);
    console.log(forTamil);
    
    // creating forEnglish link
    const forEnglish = document.createElement("a");
    forEnglish.textContent = "For English";
    forEnglish.setAttribute('href',`https://www.youtube.com/results?search_query=${string} English`);
    forEnglish.append(youtubeCloneNode);
    console.log(forEnglish);
    
    // creating important question link
    const importantQuestion = document.createElement("a");
    const papper_id = document.querySelector('.header').innerText;
    importantQuestion.textContent = "Important Question";
    importantQuestion.setAttribute('href',`https://www.youtube.com/results?search_query=${papper_id} Important Questions`);
    importantQuestion.append(questionSymbol);
    console.log(importantQuestion);

    // creating download link via code Using Examveda
    const subCode = document.title;
    const splitCode = subCode.split('|');
    const downloadBtn = units_div.querySelector('a');
    downloadBtn.setAttribute('href',`https://examveda.org/?s=${splitCode[1].replace('-','')}`)
    
    // appending link to the Link Container
    const linksArray = [forTamil, forEnglish, importantQuestion];
    const linkFragment = document.createDocumentFragment();
    
    linksArray.forEach((links) => {
      linkFragment.append(links);
      linkContainer.append(linkFragment);
    });
    console.log(linkContainer);
    
    // appending link container into video frame 
    videoFrame.append(linkContainer);
    videoFrame.classList.add('video-iframe-container','col-sm-12','col-md-12' ,'col-lg-12', 'col-xl-12', 'col-xxl-12');
    videoFrame.setAttribute('id',`video-iframe-container_u${unitId}0${count+1}`);
    console.log(videoFrame);
    videoContainer.append(videoText);
    videoContainer.append(videoFrame);
    console.log(videoContainer);
    
    units_div.append(videoContainer);
    
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
    
        // todo addind the hover effect and onclick event
    
        const unit_div = document.getElementById('unit-div');
        const video_container =document.getElementById('video-container');
       
        const videoIframeContainer_u509 = document.getElementById(`video-iframe-container_u${unitId}`);
        videoText_u509.addEventListener('click', (event) => {
            event.preventDefault();
            if (videoIframeContainer_u509.style.display === "none") {
                videoIframeContainer_u509.style.display = "block";
                unit_div.classList.add("unit-div-2");
                video_container.style.textAlign = 'center';
                videoIframeContainer_u509.classList.remove("hoverback");
            } else {
                unit_div.classList.remove("unit-div-2");
                videoIframeContainer_u509.classList.add("hoverback");
                setTimeout( ()=> {
                    videoIframeContainer_u509.style.display = "none";
                }, 1000)
            };
        },);
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
    
    
    let unit_text1 = ` Unit Topics Here - topic s2 `;
    
    let unit_text2 = ` Unit Topics Here  - topics 2`;
    
    let unit_text3 = ` Unit Topics Here - topics 2`;
    
    let unit_text4 = ` Unit Topics Here - topics 2`;
    
    let unit_text5 = ` Unit Topics Here - topics 2`;
    
    
    
    
    // todo Cont Change the Fucniton Call 
    Unit_loop_function(unit_text1 , unit_01_color , 1);
    Unit_loop_function(unit_text2 , unit_02_color , 2);
    Unit_loop_function(unit_text3 , unit_03_color , 3);
    Unit_loop_function(unit_text4 , unit_04_color , 4);
    Unit_loop_function(unit_text5 , unit_05_color , 5);
    
    
    // ****************************  End Of the Funciton call *****************
    
     
      
    
    
    
    
    
    
    
    
     
      
    
    
    
    
    
    
    
     
      
    
    
    
    
    
    