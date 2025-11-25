export const saveUserToDB = (user) => {
    try {
        // Get existing users or initialize empty array
        const existingUsers = JSON.parse(localStorage.getItem('users_db')) || [];
        
        // Add new user (excluding confirmPassword and checked)
        const newUser = {
            id: Date.now(), // Simple ID generation
            name: user.name,
            email: user.email,
            password: user.password, // In a real app, this should be hashed!
            createdAt: new Date().toISOString()
        };

        existingUsers.push(newUser);

        // Save back to LocalStorage
        localStorage.setItem('users_db', JSON.stringify(existingUsers));
        
        return { success: true };
    } catch (error) {
        console.error("Error saving to DB:", error);
        return { success: false, error };
    }
};

export const checkEmailExists = (email) => {
    const existingUsers = JSON.parse(localStorage.getItem('users_db')) || [];
    return existingUsers.some(user => user.email === email);
};
