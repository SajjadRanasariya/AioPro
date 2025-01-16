import mongoose from "mongoose";
import GreetingCard from '../models/greetingCard'

export const allGreetingCard = async (query) => {
    return await GreetingCard.find(query);
};

export const oneGreetingCard = async (id) => {
    return await GreetingCard.findById(id);
};

export const addGreetingCard = async (card) => {
    return await GreetingCard.create(card);
};

export const editGreetingCard = async (greetingCard) => {
    return await GreetingCard.findByIdAndUpdate(greetingCard._id, greetingCard);
};

export const deleteOne = async (id) => {
    return await GreetingCard.findOneAndRemove({ _id: id });
};

export const deleteMany = async (greetingCardIds) => {
    // Check if opdIds is an array
    if (!Array.isArray(greetingCardIds) || greetingCardIds.length === 0) {
        console.error("greetingCardIds is not a valid array of ObjectIds");
        return; // Exit the function gracefully
    }

    const deletionCriteria = {
        _id: { $in: greetingCardIds.map((id) => mongoose.Types.ObjectId(id)) },
    };

    try {
        const result = await GreetingCard.deleteMany(deletionCriteria);
        return result;
    } catch (err) {
        console.error(err);
        throw err; // Re-throw the error to be handled by the caller if needed
    }
};
