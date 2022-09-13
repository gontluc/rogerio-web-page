"use strict";
window.scrollTo(0, 0);
const pt = {
    "header": {
        "navbar": {
            "profile": "PERFIL",
            "specialty": "ESPECIALIDADE",
            "gallery": "GALERIA",
            "videos": "VÍDEOS",
            "testimonies": "TESTEMUNHOS"
        },
        "languageTitle": "Idioma",
        "language": "Português",
        "profession": "CIRURGIA OCULAR",
        "flag": "portugal"
    },
    "profile": {
        "profileTitle": "Perfil",
        "profileContent": "Desde 1996 participa como organizador e médico voluntário em projetos sociais de saúde ocular em parceria com organizações não governamentais como Rotary International, Lions Club, USAID, e lideranças da sociedade civil. Em 2001 inicia sua atividade como cirurgião oftalmologista na região Sul de Portugal (Alentejo e Algarve). Tem participado em reuniões, cursos, simpósios e congressos organizados pelas principais sociedades científicas e entidades que atuam na oftalmologia mundial."
    },
    "specialty": {
        "specialtyTitle": "Especialidade",
        "specialtyContent": {
            "left1": "Especialmente dedicado à <strong>cirurgia de catarata e de plástica ocular</strong>, conta com a experiência de milhares de atendimentos e cirurgias realizadas ao longo do seu percurso profissional.",
            "left2": "Mantém o hábito de acompanhar presencialmente colegas cirurgiões em <strong>Portugal</strong>, bem como em visitas a <strong>Espanha, Brasil, E.U.A e Índia</strong>, num círculo virtuoso de partilha de conhecimentos e companheirismo profissional."
        }
    },
    "gallery": {
        "galleryTitle": "Galeria"
    },
    "videos": {
        "videosTitle": "Vídeos",
        "video1": {
            "videoURL": "https://www.youtube.com/watch?v=5330S_CqbxA&t=2s",
            "videoTitle": "Cirurgia da Catarata Através dos Tempos",
            "videoDescription": "A maior inovação cirúrgica foi a criação de uma máquina capaz de..."
        },
        "video2": {
            "videoURL": "https://www.youtube.com/watch?v=zKNGKEmhcNQ",
            "videoTitle": "Cirurgia de Catarata - Testemunho da Paciente Morris",
            "videoDescription": "Morris comenta sobre a sua cirurgia e a  melhoria de visão que experimentou"
        },
        "video3": {
            "videoURL": "https://www.youtube.com/watch?v=b_mtD5sDMJU",
            "videoTitle": "Medida da pressão ocular em 1 minuto",
            "videoDescription": "Informação básica sobre a importância da medida da pressão ocular"
        },
        "videosBtn": "Ver Mais Vídeos"
    },
    "testimonies": {
        "testimoniesTitle": "Testemunhos"
    }
};
const en = {
    "header": {
        "navbar": {
            "profile": "PROFILE",
            "specialty": "SPECIALTY",
            "gallery": "GALLERY",
            "videos": "VIDEOS",
            "testimonies": "TESTIMONIES"
        },
        "languageTitle": "Language",
        "language": "English",
        "profession": "EYE SURGERY",
        "flag": "uk"
    },
    "profile": {
        "profileTitle": "Profile",
        "profileContent": "Since 1996 he has participated as an organizer and volunteer doctor in social projects for eye health in partnership with non-governmental organizations such as Rotary International, Lions Club, USAID, and leaders of civil society. In 2001 starts his activity as ophthalmologic surgeon in the southern region of Portugal (Alentejo and Algarve). He has participated in meetings, courses, symposiums and congresses organized by the main scientific societies and entities working in ophthalmology worldwide."
    },
    "specialty": {
        "specialtyTitle": "Specialty",
        "specialtyContent": {
            "left1": "Especially dedicated to <strong>cataract and ocular plastic surgery</strong>, he has the experience of thousands of consultations and surgeries performed throughout his professional career.",
            "left2": "He maintains the habit of accompanying fellow surgeons in <strong>Portugal</strong>, as well as on visits to <strong>Spain, Brazil, the USA and India</strong>, in a virtuous circle of knowledge sharing and professional companionship."
        }
    },
    "gallery": {
        "galleryTitle": "Gallery"
    },
    "videos": {
        "videosTitle": "Videos",
        "video1": {
            "videoURL": "https://www.youtube.com/watch?v=Axcn_eX4UlA",
            "videoTitle": "Cataract Surgery Through the Ages",
            "videoDescription": "The greatest surgical innovation was the creation of a machine capable of..."
        },
        "video2": {
            "videoURL": "https://www.youtube.com/watch?v=zKNGKEmhcNQ",
            "videoTitle": "Cataract Surgery - Patient Morris Testimony",
            "videoDescription": "Morris talks about her surgery and the vision improvement she's experienced"
        },
        "video3": {
            "videoURL": "https://www.youtube.com/watch?v=b_mtD5sDMJU",
            "videoTitle": "Eye pressure measurement in 1 minute",
            "videoDescription": "Basic information on the importance of measuring eye pressure"
        },
        "videosBtn": "View All Videos"
    },
    "testimonies": {
        "testimoniesTitle": "Testimonies"
    }
};
const toProfile = document.querySelector('#to-profile');
const toSpecialty = document.querySelector('#to-specialty');
const toGallery = document.querySelector('#to-gallery');
const toVideos = document.querySelector('#to-videos');
const toTestimonies = document.querySelector('#to-testimonies');
const toProfileR = document.querySelector('#to-profile-responsive');
const toSpecialtyR = document.querySelector('#to-specialty-responsive');
const toGalleryR = document.querySelector('#to-gallery-responsive');
const toVideosR = document.querySelector('#to-videos-responsive');
const toTestimoniesR = document.querySelector('#to-testimonies-responsive');
const language = document.querySelector('#the-language');
const profession = document.querySelector('#profession');
const languageTitle = document.querySelector('#language-title');
const flag = document.querySelector('#the-flag');
const languageSelector = document.querySelector('#language-selector');
const languageBox = document.querySelector('#select-language-box');
const languagePT = document.querySelector('#lang-pt');
const languageEN = document.querySelector('#lang-en');
const links = document.querySelector('#links');
const addCopy = document.querySelector('#add-copy');
const navbar = document.querySelector('#navbar-responsive');
const hamIcon = document.querySelector('#ham-icon');
const navbarContent = document.querySelector('#navbar-content');
const profileTitle = document.querySelector('#profile-title');
const profileContent = document.querySelector('#profile-content');
const specialtyTitle = document.querySelector('#specialty-title');
const specialtyLeft1 = document.querySelector('#specialty-left1');
const specialtyLeft2 = document.querySelector('#specialty-left2');
const galleryTitle = document.querySelector('#gallery-title');
const leftArrow = document.querySelector('#move-left');
const rightArrow = document.querySelector('#move-right');
let previousImg = document.querySelector('#previous-img');
let currentImg = document.querySelector('#current-img');
let followingImg = document.querySelector('#following-img');
let galleryDiv = document.querySelector('#current-img-div');
const videosTitle = document.querySelector('#videos-title');
const video1URL = document.querySelector('#video1-href');
const video1Title = document.querySelector('#video1-title');
const video1Desc = document.querySelector('#video1-description');
const video2URL = document.querySelector('#video2-href');
const video2Title = document.querySelector('#video2-title');
const video2Desc = document.querySelector('#video2-description');
const video3URL = document.querySelector('#video3-href');
const video3Title = document.querySelector('#video3-title');
const video3Desc = document.querySelector('#video3-description');
const videosBtn = document.querySelector('#videos-btn');
const testimoniesTitle = document.querySelector('#testimonies-title');
const arrowUp = document.querySelector('#arrow-up');
let previewImgs = document.querySelectorAll('.preview-img');
let data = pt;
function pushAllData() {
    function pushData(element, content) {
        if (element != undefined) {
            element.innerHTML = content;
        }
    }
    pushData(toProfile, data.header.navbar.profile);
    pushData(toSpecialty, data.header.navbar.specialty);
    pushData(toGallery, data.header.navbar.gallery);
    pushData(toVideos, data.header.navbar.videos);
    pushData(toTestimonies, data.header.navbar.testimonies);
    pushData(toProfileR, data.header.navbar.profile);
    pushData(toSpecialtyR, data.header.navbar.specialty);
    pushData(toGalleryR, data.header.navbar.gallery);
    pushData(toVideosR, data.header.navbar.videos);
    pushData(toTestimoniesR, data.header.navbar.testimonies);
    pushData(languageTitle, data.header.languageTitle);
    pushData(language, data.header.language);
    pushData(profession, data.header.profession);
    flag.src = `static/images/icons/${data.header.flag}.png`;
    pushData(profileTitle, data.profile.profileTitle);
    pushData(profileContent, data.profile.profileContent);
    pushData(specialtyTitle, data.specialty.specialtyTitle);
    pushData(specialtyLeft1, data.specialty.specialtyContent.left1);
    pushData(specialtyLeft2, data.specialty.specialtyContent.left2);
    pushData(galleryTitle, data.gallery.galleryTitle);
    pushData(videosTitle, data.videos.videosTitle);
    video1URL.href = data.videos.video1.videoURL;
    video2URL.href = data.videos.video2.videoURL;
    video3URL.href = data.videos.video3.videoURL;
    pushData(video1Title, data.videos.video1.videoTitle);
    pushData(video1Desc, data.videos.video1.videoDescription);
    pushData(video2Title, data.videos.video2.videoTitle);
    pushData(video2Desc, data.videos.video2.videoDescription);
    pushData(video3Title, data.videos.video3.videoTitle);
    pushData(video3Desc, data.videos.video3.videoDescription);
    pushData(videosBtn, data.videos.videosBtn);
    pushData(testimoniesTitle, data.testimonies.testimoniesTitle);
}
function setData() {
    if (document.documentElement.lang === "pt") {
        data = pt;
        console.log('Language set to Portuguese');
    }
    else {
        data = en;
        console.log('Language set to English');
    }
}
setData();
pushAllData();
const profile = document.querySelector('#right-profile');
toProfile === null || toProfile === void 0 ? void 0 : toProfile.addEventListener('click', () => {
    profile === null || profile === void 0 ? void 0 : profile.scrollIntoView();
});
toProfileR === null || toProfileR === void 0 ? void 0 : toProfileR.addEventListener('click', () => {
    profile === null || profile === void 0 ? void 0 : profile.scrollIntoView();
});
const specialty = document.querySelector('#specialty');
toSpecialty === null || toSpecialty === void 0 ? void 0 : toSpecialty.addEventListener('click', () => {
    specialty === null || specialty === void 0 ? void 0 : specialty.scrollIntoView();
});
toSpecialtyR === null || toSpecialtyR === void 0 ? void 0 : toSpecialtyR.addEventListener('click', () => {
    specialty === null || specialty === void 0 ? void 0 : specialty.scrollIntoView();
});
const gallery = document.querySelector('#gallery');
toGallery === null || toGallery === void 0 ? void 0 : toGallery.addEventListener('click', () => {
    gallery === null || gallery === void 0 ? void 0 : gallery.scrollIntoView();
});
toGalleryR === null || toGalleryR === void 0 ? void 0 : toGalleryR.addEventListener('click', () => {
    gallery === null || gallery === void 0 ? void 0 : gallery.scrollIntoView();
});
const videos = document.querySelector('#videos');
toVideos === null || toVideos === void 0 ? void 0 : toVideos.addEventListener('click', () => {
    videos === null || videos === void 0 ? void 0 : videos.scrollIntoView();
});
toVideosR === null || toVideosR === void 0 ? void 0 : toVideosR.addEventListener('click', () => {
    videos === null || videos === void 0 ? void 0 : videos.scrollIntoView();
});
const testimonies = document.querySelector('#testimonies');
toTestimonies === null || toTestimonies === void 0 ? void 0 : toTestimonies.addEventListener('click', () => {
    testimonies === null || testimonies === void 0 ? void 0 : testimonies.scrollIntoView();
});
toTestimoniesR === null || toTestimoniesR === void 0 ? void 0 : toTestimoniesR.addEventListener('click', () => {
    testimonies === null || testimonies === void 0 ? void 0 : testimonies.scrollIntoView();
});
let selectingLanguage = false;
languageSelector === null || languageSelector === void 0 ? void 0 : languageSelector.addEventListener('click', (e) => {
    function setLanguage() {
        function findLangId() {
            if (e.composedPath().filter((element) => element == languagePT).length != 0) {
                return 'pt';
            }
            else if (e.composedPath().filter((element) => element == languageEN).length != 0) {
                return 'en';
            }
            else {
                return '';
            }
        }
        const selectedLang = findLangId();
        if (selectedLang != '') {
            document.documentElement.setAttribute("lang", selectedLang);
            setData();
            pushAllData();
        }
    }
    if (languageBox != undefined && !selectingLanguage) {
        languageBox.classList.remove("hides");
        selectingLanguage = true;
    }
    else {
        setLanguage();
        languageBox.classList.add("hides");
        selectingLanguage = false;
    }
});
window.addEventListener('click', (e) => {
    function insideLanguageBox() {
        return e.composedPath().filter((element) => element == languageSelector).length != 0;
    }
    if (selectingLanguage && !insideLanguageBox()) {
        languageBox.classList.add("hides");
        selectingLanguage = false;
    }
    function insideNavbarR() {
        return e.composedPath().filter((element) => element == navbar).length != 0;
    }
    if (!insideNavbarR()) {
        hamIcon === null || hamIcon === void 0 ? void 0 : hamIcon.classList.remove("hides");
        navbarContent === null || navbarContent === void 0 ? void 0 : navbarContent.classList.add("translated");
    }
});
if (window.innerWidth <= 767) {
    links === null || links === void 0 ? void 0 : links.remove();
    addCopy === null || addCopy === void 0 ? void 0 : addCopy.appendChild(links);
}
navbar === null || navbar === void 0 ? void 0 : navbar.addEventListener('click', () => {
    hamIcon === null || hamIcon === void 0 ? void 0 : hamIcon.classList.toggle("hides");
    navbarContent === null || navbarContent === void 0 ? void 0 : navbarContent.classList.toggle("translated");
});
let oldPreviewImgs = [];
function previewFunction(img) {
    clearInterval(autoscroll);
    const cloneImg = img.cloneNode(true);
    img.id = '';
    img.classList.remove('testimonies-img');
    img.classList.remove('img-gallery');
    const div = document.createElement('div');
    div.classList.add('previewing-img');
    div.innerHTML = `<img src="${img.src}" alt="">`;
    img.replaceWith(div);
    div.addEventListener('click', () => {
        div.replaceWith(cloneImg);
        cloneImg.addEventListener('click', () => {
            previewFunction(cloneImg);
        });
        autoscroll = setInterval(clickRight, 5000);
    });
}
previewImgs.forEach((img) => {
    oldPreviewImgs.push(img);
    img.addEventListener('click', () => {
        previewFunction(img);
    });
});
function updatePreviewImg() {
    function appendNewImgs() {
        previewImgs.forEach((img) => {
            let boolAux = false;
            oldPreviewImgs.map((oldImg) => {
                if (img.src === oldImg.src) {
                    boolAux = true;
                }
            });
            if (!boolAux) {
                oldPreviewImgs.push(img);
                img.addEventListener('click', () => {
                    previewFunction(img);
                });
            }
        });
    }
    previewImgs = document.querySelectorAll('.preview-img');
    appendNewImgs();
}
updatePreviewImg();
const galleryURLS = [
    'static/images/gallery1.jpg',
    'static/images/gallery2.jpg',
    'static/images/gallery3.jpg',
    'static/images/gallery4.jpg',
    'static/images/gallery5.jpg',
    'static/images/gallery6.jpg'
];
let numGallery = 0;
let copyPrevious = previousImg === null || previousImg === void 0 ? void 0 : previousImg.cloneNode(true);
let copyCurrent = currentImg === null || currentImg === void 0 ? void 0 : currentImg.cloneNode(true);
let copyFollowing = followingImg === null || followingImg === void 0 ? void 0 : followingImg.cloneNode(true);
function setNumGallery(isForwards) {
    isForwards ? numGallery += 1 : numGallery -= 1;
    if (numGallery == 6) {
        numGallery = 0;
    }
    else if (numGallery == -1) {
        numGallery = 5;
    }
}
function setImages(isLeft) {
    var _a;
    galleryURLS.forEach((value, index) => {
        if (index == numGallery) {
            const newIndex = index + 2 > galleryURLS.length ? 0 : index + 1;
            const newIndex2 = index == 0 ? 5 : index - 1;
            copyPrevious.querySelector('img').src = galleryURLS[newIndex2];
            copyCurrent.querySelector('img').src = value;
            copyFollowing.querySelector('img').src = galleryURLS[newIndex];
        }
    });
    galleryDiv === null || galleryDiv === void 0 ? void 0 : galleryDiv.replaceChild(copyPrevious, previousImg);
    galleryDiv === null || galleryDiv === void 0 ? void 0 : galleryDiv.replaceChild(copyCurrent, currentImg);
    galleryDiv === null || galleryDiv === void 0 ? void 0 : galleryDiv.replaceChild(copyFollowing, followingImg);
    previousImg = document.querySelector('#previous-img');
    currentImg = document.querySelector('#current-img');
    followingImg = document.querySelector('#following-img');
    (_a = currentImg === null || currentImg === void 0 ? void 0 : currentImg.querySelector('img')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        previewFunction(currentImg === null || currentImg === void 0 ? void 0 : currentImg.querySelector('img'));
    });
    isLeft ? leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener('click', clickLeft)
        : rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener('click', clickRight);
    autoscroll = setInterval(clickRight, 5000);
    updatePreviewImg();
}
function copyNodes() {
    copyPrevious = previousImg === null || previousImg === void 0 ? void 0 : previousImg.cloneNode(true);
    copyCurrent = currentImg === null || currentImg === void 0 ? void 0 : currentImg.cloneNode(true);
    copyFollowing = followingImg === null || followingImg === void 0 ? void 0 : followingImg.cloneNode(true);
}
function changeIndicator(isForwards, numImg) {
    let newIndex = 0;
    if (isForwards) {
        newIndex = numImg + 2 > galleryURLS.length ? 0 : numImg + 1;
    }
    else {
        newIndex = numImg == 0 ? 5 : numImg - 1;
    }
    const oldIndicator = document.querySelector(`#indicator${numImg + 1}`);
    const newIndicator = document.querySelector(`#indicator${newIndex + 1}`);
    oldIndicator === null || oldIndicator === void 0 ? void 0 : oldIndicator.classList.remove('indicator-active');
    oldIndicator === null || oldIndicator === void 0 ? void 0 : oldIndicator.classList.add('indicator');
    newIndicator === null || newIndicator === void 0 ? void 0 : newIndicator.classList.remove('indicator');
    newIndicator === null || newIndicator === void 0 ? void 0 : newIndicator.classList.add('indicator-active');
}
function clickLeft() {
    leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.removeEventListener('click', clickLeft);
    clearInterval(autoscroll);
    copyNodes();
    currentImg === null || currentImg === void 0 ? void 0 : currentImg.classList.remove("left-0-class");
    currentImg === null || currentImg === void 0 ? void 0 : currentImg.classList.remove("right-0-class");
    currentImg === null || currentImg === void 0 ? void 0 : currentImg.classList.add("right-100-class");
    previousImg === null || previousImg === void 0 ? void 0 : previousImg.classList.remove("left-100-class");
    previousImg === null || previousImg === void 0 ? void 0 : previousImg.classList.add("left-0-class");
    changeIndicator(false, numGallery);
    setNumGallery(false);
    setTimeout(() => setImages(true), 1000);
}
leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener('click', clickLeft);
function clickRight() {
    rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.removeEventListener('click', clickRight);
    clearInterval(autoscroll);
    copyNodes();
    currentImg === null || currentImg === void 0 ? void 0 : currentImg.classList.remove("right-0-class");
    currentImg === null || currentImg === void 0 ? void 0 : currentImg.classList.remove("left-0-class");
    currentImg === null || currentImg === void 0 ? void 0 : currentImg.classList.add("left-100-class");
    followingImg === null || followingImg === void 0 ? void 0 : followingImg.classList.remove("right-100-class");
    followingImg === null || followingImg === void 0 ? void 0 : followingImg.classList.add("right-0-class");
    changeIndicator(true, numGallery);
    setNumGallery(true);
    setTimeout(() => setImages(false), 1000);
}
rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener('click', clickRight);
let autoscroll = setInterval(clickRight, 5000);
arrowUp === null || arrowUp === void 0 ? void 0 : arrowUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
