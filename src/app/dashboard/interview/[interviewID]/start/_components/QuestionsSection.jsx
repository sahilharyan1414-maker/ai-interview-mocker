import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
    const textToSpeech = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Your browser does not support text-to-speech');
        }
    }

    return mockInterviewQuestion && (
        <div className='p-5 border rounded-lg my-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => {

                    return (
                        <h2 key={index} className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
                               ${activeQuestionIndex === index
                                ? 'bg-blue-950 text-white'
                                : 'bg-gray-300'
                            }
                            `}>Question #{index + 1}</h2>


                    )
                })}

            </div>
            <h2 className="my-5 text-md md:text-lg">{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>

            <Volume2 className='cursor-pointer hover:text-green-500' onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)} />

            <div className="border rounded-lg bg-blue-100 mt-20 p-2">
                <h2 className='flex gap-2 items-center text-blue-950'>
                    <Lightbulb />
                    <strong>Note:</strong>
                </h2>
                <h2 className="text-sm text-blue-950 my-2">Click on Record Answwer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each of question and your answer to compare it.
                </h2>

            </div>
        </div>
    )
}

export default QuestionsSection