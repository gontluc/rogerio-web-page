/* EXECUTES ONCE */

/* Scroll to top when refresh */
window.scrollTo(0,0)

/* Add Language Data */
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
}

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
}

/* Grab DOM elements */

/* data.header */
const toProfile = document.querySelector('#to-profile')
const toSpecialty = document.querySelector('#to-specialty')
const toGallery = document.querySelector('#to-gallery')
const toVideos = document.querySelector('#to-videos')
const toTestimonies = document.querySelector('#to-testimonies')

const toProfileR = document.querySelector('#to-profile-responsive')
const toSpecialtyR = document.querySelector('#to-specialty-responsive')
const toGalleryR = document.querySelector('#to-gallery-responsive')
const toVideosR = document.querySelector('#to-videos-responsive')
const toTestimoniesR = document.querySelector('#to-testimonies-responsive')

const language = document.querySelector('#the-language')
const profession = document.querySelector('#profession')
const languageTitle = document.querySelector('#language-title')

const flag = document.querySelector('#the-flag') as HTMLImageElement
const languageSelector = document.querySelector('#language-selector')
const languageBox = document.querySelector('#select-language-box') as HTMLElement
const languagePT = document.querySelector('#lang-pt')
const languageEN = document.querySelector('#lang-en')

const links = document.querySelector('#links') as HTMLElement
const addCopy = document.querySelector('#add-copy')

const navbar = document.querySelector('#navbar-responsive')
const hamIcon = document.querySelector('#ham-icon')
const navbarContent = document.querySelector('#navbar-content')

/* data.profile */
const profileTitle = document.querySelector('#profile-title')
const profileContent = document.querySelector('#profile-content')

/* data.specialty */
const specialtyTitle = document.querySelector('#specialty-title')
const specialtyLeft1 = document.querySelector('#specialty-left1')
const specialtyLeft2 = document.querySelector('#specialty-left2')

/* data.gallery */
const galleryTitle = document.querySelector('#gallery-title')
const leftArrow = document.querySelector('#move-left')
const rightArrow = document.querySelector('#move-right')
let previousImg = document.querySelector('#previous-img')
let currentImg = document.querySelector('#current-img')
let followingImg = document.querySelector('#following-img')
let galleryDiv = document.querySelector('#current-img-div')

/* data.videos */
const videosTitle = document.querySelector('#videos-title')

const video1URL = document.querySelector('#video1-href') as HTMLAnchorElement
const video1Title = document.querySelector('#video1-title')
const video1Desc = document.querySelector('#video1-description')

const video2URL = document.querySelector('#video2-href') as HTMLAnchorElement
const video2Title = document.querySelector('#video2-title')
const video2Desc = document.querySelector('#video2-description')

const video3URL = document.querySelector('#video3-href') as HTMLAnchorElement
const video3Title = document.querySelector('#video3-title')
const video3Desc = document.querySelector('#video3-description')

const videosBtn = document.querySelector('#videos-btn')

/* data.testimonies */
const testimoniesTitle = document.querySelector('#testimonies-title')

/* footer */
const arrowUp = document.querySelector('#arrow-up')

/* preview Images */
let previewImgs = document.querySelectorAll('.preview-img') as NodeListOf<HTMLImageElement>

/* Set data */
let data = pt

function pushAllData() {
    /* Get DOM Element and push data */
    function pushData(element: Element | null, content: string): void {
        if (element != undefined) {
            element.innerHTML = content
        }
    }

    pushData(toProfile, data.header.navbar.profile)
    pushData(toSpecialty, data.header.navbar.specialty)
    pushData(toGallery, data.header.navbar.gallery)
    pushData(toVideos, data.header.navbar.videos)
    pushData(toTestimonies, data.header.navbar.testimonies)

    pushData(toProfileR, data.header.navbar.profile)
    pushData(toSpecialtyR, data.header.navbar.specialty)
    pushData(toGalleryR, data.header.navbar.gallery)
    pushData(toVideosR, data.header.navbar.videos)
    pushData(toTestimoniesR, data.header.navbar.testimonies)

    pushData(languageTitle, data.header.languageTitle)
    pushData(language, data.header.language)
    pushData(profession, data.header.profession)

    /* Push img src */
    flag!.src = `static/images/icons/${data.header.flag}.png`

    pushData(profileTitle, data.profile.profileTitle)
    pushData(profileContent, data.profile.profileContent)

    pushData(specialtyTitle, data.specialty.specialtyTitle)
    pushData(specialtyLeft1, data.specialty.specialtyContent.left1)
    pushData(specialtyLeft2, data.specialty.specialtyContent.left2)

    pushData(galleryTitle, data.gallery.galleryTitle)

    pushData(videosTitle, data.videos.videosTitle)
    
    /* push a href */
    video1URL!.href = data.videos.video1.videoURL
    video2URL!.href = data.videos.video2.videoURL
    video3URL!.href = data.videos.video3.videoURL

    pushData(video1Title, data.videos.video1.videoTitle)
    pushData(video1Desc, data.videos.video1.videoDescription)
    pushData(video2Title, data.videos.video2.videoTitle)
    pushData(video2Desc, data.videos.video2.videoDescription)
    pushData(video3Title, data.videos.video3.videoTitle)
    pushData(video3Desc, data.videos.video3.videoDescription)

    pushData(videosBtn, data.videos.videosBtn)
    
    pushData(testimoniesTitle, data.testimonies.testimoniesTitle)
}

