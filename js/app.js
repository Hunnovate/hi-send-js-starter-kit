const getAuthUser = async () => {
    return new Promise((resolve, reject) => {
        try {
           apiRequest(
                `/projects/${CONFIG.projectId}/auth/user`,
            ).then((response) => {
                resolve(response.data);
            }).catch(() => {
                localStorage.removeItem('token')
               location.href = "/login.html"
           })

        }
        catch (error) {
            reject(error)
        }
    })
}

const logout = async () => {
    await apiRequest(`/projects/${CONFIG.projectId}/auth/logout`, "POST");
    localStorage.removeItem("token");
    window.location.href = "/login.html";
  };

const confirmLogout = () => {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
        logout();
    }
};

