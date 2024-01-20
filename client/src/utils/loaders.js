import { getToken } from "./helpers/common"
import axios from "axios"

export async function quizLoader() {
  const res = await fetch(`/api/quizzes`)
  if (!res.ok) {
    throw new Error(`Failed to fetch quizzes: ${res.statusText}`);
  }
  return res.json()
}

export async function singleQuizLoader(quizId) {
  const res = await fetch(`/api/quizzes/${quizId}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch quiz: ${res.statusText}`);
  }
  return res.json()
}

export async function singleQuestionLoader(questionId) {
  const res = await fetch(`/api/questions/${questionId}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch question: ${res.statusText}`);
  }
  return res.json()
}

export async function profileLoader() {
  const res = await axios.get(`/api/users`, {
    validateStatus: () => true,
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
}) 
  return res.data
}