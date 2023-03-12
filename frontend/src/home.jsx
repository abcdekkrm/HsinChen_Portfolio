const home = document.getElementById("home-button");
const about = document.getElementById("about-button");
const projects = document.getElementById("projects-button");
const contact = document.getElementById("contact-button");
// let curr = home;

home.addEventListener('click', ()=> {
    // document.getElementById('home-page').style.display = 'block';
    document.getElementById('home-line').style.display = 'block';
    // home.style.color = '#1a40eb';
    // curr.style.color = '#7a7a7b';
    // curr = home;
    // document.getElementById('about-page').style.display = 'none';
    // document.getElementById('projects-page').style.display = 'none';
    // document.getElementById('contact-page').style.display = 'none';

    document.getElementById('about-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
    document.getElementById('home-content').scrollIntoView({behavior: 'smooth', block: 'center'});
});

// about.addEventListener('click', ()=> {
//     document.getElementById('about-page').style.display = 'block';
//     document.getElementById('about-line').style.display = 'block';

//     document.getElementById('home-page').style.display = 'none';
//     document.getElementById('projects-page').style.display = 'none';
//     document.getElementById('contact-page').style.display = 'none';

//     document.getElementById('home-line').style.display = 'none';
//     document.getElementById('projects-line').style.display = 'none';
//     document.getElementById('contact-line').style.display = 'none';
// });

about.addEventListener('click', ()=> {
    // var element = document.getElementById("div");
    // about.style.color = '#1a40eb';
    // curr.style.color = '#7a7a7b';
    // curr = about;

    document.getElementById('about-line').style.display = 'block';
    document.getElementById('about-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
});

// $("button").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".second").offset().top},
//         'slow');
// });

projects.addEventListener('click', ()=> {
    // projects.style.color = '#1a40eb';
    // curr.style.color = '#7a7a7b';
    // curr = projects;
    // document.getElementById('projects-page').style.display = 'block';
    document.getElementById('projects-line').style.display = 'block';
    document.getElementById('projects-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});

    // document.getElementById('home-page').style.display = 'none';
    // document.getElementById('about-page').style.display = 'none';
    // document.getElementById('contact-page').style.display = 'none';

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('about-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
});

contact.addEventListener('click', ()=> {
    // contact.style.color = '#1a40eb';
    // curr.style.color = '#7a7a7b';
    // curr = contact;
    // document.getElementById('contact-page').style.display = 'block';
    document.getElementById('contact-line').style.display = 'block';
    document.getElementById('contact-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    
    // document.getElementById('home-page').style.display = 'none';
    // document.getElementById('about-page').style.display = 'none';
    // document.getElementById('projects-page').style.display = 'none';

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('about-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
});