// Artwork Data
const artworkData = {
    1: {
        title: "The Annunciation of Saint Helena",
        artist: "Giovanni di Monteverdi",
        year: "1501",
        image: "paintings/renaissance1.png",
        description: "Commissioned by the Florentine Cathedral in 1501, this tempera on poplar panel depicts the moment Saint Helena receives her divine revelation to seek the True Cross. Monteverdi's masterful use of atmospheric perspective and his characteristic golden luminosity create an ethereal quality that distinguishes his work from his contemporaries. Note the mathematical precision in the architectural elements and the subtle sfumato in the angel's wings—hallmarks of High Renaissance technique.",
        medium: "Tempera on poplar panel",
        dimensions: "152 cm × 198 cm (60 in × 78 in)",
        provenance: "Commissioned by the Florentine Cathedral in 1501. The painting remained in the cathedral's collection until it was transferred to the museum in the early 19th century.",
        exhibitions: "Featured in major Renaissance exhibitions including 'The Age of Discovery' (1992) and 'Sacred Visions: Italian Renaissance Art' at the Metropolitan Museum (2015).",
        dates: "1468-1542"
    },
    2: {
        title: "The Feast of the Seven Virtues",
        artist: "Alessandro Veronetti",
        year: "1492–1558",
        image: "paintings/renaissance2.png",
        description: "This monumental fresco adorned the Villa Cornaro before its destruction in 1847. Veronetti's ambitious composition features personifications of the Seven Virtues dining together in a classical setting—a humanist interpretation that merged Christian theology with classical philosophy. The work demonstrates the Venetian school's emphasis on color and light, with each virtue identifiable by traditional iconographic symbols woven seamlessly into the sumptuous banquet scene.",
        medium: "Fresco (photographically preserved)",
        dimensions: "340 cm × 520 cm (134 in × 205 in)",
        provenance: "Originally created for the Villa Cornaro. After the villa's destruction in 1847, detailed photographs and sketches preserve the work's appearance. This reproduction was commissioned by the museum based on historical documentation.",
        exhibitions: "Reproductions featured in 'Lost Masterpieces of the Renaissance' (2008) and 'Venetian Splendor: Art of the Republic' at the Palazzo Ducale (2018).",
        dates: "1492-1558"
    },
    3: {
        title: "Madonna with the Pomegranate",
        artist: "Bernardo del Sarto",
        year: "1485–1539",
        image: "paintings/renaissance3.png",
        description: "Long attributed to Raphael until recent scholarship revealed del Sarto's signature beneath later overpainting, this devotional panel captures the intimate bond between Madonna and Child. The symbolic inclusion of the pomegranate—representing the Passion and Resurrection—speaks to Renaissance religious iconography. Del Sarto's mastery of sfumato is evident in the subtle modeling of flesh tones and the atmospheric landscape glimpsed through the window, demonstrating his synthesis of Florentine draftsmanship with Venetian color.",
        medium: "Tempera and oil on panel",
        dimensions: "118 cm × 94 cm (46.5 in × 37 in)",
        provenance: "Commissioned for a private chapel in Florence. The painting passed through various ecclesiastical and private collections before being acquired by the museum in 1952.",
        exhibitions: "Featured in 'The Sacred and the Beautiful: Renaissance Madonnas' at the National Gallery (2001) and 'Del Sarto and His Circle' at the Uffizi Gallery (2019).",
        dates: "1485-1539"
    },
    4: {
        title: "The Martyrdom of Saint Cecilia",
        artist: "Gasparo Tenebrini",
        year: "1591-1654",
        image: "paintings/baroque1.png",
        description: "Tenebrini's harrowing depiction of Saint Cecilia's martyrdom exemplifies the Baroque fascination with dramatic religious experience and emotional intensity. Commissioned by the Order of Saint Cecilia in Rome, the painting employs extreme tenebrism learned directly from Caravaggio's workshop. The violent diagonal composition and theatrical lighting create a visceral psychological impact, designed to inspire religious devotion through emotional engagement—the Counter-Reformation's artistic mandate made manifest.",
        medium: "Oil on canvas",
        dimensions: "245 cm × 310 cm (96.5 in × 122 in)",
        provenance: "Commissioned by the Order of Saint Cecilia in Rome. The painting remained in the order's chapel until it was acquired by the museum in the 19th century.",
        exhibitions: "Featured in 'Caravaggio and His Followers' at the National Gallery (2016) and 'Baroque Masterworks: Drama and Light' at the Louvre (2019).",
        dates: "1591-1654"
    },
    5: {
        title: "The Triumph of Divine Wisdom",
        artist: "Francesco Cortese da Roma",
        year: "1605-1671",
        image: "paintings/baroque2.png",
        description: "This breathtaking ceiling fresco transforms the Palazzo Barberini's Great Hall into an infinite celestial vision. Cortese's masterful quadratura technique dissolves the architectural boundaries, with painted columns appearing to support a sky populated by over fifty allegorical figures. Divine Wisdom, crowned and radiant, ascends at the composition's center while the Liberal Arts and Sciences gather below. The work represents the apex of Baroque illusionism and the period's confidence in unifying art, architecture, and theology.",
        medium: "Fresco",
        dimensions: "850 cm × 1200 cm (335 in × 472 in)",
        provenance: "Created for the Palazzo Barberini's Great Hall in Rome, where it remains in situ. This reproduction was commissioned by the museum for study and exhibition purposes.",
        exhibitions: "Detailed photographic studies exhibited in 'Baroque Ceilings: Visions of Heaven' at the Metropolitan Museum (2014) and 'The Art of Illusion' at the Prado (2018).",
        dates: "1605-1671"
    },
    6: {
        title: "The Music Lesson in the Golden Chamber",
        artist: "Hendrick van Vermeulen",
        year: "1628-1689",
        image: "paintings/baroque3.png",
        description: "Van Vermeulen's intimate genre scene captures the refined domestic life of Amsterdam's mercantile elite. The painting's contemplative mood and exquisite rendering of light filtering through leaded glass windows demonstrate the Dutch Baroque fascination with optical phenomena and material surfaces. Symbolic elements—the broken lute string, the abandoned wine glass, the partially visible map—suggest narrative complexity beneath the scene's serene surface, inviting viewers to construct their own interpretations of the relationship between teacher and pupil.",
        medium: "Oil on panel",
        dimensions: "78 cm × 64 cm (30.7 in × 25.2 in)",
        provenance: "Originally in the collection of a wealthy Amsterdam merchant family. Acquired by the museum through auction in 1923.",
        exhibitions: "Featured in 'Dutch Masters of the Golden Age' at the Rijksmuseum (2009) and 'Music in Dutch Art' at the National Gallery London (2021).",
        dates: "1628-1689"
    },
    7: {
        title: "Afternoon on the Seine at Argenteuil",
        artist: "Claude Beaumont",
        year: "1875",
        image: "paintings/impressionism1.png",
        description: "Painted en plein air during the summer of 1875, Beaumont's vibrant canvas captures the leisure culture emerging along the Seine's suburban reaches. His revolutionary technique—applying pure, unmixed colors in rapid, distinct brushstrokes—creates an optical mixture that vibrates with atmospheric light. Beaumont was among the artists who exhibited at the controversial 1874 exhibition that gave Impressionism its name. This work demonstrates his interest in capturing not the static reality of the scene, but the fleeting impression of a specific moment in changing light.",
        medium: "Oil on canvas",
        dimensions: "65 cm × 92 cm (25.6 in × 36.2 in)",
        provenance: "Originally exhibited at the First Impressionist Exhibition in 1874. Acquired by the museum through the Caillebotte bequest in 1894.",
        exhibitions: "Featured in major Impressionist surveys including 'The Birth of Impressionism' at the Musée d'Orsay (2010) and 'Painting the Modern Garden' at the Royal Academy (2016).",
        dates: "1839-1905"
    },
    8: {
        title: "The Ballet Rehearsal at the Opéra",
        artist: "Émile Devereux",
        year: "1874",
        image: "paintings/impressionism2.png",
        description: "Devereux's fascination with backstage ballet life produced over forty canvases exploring themes of labor, grace, and modern urban spectacle. This work exemplifies his innovative compositional strategies borrowed from Japanese prints and photography—the high viewpoint, radical cropping, and asymmetrical arrangement. Unlike idealized academic treatments of dance, Devereux captures the physical strain of rehearsal, the waiting dancers' boredom, the unglamorous work behind the performance. His sketchy, unfinished technique reinforced contemporary critics' accusations that Impressionists merely exhibited incomplete studies.",
        medium: "Oil on canvas",
        dimensions: "85 cm × 75 cm (33.5 in × 29.5 in)",
        provenance: "Part of the artist's estate sale in 1917. Purchased by a private collector and later donated to the museum in 1965.",
        exhibitions: "Featured in 'Degas and the Ballet' at the Royal Academy (2011) and 'Impressionism and Modern Life' at the Art Institute of Chicago (2013).",
        dates: "1841-1912"
    },
    9: {
        title: "Sunday at the Parc de Vincennes",
        artist: "Marguerite Valois",
        year: "1885-1886",
        image: "paintings/imprsesionism3.png",
        description: "One of the few successful female artists associated with Neo-Impressionism, Valois applied Chevreul's color theories with mathematical precision while maintaining an atmospheric warmth often absent in her male counterparts' works. This large canvas required eighteen months of meticulous execution, each color dot carefully positioned to achieve optical mixture. The scene depicts the new urban parks that transformed Paris—democratic spaces where classes mingled, and modern leisure emerged as a cultural phenomenon. Valois exhibited this work at the final Impressionist exhibition in 1886.",
        medium: "Oil on canvas",
        dimensions: "207 cm × 308 cm (81.5 in × 121.3 in)",
        provenance: "Exhibited at the Eighth Impressionist Exhibition in 1886. Acquired by the museum in 1924 through the Helen Birch Bartlett Memorial Collection.",
        exhibitions: "Featured in 'Women Impressionists' at the Musée Marmottan (2008) and 'Neo-Impressionism and the Dream of Realities' at the Phillips Collection (2014).",
        dates: "1852-1923"
    },
    11: {
        title: "Geometric Composition No. 7: Red Square and Black Circle",
        artist: "Kasimir Volkov",
        year: "1920",
        image: "paintings/modernism1.png",
        description: "Created during Volkov's brief but influential Suprematist period, this canvas embodies the revolutionary belief that pure geometric abstraction could transcend material reality and access universal truth. Volkov worked closely with Malevich at UNOVIS, developing theories of non-objective art that rejected centuries of representational tradition. The deceptively simple composition—a red square and black circle in dynamic tension—proposes a new visual language freed from depicting the visible world. Volkov was purged during Stalin's cultural crackdown in 1934, and most of his work was destroyed.",
        medium: "Oil on canvas",
        dimensions: "88 cm × 88 cm (34.6 in × 34.6 in)",
        provenance: "Smuggled out of the Soviet Union in 1933 by a sympathetic diplomat. Acquired by the museum through a private sale in 1975.",
        exhibitions: "Featured in 'Russian Avant-Garde' at the Guggenheim (1992) and 'Suprematism: New Forms of Expression' at Tate Modern (2014).",
        dates: "1891-1956"
    },
    12: {
        title: "Woman Descending a Staircase",
        artist: "Marcel Duchenne",
        year: "1912",
        image: "paintings/modernism2.png",
        description: "Duchenne's scandalous contribution to the 1913 Armory Show in New York provoked outrage and ridicule from American critics unused to European avant-garde experiments. The painting synthesizes Cubism's multiple perspectives with Futurism's obsession with movement and machine age dynamism. By fracturing the figure into geometric planes and representing sequential moments simultaneously, Duchenne challenged fundamental assumptions about pictorial representation. The work influenced American modernism and anticipated cinema's capacity to represent time. Duchenne later abandoned painting entirely for conceptual art and readymades.",
        medium: "Oil on canvas",
        dimensions: "147 cm × 89 cm (58 in × 35 in)",
        provenance: "Acquired by the Philadelphia Museum of Art following the 1913 Armory Show, where it caused a sensation.",
        exhibitions: "Featured in 'The Armory Show at 100' at the New-York Historical Society (2013) and 'Cubism and Futurism' at the Centre Pompidou (2008).",
        dates: "1889-1964"
    },
    13: {
        title: "The Persistence of Shadows",
        artist: "Salvador Méndez",
        year: "1937",
        image: "paintings/modernism3.png",
        description: "Méndez's masterpiece synthesizes Surrealism's exploration of dreams, Freudian psychology, and the unconscious mind. Painted during his exile from Franco's Spain, the work's melting forms and impossible spaces metaphorically represent the collapse of rational order in the face of fascism and approaching war. The hyperrealistic technique—perfected during Méndez's academic training—paradoxically makes the impossible seem tangible. André Breton championed the work as exemplifying Surrealism's 'paranoid-critical method,' using systematic irrationality to access deeper psychological truths hidden beneath rational consciousness.",
        medium: "Oil on canvas",
        dimensions: "65 cm × 92 cm (25.6 in × 36.2 in)",
        provenance: "Created during the artist's exile in Paris. Acquired by a private collector in 1938 and donated to the museum in 1982.",
        exhibitions: "Featured in 'Surrealism and the Spanish Civil War' at the Reina Sofía (2011) and 'Dreams and Reality: Surrealist Masterworks' at the Tate Gallery (2007).",
        dates: "1908-1991"
    },
    14: {
        title: "Infinity Net (Accumulation of Souls)",
        artist: "Tomoko Yamashita",
        year: "1987-1994",
        image: "paintings/contemp1.png",
        description: "Yamashita began this canvas in 1987 and continued adding layers of white dots for seven years, the obsessive process becoming a meditation on mental illness, infinity, and self-obliteration. Like her mentor Kusama, Yamashita's repetitive patterns emerged from psychiatric symptoms—hallucinations of endless nets covering her visual field. The work's surface bears the physical evidence of this durational performance: paint buildup from thousands of dots creates a relief texture, while variations in the white pigment reveal its gradual completion over time. The piece was exhibited at the 1995 Venice Biennale's Japanese Pavilion.",
        medium: "Acrylic on canvas",
        dimensions: "194 cm × 259 cm (76.4 in × 102 in)",
        provenance: "Created over seven years (1987-1994). Acquired by the museum following its exhibition at the Venice Biennale in 1995.",
        exhibitions: "Featured at the Venice Biennale Japanese Pavilion (1995) and 'Obsessive Drawing' at the Museum of Modern Art (2005).",
        dates: "b. 1952"
    },
    15: {
        title: "Untitled (House)",
        artist: "Mira Kovač",
        year: "1996",
        image: "paintings/contemp2.png",
        description: "Kovač's textile reconstruction of her childhood home in Sarajevo was sewn entirely from clothes belonging to family members who died during the Yugoslav Wars. Every room, every piece of furniture, every architectural detail is rendered in fabric—creating a soft, permeable memorial that visitors could walk through. The work collapses sculpture, architecture, and memorial practice, with the domestic interior becoming a skin that contains absence. The fabrics' wear and fading intensify the sense of loss and time's passage. Originally exhibited at Documenta X in 1997, the work has since deteriorated further, which Kovač considers part of its meaning.",
        medium: "Mixed textiles, thread, and wooden armature",
        dimensions: "300 cm × 400 cm × 350 cm (118 in × 157 in × 138 in)",
        provenance: "Created in 1996 following the Bosnian War. First exhibited at Documenta X in Kassel (1997). Acquired by the museum in 2001.",
        exhibitions: "Featured at Documenta X (1997), 'Memory and Mourning' at the Tate Modern (2003), and 'The Art of Loss' at the Museum of Contemporary Art Sydney (2015).",
        dates: "b. 1961"
    },
    16: {
        title: "Accumulated Memory (Red Room Installation)",
        artist: "Chiharu Sato",
        year: "1993-1997",
        image: "paintings/contemp3.png",
        description: "Sato spent four years hand-sewing over 3,000 individual red fabric forms to create this immersive environment, which visitors could enter and sit within. Each stuffed object represents a memory or emotion, accumulating into an overwhelming psychological space that is simultaneously comforting and suffocating. The obsessive repetition of form and the choice of red—suggesting both vitality and violence, wombs and wounds—creates a powerful meditation on memory, trauma, and female experience. The installation was first exhibited at the 1997 Yokohama Triennale and has since been restaged multiple times, with the fabric forms showing increasing age and deterioration that Sato considers integral to the work's meaning about memory's decay.",
        medium: "Red fabric, thread, and mixed materials",
        dimensions: "Variable dimensions (installation)",
        provenance: "Created between 1993-1997. First exhibited at the Yokohama Triennale (1997). Acquired by the museum in 2000.",
        exhibitions: "Featured at Yokohama Triennale (1997), 'Fabric of Memory' at the National Museum of Modern Art Tokyo (2004), and 'Soft Power' at the Hayward Gallery (2019).",
        dates: "b. 1955"
    }
};

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const collectionSections = document.querySelectorAll('.collection-section');
const artworkCards = document.querySelectorAll('.artwork-card');
const modal = document.getElementById('artworkModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const ctaButton = document.querySelector('.cta-button');

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get selected category
        const category = button.getAttribute('data-category');
        
        // Filter collections
        collectionSections.forEach(section => {
            if (category === 'all') {
                section.classList.remove('hidden');
            } else {
                if (section.getAttribute('data-category') === category) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            }
        });
        
        // Smooth scroll to gallery
        document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
    });
});

