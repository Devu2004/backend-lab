import {config} from 'dotenv'
import { ChatGroq } from "@langchain/groq"
import { PromptTemplate } from '@langchain/core/prompts'
config();


const model = new ChatGroq({
    model:'llama-3.3-70b-versatile',
    apiKey:process.env.GROQ_API_KEY
})

const template = PromptTemplate.fromTemplate("Explain {topic} in very simple way like ELI5, make sure include core concepts and avoid unnecessary Jargons make the answer concise as possible")


// inovoke -> method is used to inovoke the model 
// model.invoke('who are you').then(res =>console.log(res.content))

const chain = template.pipe(model)
const inovoke = chain.invoke({topic:'healthy relationship'}).then(res=> console.log(res.content))

// template.pipe(model).invoke({topic:'langchain'}).then(res=> console.log(res.content))