const getAuthUser = async () => {
    return new Promise((resolve, reject) => {
        try {
           apiRequest(
                `/projects/${CONFIG.projectId}/auth/user`,
            ).then((response) => {
                resolve(response.data);
            }).catch(() => {
                localStorage.removeItem('token')
               location.href = "/login"
           })

        }
        catch (error) {
            reject(error)
        }
    })
}