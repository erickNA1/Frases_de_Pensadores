const texts = document.querySelectorAll('.slide-up')

observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'slide .6s ease-in';
        }
    })
})

texts.forEach(text => {
    observer.observe(text)
})