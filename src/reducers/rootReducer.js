const intialState = {
    url: `http://newsapi.org/v2/everything?q=Tech&apiKey=41d85d23b2f640b0892f12ae01b9a373`
}

function rootReducer(state = intialState, action){
    switch(action.type){
        case 'UPDATE_URL':
            return {url: action.url};

        default: 
            return state;
    }
}

export default rootReducer;
