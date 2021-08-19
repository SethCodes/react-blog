const intialState = {
    url: `https://gnews.io/api/v4/search?q=ai&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`,
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
