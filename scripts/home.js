

document.addEventListener('DOMContentLoaded', () => {
    const closeSideSubscribe = document.getElementById('closeSideSubscribe');
    const openSideSubscribe = document.getElementById('openSideMenu');
    const sideSubscribe = document.getElementById('subscribeContainer');

    closeSideSubscribe.addEventListener('click', function () {
        sideSubscribe.style.display = 'none'
    });
    openSideSubscribe.addEventListener('click', function () {
        sideSubscribe.style.display = 'block'
    });




    //SCROLL TO TOP
    const arrowUpBtn = document.getElementById('arrowUpContainer');
    const logoContainer = document.getElementById('logoContainer');
    arrowUpBtn.addEventListener('click', () => {
        window.scrollTo;
        logoContainer.scrollIntoView({ behavior: 'smooth' })

    });




    //Hide everything until they are fully loaded and then show them
    window.addEventListener('load', () => {
        const loadContainer = document.getElementById('loadContainer')
        document.body.style.display = 'hidden';
        loadContainer.style.display = 'block'

        setTimeout(() => {
            document.body.style.display = 'block';
            loadContainer.style.display = 'none'
        }, 3000)
    })


    //VIDEO
    const playVideoBtn = document.getElementById('PlayVideoBtn');
    const futureVideo = document.getElementById('futureVideo');
    playVideoBtn.addEventListener('click', function () {

        futureVideo.style.display = 'block'

        if (futureVideo.style.display === 'block') {
            playVideoBtn.style.display = 'none'
        }
        else {
            playVideoBtn.style.display = 'block'
        }

    })



    //FREQUENTLY ASKED QUESTIONS

    const quiz1Ans = document.getElementById('quiz1Ans');
    const quiz1Paragraph = document.getElementById('quiz1Paragraph');

    quiz1Ans.addEventListener('click', () => {

        if (quiz1Paragraph.style.display === 'block') {
            quiz1Paragraph.style.display = 'none'
        }
        else {
            quiz1Paragraph.style.display = 'block'
        }
    })


    //quiz2
    const quiz2Ans = document.getElementById('quiz2Ans');
    const quiz2Paragraph = document.getElementById('quiz2Paragraph');

    quiz2Ans.addEventListener('click', () => {

        if (quiz2Paragraph.style.display === 'block') {
            quiz2Paragraph.style.display = 'none'
        }
        else {
            quiz2Paragraph.style.display = 'block'
        }
    });

    //quiz3
    const quiz3Ans = document.getElementById('quiz3Ans');
    const quiz3Paragraph = document.getElementById('quiz3Paragraph');

    quiz3Ans.addEventListener('click', () => {

        if (quiz3Paragraph.style.display === 'block') {
            quiz3Paragraph.style.display = 'none'
        }
        else {
            quiz3Paragraph.style.display = 'block'
        }
    })

    //quiz4

    const quiz4Ans = document.getElementById('quiz4Ans');
    const quiz4Paragraph = document.getElementById('quiz4Paragraph');

    quiz4Ans.addEventListener('click', () => {

        if (quiz4Paragraph.style.display === 'block') {
            quiz4Paragraph.style.display = 'none'
        }
        else {
            quiz4Paragraph.style.display = 'block'
        }
    })

    //quiz5
    const quiz5Ans = document.getElementById('quiz5Ans');
    const quiz5Paragraph = document.getElementById('quiz5Paragraph');

    quiz5Ans.addEventListener('click', () => {

        if (quiz5Paragraph.style.display === 'block') {
            quiz5Paragraph.style.display = 'none'
        }
        else {
            quiz5Paragraph.style.display = 'block'
        }
    })

    //SIDE MENU
    const asideMenu = document.getElementById('asideMenu');
    const smallSideMenu = document.getElementById('smallSideMenu');
    smallSideMenu.addEventListener('click', function () {
        if (asideMenu.style.display === 'flex') {
            asideMenu.style.display = 'none'
            smallSideMenu.style.borderColor = 'white'
        }
        else {
            asideMenu.style.display = 'flex'
            smallSideMenu.style.borderColor = 'blue'
        }
    })



    //CURSOR
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        cursor.style.left = x + "px";
        cursor.style.top = y + "px"
    })

    //reload

    const refresh = document.getElementById('refresh')
    refresh.addEventListener('click', function () {
        location.reload()
    });


    //Image slider
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageSlider = document.querySelector('.portfolio-image-container');


    imageSlider.addEventListener('wheel', (e) => {
        e.preventDefault();
        imageSlider.scrollLeft += e.deltaX
    })

    nextBtn.addEventListener('click', () => {
        imageSlider.style.scrollBehavior = 'smooth'
        imageSlider.scrollLeft += 350
    })

    backBtn.addEventListener('click', () => {
        imageSlider.style.scrollBehavior = 'smooth'
        imageSlider.scrollLeft -= 350
    })


    //PLAYSTORE LINK
    const memepalPlaystoreLinkBtn = document.getElementById('MemepalPlaystoreLink');
    const pickupPlaystoreLinkBtn = document.getElementById('pickupPlaystoreLink');

    memepalPlaystoreLinkBtn.addEventListener('click', function () {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.grey.memepal'
    });

    pickupPlaystoreLinkBtn.addEventListener('click', function () {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.wid.pickup'
    })


    //learnmore
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        window.location.href = 'about.html'
    });


    //HANDLING ONLINE EVENT 

    function handleOffline() {
        alert("You are currently offline. Please check your network connection.");
    }


    function handleOnline() {
        alert("You are back online.");
    }


    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);


    if (!navigator.onLine) {
        handleOffline();
    }














})