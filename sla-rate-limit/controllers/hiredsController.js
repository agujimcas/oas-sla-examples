export function getHireds(_, res) {
    res.send([{
        "year": 2011,
        "province": "Sevilla"
    }])
}

export function findByyear(_, res) {
    res.send({
        "year": 2011,
        "province": "Sevilla"
    })
}