function setData() {
    if (document.documentElement.lang === "pt") {
        data = pt
        console.log('Language set to Portuguese')
    } else {
        data = en
        console.log('Language set to English')
    }
}

setData()
pushAllData()

/* EVENT LISTENERS */

/* Smooth Scrolling */

/* Profile */
const profile = document.querySelector('#right-profile')
toProfile?.addEventListener('click', () => {
    profile?.scrollIntoView()
})

toProfileR?.addEventListener('click', () => {
    profile?.scrollIntoView()
})

/* Specialty */
const specialty = document.querySelector('#specialty')
toSpecialty?.addEventListener('click', () => {
    specialty?.scrollIntoView()
})

toSpecialtyR?.addEventListener('click', () => {
    specialty?.scrollIntoView()
})

/* Galery */
const gallery = document.querySelector('#gallery')
toGallery?.addEventListener('click', () => {
    gallery?.scrollIntoView()
})

toGalleryR?.addEventListener('click', () => {
    gallery?.scrollIntoView()
})

/* Videos */
const videos = document.querySelector('#videos')
toVideos?.addEventListener('click', () => {
    videos?.scrollIntoView()
})

toVideosR?.addEventListener('click', () => {
    videos?.scrollIntoView()
})

/* Letters */
const testimonies = document.querySelector('#testimonies')
toTestimonies?.addEventListener('click', () => {
    testimonies?.scrollIntoView()
})

toTestimoniesR?.addEventListener('click', () => {
    testimonies?.scrollIntoView()
})

/* Language Selector */
let selectingLanguage = false

/* Click on Language Selector */
languageSelector?.addEventListener('click', (e) => {
    function setLanguage(): void {

        function findLangId(): string {
            if (e.composedPath().filter((element) => 
                element == languagePT
            ).length != 0) {
                return 'pt'
            } else if (e.composedPath().filter((element) => 
                element == languageEN
            ).length != 0) {
                return 'en'
            } else {
                return ''
            }
        }

        const selectedLang = findLangId()
        if (selectedLang != '') {
            document.documentElement.setAttribute("lang", selectedLang)
            setData()
            pushAllData()
        }
    }

    /*If not active --> show, Else active --> change language and hide*/
    if (languageBox != undefined && !selectingLanguage) {
        languageBox.classList.remove("hides");
        selectingLanguage = true
    } else {
        /* Select language */
        setLanguage()
        languageBox.classList.add("hides");
        selectingLanguage = false
    }
})

/* 
    Click outside Language Box with Language Box visible
    Click outside navbar-responsive with navbar-content visible
*/
window.addEventListener('click', (e) => {
    function insideLanguageBox():boolean {
        return e.composedPath().filter((element) => element == languageSelector).length != 0
    }
    
    if (selectingLanguage && !insideLanguageBox()) {
        languageBox.classList.add("hides");
        selectingLanguage = false
    }

    function insideNavbarR():boolean {
        return e.composedPath().filter((element) => element == navbar).length != 0
    }
    
    if (!insideNavbarR()) {
        hamIcon?.classList.remove("hides");
        navbarContent?.classList.add("translated");
    }
})

/* Change #links position on Mobile responsive 767px */
if (window.innerWidth <= 767) {
    links?.remove()
    addCopy?.appendChild(links)
}

/* Hamburger menu */
navbar?.addEventListener('click', () => {
    hamIcon?.classList.toggle("hides");
    navbarContent?.classList.toggle("translated");
})

/* Preview Image on click */

/* aux store img values and initialize it*/
let oldPreviewImgs : HTMLImageElement[] = []

/* preview function */
function previewFunction(img: HTMLImageElement) {
    /* click to view */
    clearInterval(autoscroll)

    const cloneImg = img.cloneNode(true) as HTMLImageElement
    img.id = ''
    img.classList.remove('testimonies-img')
    img.classList.remove('img-gallery')

    const div = document.createElement('div')
    div.classList.add('previewing-img')
    div.innerHTML = `<img src="${img.src}" alt="">`

    img.replaceWith(div)

    /* click to normal */
    div.addEventListener('click', () => {

        div.replaceWith(cloneImg)

        /* Add the event listener again because clones don't copy eventListeners from original elements */
        cloneImg.addEventListener('click', () => {
            previewFunction(cloneImg)
        })

        autoscroll = setInterval(clickRight, 5000)
    })

    
}

previewImgs.forEach((img) => {
    oldPreviewImgs.push(img)
    img.addEventListener('click', () => {
        previewFunction(img)
    })
})

