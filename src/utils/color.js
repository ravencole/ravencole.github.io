export default function getRandomColor() {
    return Array.apply(null, Array(3)).reduce((a,b) => {
        return a.replace(':color', Math.floor(Math.random() * (255+1)))
    }, 'rgb(:color,:color,:color)')
}