// Artwork Card Click - Open Modal
artworkCards.forEach(card => {
    card.addEventListener('click', () => {
        const artworkId = card.getAttribute('data-id');
        openModal(artworkId);
    });
});

// Open Modal Function
function openModal(artworkId) {
    const artwork = artworkData[artworkId];
    
    if (artwork) {
        // Update modal content
        document.querySelector('.modal-title').textContent = artwork.title;
        document.querySelector('.modal-artist').textContent = artwork.artist;
        document.querySelector('.modal-year').textContent = artwork.year;
        
        // Update or create image in modal
        const modalImageContainer = document.querySelector('.modal-image');
        modalImageContainer.innerHTML = '';
        
        if (artwork.image) {
            const img = document.createElement('img');
            img.src = artwork.image;
            img.alt = artwork.title;
            modalImageContainer.appendChild(img);
        } else {
            modalImageContainer.innerHTML = '<div class="placeholder-image large"><span class="placeholder-text">Artwork Image</span></div>';
        }
        
        // Update description sections
        const descriptionParagraphs = document.querySelectorAll('.modal-description p');
        descriptionParagraphs[0].textContent = artwork.description;
        descriptionParagraphs[1].innerHTML = `${artwork.medium}<br>${artwork.dimensions}`;
        descriptionParagraphs[2].textContent = artwork.provenance;
        descriptionParagraphs[3].textContent = artwork.exhibitions;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Scroll modal content to top
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Also scroll the modal details section to top
        const modalDetails = document.querySelector('.modal-details');
        if (modalDetails) {
            modalDetails.scrollTop = 0;
        }
    }
}

// Close Modal Function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on button click
modalClose.addEventListener('click', closeModal);

// Close modal on overlay click
modalOverlay.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// CTA Button - Scroll to Gallery
ctaButton.addEventListener('click', () => {
    document.querySelector('.filter-section').scrollIntoView({ behavior: 'smooth' });
});

// Search Functionality (Basic)
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        return;
    }
    
    // Show all sections first
    filterButtons[0].click(); // Click "All Works" button
    
    // Filter artwork cards
    artworkCards.forEach(card => {
        const title = card.querySelector('.artwork-title').textContent.toLowerCase();
        const artist = card.querySelector('.artwork-artist').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || artist.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'highlight 1s ease';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Scroll to gallery
    document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
}

// Add smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all artwork cards for scroll animations
artworkCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Action buttons functionality (removed notifications)

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    mainNav.addEventListener('click', (e) => {
        if (e.target === mainNav) {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes highlight {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Museum website initialized successfully!');

