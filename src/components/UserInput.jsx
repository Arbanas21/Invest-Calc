import "../index.css"


export default function UserInput ({userInput, onChange}){


    return (    
            <section id="user-input" >
                <div className="input-group">
                    <p>
                        <label htmlFor="initial">Initial Investment</label>
                        <input type="number" id="initial" required 
                        value={userInput.initialInvestment}
                        onChange={(event)=>onChange("initialInvestment", event.target.value)}/>
                    </p>

                    <p>
                        <label htmlFor="annual">Annual Investment</label>
                        <input type="number" id="annual" required
                        value={userInput.annualInvestment}
                        onChange={(event)=>onChange("annualInvestment", event.target.value)}/>
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected">Expected Return</label>
                        <input type="number" id="expected" required
                        value={userInput.expectedReturn}
                        onChange={(event)=>onChange("expectedReturn", event.target.value)}/>
                    </p>

                    <p>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" required
                        value={userInput.duration}
                        onChange={(event)=>onChange("duration", event.target.value)}/>
                    </p>
                </div>
                    
                
                
                
            </section>
                
                
       
    )
}