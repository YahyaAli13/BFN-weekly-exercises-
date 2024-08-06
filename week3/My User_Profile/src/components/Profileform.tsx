const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const updatedUser: User = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        profilePicture: formData.get('profilePicture') as string,

    };
    await updatedUser(updatedUser);


return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" defaultValue={user.name} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" defaultValue={user.email} />
        </div>
        <div>
            <label>Profile Picture URL:</label>
            <input type="text" name="profilePicture" defaultValue={user.profilePicture} />
        </div>
        <button type="submit">Update Profile</button>
    </form>
);

};