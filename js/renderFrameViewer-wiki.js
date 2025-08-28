
$(window).load($(".fd-modal").toArray().forEach((modal, i) => {
    modal = $(modal);
    let videoContainer = $(`<div class="frameData"></div>`);
    let url1 = modal.text().split("&&")[0].trim();
    let url2 = modal.text().split("&&")[1].trim();
    let currentFrame = url1.length > 2 ? url1.split("?f=").pop().trim() : 0;
    let video1 = $(`<video class="noHitboxes bottom" preload="none" playsinline webkit-playsinline muted loop></video>`);
    let video2 = $(`<video class="yesHitboxes top" preload="none" playsinline webkit-playsinline muted loop></video>`);
    let source1 = $(`<source src="${url1}">Your browser does not support the video tag.</source>`);
    let source2 = $(`<source src="${url2}">Your browser does not support the video tag.</source>`);
    let controlsContainer = $( `<div class=""></div>` );
  
    let iconSize = (size) => `${size || 4}rem`;
    let iconBackwards = (size = 16) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg>`);
    let iconForwards = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>`);
    let iconToggleOff = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"><path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/></svg>`);
    let iconToggleOn = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"><path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/></svg>`);
    let iconExpand = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/></svg>`);
    let iconPlay = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`);
    let iconPause = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>`);
    let iconInfo = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/></svg>`);
    // let iconDownload = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg>`)

    let backwards = $( `<button class="fd-control-button move backward"></button>` ).append(iconBackwards(iconSize()));
    let forwards = $( `<button class="fd-control-button move forward"></button>` ).append(iconForwards(iconSize()));
    let toggleIcons = $( `<div class=""></div>`);
    let hbOff = $(`<button class="fd-control-button toggle hitboxes off hide"></button>`).append(iconToggleOff(iconSize()));
    let hbOn = $(`<button class="fd-control-button toggle hitboxes on show"></button>`).append(iconToggleOn(iconSize()));
    let toggleModal = $(`<button class="fd-control-button toggle"></button>`).append(iconExpand(iconSize()));
  
    let playButton = $(`<button class="fd-control-button show"></button>`).append(iconPlay(iconSize()));
    let pauseButton = $(`<button class="fd-control-button hide"></button>`).append(iconPause(iconSize()));
    let infoButton = $(`<button class="fd-control-button info"></button>`).append(iconInfo(iconSize()));
  
    // let downloadContainer = $(`<div class="download-container show-flex"></div>`)
    let infoContainer = $(`<div class="info-container"></div>`)
    let infoRow = $(`<div class="info-container-row"></div>`)
    let infoText = (text) => $(`<p font-size=1rem;>${text}</p>`);
  
    // downloadContainer.append(iconDownload(iconSize()));

    infoContainer.append(infoRow.clone().append(iconPlay(iconSize(2))).append(infoText("Play video.")));
    infoContainer.append(infoRow.clone().append(iconPause(iconSize(2))).append(infoText("Pause video.")));
    infoContainer.append(infoRow.clone().append(iconBackwards(iconSize(2))).append(infoText("Move the player backwards by 1 frame.")));
    infoContainer.append(infoRow.clone().append(iconForwards(iconSize(2))).append(infoText("Move the player forwards by 1 frame.")));
    infoContainer.append(infoRow.clone().append(iconToggleOff(iconSize(2))).append(infoText("Toggle hitboxes on/off.")));
    infoContainer.append(infoRow.clone().append(iconExpand(iconSize(2))).append(infoText("Toggle pop-out modal.")));
    infoContainer.append(infoRow.clone().append(iconInfo(iconSize(2))).append(infoText("Toggle info view (this).")));
  
    modal.text("");
    controlsContainer.addClass("fd-controls-direction");
    toggleIcons.addClass("fd-controls-toggle").append(infoButton).append(hbOn).append(hbOff).append(toggleModal);
    video1.append(source1);
    video2.append(source2);
    infoContainer.append(infoRow.clone());
    videoContainer.append(toggleIcons).append(video1).append(video2).append(infoContainer).append(controlsContainer)
    // .append(downloadContainer);
    controlsContainer.append(backwards).append(playButton).append(pauseButton).append(forwards);
    modal.append(videoContainer);
  
    var roundDownToNearestFrame = (time) => Math.floor(time/0.017)*0.017;
    var roundUpToNearestFrame = (time) => Math.ceil(time/0.017)*0.017;
    var oneFrameLength = 0.017;
    infoButton.on('click', () => { infoContainer.hasClass("top") ? fvLowerElement(infoContainer) : fvRaiseElement(infoContainer)});
    const fvRaiseElement = (el) => { el.removeClass("bottom").addClass("top") };
    const fvLowerElement = (el) => { el.removeClass("top").addClass("bottom") };
    const fvToggleTopBottom = (el) => { el.hasClass("top") ? fvLowerElement(el) : fvRaiseElement(el) }
    [hbOn, hbOff].forEach( el => el.on('click', () => { 
      [hbOn, hbOff].forEach(el => fvToggleShow(el)); 
      [video1, video2].forEach(el => fvToggleTopBottom(el))
    }));
  
    playButton.on('click', () => {[video1, video2].forEach(el => el[0].play())});
    pauseButton.on('click', () => {
        let newTimestamp = Math.floor(video1[0].currentTime/0.017)*0.017;
        video1[0].pause(); 
        video2[0].pause();
        requestAnimationFrame(()=>{
            video1[0].currentTime=newTimestamp;
            video2[0].currentTime=newTimestamp;
        })
    });
  
    [playButton, pauseButton].forEach( el => el.on('click', () => { 
      [playButton, pauseButton].forEach(el => fvToggleShow(el)); 
    }));
  
    const fvExpandElement = (inline) => {inline.removeClass("inline").addClass("expanded");}
    const fvInlineElement = (expanded) => {expanded.removeClass("expanded").addClass("inline");}
    toggleModal.on('click', () => {modal.hasClass("expanded") ? fvInlineElement(modal) : fvExpandElement(modal)});
  
    const fvHideElement = (showing) => {showing.removeClass("show").addClass("hide");}
    const fvShowElement = (hiding) => {hiding.removeClass("hide").addClass("show");}
    const fvToggleShow = (el) => { el.hasClass("show") ? fvHideElement(el) : fvShowElement(el) }
    
    const hitboxTab = modal.parent().parent().parent().parent().$("#tabber-Hitboxes_2-label");
    [hitboxTab].forEach( el => el.on('click', () => { 
      video1[0].load();
      video2[0].load();
    }));
    // fdModal.parentElement.parentElement.parentElement.parentElement.querySelector("#tabber-Hitboxes-label")

    [video1, video2].forEach( el => el.on('canplaythrough', () => { 
        el[0].load();
        el[0].play(); 
        el[0].currentTime = 0+(currentFrame*oneFrameLength); 
        el[0].pause(); 
        el.off('canplaythrough');
    }));


    // [video1, video2].forEach( el => el.on('error', (event) => {console.log(`VIDEO ERROR: ${JSON.stringify(event)}`)}));
    backwards.on('click', (e) => { 
      let nextFrame = (roundUpToNearestFrame(video1[0].currentTime - oneFrameLength));
      [video1, video2].forEach(el => { el[0].currentTime = ( nextFrame < 0 ? video1[0].duration : nextFrame) })
    });

    forwards.on('click', (e) => { 
      let nextFrame = roundUpToNearestFrame(video1[0].currentTime + oneFrameLength);
      [video1, video2].forEach(el => { el[0].currentTime = ( nextFrame > video1[0].duration ? 0 : nextFrame) });
    });
  }));
