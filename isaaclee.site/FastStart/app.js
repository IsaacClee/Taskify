  document.getElementById('button').addEventListener('click', loadCustomers);

document.getElementById('hideBtn').addEventListener('click', function(){
    document.getElementById('control').classList.toggle('hide');
});



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


//LOAD customers
function loadCustomers(evt){
    var f = document.getElementById('fileinput').files[0]; 
    if (f) {
                           
      var r = new FileReader();
      r.onload = function(e) { 
        const result = e.target.result;
        let associates = JSON.parse(test.JSON);
        shuffleArray(associates);
        console.log(associates);
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
        let HC = '';

        let DA5 = document.getElementById('DA5').checked;
        let DA6 = document.getElementById('DA6').checked;
        let DC1 = document.getElementById('DC1').checked;
        let DC7 = document.getElementById('DC7').checked;
        let DB1 = document.getElementById('DB1').checked;
        let DB2 = document.getElementById('DB2').checked;

        let VTO = document.getElementById('VTO');

        VTO = VTO.value.split(/\n/);


        ////////////////////////FILTER OUT VTO////////////////////////////////////////

        for (let i = 0; i < VTO.length; i++) {
            associates = associates.filter(function(e){ return e["Employee ID"] != VTO[i]});            
        }


        console.log(VTO);

        
        ////////////////////////FILTER BY SHIFT///////////////////////////////////////

        if(DA5 !== true){
            associates = associates.filter(function(e){ return e["Shift Pattern"] !== "DA5-0700"});
        }
        if(DA6 !== true){
            associates = associates.filter(function(e){ return e["Shift Pattern"] !== "DA6-0700"});
        }
        if(DC1 !== true){
            associates = associates.filter(function(e){ return e["Shift Pattern"] !== "DC1-0700"});
        }
        if(DC7 !== true){
            associates = associates.filter(function(e){ return e["Shift Pattern"] !== "DC7-0700"});
        }
        if(DB1 !== true){
            associates = associates.filter(function(e){ return e["Shift Pattern"] !== "DB1-0700"});
        }
        if(DB2 !== true){
            associates = associates.filter(function(e){ return e["Shift Pattern"] !== "DB2-0700"});
        }

        
        ////////////////////////SET ENVIROMENT////////////////////////////////////////
        HC = `Total HeadCount: ${associates.length}`;

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

        ////Gate Keepers////
        for(let i = 0; i < associates.length; i++) {
            if(associates[i]["Role"] == "") {
                singleAssign = associates.splice(i, 1);
                PICK += `
                <div class="row crit-role">
                <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                <div class="list-item">${singleAssign[0]["User ID"]}</div>
                <div class="list-item">GateKeeper 400-500</div>
                </div>
                <div class="spacer"></div>
                `
                break;
            }
        }

        for(let i = 0; i < associates.length; i++) {
            if(associates[i]["Role"] == "") {
                singleAssign = associates.splice(i, 1);
                PICK += `
                <div class="row crit-role">
                <div class="list-item">${singleAssign[0]["Employee Name"]}</div>
                <div class="list-item">${singleAssign[0]["User ID"]}</div>
                <div class="list-item">GateKeeper 100-200</div>
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
        multAssign.sort(function(a, b){
            var nameA = a[0]["Employee Name"].toLowerCase(), nameB = b[0]["Employee Name"].toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        })
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
        multAssign.sort(function(a, b){
            var nameA = a[0]["Employee Name"].toLowerCase(), nameB = b[0]["Employee Name"].toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        })
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

        associates.sort(function(a, b){
            var nameA = a["Employee Name"].toLowerCase(), nameB = b["Employee Name"].toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        })

        console.log(remainder)

        if(remainder == 'PICK'){
            associates.forEach(function(assign){
                    PICK += `
                    <div class="row">
                    <div class="list-item">${assign["Employee Name"]}</div>
                    <div class="list-item">${assign["User ID"]}</div>
                    <div class="list-item">PICK</div>
                    </div>
                    `;        
            });
        }
        if(remainder == 'STOW'){
            associates.forEach(function(assign){
                    STOW += `
                    <div class="row">
                    <div class="list-item">${assign["Employee Name"]}</div>
                    <div class="list-item">${assign["User ID"]}</div>
                    <div class="list-item">STOW</div>
                    </div>
                    `;        
            });
        }
        if(remainder == 'ASK'){
            associates.forEach(function(assign){
                    ASK += `
                    <div class="row">
                    <div class="list-item">${assign["Employee Name"]}</div>
                    <div class="list-item">${assign["User ID"]}</div>
                    <div class="list-item">ASK</div>
                    </div>
                    `;        
            });
        }


        //DOM Placements
        document.getElementById('STOW').innerHTML = STOW;
        document.getElementById('PICK').innerHTML = PICK;
        document.getElementById('IBDOCK').innerHTML = IBDOCK;
        document.getElementById('OBDOCK').innerHTML = OBDOCK;
        document.getElementById('ICQA').innerHTML = ICQA;
        document.getElementById('PS').innerHTML = PS;
        document.getElementById('ASK').innerHTML = ASK;
        document.getElementById('HC').innerHTML = HC;
        
    
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
    var reader = new FileReader();

      reader.onload = function(e) {
        var dataURL = reader.result;
      }

}