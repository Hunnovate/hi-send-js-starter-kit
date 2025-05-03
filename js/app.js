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

const confirmLogout = () => {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
        logout();
    }
};