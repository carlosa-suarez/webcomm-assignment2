const content = [
    {
        id: 'intro',
        title: "Hey, I'm Rocky and this is my story",
        paragraph: "I want to show you my progress along my dog life",
        image: 'images/family.jpg',
        video: '',
        class: 'intro'
    },
    {
        id: 'baby',
        title: "This is me, when they adopted me",
        paragraph: "I was just 2 months when I met the sunlight at the beach",
        image: 'images/baby.jpg',
        video: '',
        class: 'baby'
    },
    {
        id: 'young',
        title: "I grew up big and strong",
        paragraph: "I didn't stop eating things I loved, my family always pampered me",
        image: 'images/young.jpg',
        video: '',
        class: 'young'
    },
    {
        id: 'adult',
        title: "Different life",
        paragraph: "My family could not take me to Canada, now I live with another family with other brothers",
        image: '',
        video: 'videos/park.mp4',
        class: 'adult'
    },
]

menu.addEventListener('click', setInfo);

function setInfo(e) {
    const id = e.srcElement.textContent;

    const stage = content.filter(x => x.id.toLowerCase() == id.toLowerCase())[0];

    content.class = stage.class;
    title.textContent = stage.title;
    description.textContent = stage.paragraph;
    picture.src = stage.image;
    video.src = stage.video;

    if (!stage.image && stage.video) {
        video.style.display = 'block';
        figure.style.display = 'none';
    } else {
        video.style.display = 'none';
        figure.style.display = 'block';
    }
}