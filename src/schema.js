/*

In this file, we will define the schema or typeDefs for graphQL

*/
const typeDefs = `

type Question { 
    userId: String,
    id: Int,
    text: String,
    createdAt: String,
    updatedAt: String,
    answers: [Answer],
    user: User,
}

input QuestionInput { 
    userId: String!,
    text: String!,
    createdAt: String,
    updatedAt: String
}


type Answer {
    userId: String,
    questionId: Int,
    id: Int,
    updatedAt: String,
    createdAt: String,
    text: String,
    user: User
    votes: [Vote]
}

input AnswerInput {
    userId: String,
    questionId: Int,
    text: String,
}

type Vote {
    id: Int,
    action: String,
    userId: String,
    answerId: Int,
    createdAt: String,
    updatedAt: String,
    answer: Answer,
    
}


input VoteInput {
    action: String,
    userId: String,
    answerId: Int,
    questionId: Int,
}

type User {
    id: String,
    password: String,
    username: String,
    createdAt: String,
    updatedAt: String,
    answers: [Answer],
    questions: [Question],
    votes: [Vote],
}


type AuthedUser {
    
    id: String,
    username: String,
    token: String,
}
input UserInput {
    id: String,
    password: String,
    username: String,
}


type RootQuery {
    questions: [Question] ,
    answers: [Answer],
    users: [User],
    findUserByUsername(username: String): User,
   
    findQuestionById(id: Int!): Question,
    getLatestQuestions: [Question],
    verifyUser(username: String, password: String): AuthedUser,
   
}

type RootMutation {
    addVote(vote: VoteInput): Vote ,
    askQuestion(question: QuestionInput): Question ,
    answerQuestion(answer: AnswerInput): Answer ,
    createNewUser(user: UserInput): User,
}

schema {
    query: RootQuery,
    mutation: RootMutation,
   
}



`;


module.exports = [typeDefs];
