require('./styles/styles.scss')

const PROGRESS_BARS = Array.prototype.slice.call(document.querySelectorAll(`.progress-bar`)),
      BOX_AMOUNT = window.innerWidth/2

for(let i = 0; i < BOX_AMOUNT; i++) {
    PROGRESS_BARS.map(e => 
        setTimeout(_ => e.appendChild(buildBox()), i*8)
    )

    if (i === BOX_AMOUNT - 1) {
        setTimeout(_ => buildContactInfo(), i*4)
    }
}
const buildBox = () => {
    const BOX = document.createElement('div')
    BOX.classList.add('box')
    BOX.style.backgroundColor = randomColor()
    return BOX
}

const buildContactInfo = () => {
    const HEADING = document.getElementById(`heading`),
          CONTACT_INFO = `Raven Stayton Cole ~ ravenscole@gmail.com`

    HEADING.innerHTML = ``
    CONTACT_INFO
        .split('')
        .map(l => {
            const SPAN = document.createElement('span'),
                  TEXT = document.createTextNode(l),
                  STYLES = {
                    // margin: `0 12px`
                    // boxShadow: `0 0 20px ${randomColor()}`
                  }

            // Object.keys(STYLES).map(s => SPAN.style[s] = STYLES[s])

            SPAN.appendChild(TEXT)
            HEADING.appendChild(SPAN)
        })
}

const randomColor = () => {
    return [...Array(3)].reduce(a => {
        return a.replace(/:color/, Math.floor(Math.random()*256))
    }, `rgb(:color,:color,:color)`)
}
