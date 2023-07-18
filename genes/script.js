new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage','finalPage'],
    //options here
    navigation: true,
    autoScrolling:true,
    scrollHorizontally: true,
    slidesNavigation: true,

    // design
    controlArrows: false,
    // controlArrowsHTML: [
    //     '<div class="fp-arrow"></div>', 
    //     '<div class="fp-arrow"></div>'
    // ],
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '1em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    
});

