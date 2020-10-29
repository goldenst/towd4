
# MESSAGES
    1. Not All messages display correctley  get  server error not message error


# DELETE USERS
    1. Deleting users  get DELETE_USER_FAIL but user is deleted in back end

      Message:  Error: Request failed with status code 500
                at createError (createError.js:16)
                at settle (settle.js:17)
                at XMLHttpRequest.handleLoad (xhr.js:69)


# servicelistScreen
    in use effect 

     useEffect(() => {
    dispatch({ type: SERVICES_CREATE_RESET });

    --------if (!userinfo.isAdmin) --- get error that user info is not defined 
    if (!userInfo) {
      history.push('/login');
    }