const intialState = {
<<<<<<< HEAD
    url: `https://gnews.io/api/v4/search?q=tech&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`,
=======
    url: `https://gnews.io/api/v4/search?q=ai&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`,
>>>>>>> 21c4be03b47511a07f4b2b8fa7827bfefd527ad5
    article: ''
}

function rootReducer(state = intialState, action){
    switch(action.type){
        case 'UPDATE_URL':
            return {...state,
                url: action.url};
        case 'UPDATE_ARTICLE':
            return {...state,
                article: action.article
            }

        default: 
            return state;
    }
}

export default rootReducer;
