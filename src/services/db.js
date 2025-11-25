export const saveUserToDB = (user) => {
  try {
    // Get existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem("users_db")) || [];

    // Add new user (excluding confirmPassword and checked)
    const newUser = {
      id: Date.now(), // Simple ID generation
      name: user.name,
      email: user.email,
      password: user.password, // In a real app, this should be hashed!
      createdAt: new Date().toISOString(),
    };

    existingUsers.push(newUser);

    // Save back to LocalStorage
    localStorage.setItem("users_db", JSON.stringify(existingUsers));

    return { success: true };
  } catch (error) {
    console.error("Error saving to DB:", error);
    return { success: false, error };
  }
};

export const checkEmailExists = (email) => {
  const existingUsers = JSON.parse(localStorage.getItem("users_db")) || [];
  return existingUsers.some((user) => user.email === email);
};

export const authenticateUser = (email, password) => {
  try {
    const existingUsers = JSON.parse(localStorage.getItem("users_db")) || [];
    const user = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Save current user session (without password for security)
      const userSession = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      };
      localStorage.setItem("current_user", JSON.stringify(userSession));
      return { success: true, user: userSession };
    }

    return { success: false, message: "Credenciales inválidas" };
  } catch (error) {
    console.error("Error authenticating user:", error);
    return { success: false, message: "Error al autenticar" };
  }
};

export const getCurrentUser = () => {
  try {
    const currentUser = localStorage.getItem("current_user");
    return currentUser ? JSON.parse(currentUser) : null;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("current_user");
};
