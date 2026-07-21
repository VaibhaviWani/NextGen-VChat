import { Fragment } from "react"
import './TranslationDemo.css'

interface DemoMessage {
    id: number;
    sender: string;
    language: string;
    message: string;
    alignment: "left" | "right"
}

const demoMessages: DemoMessage[] = [
    { id: 1, sender: "Vaibhavi", language: "🇮🇳 Gujarati", message: "કાલે સવારે 10 વાગ્યે મીટિંગ રાખજો.", alignment: "left" },
    { id: 2, sender: "✨ NextGen AI", language: "🇺🇸 English", message: "Schedule the meeting tomorrow at 10:00 AM.", alignment: "right" },
    { id: 3, sender: "Alex", language: "🇺🇸 English", message: "Perfect! I'll be there on time.", alignment: "left" },
    { id: 4, sender: "✨ NextGen AI", language: "🇮🇳 Gujarati", message: "બરાબર! હું સમયસર આવી જઈશ.", alignment: "right" }
]

function TranslationDemo (){
    return (
        <section className="translationDemo">
            <div className="translationDemoHeader">
                <span className="translationDemoBadge">
                    Translation Demo
                </span>
                <h2 className="translationDemoTitle">
                    See AI In Action
                </h2>
                <p className="translationDemoDescription">
                    Experience real-time multilingual communication powered by NextGen-VChat AI.
                </p>
            </div>
            <div className="translationDemoChat">
                {demoMessages.map((demoMessage, index) => (
                    <Fragment key={demoMessage.id}>
                        <div className={`translationDemoDetails ${demoMessage.alignment}`}>
                            <div className="translationDemoInfo">
                                <span className="translationDemoLanguage">
                                    {demoMessage.language}
                                </span>
                                <span className="translationDemoSender"> 
                                    {demoMessage.sender}
                                </span>
                            </div>
                            <p className="translationDemoMessage">
                                {demoMessage.message}
                            </p>
                        </div>

                        {index < demoMessages.length - 1 && (
                            <div className="translationDemoDivider">
                                ✨ NextGen AI
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
            <div className="translationDemoFlow">
                <p className="translationDemoFlowTitle">
                    🌍 Translation Flow
                </p>

                <p className="translationDemoFlowLanguage">
                    🇮🇳 Gujarati
                </p>

                <p className="translationDemoArrow">
                    ↓
                </p>

                <p className="translationDemoFlowLanguage">
                    ✨ NextGen AI
                </p>

                <p className="translationDemoArrow">
                    ↓
                </p>

                <p className="translationDemoFlowLanguage">
                    🇺🇸 English
                </p>
            </div>
        </section>
    )
}

export default TranslationDemo