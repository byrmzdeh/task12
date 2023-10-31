const hesabla = (maas, ayliqodenis) => {
    const aylar = Math.floor(maas / ayliqodenis)
    let ayliq = ayliqodenis
    const qaliq = maas % ayliq
    let son = []

    for (let i = 1; i <= aylar; i++) {
        if (i === aylar) {
            ayliq = ayliq + qaliq
        }
        son.push(`${i}-ci ay ${ayliq}-manat `)
    }
    return son
}
const son = hesabla(140, 43)
console.log(son);





