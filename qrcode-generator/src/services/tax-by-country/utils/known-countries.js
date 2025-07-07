
const deliveryFeesByCountry = [
    ["Alemanha", 0.19],
    ["Brasil", 0.2],
    ["China", 0.13],
    ["Estados Unidos", 0.15],
    ["Rússia", 0.2],
]

async function getKnownFeesByCountry() {
    const knownCountries = deliveryFeesByCountry.map(([country, fee]) => ({
        country: country,
        fee: `${fee * 100}%`
    }));

    return knownCountries;
}

export default getKnownFeesByCountry;