// Poetry Sanctuary - Modern Interactive Web App
// Vanilla JavaScript with smooth animations and modern UX

class PoetrySanctuary {
    constructor() {
        this.poems = [
            {
                id: 1,
                title: "Digital Sanctuary",
                author: "Elena Vasquez",
                content: `In pixels bright and code that gleams,\nWhere algorithms weave our dreams,\nI find solace in the screen's embrace,\nA digital sanctuary, my sacred space.\n\nThrough fiber optic veins of light,\nData flows like prayers at night,\nIn this realm where hearts connect,\nOur digital souls we resurrect.\n\nBeyond the silicon and steel,\nLies something beautiful and real—\nHuman connection, pure and true,\nIn every byte that passes through.`
            },
            {
                id: 2,
                title: "Morning Ritual",
                author: "Marcus Chen",
                content: `Steam dances from porcelain white,\nCoffee's aroma greets first light,\nEach sip a promise, warm and deep,\nAwakening dreams from gentle sleep.\n\nThe bitter taste of hopes renewed,\nIn ceramic comfort, solitude,\nA ritual sacred as the dawn,\nAs yesterday's shadows are withdrawn.\n\nIn this moment, time stands still,\nCaffeine coursing, bending will,\nThe day begins with liquid gold,\nAnd stories yet to be retold.`
            },
            {
                id: 3,
                title: "Urban Symphony",
                author: "Sophia Martinez",
                content: `Raindrops compose on concrete keys,\nA symphony for the busy streets,\nNeon signs blur in puddles deep,\nWhile the city's rhythm never sleeps.\n\nUmbrellas bloom like midnight flowers,\nProtecting souls through stormy hours,\nEach footstep adds a percussive beat,\nTo this orchestra of urban streets.\n\nIn chaos find a hidden grace,\nBeauty dwelling in this place,\nWhere millions dance the same refrain,\nBeneath the blessing of the rain.`
            },
            {
                id: 4,
                title: "Ocean's Whisper",
                author: "James Rodriguez",
                content: `Where endless waves kiss willing shore,\nI hear the ocean's ancient lore,\nSalt-tinged secrets on the breeze,\nSpoken softly by the seas.\n\nSeashells hold the ocean's song,\nMelodies both deep and long,\nThe horizon beckons, infinite and wide,\nBeyond the reach of earthly pride.\n\nIn tidal pools of crystal clear,\nLife's mysteries appear,\nReflecting sky in water's mirror,\nMaking distant dreams seem nearer.`
            },
            {
                id: 5,
                title: "Autumn's Embrace",
                author: "Isabella Thompson",
                content: `Golden leaves like scattered prayers,\nFloat gently down the autumn stairs,\nEach one a memory, crisp and bright,\nBefore the coming winter's night.\n\nTrees undress with graceful ease,\nSwaying in October's breeze,\nA season's end becomes rebirth,\nAs leaves return to sacred earth.\n\nIn amber light and crimson hue,\nNature shows us something true—\nThat letting go can be an art,\nA masterpiece that heals the heart.`
            },
            {
                id: 6,
                title: "Stellar Dreams",
                author: "David Park",
                content: `Stars like diamonds pierce the veil,\nOf night's eternal, cosmic tale,\nConstellations map the way,\nTo dreams we chase but never say.\n\nMoonbeams silver, shadows long,\nNature hums her nighttime song,\nIn darkness deep, we find our light,\nGuided by the cosmic sight.\n\nThe universe expands above,\nFilled with mystery and love,\nEach star a story yet untold,\nMore precious than the finest gold.`
            },
            {
                id: 7,
                title: "Garden of Wonder",
                author: "Maria Santos",
                content: `Petals soft like whispered dreams,\nIn garden beds where sunlight streams,\nRoses red and violets blue,\nKissed by morning's gentle dew.\n\nButterflies on painted wings,\nDance to music garden sings,\nIn this Eden touched by grace,\nEvery bloom finds its place.\n\nSeeds of hope in fertile ground,\nWhere life's greatest joys are found,\nIn nature's bounty, pure and free,\nWe glimpse what we're meant to be.`
            },
            {
                id: 8,
                title: "Summit's Call",
                author: "Alexander Kim",
                content: `Above the clouds where eagles dare,\nI breathe the mountain's sacred air,\nEach step upward, spirit soars,\nOpening transcendent doors.\n\nThe peak awaits with arms spread wide,\nAbove the world's relentless tide,\nHere silence speaks in voice so clear,\nDispelling doubt, erasing fear.\n\nFrom summit's throne, the world below,\nReveals what climbers come to know—\nThat journey matters more than height,\nAnd struggle gives us inner sight.`
            },
            {
                id: 9,
                title: "Library of Souls",
                author: "Rachel Green",
                content: `Yellow pages, binding worn,\nFrom countless hearts that have been torn,\nEach word a window to the past,\nWhere timeless wisdom ever lasts.\n\nThe musty scent of knowledge old,\nHolds treasures more than finest gold,\nBetween these lines, worlds come alive,\nWhere spirits dance and souls can thrive.\n\nIn books we find our truest friends,\nWhose loyalty transcends and mends,\nThe wounded places in our heart,\nWhere healing stories always start.`
            },
            {
                id: 10,
                title: "Winter's Gift",
                author: "Thomas Wilson",
                content: `Snowflakes fall like angel tears,\nWashing away our earthly fears,\nThe world transforms in white embrace,\nA blanket soft on every place.\n\nChildren laugh and make snow angels,\nWhile icicles hang like crystal dangles,\nFirst snow brings a magic pure,\nMaking frozen hearts feel sure.\n\nIn winter's hush, we find our peace,\nAs worldly worries find release,\nThe cold without warms hearts within,\nWhere winter's wisdom can begin.`
            },
            {
                id: 11,
                title: "River's Wisdom",
                author: "Carmen Lopez",
                content: `Water flows with purpose true,\nCarving paths forever new,\nCurrents strong and eddies calm,\nSing together nature's psalm.\n\nPebbles smooth beneath the stream,\nReflect the sun's eternal beam,\nThe river knows no yesterday,\nJust present moment, come what may.\n\nIn flowing water, learn to see,\nHow graceful change can always be,\nLike rivers, we must learn to bend,\nTo find the peace that has no end.`
            },
            {
                id: 12,
                title: "Twilight's Song",
                author: "Benjamin Taylor",
                content: `As daylight fades to purple dream,\nThe evening paints with gentle gleam,\nCrickets start their sweet refrain,\nWhile fireflies dance in country lane.\n\nThe day's work done, the night's begun,\nBeneath the slowly setting sun,\nIn twilight's peace, we find our rest,\nKnowing this moment is blessed.\n\nStars emerge to light our way,\nUntil the birth of another day,\nIn twilight's arms, we safely dwell,\nWith stories that our hearts can tell.`
            }
        ];

        this.filteredPoems = [...this.poems];
        this.expandedCards = new Set();
        this.currentSort = 'original';
        this.isDarkMode = localStorage.getItem('theme') === 'dark';
        this.isMobileMenuOpen = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupMobileMenu();
        this.setTheme(this.isDarkMode);
        this.renderPoems();
        this.updatePoemCount();
        this.setupScrollToTop();
        this.animateOnLoad();
    }

