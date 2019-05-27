import users from '../data/user.json';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERR0R = 'LOGIN_ERROR';

// const initialState = {
//     user:[
//         {
//             firstName: "Kevin",
//             lastName: "Wang",
//             email: "itkevinwxy@gmail.com",
//             password: "123456",
//             phoneNumber: "123456789",
//             address: "123 yonge st",
//             avatar: "Yes"
//         }
//     ]
// }

function setLoginPending(isLoginPending){
    return{
        type: LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess){
    return{
        type:LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(isLoginError){
    return{
        type:LOGIN_ERR0R,
        isLoginError
    };
}

export function logOut(){
    return dispatch => {
        dispatch(setLoginSuccess(false));
    }
}

export function login(email,password){
    return dispatch =>{
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(false));

        sendLoginCredit(email, password)
            .then(success => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
                dispatch(setLoginError(false));
            })
            .catch(err => {
                dispatch(setLoginSuccess(false));
                dispatch(setLoginPending(false));
                dispatch(setLoginError(true));
            });
    };
}

function sendLoginCredit(email, password){
    return new Promise((resolve,reject) => {

        if(email === "" || password === "")
        {
            return reject(new Error('Invalid email or password'));
        }
        else
        {
            const findUser = users.user.find(u => u.email === email) && users.user.find(u => u.password === password)

            if(findUser)
            {
                return resolve(true);
            }
            else
            {
                return reject(new Error('Invalid email or password'));
            }
        }
    })
}

export default function reducer (state = {
    isLoginPending:false,
    isLoginSuccess:false,
    isLoginError:false
},action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }
        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending: action.isLoginPending
            }
        case LOGIN_ERR0R:
            return{
                ...state,
                isLoginError: action.isLoginError
            }
        default:
            return state;
    }
}


