import "../index.css"


export default function UserInput (){
    return (
        
            
            <section id="user-input" >
                <div className="input-group">
                    <p><label htmlFor="initial">Initial Investment</label>
                    <input type="text" id="initial" /></p>
                    <p><label htmlFor="annual">Annual Investment</label>
                    <input type="text" id="annual"/></p>
                </div>
                <div className="input-group"><p><label htmlFor="expected">Expected Return</label>
                    <input type="text" id="expected"/></p>
                    <p><label htmlFor="duration">Duration</label>
                    <input type="text" id="duration"/></p>
                </div>
                    
                
                
                
            </section>
                
                
       
    )
}