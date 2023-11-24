// GET Search
export const fetchMovies = async (title: string) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=64405bd2&s=${title}`);
        if (!response.ok) {
            throw new Error('error get');
        }
        const result = await response.json();
        return result;
    } catch (er) {
        console.error('getSearchMovieTitle error: ' + er);
    }
}

// GET id
export const getMovieId = async (id: string) => {
    try {
        debugger
        const response = await fetch(`https://www.omdbapi.com/?apikey=64405bd2&i=${id}`);
        if (!response.ok) {
            throw new Error('error get');
        }
        const result = await response.json();
        return result;
    } catch (er) {
        console.error('getMovieId error: ' + er);
    }
}