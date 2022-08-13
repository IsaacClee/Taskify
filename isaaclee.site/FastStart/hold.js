document.getElementById('button').addEventListener('click', loadCustomers);
document.getElementById('fileinput').addEventListener('change', readSingleFile, false);


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



const associates = JSON.parse(this.responseText);
            shuffleArray(associates);

            let STOW = '';
            let numSTOW = document.getElementById('numSTOW').value;
            let PICK = '';   
            let numPICK = document.getElementById('numPICK').value;         
            let IBDOCK = '';
            let numIBDOCK = document.getElementById('numIBDOCK').value;
            let OBDOCK = '';
            let numOBDOCK = document.getElementById('numOBDOCK').value;
            let ICQA = '';
            let PS = '';

            let remainder = document.getElementById('OVERFLOW').value;
            let ASK = '';
            let overflow = '';
            let singleAssign;
            let multAssign = [];

            console.log(numOBDOCK);


            ///////////////////////CRITCAL ROLES//////////////////////////////////////////

            ////ICQA////
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "RODEO") {
                    singleAssign = associates.splice(i, 1);
                    ICQA += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">Rodeo + IOL</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "RODEO") {
                    singleAssign = associates.splice(i, 1);
                    ICQA += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">Rodeo + IOL</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "ICQA") {
                    singleAssign = associates.splice(i, 1);
                    ICQA += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">Missing Items</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "ICQA") {
                    singleAssign = associates.splice(i, 1);
                    ICQA += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">Missing Items</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "RODEO") {
                    singleAssign = associates.splice(i, 1);
                    ICQA += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">Audits</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "RODEO") {
                    singleAssign = associates.splice(i, 1);
                    ICQA += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">Audits</div>
                    </div>
                    `
                    break;
                }
            }
            
            ////PS////
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "PS") {
                    singleAssign = associates.splice(i, 1);
                    PS += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">PS Stow</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "PS") {
                    singleAssign = associates.splice(i, 1);
                    PS += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">PS Area</div>
                    </div>
                    `
                    break;
                }
            }
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "PS") {
                    singleAssign = associates.splice(i, 1);
                    PS += `
                    <div class="row">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">PS Dock</div>
                    </div>
                    `
                    break;
                }
            }            
            
            ////IB DOCK////
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "PIT") {
                    singleAssign = associates.splice(i, 1);
                    IBDOCK += `
                    <div class="row crit-role">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">PIT</div>
                    </div>
                    <div class="spacer"></div>
                    `
                    break;
                }
            }

            ////OB DOCK////
            for(let i = 0; i < associates.length; i++) {
                if(associates[i]["Role"] === "TDR") {
                    singleAssign = associates.splice(i, 1);
                    OBDOCK += `
                    <div class="row crit-role">
                    <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                    <div class="list-item">${singleAssign[0]["User ID"]}</div>
                    <div class="list-item">TDR</div>
                    </div>
                    <div class="spacer"></div>
                    `
                    break;
                }
            }


            //////////////////////////BULK ASSIGNMENTS////////////////////////////////////


            ////IB DOCK////

            for (let i = 0; i < numIBDOCK; i++) {
                for(let i = 0; i < associates.length; i++) {
                    if(associates[i]["Role"] === "DOCK") {
                        singleAssign = associates.splice(i, 1);
                        IBDOCK += `
                        <div class="row">
                        <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                        <div class="list-item">${singleAssign[0]["User ID"]}</div>
                        <div class="list-item">IB DOCK</div>
                        </div>
                        `
                        break;
                    }
                }
            } 
            multAssign = [];  
          

            ////OB DOCK////
            
            for (let i = 0; i < numOBDOCK; i++) {
                for(let i = 0; i < associates.length; i++) {
                    if(associates[i]["Role"] === "DOCK") {
                        singleAssign = associates.splice(i, 1);
                        OBDOCK += `
                        <div class="row">
                        <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                        <div class="list-item">${singleAssign[0]["User ID"]}</div>
                        <div class="list-item">OB DOCK</div>
                        </div>
                        `
                        break;
                    }
                }
            } 
            multAssign = [];  
          

            ////STOW////
            
            for (let i = 0; i < numSTOW; i++) {
                multAssign.push(associates.splice(i, 1));
            }            
          
            multAssign.forEach(function(assign){
                STOW += `
                <div class="row">
                <div class="list-item">${assign[0]["Employee Name"]}</div>
                <div class="list-item">${assign[0]["User ID"]}</div>
                <div class="list-item">STOW</div>
                </div>
               `
            });
            multAssign = [];

            ////PICK////
            
            for (let i = 0; i < numPICK; i++) {
                multAssign.push(associates.splice(i, 1));
            }            
            multAssign.forEach(function(assign){
                PICK += `
                <div class="row">
                <div class="list-item">${assign[0]["Employee Name"]}</div>
                <div class="list-item">${assign[0]["User ID"]}</div>
                <div class="list-item">PICK</div>
                </div>
               `
            });
            multAssign = [];

       

            ////REMAINDER////

            associates.forEach(function(assign){
                overflow += `
                <div class="row">
                <div class="list-item">${assign["Employee Name"]}</div>
                <div class="list-item">${assign["User ID"]}</div>
                <div class="list-item">${remainder}</div>
                </div>
                `;
            });

            //DOM Placements
            document.getElementById('STOW').innerHTML = STOW;
            document.getElementById('PICK').innerHTML = PICK;
            document.getElementById('IBDOCK').innerHTML = IBDOCK;
            document.getElementById('OBDOCK').innerHTML = OBDOCK;
            document.getElementById('ICQA').innerHTML = ICQA;
            document.getElementById('PS').innerHTML = PS;
            document.getElementById('ASK').innerHTML = ASK;
            document.getElementById(remainder).innerHTML = overflow;