    setupMobileMenu() {
        try {
            console.log('Setting up mobile menu...');
            
            this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
            this.sidebar = document.getElementById('sidebar');
            this.sidebarOverlay = document.getElementById('sidebarOverlay');
            this.mobileCloseBtn = document.getElementById('mobileCloseBtn');

            console.log('Mobile menu elements:', {
                toggle: !!this.mobileMenuToggle,
                sidebar: !!this.sidebar,
                overlay: !!this.sidebarOverlay,
                closeBtn: !!this.mobileCloseBtn
            });

            if (!this.mobileMenuToggle || !this.sidebar || !this.sidebarOverlay || !this.mobileCloseBtn) {
                console.error('Mobile menu elements not found:', {
                    mobileMenuToggle: this.mobileMenuToggle,
                    sidebar: this.sidebar,
                    sidebarOverlay: this.sidebarOverlay,
                    mobileCloseBtn: this.mobileCloseBtn
                });
                return;
            }

            // Bind mobile menu events with proper context
            this.mobileMenuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Mobile menu toggle clicked');
                this.toggleMobileMenu();
            });
            
            this.sidebarOverlay.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Sidebar overlay clicked');
                this.closeMobileMenu();
            });
            
            this.mobileCloseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Mobile close button clicked');
                this.closeMobileMenu();
            });

            // Close menu when clicking nav items on mobile
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', () => {
                    if (window.innerWidth <= 768 && this.isMobileMenuOpen) {
                        console.log('Nav item clicked, closing mobile menu');
                        this.closeMobileMenu();
                    }
                });
            });

            // Handle window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768 && this.isMobileMenuOpen) {
                    console.log('Window resized, closing mobile menu');
                    this.closeMobileMenu();
                }
            });

            console.log('Mobile menu setup complete');

        } catch (error) {
            console.error('Error setting up mobile menu:', error);
        }
    }

    toggleMobileMenu() {
        try {
            console.log('Toggle mobile menu called, current state:', this.isMobileMenuOpen);
            if (this.isMobileMenuOpen) {
                this.closeMobileMenu();
            } else {
                this.openMobileMenu();
            }
        } catch (error) {
            console.error('Error toggling mobile menu:', error);
        }
    }

    openMobileMenu() {
        try {
            console.log('Opening mobile menu...');
            
            if (!this.sidebar || !this.sidebarOverlay || !this.mobileMenuToggle) {
                console.error('Cannot open mobile menu: elements not found');
                return;
            }

            // Force the classes to be added
            this.sidebar.classList.add('open');
            this.sidebarOverlay.classList.add('active');
            this.mobileMenuToggle.classList.add('active');
            
            // Force display styles directly
            this.sidebarOverlay.style.display = 'block';
            this.sidebarOverlay.style.opacity = '1';
            this.sidebar.style.transform = 'translateX(0)';
            
            document.body.style.overflow = 'hidden';
            this.isMobileMenuOpen = true;
            
            console.log('Mobile menu opened successfully');
            console.log('Sidebar classes:', this.sidebar.className);
            console.log('Sidebar style transform:', this.sidebar.style.transform);
            console.log('Overlay classes:', this.sidebarOverlay.className);
            console.log('Overlay style display:', this.sidebarOverlay.style.display);
            
        } catch (error) {
            console.error('Error opening mobile menu:', error);
        }
    }

    closeMobileMenu() {
        try {
            console.log('Closing mobile menu...');
            
            if (!this.sidebar || !this.sidebarOverlay || !this.mobileMenuToggle) {
                console.error('Cannot close mobile menu: elements not found');
                return;
            }

            // Force the classes to be removed
            this.sidebar.classList.remove('open');
            this.sidebarOverlay.classList.remove('active');
            this.mobileMenuToggle.classList.remove('active');
            
            // Force display styles directly
            setTimeout(() => {
                this.sidebarOverlay.style.display = 'none';
            }, 250); // Wait for transition
            this.sidebarOverlay.style.opacity = '0';
            this.sidebar.style.transform = 'translateX(-100%)';
            
            document.body.style.overflow = '';
            this.isMobileMenuOpen = false;
            
            console.log('Mobile menu closed successfully');
            
        } catch (error) {
            console.error('Error closing mobile menu:', error);
        }
    }

    bindEvents() {
        // Search functionality with debouncing
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', this.debounce((e) => {
            this.filterPoems(e.target.value);
        }, 300));

        // Sort functionality
        const sortSelect = document.getElementById('sortSelect');
        sortSelect.addEventListener('change', (e) => {
            this.sortPoems(e.target.value);
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Scroll to top
        const scrollTop = document.getElementById('scrollTop');
        scrollTop.addEventListener('click', () => {
            this.scrollToTop();
        });

        // Handle window scroll for scroll-to-top button
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 100));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.collapseAllCards();
                this.closeMobileMenu();
            }
            if (e.key === '/' && !e.target.matches('input, textarea')) {
                e.preventDefault();
                searchInput.focus();
            }
        });

        // Handle window resize
        window.addEventListener('resize', this.throttle(() => {
            this.handleResize();
        }, 250));
    }

    // Utility functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Animation on page load
    animateOnLoad() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        sidebar.style.transform = 'translateX(-100%)';
        mainContent.style.opacity = '0';
        
        setTimeout(() => {
            sidebar.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            sidebar.style.transform = 'translateX(0)';
            
            setTimeout(() => {
                mainContent.style.transition = 'opacity 0.6s ease';
                mainContent.style.opacity = '1';
            }, 200);
        }, 100);
    }

    // Search and filter
    filterPoems(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        if (term === '') {
            this.filteredPoems = [...this.poems];
        } else {
            this.filteredPoems = this.poems.filter(poem => 
                poem.title.toLowerCase().includes(term) ||
                poem.author.toLowerCase().includes(term) ||
                poem.content.toLowerCase().includes(term)
            );
        }
        
        this.renderPoems();
        this.updatePoemCount();
        this.animateSearchResults();
    }

    sortPoems(sortBy) {
        this.currentSort = sortBy;
        
        switch (sortBy) {
            case 'title':
                this.filteredPoems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'author':
                this.filteredPoems.sort((a, b) => a.author.localeCompare(b.author));
                break;
            case 'original':
                this.filteredPoems.sort((a, b) => a.id - b.id);
                break;
        }
        
        this.renderPoems();
        this.animateSearchResults();
    }

    renderPoems() {
        const grid = document.getElementById('poemsGrid');
        const noResults = document.getElementById('noResults');
        
        if (this.filteredPoems.length === 0) {
            grid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        // Create poems with staggered animation
        const poemsHTML = this.filteredPoems.map((poem, index) => 
            this.createPoemCard(poem, index)
        ).join('');
        
        grid.innerHTML = poemsHTML;
        
        // Re-attach event listeners to poem cards
        this.attachCardListeners();
    }

    createPoemCard(poem, index = 0) {
        const isExpanded = this.expandedCards.has(poem.id);
        const contentClass = isExpanded ? '' : 'poem-content--truncated';
        const cardClass = isExpanded ? 'poem-card poem-card--expanded' : 'poem-card';
        const expandHint = `<div class="poem-expand-hint" style="animation-delay: ${index * 0.1}s;"></div>`;
        
        return `
            <article class="${cardClass}" 
                     data-poem-id="${poem.id}" 
                     tabindex="0" 
                     role="button" 
                     aria-expanded="${isExpanded}"
                     style="animation-delay: ${index * 0.1}s;">
                <header class="poem-header">
                    <h3 class="poem-title">${this.escapeHtml(poem.title)}</h3>
                    <p class="poem-author">by ${this.escapeHtml(poem.author)}</p>
                </header>
                <div class="poem-content ${contentClass}">
                    ${this.escapeHtml(poem.content)}
                </div>
                ${expandHint}
            </article>
        `;
    }

    attachCardListeners() {
        const cards = document.querySelectorAll('.poem-card');
        
        cards.forEach(card => {
            const poemId = parseInt(card.dataset.poemId);
            
            // Click handler
            card.addEventListener('click', () => {
                this.toggleCard(poemId);
            });
            
            // Keyboard handler for accessibility
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleCard(poemId);
                }
            });

            // Add smooth hover effects
            card.addEventListener('mouseenter', () => {
                this.addHoverEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeHoverEffect(card);
            });
        });
    }

    toggleCard(poemId) {
        const card = document.querySelector(`[data-poem-id="${poemId}"]`);
        
        if (this.expandedCards.has(poemId)) {
            this.expandedCards.delete(poemId);
            this.animateCardCollapse(card);
        } else {
            this.expandedCards.add(poemId);
            this.animateCardExpand(card);
        }
        
        // Re-render with smooth transition
        setTimeout(() => {
            this.renderPoems();
        }, 150);
    }

    animateCardExpand(card) {
        card.style.transform = 'scale(1.02)';
        card.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.2)';
        setTimeout(() => {
            card.style.transform = '';
            card.style.boxShadow = '';
        }, 300);
    }

    animateCardCollapse(card) {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }

    addHoverEffect(card) {
        const hint = card.querySelector('.poem-expand-hint');
        if (hint) {
            hint.style.opacity = '1';
            hint.style.transform = 'translateY(0)';
        }
    }

    removeHoverEffect(card) {
        const hint = card.querySelector('.poem-expand-hint');
        if (hint && !card.classList.contains('poem-card--expanded')) {
            hint.style.opacity = '0';
            hint.style.transform = 'translateY(10px)';
        }
    }

    collapseAllCards() {
        this.expandedCards.clear();
        this.renderPoems();
    }

    // Theme management
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.setTheme(this.isDarkMode);
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    setTheme(isDark) {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('.nav-icon');
        const themeText = themeToggle.querySelector('.nav-text');
        
        if (isDark) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light Mode';
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark Mode';
        }

        // Animate theme transition
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }

    // Scroll management
    setupScrollToTop() {
        this.handleScroll();
    }

    handleScroll() {
        const scrollBtn = document.getElementById('scrollTop');
        const scrollY = window.scrollY;
        const screenHeight = window.innerHeight;
        
        if (scrollY > screenHeight * 2) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Utility functions
    updatePoemCount() {
        const countElement = document.getElementById('poemCount');
        if (countElement) {
            countElement.textContent = this.filteredPoems.length;
            
            // Animate number change
            countElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                countElement.style.transform = 'scale(1)';
            }, 200);
        }
    }

    animateSearchResults() {
        const cards = document.querySelectorAll('.poem-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    handleResize() {
        // Handle responsive behavior if needed
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            this.collapseAllCards();
        } else {
            this.closeMobileMenu();
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        new PoetrySanctuary();
        
        // Fade in the app
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Re-enable animations when page becomes visible
        document.body.style.animation = '';
    }
});

// Add some interactive easter eggs
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        // Secret poetry mode - adds subtle particle effects
        console.log('🌟 Poetry mode activated! ✨');
    }
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PoetrySanctuary;
}

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});