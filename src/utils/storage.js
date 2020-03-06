export const getChirps = () => {
    let test =localStorage.getItem('chirps');
    let demChirps = JSON.parse(test)
    if (demChirps) {
        return demChirps;
    } else {
        return ({chirps: [{username:'Luke', message: 'May The Force be With You.'}]})
    }
    
}

export const setNewChirps =chirps => {
    const data = JSON.stringify(chirps);
    localStorage.setItem('chirps', data)
    
}