function updatePreviewImg() {

    /* Compares and appends new values */
    function appendNewImgs() {
        previewImgs.forEach((img) => {
            let boolAux = false

            oldPreviewImgs.map((oldImg) => {
                if (img.src === oldImg.src) {
                    boolAux = true
                } 
            })

            if (!boolAux) {
                oldPreviewImgs.push(img)
                img.addEventListener('click', () => {
                    previewFunction(img)
                })
            }
        })
    }

    /* Update variable */
    previewImgs = document.querySelectorAll('.preview-img')

    /* Update event listeners */
    appendNewImgs()
}

updatePreviewImg()

/* Carousel */
const galleryURLS = [
    'static/images/gallery1.jpg',
    'static/images/gallery2.jpg',
    'static/images/gallery3.jpg',
    'static/images/gallery4.jpg',
    'static/images/gallery5.jpg',
    'static/images/gallery6.jpg'
]

let numGallery = 0

/* Initialize variables */
let copyPrevious = previousImg?.cloneNode(true) as HTMLElement
let copyCurrent = currentImg?.cloneNode(true) as HTMLElement
let copyFollowing = followingImg?.cloneNode(true) as HTMLElement

/* forwards = true or backwards = false */
function setNumGallery(isForwards: boolean) {

    /* Change img displaying index */
    isForwards ? numGallery += 1 : numGallery -= 1

    if (numGallery == 6) {
        numGallery = 0
    } else if (numGallery == -1) {
        numGallery = 5
    }
}

/* left arrow clicked = true or right arrow clicked = false */
function setImages(isLeft: boolean) {

    /* Set attributes to new node, set src urls */
    galleryURLS.forEach((value, index) => {
        if (index == numGallery) {
            const newIndex = index + 2 > galleryURLS.length ? 0 : index + 1
            const newIndex2 = index == 0 ? 5 : index - 1

            copyPrevious!.querySelector('img')!.src = galleryURLS[newIndex2]
            copyCurrent!.querySelector('img')!.src = value
            copyFollowing!.querySelector('img')!.src = galleryURLS[newIndex]
        }
    })

    galleryDiv?.replaceChild(copyPrevious, previousImg!)
    galleryDiv?.replaceChild(copyCurrent, currentImg!)
    galleryDiv?.replaceChild(copyFollowing, followingImg!)

    previousImg = document.querySelector('#previous-img')
    currentImg = document.querySelector('#current-img')
    followingImg = document.querySelector('#following-img')

    /* add event listener img preview */
    currentImg?.querySelector('img')?.addEventListener('click', () => {
        previewFunction(currentImg?.querySelector('img')!)
    })

    isLeft ? leftArrow?.addEventListener('click', clickLeft) 
        : rightArrow?.addEventListener('click', clickRight)
    
    autoscroll = setInterval(clickRight, 5000)

    updatePreviewImg()
}

/* Copy default node current-img-div */
function copyNodes():void {
    copyPrevious = previousImg?.cloneNode(true) as HTMLElement
    copyCurrent = currentImg?.cloneNode(true) as HTMLElement
    copyFollowing = followingImg?.cloneNode(true) as HTMLElement
}

/* Change indicators */
function changeIndicator(isForwards: boolean, numImg: number): void {

    let newIndex = 0

    if (isForwards) {
        newIndex = numImg + 2 > galleryURLS.length ? 0 : numImg + 1
    } else {
        newIndex = numImg == 0 ? 5 : numImg - 1
    }

    const oldIndicator = document.querySelector(`#indicator${numImg + 1}`)
    const newIndicator = document.querySelector(`#indicator${newIndex + 1}`)

    oldIndicator?.classList.remove('indicator-active')
    oldIndicator?.classList.add('indicator')

    newIndicator?.classList.remove('indicator')
    newIndicator?.classList.add('indicator-active')
}

/* Click left arrow */
function clickLeft() {
    leftArrow?.removeEventListener('click', clickLeft)
    clearInterval(autoscroll)
    copyNodes()
    currentImg?.classList.remove("left-0-class")
    currentImg?.classList.remove("right-0-class")
    currentImg?.classList.add("right-100-class");
    previousImg?.classList.remove("left-100-class")
    previousImg?.classList.add("left-0-class")
    changeIndicator(false, numGallery)
    setNumGallery(false)
    setTimeout(() => setImages(true), 1000)
}

leftArrow?.addEventListener('click', clickLeft)

/* Click right arrow */
function clickRight() {
    rightArrow?.removeEventListener('click', clickRight)
    clearInterval(autoscroll)
    copyNodes()
    currentImg?.classList.remove("right-0-class")
    currentImg?.classList.remove("left-0-class")
    currentImg?.classList.add("left-100-class")
    followingImg?.classList.remove("right-100-class")
    followingImg?.classList.add("right-0-class")
    changeIndicator(true, numGallery)
    setNumGallery(true)
    setTimeout(() => setImages(false), 1000)
}

rightArrow?.addEventListener('click', clickRight)

/* Autoscroll every 5s */
let autoscroll = setInterval(clickRight, 5000)

/* #arrow-up scroll to top */
arrowUp?.addEventListener('click', () => {
    window.scrollTo(0,0)
})