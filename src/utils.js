export const generateUniqueId = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const timestamp = Date.now();
    const uniqueId = `${timestamp}-${randomNumber}`;

    return uniqueId;
};
