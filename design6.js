
window.onscroll = () =>
{
    if (window.scrollY > 40)
    {
        document.querySelector('.navbar').classList.add('sticky-top');
    } else
    {
        document.querySelector('.navbar').classList.remove('sticky-top');

    }
};
let bar = document.querySelector(`.fa-bars`);
let xmark = document.querySelector(`.xmark`);
let links = document.querySelector(`.navbar-links-a`);
const navlinks = document.querySelectorAll(`.navbar-links-a`);

function show ()
{
    links.classList.add(`toggle-nav`);
    bar.classList.add(`d-none`);
    xmark.classList.add(`d-block`);

}
show();

function hide ()
{
    links.classList.remove(`toggle-nav`);
    bar.classList.remove(`d-none`);
    xmark.classList.remove(`d-block`);

}
hide();
bar.addEventListener(`click`, show);


xmark.addEventListener(`click`, hide);

navlinks.forEach(nav =>
{
    nav.addEventListener(`click`, () =>
    {
        hide();
    });
});
document.addEventListener(`click`, (e) =>
{
    if (!links.contains(e.target) && !xmark.contains(e.target) && !bar.contains(e.target)) {
        hide()
    }
})

window.addEventListener(`scroll`, () =>
{
    let serviescards = document.querySelectorAll(`.service-card`);
    serviescards.forEach(card =>
    {
        if (window.scrollY >= (card.offsetTop - 500))
        {
            card.classList.add(`show-card`);
        } else if (window.scrollY <= (card.offsetTop - 200))
        {
            card.classList.remove(`show-card`);

        }
    });
    let contact = document.querySelector(`.contact`);
    if (window.scrollY >= (contact.offsetTop - 200))
    {
        document.querySelector(`.contact-container`).classList.add(`show-card`);
    } else if (window.scrollY <= (contact.offsetTop - 100))
    {
        document.querySelector(`.contact-container`).classList.remove(`show-card`);
    }
    let teamcontainer = document.querySelector(`.team-container`);
    const teamCARDS = document.querySelectorAll(`.team-container .card`);
    if (window.scrollY >= (teamcontainer.offsetTop - 200))
    {
        teamCARDS.forEach(card =>
        {
            card.classList.add(`f-opacity`);
        });
    } else if (window.scrollY <= (teamcontainer.offsetTop - 100))
    {
        teamCARDS.forEach(card =>
        {
            card.classList.remove(`f-opacity`);
        });
    }
    // let aboutcards = document.querySelectorAll(`.about-card`);
    const aboutimgs = document.querySelectorAll(`.about-img`);
    aboutimgs.forEach(img =>
    {
        if (window.scrollY >= (img.offsetTop + 350))
        {
            img.classList.add(`show-card`);

        } else if (window.scrollY <= (img.offsetTop + 300))
        {
            img.classList.remove(`show-card`);
        }
    });
    let sections = document.querySelectorAll(`.section`);
    let navli = document.querySelectorAll(`.nav-link`);
    sections.forEach(sec =>
    {
        let stop = window.scrollY;
        let offset = sec.offsetTop;
        let id = sec.getAttribute(`id`);
        if (stop >= (offset - 100))
        {
            cuurentsection = id;
        }
    });
    navli.forEach(li =>
    {
        if (li.href.includes(cuurentsection))
        {
            document.querySelector(`.active`).classList.remove(`active`);
            li.classList.add(`active`);
        }
    });

})

